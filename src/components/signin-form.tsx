'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useEffect, useRef,useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';

import { Button, buttonVariants } from '@/components/ui/button';
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
import { ROUTES } from '@/constants/routes';
import {
	readFromLocalStorage,
	removeFromLocalStorage,
	writeOnLocalStorage,
} from '@/utils/local-storage';
import { type ISignIn, signInSchema } from '@/validators/auth';

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

	const onSubmit = async (data: ISignIn) => {
		setIsSubmitting(true);

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

		const response = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: true,
		});

		if (response?.error) {
			setIsSubmitting(false);
			redirect(ROUTES.HOME);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4' id='signin' name='signin'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='user@pulseconnect.com'
									autoComplete='email'
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
									placeholder='********'
									autoComplete='current-password'
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
										name='remember'
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
				<Link
					href={ROUTES.AUTH.SIGNUP}
					className={`w-full ${buttonVariants({
						variant: 'secondary',
					})}`}>
					Create an account
				</Link>
				<Button type='button' variant='outline' className='w-full'>
					<Twitter className='mr-2 h-4 w-4' />
					Continue with Twitter
				</Button>
			</form>
		</Form>
	);
};

export default SignInForm;
