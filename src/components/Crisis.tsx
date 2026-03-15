export default function Crisis() {
  return (
    <section id="crisis" className="bg-[#fef9f3] text-[#1f2937] py-32 overflow-hidden">
      <div className="px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-1 hidden lg:block">
          <span className="vertical-text text-sm font-bold uppercase tracking-widest opacity-30">
            01 / URGENCY
          </span>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-5xl md:text-8xl font-bold kerning-tight mb-12">
            91% OF PLASTIC<br />IS NEVER RECYCLED.
          </h2>
          <p className="text-xl md:text-2xl opacity-70 max-w-2xl mb-16 leading-relaxed">
            The current system is broken. It was built for a world that didn&apos;t understand
            finite limits. We&apos;re not building a better bin; we&apos;re building better molecules.
          </p>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-end">
          <div className="space-y-12 border-l border-gray-200 pl-8 relative">
            <div className="absolute right-0 top-0 opacity-20">
              <svg width="200" height="200" viewBox="0 0 100 100">
                <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="#ec4899" strokeWidth="0.5" />
                <path d="M50 25 L75 40 L75 60 L50 75 L25 60 L25 40 Z" fill="none" stroke="#ec4899" strokeWidth="0.5" />
              </svg>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#ec4899]">400y</div>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Average decomposition lag</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#ec4899]">8MT</div>
              <p className="text-sm uppercase tracking-widest font-bold opacity-60">Annual ocean inflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
