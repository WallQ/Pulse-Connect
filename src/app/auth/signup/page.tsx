import Link from 'next/link';
import { type NextPage } from 'next/types';

import SignUpForm from '@/components/forms/signup-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

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
					<p className='text-muted-foreground'>
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

export default SignUpPage;
