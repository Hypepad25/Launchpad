import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-3">
        <Link to="/" className="flex items-center">
          <img
            src="/hypepad-logo.png"
            alt="HYPEPAD"
            className="h-10 w-auto bg-transparent select-none"
            draggable="false"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white">
          <a href="/launch">Launch</a>
          <a href="/presale">Presale</a>
          <a href="/staking">Staking</a>
          <a href="/learn">Learn</a>
        </nav>

        <button className="ml-auto rounded-2xl px-4 py-2 text-black bg-orange-400 hover:bg-orange-300">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
