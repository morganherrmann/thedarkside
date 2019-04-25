#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;


vec2 random2(vec2 p) {
    return fract(sin(vec2(dot(p,vec2(127.1,381.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

float cellular(vec2 p) {
    vec2 i_st = floor(p);
    vec2 f_st = fract(p);
    float m_dist = 3.;
    for (int j=-1; j<=1; j++ ) {
        for (int i=-1; i<=1; i++ ) {
            vec2 neighbor = vec2(float(i),float(j));
            vec2 point = random2(i_st + neighbor);
            point = 0.5 + 0.5*sin(point * u_Time / 1000.0 * 5.23);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            if( dist < m_dist ) {
                m_dist = dist;
            }
        }
    }
    return m_dist;
}



void main() {

	vec2 st = gl_FragCoord.xy / u_Dimensions.xy;
	    st.x *= u_Dimensions.x / u_Dimensions.y;


	    float v = 0.0;

			if (u_Time  > 48000.0 && u_Time <= 52000.0){
				//vec3 col1 = vec3(0.005,0.855,0.945);
		    //vec3 col2 = vec3(0.811,0.011,0.945);
				st *= 80.0;
				v = cellular(st);
		    out_Col = vec4( vec3(v), 1.0);
			}
		else if (u_Time  > 52000.0 && u_Time <= 53000.0){
				//vec3 col1 = vec3(0.005,0.855,0.945);
		    //vec3 col2 = vec3(0.811,0.011,0.945);
				st *= 60.0;
				v = cellular(st);
		    out_Col = vec4( vec3(v), 1.0);
			}

			else if (u_Time  > 53000.0 && u_Time <= 54000.0){
					//vec3 col1 = vec3(0.005,0.855,0.945);
					//vec3 col2 = vec3(0.811,0.011,0.945);
					st *= 40.0;
					v = cellular(st);
					out_Col = vec4( vec3(v), 1.0);
				}

			else if (u_Time > 54000.0 && u_Time < 55000.0){
				st *= 30.0;
				v = cellular(st);
				vec3 col1 = vec3(0.005,0.855,0.945);
		    vec3 col2 = vec3(0.811,0.011,0.945);
		    out_Col = vec4(mix(col1, col2, v * 1.05),1.0);
			}
			else if (u_Time > 55000.0 && u_Time < 56000.0){
				st *= 20.0;
				v = cellular(st);
				vec3 col1 = vec3(0.005,0.855,0.945);
		    vec3 col2 = vec3(0.811,0.011,0.945);
		    out_Col = vec4(mix(col1, col2, v * 1.05),1.0);
			}
			else if (u_Time > 56000.0 && u_Time < 57000.0){
				st *= 15.0;
				v = cellular(st);
				vec3 col1 = vec3(0.005,0.855,0.945);
		    vec3 col2 = vec3(0.811,0.011,0.945);
		    out_Col = vec4(mix(col1, col2, v * 1.05),1.0);
			}

			else {
				st *= 10.0;
				v = cellular(st);
				vec3 col1 = vec3(0.005,0.855,0.945);
		    vec3 col2 = vec3(0.811,0.011,0.945);
		    out_Col = vec4(mix(col1, col2, v * 1.05),1.0);
			}


}
