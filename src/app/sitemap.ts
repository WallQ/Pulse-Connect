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
			url: `${URL}${ROUTES.ABOUT}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.FAQ}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.CONTACT}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.TERMS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.PRIVACY}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.ROOT}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.GENERAL.ACCOUNT}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.GENERAL.NOTIFICATIONS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.GENERAL.APPEARANCE}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.GENERAL.LANGUAGE}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.ACCOUNT.INTEGRATIONS}`,
			lastModified: '10-30-2023',
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.ACCOUNT.EMAIL}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.ACCOUNT.PASSWORD}`,
			lastModified: '10-30-2023',
			changeFrequency: 'yearly',
			priority: 0.75,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.ACCOUNT.DISABLE}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
		},
		{
			url: `${URL}${ROUTES.SETTINGS.OTHERS.HELP}`,
			lastModified: '10-30-2023',
			changeFrequency: 'never',
			priority: 0.5,
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
