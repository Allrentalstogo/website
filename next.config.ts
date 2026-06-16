import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't mis-infer it from a parent
  // lockfile (silences the build warning and keeps output paths correct).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
