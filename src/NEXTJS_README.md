# Next.js Portfolio Website - Setup Instructions

This document provides step-by-step instructions for implementing your portfolio website in a Next.js project.

## Quick Start

### 1. Create a New Next.js Project (if you don't have one)

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```

During setup, choose:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory (optional)
- ✅ App Router
- ❌ Turbopack (optional)

### 2. Install Required Dependencies

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
```

## File Structure

Your Next.js project structure should look like this:

```
my-portfolio/
├── app/
│   ├── page.tsx                    # ← Copy from /nextjs/page.tsx
│   ├── layout.tsx                  # ← Copy from /nextjs/layout.tsx
│   └── globals.css                 # ← Copy from /nextjs/globals.css
├── components/
│   ├── Header.tsx                  # ← Copy from /nextjs/components/Header.tsx
│   ├── Hero.tsx                    # ← Copy from /nextjs/components/Hero.tsx
│   ├── About.tsx                   # ← Copy from /nextjs/components/About.tsx
│   ├── Skills.tsx                  # ← Copy from /nextjs/components/Skills.tsx
│   ├── Projects.tsx                # ← Copy from /nextjs/components/Projects.tsx
│   ├── Contact.tsx                 # ← Copy from /nextjs/components/Contact.tsx
│   ├── Footer.tsx                  # ← Copy from /nextjs/components/Footer.tsx
│   └── ui/
│       ├── button.tsx              # ← Copy from your existing UI components
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other shadcn/ui components)
├── lib/
│   └── utils.ts                    # ← Copy from /nextjs/lib/utils.ts
├── public/
│   └── ... (your images/assets)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Step-by-Step Implementation

### Step 1: Copy Core Files

1. **Copy `app/page.tsx`**: Replace your existing `app/page.tsx` with the content from `/nextjs/page.tsx`
2. **Copy `app/layout.tsx`**: Replace with content from `/nextjs/layout.tsx`
3. **Copy `app/globals.css`**: Replace with content from `/nextjs/globals.css`

### Step 2: Copy Components

Copy all component files from `/nextjs/components/` to your project's `components/` directory:

- Header.tsx
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Contact.tsx
- Footer.tsx

### Step 3: Setup UI Components

If you haven't already, set up shadcn/ui components. You'll need these specific components:

```bash
# Install shadcn/ui CLI
npx shadcn-ui@latest init

# Add required components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
```

### Step 4: Copy Utils

Copy the file from `/nextjs/lib/utils.ts` to your `lib/utils.ts`

### Step 5: Configure Path Aliases

Ensure your `tsconfig.json` has the correct path aliases. The code uses `~/` imports:

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

**Alternative**: If you prefer `@/` imports, update all import statements in the copied files:

```typescript
// Change this:
import { Button } from "~/components/ui/button";

// To this:
import { Button } from "@/components/ui/button";
```

### Step 6: Configure Next.js for External Images

Since we're using Unsplash images, update `next.config.js`:

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

Or if using `next.config.mjs`:

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

### Step 7: Run Your Project

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Customization Guide

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update social media links (GitHub, LinkedIn, Email)
   - Customize the introduction text

2. **About Section** (`components/About.tsx`):
   - Update your professional bio
   - Modify the feature descriptions

3. **Skills Section** (`components/Skills.tsx`):
   - Update the skill categories and individual skills

4. **Services/Projects Section** (`components/Projects.tsx`):
   - Update service descriptions
   - Replace images with your own (or use different Unsplash images)
   - Modify tags and descriptions

5. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Update phone number
   - Update location

6. **Footer** (`components/Footer.tsx`):
   - Update social media links

### Replace Unsplash Images with Your Own

1. Add your images to the `public/` directory, e.g., `public/images/service1.jpg`

2. Update the image imports in `Projects.tsx`:

```typescript
// Before
image: "https://images.unsplash.com/photo-..."

// After
image: "/images/service1.jpg"
```

3. The Next.js `<Image>` component will automatically optimize your images

### Implement Real Form Submission

The contact form currently just shows an alert. To implement real form submission:

**Option 1: Using API Routes (Recommended)**

1. Create `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Send email using a service like Resend, SendGrid, etc.
  // Or save to a database
  
  return NextResponse.json({ success: true });
}
```

2. Update the form submission in `Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert("Thank you! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  }
};
```

**Option 2: Using Third-Party Services**

Popular options:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

### Add SEO and Metadata

The `layout.tsx` already includes basic metadata. Enhance it further:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Independent Financial Advisor",
  description: "Your custom description...",
  keywords: ["financial advisor", "Singapore", ...],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Financial Advisor",
    description: "Your description...",
    images: ['/og-image.jpg'],
    type: "website",
    url: "https://yourwebsite.com",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Name - Financial Advisor",
    description: "Your description...",
  }
};
```

## Important Notes

### Client Components

Components that use:
- React hooks (useState, useEffect, etc.)
- Browser APIs
- Event handlers

...must have `"use client"` at the top of the file. The following components already have this:

- Header.tsx
- Hero.tsx
- About.tsx
- Skills.tsx
- Projects.tsx
- Contact.tsx

### Server Components

- Footer.tsx is a Server Component (no `"use client"`)
- page.tsx is a Server Component

This is optimal for performance!

## Troubleshooting

### Issue: Import errors with `~/` paths

**Solution**: Check your `tsconfig.json` paths configuration or switch to `@/` imports.

### Issue: Images not loading

**Solution**: 
1. Check `next.config.js` for correct `remotePatterns`
2. Ensure images are in the `public/` directory if using local images

### Issue: "motion/react" not found

**Solution**: Make sure you installed the motion package:
```bash
npm install motion
```

### Issue: UI components not found

**Solution**: Install shadcn/ui components:
```bash
npx shadcn-ui@latest add button input textarea card badge
```

## Production Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Works great with Next.js
- **AWS Amplify**: Full support for Next.js
- **Railway**: Easy deployment
- **DigitalOcean App Platform**: Good for Next.js apps

## Performance Optimization

The website already includes several optimizations:

1. ✅ Next.js automatic code splitting
2. ✅ Image optimization with Next.js Image component
3. ✅ Server Components for non-interactive parts
4. ✅ Tailwind CSS for minimal CSS bundle
5. ✅ Motion animations (lightweight)

### Additional Optimizations

1. **Add loading states**:
```typescript
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <YourContent />
    </Suspense>
  );
}
```

2. **Lazy load images**:
The Next.js Image component already does this!

3. **Add analytics** (optional):
```bash
npm install @vercel/analytics
```

## Support

If you encounter issues:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Check shadcn/ui documentation: https://ui.shadcn.com
3. Review the troubleshooting section above

## License

This code is provided for your personal portfolio website.

---

**Enjoy your new portfolio website! 🎉**
