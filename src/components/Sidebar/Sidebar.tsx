import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { type SidebarItemProps, sidebarItems } from './sidebar-items';
import SidebarItem from './SidebarItem';

const Sidebar: React.FunctionComponent = (): React.ReactNode => {
	return (
		<aside className='flex w-[10%] flex-col items-center justify-between border-r border-input p-8'>
			<Button variant='outline' size='icon'>
				<Menu className='h-5 w-5' />
			</Button>
			{Object.keys(sidebarItems).map(
				(categoty: string, index: number) => (
					<div
						key={`${categoty}-${index}`}
						className='flex w-full flex-col items-center justify-between space-y-8'>
						{sidebarItems[categoty]?.map(
							(item: SidebarItemProps, index: number) => (
								<SidebarItem
									key={`${item.title}-${index}`}
									href={item.href}
									title={item.title}
									icon={item.icon}
								/>
							),
						)}
					</div>
				),
			)}
		</aside>
	);
};

export default Sidebar;
