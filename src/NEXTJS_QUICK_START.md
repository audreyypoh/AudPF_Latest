# 🚀 Next.js Quick Start Guide

**Get your portfolio running in 15 minutes!**

## Prerequisites

- Node.js 18+ installed
- Basic command line knowledge
- Code editor (VS Code recommended)

## 5-Step Setup

### Step 1: Create Next.js Project (3 minutes)

```bash
npx create-next-app@latest my-portfolio
```

**Choose these options**:
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **No** (or Yes, both work)
- App Router: **Yes**
- Turbopack: **No** (optional)

```bash
cd my-portfolio
```

### Step 2: Install Dependencies (2 minutes)

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label
```

### Step 3: Install UI Components (2 minutes)

```bash
npx shadcn-ui@latest init
```

Accept defaults, then:

```bash
npx shadcn-ui@latest add button input textarea card badge
```

### Step 4: Copy Files (5 minutes)

Copy these files from the `/nextjs/` directory to your project:

**Core files:**
1. `/nextjs/page.tsx` → `app/page.tsx`
2. `/nextjs/layout.tsx` → `app/layout.tsx`
3. `/nextjs/globals.css` → `app/globals.css`
4. `/nextjs/lib/utils.ts` → `lib/utils.ts`

**Component files:**
5. `/nextjs/components/Header.tsx` → `components/Header.tsx`
6. `/nextjs/components/Hero.tsx` → `components/Hero.tsx`
7. `/nextjs/components/About.tsx` → `components/About.tsx`
8. `/nextjs/components/Skills.tsx` → `components/Skills.tsx`
9. `/nextjs/components/Projects.tsx` → `components/Projects.tsx`
10. `/nextjs/components/Contact.tsx` → `components/Contact.tsx`
11. `/nextjs/components/Footer.tsx` → `components/Footer.tsx`

### Step 5: Configure (3 minutes)

#### A. Update `tsconfig.json`

Add this to the `compilerOptions` section:

```json
{
  "compilerOptions": {
    // ... existing options ...
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"]
    }
  }
}
```

#### B. Update `next.config.js`

Replace the contents with:

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

module.exports = nextConfig
```

Or if you have `next.config.mjs`:

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

export default nextConfig
```

## 🎉 Launch!

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**That's it! Your portfolio is running!**

---

## Quick Customization (15 minutes)

Now personalize it:

### 1. Update Your Name

**File**: `components/Hero.tsx`

```typescript
// Change line 31
<span className="italic">Your Name</span>
```

### 2. Update Your Title

**File**: `components/Hero.tsx`

```typescript
// Change line 33-35
<p className="text-2xl md:text-3xl mb-8 opacity-75 italic">
  Your Professional Title
</p>
```

### 3. Update Contact Information

**File**: `components/Contact.tsx`

```typescript
// Change email (line 64)
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Change phone (line 75)
<a href="tel:+6512345678">
  +65 1234 5678
</a>
```

### 4. Update Social Links

**File**: `components/Hero.tsx` and `components/Footer.tsx`

```typescript
// Change these links (around line 63-70 in Hero.tsx)
<a href="https://github.com/yourusername" target="_blank">
<a href="https://linkedin.com/in/yourusername" target="_blank">
<a href="mailto:your.email@example.com">
```

### 5. Update Metadata

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description here...",
  // ... update other fields
};
```

---

## Testing Checklist

Before showing anyone:

- [ ] All sections visible and styled correctly
- [ ] Mobile menu works (click hamburger icon)
- [ ] Smooth scrolling between sections
- [ ] Contact form has your correct email
- [ ] Social links go to your profiles
- [ ] No console errors (F12 to check)

---

## Deploy to Vercel (5 minutes)

### Option 1: Using GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Option 2: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and your site will be live!

---

## Troubleshooting

### Issue: Import errors

**Fix**: Check that `tsconfig.json` has the `paths` configuration from Step 5.

### Issue: Images not loading

**Fix**: Verify `next.config.js` has the `remotePatterns` configuration from Step 5.

### Issue: Build errors

**Fix**: Make sure all dependencies are installed:

```bash
npm install
```

### Issue: UI components not found

**Fix**: Install shadcn components:

```bash
npx shadcn-ui@latest add button input textarea card badge
```

---

## What's Next?

- ✅ **Your portfolio is live!**
- 📝 **Customize content** (see detailed guides in other docs)
- 🖼️ **Replace images** with your own
- 📧 **Setup real form submission**
- 📊 **Add analytics**
- 🎨 **Tweak colors/styling** (optional)

---

## Need More Help?

Check these detailed guides:

- **NEXTJS_SETUP_GUIDE.md** - Detailed setup instructions
- **NEXTJS_README.md** - Complete customization guide
- **NEXTJS_FILES_CHECKLIST.md** - Detailed checklist
- **NEXTJS_DIRECTORY_STRUCTURE.md** - File organization guide

---

## Command Summary

```bash
# Create project
npx create-next-app@latest my-portfolio
cd my-portfolio

# Install dependencies
npm install motion lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label

# Install UI components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea card badge

# Copy all files from /nextjs/ directory
# Update tsconfig.json and next.config.js

# Run development server
npm run dev

# Build for production
npm run build

# Deploy
npx vercel
```

---

**Congratulations! 🎉 You now have a professional portfolio website!**
