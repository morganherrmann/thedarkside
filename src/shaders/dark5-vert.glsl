#version 300 es


uniform mat4 u_Model;
uniform mat4 u_ModelInvTr;
uniform mat4 u_ViewProj;
uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

in vec4 vs_Pos;
in vec4 vs_Nor;
in vec4 vs_Col;

uniform float u_Time;


out vec3 fs_Pos;
out vec4 fs_Nor;
out vec4 fs_Col;

out float fs_Sine;

float random1( vec2 p , vec2 seed) {
  return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
}

float random1( vec3 p , vec3 seed) {
  return fract(sin(dot(p + seed, vec3(987.654, 123.456, 531.975))) * 85734.3545);
}

vec2 random2(vec2 p , vec2 seed) {
  return fract(sin(vec2(dot(p + seed, vec2(311.7, 127.1)), dot(p + seed, vec2(269.5, 183.3)))) * 85734.3545);
}

float Noise(int x, int y){
    return (fract(sin(dot(vec2(x, y), vec2(12.9898, 4.1414))) * 43758.5453));
}


//Noise interpolation 2D function
float interpNoise2D(float x, float y){

    int intX =  int(x);
    float fractX = fract(x);
    int intY = int(y);
    float fractY = fract(y);

    float v1 = Noise(intX, intY);
    float v2 = Noise(intX + 1, intY);
    float v3 = Noise(intX, intY + 1);
    float v4 = Noise(intX + 1, intY + 1);

    float i1 = mix(v1, v2, fractX);
    float i2 = mix(v3, v4, fractX);

    return mix(i1, i2, fractY);

}

//Steppe-like FBM pattern
float steppeFbm(float x, float y){

    float total = 0.f;
    float peristence = 0.5f;
    float octaves = 8.f;

    for(float i = 0.f; i < octaves; i++){
        float freq = pow(2.f, i);
        float amp = pow(peristence, i);
        total += interpNoise2D((x * freq) / 128.f, (y * freq) / 128.f) * amp;
    }

    return total;

}

// FBM function for 2D input
float fbm(float x, float y){

    float total = 0.f;
    float peristence = 0.5f;
    float octaves = 1.f;

    for(float i = 0.f; i < octaves; i++){
        float freq = pow(2.f, i);
        float amp = pow(peristence, i);
        total += interpNoise2D((x * freq), (y * freq)) * amp;
    }

    return total;

}

//interpolation functions
float linear_interpolate(float a, float b, float t){
  return a * (1.f - t) + b * t;
}

float cosine_interpolation(float a, float b, float t){
  float cos_t = (1.f - cos(t * 3.14)) * 0.5f;
  return linear_interpolate(a, b, cos_t);
}


//Function for DR SEUSS portion of environment
void seuss(){


  fs_Pos = vs_Pos.xyz;
  float rand = random1(vec2(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y) , vec2(1.f, 3.f));
  fs_Sine = (sin((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.1) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 * 0.1));
  fs_Sine += (cos((vs_Pos.x + u_PlanePos.x) * 3.14159 * 0.2) + cos((vs_Pos.z + u_PlanePos.y) * 3.14159 *  0.1));
  fs_Sine += 5.0;

 vec4 modelposition = vec4(vs_Pos.x, fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*
 cos(vs_Pos.z + u_PlanePos.y)) + fbm(vs_Pos.x + u_PlanePos.x, vs_Pos.z + u_PlanePos.y), vs_Pos.z, 1.0);
 fs_Sine = fs_Sine * (cos(vs_Pos.x + u_PlanePos.x)+sin(.5f * (vs_Pos.z + u_PlanePos.y))*
 cos(vs_Pos.z + u_PlanePos.y));



   fs_Sine = 5.f;


  if (modelposition.y > 10.f){
    modelposition.y = 10.f + rand / 5.f;
  }
  if (modelposition.y < -2.f){
    modelposition.y = -2.f - rand;
  }

    modelposition.y /= 2.1f;
    if (modelposition.y < .5f){
      modelposition.y = 0.2f;
    }





  fs_Pos = modelposition.xyz;
  modelposition = u_Model * modelposition;
  gl_Position = u_ViewProj * modelposition;

}


//function for desert mountains using FBM - vary over time
void desert(){
  fs_Pos = vs_Pos.xyz;
  float exp = smoothstep(0.1 ,0.4, abs(vs_Pos.z) + abs(u_PlanePos.y));
  fs_Sine = pow(steppeFbm((abs(vs_Pos.z) + abs(u_PlanePos.y)) * 10.0 * sin(5.236 * u_Time / 10000.0), (abs(vs_Pos.x) + abs(u_PlanePos.x)) * 10.f), 5.5f * exp)
   * cos((5.236 * u_Time / 100000.0 + abs(vs_Pos.z) + abs(u_PlanePos.y)));

  if (fs_Sine < 0.f){
    fs_Sine = 0.f;
  }

  vec4 modelposition = vec4(vs_Pos.x, fs_Sine, vs_Pos.z, 1.0);

  modelposition = u_Model * modelposition;
  gl_Position = u_ViewProj * modelposition;
}








void main()
{

    ///-----OH, THE PLACES YOU'LL GO --- DR SEUSS---




    desert();
    //------------ OH THE PLACES YOULL GO ------------------------



}
