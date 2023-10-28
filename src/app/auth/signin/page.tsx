import Link from 'next/link';
import { type NextPage } from 'next/types';

import SignUpForm from '@/components/Forms/signin-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const SignInPage: NextPage = (): React.ReactNode => {
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
						Ao continuar, você concorda com os nossos{' '}
						<Link href='#' className='underline'>
							Termos de Serviço
						</Link>{' '}
						e{' '}
						<Link href='#' className='underline'>
							Política de Privacidade
						</Link>
						.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default SignInPage;
