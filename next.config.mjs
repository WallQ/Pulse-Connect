import million from 'million/compiler';
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
	// i18n: {
	// 	locales: ['en-US', 'pt-PT'],
	// 	defaultLocale: 'en-US',
	// },
	images: {
		domains: [],
	},
};

export default million.next(config, { auto: { rsc: true }, mute: true });
