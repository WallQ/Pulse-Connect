import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ROUTES } from '@/routes';
import { getInitials } from '@/utils/initials';

type ConnectionCardProps = {
	type: 'connection' | 'pending';
	id: string;
	image: string;
	firstName: string;
	lastName: string;
	username: string;
};

const ConnectionCard: React.FunctionComponent<ConnectionCardProps> = ({
	type,
	id,
	image,
	firstName,
	lastName,
	username,
}): React.ReactNode => {
	const initials = getInitials(firstName, lastName);

	return (
		<Link href={`${ROUTES.PROFILE}/${id}`}>
			<Card>
				<CardHeader className='flex flex-col items-center justify-center space-y-4'>
					<Avatar className='h-16 w-16'>
						<AvatarImage src={image} alt='Avatar' />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
					<div className='flex flex-col items-center justify-center'>
						<CardTitle>
							{firstName} {lastName}
						</CardTitle>
						<CardDescription>{username}</CardDescription>
					</div>
				</CardHeader>
				<CardContent>
					<Button className='w-full'>
						{type === 'connection' ? 'Disconnect' : 'Cancel'}
					</Button>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ConnectionCard;
