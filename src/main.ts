import { vec3, vec4, vec2, quat } from 'gl-matrix';
import {Howl, Howler} from 'howler';

import { HowlerSoundController } from 'howler-sound-controller';

import * as Stats from 'stats-js';
import * as DAT from 'dat-gui';
import Drawable from './rendering/gl/Drawable';
import Square from './geometry/Square';
import Leaf from './geometry/Leaf';
import Mario from './geometry/Mario';
import Pipes from './geometry/Pipes';
import Ground from './geometry/Ground';
import Box from './geometry/Box';
import Question from './geometry/Question';
import LSystemMesh from './geometry/LSystemMesh';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import { setGL } from './globals';
import ShaderProgram, { Shader } from './rendering/gl/ShaderProgram';
import LSystem from './LSystem';
import Turtle from './Turtle';
import TurtleState from './TurtleState';
import ScreenQuad from './geometry/ScreenQuad';
import Plane from './geometry/Plane';





import Building from './Building';
import City from './City';
import Town from './Town';

import Cube from './geometry/Cube';


// Define an object with application parameters and button callbacks
// This will be referred to by dat.GUI's functions that add GUI elements.
const controls = {
  'Update': update,
  'Iterations': 1,
  'LeafSize': 1,
  'Leaf Color': [0.0, 255.0, 0.0],
  'Piranha Color': [245.0, 0.0, 0.0],
  'Tube Color' : [0.0, 255, 0.0]
};

let leaf: Leaf;
let mario: Mario;
let pipes: Pipes;
let ground: Ground;
let question : Question;
let brain : Question;
let box : Box;
let plantMesh: LSystemMesh;
let screenQuad: ScreenQuad;

let controller = HowlerSoundController;

let cube: Cube;

let city: City;
let town : Town;

let back : Square;

let darkside : Howl;
let darkID : number;

var start : Date;
var elapsed : number;

let planePos: vec2;
let plane : Plane;


let loader : any;

let camera2 : Camera;



function loadScene() {
  leaf = new Leaf();
  mario = new Mario();
  pipes = new Pipes();
  question = new Question();
  brain = new Question();
  box = new Box();
  ground = new Ground();
  plantMesh = new LSystemMesh();
  screenQuad = new ScreenQuad();
  screenQuad.create();
  back = new Square();
  back.create();



  plane = new Plane(vec3.fromValues(0,0,0), vec2.fromValues(2000,2000), 20);
  plane.create();
  planePos = vec2.fromValues(0,120);


// Get load manager via method
//   loader = controller.getLoader();
//
//   loader.add('dark', {
//     src: ['darkside.mp3']
// });
//



  city = new City();
  town = new Town();


  darkside = new Howl({
  src: ['darkside.mp3'],
  html5: false
});

  //var loader : Date  = new Date();

  //var loadtime : number = new Date().valueOf() - loader.valueOf();






  for(var i = 0; i < city.buildings.length; i++){
    var curr_building : Cube[] = city.buildings[i].stack;
    for (var j = 0; j < curr_building.length; j++){
      curr_building[j].create();
    }

  }

  for(var i = 0; i < town.buildings.length; i++){
    var curr_building : Cube[] = town.buildings[i].stack;
    for (var j = 0; j < curr_building.length; j++){
      curr_building[j].create();
    }

  }


}

