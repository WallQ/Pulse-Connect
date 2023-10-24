import axios from 'axios';

import type { User } from '@/types/user';

type SignInProps = {
	email: string;
	password: string;
};

export const signIn = async ({
	email,
	password,
}: SignInProps): Promise<User> => {
	try {
		const { data } = await axios.post<User>(
			`${process.env.API_URL}/auth/signin`,
			{
				email,
				password,
			},
			{ headers: { 'Content-Type': 'application/json' } },
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(error);
			throw new Error('An error occurred while signing in.');
		} else {
			console.error(error);
			throw new Error('An unknown error occurred while signing in.');
		}
	}
};
