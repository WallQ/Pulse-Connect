import {
	type DefaultSession,
	getServerSession,
	type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ROUTES } from '@/routes';
import { signIn } from '@/services/authAPI';
import { type APIResponse, APIStatus, HTTPStatusCode } from '@/types/api';
import { type User } from '@/types/user';
import { signInSchema } from '@/validators/auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			username: string;
			firstName: string;
			lastName: string;
			image: string;
		} & DefaultSession['user'];
	}

	interface User {
		id: string;
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		image: string;
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@domain.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: '********',
				},
			},
			authorize: async (credentials) => {
				const { email, password } =
					await signInSchema.parseAsync(credentials);

				console.log('credentials', email, password);

				return {
					id: '1',
					username: 'Pulse Connect',
					email: 'admin@pulseconnect.com',
					firstName: 'Pulse',
					lastName: 'Connect',
					image: 'https://github.com/wallq.png',
				};

				// const response = await signIn({
				// 	email,
				// 	password,
				// });

				// const user = response?.data ? JSON.parse(response.data) as User : null;

				// return {
				// 	id: user.data?.id,
				// 	username: user.data?.username,
				// 	email: user.data?.email,
				// 	firstName: user.data?.firstName,
				// 	lastName: user.data?.lastName,
				// 	image: user.data?.image,
				// };
			},
		}),
	],
	callbacks: {
		jwt: ({ token, user }) => ({
			...token,
			...user,
		}),
		session: ({ session, token }) => ({
			...session,
			user: {
				...session.user,
				id: token.sub,
			},
		}),
	},
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60,
	},
	pages: {
		signIn: ROUTES.AUTH.SIGNIN,
		newUser: ROUTES.AUTH.SIGNUP,
	},
	secret: process.env.NEXTAUTH_SECRET,
	useSecureCookies: process.env.NODE_ENV === 'production',
	debug: process.env.NODE_ENV === 'development',
};

export const getServerAuthSession = () => getServerSession(authOptions);
