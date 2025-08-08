import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/hypepad-logo.png"
            alt="HYPEPAD"
            width={160}
            height={40}
            priority
            className="h-10 w-auto bg-transparent"
          />
        </Link>
      </div>
    </header>
  );
}
