/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  allowedDevOrigins: ["192.168.180.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aolfyesvxasqrzcbjqho.supabase.co",
        pathname: "/storage/v1/object/public/product-images/**",
      },
    ],
  },
};

export default nextConfig;
