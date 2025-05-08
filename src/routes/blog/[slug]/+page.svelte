<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  {#if data.post}
    <title>{data.post.title} | Abdul-Almotaleb</title>
    <meta name="description" content={data.post.description || `Blog post about ${data.post.title}`} />
  {:else}
    <title>Post Not Found | Abdul-Almotaleb</title>
    <meta name="description" content="The blog post you are looking for could not be found." />
  {/if}
</svelte:head>

{#if data.post}
  <article class="max-w-6xl mx-auto">
    <div class="mb-8">
      <a href="/blog" class="inline-flex items-center text-primary hover:underline mb-4 text-gray-400  ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back to Blog
      </a>
      
        <h1 class="text-3xl md:text-4xl font-bold text-customTitle">{data.post.title}</h1>
      
      <div class="flex items-center text-gray-500 dark:text-gray-600 mt-4">

        <time datetime={data.post.date}>
          {new Date(data.post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        
        {#if data.post.tags && data.post.tags.length > 0}
          <span class="mx-2">•</span>
          <div class="flex flex-wrap gap-2">
            {#each data.post.tags as tag}
              <span class="bg-gray-100 dark:bg-gray-300 text-gray-800 dark:text-gray-500 rounded-full px-4 py-1 text-sm">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    
    <div class="rounded-lg shadow-md p-6 mb-8 svelte-content" style="background-color: #2F2A3E;">
      {#if data.post.content}
        {#if typeof data.post.content === 'function' || (typeof data.post.content === 'object' && data.post.content.render)}
          <svelte:component this={data.post.content} />
        {:else if typeof data.post.content === 'string'}
          {@html data.post.content}
        {:else}
          <p>Unable to render post content. Format not recognized.</p>
        {/if}
      {:else}
        <p>Post content is empty.</p>
      {/if}
    </div>
  </article>
{:else}
  <div class="rounded-lg shadow-md p-6 text-center" style="background-color: #2F2A3E;">
    <h1 class="text-2xl font-bold mb-4">Post Not Found</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-6">
      The blog post you're looking for doesn't exist or has been removed.
    </p>
    <a href="/blog" class="btn btn-primary">
      Back to Blog
    </a>
  </div>
{/if}
