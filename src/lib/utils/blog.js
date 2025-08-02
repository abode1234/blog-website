// Utility functions for handling blog posts

/**
 * Get all blog posts sorted by date
 * @returns {Promise<Array<{slug: string, title: string, date: string, description?: string, tags?: string[], content: any}>>} Array of blog posts
 */
export async function getAllPosts() {
  try {
    // Use eager loading for server-side processing
    const modules = import.meta.glob('/src/content/blog/*.md', { eager: true });
    const posts = [];
    
    for (const [path, module] of Object.entries(modules)) {
      try {
        /** @type {any} */
        const mod = module;
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
        // Extract metadata from the module
        const metadata = mod.metadata || {};
        
        posts.push({
        slug,
          title: metadata.title || 'Untitled Post',
          date: metadata.date || new Date().toISOString().split('T')[0],
          description: metadata.description || metadata.excerpt || '',
          tags: metadata.tags || [],
          content: mod.default
        });
      } catch (error) {
        console.error(`Error loading post ${path}:`, error);
      }
    }
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The post slug
 * @returns {Promise<{slug: string, title: string, date: string, description?: string, tags?: string[], content: any} | undefined>} The post object
 */
export async function getPostBySlug(slug) {
  try {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return undefined;
  }
}
