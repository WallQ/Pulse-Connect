import Link from 'next/link';
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

const SignUpPage: NextPage = (): React.ReactNode => {
	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Card className='w-3/4'>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>
						Enter below the credentials to create your account.
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

export default SignUpPage;
