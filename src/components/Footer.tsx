'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer id="join" className="bg-forest text-cream pt-32 pb-12 overflow-hidden">
      <div className="px-6 md:px-12 relative">
        <div className="absolute -right-20 -bottom-20 text-[20vw] font-black opacity-[0.03] pointer-events-none select-none uppercase">
          MOLECULE
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32 relative z-10">
          <h2 className="text-huge font-black kerning-tight uppercase">
            DO NOT<br />WAIT.<br /><span className="text-earth">SOLVE.</span>
          </h2>
          <div className="w-full lg:max-w-md">
            <p className="text-xl font-bold mb-8 uppercase tracking-widest">Join the frontlines.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL_ADDRESS"
                className="flex-1 bg-white/10 border-b-2 border-earth px-4 py-4 text-white font-mono focus:outline-none focus:bg-white/20 placeholder:text-white/40"
              />
              <button
                className="bg-earth px-8 py-4 font-black uppercase hover:brightness-110 transition-all"
              >
                SEND
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12 text-xs font-mono opacity-50 uppercase relative z-10">
          <div className="flex gap-8">
            <p>© 2026 BIOPLASTIC_AI</p>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">TWITTER / X</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-white transition-colors">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
