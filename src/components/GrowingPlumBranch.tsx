import { motion } from "motion/react";

function Blossom({ transform, delay }: { transform: string; delay: number }) {
  const petalTargets = [
    { cx: 0, cy: -4 },
    { cx: 3.8, cy: -1.2 },
    { cx: 2.3, cy: 3.2 },
    { cx: -2.3, cy: 3.2 },
    { cx: -3.8, cy: -1.2 },
  ];

  const petalVariants = {
    hidden: { cx: 0, cy: 0, r: 0, opacity: 0 },
    visible: (custom: { cx: number; cy: number; i: number }) => ({
      cx: custom.cx,
      cy: custom.cy,
      r: 3.5,
      opacity: 0.85,
      transition: {
        delay: delay + custom.i * 0.1, // Stagger petals
        duration: 1.2,
        type: "spring",
        bounce: 0.3,
      },
    }),
  };

  const centerVariants = {
    hidden: { r: 0, opacity: 0 },
    visible: {
      r: 1.5,
      opacity: 1,
      transition: {
        delay: delay + 0.4,
        duration: 0.8,
        type: "spring",
      },
    },
  };

  const groupVariants = {
    hidden: { rotate: -30, scale: 0.8 },
    visible: {
      rotate: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <g transform={transform}>
      <motion.g variants={groupVariants}>
        {petalTargets.map((target, i) => (
          <motion.circle
            key={i}
            custom={{ ...target, i }}
            variants={petalVariants}
            fill="currentColor"
          />
        ))}
        <motion.circle variants={centerVariants} cx="0" cy="0" fill="#F7F4EF" />
      </motion.g>
    </g>
  );
}

function Bud({
  cx,
  cy,
  r,
  delay,
  transformOrigin,
}: {
  cx: number;
  cy: number;
  r: number;
  delay: number;
  transformOrigin: string;
}) {
  const budVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.95,
      transition: {
        delay: delay,
        duration: 1.2,
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <motion.circle
      variants={budVariants}
      cx={cx}
      cy={cy}
      r={r}
      fill="currentColor"
      style={{ transformOrigin }}
    />
  );
}

export function GrowingPlumBranch({ className }: { className?: string }) {
  // Variants for the branches growing
  const branchVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay: number = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: Math.max(0.5, 4.5 - delay), ease: "easeOut" },
        opacity: { delay, duration: 0.2 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ overflow: "visible" }}
    >
      {/* Branches */}
      <g className="text-mulberry" opacity="0.6">
        <motion.path custom={0} variants={branchVariants} d="M-10,-20 Q10,15 35,40 Q60,60 80,90 Q105,125 135,145 Q170,165 210,220" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <motion.path custom={0.8} variants={branchVariants} d="M35,40 Q70,35 115,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <motion.path custom={1.8} variants={branchVariants} d="M80,90 Q95,130 105,175" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <motion.path custom={3.1} variants={branchVariants} d="M135,145 Q165,140 195,125" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <motion.path custom={1.3} variants={branchVariants} d="M72.5,32.5 Q90,20 105,5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Blossoms & Buds */}
      <g className="text-mulberry">
        <Blossom delay={0.8} transform="translate(35, 40) scale(1.3)" />
        <Blossom delay={1.3} transform="translate(72.5, 32.5) scale(1.1)" />
        <Bud delay={1.8} cx={115} cy={20} r={2} transformOrigin="115px 20px" />
        <Bud delay={1.8} cx={105} cy={5} r={1.5} transformOrigin="105px 5px" />
        <Bud delay={1.8} cx={80} cy={90} r={2.5} transformOrigin="80px 90px" />
        <Blossom delay={2.4} transform="translate(94, 131) scale(1.2)" />
        <Bud delay={3.0} cx={105} cy={175} r={2} transformOrigin="105px 175px" />
        <Blossom delay={3.1} transform="translate(135, 145) scale(1.4)" />
        <Bud delay={3.5} cx={165} cy={137.5} r={2} transformOrigin="165px 137.5px" />
        <Blossom delay={3.9} transform="translate(195, 125) scale(1.1)" />
      </g>
    </motion.svg>
  );
}
