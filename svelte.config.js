import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: { 
		adapter: adapter(),
		alias: {
			'$content': 'src/content'
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: 'src/lib/layouts/BlogPost.svelte'
			},
			smartypants: {
				dashes: 'oldschool'
			},
			remarkPlugins: [],
			rehypePlugins: []
		})
	],
	extensions: ['.svelte', '.md']
};

export default config;
