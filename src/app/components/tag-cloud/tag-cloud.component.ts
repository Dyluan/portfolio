import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TagPosition {
  x: number;
  y: number;
  z: number;
}

@Component({
  selector: 'app-tag-cloud',
  imports: [CommonModule],
  templateUrl: './tag-cloud.component.html',
  styleUrl: './tag-cloud.component.css'
})
export class TagCloudComponent implements OnInit{
  tags: string[] = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Node.js',
    'React', 'Python', 'Django', 'HTML', 'Express', 'MongoDB', 'SQL', 'Tailwind'
  ];
  tagPositions: TagPosition[] = [];

  private radius = 150;
  private angleX = 0.002;
  private angleY = 0.002;

  private mouseX = 0;
  private mouseY = 0;
  private centerX = 0;
  private centerY = 0;
  private rotationSpeedX = 0;
  private rotationSpeedY = 0;

  ngOnInit(): void {
    this.generateSpherePositions();

  // Initialiser la position du centre
  const container = document.querySelector('.tag-cloud') as HTMLElement;
  const rect = container.getBoundingClientRect();
  this.centerX = rect.left + rect.width / 2;
  this.centerY = rect.top + rect.height / 2;

  // Suivi du mouvement de souris
  window.addEventListener('mousemove', (e) => {
    this.mouseX = e.clientX - this.centerX;
    this.mouseY = e.clientY - this.centerY;

    this.rotationSpeedY = this.mouseX * 0.0001;
    this.rotationSpeedX = this.mouseY * 0.0001;
  });

  this.animate();
  }

  generateSpherePositions() {
    const len = this.tags.length;
    this.tagPositions = this.tags.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / len);
      const theta = Math.sqrt(len * Math.PI) * phi;
      return {
        x: this.radius * Math.cos(theta) * Math.sin(phi),
        y: this.radius * Math.sin(theta) * Math.sin(phi),
        z: this.radius * Math.cos(phi),
      };
    });
  }

  rotate() {
    const ax = this.rotationSpeedX;
    const ay = this.rotationSpeedY;
  
    for (let pos of this.tagPositions) {
      let { x, y, z } = pos;
  
      // Rotation X
      let y1 = y * Math.cos(ax) - z * Math.sin(ax);
      let z1 = y * Math.sin(ax) + z * Math.cos(ax);
  
      // Rotation Y
      let x1 = x * Math.cos(ay) + z1 * Math.sin(ay);
      let z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
  
      pos.x = x1;
      pos.y = y1;
      pos.z = z2;
    }
  }

  animate() {
    setInterval(() => {
      this.rotate();
    }, 16); // roughly 60fps
  }

  getTagStyle(index: number) {
    const { x, y, z } = this.tagPositions[index];
    const scale = (z + this.radius) / (2 * this.radius);
    const opacity = (z + this.radius) / (2 * this.radius);

    return {
      transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) scale(${scale})`,
      opacity: opacity,
      zIndex: Math.round(z),
    };
  }

}
