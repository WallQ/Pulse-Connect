import { type Metadata } from 'next/types';
import { Fragment } from 'react';

import { Chatbar } from '@/components/Chatbar';
import { Navbar } from '@/components/Navbar/';
import { Sidebar } from '@/components/Sidebar/';

type FeedLayoutProps = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'Pulse Connect - Home',
};

const FeedLayout: React.FunctionComponent<FeedLayoutProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<Fragment>
			<Navbar />
			<div className='flex flex-row justify-between'>
				<Sidebar />
				{children}
				<Chatbar />
			</div>
		</Fragment>
	);
};

export default FeedLayout;
