"use client";

export default function DiscoBall() {
  return (
    <iframe
      src="/viewer.html"
      className="w-full h-full"
      style={{
        border: "none",
        background: "transparent",
        pointerEvents: "none",
      }}
      title="3D Model"
      loading="eager"
      allowTransparency
    />
  );
}
