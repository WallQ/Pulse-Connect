'use client';

import { Check, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const DarkThemeButton: React.FunctionComponent = (): React.ReactNode => {
	const { setTheme, theme } = useTheme();

	return (
		<div
			className='flex w-full flex-row items-center justify-between align-middle'
			onClick={() => setTheme('dark')}>
			<div className='flex flex-row items-center align-middle'>
				<Moon className='mr-2 h-4 w-4' />
				<span className='w-full'>Dark</span>
			</div>
			{theme === 'dark' ? <Check className='ml-2 h-4 w-4' /> : null}
		</div>
	);
};

export default DarkThemeButton;
