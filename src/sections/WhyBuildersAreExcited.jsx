import React from "react";

export default function WhyBuildersAreExcited() {
  return (
    <section className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why builders are excited</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-white/90 leading-relaxed">
          <li>• Multi‑chain token creator + instant meme mode</li>
          <li>• Rug‑proof LP locks and graduation logic</li>
          <li>• KYC/SAFU options and anti‑bot protections</li>
          <li>• Presale/IDO with customizable fees</li>
          <li>• Live analytics, airdrops, staking, and DAO tools</li>
        </ul>
        <p className="mt-4 text-sm text-white/50">Remarks reflect private demos and roadmap reviews prior to launch.</p>
      </div>
    </section>
  );
}