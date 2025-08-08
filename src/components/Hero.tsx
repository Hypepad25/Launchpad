import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero"
    >
      {/* Background banner restored (no logo overlay) */}
      <div
        className="min-h-[46vh] md:min-h-[56vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hypepad-banner.jpg')" }}
      >
        {/* soft overlay for readability */}
        <div className="h-full w-full bg-black/35">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-white font-extrabold leading-[1.1] tracking-tight text-balance text-4xl md:text-6xl">
                Fuel Your Launch. Rule the Hype.
              </h1>
              <p className="mt-4 text-neutral-200 text-balance max-w-2xl text-base md:text-lg">
                A professional, multi-chain launchpad with rugged security,
                powerful creator tools, and a seamless investor experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
