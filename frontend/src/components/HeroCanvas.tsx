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
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // settings
        canvas.width = 516;
        canvas.height = 516;
        const particles: Particle[] = [];
        const particleSpeed = 0.05;
        const linkDistance = 40;
        const minCircleOpacity = 0.05;
        const maxCircleOpacity = 0.4;
        const maxLinkOpacity = 0.7;
        const linkLineWidth = 1;

        // particles are part of one of 3 boxes and can only move within them
        // amount of particles per path
        const topPathParticleCount = 40;
        const centerPathParticleCount = 60;
        const bottomPathParticleCount = 50;

        // set border boundaries for particles
        const topPathXOffset = 85;
        const topPathYOffset = 10;
        const topPathWidth = 356;
        const topPathHeight = 100;

        const centerPathXOffset = 108;
        const centerPathYOffset = 150;
        const centerPathWidth = 300;
        const centerPathHeight = 260;

        const bottomPathXOffset = 45;
        const bottomPathYOffset = 370;
        const bottomPathWidth = 440;
        const bottomPathHeight = 140;

        // Create shapes using Path2D
        const topPath = new Path2D();
        topPath.rect(topPathXOffset, topPathYOffset, topPathWidth, topPathHeight);

        const centerPath = new Path2D();
        centerPath.rect(centerPathXOffset, centerPathYOffset, centerPathWidth, centerPathHeight);

        const bottomPath = new Path2D();
        bottomPath.rect(bottomPathXOffset, bottomPathYOffset, bottomPathWidth, bottomPathHeight);

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
                    this.handleCollision();
                }

                // Update opacity
                this.opacity += 0.001 * this.opacityAnimationDirection; // Adjust animation speed as needed
                if (this.opacity >= maxCircleOpacity || this.opacity <= minCircleOpacity) {
                    this.opacityAnimationDirection *= -1; // Reverse direction when limits are reached
                }

                // Update color
                this.color = `rgba(237, 208, 106, ${this.opacity})`;

                this.draw();
            }

            // Handle collision with the boundary of the path
            handleCollision(): void {
                const { normalX, normalY } = this.getNormalAtCollisionPoint();

                // Reflect the speed vector off the normal
                const dotProduct = this.speedX * normalX + this.speedY * normalY;

                this.speedX -= 2 * dotProduct * normalX;
                this.speedY -= 2 * dotProduct * normalY;

                // Move the particle slightly out of the collision
                this.x += normalX * this.radius / 3;
                this.y += normalY * this.radius / 3;
            }

            // Function to calculate the normal vector at the collision point
            getNormalAtCollisionPoint(): { normalX: number; normalY: number } {
                let normalX = 0;
                let normalY = 0;

                // Check the path type using the particle's stored path and calculate the normal based on it
                if (this.path === centerPath) {
                    // Circle path normal calculation
                    normalX = this.x < centerPathXOffset || this.x > centerPathXOffset + centerPathWidth ? (this.x < centerPathXOffset ? 1 : -1) : 0; // Left/Right edge
                    normalY = this.y < centerPathYOffset || this.y > centerPathYOffset + centerPathHeight ? (this.y < centerPathYOffset ? 1 : -1) : 0; // Top/Bottom edge
                } else if (this.path === topPath) {
                    // Rectangle path normal calculation (topPath)
                    normalX = this.x < topPathXOffset || this.x > topPathXOffset + topPathWidth ? (this.x < topPathXOffset ? 1 : -1) : 0; // Left/Right edge
                    normalY = this.y < topPathYOffset || this.y > topPathYOffset + topPathHeight ? (this.y < topPathYOffset ? 1 : -1) : 0; // Top/Bottom edge
                } else if (this.path === bottomPath) {
                    // Rectangle path normal calculation (bottomPath)
                    normalX = this.x < bottomPathXOffset || this.x > bottomPathXOffset + bottomPathWidth ? (this.x < bottomPathXOffset ? 1 : -1) : 0; // Left/Right edge
                    normalY = this.y < bottomPathYOffset || this.y > bottomPathYOffset + bottomPathHeight ? (this.y < bottomPathYOffset ? 1 : -1) : 0; // Top/Bottom edge
                }

                // Normalize the normal vector
                const length = Math.sqrt(normalX * normalX + normalY * normalY);
                if (length > 0) {
                    normalX /= length;
                    normalY /= length;
                }

                return { normalX, normalY };
            }
        }

        // Utility function to get random number in a range
        function random(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        }

        // Function to generate a random point within a given path
        function getRandomPointInPath(path: Path2D): { x: number, y: number } {
            let x = 0, y = 0;

            if (path === topPath) {
                // Generate random coordinates within topPath
                x = random(topPathXOffset, topPathXOffset + topPathWidth);
                y = random(topPathYOffset, topPathYOffset + topPathHeight);
            } else if (path === centerPath) {
                // Generate random coordinates within centerPath
                x = random(centerPathXOffset, centerPathXOffset + centerPathWidth);
                y = random(centerPathYOffset, centerPathYOffset + centerPathHeight);
            } else if (path === bottomPath) {
                // Generate random coordinates within bottomPath
                x = random(bottomPathXOffset, bottomPathXOffset + bottomPathWidth);
                y = random(bottomPathYOffset, bottomPathYOffset + bottomPathHeight);
            }

            return { x, y };
        }

        // Utility function to initialize particles for a specific path
        function initializeParticlesForPath(path: Path2D, particleCount: number): void {
            for (let i = 0; i < particleCount; i++) {
                const radius = 3;
                const speedX = random(0, 1) < 0.5 ? -particleSpeed : particleSpeed;
                const speedY = random(0, 1) < 0.5 ? -particleSpeed : particleSpeed;
                const opacity = random(minCircleOpacity, maxCircleOpacity);
                const color = `rgba(237, 208, 106, ${opacity})`;

                // Get a random starting point within the specified path
                const { x, y } = getRandomPointInPath(path);
                particles.push(new Particle(x, y, radius, color, speedX, speedY, opacity, path));
            }
        }

        // Initialize particles
        function initParticles(): void {
            // Initialize particles for each path
            initializeParticlesForPath(topPath, topPathParticleCount);
            initializeParticlesForPath(centerPath, centerPathParticleCount);
            initializeParticlesForPath(bottomPath, bottomPathParticleCount);
        }

        function drawLinks(): void {
            particles.forEach((particle, index) => {
                if (!ctx) return
                for (let i = index + 1; i < particles.length; i++) {
                    const otherParticle = particles[i];
                    const distance = Math.sqrt(
                        (particle.x - otherParticle.x) ** 2 +
                        (particle.y - otherParticle.y) ** 2
                    );

                    if (distance < linkDistance) {
                        const opacity = (1 - distance / linkDistance) * maxLinkOpacity; // Closer particles get stronger opacity
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(237, 208, 106, ${opacity})`;
                        ctx.lineWidth = linkLineWidth;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            });
        }

        // Animation loop
        function animate(): void {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw paths for debugging
            //ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            //ctx.fill(centerPath);
            //ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
            //ctx.fill(topPath)
            //ctx.fill(bottomPath);

            particles.forEach(particle => particle.update());
            drawLinks();
            requestAnimationFrame(animate);
        }

        // Initialize and start animation
        initParticles();
        animate();
    }, []);

    return <canvas ref={canvasRef} id="particleCanvas"></canvas>;
}

export default HeroCanvas;