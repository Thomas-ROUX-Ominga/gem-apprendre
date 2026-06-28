import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@gem/ui', '@gem/auth'],
}

export default nextConfig
