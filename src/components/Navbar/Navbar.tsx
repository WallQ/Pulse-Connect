'use client';

import { ChevronDown, LogOut, Search, Settings, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

const Navbar: React.FunctionComponent = (): React.ReactNode => {
	return (
		<header className='flex w-full flex-row items-center justify-between border-b border-input bg-background px-4 py-8 align-middle'>
			<Link href='/'>
				<Image
					src='/logo/Logo Transparent Text Black.svg'
					alt='Logo'
					width={128}
					height={128}
					priority={true}
					className='h-8 w-auto'
				/>
			</Link>
			<div className='flex w-full max-w-sm flex-row items-center space-x-2'>
				<Input type='text' placeholder='Search' />
				<Button type='submit' size='icon'>
					<Search className='h-4 w-4' />
				</Button>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className='flex cursor-pointer flex-row items-center justify-between space-x-2 whitespace-nowrap rounded-md p-1.5  align-middle ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
						<Avatar>
							<AvatarImage src='https://github.com/shadcn.png' />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className='flex flex-col items-start justify-between align-middle'>
							<span className='text-base font-medium'>
								Pulse Connect
							</span>
							<span className='text-xs font-normal text-muted-foreground'>
								Online
							</span>
						</div>
						<ChevronDown className='h-5 w-5' />
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-56'>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<User className='mr-2 h-4 w-4' />
							<span>Profile</span>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className='mr-2 h-4 w-4' />
							<span>Settings</span>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => signOut()}
						className='cursor-pointer'>
						<LogOut className='mr-2 h-4 w-4' />
						<span>Log out</span>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Navbar;
