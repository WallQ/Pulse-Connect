import { type Metadata, type NextPage } from 'next/types';

export const metadata: Metadata = {
	title: 'Pulse Connect - Connections',
};

const ConnectionsPage: NextPage = (): React.ReactNode => {
	return <h1 className='text-xl font-semibold'>Connections Page</h1>;
};

export default ConnectionsPage;
