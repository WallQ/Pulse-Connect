'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { type ISignIn, signInSchema } from '@/validators/auth';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import ReCAPTCHA from 'react-google-recaptcha';

import {
	readFromLocalStorage,
	writeOnLocalStorage,
	removeFromLocalStorage,
} from '@/utils/local-storage';

type StoredData = {
	email: string;
	password: string;
	remember: boolean;
};

const SignInForm: React.FunctionComponent = (): React.ReactNode => {
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const form = useForm<ISignIn>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	});

	useEffect(() => {
		const storedData = readFromLocalStorage<StoredData>({
			key: 'remember',
		});
		form.setValue('email', storedData?.email ?? '');
		form.setValue('password', storedData?.password ?? '');
		form.setValue('remember', storedData?.remember ?? false);
	}, [form]);

	const onSubmit = (data: ISignIn) => {
		if (data.remember) {
			writeOnLocalStorage<StoredData>({
				key: 'remember',
				data: {
					email: data.email,
					password: data.password,
					remember: data.remember,
				},
			});
		} else {
			removeFromLocalStorage({ key: 'remember' });
		}

		setIsSubmitting(true);
		console.log(data);
		setIsSubmitting(false);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									id='email'
									placeholder='user@pulseconnect.com'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									id='password'
									placeholder='********'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='flex flex-row items-center justify-between space-x-4 align-middle'>
					<FormField
						control={form.control}
						name='remember'
						render={({ field }) => (
							<FormItem className='flex flex-row space-x-3 space-y-0'>
								<FormControl>
									<Checkbox
										id='remember'
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel>Remember me</FormLabel>
							</FormItem>
						)}
					/>
					<Link
						href={ROUTES.AUTH.FORGOT_PASSWORD}
						className='text-sm font-medium leading-none text-primary hover:text-primary/90'>
						Forgot your password?
					</Link>
				</div>
				<ReCAPTCHA
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
					ref={refCaptcha}
					size='invisible'
				/>
				<Button
					type='submit'
					className='w-full'
					disabled={form.formState.isSubmitting || isSubmitting}>
					{isSubmitting ? (
						<>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Submitting...
						</>
					) : (
						'Submit'
					)}
				</Button>
				<Separator />
				<Button type='button' variant='outline' className='w-full'>
					<Twitter className='mr-2 h-4 w-4' />
					Sign in with Twitter
				</Button>
			</form>
		</Form>
	);
};

export default SignInForm;
