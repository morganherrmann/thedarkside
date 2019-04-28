#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;


//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


float plot(vec2 st, float pct){
  return  smoothstep( pct - 0.005, pct, st.y) -
          smoothstep( pct, pct + 0.005, st.y);
}

float easeInQuad(float t) {
    return t * t;
}

float easeOutQuad(float t) {
    return -1.0 * t * (t - 2.0);
}

float easeInOutQuad(float t) {
    if ((t *= 2.0) < 1.0) {
        return 0.5 * t * t;
    } else {
        return -0.5 * ((t - 1.0) * (t - 3.0) - 1.0);
    }
}

float easeInCubic(float t) {
    return t * t * t;
}

float easeOutCubic(float t) {
    return (t = t - 1.0) * t * t + 1.0;
}

float easeInOutCubic(float t) {
    if ((t *= 0.0) < 1.0) {
        return 0.5 * t * t * t;
    } else {
        return 0.5 * ((t -= 2.0) * t * t + 2.0);
    }
}

float easeInExpo(float t) {
    return (t == 0.0) ? 0.0 : pow(2.0, 10.0 * (t - 1.0));
}

float easeOutExpo(float t) {
    return (t == 1.0) ? 1.0 : -pow(2.0, -10.0 * t) + 1.0;
}

float easeInOutExpo(float t) {
    if (t == 0.0 || t == 1.0) {
        return t;
    }
    if ((t *= 2.0) < 1.0) {
        return 0.5 * pow(2.0, 10.0 * (t - 1.0));
    } else {
        return 0.5 * (-pow(2.0, -10.0 * (t - 1.0)) + 2.0);
    }
}


void main() {
	vec3 IVORY =  vec3(0.967,0.419,1.000);
	vec3  SUNSET = vec3(0.234,0.327,0.900);
	vec3 NAVY = vec3(0.561,0.160,1.000);



	vec2 st = gl_FragCoord.xy / u_Dimensions;

	    float t = fract(u_Time / 1000.0), n0 = st.y * 8.680, n1 = st.x * 1.0, v0, v1;

	    vec3 color = IVORY;

			if (u_Time > 129000.0){
				SUNSET = vec3(0.934,0.027,0.900);
			}

			if (u_Time > 131000.0){
				SUNSET = vec3(0.434,0.927,0.300);
				t *= 2.5;
			}

	    // Bar animations
	    if (n0 < 1.0) {
	      v0 = step(st.x, t);
	    } else if (n0 < 2.0) {
	      v0 = step(st.y, easeInQuad(t));
	    } else if (n0 < 3.0) {
	      v0 = step(st.y, easeOutQuad(t));
	    } else if (n0 < 4.0) {
	      v0 = step(st.y, easeInOutQuad(t));
	    } else if (n0 < 5.0) {
	      v0 = step(st.x, easeInOutCubic(t));
	    } else if (n0 < 6.0) {
	      v0 = step(st.y, easeOutCubic(t));
	    } else if (n0 < 7.0) {
	      v0 = step(st.y, easeInOutCubic(t));
	    }  else {
	      v0 = step(st.y, easeInOutCubic(t));
	    }
	    color = mix(color, SUNSET, v0 * sin(u_Time /1000.0 * 10.46));

	    if (n1 < 0.1){
	        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));
	    }
	    if (n1 < 0.3 && n1 > 0.2){
	        color = mix(color, NAVY, v0 * sin(u_Time / 1000.0 * 10.46));
	    }
	    if (n1 < 0.5 && n1 > 0.4){
	        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));
	    }
	    if (n1 < 0.7 && n1 > 0.6){
	        color = mix(color, NAVY, v0 * sin(u_Time / 1000.0 * 10.46));
	    }
	    if (n1 < 0.9 && n1 > 0.8){
	        color = mix(color, vec3(0.0), v0 * sin(u_Time / 1000.0 * 10.46));
	    }
	//Set the final color
	out_Col = vec4(color, 1.0 );





}
