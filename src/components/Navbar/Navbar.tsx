import {
	ChevronDown,
	Contrast,
	HelpCircle,
	Languages,
	LogOut,
	Search,
	Settings,
	User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
import { getServerAuthSession } from '@/server/auth';
import { getInitials } from '@/utils/initials';

import DarkThemeButton from '../ThemeChangerButton/DarkThemeButton';
import LightThemeButton from '../ThemeChangerButton/LightThemeButton';

const Navbar: React.FunctionComponent = async () => {
	const session = await getServerAuthSession();

	if (!session) throw new Error('User not authenticated!');

	const initials = getInitials(session.user.firstName, session.user.lastName);

	return (
		<header className='flex w-full flex-row items-center justify-between border-b border-input bg-background p-8 align-middle'>
			<Link href='/'>
				<Image
					src='/logo/Logo Transparent Text Black.svg'
					alt='Logo'
					width={32}
					height={32}
					priority={true}
					className='dark:nightMode h-8 w-full'
				/>
			</Link>
			<div className='flex w-full max-w-xl flex-row items-center justify-between space-x-2 align-middle'>
				<Input type='text' placeholder='Search' name='search' />
				<Button type='submit' size='icon'>
					<Search className='h-4 w-4' />
				</Button>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className='flex cursor-pointer flex-row items-center justify-between space-x-2 whitespace-nowrap rounded-md p-1.5  align-middle ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
						<Avatar>
							<AvatarImage src={session.user.image} />
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>
						<div className='flex flex-col items-start justify-between align-middle'>
							<span className='text-base font-medium'>
								{session.user.firstName} {session.user.lastName}
							</span>
							<div className='flex flex-row items-center justify-between space-x-1 align-middle'>
								<div className='h-3 w-3 rounded-full bg-emerald-500' />{' '}
								<small className='text-xs font-normal text-muted-foreground'>
									Online
								</small>
							</div>
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
								className='flex flex-row justify-center align-middle'>
								<User className='mr-2 h-4 w-4' />
								<span>Profile</span>
							</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link
								href={ROUTES.SETTINGS}
								className='flex flex-row justify-center align-middle'>
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
									<DropdownMenuItem className='cursor-pointer'>
										<LightThemeButton />
									</DropdownMenuItem>
									<DropdownMenuItem className='cursor-pointer'>
										<DarkThemeButton />
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
						<Link
							href={ROUTES.AUTH.SIGNOUT}
							className='flex w-full flex-row items-center justify-start align-middle'>
							<LogOut className='mr-2 h-4 w-4' />
							<span>Sign Out</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</header>
	);
};

export default Navbar;
