'use client';

import { AlertCircle, Link } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';
import { ROUTES } from '@/routes';

type GlobalErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

const GlobalError: React.FunctionComponent<GlobalErrorProps> = ({
	error,
	reset,
}): React.ReactNode => {
	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Alert variant='destructive' className='w-3/4'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Error!</AlertTitle>
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
						href={ROUTES.HOME}
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

export default GlobalError;
