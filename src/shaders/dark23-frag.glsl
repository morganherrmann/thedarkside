#version 300 es
precision highp float;

uniform vec3 u_Eye, u_Ref, u_Up;
uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

float noise(vec2 p) {
	return fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);
}

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {
  //out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);
  vec2 uv = (fs_Pos);
  float intensity = 0.0;
	vec2 iResolution = u_Dimensions;
	vec2 st = gl_FragCoord.xy / u_Dimensions;

    //Create the stacked layers

    //so what this is doing is creating offset layers
    //and the height of each section follows a cosin curve
    //ok sweet
	for (float inc = 1.0; inc < 45.0; inc++) {

		float fi = inc;

		float s = floor(60.0*(uv.x)/fi + 60.0*fi + u_Time / 1000.0 * 5.23);

        float yLimit = noise(vec2(s));
        yLimit *= fi/65.0;
        yLimit -= 0.07*fi;
        yLimit += 0.125 * cos(uv.x* 10.46 + u_Time / 1000.0 + fi/9.0);
       	yLimit += 0.8;

		if (uv.y < yLimit) {
			intensity = inc/03.0;
		}
	}

  float col1 = mix(intensity * uv.x * 0.9 + 0.5, 0.8, 01.1);
//u_Time > 211000.0 &&
	if (u_Time > 211000.0 && st.y > 0.7){
			out_Col = vec4(vec3(col1, intensity*uv.y * 0.9 + 0.6, 0.9), 1.0 );
			return;
	}
	//u_Time > 213000.0 &&
	else if ( u_Time > 213000.0 && st.y < 0.35){
			out_Col = vec4(vec3(col1, intensity*uv.y * 0.2 + 0.8, 0.2), 1.0 );
			return;
	}

	//Set the final color
	out_Col = vec4(vec3(col1, intensity*uv.y * 0.9 + 0.5, 0.8), 1.0 );





}
