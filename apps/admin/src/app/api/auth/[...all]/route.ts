import { toNextJsHandler } from 'better-auth/next-js'
import type { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

async function handler(req: NextRequest) {
  const { auth } = await import('@gem/auth')
  const h = toNextJsHandler(auth)
  return req.method === 'POST' ? h.POST(req) : h.GET(req)
}

export { handler as GET, handler as POST }
