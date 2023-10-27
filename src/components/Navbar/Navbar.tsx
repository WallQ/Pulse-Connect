'use client';

import {
	Check,
	ChevronDown,
	Contrast,
	HelpCircle,
	Languages,
	Moon,
	Search,
	Settings,
	Sun,
	User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/routes';

import SignOutButton from '../signout-button';

const Navbar: React.FunctionComponent = (): React.ReactNode => {
	const { setTheme, theme } = useTheme();

	return (
		<header className='mx-auto flex w-full flex-row items-center justify-between border-b border-input bg-background py-8 align-middle md:px-6 lg:px-8'>
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
							<AvatarImage src='https://github.com/wallq.png' />
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
							<Link
								href={ROUTES.PROFILE}
								className='inline-flex justify-center align-middle'>
								<User className='mr-2 h-4 w-4' />
								<span>Profile</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link
								href={ROUTES.SETTINGS}
								className='inline-flex justify-center align-middle'>
								<Settings className='mr-2 h-4 w-4' />
								<span>Settings</span>
							</Link>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger className='cursor-pointer'>
								<Contrast className='mr-2 h-4 w-4' />
								<span>Aspecto</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem
										className='cursor-pointer'
										onClick={() => setTheme('light')}>
										<Sun className='mr-2 h-4 w-4' />
										<span className='w-full'>Claro</span>
										{theme === 'light' && (
											<Check className=' h-4 w-4' />
										)}
									</DropdownMenuItem>
									<DropdownMenuItem
										className='cursor-pointer'
										onClick={() => setTheme('dark')}>
										<Moon className='mr-2 h-4 w-4' />
										<span className='w-full'>Escuro</span>
										{theme === 'dark' && (
											<Check className=' h-4 w-4' />
										)}
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger className='cursor-pointer'>
								<Languages className='mr-2 h-4 w-4' />
								<span>Language</span>
							</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem className='cursor-pointer'>
										<span>Portuguese</span>
									</DropdownMenuItem>
									<DropdownMenuItem className='cursor-pointer'>
										<span>English</span>
									</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem className='cursor-pointer'>
						<HelpCircle className='mr-2 h-4 w-4' />
						<span>Help</span>
					</DropdownMenuItem>
					<DropdownMenuItem className='cursor-pointer'>
						<SignOutButton />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Navbar;
