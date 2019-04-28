#version 300 es
precision highp float;


uniform vec2 u_Dimensions;
uniform float u_Time;

in vec2 fs_Pos;
out vec4 out_Col;

//SOURCE INSPIRATION http://glslsandbox.com/e#22429.6

float segment(vec2 uv)
{
    uv = abs(uv);
	return (1.0-smoothstep(0.07,0.10,uv.x))
         * (1.0-smoothstep(0.46,0.49,uv.y+uv.x))
         * (1.25 - length(uv*vec2(3.8,1.3)));
}

float sevenSegment(vec2 uv,int num)
{
	float seg= 0.0;

    if (num>=2 && num!=7 || num==-2)
        seg = max(seg,segment(uv.yx));

    if (num==0 ||
            (uv.y<0.?((num==2)==(uv.x<0.) || num==6 || num==8):
            (uv.x>0.?(num!=5 && num!=6):(num>=4 && num!=7) )))
        seg = max(seg,segment(abs(uv)-0.5));

    if (num>=0 && num!=1 && num!=4 && (num!=7 || uv.y>0.))
        seg = max(seg,segment(vec2(abs(uv.y)-1.0,uv.x)));

	return seg;
}

float showNum(vec2 uv,float nr, bool zeroTrim)
{
    if (uv.x>-3.0 && uv.x<0.0)
    {
        float digit = floor(-uv.x / 1.5);
		nr /= pow(10.,digit);
        nr = mod(floor(nr+0.000001),10.0);
        if (nr==0.0 && zeroTrim && digit!=0.0)
            return 0.;
		return sevenSegment(uv+vec2( 0.75 + digit*1.5,0.0),int(nr));
    }
	return 0.;
}

float dots(vec2 uv)
{
	uv.y = abs(uv.y)-0.5;
	float l = length(uv);
	return (1.0-smoothstep(0.11,0.13,l)) * (1.0-l*2.0);
}


void main() {


	vec2 uv = (gl_FragCoord.xy-0.5*u_Dimensions.xy) / u_Dimensions.x;

	    uv *= 11.0;
	    uv.x -= 5.+uv.y*.07;

	    if (uv.x<-7.0 || uv.x>-3.0 || abs(uv.y)>1.2) {
	        out_Col = vec4(0.0, 0.0, 0.0, 1.0);
	    	return;
	    }

	    float p = floor(abs(uv.x/3.5));
	    uv.x = mod(uv.x,3.5)-3.5;

		float seg = 0.0;
	    if (uv.x>-3.)
			if (u_Time < 600.0){
				seg = showNum(uv,mod(4.0, 5.0),p==2.0);
			} else if (u_Time < 1200.0){
				seg = showNum(uv,mod(3.0, 5.0),p==2.0);
			} else if (u_Time < 1800.0){
				seg = showNum(uv,mod(2.0, 5.0),p==2.0);
			} else if (u_Time < 2400.0){
				seg = showNum(uv,mod(1.0, 5.0),p==2.0);
			}

	    else
	    {
	        uv.x += 3.25;
			seg = dots(uv);
	    }


			out_Col = vec4(seg * sin(u_Time * 10.46 / 1000.0),seg * cos(u_Time * 10.46 / 1000.0),seg,1.);


}
