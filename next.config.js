/** @type {import('next').NextConfig} */
const nextConfig = {
  type: "module",
  images: {
    remotePatterns : [
        {
            protocol: 'https',
            hostname: 'randomuser.me',
            port: '',
            pathname: '/api/portraits/women/**',
            // domains: ["randomuser.me"],
        }
    ],
    domains: ['randomuser.me', 'drive.google.com', 'doc-04-3o-docs.googleusercontent.com'],
    // domains: ["randomuser.me", "images.unsplash.com"],
    
    // deviceSizes: [320, 576, 768, 1024, 1200],
    // imageSizes: [64, 128, 256],
    // formats: ["image/avif", "image/webp", "image/jpg"],
  },
};

module.exports = nextConfig;
