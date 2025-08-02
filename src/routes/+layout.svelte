<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	
	let { children } = $props();
	

	// Current path for active link highlighting
	let path = $derived($page.url.pathname);
	
	// Apply dark theme by default
	if (browser) {
		document.documentElement.classList.add('dark');
	}
</script>

<div class="flex flex-col min-h-screen dark">
	<Header path={path} />
	
	<main class="container-custom py-8 flex-grow">
		{@render children()}
	</main>
	
	<Footer />
</div>
