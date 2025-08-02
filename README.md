# Portfolio Website

A modern, customizable portfolio website built with SvelteKit, designed specifically for network engineers and cybersecurity professionals.

## 🚀 Features

- **Flutter-inspired Dark Theme**: Beautiful gradient backgrounds and modern styling
- **TOML Configuration**: Easy customization through `site.toml` and `projects.toml` files
- **Responsive Design**: Mobile-first approach with smooth animations
- **Blog System**: Markdown-based blog with syntax highlighting
- **Project Showcase**: Portfolio section with filtering capabilities from TOML config
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **SvelteKit**: Modern full-stack framework
- **TOML**: Configuration file format
- **CSS**: Custom styling with Flutter-inspired design
- **Markdown**: Blog content with mdsvex

## 📋 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-website
   ```

2. **Install dependencies**
```bash
pnpm install
```

3. **Customize your site**
   Edit the `site.toml` file to customize your portfolio:
   ```toml
   [site]
   title = "Your Name"
   tagline = "Your Professional Title"
   description = "Your site description"
   
   [owner]
   name = "Your Name"
   profession = "Your Profession"
   bio = "Your professional bio..."
   ```

4. **Add your projects**
   Edit the `projects.toml` file to add your projects:
   ```toml
   [[projects]]
   name = "Project Name"
   description = "Project description"
   category = "Category"
   icon = "🚀"
   link = "https://github.com/yourusername/project"
   technologies = ["Tech1", "Tech2"]
   highlights = ["Feature 1", "Feature 2"]
   ```

5. **Add blog posts**
   Create `.md` files in `src/content/blog/` with frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2024-01-01
   description: "Post description"
   tags: ["networking", "security"]
   ---
   
   Your content here...
   ```

6. **Run development server**
   ```bash
   pnpm dev
   ```

7. **Build for production**
```bash
   pnpm build
   ```

## 🔧 Configuration Files

### `site.toml` - Main Site Configuration

The `site.toml` file controls all aspects of your personal information and site settings:

#### Site Information
```toml
[site]
title = "Your Name"
tagline = "Your Professional Title"
description = "Site description for SEO"
domain = "your-domain.com"
language = "en"
copyright_year = 2024
```

#### Personal Information
```toml
[owner]
name = "Your Name"
full_name = "Your Full Name"
profession = "Your Profession"
bio = """
Your professional biography.
Multiple lines are supported.
"""
location = "Your Location"
email = "your-email@example.com"
```

#### Social Links
```toml
[social]
github = "https://github.com/yourusername"
linkedin = "https://linkedin.com/in/yourprofile"
twitter = "https://x.com/yourusername"
website = "https://your-website.com"
```

#### Skills & Certifications
```toml
[skills]
networking = [
    { name = "CCNA", level = "Certified", icon = "🌐" },
    { name = "Network Security", level = "Advanced", icon = "🔒" }
]

technical = [
    { name = "Cisco IOS", level = "Advanced", icon = "⚙️" },
    { name = "pfSense", level = "Advanced", icon = "🔥" }
]

certifications = [
    { name = "CCNA", description = "Cisco Certified Network Associate", icon = "🏆" }
]
```

### `projects.toml` - Projects Configuration

The `projects.toml` file contains all your project information:

```toml
[[projects]]
name = "Project Name"
description = "Detailed project description"
category = "Network Security"  # Used for filtering
icon = "🔍"  # Emoji or icon
link = "https://github.com/yourusername/project"  # External link
technologies = ["Python", "Wireshark", "Network Analysis"]
highlights = [
    "Key feature or achievement 1",
    "Key feature or achievement 2",
    "Key feature or achievement 3"
]

[[projects]]
name = "Another Project"
# ... more projects
```

#### Project Categories
Projects are automatically grouped by category. Common categories:
- Network Security
- Network Engineering
- Penetration Testing
- Security Tools
- Bug Bounty

## 📝 Adding Content

### Blog Posts
1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter at the top:
```markdown
---
   title: "Your Post Title"
   date: 2024-01-01
   description: "Brief description for SEO and preview"
   tags: ["networking", "security", "tutorial"]
   ---
   ```
3. Write your content in Markdown below the frontmatter
4. The blog system will automatically detect and display your posts

### Projects
1. Open `projects.toml`
2. Add a new `[[projects]]` entry
3. Fill in all the required fields:
   - `name`: Project title
   - `description`: Detailed description
   - `category`: For filtering (use existing categories or create new ones)
   - `icon`: Emoji or icon to display
   - `link`: URL to project (GitHub, demo, etc.)
   - `technologies`: Array of technologies used
   - `highlights`: Key features or achievements

### Skills & Certifications
1. Open `site.toml`
2. Edit the `[skills]` section:
   - `networking`: Network engineering and security skills
   - `technical`: Technical tools and technologies  
   - `certifications`: Professional certifications

## 🎨 Customization

### Colors
The site uses a Flutter-inspired color scheme that can be customized in `site.toml`:
```toml
[theme]
primary_color = "#13B9FD"
secondary_color = "#0175C2"
dark_background = "#0D1117"
card_background = "linear-gradient(145deg, #1C2128 0%, #22272E 100%)"
border_color = "#30363D"
```

### Navigation & Features
```toml
[navigation]
show_home = true
show_projects = true
show_blog = true
show_contact = false

[features]
show_skills = true
show_certifications = true
show_projects = true
show_blog = true
show_social_links = true
enable_dark_mode = true
enable_animations = true
```

## 🚀 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `pnpm build`
4. Set publish directory: `build`
5. Deploy!

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings
4. Deploy!

### Self-hosted
1. Run `pnpm build`
2. Upload the `build` folder to your server
3. Configure your web server to serve the files

## 🔧 Development

### Project Structure
```
src/
├── app.css                 # Global styles
├── app.html               # HTML template
├── lib/
│   ├── components/        # Reusable components
│   ├── config.js          # TOML configuration loader
│   ├── layouts/           # Layout components
│   └── utils/             # Utility functions
├── routes/                # SvelteKit routes
│   ├── +layout.svelte     # Main layout
│   ├── +page.svelte       # Homepage
│   ├── blog/              # Blog pages
│   └── projects/          # Projects page
└── content/
    └── blog/              # Blog post markdown files

# Configuration Files
site.toml                  # Main site configuration
projects.toml              # Projects configuration
```

### Key Features

1. **Dual TOML Configuration System**: 
   - `site.toml`: Personal info, skills, social links, theme
   - `projects.toml`: All project information with links
2. **Automatic Content Loading**: Blog posts and projects load automatically
3. **Responsive Design**: Mobile-first design with smooth animations
4. **Dark Theme**: Flutter-inspired dark theme with gradients
5. **SEO Optimization**: Meta tags and structured data

## 💡 Usage Tips

1. **Easy Rebranding**: Just edit the TOML files to rebrand for any profession
2. **Project Links**: Each project can have its own external link (GitHub, demo, etc.)
3. **Category Filtering**: Projects are automatically filtered by category
4. **Markdown Support**: Full markdown support for blog posts with syntax highlighting
5. **Responsive Cards**: All cards adapt beautifully to different screen sizes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

If you have any questions or need help customizing your portfolio, please open an issue.

---

**Perfect for**: Network Engineers, Cybersecurity Professionals, IT Specialists, and Technical Professionals looking for a modern, easily customizable portfolio website with proper project showcase and blog capabilities.
