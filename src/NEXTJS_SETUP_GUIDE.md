# Next.js Setup Guide

This guide will help you implement your portfolio website in a Next.js project.

## Prerequisites

- Node.js 18+ installed
- A Next.js project initialized (if not, run: `npx create-next-app@latest`)

## Installation Steps

### 1. Install Dependencies

```bash
npm install motion lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
```

### 2. Project Structure

Your Next.js project should follow this structure:

```
your-nextjs-project/
├── app/
│   ├── page.tsx                 # Main page (use converted App.tsx)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other UI components)
├── lib/
│   └── utils.ts
└── public/
    └── ... (static assets)
```

### 3. Copy Files

Copy the following files from this project to your Next.js project:

1. **app/page.tsx** - Use the converted `/nextjs/page.tsx` file
2. **app/globals.css** - Copy the `/nextjs/globals.css` file  
3. **app/layout.tsx** - Use the provided `/nextjs/layout.tsx` file
4. **components/** - Copy all component files from `/nextjs/components/` directory
5. **lib/utils.ts** - Copy from `/nextjs/lib/utils.ts`

### 4. Tailwind Configuration

The project uses Tailwind v4. Ensure your `tailwind.config.js` is minimal or uses the config in `globals.css`.

### 5. TypeScript Configuration

Make sure your `tsconfig.json` includes proper path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}
```

Or if you prefer `~/` imports:

```json
{
  "compilerOptions": {
    "paths": {
      "~/*": ["./*"]
    }
  }
}
```

### 6. Environment Variables (Optional)

If you want to add form submission or analytics, create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### 7. Run Your Project

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio website.

## Key Differences from React

1. **Client Components**: Components using hooks (useState, useEffect) or browser APIs need `'use client'` at the top
2. **Image Component**: Consider replacing `<ImageWithFallback>` with Next.js's `<Image>` component for optimization
3. **Link Component**: The header uses scroll behavior - this works in Next.js, but you can also use `<Link>` from `next/link` for navigation
4. **Metadata**: Add SEO metadata in `layout.tsx` or `page.tsx` using Next.js's metadata API

## Customization

1. **Update Content**: Modify the content in each component to match your details
2. **Images**: Replace Unsplash images with your own in `Projects.tsx`
3. **Social Links**: Update social media links in `Hero.tsx` and `Footer.tsx`
4. **Contact Information**: Update email, phone, and location in `Contact.tsx`
5. **Form Submission**: Implement actual form submission logic in `Contact.tsx` (consider using services like Formspree, EmailJS, or API routes)

## Production Build

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npx vercel
```

Or deploy to other platforms like Netlify, AWS, etc.

## Notes

- All components are fully responsive
- Animations use Motion (formerly Framer Motion)
- The design uses an elegant ink calligraphy theme with parchment colors
- All UI components are from shadcn/ui and can be customized
