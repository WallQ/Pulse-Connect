import { type NextPage } from 'next/types';

import Countdown from '@/components/Countdown/Countdown';

const MaintenancePage: NextPage = (): React.ReactNode => {
	return (
		<main className='flex h-screen flex-col items-center justify-center space-y-8 align-middle'>
			<Countdown
				targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 1)}
			/>
			<h1 className='text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
				We are currently undergoing{' '}
				<span className='text-primary'>maintenance</span>! <br />
				Please try again later.
			</h1>
		</main>
	);
};

export default MaintenancePage;
