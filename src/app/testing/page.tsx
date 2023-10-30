import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';
import { ROUTES } from '@/routes';

const Testing: React.FunctionComponent = (): React.ReactNode => {
	return (
		<main className='flex h-screen flex-col items-center justify-center space-y-8 align-middle'>
			<Alert variant='destructive' className='max-w-xl'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Error!</AlertTitle>
				<AlertDescription>
					An unexpected error has occurred.
				</AlertDescription>
				<div className='mt-4 flex w-full flex-row gap-x-4'>
					<Button variant={'destructive'} className='w-full'>
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
		</main>
	);
};

export default Testing;
