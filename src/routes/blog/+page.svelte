<script>
  import { getAllPosts } from '$lib/utils/blog.js';
  
  /** @type {Array<{slug: string, title: string, date: string, description?: string, tags?: string[]}>} */
  let posts = $state([]);
  
  $effect(() => {
    const loadPosts = async () => {
      posts = await getAllPosts();
    };
    
    loadPosts();
  });
</script>

<svelte:head>
  <title>Blog | Abdul-Almotaleb</title>
  <meta name="description" content="Blog posts about network security, penetration testing, and web security." />
</svelte:head>

<h1 class="text-3xl md:text-4xl font-bold mb-8">Blog</h1>

{#if posts.length === 0}
  <div class="rounded-lg shadow-md p-6 text-center" style="background-color: #2F2A3E;">
    <p class="text-gray-300">Loading posts...</p>
  </div>
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each posts as post (post.slug)}
      <div
        class="rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
        style="background-color: #2F2A3E;"
      >
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-3 group text-white">
            <a href="/blog/{post.slug}" class="text-white hover:text-red-500 transition-colors duration-200">
              {post.title}
            </a>
          </h2>
          <p class="text-sm text-gray-400 mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          {#if post.description}
            <p class="text-gray-200 mb-4 text-base leading-relaxed">
              {post.description}
            </p>
          {/if}
          {#if post.tags && post.tags.length > 0}
            <div class="flex flex-wrap gap-2 mb-4">
              {#each post.tags as tag}
                <span class="bg-gray-700 dark:bg-gray-800 text-gray-300 dark:text-gray-400 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/each}
  </div>
{/if}

{#if posts.length === 0}
  <div class="mt-8">
    <p class="text-gray-400 dark:text-gray-600 italic">
      No blog posts found. Check back soon for new content!
    </p>
  </div>
{/if}
