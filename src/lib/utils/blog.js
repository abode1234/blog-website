// Utility functions for handling blog posts

/**
 * Get all blog posts sorted by date
 * @returns {Promise<Array<{slug: string, title: string, date: string, description?: string, tags?: string[], content: any}>>} Array of blog posts
 */
export async function getAllPosts() {
  const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });
  
  return Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      return {
        slug,
        title: post.metadata?.title || 'Untitled Post',
        date: post.metadata?.date || new Date().toISOString().split('T')[0],
        description: post.metadata?.excerpt || post.metadata?.description,
        tags: post.metadata?.tags || [],
        content: post.default
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The post slug
 * @returns {Promise<{slug: string, title: string, date: string, description?: string, tags?: string[], content: any} | undefined>} The post object
 */
export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}
