import type { NextConfig } from "next";

const normalizedRepoName = (process.env.NEXT_PUBLIC_GITHUB_PAGES_PATH ?? 'Jordays')
  .replace(/^\/+|\/+$/g, '')
  .trim();
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd && normalizedRepoName ? `/${normalizedRepoName}` : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
