#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

float noise(vec2 p) {
	return fract(sin(dot(p.xy ,vec2(12.9898,78.233))) * 456367.5453);
}

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {
//  out_Col = vec4(0.2, 0.9, fs_Pos.y * 4.0, 0.5);
  //vec2 uv = (fs_Pos);
  //float intensity = 0.8;

	// //-----------stuffs
	//
	 float t = u_Time;
 		vec3 c;
	 float l = 0.0;
	 float  z = t / 10000.0;
   vec2 r = u_Dimensions;
	 for(float i=0.0 ; i<3.0; i++) {
	 	 vec2 uv;
	 	 vec2 p = gl_FragCoord.xy/r;
	 	 uv=p;
	 	 p-=0.5;
	 	 p.x*= r.x / r.y;
	 	 z+=0.07;
	 	 l=length(p);
 		uv+=p/l*(sin( z)+1.0)*abs(sin(l*9.0-z*2.0)) * sin(5.236* u_Time / 1000.0);
	 	if(i > -0.1 && i < 0.1){
			c.x = 0.01/length(abs(mod(uv,1.0)-0.5));
		}
		if(i > 0.9 && i < 1.1){
			c.y = 0.01/length(abs(mod(uv,1.0)-0.5));
		}
		if(i > 1.9 && i < 2.1){
			c.z = 0.01/length(abs(mod(uv,1.0)-0.5));
		}

	}

    vec4 white = vec4(0.89, 0.196, 0.518, 1.0);

    out_Col=vec4(c/l,t);
    vec4 blue = vec4(0.169, 0.729, 0.937, 1.0);

     if (c.x + c.y + c.z > 0.2){

       blue = vec4(0.169, 0.729, 0.9378, 1.0);
       out_Col = mix(blue, white, sin(5.236 * (u_Time / 1000.0) ));
    }
	//
     if (c.x + c.y + c.z > 0.3){

        vec4 green = vec4(0.169, 0.729, 0.937, 1.0);
        vec4 orange = vec4(0.698,0.227, 0.827, 1.0);
       out_Col = mix(green, orange, cos( 5.236 * u_Time/ 1000.0 ));
    }

	//-------

//out_Col = vec4(1.0, 1.0, 0.0, 1.0);
    //Create the stacked layers







}
