import { Component, OnInit } from '@angular/core';
import { ASPECT_RATIO, FAR_CLIPPING_PLANE, FOV, MESH_MATERIAL, NEAR_CLIPPING_PLANE } from '../shared/constants/three.constants';
import { THREE_HELPER } from '../shared/helpers/three.helper';
import { BoxGeometry, BufferGeometry, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, Vector3 } from 'three';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private animations: Function[] = [];

  constructor() {
  }

  x = 0;
  y = 0;
  z = 0;

  ngOnInit(): void {
    const scene = new Scene();
    const camera = new PerspectiveCamera(FOV, ASPECT_RATIO, NEAR_CLIPPING_PLANE, FAR_CLIPPING_PLANE);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // const line: Line = this.makeLine();
    // scene.add(line);

    const cube: Mesh = this.makeCube();
    scene.add(cube);

    this.rotateCube(cube);
    // this.moveCube(cube);
    // this.moveCamera(camera);

    THREE_HELPER.animate(scene, camera, time => this.animations.forEach(x => x(time)));
  }

  makeLine() {
    const points = [
      new Vector3(-10, 0, 0),
      new Vector3(0, 10, 0),
      new Vector3(10, 0, 0),
    ];

    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({color: 0x0000ff});
    return new Line(geometry, material);
  }

  makeCube() {
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial(MESH_MATERIAL);
    return new Mesh(geometry, material);
  }

  rotateCube(cube: Mesh) {
    this.animations.push(time => {
      const timeSec = time * 0.001;
      cube.rotation.x = timeSec;
      cube.rotation.y = timeSec;
    });
  }

  moveCube(cube: Mesh) {
    this.animations.push(() => {
      cube.position.x += 0.01;
    });
  }

  moveCamera(camera: PerspectiveCamera) {
    this.animations.push(() => {
      this.y += 0.01;
      camera.lookAt(this.x, this.y, this.z);
    });
  }
}
