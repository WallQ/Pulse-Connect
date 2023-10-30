import { Loader2 } from 'lucide-react';

const Loading: React.FunctionComponent = (): React.ReactNode => {
	return (
		<main className='flex h-screen flex-col items-center justify-center align-middle'>
			<Loader2 className='mr-2 h-4 w-4 animate-spin' />
		</main>
	);
};

export default Loading;
