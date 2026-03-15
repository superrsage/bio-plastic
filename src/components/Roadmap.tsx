const phases = [
  { phase: 'Phase 01', title: 'PET REPLACEMENT FOUND', status: '[ COMPLETED_2025 ]', highlight: false },
  { phase: 'Phase 02', title: 'INDUSTRIAL PILOT SCALE', status: '[ IN_PROGRESS ]', highlight: true },
  { phase: 'Phase 03', title: 'TOP 10 POLYMERS REPLACED', status: '[ TARGET_2027 ]', highlight: false },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-cream py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#1B4332" strokeWidth="0.1" />
          <path d="M10,50 L90,50 M50,10 L50,90" stroke="#1B4332" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="px-6 md:px-12 relative">
        <div className="max-w-5xl">
          <h2 className="text-5xl md:text-8xl font-black kerning-tight mb-20">
            WE ARE RACING <br />THE CLOCK.
          </h2>

          <div className="space-y-0">
            {phases.map((p) => (
              <div
                key={p.phase}
                className="group border-t-2 border-forest py-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/40 transition-colors"
              >
                <span className="text-sm font-bold uppercase opacity-50">{p.phase}</span>
                <span className="text-2xl md:text-4xl font-black">{p.title}</span>
                <span className={`text-sm font-mono ${p.highlight ? 'text-earth' : ''}`}>{p.status}</span>
              </div>
            ))}
            <div className="border-t-2 border-forest" />
          </div>
        </div>
      </div>
    </section>
  );
}
