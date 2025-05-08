<script>
  
  // Active route tracking
  let { path } = $props();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' }
  ];

  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="py-4 border-b border-gray-200 dark:border-gray-800">
  <div class="container-custom flex justify-between items-center">
    <nav class="hidden md:flex space-x-6">
        {#each navLinks as link}
          <a 
            href={link.path} 
            class="nav-link font-medium {path === link.path ? 'text-primary' : ''}"
          >
            {link.name}
          </a>
        {/each}
      </nav>
    
    <div class="flex items-center space-x-6">
      <!-- Mobile menu button -->
      <button 
        type="button" 
        class="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle menu"
        onclick={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile menu (hidden by default) -->
  {#if mobileMenuOpen}
    <div class="md:hidden">
      <div class="container-custom py-3 space-y-1">
        {#each navLinks as link}
          <a 
            href={link.path} 
            class="block py-2 px-3 rounded-md nav-link {path === link.path ? 'bg-gray-100 dark:bg-gray-800 text-primary' : ''}"
            onclick={() => mobileMenuOpen = false}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
