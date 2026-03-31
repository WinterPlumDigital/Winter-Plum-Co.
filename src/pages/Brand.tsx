import { useRef } from "react";
import { Logo } from "../components/Logo";
import { Download } from "lucide-react";
import { SEO } from "../components/SEO";

export function Brand() {
  const svgRef = useRef<SVGSVGElement>(null);

  const downloadPNG = () => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    
    // Clone the SVG to ensure it exports with the correct color and size
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("width", "1000");
    clone.setAttribute("height", "1000");
    clone.style.color = "#8c5a65"; // Mulberry hex code
    
    const svgData = new XMLSerializer().serializeToString(clone);
    
    // Create a canvas with high resolution for a crisp PNG
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    canvas.width = 1000;
    canvas.height = 1000;
    
    const img = new Image();
    
    img.onload = () => {
      // Draw the SVG onto the canvas
      ctx.drawImage(img, 0, 0, 1000, 1000);
      
      // Convert canvas to PNG data URL
      const pngFile = canvas.toDataURL("image/png");
      
      // Trigger download
      const downloadLink = document.createElement("a");
      downloadLink.download = "WinterPlum_Logo.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    // Convert SVG string to base64 and set as image source
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
      <SEO 
        title="Brand Assets" 
        description="Download Winter Plum Digital brand assets and logos."
        url="https://winterplumdigital.github.io/brand"
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="text-center mb-12">
        <h1 className="text-sm uppercase tracking-widest text-sage font-medium mb-4">Brand Kit</h1>
        <h2 className="text-4xl md:text-5xl font-serif text-ink leading-tight">
          Download <span className="italic text-mulberry">Assets</span>
        </h2>
      </div>

      <div className="bg-white/60 backdrop-blur-xl p-16 md:p-24 rounded-[3rem] shadow-2xl border border-white/40 mb-12 flex items-center justify-center">
        <Logo ref={svgRef} className="w-64 h-64 text-mulberry" />
      </div>

      <button 
        onClick={downloadPNG}
        className="flex items-center gap-3 px-8 py-4 rounded-full bg-mulberry text-cream text-sm uppercase tracking-widest hover:bg-mulberry-dark transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <Download size={18} />
        Download as PNG
      </button>
    </main>
  );
}
