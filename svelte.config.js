import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import examples from 'mdsvexamples';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import highlight from 'rehype-highlight'
import rehypeToC from 'rehype-toc'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.md', '.svelte'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [ [
				examples,
				{
				  defaults: {
					Wrapper: '/src/lib/Example.svelte'
				  }
				}
			  ]],
			  rehypePlugins: [highlight, rehypeAutolinkHeadings],
			  layout: './src/lib/MarkdownPage.svelte'
		})
	],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.

		/**
		 * @type {import('@sveltejs/adapter-static').AdapterOptions}
		 */
		adapter: adapter({
			// handleHttpError: 'warn',
			fallback: 'index.html'
		}),
		
		prerender: {
			handleHttpError: 'warn'
			
		}
	}
};

export default config;
