import { type MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
	const URL = process.env.NEXTAUTH_URL ?? '';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: `${URL}/sitemap.xml`,
	};
};

export default robots;
