export default function Transformation() {
  return (
    <section
      id="transformation"
      className="py-32 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold kerning-tight mb-6">THE MOLECULAR PIVOT</h2>
          <p className="text-sm uppercase tracking-[0.3em] font-bold opacity-50">
            Waste-to-Resource Transformation Pipeline
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto py-20 px-12 border-2 border-gray-200 flex flex-col md:flex-row items-center justify-between gap-12 bg-white warm-shadow">
          {/* Waste side */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4h6v2" />
              </svg>
            </div>
            <p className="font-bold text-xs uppercase opacity-60">Carbon Waste</p>
          </div>

          {/* Flow bar */}
          <div className="flex-1 w-full md:w-auto h-2 bg-gray-100 relative rounded-full overflow-hidden">
            <div className="absolute inset-0 transformation-gradient" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-gray-200 z-10 whitespace-nowrap">
              <span className="text-[10px] font-bold uppercase tracking-tighter">AI_SYNTH_CORE v4.2</span>
            </div>
          </div>

          {/* Polymer side */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center border-4 border-[#ec4899] animate-pulse">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <circle cx="50" cy="50" r="20" fill="none" stroke="#ec4899" strokeWidth="4" />
                <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" stroke="#ec4899" strokeWidth="4" />
              </svg>
            </div>
            <p className="font-bold text-xs uppercase text-[#ec4899]">Engineered Polymer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
