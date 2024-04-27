import { withContentlayer } from "next-contentlayer";
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spacexcode.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'spacexcode.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
};
 
export default withContentlayer(nextConfig);