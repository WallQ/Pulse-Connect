import { type MetadataRoute } from 'next';

import { ROUTES } from '@/routes';

const sitemap = (): MetadataRoute.Sitemap => {
	const URL = process.env.NEXTAUTH_URL ?? '';

	return [
		{
			url: URL,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.CONNECTIONS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.MESSAGES}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.NOTIFICATIONS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.PROFILE}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.SETTINGS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.AUTH.SIGNIN}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.AUTH.SIGNUP}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.AUTH.SIGNOUT}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.AUTH.FORGOT_PASSWORD}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.AUTH.RESET_PASSWORD}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
	];
};

export default sitemap;
