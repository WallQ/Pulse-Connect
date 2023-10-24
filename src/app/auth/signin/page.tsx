import Link from 'next/link';
import { type NextPage } from 'next/types';

import SignInForm from '@/components/auth-form';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type SignInProps = {
	//
};

const SignInPage: NextPage<SignInProps> = (): React.ReactNode => {
	return (
		<div className='flex flex-col justify-center flex-1 align-middle items-center'>
			<Card className='w-3/4'>
				<CardHeader>
					<CardTitle>Sign In</CardTitle>
					<CardDescription>
						Enter below the credentials to enter into your account.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
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

export default SignInPage;
