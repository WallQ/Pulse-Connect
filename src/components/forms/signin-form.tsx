'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useCookies } from 'next-client-cookies';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { type SubmitHandler, useForm } from 'react-hook-form';

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
import { ROUTES } from '@/routes';
import { type CookieType } from '@/types/auth';
import { decrypt, encrypt } from '@/utils/cryptography';
import { type ISignIn, signInSchema } from '@/validators/auth';

const SignInForm: React.FunctionComponent = (): React.ReactNode => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const cookies = useCookies();

	const form = useForm<ISignIn>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	});

	useEffect(() => {
		const storedData = cookies.get('remember') as CookieType | undefined;
		form.setValue('email', storedData?.email ?? '');
		const password = decrypt(storedData?.password);
		form.setValue('password', password ?? '');
		form.setValue('remember', storedData?.remember ?? false);
	}, [cookies, form]);

	const onSubmit: SubmitHandler<ISignIn> = async (data: ISignIn) => {
		setIsSubmitting(true);

		const { email, password, remember } = data;

		const hashedPassword = encrypt(password);

		if (!remember) cookies.remove('remember');
		else
			cookies.set(
				'remember',
				JSON.stringify({ email, password: hashedPassword, remember }),
			);

		const response = await signIn('credentials', {
			email,
			password,
			callbackUrl: ROUTES.HOME,
		});

		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-4'
				id='signin'
				name='signin'>
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
