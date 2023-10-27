import Link from 'next/link';
import { type NextPage } from 'next/types';

// import { redirect } from 'next/navigation';
import { ROUTES } from '@/routes';
// import { getServerAuthSession } from '@/server/auth';

const HomePage: NextPage = (): React.ReactNode => {
	// const session = await getServerAuthSession();

	// if (!session) {
	// 	redirect(ROUTES.AUTH.SIGNIN);
	// }

	return (
		<main>
			<h1>Hello World!</h1>
			<Link href={ROUTES.AUTH.SIGNIN}>
				<span className='text-base text-black'>Sign In</span>
			</Link>
			<Link href={ROUTES.AUTH.SIGNUP}>
				<span className='text-base text-black'>Sign Up</span>
			</Link>
		</main>
	);
};

export default HomePage;
