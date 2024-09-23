import { useEffect, useRef } from "react";

interface ParticleProps {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    opacity: number;
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

        // Create shapes using Path2D
        const circlePath = new Path2D();
        circlePath.arc(258, 270, 150, 0, Math.PI * 2);

        const rectPath = new Path2D();
        rectPath.rect(58, 10, 400, 100)

        const rectPath2 = new Path2D();
        rectPath2.rect(33, 350, 450, 150)

        // old arc paths
        // const originalPath = "M42,2c-6.694,8.824-26.135,8.845-32.899,0.086C17.287,8.198,33.858,8.215,42,2L42,2z";
        // const scaleFactor = 10;
        // const xOffset = 0;
        // const yOffset = 0;

        // const crescentPath = new Path2D(scalePath(originalPath, scaleFactor, xOffset, yOffset));

        // const originalPath2 = "M46.468,36.588c-5.973,11.378-22.079,14.219-32.991,8.592c-3.713-1.877-6.983-4.786-8.844-8.433c2.561,3.173,5.887,5.493,9.503,7.018C24.98,48.259,38.906,46.042,46.468,36.588L46.468,36.588z"
        // const crescentPath2 = new Path2D(scalePath(originalPath2, scaleFactor, xOffset, yOffset));

        class Particle implements ParticleProps {
            x: number;
            y: number;
            radius: number;
            color: string;
            speedX: number;
            speedY: number;
            opacity: number;
            opacityAnimationDirection: number;
            path: Path2D;

            constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number, opacity: number, path: Path2D) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
                this.opacity = opacity;
                this.opacityAnimationDirection = 1;
                this.path = path;
            }

            // Draw the particle
            draw(): void {
                if (!ctx) return
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            // Update particle position and ensure it stays within the path boundaries
            update(): void {
                this.x += this.speedX;
                this.y += this.speedY;

                if (!ctx) return

                // Check if the particle is outside the path
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                if (!ctx.isPointInPath(this.path, this.x, this.y)) {
                    // Reverse direction if outside the path
                    this.speedX = -this.speedX;
                    this.speedY = -this.speedY;
                }

                // Update opacity
                this.opacity += 0.005 * this.opacityAnimationDirection; // Adjust speed as needed
                if (this.opacity >= 0.3 || this.opacity <= 0.025) {
                    this.opacityAnimationDirection *= -1; // Reverse direction when limits are reached
                }

                // Update color
                this.color = `rgba(237, 208, 106, ${this.opacity})`;

                this.draw();
            }
        }

        // Utility function to get random number in a range
        function random(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        }

        // Function to generate a random point within a given path
        function getRandomPointInPath(path: Path2D): { x: number, y: number } {
            let x, y;
            if (!ctx) return { x: 0, y: 0 }
            do {
                // Generate random coordinates
                x = random(0, canvas.width);
                y = random(0, canvas.height);
            } while (!ctx.isPointInPath(path, x, y)); // Check if the point is inside the path
            return { x, y };
        }

        // Initialize particles
        function initParticles(): void {
            const particlesPerPath = 10; // Fixed number of particles per path

            // Initialize particles for circlePath
            for (let i = 0; i < particlesPerPath; i++) {
                const radius = 3;
                const speedX = random(-0.5, 0.5);
                const speedY = random(-0.5, 0.5);
                const opacity = random(0.025, 0.3);
                const color = `rgba(237, 208, 106, ${opacity})`;

                // Get a random starting point within the circlePath
                const { x, y } = getRandomPointInPath(circlePath);
                particles.push(new Particle(x, y, radius, color, speedX, speedY, opacity, circlePath));
            }

            // Initialize particles for crescentPath
            for (let i = 0; i < particlesPerPath; i++) {
                const radius = 3;
                const speedX = random(-0.5, 0.5);
                const speedY = random(-0.5, 0.5);
                const opacity = random(0.025, 0.3);
                const color = `rgba(237, 208, 106, ${opacity})`;

                // Get a random starting point within the crescentPath
                const { x, y } = getRandomPointInPath(rectPath);
                particles.push(new Particle(x, y, radius, color, speedX, speedY, opacity, rectPath));
            }

            // Initialize particles for crescentPath2
            for (let i = 0; i < particlesPerPath; i++) {
                const radius = 3;
                const speedX = random(-0.5, 0.5);
                const speedY = random(-0.5, 0.5);
                const opacity = random(0.025, 0.3);
                const color = `rgba(237, 208, 106, ${opacity})`;

                // Get a random starting point within the crescentPath2
                const { x, y } = getRandomPointInPath(rectPath2);
                particles.push(new Particle(x, y, radius, color, speedX, speedY, opacity, rectPath2));
            }
        }

        // Animation loop
        function animate(): void {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw paths for debugging
            // ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            // ctx.fill(circlePath);
            // ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
            // ctx.fill(rectPath)
            // ctx.fill(rectPath2);

            particles.forEach(particle => particle.update());
            requestAnimationFrame(animate);
        }

        // Initialize and start animation
        initParticles();
        animate();
    }, []);

    return <canvas ref={canvasRef} id="particleCanvas"></canvas>;
}

export default HeroCanvas;