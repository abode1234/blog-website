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
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <article>
      <!-- Back to Blog Navigation -->
      <div class="mb-8">
        <a href="/blog" class="inline-flex items-center text-primary hover:underline mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Back to Blog
        </a>
      </div>

      <!-- Article Header -->
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {data.post.title}
        </h1>
        
        <div class="flex flex-wrap items-center text-gray-400 text-sm md:text-base">
          <time datetime={data.post.date} class="block mb-2 md:mb-0">
            {new Date(data.post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          {#if data.post.tags && data.post.tags.length > 0}
            <span class="hidden md:inline mx-3">•</span>
            <div class="flex flex-wrap gap-2">
              {#each data.post.tags as tag}
                <span class="text-gray-200 rounded-full px-3 py-1 text-sm font-medium" 
                      style="background: linear-gradient(145deg, #0D1117 0%, #161B22 100%); border: 1px solid #30363D;">
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </header>
      
      <!-- Article Content -->
      <div class="rounded-lg shadow-lg p-6 md:p-8 lg:p-10" 
           style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
        <div class="blog-content">
          {#if data.post.content}
            {#if typeof data.post.content === 'function' || (typeof data.post.content === 'object' && data.post.content.render)}
              <svelte:component this={data.post.content} />
            {:else if typeof data.post.content === 'string'}
              {@html data.post.content}
            {:else}
              <p class="text-gray-300 text-center py-8">Unable to render post content. Format not recognized.</p>
            {/if}
          {:else}
            <p class="text-gray-300 text-center py-8">Post content is empty.</p>
          {/if}
        </div>
      </div>

      <!-- Article Footer -->
      <footer class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            <p>Published by <span class="text-white font-medium">Abdul Al-Motaleb</span></p>
          </div>
          <a href="/blog" class="btn btn-primary">
            Back to All Posts
          </a>
        </div>
      </footer>
    </article>
  </div>
{:else}
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg shadow-md p-8 text-center" 
         style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
      <h1 class="text-2xl md:text-3xl font-bold mb-4 text-white">Post Not Found</h1>
      <p class="text-gray-400 mb-8 text-lg">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <a href="/blog" class="btn btn-primary">
        Back to Blog
      </a>
    </div>
  </div>
{/if}

<style>
  .blog-content {
    @apply text-gray-300 leading-relaxed;
  }

  .blog-content :global(h1) {
    @apply text-2xl md:text-3xl font-bold text-white mb-6 mt-8 first:mt-0;
  }

  .blog-content :global(h2) {
    @apply text-xl md:text-2xl font-semibold text-white mb-4 mt-6;
  }

  .blog-content :global(h3) {
    @apply text-lg md:text-xl font-semibold text-white mb-3 mt-5;
  }

  .blog-content :global(h4) {
    @apply text-base md:text-lg font-semibold text-white mb-3 mt-4;
  }

  .blog-content :global(p) {
    @apply text-gray-300 mb-4 leading-relaxed text-base md:text-lg;
  }

  .blog-content :global(ul),
  .blog-content :global(ol) {
    @apply text-gray-300 mb-4 pl-6 space-y-2;
  }

  .blog-content :global(li) {
    @apply text-base md:text-lg leading-relaxed;
  }

  .blog-content :global(ul li) {
    @apply list-disc;
  }

  .blog-content :global(ol li) {
    @apply list-decimal;
  }

  .blog-content :global(code) {
    @apply bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono;
  }

  .blog-content :global(pre) {
    @apply bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700;
  }

  .blog-content :global(pre code) {
    @apply bg-transparent text-gray-300 px-0 py-0;
  }

  .blog-content :global(blockquote) {
    @apply border-l-4 border-blue-500 pl-4 py-2 mb-4 text-gray-300 italic bg-gray-800 bg-opacity-30 rounded-r;
  }

  .blog-content :global(a) {
    @apply text-blue-400 hover:text-blue-300 underline transition-colors;
  }

  .blog-content :global(strong) {
    @apply text-white font-semibold;
  }

  .blog-content :global(em) {
    @apply text-gray-200 italic;
  }

  .blog-content :global(table) {
    @apply w-full border-collapse border border-gray-600 mb-4;
  }

  .blog-content :global(th),
  .blog-content :global(td) {
    @apply border border-gray-600 px-4 py-2 text-left;
  }

  .blog-content :global(th) {
    @apply bg-gray-800 font-semibold text-white;
  }

  .blog-content :global(td) {
    @apply text-gray-300;
  }

  .blog-content :global(img) {
    @apply max-w-full h-auto rounded-lg shadow-md mb-4;
  }

  .blog-content :global(hr) {
    @apply border-gray-600 my-8;
  }
</style>
