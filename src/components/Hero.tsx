export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-end px-6 md:px-12 pb-24 border-b border-forest overflow-hidden"
    >
      {/* Molecule visualization */}
      <div className="absolute top-1/4 right-[-5%] lg:right-[5%] w-full lg:w-1/2 h-1/2 pointer-events-none z-0 opacity-20 lg:opacity-100">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-float">
          <g fill="none" stroke="#1B4332" strokeWidth="1">
            <circle cx="200" cy="200" r="8" fill="#8B6914" className="molecule-bond" />
            <circle cx="150" cy="140" r="6" fill="#1B4332" />
            <circle cx="250" cy="140" r="6" fill="#1B4332" />
            <circle cx="150" cy="260" r="6" fill="#1B4332" />
            <circle cx="250" cy="260" r="6" fill="#1B4332" />
            <line x1="200" y1="200" x2="150" y2="140" stroke="#1B4332" className="molecule-bond" />
            <line x1="200" y1="200" x2="250" y2="140" stroke="#1B4332" className="molecule-bond" />
            <line x1="200" y1="200" x2="150" y2="260" stroke="#1B4332" className="molecule-bond" />
            <line x1="200" y1="200" x2="250" y2="260" stroke="#1B4332" className="molecule-bond" />
            <path
              d="M100,100 L150,140 M300,100 L250,140 M100,300 L150,260 M300,300 L250,260"
              strokeDasharray="4 4"
              className="opacity-40"
            />
            <circle cx="80" cy="120" r="3" fill="#8B6914" className="animate-pulse" />
            <circle cx="320" cy="240" r="3" fill="#8B6914" className="animate-pulse [animation-delay:1s]" />
            <circle cx="120" cy="350" r="3" fill="#8B6914" className="animate-pulse [animation-delay:2s]" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl relative z-10">
        <h1 className="text-huge font-black kerning-tight mb-12 uppercase">
          NATURE TOOK MILLIONS OF YEARS.<br />
          <span className="text-earth">OUR AI DOES IT IN DAYS.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-2xl md:text-3xl font-medium leading-tight max-w-xl">
            We are engineering the end of permanent waste. Not through recycling,
            but through molecular evolution at silicon speed.
          </p>
          <div className="flex gap-4">
            <a
              href="#join"
              className="flex-1 md:flex-none text-center bg-earth text-white px-10 py-5 text-xl font-bold uppercase tracking-tighter hover:scale-[1.02] transition-transform shadow-2xl"
            >
              Decelerate Crisis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
