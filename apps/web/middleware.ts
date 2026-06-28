import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = await fetch(new URL('/api/auth/get-session', request.nextUrl.origin), {
    headers: { cookie: request.headers.get('cookie') ?? '' },
  })

  const session = res.ok ? await res.json() : null

  if (!session?.user) {
    const loginUrl = new URL('/admin/login', request.url)
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
}
