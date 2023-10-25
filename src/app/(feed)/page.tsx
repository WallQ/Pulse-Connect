import Link from 'next/link';

// import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
// import { getServerAuthSession } from '@/server/auth';

export default function HomePage() {
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
}
