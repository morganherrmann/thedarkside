import {mat4, vec4, mat3} from 'gl-matrix';
import Drawable from './Drawable';
import Camera from '../../Camera';
import {gl} from '../../globals';
import ShaderProgram from './ShaderProgram';

// In this file, `gl` is accessible because it is imported above
class OpenGLRenderer {
  color: vec4 = vec4.fromValues(0.42, 0.46, 0.14, 1); // default geometry color
  time: number = 0;

  constructor(public canvas: HTMLCanvasElement) {
  }

  setClearColor(r: number, g: number, b: number, a: number) {
    gl.clearColor(r, g, b, a);
  }

  setSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  setGeometryColor(color: Float32Array) {
    this.color = vec4.fromValues(color[0] / 255, color[1] / 255, color[2] / 255, 1);
  }

  clear() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  render(camera: Camera, prog: ShaderProgram, drawables: Array<Drawable>) {
    let model = mat4.create();
    let viewProj = mat4.create();
    let color = vec4.fromValues(1, 0, 0, 1);
    let axes = mat3.fromValues(camera.right[0], camera.right[1], camera.right[2],
                               camera.up[0], camera.up[1], camera.up[2],
camera.forward[0], camera.forward[1], camera.forward[2]);

    mat4.identity(model);
    mat4.multiply(viewProj, camera.projectionMatrix, camera.viewMatrix);
    prog.setModelMatrix(model);
    prog.setViewProjMatrix(viewProj);
    prog.setCameraAxes(axes);
    prog.setGeometryColor(this.color);

    prog.setTime(this.time);
    this.time++;

    for (let drawable of drawables) {
      prog.draw(drawable);
    }
  }
};

export default OpenGLRenderer;
