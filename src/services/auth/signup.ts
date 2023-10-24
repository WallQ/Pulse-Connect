import axios from 'axios';

import type { User } from '@/types/user';

type SignUpProps = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
};

export const signUp = async ({
	firstName,
	lastName,
	username,
	email,
	password,
}: SignUpProps): Promise<User> => {
	try {
		const { data } = await axios.post<User>(
			`${process.env.API_URL}/auth/signup`,
			{
				firstName,
				lastName,
				username,
				email,
				password,
			},
			{ headers: { 'Content-Type': 'application/json' } },
		);

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(error);
			throw new Error('An error occurred while signing up.');
		} else {
			console.error(error);
			throw new Error('An unknown error occurred while signing up.');
		}
	}
};
