import { siteConfig, ownerConfig, projectsConfig } from '$lib/site-config.js';

export async function load() {
    return {
        siteConfig,
        ownerConfig,
        projects: projectsConfig
    };
} 