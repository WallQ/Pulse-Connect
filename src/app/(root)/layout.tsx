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
			<div className='relative flex h-full flex-row justify-between overflow-hidden'>
				<Sidebar />
				<main className='overflow-y-auto flex max-w-5xl flex-1 flex-col items-start justify-start space-y-8 border-x border-input p-16'>
					{children}
				</main>
				<Chatbar />
			</div>
		</Fragment>
	);
};

export default FeedLayout;