//funtion to load OBJ ... thank u, cis 460 half edge

 function loadOBJ(mesh: Drawable, objFile: string, callback: any): void {
    var vertIDX = [];
    var vertNor = [];
    var vertBuff = [];
    var buffNor = [];
    var buffIDX: any = {};
    var finalIDX = [];
    var index: number = 0;

    var lines = objFile.split('\n');

    for (var i = 0; i < lines.length; i++) {
      var isVert : boolean = lines[i].startsWith('v ');
      var isNor : boolean = lines[i].startsWith('vn ');
      var isFace : boolean = lines[i].startsWith('f ');

        if (isVert) {
            var line = lines[i].split(/\s+/);
            for(var j = 1; j <= 3; j++){
              vertIDX.push(line[j]);
            }
        }
        else if (isNor) {
            line = lines[i].split(/\s+/);
            for(var j = 1; j <= 3; j++){
              vertNor.push(line[j]);
            }
        }
        else if (isFace) {
            line = lines[i].split(/\s+/);
            var emptyStringIndex = line.indexOf('');
            if (emptyStringIndex > -1) {
                line.splice(emptyStringIndex, 1);
            }

            var fIndex = line.indexOf('f');
            if (fIndex > -1) {
                line.splice(fIndex, 1);
            }

            for (var j = 0; j < line.length; j++) {
                if (line[j] in buffIDX) {
                    finalIDX.push(buffIDX[line[j]]);
                } else {
                    var face: Array<string> = line[j].split('/');

                    var f0 = (parseInt(face[0]) - 1) * 3;
                    var f2 = (parseInt(face[2]) - 1) * 3;

                    vertBuff.push(vertIDX[f0 + 0]);
                    vertBuff.push(vertIDX[f0 + 1]);
                    vertBuff.push(vertIDX[f0 + 2]);
                    vertBuff.push(1);

                    buffNor.push(vertNor[f2 + 0]);
                    buffNor.push(vertNor[f2 + 1]);
                    buffNor.push(vertNor[f2 + 2]);
                    buffNor.push(0);

                    buffIDX[line[j]] = index;
                    finalIDX.push(index);
                    index += 1;
                }
            }
        }
    }

    var finalPos = vertBuff;
    var finalNor = buffNor;
    var finalIndex = finalIDX;

    callback(finalIndex, finalPos, finalNor);
}



function update() {


  plantMesh.destroy();
  plantMesh.clear();

  let startChar: string = 'A';
  let plantLSystem: LSystem = new LSystem(startChar, plantMesh);

  for (var i = 0; i < controls.Iterations; i++) {
    plantLSystem.computeLSystem();
  }

  //create the Leaf and plant system
  let turtle: Turtle = new Turtle(controls.LeafSize, plantMesh, vec3.fromValues(0, 0, 0), quat.create(), 0, 1);
  plantLSystem.addRules(leaf, mario, plantMesh, turtle);
  plantLSystem.drawLSystem();

  plantMesh.create();
}

function main() {
  // Initial display for framerate
  const stats = Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);

  // Add controls to the gui
  const gui = new DAT.GUI();
  gui.add(controls, 'Update');
  gui.add(controls, 'LeafSize', 0.5, 1.5);
  gui.add(controls, 'Iterations', 0, 4).step(1);
  var colorPicker = gui.addColor(controls, 'Piranha Color');
  var colorPicker2 = gui.addColor(controls, 'Tube Color');
  var colorPicker3 = gui.addColor(controls, 'Leaf Color');

  colorPicker.onChange(function(value : Float32Array) {
    mario.setColor(vec3.fromValues(value[0] / 255.0, value[1] / 255.0, value[2] / 255.0));
    mario.resetColors();
  });

  colorPicker2.onChange(function(value : Float32Array) {
    pipes.setColor(vec3.fromValues(value[0] / 255.0, value[1] / 255.0, value[2] / 255.0));
    pipes.resetColors();
  });

  colorPicker3.onChange(function(value : Float32Array) {
    leaf.setColor(vec3.fromValues(value[0] / 255.0, value[1] / 255.0, value[2] / 255.0));
    leaf.resetColors();
  });

  // get canvas and webgl context
  const canvas = <HTMLCanvasElement>document.getElementById('canvas');
  const gl = <WebGL2RenderingContext>canvas.getContext('webgl2');
  if (!gl) {
    alert('WebGL 2 not supported!');
  }
  // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
  // Later, we can import `gl` from `globals.ts` to access it
  setGL(gl);

  // Initial call to load scene
  loadScene();


  console.log(darkside.state());

  var currState : any = darkside.state();


  //var darkID : number = darkside.play();

  //var playing : Boolean = darkside.playing( darkID );

  //console.log(playing);
   start = new Date();

//   while (true){
//   if (playing){
//   start = new Date();
//   break;
// }
// }









  //elapsed = new Date().valueOf() - start.valueOf();

 const camera = new Camera(vec3.fromValues(0, 5, 5), vec3.fromValues(0, 0, -20));

 //car front
  camera2 = new Camera(vec3.fromValues(-6, 0.5, 1.2), vec3.fromValues(0, 0, 0));

  //car side
  const camera3 = new Camera(vec3.fromValues(-3.5, 1, -1), vec3.fromValues(0, 0, 0));

  const renderer = new OpenGLRenderer(canvas);
  //THISSSSSSSSSSSSSS
  renderer.setClearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  const lambert = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/lambert-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/lambert-frag.glsl')),
  ]);

  const instancedShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/instanced-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/instanced-frag.glsl')),
]);

