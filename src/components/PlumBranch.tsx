import { motion } from "motion/react";

export function PlumBranch({ className }: { className?: string }) {
  // Strong wind gust animation for the branch
  const branchSway = {
    animate: {
      rotate: [0, 8, 12, 9, 14, -1, 0], // Bends significantly, then snaps back
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.1, 0.15, 0.2, 0.25, 0.4, 1]
      }
    }
  };

  // Tremble animation for the flowers holding on stubbornly
  const flowerTremble = {
    animate: {
      rotate: [0, -25, 30, -20, 35, -15, 20, -5, 0],
      scale: [1, 0.9, 1.1, 0.95, 1.05, 0.98, 1.02, 1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 1]
      }
    }
  };

  return (
    <motion.svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      style={{ originX: 0, originY: 0, overflow: "visible" }}
      variants={branchSway}
      animate="animate"
    >
      {/* Wind gusts */}
      <g className="text-mulberry/40">
        <motion.path
          d="M-50,80 Q50,100 250,60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: [-100, 50, 200, 200],
            opacity: [0, 0.8, 0, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.1, 0.3, 1] }}
        />
        <motion.path
          d="M-20,150 Q100,160 250,120"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: [-100, 80, 250, 250],
            opacity: [0, 0.6, 0, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.15, 0.35, 1] }}
        />
        <motion.path
          d="M10,30 Q100,40 200,10"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: [-100, 60, 200, 200],
            opacity: [0, 0.5, 0, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeOut", times: [0, 0.08, 0.25, 1] }}
        />
      </g>

      {/* Branches */}
      <g className="text-mulberry" opacity="0.3">
        {/* Main Branch */}
        <path d="M-20,-20 Q40,50 80,120 T220,220" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sub Branch 1 */}
        <path d="M30,35 Q80,30 130,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Sub Branch 2 */}
        <path d="M100,150 Q160,150 190,120" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Sub Branch 3 */}
        <path d="M60,85 Q40,110 20,130" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </g>
      
      {/* Blossoms */}
      <g fill="currentColor" className="text-mulberry">
        {/* Blossom 1 */}
        <g transform="translate(130, 20) scale(1.2)">
          <motion.g variants={flowerTremble} animate="animate">
            <circle cx="0" cy="-4" r="3.5" opacity="0.85"/>
            <circle cx="3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="0" cy="0" r="1.5" fill="#F7F4EF" />
          </motion.g>
        </g>
        
        {/* Blossom 2 */}
        <g transform="translate(190, 120) scale(1)">
          <motion.g variants={flowerTremble} animate="animate">
            <circle cx="0" cy="-4" r="3.5" opacity="0.85"/>
            <circle cx="3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="0" cy="0" r="1.5" fill="#F7F4EF" />
          </motion.g>
        </g>

        {/* Blossom 3 */}
        <g transform="translate(20, 130) scale(0.9)">
          <motion.g variants={flowerTremble} animate="animate">
            <circle cx="0" cy="-4" r="3.5" opacity="0.85"/>
            <circle cx="3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="0" cy="0" r="1.5" fill="#F7F4EF" />
          </motion.g>
        </g>

        {/* Blossom 4 (Main branch) */}
        <g transform="translate(80, 120) scale(1.5)">
          <motion.g variants={flowerTremble} animate="animate">
            <circle cx="0" cy="-4" r="3.5" opacity="0.85"/>
            <circle cx="3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="0" cy="0" r="1.5" fill="#F7F4EF" />
          </motion.g>
        </g>

        {/* Blossom 5 (Main branch top) */}
        <g transform="translate(40, 50) scale(1.3)">
          <motion.g variants={flowerTremble} animate="animate">
            <circle cx="0" cy="-4" r="3.5" opacity="0.85"/>
            <circle cx="3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-2.3" cy="3.2" r="3.5" opacity="0.85"/>
            <circle cx="-3.8" cy="-1.2" r="3.5" opacity="0.85"/>
            <circle cx="0" cy="0" r="1.5" fill="#F7F4EF" />
          </motion.g>
        </g>

        {/* Buds */}
        <motion.circle variants={flowerTremble} animate="animate" cx="10" cy="15" r="2.5" opacity="0.95" style={{ transformOrigin: "10px 15px" }} />
        <motion.circle variants={flowerTremble} animate="animate" cx="60" cy="33" r="2" opacity="0.95" style={{ transformOrigin: "60px 33px" }} />
        <motion.circle variants={flowerTremble} animate="animate" cx="140" cy="140" r="2.5" opacity="0.95" style={{ transformOrigin: "140px 140px" }} />
        <motion.circle variants={flowerTremble} animate="animate" cx="100" cy="25" r="1.5" opacity="0.95" style={{ transformOrigin: "100px 25px" }} />
        <motion.circle variants={flowerTremble} animate="animate" cx="40" cy="100" r="2" opacity="0.95" style={{ transformOrigin: "40px 100px" }} />
      </g>
    </motion.svg>
  );
}
