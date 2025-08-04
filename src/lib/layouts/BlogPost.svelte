<script>
  // This is a layout component for blog posts written in Markdown
  let { children } = $props();
</script>

<div class="blog-post-content">
  {@render children()}
</div>

<style>
  .blog-post-content {
    @apply text-gray-300 leading-relaxed;
  }

  .blog-post-content :global(h1) {
    @apply text-2xl md:text-3xl font-bold text-white mb-6 mt-8 first:mt-0;
  }

  .blog-post-content :global(h2) {
    @apply text-xl md:text-2xl font-semibold text-white mb-4 mt-6;
  }

  .blog-post-content :global(h3) {
    @apply text-lg md:text-xl font-semibold text-white mb-3 mt-5;
  }

  .blog-post-content :global(h4) {
    @apply text-base md:text-lg font-semibold text-white mb-3 mt-4;
  }

  .blog-post-content :global(h5) {
    @apply text-sm md:text-base font-semibold text-white mb-2 mt-3;
  }

  .blog-post-content :global(h6) {
    @apply text-sm font-semibold text-white mb-2 mt-3;
  }

  .blog-post-content :global(p) {
    @apply text-gray-300 mb-4 leading-relaxed;
  }

  .blog-post-content :global(ul),
  .blog-post-content :global(ol) {
    @apply text-gray-300 mb-4 pl-6 space-y-2;
  }

  .blog-post-content :global(li) {
    @apply leading-relaxed;
  }

  .blog-post-content :global(ul li) {
    @apply list-disc;
  }

  .blog-post-content :global(ol li) {
    @apply list-decimal;
  }

  .blog-post-content :global(code) {
    @apply bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono;
  }

  .blog-post-content :global(pre) {
    @apply bg-gray-900 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700;
  }

  .blog-post-content :global(pre code) {
    @apply bg-transparent text-gray-300 px-0 py-0;
  }

  .blog-post-content :global(blockquote) {
    @apply border-l-4 border-blue-500 pl-4 py-2 mb-4 text-gray-300 italic bg-gray-800 bg-opacity-30 rounded-r;
  }

  .blog-post-content :global(a) {
    @apply text-blue-400 hover:text-blue-300 underline transition-colors;
  }

  .blog-post-content :global(strong) {
    @apply text-white font-semibold;
  }

  .blog-post-content :global(em) {
    @apply text-gray-200 italic;
  }

  .blog-post-content :global(table) {
    @apply w-full border-collapse border border-gray-600 mb-4;
  }

  .blog-post-content :global(th),
  .blog-post-content :global(td) {
    @apply border border-gray-600 px-4 py-2 text-left;
  }

  .blog-post-content :global(th) {
    @apply bg-gray-800 font-semibold text-white;
  }

  .blog-post-content :global(td) {
    @apply text-gray-300;
  }

  .blog-post-content :global(img) {
    @apply max-w-full h-auto rounded-lg shadow-md mb-4;
  }

  .blog-post-content :global(hr) {
    @apply border-gray-600 my-8;
  }
</style>
