import React from "react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandLogo className="h-9 w-auto" />
          <span className="text-white font-semibold tracking-wide">HYPEPAD</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="/launch" className="hover:text-white">Launch</a>
          <a href="/presale" className="hover:text-white">Presale</a>
          <a href="/staking" className="hover:text-white">Staking</a>
          <a href="/docs" className="hover:text-white">Docs</a>
        </nav>
        <button className="rounded-2xl bg-orange-500/90 px-4 py-2 text-white font-semibold shadow">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
