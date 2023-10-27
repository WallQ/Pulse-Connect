import { cookies } from 'next/headers';

import { ClientCookiesProvider } from '@/providers/cookies-provider';
import QueryProvider from '@/providers/query-provider';
import { SessionProvider } from '@/providers/session-provider';
import ThemeProvider from '@/providers/theme-provider';

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers: React.FunctionComponent<ProvidersProps> = ({
	children,
}): React.ReactNode => {
	return (
		<ClientCookiesProvider value={cookies().getAll()}>
			<SessionProvider>
				<QueryProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</QueryProvider>
			</SessionProvider>
		</ClientCookiesProvider>
	);
};

export default Providers;
