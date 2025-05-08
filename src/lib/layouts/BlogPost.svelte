<script>
  // This is a layout component for blog posts written in Markdown
  let { children } = $props();
</script>

<div class="prose prose-lg dark:prose-invert max-w-none">
  {@render children()}
</div>
