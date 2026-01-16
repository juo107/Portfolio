
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const location = useLocation();
  const warpFactor = useRef(0);
  const isWarping = useRef(false);

  useEffect(() => {
    isWarping.current = true;
    warpFactor.current = 0;
    const timer = setTimeout(() => { isWarping.current = false; }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = 400;

    class Star {
      x: number; y: number; z: number; size: number;
      px: number; py: number;
      
      constructor(w: number, h: number) {
        this.reset(w, h, true);
      }

      reset(w: number, h: number, initial = false) {
        this.x = (Math.random() - 0.5) * w * 2;
        this.y = (Math.random() - 0.5) * h * 2;
        this.z = initial ? Math.random() * w : w;
        this.px = 0; this.py = 0;
        this.size = 1;
      }

      update(w: number, h: number, speed: number) {
        this.z -= speed;
        if (this.z <= 0) this.reset(w, h);

        this.px = (this.x / this.z) * (w / 2) + w / 2;
        this.py = (this.y / this.z) * (h / 2) + h / 2;

        this.px += (mouse.current.x - w / 2) * 0.05 * (1 - this.z / w);
        this.py += (mouse.current.y - h / 2) * 0.05 * (1 - this.z / w);
      }

      draw(context: CanvasRenderingContext2D, isWarping: boolean) {
        const s = (1 - this.z / canvas!.width) * 2;
        context.beginPath();
        
        if (isWarping) {
          context.lineWidth = s;
          context.lineCap = 'round';
          context.strokeStyle = `rgba(255, 255, 255, ${s * 0.5})`;
          context.moveTo(this.px, this.py);
          context.lineTo(this.px + (this.px - canvas!.width/2) * 0.1, this.py + (this.py - canvas!.height/2) * 0.1);
          context.stroke();
        } else {
          context.arc(this.px, this.py, s, 0, Math.PI * 2);
          context.fillStyle = `rgba(255, 255, 255, ${s})`;
          context.fill();
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: starCount }, () => new Star(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0)');
      grad.addColorStop(0.5, 'rgba(30, 58, 138, 0.03)');
      grad.addColorStop(1, 'rgba(88, 28, 135, 0.05)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (isWarping.current) {
        warpFactor.current = Math.min(warpFactor.current + 2, 40);
      } else {
        warpFactor.current = Math.max(warpFactor.current - 1, 1.5);
      }

      stars.forEach(star => {
        star.update(canvas.width, canvas.height, warpFactor.current);
        star.draw(ctx, isWarping.current);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    init();
    animate();
    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [location.pathname]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none -z-50" />;
};
