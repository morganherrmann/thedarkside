#version 300 es
precision highp float;

uniform vec2 u_PlanePos; // Our location in the virtual world displayed by the plane

in vec3 fs_Pos;
in vec4 fs_Nor;
in vec4 fs_Col;




in float fs_Sine;

out vec4 out_Col; // This is the final output color that you will see on your
                  // screen for the pixel that is currently being processed.

                  float random1( vec2 p , vec2 seed) {
                    return fract(sin(dot(p + seed, vec2(127.1, 311.7))) * 43758.5453);
                  }

//WORLD IS SPLIT INTO 3 REGIONS. DR SEUSS, BEACH, DESERT MOUNTAINS

void main()
{


    vec3 colorA;
    vec3 colorB;



     //-----DR SEUSS ------
   float t = clamp(smoothstep(10.0, 20.0, length(fs_Pos / 2.f)), 0.0, 1.0); // Distance fog
   out_Col = vec4(mix(vec3(0.5 * (fs_Sine + 1.0)), vec3(164.0 / 255.0, 233.0 / 255.0, 1.0), t), 1.0);
   ///water
   if (fs_Pos.y < 0.5f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   }else if (fs_Pos.y < .54f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 1.0f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 1.05f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   }
   else if (fs_Pos.y < 1.54f) {
     t = clamp(smoothstep(50.0, 70.0, length(fs_Pos)), 0.0, 1.0);
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 1.6f){
     out_Col = vec4(0.f, 0.f, 0.f, 1.f);
   } else if (fs_Pos.y < 2.0f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 2.05f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 2.5f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 2.55f){
     out_Col = vec4(0.f, 0.f, 0.f, 1.f);
   } else if (fs_Pos.y < 3.3f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);
   } else if (fs_Pos.y < 3.35f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 4.f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);
   } else if (fs_Pos.y < 4.05f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   }else if (fs_Pos.y < 4.5f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);
   } else if (fs_Pos.y < 4.55f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 5.f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);
   } else if (fs_Pos.y < 5.05f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 5.5f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, fs_Pos.y / 7.f), 1.f);
   } else if (fs_Pos.y < 5.55f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   }  else if (fs_Pos.y < 6.0f) {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   } else if (fs_Pos.y < 6.05f){
     colorA = vec3(0.89, 0.196, 0.518);
     colorB = vec3(0.169, 0.729, 0.937);
     out_Col = vec4(mix(colorA, colorB, t), 01.f);
   }
   else {
     colorA = vec3(0.0, 0.0, 0.0);
     colorB = vec3(0.0, 0.0, 0.0);
   // Mix uses pct (a value from 0-1) to
   // mix the two colors
   out_Col = vec4(mix(colorA, colorB, t), 1.f);
   //wwout_Col = vec4(mix(colorA, colorB, fs_Pos.y), 1.f);


 }

// out_Col = vec4(0.0, 1.0, 0.0, 1.0);
//  float coord = fs_Pos.x + u_PlanePos.x;
//  float isBlack = 0.0;
//
//
//  if (mod(coord, 1.0) == 0.0){
// 	 out_Col = vec4(0.0, 0.0, 0.0, 1.0);
//  }




}
