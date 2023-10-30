import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/utils/initials';

type ChatItemProps = {
	image: string;
	firstName: string;
	lastName: string;
	time: string;
	message: string;
};

const ChatItem: React.FunctionComponent<ChatItemProps> = ({
	image,
	firstName,
	lastName,
	time,
	message,
}): React.ReactNode => {
	const initials = getInitials(firstName, lastName);

	return (
		<div className='flex flex-row items-center justify-between space-x-2 py-4 align-middle'>
			<Avatar>
				<AvatarImage src={image} />
				<AvatarFallback>{initials}</AvatarFallback>
			</Avatar>
			<div className='flex flex-col items-start justify-between space-y-1 align-middle'>
				<div className='flex w-full flex-row items-center justify-between align-middle'>
					<span className='text-sm font-medium leading-none'>
						{firstName} {lastName}
					</span>
					<small className='text-xs text-muted-foreground'>
						{time}
					</small>
				</div>
				<p className='max-w-xxs truncate text-xs text-muted-foreground'>
					{message}
				</p>
			</div>
		</div>
	);
};

export default ChatItem;
