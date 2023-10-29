import { type NextPage } from 'next/types';

// import { redirect } from 'next/navigation';
// import { getServerAuthSession } from '@/server/auth';

const HomePage: NextPage = (): React.ReactNode => {
	// const session = await getServerAuthSession();

	// if (!session) {
	// 	redirect(ROUTES.AUTH.SIGNIN);
	// }

	return (
		<main className='flex max-w-5xl flex-1 flex-col items-start justify-start border-x border-input p-16 align-middle'>
			<h1 className='text-lg font-semibold'>Homepage</h1>
		</main>
	);
};

export default HomePage;
