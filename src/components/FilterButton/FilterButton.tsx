'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';

import { useFilterStore } from '@/store/Filter';

type ThemeButtonProps = {
	id: string;
	label: string;
	icon: string;
};

const FilterButton: React.FunctionComponent<ThemeButtonProps> = ({
	id,
	label,
	icon,
}): React.ReactNode => {
	const { filter, setFilter } = useFilterStore();
	return (
		<button
			className='flex w-full flex-row items-center justify-between'
			onClick={() => setFilter(id)}>
			<div className='flex flex-row items-center'>
				<Image
					src={icon}
					alt='icon'
					width={20}
					height={20}
					className='dark:nightMode mr-2 h-4 w-4'
				/>
				<span className='w-full'>{label}</span>
			</div>
			{filter === id && <Check className='ml-2 h-4 w-4' />}
		</button>
	);
};

export default FilterButton;
