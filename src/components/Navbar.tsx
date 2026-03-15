export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream border-b border-forest/10">
      <div className="flex justify-between items-center px-6 md:px-12 h-20">
        <a href="#" className="text-2xl font-black kerning-tight uppercase">
          BioPlastic<span className="text-earth">.AI</span>
        </a>
        <div className="hidden md:flex items-center gap-12 text-sm font-bold uppercase tracking-widest">
          <a href="#crisis" className="hover:text-earth transition-colors">The Crisis</a>
          <a href="#engine" className="hover:text-earth transition-colors">The Engine</a>
          <a href="#transformation" className="hover:text-earth transition-colors">Loop</a>
        </div>
        <a
          href="#join"
          className="bg-forest text-cream px-6 py-2 text-sm font-bold uppercase tracking-tighter hover:bg-earth transition-all"
        >
          Join The Race
        </a>
      </div>
    </nav>
  );
}
