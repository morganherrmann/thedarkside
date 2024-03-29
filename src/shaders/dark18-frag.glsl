#version 300 es

precision highp float;

uniform vec4 u_Color;


in vec4 fs_Nor;
in vec4 fs_LightVec;
in vec4 fs_Col;

uniform float u_Time;


out vec4 out_Col;

void main()
{

        vec4 diffuseColor = vec4(0.0, 0.0, 1.0, 1.0);


        float diffuseTerm = dot(normalize(fs_Nor), normalize(fs_LightVec));

        diffuseTerm = clamp(diffuseTerm, 0.0, 1.0);

        float ambientTerm = 0.3;
        float lightIntensity = diffuseTerm + ambientTerm;


        out_Col = vec4(diffuseColor.rgb * lightIntensity, diffuseColor.a);
        out_Col = diffuseColor + fs_Nor * 1.2;
        if (out_Col.g > 0.3 && out_Col.b < 0.85){
          out_Col = vec4(1.0, 0.0, 1.0, 1.0);
        }

        if (mod(u_Time, 10.0) == 0.0){
          out_Col = vec4(1.0, 0.0, 1.0, 1.0);
        }
        if (mod(u_Time, 15.0) == 0.0){
          out_Col = vec4(0.0, 1.0, 1.0, 1.0);
        }
}
