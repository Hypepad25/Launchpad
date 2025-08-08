export default function HeroLogo() {
  return (
    <section className="relative bg-gradient-to-b from-black to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center text-white">
        <img
          src="/assets/logo-hero@1x.png"
          srcSet="/assets/logo-hero@2x.png 2x, /assets/logo-hero@3x.png 3x"
          width="540" height="180" alt="HYPEPAD" className="mx-auto block select-none" draggable="false"
        />
      </div>
    </section>
  );
}
