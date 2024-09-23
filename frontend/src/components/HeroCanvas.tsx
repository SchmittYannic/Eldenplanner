import { useEffect, useRef } from "react";

interface ParticleProps {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
}

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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update(ctx: CanvasRenderingContext2D, paths: Path2D[]): void {
        this.x += this.speedX;
        this.y += this.speedY;

        // Check if inside any of the paths
        for (const path of paths) {
            if (!ctx.isPointInPath(path, this.x, this.y)) {
                // Move the particle back into the shape
                const angle = Math.atan2(this.y - 250, this.x - 250); // Center coordinates for circle
                this.x = 250 + 100 * Math.cos(angle); // Adjust as per your circle's radius
                this.y = 250 + 100 * Math.sin(angle);
                this.speedX *= -0.5; // Optional: reverse speed when bouncing
                this.speedY *= -0.5; // Optional: reverse speed when bouncing
            }
        }

        this.draw(ctx);
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

        function scalePath(pathString: string, scaleFactor: number, xOffset: number, yOffset: number) {
            const scaledPath = [];

            // Regular expression to match SVG path commands and coordinates
            const pathRegex = /([MmZzLlHhVvCcSsQqTtAa])|([-+]?\d*\.?\d+|\d+\.?\d*)/g;

            // Split the path string into parts (commands and numbers)
            const parts = pathString.match(pathRegex);
            if (parts === null) return ""

            let currentCommand = '';

            for (const part of parts) {
                if (isNaN(part as any)) {
                    // If the part is a command (M, L, C, etc.), update the current command
                    currentCommand = part;
                    scaledPath.push(currentCommand);
                } else {
                    // If the part is a number, scale it and apply offsets
                    const originalValue = parseFloat(part);
                    const scaledValue = originalValue * scaleFactor;

                    // Add offsets
                    const finalValue = scaledValue + (currentCommand === 'H' || currentCommand === 'h' ? xOffset : 0) + (currentCommand === 'V' || currentCommand === 'v' ? yOffset : 0);
                    scaledPath.push(finalValue);
                }
            }

            return scaledPath.join(' ');
        }

        // Create shapes using Path2D
        const circlePath = new Path2D();
        circlePath.arc(250, 270, 150, 0, Math.PI * 2);

        const originalPath = "M42,2c-6.694,8.824-26.135,8.845-32.899,0.086C17.287,8.198,33.858,8.215,42,2L42,2z";
        const scaleFactor = 10;
        const xOffset = 10;
        const yOffset = 5;

        const crescentPath = new Path2D(scalePath(originalPath, scaleFactor, xOffset, yOffset));

        const originalPath2 = "M46.468,36.588c-5.973,11.378-22.079,14.219-32.991,8.592c-3.713-1.877-6.983-4.786-8.844-8.433c2.561,3.173,5.887,5.493,9.503,7.018C24.98,48.259,38.906,46.042,46.468,36.588L46.468,36.588z"
        const crescentPath2 = new Path2D(scalePath(originalPath2, scaleFactor, xOffset, yOffset));
        //const crescentPath = new Path2D();
        // Create the crescent moon shape using Path2D
        // Create another path (moved by yOffset)
        //const crescentPath = new Path2D("M126,6c-20.082,26.472-78.405,26.535-98.697,0.258C51.861,24.594,101.574,24.645,126,6L126,6z")
        //const crescentPath = new Path2D("M42,2c-6.694,8.824-26.135,8.845-32.899,0.086C17.287,8.198,33.858,8.215,42,2L42,2z");
        //const crescentPath = new Path2D("M 246.42 149.838 C 239.726 158.662 220.285 158.683 213.521 149.924 C 221.707 156.036 238.278 156.053 246.42 149.838 Z");
        // crescentPath.moveTo(246.42, 149.838);
        // crescentPath.bezierCurveTo(239.726, 158.662, 220.285, 158.683, 213.521, 149.924);
        // crescentPath.bezierCurveTo(221.707, 156.036, 238.278, 156.053, 246.42, 149.838);
        // crescentPath.closePath();

        //const crescentPath = new Path2D(`M 419.13 ${12.514 + yOffsetCrescentPath} C 353.323 ${83.526 + yOffsetCrescentPath} 162.203 ${83.695 + yOffsetCrescentPath} 95.707 ${13.207 + yOffsetCrescentPath} C 176.182 ${62.392 + yOffsetCrescentPath} 339.088 ${62.529 + yOffsetCrescentPath} 419.13 ${12.514 + yOffsetCrescentPath} Z`);
        //const crescentPath2 = new Path2D("M 463.054 285.86 C 404.335 377.425 246 400.288 138.727 355.004 C 102.225 339.898 70.078 316.49 51.783 287.14 C 76.96 312.675 109.657 331.345 145.205 343.617 C 251.81 379.783 388.714 361.941 463.054 285.86 Z");
        //crescentPath.arc(250, -70, 170, 2.2 * Math.PI, 0.8 * Math.PI); // Outer arc
        //crescentPath.arc(250, -70, 160, 0.7 * Math.PI, 2.3 * Math.PI, true); // Inner arc


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
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw paths for debugging
            ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Circle color
            ctx.fill(circlePath);

            // Apply transformations for the crescent moon
            ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Crescent color
            ctx.fill(crescentPath); // Draw the crescent
            ctx.fill(crescentPath2);

            particles.forEach(particle => particle.update(ctx, [circlePath, crescentPath, crescentPath2]));
            requestAnimationFrame(animate);
        }

        // Initialize and start animation
        initParticles();
        animate();
    }, []);

    return <canvas ref={canvasRef} id="particleCanvas"></canvas>;
}

export default HeroCanvas;