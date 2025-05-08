import { mdsvex } from 'mdsvex';
import netlify from '@sveltejs/adapter-netlify';

const config = {
	kit: { 
		adapter: netlify(),
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
