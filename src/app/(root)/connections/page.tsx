import { Filter, Search } from 'lucide-react';
import { type Metadata, type NextPage } from 'next/types';
import { Fragment } from 'react';

import { ConnectionCard } from '@/components/Connections';
import { FilterButton } from '@/components/FilterButton';
import {
	type FilterProps,
	filters,
} from '@/components/FilterButton/filters-items';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
	title: 'Pulse Connect - Connections',
};

const ConnectionsPage: NextPage = (): React.ReactNode => {
	return (
		<Fragment>
			<div className='flex w-full flex-row items-center justify-between align-middle'>
				<h1 className='text-xl font-semibold'>Connections</h1>
				<div className='flex w-full flex-row items-center justify-end space-x-2'>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Button variant='outline' size='icon'>
								<Filter className='h-5 w-5' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Filter by:</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{filters.map(
								(filter: FilterProps, index: number) => (
									<DropdownMenuItem
										key={`filter-${index}`}
										className='cursor-pointer'>
										<FilterButton
											id={filter.id}
											label={filter.label}
											icon={filter.icon}
										/>
									</DropdownMenuItem>
								),
							)}
						</DropdownMenuContent>
					</DropdownMenu>
					<div className='flex flex-row items-center justify-between space-x-2'>
						<Input
							type='text'
							placeholder='Search'
							name='search'
							className='max-w-xs'
						/>
						<Button
							type='submit'
							variant='default'
							size='icon'
							className='shrink-0'>
							<Search className='h-5 w-5' />
						</Button>
					</div>
				</div>
			</div>
			<Tabs defaultValue='connections' className='flex w-full flex-col'>
				<TabsList>
					<TabsTrigger value='connections' className='w-full'>
						Connections
					</TabsTrigger>
					<TabsTrigger value='pending' className='w-full'>
						Pending
					</TabsTrigger>
				</TabsList>
				<TabsContent value='connections' className='mt-8'>
					<div className='grid grid-cols-4 gap-4'>
						{Array.from({ length: 24 }).map((_, index) => (
							<ConnectionCard
								key={`connection-${index}`}
								type='connection'
								id={index.toString()}
								image={'https://github.com/wallq.png'}
								firstName={'Sérgio'}
								lastName={'Félix'}
								username={'@wallq'}
							/>
						))}
					</div>
				</TabsContent>
				<TabsContent value='pending' className='mt-8'>
					<div className='grid grid-cols-4 gap-4'>
						{Array.from({ length: 6 }).map((_, index) => (
							<ConnectionCard
								key={`pending-${index}`}
								type='pending'
								id={index.toString()}
								image={'https://github.com/wallq.png'}
								firstName={'Sérgio'}
								lastName={'Félix'}
								username={'@wallq'}
							/>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</Fragment>
	);
};

export default ConnectionsPage;
