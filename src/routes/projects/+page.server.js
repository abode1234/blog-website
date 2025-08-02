import TOML from 'toml';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export async function load() {
    try {
        // Read site.toml
        const siteTomlPath = resolve('site.toml');
        const siteTomlContent = readFileSync(siteTomlPath, 'utf-8');
        const siteData = TOML.parse(siteTomlContent);
        
        // Read projects.toml
        const projectsTomlPath = resolve('projects.toml');
        const projectsTomlContent = readFileSync(projectsTomlPath, 'utf-8');
        const projectsData = TOML.parse(projectsTomlContent);
        
        return {
            siteConfig: siteData.site || { title: 'Abdul-Almotaleb', tagline: 'Network Engineer' },
            ownerConfig: siteData.owner || { name: 'Abdul-Almotaleb', profession: 'Network Engineer' },
            projects: projectsData.projects || []
        };
    } catch (error) {
        console.error('Error loading configuration:', error);
        return {
            siteConfig: { title: 'Abdul-Almotaleb', tagline: 'Network Engineer' },
            ownerConfig: { name: 'Abdul-Almotaleb', profession: 'Network Engineer' },
            projects: []
        };
    }
} 