const flat = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/flat-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/flat-frag.glsl')),
]);

const floor = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/ground-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/ground-frag.glsl')),
]);

const boxShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/box-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/box-frag.glsl')),
]);

const tealShader = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/teal-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/teal-frag.glsl')),
]);


const dark1 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark1-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark1-frag.glsl')),
]);


const dark2 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark2-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark2-frag.glsl')),
]);

const dark3 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark3-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark3-frag.glsl')),
]);

const dark4 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark4-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark4-frag.glsl')),
]);

const dark5 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark5-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark5-frag.glsl')),
]);

const dark6 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark6-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark6-frag.glsl')),
]);


const dark7 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark7-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark7-frag.glsl')),
]);

const dark8 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark8-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark8-frag.glsl')),
]);

const dark9 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark9-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark9-frag.glsl')),
]);

const dark10 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark10-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark10-frag.glsl')),
]);

const dark11 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark11-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark11-frag.glsl')),
]);

const dark12 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark12-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark12-frag.glsl')),
]);

const dark13 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark13-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark13-frag.glsl')),
]);

const dark14 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark14-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark14-frag.glsl')),
]);

const dark15 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark15-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark15-frag.glsl')),
]);

const dark16 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark16-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark16-frag.glsl')),
]);

const dark17 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark17-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark17-frag.glsl')),
]);

const dark18 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark18-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark18-frag.glsl')),
]);

const dark19 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark19-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark19-frag.glsl')),
]);

const dark20 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark20-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark20-frag.glsl')),
]);

const dark21 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark21-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark21-frag.glsl')),
]);
const dark22 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark22-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark22-frag.glsl')),
]);

const dark23 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark23-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark23-frag.glsl')),
]);

const dark24 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark24-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark24-frag.glsl')),
]);

