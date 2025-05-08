# Abdul-Almotaleb's Professional Blog

A professional static blog built with SvelteKit, featuring a clean design for a network engineer and web penetration tester.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Light and Dark Themes**: Toggle between light (white) and dark (navy blue) themes
- **Blog System**: Write posts in Markdown format
- **Professional Layout**: Clean design reflecting the professionalism of a network engineer and penetration tester

## Pages

- **Home**: About Me section and programming languages list
- **Blog**: Table of blog posts with titles and dates
- **Individual Blog Posts**: Generated from Markdown files

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- pnpm (or npm/yarn)

### Development

1. Clone this repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Writing Blog Posts

Blog posts are written in Markdown format and stored in the `src/content/blog` directory. Each post should include a frontmatter section with metadata:

```markdown
---
title: Your Post Title
date: YYYY-MM-DD
description: A brief description of your post
tags: ['tag1', 'tag2']
---

# Your Post Content

Write your post content here using Markdown.
```

## Building for Production

To create a production version of the blog:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Deployment

This blog is designed to be deployed to platforms like Netlify, Vercel, or GitHub Pages. When connected to a GitHub repository, it can be set up to automatically rebuild and deploy when changes are pushed.

## License

 Abdul-Almotaleb. All rights reserved.
