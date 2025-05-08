import { getPostBySlug } from '$lib/utils/blog.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await getPostBySlug(params.slug);

  if (post) {
    return {
      post
    };
  }

  throw error(404, 'Post not found');
}
