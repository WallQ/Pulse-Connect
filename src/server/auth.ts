import {
	type DefaultSession,
	getServerSession,
	type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { signIn } from '@/services/auth/signin';
import { signInSchema } from '@/validators/auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			username: string;
			firstName: string;
			lastName: string;
		} & DefaultSession['user'];
	}

	interface User {
		id: string;
		username: string;
		email: string;
		firstName: string;
		lastName: string;
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			type: 'credentials',
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

				const user = await signIn({ email, password });

				if (!user) return null;

				return {
					id: user.id,
					username: user.username,
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName,
				};
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
		signIn: '/auth/signin',
		newUser: '/auth/signup',
	},
	secret: process.env.NEXTAUTH_SECRET,
	useSecureCookies: process.env.NODE_ENV === 'production',
	debug: process.env.NODE_ENV === 'development',
};

export const getServerAuthSession = () => getServerSession(authOptions);
