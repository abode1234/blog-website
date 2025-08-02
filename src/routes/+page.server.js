import TOML from 'toml';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { dev } from '$app/environment';

export async function load() {
    try {
        // In production, read from static directory, in dev from root
        const siteTomlPath = dev ? resolve('site.toml') : join(process.cwd(), 'static', 'site.toml');
        
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