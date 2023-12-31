import { type MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/private/',
		},
		sitemap: 'https://pulse-connect-omega.vercel.app/sitemap.xml',
	};
};

export default robots;
