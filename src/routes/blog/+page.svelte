<script>
  /** @type {import('./$types').PageData} */
  export let data;
  
  const posts = data.posts;
</script>

<svelte:head>
  <title>Blog | Abdul-Almotaleb</title>
  <meta name="description" content="Blog posts about AI, machine learning, backend development, cybersecurity, and innovative tech solutions." />
</svelte:head>

<h1 class="text-3xl md:text-4xl font-bold mb-8 text-white">Blog</h1>

{#if posts.length === 0}
  <div class="rounded-lg shadow-md p-6 text-center" style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
    <p class="text-gray-400">No blog posts found. Check back soon for new content!</p>
  </div>
{:else}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each posts as post (post.slug)}
      <div
        class="rounded-lg shadow-md hover:shadow-lg transition-shadow"
        style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
      >
        <div class="p-6">
          <h2 class="text-2xl font-semibold mb-3 group text-white">
            <a href="/blog/{post.slug}" class="text-white hover:text-primary transition-colors duration-200">
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
            <p class="text-gray-300 mb-4 text-base leading-relaxed">
              {post.description}
            </p>
          {/if}
          {#if post.tags && post.tags.length > 0}
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span class="px-3 py-1 text-xs font-medium text-gray-200 rounded-md" style="background: linear-gradient(145deg, #0D1117 0%, #161B22 100%); border: 1px solid #30363D;">
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
