import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const INTERACTION_RADIUS = 15;

// 1. ĐỊNH NGHĨA DANH SÁCH MÀU SẮC CHO CÁC NGÔI SAO
// Bạn có thể thêm hoặc bớt các màu tùy ý, dùng màu của Tailwind CSS hoặc mã hex.
const STAR_COLORS = [
    'bg-purple-400',  // Màu tím hiện tại
    'bg-blue-300',    // Xanh nhạt
    'bg-pink-300',    // Hồng nhạt
    'bg-emerald-300', // Xanh ngọc
    'bg-yellow-200',  // Vàng nhạt
    'bg-red-300',     // Đỏ nhạt
];

export function Background() {
    const [particles, setParticles] = useState([]);
    const [mousePositionPx, setMousePositionPx] = useState({ x: -200, y: -200 });
    const [mousePositionPercent, setMousePositionPercent] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const newParticles = Array.from({ length: 150 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 2,
            colorClass: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        }));
        setParticles(newParticles);

        const handleMouseMove = (e) => {
            setMousePositionPx({ x: e.clientX, y: e.clientY });
            const xPercent = (e.clientX / window.innerWidth) * 100;
            const yPercent = (e.clientY / window.innerHeight) * 100;
            setMousePositionPercent({ x: xPercent, y: yPercent });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />

            {/* Vầng sáng đi theo chuột (bé) */}
            <div
                className="fixed inset-0"
                style={{
                    background: `radial-gradient(100px at ${mousePositionPx.x}px ${mousePositionPx.y}px, rgba(168, 85, 247, 0.15), transparent 70%)`,
                }}
            />

            {/* Các ngôi sao (Particles) */}
            {particles.map((particle) => {
                const distX = particle.x - mousePositionPercent.x;
                const distY = particle.y - mousePositionPercent.y;
                const distance = Math.sqrt(distX * distX + distY * distY);
                const proximity = Math.max(0, 1 - distance / INTERACTION_RADIUS);
                const isNear = proximity > 0;

                const animateProps = {
                    opacity: isNear
                        ? [0.6 + proximity * 0.4, 0.9 + proximity * 0.1, 0.6 + proximity * 0.4]
                        : 0.2,
                    scale: isNear
                        ? [1.2 + proximity * 0.3, 1.4 + proximity * 0.6, 1.2 + proximity * 0.3]
                        : 1,
                };

                const transitionProps = {
                    duration: isNear ? 2 : 0.5,
                    delay: 0,
                    repeat: isNear ? Infinity : 0,
                    ease: "easeInOut",
                };

                return (
                    <motion.div
                        key={particle.id}
                        className={`absolute rounded-full ${particle.colorClass}`}
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        initial={{ opacity: 0.2, scale: 1 }}
                        animate={animateProps}
                        transition={transitionProps}
                    />
                );
            })}

            {/* Floating orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
                animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}