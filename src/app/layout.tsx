import '@/styles/globals.css';

import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';

import Providers from './providers';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Pulse Connect',
	description: 'This is an evaluation project of the LDS curricular unit.',
	applicationName: 'Pulse Connect',
	authors: [
		{ name: 'Axel Guimarães' },
		{ name: 'Daniel Teixeira' },
		{ name: 'Hugo Ribeiro' },
		{ name: 'Márcio Ribeiro' },
		{ name: 'Sérgio Félix' },
	],
	keywords: ['pulse', 'connect', 'pulse connect', 'pulseconnect'],
	themeColor: '#ffffff',
	icons: [
		{ rel: 'icon', url: '/favicon.ico' },
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			url: '/android-chrome-192x192.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon-16x16.png',
		},
		{
			rel: 'mask-icon',
			color: '#f97316',
			url: '/safari-pinned-tab.svg',
		},
	],
	manifest: '/site.webmanifest',
	openGraph: {},
	twitter: {},
	appleWebApp: {},
	other: {
		'apple-mobile-web-app-title': 'Pulse Connect',
		'application-name': 'Pulse Connect',
		'msapplication-TileColor': '#ffffff',
		'msapplication-TileImage': '/mstile-144x144.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`font-sans ${inter.variable}`}>
				<Providers>
					<main>{children}</main>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
