# 🚀 Deployment Checklist

Use this checklist to ensure your site is ready for deployment to Vercel.

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] Homepage displays correctly
- [ ] All 6 project pages are accessible
- [ ] Project titles and descriptions are accurate
- [ ] Navigation works (home ↔ projects)
- [ ] All links work correctly

### ✅ Media & Documentation
- [ ] Images are added to `/public` folder
- [ ] Images are optimized (compressed, reasonable file sizes)
- [ ] Videos are added or linked
- [ ] All media has descriptive captions
- [ ] Each piece of media includes what/how/why descriptions

### ✅ Technical Checks
- [ ] Site builds successfully (`npm run build`)
- [ ] No console errors in browser
- [ ] Site works on mobile (responsive design)
- [ ] All pages load without errors
- [ ] Images display correctly

### ✅ Git Repository
- [ ] Code is committed to git
- [ ] Repository is pushed to GitHub
- [ ] Repository is public (or accessible to Vercel)
- [ ] .gitignore is properly configured

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

#### Step 1: Prepare Repository
```bash
# If not already done:
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `creative-tech` repository
5. Vercel auto-detects Next.js settings ✅
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

#### Step 3: Verify Deployment
- [ ] Visit your deployment URL (e.g., `creative-tech.vercel.app`)
- [ ] Test all pages
- [ ] Check that images load
- [ ] Test navigation
- [ ] View on mobile device

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment

### ✅ Final Checks
- [ ] Homepage loads correctly
- [ ] All project pages are accessible
- [ ] Images display properly
- [ ] Videos play correctly
- [ ] Site is responsive on mobile
- [ ] No broken links
- [ ] Metadata is correct (title, description)

### ✅ Share Your Work
- [ ] Copy your Vercel URL
- [ ] Submit to your course
- [ ] Test the link in an incognito window
- [ ] Share with friends/classmates

## Updating Your Site

After initial deployment, updates are automatic:

```bash
# Make your changes
# Add/edit files as needed

# Commit and push
git add .
git commit -m "Update IDC1 documentation"
git push origin main

# Vercel automatically rebuilds and deploys! 🎉
```

## Common Issues & Solutions

### Issue: Build Fails
**Solution:** 
```bash
# Test build locally first
npm run build

# Fix any errors shown
# Then commit and push
```

### Issue: Images Don't Load
**Solution:**
- Check images are in `/public` folder
- Use paths like `/project-name/image.jpg` (not `public/...`)
- Ensure image files are committed to git

### Issue: 404 Error on Project Pages
**Solution:**
- Verify project IDs match in both `page.tsx` files
- Check spelling: `idc1-ideation`, `idc1-project`, etc.
- Rebuild and redeploy

### Issue: Styles Look Wrong
**Solution:**
- Clear browser cache
- Check Tailwind classes are correct
- Verify `globals.css` is imported in `layout.tsx`

## Vercel Dashboard Features

Once deployed, you can:
- **View Deployments**: See all deployment history
- **Preview Branches**: Auto-deploy preview for branches
- **Analytics**: View site traffic (if enabled)
- **Domains**: Add custom domain
- **Environment Variables**: Add if needed later

## Custom Domain (Optional)

To use your own domain:

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Add your domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take 24-48 hours)

## Performance Tips

- Optimize images before uploading (use TinyPNG, etc.)
- Keep videos under 50MB (or use YouTube/Vimeo)
- Use appropriate image formats (JPG for photos, PNG for graphics)
- Test on slow connections

## Maintenance

### Regular Updates
- Document projects as you complete them
- Add process photos throughout the semester
- Keep descriptions detailed and clear
- Update regularly (don't wait until the end!)

### Version Control
- Commit frequently with clear messages
- Use branches for major changes
- Keep main branch deployable

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support

## Final Pre-Deployment Command

Run this before deploying:

```bash
# Clean build
rm -rf .next
npm run build

# If successful, you're ready to deploy!
```

---

## 🎉 Ready to Deploy?

Once you've checked off all items above:

1. Push to GitHub
2. Import on Vercel
3. Share your link!

**Your deployment URL will be:**
`https://creative-tech-[random-id].vercel.app`

You can customize this in Vercel settings!

---

**Good luck with your Creative Tech projects! 🚀✨**
