#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*24.0)+1.0)*x); }

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                        -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i); // Avoid truncation effects in permutation
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));

    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float level(vec2 st) {
    float n = 0.0;
    for (float i = 1.0; i < 8.0; i ++) {
        float m = pow(1.3, i);
        n += snoise(st * m) * (1.0 / m);
    }
    return n * 0.5 + 1.6;
}

vec3 normal(vec2 st) {
    float d = 0.0021;
    float l0 = level(st);
    float l1 = level(st + vec2(d, 0.0)); // slightly offset the x-coord
    float l2 = level(st + vec2(0.0, d)); // slightly offset the y-coord
    // return normalized vector perpendicular to the surface using the noise values as the elevation of these points
    return normalize(vec3(-(l1 - l0), -(l2 - l0), d));
}

//https://en.wikipedia.org/wiki/Phong_reflection_model
vec3 phong(vec2 st, vec3 normal, vec3 lightPos) {
    vec3 lightDir = normalize(vec3(lightPos - vec3(st, 0.0)));
    float diffuse = max(0.0, dot(normal, lightDir));
    vec3 vReflection = normalize(reflect(-lightDir, normal));
    float specular = pow(max(0.0, dot(normal, vReflection)), 12.0);

    vec3 ambientColor = vec3(0.007,0.134,0.275);
    vec3 diffuseColor = vec3(0.472,0.019,0.500);

		if (u_Time > 112000.0){
			ambientColor =vec3(0.275,0.100,0.182);
    diffuseColor = vec3(0.472,0.019,0.500);
		}
    return min(vec3(1.0), ambientColor + diffuseColor * diffuse + specular);
}


void main() {

	vec2 st = gl_FragCoord.xy / u_Dimensions.xy;
	st.x *= u_Dimensions.x / u_Dimensions.y;
    float t = u_Time / 1000.0;
    vec3 col = phong(st, normal(st), vec3(sin(t * 5.23) * 0.5 + 0.5, sin(t * 10.46) * 0.8 + 0.5, 1.0));


    // water if the elevation is less than a threshold
    float n = level(st);
    if (n < 0.2) {col = vec3(0.0, 0.0, 0.8);}
    out_Col = vec4(col, 1.0);





}
