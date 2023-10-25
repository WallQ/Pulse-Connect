import {
	type DefaultSession,
	getServerSession,
	type NextAuthOptions,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { ROUTES } from '@/constants/routes';
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

				console.log('credentials', email, password);

				// const user = await signIn({ email, password });

				// if (!user) return null;

				// return {
				// 	id: user.id,
				// 	username: user.username,
				// 	email: user.email,
				// 	firstName: user.firstName,
				// 	lastName: user.lastName,
				// };
				return {
					id: '12345',
					username: 'Pulse Connect',
					email: 'user@pulseconnect.com',
					firstName: 'Pulse',
					lastName: 'Connect',
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
		signIn: ROUTES.AUTH.SIGNIN,
		newUser: ROUTES.AUTH.SIGNUP,
	},
	secret: process.env.NEXTAUTH_SECRET,
	useSecureCookies: process.env.NODE_ENV === 'production',
	debug: process.env.NODE_ENV === 'development',
};

export const getServerAuthSession = () => getServerSession(authOptions);
