import axios from 'axios';

import { type APIResponse } from '@/types/api';
import { type SignInProps, type SignUpProps } from '@/types/auth';
import { type User } from '@/types/user';

const authApi = axios.create({
	baseURL: process.env.API_URL,
});

export const signIn = async ({
	email,
	password,
}: SignInProps): Promise<APIResponse<User> | undefined> => {
	try {
		const response = await authApi.post<APIResponse<User>>(
			'/auth/signin',
			{
				email,
				password,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const signUp = async ({
	firstName,
	lastName,
	username,
	email,
	password,
}: SignUpProps): Promise<APIResponse<SignUpProps> | undefined> => {
	try {
		const response = await authApi.post<APIResponse<User>>(
			'/auth/signup',
			{
				firstName,
				lastName,
				username,
				email,
				password,
			},
			{
				headers: { 'Content-Type': 'application/json' },
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const signOut = async () => {
	try {
		await authApi.post<APIResponse<undefined>>('/auth/signout');
	} catch (error) {
		console.error(error);
	}
};

// export const getMe = async () => {
// 	try {
// 		const response = await authApi.get<APIResponse<undefined>>('/auth/me');
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// const handleApiError = (error: unknown, message: string) => {
// 	if (axios.isAxiosError(error)) {
// 		if (error.response) {
// 			const { data } = error.response;
// 			console.error(data);
// 			throw new Error(message);
// 		} else if (error.request) {
// 			console.error(error.request);
// 			throw new Error('An error has occurred while sending the request.');
// 		} else {
// 			console.error(error.message);
// 			throw new Error('An error has occurred.');
// 		}
// 	} else {
// 		console.error(error);
// 		throw new Error('An unxpected error has occurred.');
// 	}
// };

type SignInMockResponse = {
	createdAt: string;
	username: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	image: string;
	role: string;
	bio: string;
	country: string;
	id: number;
};

export const mockSignIn = async (): Promise<string | SignInMockResponse> => {
	try {
		const { data } = await authApi.get<SignInMockResponse>(
			'https://653affda2e42fd0d54d49ddc.mockapi.io/api/v1/users/1',
			{
				headers: {
					Accept: 'application/json',
				},
			},
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('Error: ', error.message);
			return error.message;
		} else {
			console.error('Unexpected error: ', error);
			return 'An unexpected error has occurred!';
		}
	}
};
