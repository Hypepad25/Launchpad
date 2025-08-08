import React from "react";

export default function Header() {
  return (
    /* Keep existing header logo & layout exactly as-is */
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        {/* header logo unchanged */}
        <a href="/" className="flex items-center gap-2">
          <img src="/brand/hypepad-header-logo.png" alt="HYPEPAD" className="h-7 w-auto" />
        </a>

        {/* placeholder for nav items; keep your existing component if you have one */}
        <nav className="hidden md:flex items-center gap-6 text-white/90">
          <a href="/launch" className="hover:text-white">Launch</a>
          <a href="/tokens" className="hover:text-white">Tokens</a>
          <a href="/stake" className="hover:text-white">Stake</a>
          <a href="/docs" className="hover:text-white">Docs</a>
        </nav>

        {/* mobile menu button placeholder */}
        <button className="md:hidden text-white" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}
