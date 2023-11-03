import { type Metadata, type NextPage } from 'next/types';

export const metadata: Metadata = {
	title: 'Pulse Connect - Messages',
};

const MessagesPage: NextPage = (): React.ReactNode => {
	return <h1 className='text-xl font-semibold'>Messages Page</h1>;
};

export default MessagesPage;
