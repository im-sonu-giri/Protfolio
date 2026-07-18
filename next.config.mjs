/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote hosts here if project screenshots are hosted externally,
    // e.g. raw.githubusercontent.com for GitHub-hosted preview images.
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
