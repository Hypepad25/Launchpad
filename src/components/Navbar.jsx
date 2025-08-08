export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-3">
        <a href="/" className="flex items-center" aria-label="HYPEPAD">
          <img
            src="/brand/hypepad-logo-header@1x.png"
            srcSet="/brand/hypepad-logo-header@2x.png 2x, /brand/hypepad-logo-header@3x.png 3x"
            width="200" height="50"
            alt="HYPEPAD"
            className="block select-none"
            draggable="false"
          />
        </a>
      </div>
    </header>
  );
}
