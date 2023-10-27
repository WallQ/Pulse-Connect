'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

type ValueObject = Record<string, string>;

type ThemeProviderProps = {
	children: React.ReactNode;
	themes?: string[];
	forcedTheme?: string;
	enableSystem?: boolean;
	disableTransitionOnChange?: boolean;
	enableColorScheme?: boolean;
	storageKey?: string;
	defaultTheme?: string;
	attribute?: string;
	value?: ValueObject;
	nonce?: string;
};

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
	children,
	...props
}): React.ReactNode => {
	return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
