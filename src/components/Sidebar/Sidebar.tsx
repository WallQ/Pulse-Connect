'use client';

import clsx from 'clsx';
import { LogOut,Menu, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
	type SidebarItem,
	sidebarItems,
} from '@/components/Sidebar/sidebar-items';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

const Sidebar: React.FunctionComponent = (): React.ReactNode => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const pathname = usePathname();

	return (
		<aside
			className={clsx(
				'flex flex-col h-full justify-between border-r border-input bg-background px-4 py-8 align-middle duration-300',
				{
					'w-72 items-start': isMenuOpen,
					'w-32 items-center': !isMenuOpen,
				},
			)}>
			<Button
				variant='outline'
				size='icon'
				onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<Menu className='h-5 w-5' />
			</Button>
			<div className='flex w-full flex-col items-center justify-between space-y-8 align-middle'>
				{sidebarItems.map((item: SidebarItem, index: number) => (
					<Button
						key={`${item.title}-${index}`}
						variant='link'
						size='icon'
						asChild
						className='text-inherit'>
						<Link
							href={item.href}
							className='flex flex-col items-center justify-between space-y-2 align-middle'>
							<item.icon className='h-5 w-5' />
							<span
								className={clsx('text-xs font-normal', {
									'underline decoration-primary decoration-solid decoration-2':
										pathname === item.href,
									'no-underline': pathname !== item.href,
								})}>
								{item.title}
							</span>
						</Link>
					</Button>
				))}
			</div>
			<div className='flex w-full flex-col items-center justify-between space-y-8 align-middle'>
				<Button
					variant='link'
					size='icon'
					asChild
					className='text-inherit'>
					<Link
						href={ROUTES.SETTINGS}
						className='flex flex-col items-center justify-between space-y-2 align-middle'>
						<Settings className='h-5 w-5' />
						<span className='text-xs font-normal'>Settings</span>
					</Link>
				</Button>
				<Button
					variant='link'
					size='icon'
					asChild
					className='text-inherit'>
					<Link
						href={ROUTES.AUTH.SIGNOUT}
						className='flex flex-col items-center justify-between space-y-2 align-middle'>
						<LogOut className='h-5 w-5' />
						<span className='text-xs font-normal'>Sign Out</span>
					</Link>
				</Button>
			</div>
		</aside>
	);
};

export default Sidebar;
