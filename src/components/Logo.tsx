import { SVGProps, useId, forwardRef } from "react";

export const Logo = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => {
  const rawId = useId();
  const maskId = "logo-mask-" + rawId.replace(/:/g, "");

  return (
    <svg ref={ref} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <defs>
        <mask id={maskId}>
          {/* White background means keep everything by default */}
          <rect width="100" height="100" fill="white" />
          
          {/* Black elements will be cut out to create the sketch's details */}
          
          {/* Radiating lines */}
          <g stroke="black" strokeWidth="2.5" strokeLinecap="round">
            <line x1="50" y1="50" x2="50" y2="24" />
            <line x1="50" y1="50" x2="50" y2="24" transform="rotate(72 50 50)" />
            <line x1="50" y1="50" x2="50" y2="24" transform="rotate(144 50 50)" />
            <line x1="50" y1="50" x2="50" y2="24" transform="rotate(216 50 50)" />
            <line x1="50" y1="50" x2="50" y2="24" transform="rotate(288 50 50)" />
          </g>
          
          {/* Center circle outline */}
          <circle cx="50" cy="50" r="6" fill="none" stroke="black" strokeWidth="2.5" />
          
          {/* Dots between the petals/lines */}
          <g fill="black">
            <circle cx="50" cy="32" r="2" transform="rotate(36 50 50)" />
            <circle cx="50" cy="32" r="2" transform="rotate(108 50 50)" />
            <circle cx="50" cy="32" r="2" transform="rotate(180 50 50)" />
            <circle cx="50" cy="32" r="2" transform="rotate(252 50 50)" />
            <circle cx="50" cy="32" r="2" transform="rotate(324 50 50)" />
          </g>
        </mask>
      </defs>

      {/* The 5 petals, masked with the details above */}
      <g mask={`url(#${maskId})`} fill="currentColor" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M50 50 C20 35, 35 0, 50 8 C65 0, 80 35, 50 50 Z" />
        <path d="M50 50 C20 35, 35 0, 50 8 C65 0, 80 35, 50 50 Z" transform="rotate(72 50 50)" />
        <path d="M50 50 C20 35, 35 0, 50 8 C65 0, 80 35, 50 50 Z" transform="rotate(144 50 50)" />
        <path d="M50 50 C20 35, 35 0, 50 8 C65 0, 80 35, 50 50 Z" transform="rotate(216 50 50)" />
        <path d="M50 50 C20 35, 35 0, 50 8 C65 0, 80 35, 50 50 Z" transform="rotate(288 50 50)" />
      </g>
    </svg>
  );
});
