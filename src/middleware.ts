import { type NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
	if (process.env.MAINTENANCE_MODE === 'true')
		return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
	matcher: [
		'/',
		'/connections',
		'/messages',
		'/notifications',
		'/profile',
		'/contact',
		'/settings/:path*',
	],
};
