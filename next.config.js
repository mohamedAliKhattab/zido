/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  // output: "standalone",
  runtime: "edge",
  env: {
    BACKEND_URL: process.env === "development" ? "http://localhost:8081" : "",
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    ROUNDED_DECIMAL_PLACES: process.env.ROUNDED_DECIMAL_PLACES,
  },
};

module.exports = nextConfig;
