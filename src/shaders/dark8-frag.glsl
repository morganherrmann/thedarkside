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


float smoothedge(float v) {
    return smoothstep(0.0, 1.0 / u_Dimensions.x, v);
}

float circle(vec2 p, float radius) {
  return length(p ) - radius ;
}

float rect(vec2 p, vec2 size) {
  vec2 d = abs(p) - size ;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0));
}

float roundRect(vec2 p, vec2 size, float radius) {
  vec2 d = abs(p) - size;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))- radius;
}

float ring(vec2 p, float radius, float width) {
  return abs(length(p) - radius * 0.5) - width;
}

float hexagon(vec2 p, float radius) {
		float f = 1.1 *  sin(u_Time / 2000.0 * 5.23);
		p = vec2(abs(p.x) * f, abs(p.y) * f);
    vec2 q = abs(p);
    return max(abs(q.y), q.x * 1.466025 + q.y * 0.5) - radius;
}

float hexagon2(vec2 p, float radius) {
    vec2 q = abs(p);
    return max(abs(q.y), q.x * 2.186 + q.y * 0.5) - radius;
}

float hexagon3(vec2 p, float radius) {
    vec2 q = abs(p);
    return max(abs(q.y), q.x * 1.954 + q.y * 0.892) - radius;
}

float triangle(vec2 p, float size) {
    vec2 q = abs(p);
    return max(q.x * 0.866025 + p.y * 0.5, -p.y * 0.5) - size * 0.5;
}

float ellipse(vec2 p, vec2 r, float s) {
    return (length(p / r ) - s);
}

float capsule(vec2 p, vec2 a, vec2 b, float r) {
    vec2 pa = p - a, ba = b - a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h ) - r;
}

//http://thndl.com/square-shaped-shaders.html
float polygon(vec2 p, int vertices, float size) {
    float a = atan(p.x, p.y) + 0.2;
    float b = 6.28319 / float(vertices);
    return cos(floor(0.5 + a / b) * b - a) * length(p) - size;
}


float red(){
vec2 st = gl_FragCoord.xy/u_Dimensions.xy;
	float d = 100.0;

	d = min(d, hexagon(st - vec2(0.560,0.670), 0.05));
	d = min(d, hexagon(st - vec2(0.320,0.630), 0.05));
	d = min(d, hexagon(st - vec2(0.500,0.780), 0.05));
	d = min(d, hexagon(st - vec2(0.620,0.890), 0.05));
	d = min(d, hexagon(st - vec2(0.220,0.480), 0.03));

	d = min(d, hexagon(st - vec2(0.350,0.380), 0.01));
	//small babues
		d = min(d, hexagon(st - vec2(0.680,0.360), 0.03));
		d = min(d, hexagon(st - vec2(0.260,0.320), 0.03));
		d =  min(d, hexagon(st - vec2(0.320,0.750), 0.05));


	return d;


}

float purple(){
	float d = 100.0;
	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

	d = min(d, hexagon(st - vec2(0.560,0.840), 0.05));
	d = min(d, hexagon(st - vec2(0.620,0.780), 0.05));
	  d = min(d, hexagon(st - vec2(0.620,0.530), 0.05));
		d = min(d, hexagon2(st - vec2(0.730,0.660), 0.05));
		d = min(d, hexagon(st - vec2(0.440,0.850), 0.05));
		d = min(d, hexagon(st - vec2(0.500,0.910), 0.05));

			d = min(d, hexagon(st - vec2(0.440,0.720), 0.03));
	 		d = min(d, hexagon(st - vec2(0.620,0.660), 0.03));
	     d = min(d, hexagon2(st - vec2(0.580,0.430), 0.03));
			 d = min(d, hexagon(st - vec2(0.590,0.220), 0.03));
			 d = min(d, hexagon(st - vec2(0.680,0.720), 0.05));
			d = min(d, hexagon(st - vec2(0.680,0.600), 0.05));
			d = min(d, hexagon2(st - vec2(0.680,0.490), 0.05));
	    d = min(d, hexagon2(st - vec2(0.630,0.410), 0.05));

			 return d;

}


