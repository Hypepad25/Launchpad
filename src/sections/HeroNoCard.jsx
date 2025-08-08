
import React from "react";

export default function HeroNoCard() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/logo-512.png?v6"
          alt="HYPEPAD"
          className="w-48 md:w-64"
          style={{ objectFit: "contain", backgroundColor: "transparent" }}
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Launch. Graduate. Grow.
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            HYPEPAD is currently in <span className="font-semibold">pre‑launch</span>. 
            We&apos;re building the most trusted, investor‑grade Web3 launchpad. Builders: apply for early access.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/launch" className="rounded-xl bg-orange-500 px-5 py-3 font-semibold">Apply to Launch</a>
            <a href="/presale" className="rounded-xl bg-white/10 px-5 py-3 font-semibold">Get Presale Updates</a>
          </div>
        </div>
      </div>
    </section>
  );
}
