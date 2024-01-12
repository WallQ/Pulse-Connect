'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Save } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { type ChangeEmail, ChangeEmailSchema } from '@/validators/Settings';

const ChangeEmailForm: React.FunctionComponent = (): React.ReactNode => {
	const { data: session } = useSession();

	const form = useForm<ChangeEmail>({
		resolver: zodResolver(ChangeEmailSchema),
		defaultValues: {
			currentEmail: session?.user?.email ?? '',
			newEmail: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<ChangeEmail> = (data) => {
		// TODO: Call API to update user profile info
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				toast({
					title: 'You submitted the following values:',
					description: (
						<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
							<code className='text-white'>
								{JSON.stringify(data, null, 2)}
							</code>
						</pre>
					),
				});
				resolve();
			}, 5000);
		});
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				name='change-email-form'
				className='flex w-full flex-col gap-4'>
				<FormField
					control={form.control}
					name='newEmail'
					disabled={form.formState.isSubmitting}
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Email</FormLabel>
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
					disabled={form.formState.isSubmitting}
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
				<Button
					type='submit'
					disabled={form.formState.isSubmitting}
					className='max-w-min'>
					{form.formState.isSubmitting ? (
						<Fragment>
							<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							Updating...
						</Fragment>
					) : (
						<Fragment>
							<Save className='mr-2 h-4 w-4' />
							Save
						</Fragment>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default ChangeEmailForm;
