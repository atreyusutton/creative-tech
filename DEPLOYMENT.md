# Deploying to Vercel

This guide will help you deploy your Creative Tech Portfolio to Vercel.

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit: Creative Tech Portfolio"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"

3. **Import Repository**:
   - Select your `creative-tech` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

4. **Done!** Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy every push to `main` branch to production
- Create preview deployments for pull requests
- Run builds and tests before deployment

## Environment Variables (If Needed Later)

If you add any environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy for changes to take effect

## Updating Your Site

Simply push changes to GitHub:
```bash
git add .
git commit -m "Update documentation"
git push origin main
```

Vercel will automatically rebuild and deploy your site!

## Troubleshooting

- **Build fails**: Check the build logs in Vercel dashboard
- **404 errors**: Ensure all routes are properly defined
- **Styling issues**: Clear cache and redeploy

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
