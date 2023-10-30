import { type NextPage } from 'next/types';

const HomePage: NextPage = (): React.ReactNode => {
	return (
		<main className='flex max-w-5xl flex-1 flex-col items-start justify-start border-x border-input p-16 align-middle'>
			<h1 className='text-xl font-semibold'>Homepage</h1>
		</main>
	);
};

export default HomePage;
