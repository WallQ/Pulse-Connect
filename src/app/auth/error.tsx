'use client';

import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';

type AuthErrorProps = {
	error: Error;
	reset: () => void;
};

const AuthError: React.FunctionComponent<AuthErrorProps> = ({
	error,
	reset,
}): React.ReactNode => {
	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Alert variant='destructive' className='w-3/4'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Authentication error!</AlertTitle>
				<AlertDescription>
					{error.message || 'An unexpected error has occurred.'}
				</AlertDescription>
				<div className='mt-4 flex w-full flex-row gap-x-4'>
					<Button
						variant={'destructive'}
						onClick={reset}
						className='w-full'>
						Try Again
					</Button>
					<Link
						href='/'
						className={`w-full ${buttonVariants({
							variant: 'outline',
						})}`}>
						Go Back Home
					</Link>
				</div>
			</Alert>
		</div>
	);
};

export default AuthError;
