import { NextResponse } from 'next/server'

async function getSession() {
  return false
}

export async function middleware(request: NextResponse) {
  if (!(await getSession())) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/about'],
}
