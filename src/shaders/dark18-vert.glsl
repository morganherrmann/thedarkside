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

float easeInOutCubic(float t) {
    if ((t *= 2.0) < 1.0) {
        return 0.5 * t * t * t;
    } else {
        return 0.5 * ((t -= 2.0) * t * t + 2.0);
    }
}


void main()
{
    fs_Col = vs_Col;

    mat3 invTranspose = mat3(u_ModelInvTr);
    fs_Nor = vec4(invTranspose * vec3(vs_Nor), 0);
    vec4 modelposition = u_Model * vs_Pos;

  //   mat2 rot;
  // rot[0][0] =cos(radians(-45.0 * u_Time / 1000.f));
  // rot[0][1] =sin(radians(-45.0 * u_Time / 1000.f));
  // rot[1][0] =-sin(radians(-45.0 * u_Time / 1000.f));
  // rot[1][1] =cos(radians(-45.0 * u_Time / 1000.f));
  // modelposition.xz *= rot;
  // modelposition.yz *= rot;

  float st = (sin(u_Time * 10.46/ 10000.0));
	float ct = easeInOutCubic(cos(u_Time * 10.46 / 10000.0));
	vec4 new_pos;

	new_pos.x = modelposition.x*ct - modelposition.z*st;
	new_pos.z = modelposition.x*st + modelposition.z*ct;

	new_pos.y = modelposition.y;
	new_pos.w = modelposition.w;

    //modelposition.y += 0.05 * sin(u_Time / 1000.0 * 10.46);
    // modelposition.x += 0.5 * sin(u_Time / 1000.0 * 10.46);
    //
     if (modelposition.y <= 0.5){
       new_pos.y *= 0.2 * sin(u_Time / 1000.0 * 5.23);
     }
    fs_LightVec = lightPos - new_pos;

    gl_Position = u_ViewProj * new_pos;
}