float green(){

	float d = 100.0;
	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

	d = min(d, hexagon2(st - vec2(0.310,0.500), 0.05));
	d = min(d, hexagon2(st - vec2(0.270,0.440), 0.05));
	d = min(d, hexagon2(st - vec2(0.310,0.370), 0.05));
	d = min(d, hexagon2(st - vec2(0.350,0.440), 0.03));
	d = min(d, hexagon(st - vec2(0.300,0.280), 0.03));
	d = min(d, hexagon(st - vec2(0.630,0.280), 0.03));
	d = min(d, hexagon(st - vec2(0.350,0.230), 0.03));
	d = min(d, hexagon(st - vec2(0.350,0.310), 0.02));
	d = min(d, hexagon(st - vec2(0.300,0.200), 0.02));
	d = min(d, hexagon(st - vec2(0.380,0.600), 0.02));
	d = min(d, hexagon(st - vec2(0.300,0.200), 0.02));
	 d = min(d, hexagon(st - vec2(0.370,0.530), 0.01));
	 d = min(d, hexagon(st - vec2(0.260,0.560), 0.05));
	  d = min(d, hexagon2(st - vec2(0.210,0.620), 0.05));
		d = min(d, hexagon(st - vec2(0.380,0.910), 0.05));
		d = min(d, hexagon(st - vec2(0.260,0.680), 0.05));


	return d;
}

float blue(){


	float d = 1000.0;
	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;

	d = min(d, hexagon(st - vec2(0.500,0.680), 0.03));
	d = min(d, hexagon(st - vec2(0.490,0.590), 0.03));

	//tinier
	d = min(d, hexagon(st - vec2(0.430,0.640), 0.02));
	//even tineier
	d = min(d, hexagon(st - vec2(0.560,0.510), 0.01));
	d = min(d, hexagon(st - vec2(0.530,0.600), 0.01));
	d = min(d, hexagon(st - vec2(0.560,0.570), 0.02));
	d = min(d, hexagon(st - vec2(0.570,0.350), 0.02));
	d = min(d, hexagon(st - vec2(0.590,0.290), 0.01));
	   d = min(d, hexagon(st - vec2(0.410,0.560), 0.02));
		 d = min(d, hexagon(st - vec2(0.320,0.860), 0.05));
		 d = min(d, hexagon(st - vec2(0.380,0.800), 0.05));
		    d = min(d, hexagon(st - vec2(0.380,0.680), 0.03));




	return d;

}


void main() {


	vec2 st = gl_FragCoord.xy/u_Dimensions.xy;
	    //large hexagons
	    float mn = 100.0;

			float red = red();
			float blue = blue();
			float green = green();
			float purple = purple();

			vec3 tile = vec3(0.0);
			if (red < mn){
				mn = red;
				tile = mix (vec3(1.0, 0.0, 0.0), vec3(0.5, 0.0, 0.0) , st.x);
			}

			if (green < mn){
				mn = green;
				tile = vec3(0.0, 1.0, 0.0);
			}

			if (purple < mn){
				mn = purple;
				tile = mix(vec3(1.0, 0.0, 1.0), vec3(1.0, 0.2, 0.65) , st.x);
			}

			if (blue < mn){
				mn = blue;
				tile = vec3(0.0, 0.0, 1.0);
			}



	    //side warped hexagons




			float d = 1.0;


	    //thingy
	    d = min(d, hexagon3(st - vec2(0.470,0.010), 0.318));

			if (d < mn){
				mn = d;
				tile = mix(vec3(0.0, 0.9, 1.0), vec3(0.1, 0.4, 0.9),  sin(u_Time /500.0 * 5.23) * st.y * abs(st.x) * 9.0);
			}

	    //globe
	    d = min(d, ellipse(st - vec2(0.470,0.400), vec2(0.870,1.390), 0.046));
			if (d < mn){
				mn = d;
				tile = vec3(1.0, 0.0, 0.2);
			}

	    vec3 color = vec3(1.0) - vec3(tile) - vec3(smoothedge(mn));
	    out_Col = vec4(color, 1.0);




}
