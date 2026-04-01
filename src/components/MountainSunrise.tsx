import React from 'react';
import { motion } from 'motion/react';

export const ChineseCloud1 = ({ x, y, scale = 1, opacity = 1, delay = 0, flip = false, blur = 0 }: { x: number, y: number, scale?: number, opacity?: number, delay?: number, flip?: boolean, blur?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`} style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none' }}>
    <motion.g
      initial={{ x: -50, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity,
        y: [0, -10, 0]
      }}
      transition={{ 
        x: { duration: 2, ease: "easeOut", delay },
        opacity: { duration: 2, ease: "easeOut", delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
      }}
    >
      <path d="M -100,20 L 100,20 C 130,20 140,-10 110,-20 C 100,-23 90,-20 80,-15 C 80,-50 20,-60 -10,-30 C -20,-50 -60,-50 -80,-20 C -110,-10 -120,20 -100,20 Z" fill="#f7f4ef" stroke="#a3b1a9" strokeWidth="6" strokeLinejoin="round" />
      <path d="M 110,-20 C 90,-27 70,-15 70,0 C 70,10 80,15 90,15 C 100,15 105,10 105,5 C 105,0 100,-5 95,-5" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      <path d="M -10,-30 C 10,-10 0,10 -20,15 C -30,17 -40,10 -40,0 C -40,-10 -30,-15 -20,-15" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      <path d="M -80,-20 C -60,-10 -50,0 -60,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
    </motion.g>
  </g>
);

export const ChineseCloud2 = ({ x, y, scale = 1, opacity = 1, delay = 0, flip = false, blur = 0 }: { x: number, y: number, scale?: number, opacity?: number, delay?: number, flip?: boolean, blur?: number }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`} style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none' }}>
    <motion.g
      initial={{ x: -50, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity,
        y: [0, -10, 0]
      }}
      transition={{ 
        x: { duration: 2, ease: "easeOut", delay },
        opacity: { duration: 2, ease: "easeOut", delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
      }}
    >
      <path d="M -60,15 L 60,15 C 80,15 90,-5 70,-15 C 60,-20 50,-15 40,-10 C 30,-35 -10,-40 -30,-20 C -40,-30 -70,-25 -80,-10 C -100,-5 -90,15 -60,15 Z" fill="#f7f4ef" stroke="#a3b1a9" strokeWidth="6" strokeLinejoin="round" />
      <path d="M 70,-15 C 50,-20 40,-5 40,5 C 40,10 50,12 55,8" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      <path d="M -30,-20 C -10,-10 -15,5 -30,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      <path d="M -80,-10 C -65,-5 -60,5 -70,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
    </motion.g>
  </g>
);

export const MovingCloud1 = ({ y, scale = 1, opacity = 1, duration = 60, delay = 0, flip = false, blur = 0 }: { y: number, scale?: number, opacity?: number, duration?: number, delay?: number, flip?: boolean, blur?: number }) => (
  <motion.g
    initial={{ x: -800 }}
    animate={{ x: 4800 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none' }}
  >
    <g transform={`translate(0, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`}>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, opacity, opacity, 0] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay, times: [0, 0.05, 0.95, 1] }}
      >
        <path d="M -100,20 L 100,20 C 130,20 140,-10 110,-20 C 100,-23 90,-20 80,-15 C 80,-50 20,-60 -10,-30 C -20,-50 -60,-50 -80,-20 C -110,-10 -120,20 -100,20 Z" fill="#f7f4ef" stroke="#a3b1a9" strokeWidth="6" strokeLinejoin="round" />
        <path d="M 110,-20 C 90,-27 70,-15 70,0 C 70,10 80,15 90,15 C 100,15 105,10 105,5 C 105,0 100,-5 95,-5" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
        <path d="M -10,-30 C 10,-10 0,10 -20,15 C -30,17 -40,10 -40,0 C -40,-10 -30,-15 -20,-15" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
        <path d="M -80,-20 C -60,-10 -50,0 -60,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
    </g>
  </motion.g>
);

export const MovingCloud2 = ({ y, scale = 1, opacity = 1, duration = 60, delay = 0, flip = false, blur = 0 }: { y: number, scale?: number, opacity?: number, duration?: number, delay?: number, flip?: boolean, blur?: number }) => (
  <motion.g
    initial={{ x: -800 }}
    animate={{ x: 4800 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none' }}
  >
    <g transform={`translate(0, ${y}) scale(${scale * (flip ? -1 : 1)}, ${scale})`}>
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, opacity, opacity, 0] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay, times: [0, 0.05, 0.95, 1] }}
      >
        <path d="M -60,15 L 60,15 C 80,15 90,-5 70,-15 C 60,-20 50,-15 40,-10 C 30,-35 -10,-40 -30,-20 C -40,-30 -70,-25 -80,-10 C -100,-5 -90,15 -60,15 Z" fill="#f7f4ef" stroke="#a3b1a9" strokeWidth="6" strokeLinejoin="round" />
        <path d="M 70,-15 C 50,-20 40,-5 40,5 C 40,10 50,12 55,8" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
        <path d="M -30,-20 C -10,-10 -15,5 -30,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
        <path d="M -80,-10 C -65,-5 -60,5 -70,10" fill="none" stroke="#a3b1a9" strokeWidth="6" strokeLinecap="round" />
      </motion.g>
    </g>
  </motion.g>
);

