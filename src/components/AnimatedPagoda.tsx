import React from 'react';
import { motion } from 'motion/react';

export function AnimatedPagoda({ className = "" }: { className?: string }) {
  const buildUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98] // smooth ease out
      }
    })
  };

  const bloom = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.15,
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    })
  };

  const mulberry = "#8c5a65";
  const mulberryDark = "#6b414a";
  const sage = "#a3b89f";
  const cream = "#fcf6ee";
  const ink = "#302928";
  const blush = "#f4d8db";
  const blushLight = "#fcebed";

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-full max-h-full drop-shadow-xl overflow-visible"
        aria-hidden="true"
      >
        {/* Layer 0: Zen Lake & Garden */}
        <motion.g custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          {/* Lake */}
          <ellipse cx="200" cy="460" rx="140" ry="25" fill={sage} opacity="0.3" />
          <ellipse cx="200" cy="460" rx="100" ry="15" fill={sage} opacity="0.4" />
          
          {/* Rocks */}
          <path d="M 80 450 Q 90 435 100 450 Q 90 460 80 450 Z" fill={mulberryDark} opacity="0.8" />
          <path d="M 300 460 Q 315 445 330 460 Q 315 470 300 460 Z" fill={mulberryDark} opacity="0.8" />
          <path d="M 320 455 Q 330 445 340 455 Q 330 460 320 455 Z" fill={mulberry} opacity="0.9" />
          
          {/* Bonsai Tree on the left rock */}
          <motion.g
            animate={{ rotate: [0, 2, 0, -1.5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Invisible anchor to force Framer Motion's 50% 50% transform origin to be exactly at the tree's base (90, 450) */}
            <circle cx="90" cy="450" r="120" fill="transparent" pointerEvents="none" />
            <g transform="translate(90, 450) scale(1.35) translate(-90, -450)">
              {/* Trunk */}
              <path d="M 90 450 Q 80 430 85 410 Q 90 390 75 380" fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" />
              {/* Branches */}
              <path d="M 85 420 Q 60 415 50 410" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />
              <path d="M 87 400 Q 110 395 120 385" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
              <path d="M 80 390 Q 65 380 55 375" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" />
              
              {/* Foliage */}
              {/* Bottom left branch foliage */}
              <circle cx="50" cy="410" r="15" fill={sage} opacity="0.9" />
              <circle cx="40" cy="405" r="12" fill={sage} />
              <circle cx="60" cy="405" r="10" fill={sage} />
              
              {/* Right branch foliage */}
              <circle cx="120" cy="385" r="16" fill={sage} opacity="0.9" />
              <circle cx="110" cy="375" r="12" fill={sage} />
              <circle cx="130" cy="380" r="10" fill={sage} />

              {/* Top left branch foliage */}
              <circle cx="55" cy="375" r="14" fill={sage} opacity="0.9" />
              <circle cx="45" cy="370" r="10" fill={sage} />

              {/* Top center foliage */}
              <circle cx="75" cy="380" r="18" fill={sage} opacity="0.9" />
              <circle cx="85" cy="370" r="14" fill={sage} />
              <circle cx="65" cy="365" r="12" fill={sage} />

              {/* Blooming Flowers */}
              <motion.circle cx="45" cy="410" r="3.5" fill={blush} custom={0} variants={bloom} />
              <motion.circle cx="55" cy="405" r="4.5" fill={blushLight} custom={1} variants={bloom} />
              <motion.circle cx="38" cy="400" r="3" fill={blush} custom={2} variants={bloom} />
              
              <motion.circle cx="115" cy="385" r="4.5" fill={blushLight} custom={3} variants={bloom} />
              <motion.circle cx="125" cy="380" r="3.5" fill={blush} custom={4} variants={bloom} />
              <motion.circle cx="110" cy="372" r="3" fill={blushLight} custom={5} variants={bloom} />

              <motion.circle cx="75" cy="380" r="4.5" fill={blush} custom={6} variants={bloom} />
              <motion.circle cx="85" cy="375" r="3.5" fill={blushLight} custom={7} variants={bloom} />
              <motion.circle cx="65" cy="370" r="4.5" fill={blush} custom={8} variants={bloom} />
              <motion.circle cx="50" cy="375" r="3.5" fill={blushLight} custom={9} variants={bloom} />
            </g>
          </motion.g>
        </motion.g>

        {/* Layer 1: Base */}
        <motion.g custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          <polygon points="110,440 290,440 270,410 130,410" fill={mulberryDark} />
          {/* Steps */}
          <rect x="170" y="410" width="60" height="30" fill={cream} />
          <rect x="175" y="420" width="50" height="10" fill="#efe6db" />
          <rect x="180" y="430" width="40" height="10" fill="#e5d9c5" />
        </motion.g>

        {/* Layer 2: Tier 1 */}
        <motion.g custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          {/* Walls */}
          <rect x="145" y="340" width="110" height="70" fill={cream} />
          {/* Pillars */}
          <rect x="145" y="340" width="12" height="70" fill={mulberry} />
          <rect x="243" y="340" width="12" height="70" fill={mulberry} />
          {/* Door */}
          <rect x="180" y="360" width="40" height="50" fill={mulberryDark} />
          <rect x="185" y="365" width="12" height="45" fill={ink} opacity="0.5" />
          <rect x="203" y="365" width="12" height="45" fill={ink} opacity="0.5" />
          {/* Roof 1 */}
          <path d="M 90 350 Q 145 320 145 310 L 255 310 Q 255 320 310 350 Q 280 340 255 340 L 145 340 Q 120 340 90 350 Z" fill={mulberryDark} />
        </motion.g>

        {/* Layer 3: Tier 2 */}
        <motion.g custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          {/* Walls */}
          <rect x="155" y="250" width="90" height="60" fill={cream} />
          {/* Pillars */}
          <rect x="155" y="250" width="10" height="60" fill={mulberry} />
          <rect x="235" y="250" width="10" height="60" fill={mulberry} />
          {/* Windows */}
          <rect x="175" y="265" width="20" height="30" fill={mulberryDark} />
          <rect x="205" y="265" width="20" height="30" fill={mulberryDark} />
          {/* Roof 2 */}
          <path d="M 105 260 Q 155 230 155 220 L 245 220 Q 245 230 295 260 Q 265 250 245 250 L 155 250 Q 135 250 105 260 Z" fill={mulberryDark} />
        </motion.g>

        {/* Layer 4: Tier 3 */}
        <motion.g custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          {/* Walls */}
          <rect x="165" y="170" width="70" height="50" fill={cream} />
          {/* Pillars */}
          <rect x="165" y="170" width="8" height="50" fill={mulberry} />
          <rect x="227" y="170" width="8" height="50" fill={mulberry} />
          {/* Windows */}
          <rect x="185" y="180" width="30" height="25" fill={mulberryDark} />
          <rect x="198" y="180" width="4" height="25" fill={mulberry} />
          {/* Roof 3 */}
          <path d="M 120 180 Q 165 150 165 140 L 235 140 Q 235 150 280 180 Q 250 170 235 170 L 165 170 Q 150 170 120 180 Z" fill={mulberryDark} />
        </motion.g>

        {/* Layer 5: Spire */}
        <motion.g custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={buildUp}>
          {/* Base of spire */}
          <path d="M 185 140 L 215 140 L 210 120 L 190 120 Z" fill={mulberry} />
          {/* Pole */}
          <rect x="197" y="40" width="6" height="80" fill={mulberryDark} />
          {/* Rings */}
          <rect x="188" y="100" width="24" height="4" fill={mulberry} rx="2" />
          <rect x="190" y="85" width="20" height="4" fill={mulberry} rx="2" />
          <rect x="192" y="70" width="16" height="4" fill={mulberry} rx="2" />
          <rect x="194" y="55" width="12" height="4" fill={mulberry} rx="2" />
          {/* Top Finial */}
          <circle cx="200" cy="35" r="6" fill={mulberryDark} />
          <path d="M 200 29 L 200 15" stroke={mulberryDark} strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
