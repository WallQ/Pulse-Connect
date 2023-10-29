import { LogOut, Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';

import { type SidebarItemProps, sidebarItems } from './sidebar-items';
import SidebarItem from './SidebarItem';

const Sidebar: React.FunctionComponent = (): React.ReactNode => {
	return (
		<aside className='sticky flex min-h-max w-32 flex-col items-center justify-between overflow-hidden border-r border-input bg-background p-8 align-middle'>
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
				<SidebarItem
					title='Settings'
					href={ROUTES.SETTINGS}
					icon='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzIj48cGF0aCBkPSJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIvPjwvc3ZnPg=='
				/>
				<Button
					variant='link'
					size='icon'
					asChild
					className='text-inherit'>
					<Link
						href={ROUTES.AUTH.SIGNOUT}
						className='flex flex-col items-center justify-between space-y-2 align-middle'>
						<LogOut className='h-4 w-4' />
						<span className='text-xs font-normal'>Sign Out</span>
					</Link>
				</Button>
			</div>
		</aside>
	);
};

export default Sidebar;
