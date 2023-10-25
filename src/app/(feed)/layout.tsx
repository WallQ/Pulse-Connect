import { Sidebar } from '@/components/Sidebar/';
import { Navbar } from '@/components/Navbar/';

type FeedLayoutProps = {
	children: React.ReactNode;
};

const FeedLayout: React.FunctionComponent<FeedLayoutProps> = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<Navbar />
			<div className='flex flex-row items-start justify-between align-middle'>
				<Sidebar />
				{children}
			</div>
		</>
	);
};

export default FeedLayout;
