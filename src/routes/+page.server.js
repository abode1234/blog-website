import { siteConfig, ownerConfig, skillsConfig } from '$lib/site-config.js';

export async function load() {
    return {
        siteConfig,
        ownerConfig,
        skillsConfig
    };
} 