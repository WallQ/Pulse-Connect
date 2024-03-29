import { type Metadata, type NextPage } from 'next/types';
import { Fragment } from 'react';

import NotificationsForm from '@/components/Forms/SettingsPage/NotificationsForm';
import { BackButton } from '@/components/shared/BackButton';
import { Title } from '@/components/shared/Title';
import { Separator } from '@/components/ui/separator';
import { APP_ROUTES } from '@/routes/app';
import { getServerAuthSession } from '@/server/auth';

export const metadata: Metadata = {
	title: 'Pulse Connect - Notifications Settings',
};

const SettingsNotificationsPage: NextPage = async () => {
	const session = await getServerAuthSession();
	if (!session) throw new Error('Unauthenticated!');
	return (
		<Fragment>
			<div className='flex w-full flex-col items-start justify-between gap-4'>
				<div className='flex flex-row items-center justify-between gap-4'>
					<BackButton url={APP_ROUTES.SETTINGS.ROOT} />
					<Title title='Notifications Settings' />
				</div>
				<Separator />
			</div>
			<h2 className='text-lg font-semibold tracking-tight'>
				Choose how Pulse Connect inform you!
			</h2>
			<p className='text-base leading-7 text-muted-foreground'>
				Toggle between on and off your notification preferences across
				the application.
			</p>
			<NotificationsForm />
		</Fragment>
	);
};

export default SettingsNotificationsPage;
