#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;




in float fs_Sine;

out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

                  float random1( vec2 p , vec2 seed) {
                    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
                  }

//WORLD IS SPLIT INTO 3 REGIONS. DR SEUSS, BEACH, DESERT MOUNTAINS

void main()
{


    vec3 colorA;
    vec3 colorB;



     //-----DR SEUSS ------
   float t = clamp(smoothstep(10.0, 20.0, length(fs_Pos / 2.f)), 0.0, 1.0); // Distance fog
   out_Col = vec4(mix(vec3(0.5 * (fs_Sine + 1.0)), vec3(164.0 / 255.0, 233.0 / 255.0, 1.0), t), 1.0);


	 colorA = vec3(0.169, 0.729, 0.937);
 colorB = vec3(0.698,0.227, 0.827);
 out_Col = vec4(mix(colorA, colorB, fs_Sine / 5.f), 1.f);

 if (fs_Sine < 0.5f){
	 colorA = vec3(0.169, 0.729, 0.937);
	 colorB = vec3(123.f/255.f, 221.f/255.f, 228.f/255.f);
	 out_Col = vec4(mix(colorA, colorB, fs_Sine), 1.f);

}




}
