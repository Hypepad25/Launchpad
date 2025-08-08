import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-b from-black to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center text-white">
        <Image
          src="/brand/hypepad-logo-hero@2x.png"
          width={900}
          height={300}
          alt="HYPEPAD"
          priority={false}
        />
      </div>
    </section>
  );
}
