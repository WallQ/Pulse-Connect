'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = {
	href: string;
	title: string;
	icon: string;
};

const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({
	href,
	title,
	icon,
}): React.ReactNode => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className='flex cursor-pointer flex-col items-center justify-between space-y-2 rounded-md align-middle underline-offset-4 ring-offset-background transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'>
			<Image
				src={icon}
				alt='icon'
				width={20}
				height={20}
				className='h-5 w-5 dark:invert'
			/>
			<span
				className={clsx('text-xs font-normal', {
					'underline decoration-primary decoration-solid decoration-2 underline-offset-4':
						pathname === href,
					'no-underline': pathname !== href,
				})}>
				{title}
			</span>
		</Link>
	);
};

export default SidebarItem;
