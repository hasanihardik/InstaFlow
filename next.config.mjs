/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",  // Single asterisk for direct subdomains
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;