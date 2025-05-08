<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} - {$page.error?.message || 'Error'} | Abdul-Almotaleb</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-12 text-center">
  <h1 class="text-6xl font-bold mb-4">{$page.status}</h1>
  
  <div class="mb-8">
    {#if $page.status === 404}
      <h2 class="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
    {:else}
      <h2 class="text-2xl font-semibold mb-4">{$page.error?.message || 'Something went wrong'}</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        We're sorry, but something went wrong. Please try again later.
      </p>
    {/if}
  </div>
  
  <a href="/" class="btn btn-primary">
    Back to Home
  </a>
</div>
