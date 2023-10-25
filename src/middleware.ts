import { type NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';

import { ROUTES } from './constants/routes';

export default withAuth(
	async function middleware(req: NextRequest) {
		const token = await getToken({ req });
		const isAuthenticated = !!token;

		if (isAuthenticated) {
			return NextResponse.redirect(new URL(ROUTES.HOME, req.url));
		}

		if (!isAuthenticated) {
			return NextResponse.redirect(new URL(ROUTES.AUTH.SIGNIN, req.url));
		}
	},
	{
		callbacks: {
			authorized() {
				return true;
			},
		},
	},
);

export const config = {
	matcher: ['/'],
};
