#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

float smoothedge(float v) {
    return smoothstep(0.0, 1.0 / u_Dimensions.x, v);
}

float circle(vec2 p, float radius) {
  return length(p) - radius;
}

float rect(vec2 p, vec2 size) {
  vec2 d = abs(p) - size;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0));
}

float roundRect(vec2 p, vec2 size, float radius) {
  vec2 d = abs(p) - size;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))- radius;
}

float ring(vec2 p, float radius, float width) {
  return abs(length(p) - radius * 0.5) - width;
}

float hexagon(vec2 p, float radius) {
    vec2 q = abs(p);
    return max(abs(q.y), q.x * 0.866025 + q.y * 0.5) - radius;
}

float triangle(vec2 p, float size) {
    vec2 q = abs(p);
    return max(q.x * 0.866025 + p.y * 0.5, -p.y * 0.5) - size * 0.5;
}

float ellipse(vec2 p, vec2 r, float s) {
    return (length(p / r) - s);
}

float capsule(vec2 p, vec2 a, vec2 b, float r) {
    vec2 pa = p - a, ba = b - a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h ) - r;
}

//http://thndl.com/square-shaped-shaders.html
float polygon(vec2 p, int vertices, float size) {
    float a = atan(p.x, p.y) + 0.2;
    float b = 6.28319 / float(vertices);
    return cos(floor(0.5 + a / b) * b - a) * length(p) - size;
}

float ground(){
    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;
    float d = 1.0;
    d = min(d, rect(st - vec2(0.5, 0.15), vec2(0.9, 0.20)));
    return d;
}

float fork(){
    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;
    float d = 1.0;

    d = min(d, rect(st - vec2(0.170,0.450), vec2(0.005, 0.20)));
    d = min(d, rect(st - vec2(0.160,0.650), vec2(0.055, 0.005)));
    d = min(d, rect(st - vec2(0.210,0.725), vec2(0.005, 0.08)));
    d = min(d, rect(st - vec2(0.110,0.750), vec2(0.005, 0.10)));

    //thingy 2

    d = min(d, rect(st - vec2(0.380,0.450), vec2(0.005, 0.120)));
    d = min(d, rect(st - vec2(0.370,0.570), vec2(0.045, 0.005)));
    d = min(d, rect(st - vec2(0.410,0.630), vec2(0.005, 0.06)));
    d = min(d, rect(st - vec2(0.330,0.67), vec2(0.005, 0.10)));

    //thingy 3

    d = min(d, rect(st - vec2(0.610,0.4370), vec2(0.005, 0.230)));
    d = min(d, rect(st - vec2(0.600,0.670), vec2(0.045, 0.005)));
    d = min(d, rect(st - vec2(0.640,0.730), vec2(0.005, 0.06)));
    d = min(d, rect(st - vec2(0.560,0.750), vec2(0.005, 0.08)));

    //thingy 4
    d = min(d, rect(st - vec2(0.850,0.360), vec2(0.005, 0.230)));
    d = min(d, rect(st - vec2(0.840,0.590), vec2(0.085, 0.008)));
    d = min(d, rect(st - vec2(0.920,0.790), vec2(0.005, 0.2)));
    d = min(d, rect(st - vec2(0.760,0.730), vec2(0.005, 0.14)));

    //thingy 5
    d = min(d, rect(st - vec2(0.250,0.470), vec2(0.003, 0.070)));
    d = min(d, rect(st - vec2(0.2450,0.540), vec2(0.035, 0.003)));
    d = min(d, rect(st - vec2(0.2150,0.5800), vec2(0.005, 0.04)));
    d = min(d, rect(st - vec2(0.275,0.620), vec2(0.005, 0.08)));
    return d;
}

float shadow(){

    float d = 1.0;
    vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

    d = min(d, capsule(st - vec2(0.135,0.485), vec2(-0.380 + cos(u_Time / 1000.0),-0.390), vec2(0.030,-0.240), 0.01));
    d = min(d, capsule(st - vec2(0.570,0.450), vec2(-0.290 + cos(u_Time / 1000.0),-0.450), vec2(0.030,-0.240), 0.01));
    d = min(d, capsule(st - vec2(0.820,0.380), vec2(-0.260 + cos(u_Time / 1000.0),-0.470), vec2(0.030,-0.240), 0.01));
    d = min(d, capsule(st - vec2(0.350,0.580), vec2(-0.190 + cos(u_Time / 1000.0),-0.330), vec2(0.030,-0.240), 0.01));


    return d;
}

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {
	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

	    float d = 1.0;
	    float ground = ground();
	    float shadow = shadow();
	    float fork = fork();
	    vec3 color;

	    float c = 0.0;

	    if (ground < d){
	        //d = ground;
	        c = ground;
	        //color = vec3((vec3(1.000,0.828,0.809) - smoothedge(d)));
	    }

	    if (fork <= d){
	        d = fork;
	        c = fork;
	        color = vec3((vec3(0.472,0.478,0.560) - smoothedge(d)));
	        color = mix(color, vec3(0.0), st.x / 100.0);
	    }

	    if (shadow <= d){
	        d = shadow;
	        c = shadow;
	        color = vec3((vec3(0.182,0.198,0.285) - smoothedge(d)));
	    }


	    if (color.r < 0.01 && color.g < 0.01 && st.y > 0.4){
	        d = 1.0;
	        color = vec3((mix( vec3(1.000,0.705,0.037), vec3(1.000,0.735,0.184),  cos(st.x * 10.460 * u_Time / 1000.0) / 1.676)));

					if (cos(u_Time / 1000.0 * 5.23) <= 0.00){

						color = vec3(1.0, 0.7, 1.0);
					}
	    }
	    if (color.r < 0.01 && color.g < 0.01 && st.y <= 0.4){
	        d = 1.0;
	        color = vec3((vec3(1.000, 1.0, 1.0)));
	    }

	    if (st.x > 0.076 && st.x < 0.25 && st.y > 0.86 && st.y < 0.98){

	        color = vec3((vec3(1.000, 1.0, 1.0)));

	    }

	//Set the final color
	out_Col = vec4(color, 1.0);





}
