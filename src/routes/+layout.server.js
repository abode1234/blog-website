import { 
    siteConfig, 
    ownerConfig, 
    socialConfig, 
    navigationConfig, 
    featuresConfig 
} from '$lib/site-config.js';

export async function load() {
    return {
        siteConfig,
        ownerConfig,
        socialConfig,
        navigationConfig,
        featuresConfig
    };
} 