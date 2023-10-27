'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

type SidebarItemProps = {
	title: string;
	href: string;
	icon: string;
};

const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({
	title,
	href,
	icon,
}): React.ReactNode => {
	const pathname = usePathname();
	return (
		<Button variant='link' size='icon' asChild className='text-inherit'>
			<Link
				href={href}
				className='flex flex-col items-center justify-between space-y-2 align-middle'>
				<Image
					src={icon}
					alt='icon'
					width={16}
					height={16}
					className='h-4 w-4 dark:invert'
				/>
				<span
					className={clsx('text-xs font-normal', {
						'underline decoration-primary decoration-solid decoration-2':
							pathname === href,
						'no-underline': pathname !== href,
					})}>
					{title}
				</span>
			</Link>
		</Button>
	);
};

export default SidebarItem;
