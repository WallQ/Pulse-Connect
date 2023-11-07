import { Search } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/routes';

import ChatItem from './ChatItem';

const Chatbar: React.FunctionComponent = (): React.ReactNode => {
	return (
		<aside className='2xl:flex w-[20%] flex-col items-center justify-start space-y-12 border-l border-input p-8 hidden'>
			<div className='flex w-full flex-row items-center justify-between space-x-2'>
				<Input
					type='text'
					placeholder='Search'
					name='search'
				/>
				<Button type='submit' variant='default' size='icon' className='shrink-0'>
					<Search className='h-5 w-5' />
				</Button>
			</div>
			<div className='flex w-full flex-row items-center justify-between'>
				<span className='text-lg font-semibold'>Messages</span>
				<Link
					href={ROUTES.MESSAGES}
					className={buttonVariants({ variant: 'link' })}>
					Show All
				</Link>
			</div>
			<div className='flex flex-col items-center justify-between'>
				<ScrollArea className='h-128'>
					{Array.from({ length: 24 }).map((_, index) => (
						<Fragment key={`chat-${index}`}>
							<Link href={`${ROUTES.MESSAGES}/${1}`}>
								<ChatItem
									image={'https://github.com/wallq.png'}
									firstName={'Sérgio'}
									lastName={'Félix'}
									time={'10:00 AM'}
									message={
										'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
									}
								/>
							</Link>
							<Separator />
						</Fragment>
					))}
				</ScrollArea>
			</div>
		</aside>
	);
};

export default Chatbar;
