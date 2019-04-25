#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;



vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

// Value Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

float shape(vec2 st, float radius) {
	st = vec2(0.5)-st;
    float r = length(st)*2.0;
    float a = atan(st.y,st.x);
    float m = abs(mod(a+u_Time / 1000.0*5.23,3.340*2.)-3.14)/3.6;
    float f = radius;
    m += noise(st+u_Time / 1000.0*0.1)*.5;
    // a *= 1.+abs(atan(u_Time / 1000.0*0.2))*.1;
    // a *= 1.+noise(st+u_Time / 1000.0*0.1)*0.1;
    f += sin(a*50.)*noise(st+u_Time / 1000.0*.2)*.1;
    f += (sin(a*20.)*.1*pow(m,2.));
    return 1.-smoothstep(f,f+0.007,r);
}

float shapeBorder(vec2 st, float radius, float width) {
    return shape(st,radius)-shape(st,radius-width);
}

void main() {
  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);
		vec2 st = gl_FragCoord.xy/u_Dimensions.xy;
		vec3 color = vec3(0.366,0.000,1.000) * shapeBorder(st,0.2,0.09 * sin(u_Time / 1000.0 * 10.46));


		if (u_Time > 84000.0){
	    color += vec3(0.863,0.181,1.000) * shapeBorder(st,1.04 * sin(u_Time / 1000.0 * 10.46),0.02 * sin(u_Time / 1000.0 * 10.46));
		}

			if (u_Time > 85000.0){
	    color += vec3(0.621,0.357,1.000) * shapeBorder(st, 0.4 ,0.07 * cos(u_Time / 1000.0 * 10.46));
	    color += vec3(0.863,0.181,1.000) * shapeBorder(st,0.4,0.02 * cos(u_Time / 1000.0 * 10.4636));
}


		if (u_Time > 86000.0){
	    color += vec3(0.000,0.990,1.000) * shapeBorder(st,0.9,0.07 * cos(u_Time / 1000.0 * 10.46));
	    color -= vec3(0.063,0.181,0.000) * shapeBorder(st,0.9 * sin(u_Time / 1000.0 * 10.46),0.04 * cos(u_Time / 1000.0 * 10.46));
		}

		out_Col = vec4(0.0 + color, 1.0 );





}
