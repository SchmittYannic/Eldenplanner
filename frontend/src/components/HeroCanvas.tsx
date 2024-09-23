import { useEffect, useRef } from "react";

interface ParticleProps {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
}

// Define Particle class
class Particle implements ParticleProps {
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string,
        public speedX: number,
        public speedY: number
    ) { }

    draw(ctx: CanvasRenderingContext2D): void {
        if (!ctx) return
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(ctx: CanvasRenderingContext2D, paths: (Path | Crescent)[]): void {
        // this.x += this.speedX;
        // this.y += this.speedY;

        // // Keep particle inside the path
        // path.keepInside(this);
        // this.draw(ctx);
        this.x += this.speedX;
        this.y += this.speedY;

        // Check if inside any of the paths
        for (const path of paths) {
            if (path instanceof Path) {
                path.keepInside(this);
            } else if (path instanceof Crescent) {
                if (!path.contains(this)) {
                    // Optionally adjust the particle if it goes out of the crescent
                    const angle = Math.atan2(this.y - path.centerY, this.x - path.centerX);
                    this.x = path.centerX + path.outerRadius * Math.cos(angle);
                    this.y = path.centerY + path.outerRadius * Math.sin(angle);
                    this.speedX *= -0.5; // Optional: reverse speed when bouncing
                    this.speedY *= -0.5; // Optional: reverse speed when bouncing
                }
            }
        }

        this.draw(ctx);
    }
}

class Path {
    constructor(public centerX: number, public centerY: number, public radius: number) { }

    contains(particle: Particle): boolean {
        const distance = Math.sqrt(
            (particle.x - this.centerX) ** 2 + (particle.y - this.centerY) ** 2
        );
        return distance <= this.radius - particle.radius;
    }

    keepInside(particle: Particle): void {
        const distance = Math.sqrt(
            (particle.x - this.centerX) ** 2 + (particle.y - this.centerY) ** 2
        );

        if (distance > this.radius - particle.radius) {
            // Normalize the direction vector and move the particle inside the circle
            const angle = Math.atan2(particle.y - this.centerY, particle.x - this.centerX);
            particle.x = this.centerX + (this.radius - particle.radius) * Math.cos(angle);
            particle.y = this.centerY + (this.radius - particle.radius) * Math.sin(angle);
            particle.speedX *= -0.5; // Optional: reverse speed a bit when bouncing
            particle.speedY *= -0.5; // Optional: reverse speed a bit when bouncing
        }
    }
}

class Crescent {
    constructor(public centerX: number, public centerY: number, public outerRadius: number, public innerRadius: number) { }

    contains(particle: Particle): boolean {
        const distanceToCenter = Math.sqrt(
            (particle.x - this.centerX) ** 2 + (particle.y - this.centerY) ** 2
        );
        return distanceToCenter <= this.outerRadius && distanceToCenter >= this.innerRadius;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();

        // Draw the outer circle
        ctx.arc(this.centerX, this.centerY, this.outerRadius, Math.PI, 0);

        // Draw the inner circle to cut out the crescent shape
        ctx.arc(this.centerX, this.centerY, this.innerRadius, 0, Math.PI, true);

        ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Crescent color
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'rgba(0, 255, 0, 1)'; // Crescent outline color
        ctx.lineWidth = 2; // Outline thickness
        ctx.stroke();
    }
}

const HeroCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        // Resize canvas
        canvas.width = 500;
        canvas.height = 500;

        const particles: Particle[] = [];
        const path = new Path(canvas.width / 2, canvas.height / 2, 150); // Circle in the middle
        const crescent = new Crescent(canvas.width / 2, canvas.height / 2 - 150, 100, 70); // Crescent shape above the circle

        // Utility function to get random number in a range
        function random(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        }

        // Initialize particles
        function initParticles(): void {
            const numParticles = 30;
            for (let i = 0; i < numParticles; i++) {
                const radius = 3;
                const x = random(radius, canvas.width - radius);
                const y = random(radius, canvas.height - radius);
                const speedX = random(-0.5, 0.5);
                const speedY = random(-0.5, 0.5);
                const color = 'rgba(237, 208, 106, 1)';
                particles.push(new Particle(x, y, radius, color, speedX, speedY));
            }
        }

        // Animation loop
        function animate(): void {
            if (!ctx) return
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // particles.forEach(particle => particle.update(ctx, path));
            // requestAnimationFrame(animate);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the circular path for debugging
            ctx.beginPath();
            ctx.arc(path.centerX, path.centerY, path.radius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // Outline color
            ctx.lineWidth = 2; // Outline thickness
            ctx.stroke();
            ctx.closePath();

            crescent.draw(ctx); // Draw the crescent path for debugging

            particles.forEach(particle => particle.update(ctx, [path, crescent]));
            requestAnimationFrame(animate);
        }

        // Initialize and start animation
        initParticles();
        animate();
    }, []);

    return <canvas ref={canvasRef} id="particleCanvas"></canvas>;
}

export default HeroCanvas;