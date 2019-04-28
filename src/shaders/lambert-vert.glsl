#version 300 es

uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;
out vec4 fs_Nor;
out vec4 fs_LightVec;
out vec4 fs_Col;

out vec4 fs_Pos;
uniform float u_Time;

const vec4 lightPos = vec4(5, 5, 3, 1);


void main()
{
    fs_Col = vs_Col;

    mat3 invTranspose = mat3(u_ModelInvTr);
    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);
    vec4 modelposition = u_Model * vs_Pos;

    modelposition.y += 0.05 * sin(u_Time / 1000.0 * 10.46);
    modelposition.x += 0.5 * sin(u_Time / 1000.0 * 5.23);
    fs_LightVec = lightPos - modelposition;

    gl_Position = u_ViewProj * modelposition;
}
