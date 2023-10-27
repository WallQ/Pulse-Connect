import { LogOut, Menu, Settings } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

import { type SidebarItemProps, sidebarItems } from './sidebar-items';
import SidebarItem from './SidebarItem';

const Sidebar: React.FunctionComponent = (): React.ReactNode => {
	return (
		<aside className='flex min-h-full w-32 flex-col items-center justify-between border-r border-input bg-background px-4 py-8 align-middle duration-300'>
			<Button variant='outline' size='icon'>
				<Menu className='h-4 w-4' />
			</Button>
			<div className='flex w-full flex-col items-center justify-between space-y-8 align-middle'>
				{sidebarItems.map(
					(
						{ title, href, icon }: SidebarItemProps,
						index: number,
					) => (
						<SidebarItem
							key={`${title}-${index}`}
							title={title}
							href={href}
							icon={icon}
						/>
					),
				)}
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
