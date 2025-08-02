# 🚀 Deployment Guide - Vercel

This guide will help you deploy your portfolio website to Vercel.

## ✅ Pre-deployment Checklist

- [x] **Vercel Adapter**: Configured to use `@sveltejs/adapter-vercel`
- [x] **TOML Files**: Copied to `static/` directory for production access
- [x] **Build Test**: Successfully builds with `pnpm build`
- [x] **Configuration**: All configuration files (`vercel.json`, `svelte.config.js`) ready

## 🛠️ Deployment Steps

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N` (for first deployment)
   - What's your project's name? `abdul-almotaleb-portfolio` (or your choice)
   - In which directory is your code located? `./`

### Method 2: GitHub Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings (usually auto-detected)
   - Click "Deploy"

## ⚙️ Vercel Configuration

The project includes:

- **`vercel.json`**: Handles routing and function configuration
- **`@sveltejs/adapter-vercel`**: Optimized for Vercel's platform
- **Static Assets**: TOML files accessible in production

## 🔧 Environment Variables

No environment variables are required for basic deployment. All configuration is handled through TOML files.

## 📝 Customization After Deployment

To update your content:

1. **Edit configuration files**:
   - `site.toml` - Site info, skills, social links
   - `projects.toml` - Your projects

2. **Add blog posts**:
   - Create `.md` files in `src/content/blog/`

3. **Redeploy**:
   - Vercel will auto-deploy on git push (if using GitHub integration)
   - Or run `vercel --prod` for manual deployment

## 🌐 Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## 🎯 Production URLs

After deployment, you'll get:
- **Preview URL**: `https://your-project-name.vercel.app`
- **Production URL**: `https://your-custom-domain.com` (if configured)

## 🐛 Troubleshooting

### Common Issues:

1. **TOML files not found**
   - Ensure files are in `static/` directory
   - Check file paths in server load functions

2. **Build failures**
   - Run `pnpm build` locally first
   - Check all imports and dependencies

3. **404 errors on routes**
   - Ensure `vercel.json` rewrites are configured
   - Check SvelteKit routing setup

### Support

- [Vercel Documentation](https://vercel.com/docs)
- [SvelteKit Vercel Adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-vercel)

---

Your portfolio is now ready for professional deployment! 🎉 