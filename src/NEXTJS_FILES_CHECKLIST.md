# Next.js Implementation Checklist

## Files to Copy to Your Next.js Project

### ✅ Core Files

- [ ] `/nextjs/page.tsx` → Copy to `app/page.tsx`
- [ ] `/nextjs/layout.tsx` → Copy to `app/layout.tsx`
- [ ] `/nextjs/globals.css` → Copy to `app/globals.css`

### ✅ Components

- [ ] `/nextjs/components/Header.tsx` → Copy to `components/Header.tsx`
- [ ] `/nextjs/components/Hero.tsx` → Copy to `components/Hero.tsx`
- [ ] `/nextjs/components/About.tsx` → Copy to `components/About.tsx`
- [ ] `/nextjs/components/Skills.tsx` → Copy to `components/Skills.tsx`
- [ ] `/nextjs/components/Projects.tsx` → Copy to `components/Projects.tsx`
- [ ] `/nextjs/components/Contact.tsx` → Copy to `components/Contact.tsx`
- [ ] `/nextjs/components/Footer.tsx` → Copy to `components/Footer.tsx`

### ✅ Utilities

- [ ] `/nextjs/lib/utils.ts` → Copy to `lib/utils.ts`

### ✅ UI Components (Install via shadcn/ui)

You need these shadcn/ui components. Install them with:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
```

These will be created in `components/ui/`:
- [ ] `components/ui/button.tsx`
- [ ] `components/ui/input.tsx`
- [ ] `components/ui/textarea.tsx`
- [ ] `components/ui/card.tsx`
- [ ] `components/ui/badge.tsx`

## Configuration Changes

### ✅ package.json

Add these dependencies:

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
```

### ✅ tsconfig.json

Add path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"]
    }
  }
}
```

### ✅ next.config.js or next.config.mjs

Add image domain configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig // or export default nextConfig for .mjs
```

## Customization Tasks

### ✅ Content Updates

- [ ] Update your name in `Hero.tsx` (currently "Audrey Poh")
- [ ] Update professional title in `Hero.tsx` (currently "Independent Financial Advisor")
- [ ] Update about text in `About.tsx`
- [ ] Update skills in `Skills.tsx`
- [ ] Update services in `Projects.tsx`
- [ ] Update contact information in `Contact.tsx` (email, phone, location)
- [ ] Update social media links in `Hero.tsx` and `Footer.tsx`
- [ ] Update metadata in `layout.tsx` (title, description, keywords)

### ✅ Images (Optional)

- [ ] Replace Unsplash images with your own professional photos
- [ ] Add your logo/brand images if applicable
- [ ] Add favicon to `app/` directory

### ✅ Form Functionality (Optional)

- [ ] Implement real form submission in `Contact.tsx`
- [ ] Set up email service (Formspree, EmailJS, or API routes)
- [ ] Add form validation if needed

### ✅ SEO (Optional but Recommended)

- [ ] Add `robots.txt` to `public/`
- [ ] Add `sitemap.xml` to `app/`
- [ ] Add Open Graph image
- [ ] Add analytics (Google Analytics, Vercel Analytics, etc.)

## Testing Checklist

Before deploying, test:

- [ ] All sections scroll smoothly
- [ ] Mobile menu works correctly
- [ ] Contact form submits properly
- [ ] All images load correctly
- [ ] Links work (social media, email, etc.)
- [ ] Animations work smoothly
- [ ] Responsive design on mobile, tablet, desktop
- [ ] Fast loading times
- [ ] No console errors

## Deployment Checklist

- [ ] Build succeeds without errors: `npm run build`
- [ ] Test production build locally: `npm start`
- [ ] Environment variables set (if any)
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Connect domain (if applicable)
- [ ] Set up SSL certificate (usually automatic)
- [ ] Test deployed site thoroughly

## Summary

**Total files to copy**: 11 files
**Dependencies to install**: 7 packages
**Config files to update**: 2-3 files

**Estimated time**: 30-45 minutes for basic setup
**With customization**: 2-3 hours

---

## Quick Start Commands

```bash
# 1. Create new Next.js project (if needed)
npx create-next-app@latest my-portfolio
cd my-portfolio

# 2. Install dependencies
npm install motion lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label

# 3. Install shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea card badge

# 4. Copy all files from /nextjs/ to your project

# 5. Update tsconfig.json and next.config.js

# 6. Customize content to match your information

# 7. Run development server
npm run dev

# 8. Build and deploy
npm run build
npm start
```

---

Good luck with your portfolio website! 🚀
