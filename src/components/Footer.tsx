'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer id="join" className="bg-white text-[#1f2937] pt-32 pb-12 overflow-hidden border-t border-gray-100">
      <div className="px-6 md:px-12 relative">
        <div className="absolute -right-20 -bottom-20 text-[20vw] font-bold opacity-[0.03] pointer-events-none select-none uppercase">
          MOLECULE
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32 relative z-10">
          <h2 className="text-huge font-bold kerning-tight uppercase">
            DO NOT<br />WAIT.<br /><span className="text-[#ec4899]">SOLVE.</span>
          </h2>
          <div className="w-full lg:max-w-md">
            <p className="text-xl font-bold mb-8 uppercase tracking-widest">Join the frontlines.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL_ADDRESS"
                className="flex-1 bg-gray-50 border-b-2 border-[#ec4899] px-4 py-4 text-[#1f2937] font-mono focus:outline-none focus:bg-gray-100 placeholder:text-gray-400"
              />
              <button className="bg-[#ec4899] px-8 py-4 font-bold text-white uppercase hover:bg-[#ef4444] transition-all warm-shadow">
                SEND
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-12 text-xs font-mono opacity-50 uppercase relative z-10">
          <div className="flex gap-8">
            <p>© 2026 BIOPLASTIC_AI</p>
            <a href="#" className="hover:text-[#ec4899] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ec4899] transition-colors">Terms</a>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#ec4899] transition-colors">TWITTER / X</a>
            <a href="#" className="hover:text-[#ec4899] transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-[#ec4899] transition-colors">GITHUB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
