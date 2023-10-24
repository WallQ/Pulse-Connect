'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
import { useToast } from '@/components/ui/use-toast';
import { type ISignIn, signInSchema } from '@/validators/auth';

interface StoredData {
	email: string;
	password: string;
	remember: boolean;
}

const SignInForm = () => {
	const { toast } = useToast();

	const form = useForm<ISignIn>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	});

	useEffect(() => {
		const storedData = JSON.parse(
			localStorage.getItem('remember') ?? '{}',
		) as StoredData;
		form.setValue('email', storedData.email || '');
		form.setValue('password', storedData.password || '');
		form.setValue('remember', storedData.remember || false);
	}, [form]);

	const onSubmit = (data: ISignIn) => {
		if (data.remember) {
			localStorage.setItem('remember', JSON.stringify(data));
		} else {
			localStorage.removeItem('remember');
		}

		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
			duration: 5000,
		});
		console.log(data);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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
				<Button
					type='submit'
					className='w-full'
					disabled={form.formState.isSubmitted}>
					{form.formState.isSubmitted && (
						<Loader2 className='mr-2 h-4 w-4 animate-spin' />
					)}
					Submit
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
