import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The whole site is client-side React with static prerendering (no SSR,
  // no API routes, no server actions). Export to plain static HTML so Netlify
  // just serves files — no Next.js runtime/plugin needed.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
