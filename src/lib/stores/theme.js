import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Check if we're in the browser and get the saved theme or use system preference
const getInitialTheme = () => {
  if (browser) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light'; // Default for SSR
};

export const theme = writable(getInitialTheme());

// Update the DOM when the theme changes
export function toggleTheme() {
  theme.update(currentTheme => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (browser) {
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    return newTheme;
  });
}

// Initialize theme on page load
export function initTheme() {
  if (browser) {
    theme.subscribe(value => {
      if (value === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }
}
