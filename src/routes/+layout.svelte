<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ParticleBackground from '$lib/components/ParticleBackground.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	/** @type {import('./$types').LayoutData} */
	let { data, children } = $props();

	let path = $derived($page.url.pathname);

	if (browser) {
		document.documentElement.classList.add('dark');
	}
</script>

<!-- Particle Background for all pages -->
<ParticleBackground />

<div class="flex flex-col min-h-screen dark">
	<Header path={path} navigationConfig={data.navigationConfig} />

	<main class="container-custom py-8 flex-grow">
		{@render children()}
	</main>

	<Footer
		siteConfig={data.siteConfig}
		ownerConfig={data.ownerConfig}
		socialConfig={data.socialConfig}
		featuresConfig={data.featuresConfig}
	/>
</div>
