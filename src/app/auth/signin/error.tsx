'use client';

import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button, buttonVariants } from '@/components/ui/button';

export default function SignInError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className='flex h-screen w-full items-center justify-center p-12 align-middle'>
			<Alert variant='destructive' className='flex w-1/4 flex-col'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Sign in error!</AlertTitle>
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
}
