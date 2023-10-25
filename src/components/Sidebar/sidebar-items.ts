import {
	Home,
	Users,
	MessageCircle,
	Bell,
	User,
	type LucideProps,
} from 'lucide-react';
import { ROUTES } from '@/constants/routes';

export type SidebarItem = {
	title: string;
	icon: React.ComponentType<LucideProps>;
	href: string;
};

export const sidebarItems: SidebarItem[] = [
	{
		title: 'Home',
		icon: Home,
		href: ROUTES.HOME,
	},
	{
		title: 'Connections',
		icon: Users,
		href: ROUTES.CONNECTIONS,
	},
	{
		title: 'Messages',
		icon: MessageCircle,
		href: ROUTES.MESSAGES,
	},
	{
		title: 'Notifications',
		icon: Bell,
		href: ROUTES.NOTIFICATIONS,
	},
	{
		title: 'Profile',
		icon: User,
		href: ROUTES.PROFILE,
	},
];
