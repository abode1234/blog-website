import { getAllPosts } from '$lib/utils/blog.js';

export async function load() {
  const posts = await getAllPosts();
 
  return {
    posts
  };
} 