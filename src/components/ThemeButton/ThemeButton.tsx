'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type ThemeButtonProps = {
	themeType: string;
	title: string;
	icon: string;
};

const ThemeButton: React.FunctionComponent<ThemeButtonProps> = ({
	themeType,
	title,
	icon,
}): React.ReactNode => {
	const { setTheme, theme } = useTheme();

	const handleThemeChange = () => {
		setTheme(themeType);
	};

	return (
		<div
			className='flex w-full flex-row items-center justify-between'
			onClick={handleThemeChange}>
			<div className='flex flex-row items-center'>
				<Image
					src={icon}
					alt='icon'
					width={20}
					height={20}
					className='mr-2 h-4 w-4 dark:nightMode'
				/>
				<span className='w-full'>{title}</span>
			</div>
			{theme === themeType ? <Check className='ml-2 h-4 w-4' /> : null}
		</div>
	);
};

export default ThemeButton;
