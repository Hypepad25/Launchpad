export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-b from-black to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center text-white">
        <img
          src="/hypepad-logo-hero.png"
          alt="HYPEPAD"
          className="mx-auto w-full max-w-[520px] h-auto bg-transparent"
          draggable="false"
        />
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold">
          Fuel Your Launch. Rule the Hype.
        </h1>
        <p className="mt-4 text-neutral-300">
          The next-gen multi-chain launchpad for tokens, NFTs, and DAOs.
        </p>
      </div>
    </section>
  );
}
