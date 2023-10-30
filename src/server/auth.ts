import {
	type DefaultSession,
	getServerSession,
	type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ROUTES } from '@/routes';
import { mockSignIn } from '@/services/auth-api';
import { type MockUser } from '@/types/user';
// import { signIn } from '@/services/auth-api';
// import { type APIResponse, APIStatus, HTTPStatusCode } from '@/types/api';
// import { type User } from '@/types/user';
import { signInSchema } from '@/validators/auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
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
		} & DefaultSession['user'];
	}

	interface User {
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
				if (!credentials) return null;

				const { email, password } =
					await signInSchema.parseAsync(credentials);

				console.log('Email', email, ' - ' + 'Password', password);

				const user = await mockSignIn();

				if (!user) return null;

				if (typeof user === 'string') {
					return null;
				} else {
					return {
						id: user.id,
						username: user.username,
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
						bio: user.bio,
						country: user.country,
						image: user.image,
						role: user.role,
					} as MockUser;
				}
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
				...token,
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
