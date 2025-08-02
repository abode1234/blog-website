import TOML from 'toml';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { dev } from '$app/environment';

export async function load() {
    try {
        // In production, read from static directory, in dev from root
        const siteTomlPath = dev ? resolve('site.toml') : join(process.cwd(), 'static', 'site.toml');
        const projectsTomlPath = dev ? resolve('projects.toml') : join(process.cwd(), 'static', 'projects.toml');
        
        const siteTomlContent = readFileSync(siteTomlPath, 'utf-8');
        const siteData = TOML.parse(siteTomlContent);
        
        const projectsTomlContent = readFileSync(projectsTomlPath, 'utf-8');
        const projectsData = TOML.parse(projectsTomlContent);
        
        return {
            siteConfig: siteData.site || { title: 'Abdul-Almotaleb', tagline: 'AI Engineer & Backend Developer' },
            ownerConfig: siteData.owner || { name: 'Abdul-Almotaleb', profession: 'AI Engineer & Backend Developer' },
            projects: projectsData.projects || []
        };
    } catch (error) {
        console.error('Error loading configuration:', error);
        return {
            siteConfig: { title: 'Abdul-Almotaleb', tagline: 'AI Engineer & Backend Developer' },
            ownerConfig: { name: 'Abdul-Almotaleb', profession: 'AI Engineer & Backend Developer' },
            projects: []
        };
    }
} 