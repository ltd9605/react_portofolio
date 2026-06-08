import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export function Background() {
    const [mousePositionPx, setMousePositionPx] = useState({ x: -200, y: -200 });
    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePositionPx({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Theme dependent styles
    const orbColor1 = theme === 'dark' ? 'bg-purple-600/20' : 'bg-blue-400/20';
    const orbColor2 = theme === 'dark' ? 'bg-blue-600/20' : 'bg-pink-400/20';
    const cursorGlow = theme === 'dark' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(96, 165, 250, 0.2)';

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[var(--bg-primary)] transition-colors duration-700">
            {/* Vầng sáng đi theo chuột (bé) */}
            <div
                className="fixed inset-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px at ${mousePositionPx.x}px ${mousePositionPx.y}px, ${cursorGlow}, transparent 80%)`,
                }}
            />

            {/* Grid Pattern (Optional 3D feeling base) */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50" />

            {/* Floating orbs */}
            <motion.div
                className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] ${orbColor1} rounded-full blur-[100px] transition-colors duration-1000`}
                animate={{ 
                    x: [0, 150, 0], 
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1] 
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className={`absolute bottom-1/4 right-1/4 w-[600px] h-[600px] ${orbColor2} rounded-full blur-[120px] transition-colors duration-1000`}
                animate={{ 
                    x: [0, -150, 0], 
                    y: [0, 150, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}