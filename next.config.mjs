/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.i-sgcm.com",
      },
    ],
  },
};

export default nextConfig;
