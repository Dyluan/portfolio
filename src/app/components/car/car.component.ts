import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-car',
  imports: [
    TranslateModule
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private cube!: THREE.Mesh;
  private animationId!: number;
  private resizeObserver!: ResizeObserver;

  ngAfterViewInit(): void {
    this.initThree();
    this.createScene().then(() => {
      this.animate();
    });
  }

  ngOnDestroy(): void {
    // Clean up
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private initThree(): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("rgb(40, 44, 51)");

    // Camera
    this.camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 1000);
    this.camera.position.z = 90;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    // OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true; // Smooth camera movements
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;

    // Handle container resize
    this.resizeObserver = new ResizeObserver(() => this.onContainerResize());
    this.resizeObserver.observe(container);
  }

  private async createScene(): Promise<void> {
    // Add lighting first
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    try {
      const gltf = await loader.loadAsync('/animated/scene.gltf');
      const model = gltf.scene;
      
      // Rotate the model to face left (90 degrees on Y axis)
      model.rotation.y = (3 * Math.PI) / 2;
      
      // Center the model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      
      // Move model so its center is at origin (0,0,0)
      model.position.x -= center.x;
      model.position.y -= center.y;
      model.position.z -= center.z;

      console.log('Box size:', box.getSize(new THREE.Vector3()));
      console.log('Center:', center);
      
      this.scene.add(model);
      
      // Set orbit controls to look at the center
      this.controls.target.set(0, 0, 0);
      this.controls.update();
      
      // Store reference if you need to animate it
      this.cube = model as any;
    } catch (error) {
      console.error('Error loading GLTF model:', error);
    }
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Update controls for damping
    this.controls.update();

    this.renderer.render(this.scene, this.camera);
  };



  private onContainerResize(): void {
    const container = this.canvasContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
