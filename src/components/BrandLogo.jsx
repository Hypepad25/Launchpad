
import React from "react";

export default function BrandLogo({ className = "h-9 w-auto" }) {
  return (
    <img
      src="/logo-512.png?v6"
      alt="HYPEPAD"
      className={className}
      style={{ backgroundColor: "transparent" }}
      loading="eager"
    />
  );
}
