<script>
  import { getNavigationConfig } from '$lib/config.js';
  
  // Active route tracking
  let { path } = $props();
  
  // Load navigation configuration
  const navConfig = getNavigationConfig();
  
  // Build navigation links based on configuration
  /** @type {Array<{name: string, path: string}>} */
  const navLinks = [];
  if (navConfig.show_home) navLinks.push({ name: 'Home', path: '/' });
  if (navConfig.show_projects) navLinks.push({ name: 'Projects', path: '/projects' });
  if (navConfig.show_blog) navLinks.push({ name: 'Blog', path: '/blog' });
  if (navConfig.show_contact) navLinks.push({ name: 'Contact', path: '/contact' });

  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<header class="py-4 border-b" style="border-color: #30363D; background: rgba(13, 17, 23, 0.8); backdrop-filter: blur(10px);">
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
        class="md:hidden p-2 rounded-md transition-colors"
        style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
        aria-label="Toggle menu"
        onclick={toggleMobileMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            class="block py-2 px-3 rounded-md nav-link transition-colors {path === link.path ? 'text-primary' : ''}"
            style="{path === link.path ? 'background: linear-gradient(135deg, #0175C2 0%, #13B9FD 100%); color: white;' : 'background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;'}"
            onclick={() => mobileMenuOpen = false}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
