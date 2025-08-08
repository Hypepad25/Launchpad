import React from "react";

export default function BrandLogo({ className = "h-10 w-auto" }) {
  return (
    <img
      src="/logo-512.png"
      alt="HYPEPAD"
      className={className}
      style={{ objectFit: "contain" }}
      loading="eager"
    />
  );
}
