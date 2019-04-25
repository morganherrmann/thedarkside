#version 300 es
precision highp float;

#define PI 3.14159265358979323846

uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 9.0;
    pos *= scale;
    return smoothstep(0.0,
                    .4+b*.5,
                    abs((sin(pos.x*3.1415)+b*1.0))*.5);
}





void main() {

	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

	st.y *= u_Dimensions.y/u_Dimensions.x;

    vec2 pos = st.yx * vec2(1.,3.);

    float pattern = pos.x;

    // Add noise
    pos = rotate2d( noise(pos) * sin(u_Time / 1000.0 * 5.23) ) * pos;

    // Draw lines
    pattern = lines(pos,.5);

    vec3 col = vec3(0.504,0.302,0.605);
    vec3 col2 = vec3(0.138,0.894,0.920);

    out_Col = vec4(vec3(0.0), 1.0);


			 if (fs_Pos.x < -0.6 && u_Time > 59000.0){

				 out_Col = vec4(mix(col, col2, pattern) ,1.0);


		} else if (fs_Pos.x < 0.4 && u_Time  > 61500.0) {

			 col = vec3(0.504,0.302,0.605);
     col2 = vec3(0.920,0.045,0.222);

			 out_Col = vec4(mix(col, col2, pattern) ,1.0);

		} else if (fs_Pos.x >= 0.4 && u_Time > 64000.0) {

			 col = vec3(0.940,0.587,0.755);
     	col2 = vec3(0.920,0.045,0.222);

			 out_Col = vec4(mix(col, col2, pattern) ,1.0);


		}






}
