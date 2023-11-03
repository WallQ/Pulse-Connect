import Link from 'next/link';
import { redirect } from 'next/navigation';
import { type NextPage } from 'next/types';

import { SignUpForm } from '@/components/Forms/';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ROUTES } from '@/routes';
import { getServerAuthSession } from '@/server/auth';

const SignInPage: NextPage = async () => {
	const session = await getServerAuthSession();

	if (session) {
		redirect(ROUTES.HOME);
	}

	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Card className='w-3/4'>
				<CardHeader>
					<CardTitle>Sign In</CardTitle>
					<CardDescription>
						Enter below the credentials to enter into your account.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignUpForm />
				</CardContent>
				<CardFooter>
					<p className='text-sm text-muted-foreground'>
						By continuing, you agree to our{' '}
						<Link href={ROUTES.TERMS} className='underline'>
							Terms & Conditions
						</Link>{' '}
						and{' '}
						<Link href={ROUTES.PRIVACY} className='underline'>
							Privacy Policy
						</Link>
						.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignInPage;
