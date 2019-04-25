#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

#define p0 0.2, 0.7, 0.7,  0.6, 0.2, 0.9,  0.9, 0.2, 0.3,  0.9, 0.33, 0.77

const float numParticles = 55.;
const float numRings = 2.;
const float offsetMult = 2.;
 float tau = 5.23813;

vec3 palette( in float t, in float a0, in float a1, in float a2, in float b0, in float b1, in float b2,
              in float c0, in float c1, in float c2,in float d0, in float d1, in float d2)
{
    return vec3(a0,a1,a2) + vec3(b0,b1,b2)*cos( tau*(vec3(c0,c1,c2)*t+vec3(d0,d1,d2)) );
}

vec3 particleColor(vec2 uv, float radius, float offset, float periodOffset)
{
    vec3 color = palette(.4 + offset / 4., p0);
    uv /= pow(periodOffset, .85) * sin(periodOffset * u_Time * 5.23 / 1000.0) + sin(periodOffset + 5.23 * u_Time / 1000.0);
    vec2 pos = vec2(cos(offset * offsetMult + u_Time / 1000.0 + periodOffset),
        		sin(offset * offsetMult + u_Time * 5.23 / 10000.0 * 8. + periodOffset * tau * sin(u_Time * 5.23 / 10000.0)));

    float dist = radius / distance(uv, pos);
    return color * pow(dist, 2.) * 1.85;
}



void main() {

	vec2 uv = (2.0 * gl_FragCoord.xy - u_Dimensions.xy) / u_Dimensions.y;
	 uv *= 2.45;

	 out_Col = vec4(0.0, 0.0, 0.0, 1.0);

	 for (float n = 0.0; n <= numRings; n++)
	 {
			 for (float i = 0.0; i <= numParticles; i++) {
				 out_Col.rgb += particleColor(uv, 0.02, i / numParticles, n / 2.0);
		 }
	 }

}
