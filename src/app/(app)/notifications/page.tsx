import { Check, Trash2 } from 'lucide-react';
import { type NextPage } from 'next/types';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const NotificationsPage: NextPage = (): React.ReactNode => {
	return (
		<main className='flex max-w-5xl flex-1 flex-col items-start justify-start space-y-8 border-x border-input p-16 align-middle'>
			<div className='flex w-full flex-row items-center justify-between align-middle'>
				<div className='flex flex-row items-center justify-between space-x-2 align-middle'>
					<h1 className='text-2xl font-semibold'>Notifications</h1>
					<span className='text-2xl font-semibold text-primary'>
						9
					</span>
				</div>
				<div className='flex flex-row items-center justify-between space-x-2 align-middle'>
					<Button variant='outline' size='icon'>
						<Check className='h-4 w-4' />
					</Button>
					<Button variant='outline' size='icon'>
						<Trash2 className='h-4 w-4' />
					</Button>
				</div>
			</div>
			<div className='flex w-full flex-col items-start justify-between space-y-8 align-middle'>
				<h2 className='text-xl font-semibold'>New</h2>
				<div className='flex w-full flex-row items-center justify-start space-x-2 align-middle'>
					<Avatar>
						<AvatarImage src={'https://github.com/wallq.png'} />
						<AvatarFallback>SF</AvatarFallback>
					</Avatar>
					<div className='flex w-full flex-col items-start justify-between space-y-1 align-middle'>
						<div className='flex w-full flex-row items-center justify-start space-x-4 align-middle'>
							<span className='text-base font-medium leading-none'>
								Sérgio Félix
							</span>
							<p className='truncate text-sm text-muted-foreground'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<small className='text-xs text-muted-foreground'>
							1 hour ago
						</small>
					</div>
				</div>
				<div className='flex w-full flex-row items-center justify-start space-x-2 align-middle'>
					<Avatar>
						<AvatarImage src={'https://github.com/wallq.png'} />
						<AvatarFallback>SF</AvatarFallback>
					</Avatar>
					<div className='flex w-full flex-col items-start justify-between space-y-1 align-middle'>
						<div className='flex w-full flex-row items-center justify-between space-x-4 align-middle'>
							<div className='flex w-full flex-row items-center justify-start space-x-4 align-middle'>
								<span className='text-base font-medium leading-none'>
									Sérgio Félix
								</span>
								<p className='truncate text-sm text-muted-foreground'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
						</div>
						<small className='text-xs text-muted-foreground'>
							2 hours ago
						</small>
					</div>
				</div>
				<div className='flex w-full flex-row items-center justify-start space-x-2 align-middle'>
					<Avatar>
						<AvatarImage src={'https://github.com/wallq.png'} />
						<AvatarFallback>SF</AvatarFallback>
					</Avatar>
					<div className='flex w-full flex-col items-start justify-between space-y-1 align-middle'>
						<div className='flex w-full flex-row items-center justify-between space-x-4 align-middle'>
							<div className='flex w-full flex-row items-center justify-start space-x-4 align-middle'>
								<span className='text-base font-medium leading-none'>
									Sérgio Félix
								</span>
								<p className='truncate text-sm text-muted-foreground'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
							<Check className='h-4 w-4 text-primary' />
						</div>
						<small className='text-xs text-muted-foreground'>
							8 hours ago
						</small>
					</div>
				</div>
				<h2 className='text-xl font-semibold'>Old</h2>
				<div className='flex w-full flex-row items-center justify-start space-x-2 align-middle'>
					<Avatar>
						<AvatarImage src={'https://github.com/wallq.png'} />
						<AvatarFallback>SF</AvatarFallback>
					</Avatar>
					<div className='flex w-full flex-col items-start justify-between space-y-1 align-middle'>
						<div className='flex w-full flex-row items-center justify-between space-x-4 align-middle'>
							<div className='flex w-full flex-row items-center justify-start space-x-4 align-middle'>
								<span className='text-base font-medium leading-none'>
									Sérgio Félix
								</span>
								<p className='truncate text-sm text-muted-foreground'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
							<Check className='h-4 w-4 text-primary' />
						</div>
						<small className='text-xs text-muted-foreground'>
							1 day ago
						</small>
					</div>
				</div>
				<div className='flex w-full flex-row items-center justify-start space-x-2 align-middle'>
					<Avatar>
						<AvatarImage src={'https://github.com/wallq.png'} />
						<AvatarFallback>SF</AvatarFallback>
					</Avatar>
					<div className='flex w-full flex-col items-start justify-between space-y-1 align-middle'>
						<div className='flex w-full flex-row items-center justify-between space-x-4 align-middle'>
							<div className='flex w-full flex-row items-center justify-start space-x-4 align-middle'>
								<span className='text-base font-medium leading-none'>
									Sérgio Félix
								</span>
								<p className='truncate text-sm text-muted-foreground'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</div>
							<Check className='h-4 w-4 text-primary' />
						</div>
						<small className='text-xs text-muted-foreground'>
							1 week ago
						</small>
					</div>
				</div>
			</div>
		</main>
	);
};

export default NotificationsPage;
