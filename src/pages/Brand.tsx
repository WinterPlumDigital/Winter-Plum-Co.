import { Logo } from "../components/Logo";
import { Download } from "lucide-react";
import { SEO } from "../components/SEO";

export function Brand() {
  const downloadPNG = () => {
    const downloadLink = document.createElement("a");
    downloadLink.download = "WinterPlum_Logo.png";
    downloadLink.href = "/logo.png";
    downloadLink.click();
  };

  return (
    <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
      <SEO 
        title="Brand Assets" 
        description="Download Winter Plum & Co brand assets and logos."
        url="https://winterplum.co/#/brand"
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blush/20 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-sage/10 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="text-center mb-12">
        <span className="block text-sm uppercase tracking-widest text-sage font-medium mb-4">Brand Kit</span>
        <h1 className="text-4xl md:text-5xl font-serif text-ink leading-tight">
          Download <span className="italic text-mulberry">Assets</span>
        </h1>
      </div>

      <div className="bg-white/60 backdrop-blur-xl p-16 md:p-24 rounded-[3rem] shadow-2xl border border-white/40 mb-12 flex items-center justify-center">
        <Logo className="w-64 h-64" />
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
