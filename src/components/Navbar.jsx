export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl flex items-center gap-6 px-4 py-3">
        <a href="/" className="flex items-center" aria-label="HYPEPAD">
          <img
            src="/assets/logo-header@1x.png"
            srcSet="/assets/logo-header@2x.png 2x, /assets/logo-header@3x.png 3x"
            width="220" height="55" alt="HYPEPAD" className="block select-none" draggable="false"
          />
        </a>
      </div>
    </header>
  );
}
