# Next.js Directory Structure Guide

This document shows exactly where to place each file in your Next.js project.

## Complete Directory Structure

```
my-portfolio/                          # Your Next.js project root
│
├── app/                               # Next.js App Router directory
│   ├── page.tsx                       # ← Copy from /nextjs/page.tsx
│   ├── layout.tsx                     # ← Copy from /nextjs/layout.tsx
│   ├── globals.css                    # ← Copy from /nextjs/globals.css
│   └── favicon.ico                    # (Add your own)
│
├── components/                        # Components directory
│   ├── Header.tsx                     # ← Copy from /nextjs/components/Header.tsx
│   ├── Hero.tsx                       # ← Copy from /nextjs/components/Hero.tsx
│   ├── About.tsx                      # ← Copy from /nextjs/components/About.tsx
│   ├── Skills.tsx                     # ← Copy from /nextjs/components/Skills.tsx
│   ├── Projects.tsx                   # ← Copy from /nextjs/components/Projects.tsx
│   ├── Contact.tsx                    # ← Copy from /nextjs/components/Contact.tsx
│   ├── Footer.tsx                     # ← Copy from /nextjs/components/Footer.tsx
│   │
│   └── ui/                            # shadcn/ui components
│       ├── button.tsx                 # Install via: npx shadcn-ui@latest add button
│       ├── input.tsx                  # Install via: npx shadcn-ui@latest add input
│       ├── textarea.tsx               # Install via: npx shadcn-ui@latest add textarea
│       ├── card.tsx                   # Install via: npx shadcn-ui@latest add card
│       └── badge.tsx                  # Install via: npx shadcn-ui@latest add badge
│
├── lib/                               # Utility functions
│   └── utils.ts                       # ← Copy from /nextjs/lib/utils.ts
│
├── public/                            # Static assets
│   ├── images/                        # (Create this, add your images)
│   │   ├── service1.jpg               # (Optional: your images)
│   │   ├── service2.jpg
│   │   └── service3.jpg
│   ├── favicon.ico
│   └── robots.txt                     # (Optional: for SEO)
│
├── node_modules/                      # Installed packages (auto-generated)
│
├── .next/                             # Next.js build output (auto-generated)
│
├── .env.local                         # Environment variables (optional)
├── .gitignore                         # Git ignore file
├── next.config.js                     # Next.js configuration ← UPDATE THIS
├── package.json                       # Project dependencies
├── tsconfig.json                      # TypeScript configuration ← UPDATE THIS
├── tailwind.config.js                 # Tailwind configuration (optional)
├── postcss.config.js                  # PostCSS configuration
└── README.md                          # Project README
```

## Step-by-Step File Placement

### Step 1: App Directory Files

```bash
my-portfolio/app/
├── page.tsx        # Main page - Home route
├── layout.tsx      # Root layout wrapping all pages
└── globals.css     # Global styles and theme
```

**Action**: Copy these 3 files from `/nextjs/` to your `app/` directory.

### Step 2: Components Directory

```bash
my-portfolio/components/
├── Header.tsx      # Navigation header
├── Hero.tsx        # Hero/landing section
├── About.tsx       # About section
├── Skills.tsx      # Skills section
├── Projects.tsx    # Services/projects section
├── Contact.tsx     # Contact form section
└── Footer.tsx      # Footer section
```

**Action**: Copy these 7 files from `/nextjs/components/` to your `components/` directory.

### Step 3: UI Components Subdirectory

```bash
my-portfolio/components/ui/
├── button.tsx      # Button component (shadcn/ui)
├── input.tsx       # Input component (shadcn/ui)
├── textarea.tsx    # Textarea component (shadcn/ui)
├── card.tsx        # Card component (shadcn/ui)
└── badge.tsx       # Badge component (shadcn/ui)
```

