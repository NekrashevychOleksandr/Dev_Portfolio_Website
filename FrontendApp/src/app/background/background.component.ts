import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class NeuralBackgroundComponent implements OnInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private nodes: { x: number; y: number; radius: number; pulse: number }[] = []; // Add pulse property
  private connections: { start: any; end: any }[] = [];
  private signalPaths: { x: number; y: number; progress: number; startNode: any; endNode: any; pulse: number }[] = [];
  private signalInterval!: any;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.setupCanvas();
    this.initNodes();
    this.initConnections();
    this.animate();
    this.startSignalGeneration();
  }

  private setupCanvas(): void {
    this.canvas = this.elRef.nativeElement.querySelector('#neuralCanvas');
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initNodes(): void {
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 3 + 2, // Initial radius
        pulse: 0 // Pulse value for animating
      });
    }
  }

  private initConnections(): void {
    const connectionThreshold = 150; // Distance threshold for connections
    this.nodes.forEach((node, i) => {
      this.nodes.forEach((target, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
          );
          if (distance < connectionThreshold) {
            this.connections.push({ start: node, end: target });
          }
        }
      });
    });
  }

  private createSignal(): any {
    const randomConnectionIndex = Math.floor(Math.random() * this.connections.length);
    const { start, end } = this.connections[randomConnectionIndex];

    return {
      x: start.x,
      y: start.y,
      progress: 0,
      startNode: start,
      endNode: end,
      pulse: 0
    };
  }

  private drawNode(node: any): void {
    const pulseSize = Math.sin(node.pulse) ; // Pulsing effect
    const currentRadius = node.radius + pulseSize; // Calculate the current radius

    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#FFD700'; // Golden color for nodes
    this.ctx.shadowColor = '#FFD700';
    this.ctx.shadowBlur = 8; // Add glow effect to nodes
    this.ctx.fill();
    this.ctx.closePath();

    // Update pulse value for the next frame
    node.pulse += 0.07; // Control the speed of the pulse effect
  }

  private drawConnection(connection: any): void {
    this.ctx.beginPath();
    this.ctx.moveTo(connection.start.x, connection.start.y);
    this.ctx.lineTo(connection.end.x, connection.end.y);
    this.ctx.strokeStyle = '#ffffff30'; // Semi-transparent white for lines
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  private drawSignal(signal: any): void {
    const { startNode, endNode, progress } = signal;

    // Calculate current position based on progress
    signal.x = startNode.x + (endNode.x - startNode.x) * progress;
    signal.y = startNode.y + (endNode.y - startNode.y) * progress;

    // Draw the pulse
    this.ctx.beginPath();
    this.ctx.arc(signal.x, signal.y, 4 + Math.sin(signal.pulse) * 4, 0, Math.PI * 2); // Pulsing effect
    this.ctx.fillStyle = '#FFD700'; // Golden color for signals
    this.ctx.shadowColor = '#FFD700';
    this.ctx.shadowBlur = 10; // Glow effect for signals
    this.ctx.fill();
    this.ctx.closePath();

    // Update pulse size
    signal.pulse += 0.13; // Control the speed of the pulse effect
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.connections.forEach((connection) => this.drawConnection(connection));
    this.nodes.forEach((node) => this.drawNode(node)); // Draw nodes with pulsing effect

    this.signalPaths.forEach((signal, index) => {
      signal.progress += 0.25; // Increase speed of the signals
      if (signal.progress >= 1) {
        this.signalPaths.splice(index, 1); // Remove the signal once it reaches the end
      }
      this.drawSignal(signal);
    });

    requestAnimationFrame(() => this.animate());
  }

  private startSignalGeneration(): void {
    this.signalInterval = setInterval(() => {
      const signalsToCreate = Math.floor(Math.random() * 10) + 1; // 1 to 3 signals
      for (let i = 0; i < signalsToCreate; i++) {
        if (this.signalPaths.length < 3) { // Ensure only a maximum of 3 signals
          this.signalPaths.push(this.createSignal());
        }
      }     
    }, 3000); // Create signals every 5 seconds
  }
}