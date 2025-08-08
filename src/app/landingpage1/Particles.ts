// particles.ts

export interface Particle {
  width: string;
  height: string;
  top: string;
  left: string;
  animation: string;
  opacity: number;
}

const particles: Particle[] = [];

const totalParticles = 50;

for (let i = 0; i < totalParticles; i++) {
  // array insert
  particles.push({
    width: `${(Math.random() * 5 + 2).toFixed(2)}px`,
    height: `${(Math.random() * 5 + 2).toFixed(2)}px`,
    top: `${(Math.random() * 100).toFixed(2)}%`, // Full vertical range
    left: `${(Math.random() * 100).toFixed(2)}%`, // Full horizontal range
    animation: `particleMove ${(Math.random() * 3 + 3).toFixed(2)}s infinite linear`,
    opacity: +(Math.random() * 0.6 + 0.3).toFixed(2),
  });
}

export default particles;
