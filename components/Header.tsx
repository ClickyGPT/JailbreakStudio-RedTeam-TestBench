import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-900 bg-cyber-black p-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="relative">
            <ShieldAlert className="text-cyber-lime w-8 h-8 relative z-10" />
            <div className="absolute inset-0 bg-cyber-lime/20 blur-md z-0"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white font-sans">
            REDTEAM <span className="text-cyber-lime">STUDIO</span>
            <span className="ml-2 text-[10px] text-black bg-cyber-lime px-1.5 py-0.5 rounded font-bold tracking-widest">MVP</span>
          </h1>
          <p className="text-xs text-cyber-muted font-sans tracking-wide">ChinaMenTor Edition • Digital Kineticism</p>
        </div>
      </div>
      <nav className="flex gap-6 text-sm font-sans font-medium text-cyber-muted">
        <button type="button" className="hover:text-cyber-lime transition-colors duration-300 focus-visible:text-cyber-lime focus-visible:outline-none">DOCS</button>
        <button type="button" className="hover:text-cyber-lime transition-colors duration-300 focus-visible:text-cyber-lime focus-visible:outline-none">ARSENAL</button>
        <button type="button" className="hover:text-cyber-lime transition-colors duration-300 focus-visible:text-cyber-lime focus-visible:outline-none">FORUM</button>
      </nav>
    </header>
  );
};

export default Header;