const dark25 = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, require('./shaders/dark25-vert.glsl')),
    new Shader(gl.FRAGMENT_SHADER, require('./shaders/dark25-frag.glsl')),
]);

  function leafCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    leaf.indices = Uint32Array.from(indices);
    leaf.positions = Float32Array.from(positions);
    leaf.normals = Float32Array.from(normals);
    leaf.create();
  }

  function marioCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    mario.indices = Uint32Array.from(indices);
    mario.positions = Float32Array.from(positions);
    mario.normals = Float32Array.from(normals);
    mario.create();
  }

  function pipesCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    pipes.indices = Uint32Array.from(indices);
    pipes.positions = Float32Array.from(positions);
    pipes.normals = Float32Array.from(normals);
    pipes.create();
  }

  function groundCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    ground.indices = Uint32Array.from(indices);
    ground.positions = Float32Array.from(positions);
    ground.normals = Float32Array.from(normals);
    ground.create();
  }

  function boxCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    box.indices = Uint32Array.from(indices);
    box.positions = Float32Array.from(positions);
    box.normals = Float32Array.from(normals);
    box.create();
  }

  function questionCallback(indices: Array<number>, positions: Array<number>, normals: Array<number>): void {
    question.indices = Uint32Array.from(indices);
    question.positions = Float32Array.from(positions);
    question.normals = Float32Array.from(normals);
    question.create();
  }

  // SOURCE CODE FOR READING OBJ FILE FROM PIAZZA
  //https://piazza.com/class/jr11vjieq8t6om?cid=103
  function parseOBJ(file: string, callback: any): void {
    let indices: Uint32Array = new Uint32Array(0);
    let positions: Float32Array = new Float32Array(0);
    let normals: Float32Array = new Float32Array(0);

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {

      if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
              var allText = rawFile.responseText;
              loadOBJ(leaf, allText, callback);
    }
  }
}
    rawFile.send(null);
  }

  let brainFileName: string = "./brain.obj";
  parseOBJ(brainFileName, leafCallback);

  let marioFilename: string = "./bite.obj";
  parseOBJ(marioFilename, marioCallback);

  let tubeFile: string = "./car.obj";
  parseOBJ(tubeFile, pipesCallback);

  let groundFile: string = "./ground2.obj";
  parseOBJ(groundFile, groundCallback);

  let boxFile: string = "./box.obj";
  parseOBJ(boxFile, boxCallback);

  let quesFile: string = "./brick.obj";
  parseOBJ(quesFile, questionCallback);

  update();

  // This function will be called every frame
  function tick() {
    camera.update();
    camera2.update();
    camera3.update();
    stats.begin();
    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.clear();
    pipes.create();



  //  renderer.render(camera, flat, [screenQuad]);
    //  renderer.render(camera, lambert, elapsed, [
    //     brain,
    // //   pipes
    //  ]);

    elapsed = new Date().valueOf() - start.valueOf();

    if (elapsed <= 2000){
    renderer.render(camera, dark1, elapsed, [screenQuad]);
  }
  if (elapsed > 2000 && elapsed <= 11500){
  renderer.render(camera, dark2,elapsed, [screenQuad]);
}
if (elapsed > 11500 && elapsed <= 21500){
  let velocity: vec2 = vec2.fromValues(0,0);
  velocity[1] += -0.05 - Math.abs(Math.cos(10.471 * elapsed / 5000));
  velocity[0] += 0.5 + Math.sin(10.471 * elapsed / 5000);
  let newPos: vec2 = vec2.fromValues(0,0);
    vec2.add(newPos, velocity, planePos);
    dark3.setPlanePos(newPos);
    planePos = newPos;

renderer.render(camera, dark3,elapsed, [plane]);
renderer.render(camera, dark4, elapsed,[screenQuad]);
}


if (elapsed > 21500 && elapsed <= 41000){
renderer.render(camera, dark4,elapsed, [screenQuad]);
}
if (elapsed > 41000 && elapsed <= 49500){

  let velocity: vec2 = vec2.fromValues(0,0);
  //velocity[1] += -0.05 - Math.abs(Math.cos(10.471 * elapsed / 5000));
  velocity[0] += 0.9 + Math.sin(0.471 * elapsed / 5000);

  let newPos: vec2 = vec2.fromValues(0,0);
    vec2.add(newPos, velocity, planePos);
    dark5.setPlanePos(newPos);
    planePos = newPos;
renderer.render(camera, dark5, elapsed, [plane]);
}

if (elapsed > 49500 && elapsed <= 60000){
renderer.render(camera, dark6,elapsed, [screenQuad]);
}
if (elapsed > 60000 && elapsed <= 70000){
renderer.render(camera, dark7,elapsed, [screenQuad]);
}
if (elapsed > 70000 && elapsed <= 79000){
renderer.render(camera, dark8,elapsed, [screenQuad]);
}

if (elapsed > 79000 && elapsed <= 89000){
renderer.render(camera, dark9, elapsed,[screenQuad]);
}

if (elapsed > 89000 && elapsed <= 98000){
renderer.render(camera, dark10,elapsed, [screenQuad]);
}

if (elapsed > 98000 && elapsed <= 108000){
renderer.render(camera, dark11,elapsed, [screenQuad]);
}

if (elapsed > 108000 && elapsed <= 117000){
renderer.render(camera, dark12,elapsed, [screenQuad]);
}

if (elapsed > 117000 && elapsed <= 127000){
renderer.render(camera, dark13,elapsed, [screenQuad]);
}

if (elapsed > 127000 && elapsed <= 137000){
renderer.render(camera, dark14, elapsed,[screenQuad]);
}

if (elapsed > 137000 && elapsed <= 146000){
renderer.render(camera, dark15,elapsed, [screenQuad]);
}

if (elapsed > 146000 && elapsed <= 151000){
renderer.render(camera, dark16,elapsed, [screenQuad]);
}

if (elapsed > 151000 && elapsed <= 161000){
  let velocity: vec2 = vec2.fromValues(10,0);
  velocity[0] += (1.9 + Math.abs(Math.sin(10.471 * elapsed / 1000)));

  let newPos: vec2 = vec2.fromValues(0,0);
    vec2.sub(newPos, planePos, velocity);
    dark17.setPlanePos(newPos);
    planePos = newPos;

  renderer.render(camera2, dark17, elapsed, [plane]);
  renderer.render(camera, dark16,elapsed, [screenQuad]);
  renderer.render(camera2, lambert ,elapsed, [pipes]);
}

if (elapsed > 161000 && elapsed <= 171000){
  let velocity: vec2 = vec2.fromValues(0,0);
  velocity[1] += -0.05 - Math.abs(Math.cos(10.471 * elapsed / 5000));
  velocity[0] += 0.5 + Math.sin(10.471 * elapsed / 5000);
  let newPos: vec2 = vec2.fromValues(0,0);
    vec2.add(newPos, velocity, planePos);
    dark3.setPlanePos(newPos);
    planePos = newPos;

renderer.render(camera, dark3,elapsed, [plane]);
renderer.render(camera, dark4, elapsed,[screenQuad]);
}

if (elapsed > 171000 && elapsed <= 180000){
  renderer.render(camera, dark16,elapsed, [screenQuad]);
    renderer.render(camera3, lambert ,elapsed, [pipes]);
}

if (elapsed > 180000 && elapsed <= 190000){
renderer.render(camera, dark20,elapsed, [screenQuad]);
}

if (elapsed > 190000 && elapsed <= 199000){
renderer.render(camera, dark21, elapsed, [screenQuad]);
}

if (elapsed > 199000 && elapsed <= 209000){
renderer.render(camera, dark22,elapsed, [screenQuad]);
}

if (elapsed > 209000 && elapsed <= 218000){
renderer.render(camera, dark23,elapsed, [screenQuad]);
}

if (elapsed > 218000 && elapsed <= 227000){
renderer.render(camera, dark24, elapsed,[screenQuad]);
}




    //renderer.render(camera, floor, [ground]);



    stats.end();

    // Tell the browser to call `tick` again whenever it renders a new frame
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.setAspectRatio(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
    camera2.setAspectRatio(window.innerWidth / window.innerHeight);
    camera2.updateProjectionMatrix();
    camera3.setAspectRatio(window.innerWidth / window.innerHeight);
    camera3.updateProjectionMatrix();
    boxShader.setDimensions(window.innerWidth, window.innerHeight);
    tealShader.setDimensions(window.innerWidth, window.innerHeight);
  }, false);

  window.addEventListener('keyup', function (e) {
    switch(e.key) {
      case 'w':
      darkside.play();
      start = new Date();
      break;

    }
  }, false);

  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.setAspectRatio(window.innerWidth / window.innerHeight);
  camera2.setAspectRatio(window.innerWidth / window.innerHeight);
  camera3.setAspectRatio(window.innerWidth / window.innerHeight);
  boxShader.setDimensions(window.innerWidth, window.innerHeight);
  tealShader.setDimensions(window.innerWidth, window.innerHeight);
  dark2.setDimensions(window.innerWidth, window.innerHeight);
  dark3.setDimensions(window.innerWidth, window.innerHeight);
  dark4.setDimensions(window.innerWidth, window.innerHeight);
  dark5.setDimensions(window.innerWidth, window.innerHeight);
  dark6.setDimensions(window.innerWidth, window.innerHeight);
  dark7.setDimensions(window.innerWidth, window.innerHeight);
  dark8.setDimensions(window.innerWidth, window.innerHeight);
  dark9.setDimensions(window.innerWidth, window.innerHeight);
  dark10.setDimensions(window.innerWidth, window.innerHeight);
  dark11.setDimensions(window.innerWidth, window.innerHeight);
  dark12.setDimensions(window.innerWidth, window.innerHeight);
  dark13.setDimensions(window.innerWidth, window.innerHeight);
  dark14.setDimensions(window.innerWidth, window.innerHeight);
  dark15.setDimensions(window.innerWidth, window.innerHeight);
  dark16.setDimensions(window.innerWidth, window.innerHeight);
    dark17.setDimensions(window.innerWidth, window.innerHeight);
    dark20.setDimensions(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
  camera2.updateProjectionMatrix();
    camera3.updateProjectionMatrix();

  // Start the render loop
  tick();
}

main();
