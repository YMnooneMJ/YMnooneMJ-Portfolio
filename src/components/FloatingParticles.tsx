import { useEffect, useRef } from "react";

const COLORS_LIGHT = [
  "rgba(99,102,241,0.18)",   // indigo-500
  "rgba(236,72,153,0.18)",   // pink-500
  "rgba(59,130,246,0.18)",   // blue-500
  "rgba(16,185,129,0.18)",   // emerald-500
  "rgba(255,255,255,0.22)",  // white
];

const COLORS_DARK = [
  "rgba(139,92,246,0.22)",   // purple-500
  "rgba(236,72,153,0.22)",   // pink-500
  "rgba(34,211,238,0.18)",   // cyan-400
  "rgba(253,224,71,0.13)",   // yellow-400
  "rgba(255,255,255,0.10)",  // white
];

function getTheme() {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let theme = getTheme();
    let colors = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;

    const particles: {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      color: string;
      opacity: number;
    }[] = [];

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 70; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 1.5 + Math.random() * 2.5,
          speedY: 0.15 + Math.random() * 0.35,
          speedX: (Math.random() - 0.5) * 0.15,
          color,
          opacity: 0.5 + Math.random() * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 2
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.y -= p.speedY;
        p.x += p.speedX;

        // Wrap around screen
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    initParticles();
    draw();

    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    const handleThemeChange = () => {
      theme = getTheme();
      colors = theme === "dark" ? COLORS_DARK : COLORS_LIGHT;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ inset: 0 }}
    />
  );
};

export default FloatingParticles;