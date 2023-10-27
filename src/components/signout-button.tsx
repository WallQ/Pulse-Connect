'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Fragment } from 'react';

import { ROUTES } from '@/routes';

const SignOutButton = () => {
	return (
		<Fragment>
			<button
				onClick={() =>
					signOut({ redirect: true, callbackUrl: ROUTES.AUTH.SIGNIN })
				}
				className='inline-flex justify-center align-middle'>
				<LogOut className='mr-2 h-4 w-4' />
				<span>Log out</span>
			</button>
		</Fragment>
	);
};

export default SignOutButton;
