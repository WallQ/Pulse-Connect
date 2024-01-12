import NextAuth, {
	type DefaultSession,
	getServerSession,
	type NextAuthOptions,
	type User,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import TwitterProvider from 'next-auth/providers/twitter';

import { env } from '@/env.mjs';
import { APP_ROUTES } from '@/routes/app';
import { signIn } from '@/services/Auth';

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			email: string;
			password: string;
			userName: string;
			firstName: string;
			lastName: string;
			profileImageURL: string;
			headerImageURL: string;
			bio: string;
			city: string;
			country: string;
			customURL: string;
			createdAt: string;
			connectionsTotal: number;
			accessToken: string;
		} & DefaultSession['user'];
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

				const response = await signIn(credentials);

				if (!response.ok) return null;

				return (await response.json()) as User;
			},
		}),
		TwitterProvider({
			clientId: env.TWITTER_CLIENT_ID,
			clientSecret: env.TWITTER_CLIENT_SECRET,
		}),
	],
	callbacks: {
		jwt: ({ token, user }) => {
			return {
				...token,
				...user,
			};
		},
		session: ({ session, token }) => {
			return {
				...session,
				user: {
					...session.user,
					...token,
				},
			};
		},
	},
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: APP_ROUTES.AUTH.SIGN_IN,
		newUser: APP_ROUTES.AUTH.SIGN_UP,
		signOut: APP_ROUTES.AUTH.SIGN_OUT,
	},
	secret: env.NEXTAUTH_SECRET,
	useSecureCookies: env.NODE_ENV === 'production',
	debug: env.NODE_ENV === 'development',
};

export const getServerAuthSession = () => getServerSession(authOptions);

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
