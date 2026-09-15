/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.0.166"], // apna actual local IP yaha daalo (ipconfig/ifconfig se check karo)
};

export default nextConfig;