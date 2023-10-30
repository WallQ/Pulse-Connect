'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useTimer } from 'react-timer-hook';

type CountdownProps = {
	targetDate: Date;
};

const Countdown: React.FunctionComponent<CountdownProps> = ({
	targetDate,
}): React.ReactNode => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp: targetDate,
		autoStart: true,
		onExpire: () => redirect('/'),
	});

	return (
		<div className='flex flex-row items-center justify-between gap-x-12 align-middle'>
			<div className='flex flex-col items-center justify-center space-y-2 align-middle'>
				<span className='flex h-16 w-16 flex-col items-center justify-center rounded-md bg-foreground align-middle text-xl font-medium text-background'>
					{String(days).padStart(2, '0')}
				</span>
				<span className='text-sm text-muted-foreground'>Day(s)</span>
			</div>
			<div className='flex flex-col items-center justify-center space-y-2 align-middle'>
				<span className='flex h-16 w-16 flex-col items-center justify-center rounded-md bg-foreground align-middle text-xl font-medium text-background'>
					{String(hours).padStart(2, '0')}
				</span>
				<span className='text-sm text-muted-foreground'>Hour(s)</span>
			</div>
			<Image
				src='/logo/Logo Transparent.svg'
				alt='Logo'
				width={32}
				height={32}
				priority={true}
				className='dark:nightMode h-48 w-full'
			/>
			<div className='flex flex-col items-center justify-center space-y-2 align-middle'>
				<span className='flex h-16 w-16 flex-col items-center justify-center rounded-md bg-foreground align-middle text-xl font-medium text-background'>
					{String(minutes).padStart(2, '0')}
				</span>
				<span className='text-sm text-muted-foreground'>Minute(s)</span>
			</div>
			<div className='flex flex-col items-center justify-center space-y-2 align-middle'>
				<span className='flex h-16 w-16 flex-col items-center justify-center rounded-md bg-foreground align-middle text-xl font-medium text-background'>
					{String(seconds).padStart(2, '0')}
				</span>
				<span className='text-sm text-muted-foreground'>Second(s)</span>
			</div>
		</div>
	);
};

export default Countdown;
