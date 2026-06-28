import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@gem/ui', '@gem/auth'],
  serverExternalPackages: ['better-auth', 'better-sqlite3', '@better-auth/kysely-adapter'],
}

export default nextConfig
