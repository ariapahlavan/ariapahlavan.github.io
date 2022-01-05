import * as THREE from 'three';
import { RENDERER_HEIGHT, RENDERER_WIDTH } from '../constants/three.constants';
import { PerspectiveCamera, WebGLRenderer } from 'three';

export class ThreeHelper {
  private renderer: WebGLRenderer;
  private canvas: HTMLCanvasElement;

  constructor() {
    const renderer = new WebGLRenderer();
    renderer.setSize(RENDERER_WIDTH, RENDERER_HEIGHT);
    const rendererElem = renderer.domElement;
    rendererElem.style.width = '100%';
    rendererElem.style.height = '100%';
    rendererElem.style.display = 'block';
    document.body.appendChild(renderer.domElement);

    this.renderer = renderer;
    this.canvas = rendererElem;
  }

  animate(scene, camera, animation) {
    const render = time => {
      animation(time);
      if (this.resizeRendererToDisplaySize(this.renderer)) {
        this.updateCameraAspect(camera, this.renderer);
      }
      this.renderer.render(scene, camera);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  private resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const elemWidth = canvas.clientWidth * pixelRatio | 0;
    const elemHeight = canvas.clientHeight * pixelRatio | 0;
    const renderWidth = canvas.width;
    const renderHeight = canvas.height;
    const needResize = renderWidth !== elemWidth || renderHeight !== elemHeight;
    if (needResize) {
      renderer.setSize(elemWidth, elemHeight, false);
    }
    return needResize;
  }

  private updateCameraAspect(camera: PerspectiveCamera, renderer: WebGLRenderer) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}
