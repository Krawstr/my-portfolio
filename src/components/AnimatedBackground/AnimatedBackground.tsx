import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  active?: number;
  closest?: Point[];
  circle?: Circle;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;
  ctx: CanvasRenderingContext2D;

  constructor(pos: Point, rad: number, color: string, ctx: CanvasRenderingContext2D) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
    this.ctx = ctx;
  }

  draw() {
    if (!this.active) return;
    const { ctx } = this;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  }
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const target: Point = {
      x: width / 2,
      y: height / 2,
      originX: width / 2,
      originY: height / 2,
    };

    let points: Point[] = [];
    let animateHeader = true;

    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20);
        const py = y + Math.random() * (height / 20);
        const p: Point = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    for (let i = 0; i < points.length; i++) {
      const p1 = points[i];
      const closest: Point[] = [];

      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 === p2) continue;

        if (closest.length < 5) {
          closest.push(p2);
        } else {
          let maxDist = getDistance(p1, closest[0]);
          let maxIndex = 0;
          for (let k = 1; k < 5; k++) {
            const dist = getDistance(p1, closest[k]);
            if (dist > maxDist) {
              maxDist = dist;
              maxIndex = k;
            }
          }
          const dist = getDistance(p1, p2);
          if (dist < maxDist) {
            closest[maxIndex] = p2;
          }
        }
      }

      p1.closest = closest;
    }

    for (let i = 0; i < points.length; i++) {
      const circle = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)', ctx);
      points[i].circle = circle;
    }

    for (let i = 0; i < points.length; i++) {
      shiftPoint(points[i]);
    }

    const mouseMove = (e: MouseEvent) => {
      target.x = e.pageX;
      target.y = e.pageY;
    };

    const scrollCheck = () => {
      animateHeader = document.body.scrollTop <= height;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    const animate = () => {
      if (!ctx) return;

      if (animateHeader) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const d = getDistance(target, p);

          if (d < 4000) {
            p.active = 0.3;
            p.circle!.active = 0.6;
          } else if (d < 20000) {
            p.active = 0.1;
            p.circle!.active = 0.3;
          } else if (d < 40000) {
            p.active = 0.02;
            p.circle!.active = 0.1;
          } else {
            p.active = 0;
            p.circle!.active = 0;
          }

          drawLines(ctx, p);
          p.circle!.draw();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };

    function shiftPoint(p: Point) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'circ.inOut',
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(ctx: CanvasRenderingContext2D, p: Point) {
      if (!p.active || !p.closest) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    }

    function getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  }, []);

  return (
    <div id="large-header" ref={containerRef}>
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default AnimatedBackground;
