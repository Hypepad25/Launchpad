import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/logo-512.png?v5"
          alt="HYPEPAD"
          className="w-48 md:w-64 drop-shadow-xl"
          style={ objectFit: "contain" }
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fuel Your Launch. <span className="text-orange-400">Rule the Hype.</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            The next‑gen multi‑chain launchpad with anti‑rug protections, staking, KYC/SAFU,
            and instant meme token creation. Built for serious creators.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="/launch" className="rounded-xl bg-orange-500 px-5 py-3 font-semibold">Create Token</a>
            <a href="/presale" className="rounded-xl bg-white/10 px-5 py-3 font-semibold">Join $HYPE Presale</a>
          </div>
        </div>
      </div>
    </section>
  );
}