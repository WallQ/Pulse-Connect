'use client';

import { type NextPage } from 'next/types';
import { signOut } from 'next-auth/react';

import { ROUTES } from '@/routes';

const SignOutPage: NextPage = (): React.ReactNode => {
	try {
		signOut({ redirect: true, callbackUrl: ROUTES.AUTH.SIGNIN })
			.then(() => {
				console.log('User has signed out successfully!');
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (error) {
		console.error(error);
	} finally {
		return null;
	}
};

export default SignOutPage;
