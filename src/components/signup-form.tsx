'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState, useRef } from 'react';

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
import { type ISignUp, signUpSchema } from '@/validators/auth';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import ReCAPTCHA from 'react-google-recaptcha';

const SignUpForm: React.FunctionComponent = (): React.ReactNode => {
	const refCaptcha = useRef<ReCAPTCHA>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const form = useForm<ISignUp>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			username: '',
			email: '',
			password: '',
			remember: false,
		},
	});

	const onSubmit = (data: ISignUp) => {
		setIsSubmitting(true);
		console.log(data);
		setIsSubmitting(false);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<div className='flex flex-row justify-between space-x-4'>
					<FormField
						control={form.control}
						name='firstName'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										type='text'
										id='firstName'
										placeholder='Pulse'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='lastName'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										type='text'
										id='lastName'
										placeholder='Connect'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									type='text'
									id='username'
									placeholder='PulseConnect'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
				<FormField
					control={form.control}
					name='confirmPassword'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input
									type='password'
									id='confirmPassword'
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
						href={ROUTES.AUTH.SIGNIN}
						className='text-sm font-medium leading-none text-primary hover:text-primary/90'>
						Already have an account?
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
				<div className='flex flex-row space-x-4'></div>
			</form>
		</Form>
	);
};

export default SignUpForm;
