import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export default function HomePage() {
	return (
		<div>
			<h1>Hello World!</h1>
			<Link href={ROUTES.AUTH.SIGNIN}>
				<span className='text-base text-black'>Sign In</span>
			</Link>
		</div>
	);
}
