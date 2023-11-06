import { type NextPage } from 'next/types';

import { ResetForm } from '@/components/Forms/';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const ResetPasswordPage: NextPage = (): React.ReactNode => {
	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Card className='w-3/4'>
				<CardHeader>
					<CardTitle>Reset Password</CardTitle>
					<CardDescription>
						Enter your new password below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default ResetPasswordPage;
