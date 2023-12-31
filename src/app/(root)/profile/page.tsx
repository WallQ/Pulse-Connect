import { type Metadata, type NextPage } from 'next/types';

export const metadata: Metadata = {
	title: 'Pulse Connect - Profile',
};

const ProfilePage: NextPage = (): React.ReactNode => {
	return <h1 className='text-xl font-semibold'>Profile Page</h1>;
};

export default ProfilePage;
