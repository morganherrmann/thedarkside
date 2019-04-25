#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

float noise(vec2 p) {
	return fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);
}

vec2 position(float z) {
	return vec2(
		0.0 + sin(z * 0.1) * 1.0 + sin(cos(z * 0.031) * 4.0) * 1.0 + sin(sin(z * 0.0091) * 3.0) * 1.0,
		0.0 + cos(z * 0.1) * 1.0 + cos(cos(z * 0.031) * 4.0) * 1.0 + cos(sin(z * 0.0091) * 3.0) * 1.0
	) * 1.0;
}

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {

	vec2 iResolution = u_Dimensions;
	vec2 p = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
	float camZ = 25.0 * u_Time / 1000.0;
	vec2 cam = position(camZ);

	float dt = 0.5;
	float camZ2 = 25.0 * (u_Time / 1000.0 + dt);
 	vec2 cam2 = position(camZ2);
	vec2 dcamdt = (cam2 - cam) / dt;

	vec3 f = vec3(0.0);
 	for(float j = 1.0; j < 100.0; j++) {
		float i = float(j);
		float realZ = floor(camZ) + i;
		float screenZ = realZ - camZ;
		float r = 1.0 / screenZ;
 		vec2 c = (position(realZ) - cam) * 5.0 / screenZ - dcamdt * 0.2;
        //c = vec2(ceil(c.x), ceil(c.y));
	 	vec3 color = (vec3(sin(realZ * 0.07), sin(realZ * 0.1), 0.8) + vec3(1.0)) / 2.0;
        float len = clamp(length(p-c), 0.0, 5.0);
        float val = clamp(abs(len - r), 0.0, 7.5);
 		f += color * 0.06 / screenZ / (val + 0.06);
	}

	out_Col = vec4(f, 1.0);





}
