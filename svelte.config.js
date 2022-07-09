import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'developmnent';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base: dev ? '' : '/FM-product-preview-card'
		},
		appDir: '_app',
		prerender: {
			default: true
		}
	}
};

export default config;
