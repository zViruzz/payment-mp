import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authOptions } from './app/api/auth/[...nextauth]'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	// const session = await getServerSession(authOptions)
	// console.log('🚀 ~ middleware ~ session:', session)
	// return NextResponse.redirect(new URL('/', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/auth/login', '/'],
}
