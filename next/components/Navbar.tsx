import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="HYPEPAD">
          <Image
            src="/brand/hypepad-logo-header@2x.png"
            width={200}
            height={50}
            alt="HYPEPAD"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
