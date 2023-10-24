'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Loader2, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';

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

const SignInForm = () => {
	const { toast } = useToast();
	const [remember, setRemember] = useLocalStorage<ISignIn>('remember', {
		email: '',
		password: '',
		remember: false,
	});

	const form = useForm<ISignIn>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: remember.email,
			password: remember.password,
			remember: remember.remember,
		},
	});

	('use client');
	const onSubmit = (data: ISignIn) => {
		if (data.remember) {
			setRemember(data);
		} else {
			setRemember({ email: '', password: '', remember: false });
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
