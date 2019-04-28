#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

float viewAngle = 1.0;
float speed = 4.0;
float rate = 15.0;
float baseamp = 0.15;

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6


void main() {

	vec2 iResolution = u_Dimensions;

	vec2 p = ( gl_FragCoord.xy / u_Dimensions.xy ) * 2.0 - 1.0;
	p.x *= u_Dimensions.x / u_Dimensions.y;


  float x = speed * viewAngle * u_Time / 1000.0 + rate * p.x;
  float base = (1.0 + cos(x * 5.23 + u_Time / 10000.0)) * (1.0 + sin(10.46 * u_Time / 10000.0));
  float z = fract(0.08*x);
  z = max(z, 1.0-z);
  z = pow(z, 20.0);
  float pulse = exp(-1000.0 * z);
  vec4 ecg_color = vec4(0.6, 0.2, 0.9, 1.0);
  vec4 c = (vec4(1.0) - pow(clamp(1.0-abs(p.y-(baseamp * base + pulse -0.8)), 0.0, 1.0), 16.0)) * ecg_color;
    out_Col = c;
    if (out_Col.r > 0.1){
    out_Col.r /= sin(u_Time / 100000.0 * 10.46);
    //out_Col.b /= cos(u_Time / 10000.0 * 10.46);
    }


    float test = sin(13.659 * u_Time / 1000.0);
	//out_Col = vec4(test, 0.3, 0.8 , 1.0);






}