**Action**: Install these using shadcn/ui CLI (they'll be auto-generated):
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea card badge
```

### Step 4: Lib Directory

```bash
my-portfolio/lib/
└── utils.ts        # Utility functions (cn helper)
```

**Action**: Copy this file from `/nextjs/lib/utils.ts` to your `lib/` directory.

### Step 5: Public Directory (Optional)

```bash
my-portfolio/public/
├── images/
│   ├── service1.jpg    # Your custom images
│   ├── service2.jpg
│   └── service3.jpg
├── favicon.ico         # Your favicon
└── robots.txt          # SEO configuration
```

**Action**: Add your own images here (optional - the site uses Unsplash by default).

## Configuration Files to Update

### 1. tsconfig.json

**Location**: `my-portfolio/tsconfig.json`

**Add these lines** to the `compilerOptions`:

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

### 2. next.config.js

**Location**: `my-portfolio/next.config.js`

**Replace with** or **add to** existing config:

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

### 3. package.json

**Location**: `my-portfolio/package.json`

**Install these dependencies**:

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
```

Your `package.json` should include:

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "motion": "*",
    "lucide-react": "*",
    "class-variance-authority": "*",
    "clsx": "*",
    "tailwind-merge": "*",
    "@radix-ui/react-slot": "*",
    "@radix-ui/react-label": "*"
  }
}
```

## Import Path Structure

With the `~/` alias configured, your imports will look like:

```typescript
// In app/page.tsx
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";

// In components/Header.tsx
import { Button } from "~/components/ui/button";

// In components/Projects.tsx
import Image from "next/image"; // Next.js built-in
import { Card, CardContent, CardHeader } from "~/components/ui/card";
```

## File Dependencies Diagram

```
app/page.tsx
├── components/Header.tsx
│   └── components/ui/button.tsx
├── components/Hero.tsx
│   └── components/ui/button.tsx
├── components/About.tsx
├── components/Skills.tsx
│   └── components/ui/badge.tsx
├── components/Projects.tsx
│   ├── components/ui/card.tsx
│   ├── components/ui/button.tsx
│   ├── components/ui/badge.tsx
│   └── next/image (built-in)
├── components/Contact.tsx
│   ├── components/ui/button.tsx
│   ├── components/ui/input.tsx
│   └── components/ui/textarea.tsx
└── components/Footer.tsx

lib/utils.ts
└── Used by all ui/ components
```

## Verification Checklist

After copying all files, verify your structure:

```bash
# Check app directory
ls app/
# Should show: page.tsx, layout.tsx, globals.css

# Check components directory
ls components/
# Should show: Header.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx, Contact.tsx, Footer.tsx

# Check UI components
ls components/ui/
# Should show: button.tsx, input.tsx, textarea.tsx, card.tsx, badge.tsx

# Check lib directory
ls lib/
# Should show: utils.ts
```

## Common Mistakes to Avoid

❌ **Don't** place components in `app/components/` - use `components/` at root level

❌ **Don't** forget to install shadcn/ui components - they won't be copied from this project

❌ **Don't** skip updating `tsconfig.json` - imports will fail

❌ **Don't** forget to configure `next.config.js` for images - external images won't load

✅ **Do** follow the exact directory structure shown above

✅ **Do** install all dependencies before running

✅ **Do** update configuration files

✅ **Do** test after each section is added

## Quick Setup Script

If you prefer to use command line, here's a quick setup:

```bash
# Navigate to your project
cd my-portfolio

# Create directories
mkdir -p components/ui lib public/images

# Install dependencies
npm install motion lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label

# Install shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea card badge

# Now manually copy the files from /nextjs/ to their respective locations
# Then update tsconfig.json and next.config.js

# Run development server
npm run dev
```

## Alternative Structure (with src/)

If your Next.js project uses the `src/` directory:

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   └── ... (all other components)
│   └── lib/
│       └── utils.ts
├── public/
└── ... (config files at root)
```

The imports remain the same due to the `~/` alias!

## Summary

**Total directories**: 4 main (app, components, lib, public)
**Total files to copy**: 11 files
**UI components to install**: 5 components
**Config files to update**: 2 files (tsconfig.json, next.config.js)

Following this structure exactly will ensure your Next.js portfolio works perfectly!
