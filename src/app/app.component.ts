import { Component, OnInit } from '@angular/core';

import gsap from 'gsap';
import {
  PlaneGeometry,
  BufferAttribute,
  Raycaster,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  DoubleSide,
  FlatShading,
  Mesh,
  DirectionalLight,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
  Points
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'my portfolio';

  constructor(public router: Router){}

  ngOnInit(): void {

  }
}
