<script>
    import { getSiteConfig, getOwnerConfig, getProjectsConfig } from '$lib/config.js';
    
    // Load configuration from TOML files
    const siteConfig = getSiteConfig();
    const ownerConfig = getOwnerConfig();
    const projects = getProjectsConfig();

    const categories = [...new Set(projects.map(p => p.category))];
    let selectedCategory = $state('All');

    const filteredProjects = $derived(
        selectedCategory === 'All' 
            ? projects 
            : projects.filter(p => p.category === selectedCategory)
    );
</script>

<svelte:head>
    <title>Projects | {ownerConfig.name} - {ownerConfig.profession}</title>
    <meta
        name="description"
        content="Portfolio of {ownerConfig.profession} projects showcasing expertise in network engineering and cybersecurity."
    />
</svelte:head>

<section class="mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 text-white">My Projects</h1>
    
    <div class="rounded-lg shadow-md p-6 mb-8" style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
        <p class="text-gray-300 text-lg">
            Here are some of the key projects I've worked on in network engineering, cybersecurity, 
            and penetration testing. Each project demonstrates my practical application of technical skills 
            and professional expertise.
        </p>
    </div>
</section>

<section class="mb-8">
    <h2 class="text-2xl font-semibold mb-6 text-white">Filter by Category</h2>
    
    <div class="flex flex-wrap gap-3 mb-8">
        <button
            class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600'}"
            style="{selectedCategory === 'All' ? 'background: linear-gradient(135deg, #0175C2 0%, #13B9FD 100%); box-shadow: 0 4px 15px rgba(19, 185, 253, 0.3);' : 'background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;'}"
            onclick={() => selectedCategory = 'All'}
        >
            All Projects
        </button>
        {#each categories as category}
            <button
                class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === category ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-600'}"
                style="{selectedCategory === category ? 'background: linear-gradient(135deg, #0175C2 0%, #13B9FD 100%); box-shadow: 0 4px 15px rgba(19, 185, 253, 0.3);' : 'background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;'}"
                onclick={() => selectedCategory = category}
            >
                {category}
            </button>
        {/each}
    </div>
</section>

<section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project}
            <div class="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
                <div class="flex items-center mb-4">
                    <span class="text-3xl mr-3">{project.icon}</span>
                    <div>
                        <h3 class="text-xl font-semibold text-white">{project.name}</h3>
                        <span class="text-sm text-blue-400 font-medium">{project.category}</span>
                    </div>
                </div>
                
                <p class="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                </p>
                
                <div class="mb-4">
                    <h4 class="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                    <ul class="text-sm text-gray-300 space-y-1">
                        {#each project.highlights as highlight}
                            <li class="flex items-start">
                                <span class="text-green-400 mr-2">•</span>
                                {highlight}
                            </li>
                        {/each}
                    </ul>
                </div>
                
                <div class="border-t pt-4 mb-4" style="border-color: #30363D;">
                    <h4 class="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div class="flex flex-wrap gap-2">
                        {#each project.technologies as tech}
                            <span class="px-2 py-1 text-gray-200 text-xs rounded-md" style="background: linear-gradient(145deg, #0D1117 0%, #161B22 100%); border: 1px solid #30363D;">
                                {tech}
                            </span>
                        {/each}
                    </div>
                </div>

                {#if project.link}
                    <div class="mt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary inline-flex items-center text-sm"
                        >
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                            </svg>
                        </a>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</section>

<section class="mt-12">
    <div class="rounded-lg shadow-md p-6" style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;">
        <h2 class="text-2xl font-semibold mb-4 text-white">Get In Touch</h2>
        <p class="text-gray-300 mb-4">
            Interested in collaborating on network security projects or discussing cybersecurity challenges? 
            I'm always open to new opportunities and conversations.
        </p>
        <div class="flex flex-col md:flex-row gap-4">
            <a
                href="/blog"
                class="btn btn-primary inline-flex items-center"
            >
                Read My Blog
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            <a
                href="https://linkedin.com/in/abdulalmotaleb-alfasial-48392723a"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary inline-flex items-center"
            >
                Connect on LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                </svg>
            </a>
        </div>
    </div>
</section> 