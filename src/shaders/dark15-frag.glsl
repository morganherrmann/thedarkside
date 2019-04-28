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


//	vec2 p = ( gl_FragCoord.xy * 5.0 / u_Dimensions.xy);
	 //p *= 0.9;
	 vec2 iResolution = u_Dimensions;
	 vec2 st = gl_FragCoord.xy / u_Dimensions;
 	vec2 p = (gl_FragCoord.xy * 5.0 - iResolution.xy) / min(iResolution.x, iResolution.y);


	vec4 a = vec4(.7,1.9,.322,0) + sin(u_Time /1000.0 * 10.46) + atan(p.y * 6.0, p.x),
         b = a;
				  b.y+=.4;
    a = cos( sin(p.x)-sin(p.y) +a ),
    b = sin(a*p.x*p.y - p.y   +b );

    a =  abs(b*b-a*a);

    vec3 col  = mix(vec3(0.9, 0.2, 0.9), vec3(0.1, 0.6, 0.9), a.y);
    col  = mix(vec3(0.1, 0.8, 0.9), vec3(0.9, 0.15, 0.9), a.x);


    out_Col =  1.6 * pow(1.-a+b*a,  37.+a-a);
    out_Col.g = 0.0;
    if (out_Col.b > 0.7){
        out_Col.g += 0.3;
    }
    if (out_Col.r > 0.6){
        out_Col.b += 0.6;
    }
		// if (out_Col.b > 0.7){
		 	out_Col = vec4(out_Col.rgb, 1.0);
		// }

		if (u_Time >= 139000.0 && st.x < 0.2){
			if (out_Col.b > 0.5){
	        out_Col.b = 0.0;
					out_Col.g = 0.75;
	    }
	    if (out_Col.r > 0.4){
	        out_Col.r = 0.0;
					out_Col.b = 0.8;
	    }

		}

		if (u_Time >= 140500.0 && st.x > 0.75){
			if (out_Col.b > 0.5){
	        out_Col.b = 0.0;
					out_Col.r = 0.75;
	    }
	    if (out_Col.g > 0.4){
	        out_Col.r = 0.0;
					out_Col.g = 0.6;
	    }

		}


	//Set the final color
	//out_Col = vec4(vec3(col1, intensity*uv.y * 0.81 + 0.9, 0.3), 1.0 );





}
