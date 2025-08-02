import TOML from 'toml';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {any} */
let config = null;
/** @type {any} */
let projectsConfig = null;

/**
 * Load and parse the TOML configuration file
 * @returns {Object} Parsed configuration object
 */
export function loadConfig() {
  if (config) {
    return config;
  }

  try {
    // Path to the site.toml file in the project root
    const configPath = resolve(__dirname, '../../site.toml');
    const configContent = readFileSync(configPath, 'utf-8');
    config = TOML.parse(configContent);
    return config;
  } catch (error) {
    console.error('Error loading site configuration:', error);
    // Return default configuration if file is not found
    return getDefaultConfig();
  }
}

/**
 * Load and parse the projects TOML configuration file
 * @returns {Object} Parsed projects configuration object
 */
export function loadProjectsConfig() {
  if (projectsConfig) {
    return projectsConfig;
  }

  try {
    // Path to the projects.toml file in the project root
    const configPath = resolve(__dirname, '../../projects.toml');
    const configContent = readFileSync(configPath, 'utf-8');
    projectsConfig = TOML.parse(configContent);
    return projectsConfig;
  } catch (error) {
    console.error('Error loading projects configuration:', error);
    // Return default projects if file is not found
    return { projects: [] };
  }
}

/**
 * Get default configuration as fallback
 * @returns {Object} Default configuration object
 */
function getDefaultConfig() {
  return {
    site: {
      title: "Portfolio Website",
      tagline: "Professional Portfolio",
      description: "A professional portfolio website",
      domain: "localhost",
      language: "en",
      copyright_year: new Date().getFullYear()
    },
    owner: {
      name: "Your Name",
      full_name: "Your Full Name",
      profession: "Professional",
      bio: "Professional bio goes here.",
      location: "Location",
      email: "contact@example.com"
    },
    social: {
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
      blog: ""
    },
    skills: {
      networking: [],
      technical: [],
      certifications: []
    },
    theme: {
      primary_color: "#13B9FD",
      secondary_color: "#0175C2",
      dark_background: "#0D1117",
      card_background: "linear-gradient(145deg, #1C2128 0%, #22272E 100%)",
      border_color: "#30363D"
    },
    navigation: {
      show_home: true,
      show_projects: true,
      show_blog: true,
      show_contact: false
    },
    features: {
      show_skills: true,
      show_certifications: true,
      show_projects: true,
      show_blog: true,
      show_social_links: true,
      enable_dark_mode: true,
      enable_animations: true
    },
    seo: {
      keywords: "portfolio, professional",
      author: "Your Name",
      robots: "index, follow"
    },
    contact: {
      show_contact_form: false,
      email: "contact@example.com",
      phone: "",
      address: ""
    }
  };
}

/**
 * Get site configuration
 */
export const getSiteConfig = () => /** @type {any} */ (loadConfig()).site;

/**
 * Get owner configuration
 */
export const getOwnerConfig = () => /** @type {any} */ (loadConfig()).owner;

/**
 * Get social links configuration
 */
export const getSocialConfig = () => /** @type {any} */ (loadConfig()).social;

/**
 * Get skills configuration
 */
export const getSkillsConfig = () => /** @type {any} */ (loadConfig()).skills;

/**
 * Get theme configuration
 */
export const getThemeConfig = () => /** @type {any} */ (loadConfig()).theme;

/**
 * Get navigation configuration
 */
export const getNavigationConfig = () => /** @type {any} */ (loadConfig()).navigation;

/**
 * Get features configuration
 */
export const getFeaturesConfig = () => /** @type {any} */ (loadConfig()).features;

/**
 * Get SEO configuration
 */
export const getSEOConfig = () => /** @type {any} */ (loadConfig()).seo;

/**
 * Get contact configuration
 */
export const getContactConfig = () => /** @type {any} */ (loadConfig()).contact;

/**
 * Get projects configuration
 */
export const getProjectsConfig = () => /** @type {any} */ (loadProjectsConfig()).projects || []; 