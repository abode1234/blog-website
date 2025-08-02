<script>
    import { getSiteConfig, getOwnerConfig, getSkillsConfig } from '$lib/config.js';
    
    // Load configuration from TOML file
    const siteConfig = getSiteConfig();
    const ownerConfig = getOwnerConfig();
    const skillsConfig = getSkillsConfig();
    
    // Extract skills from configuration
    const networkingSkills = skillsConfig.networking || [];
    const technicalSkills = skillsConfig.technical || [];
    const certifications = skillsConfig.certifications || [];
</script>

<svelte:head>
    <title>{siteConfig.title} | {ownerConfig.profession}</title>
    <meta
        name="description"
        content="{siteConfig.description}"
    />
</svelte:head>

<section class="mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-6 text-white">{siteConfig.tagline}</h1>

    <div
        class="rounded-lg shadow-md p-6 mb-8"
        style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
    >
        <h2 class="text-2xl font-semibold mb-4 text-white">About Me</h2>
        <div class="text-gray-300">
            {@html ownerConfig.bio.replace(/\n/g, '</p><p class="text-gray-300 mb-4">')}
        </div>
        <p class="text-gray-300">
            On this portfolio, I showcase my projects, share insights about network security, and demonstrate my expertise 
            in cybersecurity. Explore my work and join me in securing the digital world!
        </p>
    </div>
</section>

<section>
    <h2 class="text-2xl font-semibold mb-8 text-white">My Expertise</h2>

    <!-- Network Engineering & Security Skills -->
    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-5 text-white">
            Network Engineering & Security
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each networkingSkills as skill}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px] transition-shadow hover:shadow-lg"
                    style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{skill.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {skill.name}
                        </h4>
                        {#if skill.level}
                            <p class="text-sm text-gray-300">
                                {skill.level}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <br />

    <!-- Technical Skills -->
    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-5 text-white">
            Technical Skills & Tools
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            {#each technicalSkills as skill}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px] transition-shadow hover:shadow-lg"
                    style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{skill.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {skill.name}
                        </h4>
                        {#if skill.level}
                            <p class="text-sm text-gray-300">
                                {skill.level}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Certifications & Achievements -->
    <br />
    <div class="mb-10">
        <h3 class="text-xl font-semibold mb-5 text-white">
            Certifications & Achievements
        </h3>
        <br />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each certifications as cert}
                <div
                    class="rounded-lg shadow-md p-4 flex items-center min-h-[80px] transition-shadow hover:shadow-lg"
                    style="background: linear-gradient(145deg, #1C2128 0%, #22272E 100%); border: 1px solid #30363D;"
                >
                    <span class="text-3xl mr-4 w-8 text-center"
                        >{cert.icon}</span
                    >
                    <div>
                        <h4 class="font-medium text-lg text-white">
                            {cert.name}
                        </h4>
                        {#if cert.description}
                            <p class="text-sm text-gray-300">
                                {cert.description}
                            </p>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="mt-8 flex flex-col md:flex-row gap-4">
        <a
            href="/blog"
            class="btn btn-primary inline-flex items-center"
        >
            Explore My Blog
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </a>
        <a
            href="/projects"
            class="btn btn-primary inline-flex items-center"
        >
            View My Projects
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
            </svg>
        </a>
    </div>
</section>
