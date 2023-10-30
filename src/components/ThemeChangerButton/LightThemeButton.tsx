'use client';

import { Check, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const LightThemeButton: React.FunctionComponent = (): React.ReactNode => {
	const { setTheme, theme } = useTheme();

	return (
		<div
			className='flex w-full flex-row items-center justify-between align-middle'
			onClick={() => setTheme('light')}>
			<div className='flex flex-row items-center align-middle'>
				<Sun className='mr-2 h-4 w-4' />
				<span className='w-full'>Light</span>
			</div>
			{theme === 'light' ? <Check className='ml-2 h-4 w-4' /> : null}
		</div>
	);
};

export default LightThemeButton;
