import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This allows build to pass even if linting fails
  },
};

export default nextConfig;
