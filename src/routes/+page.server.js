import TOML from 'toml';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export async function load() {
    try {
        // Read site.toml
        const siteTomlPath = resolve('site.toml');
        const siteTomlContent = readFileSync(siteTomlPath, 'utf-8');
        const siteData = TOML.parse(siteTomlContent);
        
        return {
            siteConfig: siteData.site || {},
            ownerConfig: siteData.owner || {},
            skillsConfig: siteData.skills || {}
        };
    } catch (error) {
        console.error('Error loading configuration:', error);
        return {
            siteConfig: {},
            ownerConfig: {},
            skillsConfig: {}
        };
    }
} 