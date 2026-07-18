/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats first; Next falls back automatically for
    // browsers that don't support them.
    formats: ["image/avif", "image/webp"],
    // Add remote hosts here if project screenshots are hosted externally,
    // e.g. raw.githubusercontent.com for GitHub-hosted preview images.
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  experimental: {
    // Tree-shakes these packages down to only the imports actually used,
    // instead of pulling the whole library into the client bundle.
    optimizePackageImports: ["lucide-react", "@react-three/drei", "three"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
