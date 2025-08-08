import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
