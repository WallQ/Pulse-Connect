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
		<SessionProvider>
			<QueryProvider>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</QueryProvider>
		</SessionProvider>
	);
};

export default Providers;
