import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (!canvas || !ctx) return;

    canvas.width = width;
    canvas.height = height;

    let points: any[] = [];
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20);
        const py = y + Math.random() * (height / 20);
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    for (let i = 0; i < points.length; i++) {
      let closest: any[] = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 === p2) continue;
        if (closest.length < 5) {
          closest.push(p2);
        } else {
          let maxDistIndex = 0;
          let maxDist = getDistance(p1, closest[0]);
          for (let k = 1; k < 5; k++) {
            const dist = getDistance(p1, closest[k]);
            if (dist > maxDist) {
              maxDist = dist;
              maxDistIndex = k;
            }
          }
          const dist = getDistance(p1, p2);
          if (dist < maxDist) {
            closest[maxDistIndex] = p2;
          }
        }
      }
      p1.closest = closest;
    }

    // Assign circles
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    const animate = () => {
      if (!ctx) return;

      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < points.length; i++) {
          const p = points[i];
          const d = getDistance(target, p);
          if (d < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (d < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (d < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }
          drawLines(ctx, p);
          p.circle.draw();
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

    function shiftPoint(p: any) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: 'circ.inOut',
        onComplete: () => shiftPoint(p),
      });
    }

    function drawLines(ctx: CanvasRenderingContext2D, p: any) {
      if (!p.active) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      }
    }

    function getDistance(p1: any, p2: any) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function Circle(pos: any, rad: number, color: string, ctx: CanvasRenderingContext2D) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 0;
      this.draw = () => {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }
  }, []);

  return (
    <div id="large-header" ref={containerRef}>
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default AnimatedBackground;
