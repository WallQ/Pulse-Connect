import { type NextPage } from 'next/types';

import ForgotForm from '@/components/Forms/ForgotForm/ForgotForm';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const ForgotPasswordPage: NextPage = (): React.ReactNode => {
	return (
		<div className='flex flex-1 flex-col items-center justify-center align-middle'>
			<Card className='w-3/4'>
				<CardHeader>
					<CardTitle>Forgot Password</CardTitle>
					<CardDescription>
						Enter your email below to reset your password.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ForgotForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default ForgotPasswordPage;