export function MountainSunrise({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      <svg
        viewBox="0 0 4000 700"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f4ef" stopOpacity="0" />
            <stop offset="50%" stopColor="#f7f4ef" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f7f4ef" stopOpacity="1" />
          </linearGradient>
          
          <linearGradient id="sunGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f2b5bc" stopOpacity="1" />
            <stop offset="100%" stopColor="#f2d5d9" stopOpacity="0.4" />
          </linearGradient>

          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f2b5bc" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f2b5bc" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sun Glow */}
        <motion.circle
          cx="2000"
          cy="200"
          r="300"
          fill="url(#sunGlow)"
          initial={{ cy: 500, opacity: 0 }}
          animate={{ cy: 200, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        />

        {/* Sun */}
        <motion.circle
          cx="2000"
          cy="200"
          r="140"
          fill="url(#sunGradient)"
          initial={{ cy: 500, opacity: 0 }}
          animate={{ cy: 200, opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        />

        {/* Background Mountain Range (Lighter) */}
        <motion.g
          initial={{ y: 450, opacity: 0 }}
          animate={{ y: 300, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
        >
          {/* Opaque base to hide the sun */}
          <path d="M-1000,700 L840,700 L1240,500 L1490,450 L1740,520 L1940,420 L2190,500 L2490,450 L3160,700 L5000,700 Z" className="fill-cream" />
          {/* Semi-transparent overlay */}
          <path d="M-1000,700 L840,700 L1240,500 L1490,450 L1740,520 L1940,420 L2190,500 L2490,450 L3160,700 L5000,700 Z" className="fill-sage/20" />
        </motion.g>

        {/* Main Mountain Silhouette (Hua Shan inspired) */}
        <motion.g
          initial={{ y: 450, opacity: 0 }}
          animate={{ y: 300, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Opaque base to hide the sun and background mountain */}
          <path d="M-1000,700 L840,700 L1290,550 L1320,560 L1360,450 L1400,470 L1460,320 L1500,350 L1560,250 L1600,280 L1630,290 L1770,120 L1780,70 L1800,20 L1920,0 Q2000,-30 2080,0 L2110,80 L2160,220 L2220,320 L2300,450 L2420,550 L2590,630 L3160,700 L5000,700 Z" className="fill-cream" />
          {/* Semi-transparent overlay */}
          <path d="M-1000,700 L840,700 L1290,550 L1320,560 L1360,450 L1400,470 L1460,320 L1500,350 L1560,250 L1600,280 L1630,290 L1770,120 L1780,70 L1800,20 L1920,0 Q2000,-30 2080,0 L2110,80 L2160,220 L2220,320 L2300,450 L2420,550 L2590,630 L3160,700 L5000,700 Z" className="fill-sage/40" />
        </motion.g>
        
        {/* Clouds */}
        <ChineseCloud1 x={1200} y={550} scale={1.2} opacity={0.8} delay={0.5} />
        <ChineseCloud2 x={1400} y={600} scale={1.5} opacity={0.7} delay={0.7} />
        <ChineseCloud1 x={1600} y={520} scale={0.9} opacity={0.6} delay={0.9} flip />
        <ChineseCloud2 x={1800} y={620} scale={1.3} opacity={0.8} delay={1.1} />
        <ChineseCloud1 x={2100} y={580} scale={1.4} opacity={0.9} delay={0.6} />
        <ChineseCloud2 x={2300} y={500} scale={1.1} opacity={0.6} delay={0.8} flip />
        <ChineseCloud1 x={2500} y={630} scale={1.6} opacity={0.8} delay={1.0} />
        <ChineseCloud2 x={2800} y={570} scale={1.2} opacity={0.7} delay={1.2} />
        
        {/* High Clouds */}
        <ChineseCloud1 x={1500} y={200} scale={1.4} opacity={0.5} delay={1.3} />
        <ChineseCloud2 x={1900} y={100} scale={1.1} opacity={0.4} delay={1.5} flip />
        <ChineseCloud1 x={2300} y={150} scale={1.3} opacity={0.5} delay={1.4} />
        <ChineseCloud2 x={2700} y={250} scale={1.5} opacity={0.6} delay={1.6} />

        {/* Moving Clouds */}
        <MovingCloud1 y={150} scale={1.8} opacity={0.4} duration={120} delay={0} />
        <MovingCloud2 y={250} scale={1.2} opacity={0.5} duration={90} delay={15} flip />
        <MovingCloud1 y={450} scale={2.5} opacity={0.3} duration={150} delay={30} />
        <MovingCloud2 y={350} scale={1.5} opacity={0.6} duration={100} delay={45} />
        <MovingCloud1 y={100} scale={1.0} opacity={0.5} duration={80} delay={60} flip />
        <MovingCloud2 y={550} scale={2.0} opacity={0.4} duration={140} delay={10} />
        <MovingCloud1 y={200} scale={1.4} opacity={0.6} duration={110} delay={75} />
        <MovingCloud2 y={400} scale={1.8} opacity={0.3} duration={130} delay={25} flip />

        {/* Fog Overlay to blend into the background */}
        <rect x="-1000" y="400" width="6000" height="300" fill="url(#fog)" />
      </svg>
    </div>
  );
}
