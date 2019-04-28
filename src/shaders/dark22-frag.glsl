#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),sin(angle),sin(angle));
}
//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {

	vec2 uv = gl_FragCoord.xy / u_Dimensions.xy;


	float bg = (cos(uv.x * 100.0 * sin(u_Time / 1000.0 * 5.23)) + sin((uv.y))) * 0.2;

	vec2 p = uv/2.38*cos(10.46 * u_Time / 1000.0)/ u_Time / 1000.0 - bg/0.1;
    vec2 v = rotate2d(u_Time / 1000.0 + 5.0) * uv/0.1;
    p *= vec2(v.x , v.y);
    vec2 p2 = uv*2.0 - 1.0;

    vec2 p3 = uv*2.0 - 1.0;


		p *= 65.0;
    p2 *= 15.0;
    p3 *= 25.0;
	vec2 sfunc = vec2(p.x, p.y);
    vec2 sfunc2 = vec2(p2.x, p2.x);
    vec2 sfunc3 = vec2(p3.x, p3.y);
		sfunc.y /= 0.4;
    sfunc2.y /= 0.1;
    sfunc3.y /= 0.2;
    p *= vec2(v.x, v.y);
    p3 *= vec2(v.x, v.y);

	vec3 c = vec3(abs(sfunc.y * abs(sin(u_Time / 1000.0 * 5.23))));
    vec3 c2 = vec3(abs(sfunc2.y * sin(u_Time / 1000.0 * 5.23)));
    vec3 c3 = vec3(abs(sfunc3.y* abs(cos(u_Time / 1000.0 * 5.23))));
	c = pow(c, vec3(-0.9));
    c2 = pow(c2, vec3(-0.5));
    c3 = pow(c3, vec3(-0.7));
	c *= vec3(0.9,0.25,1.0);
    c2 *= vec3(0.3,0.85,1.0);
    c3 *= vec3(0.7,0.15,1.0);

	out_Col = vec4( c2 + c3,1.0);
if (u_Time > 204000.0){
	out_Col = vec4( c + c2 + c3,1.0);
}




}
