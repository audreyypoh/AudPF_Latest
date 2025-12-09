# Import Path Variants

The code uses `~/` imports by default. If your Next.js project uses `@/` imports (which is the Next.js default), here are the changes you need to make.

## Option 1: Configure TypeScript to use `~/` (Recommended)

Update your `tsconfig.json`:

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

**Benefit**: No need to change any import statements in the copied files.

## Option 2: Change All Imports to `@/`

If you prefer to keep the standard Next.js `@/` imports, you'll need to update the import statements in all component files.

### Files that need updating:

#### 1. `app/page.tsx`

```typescript
// Change from:
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Skills } from "~/components/Skills";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

// To:
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
```

#### 2. `components/Header.tsx`

```typescript
// Change from:
import { Button } from "~/components/ui/button";

// To:
import { Button } from "@/components/ui/button";
```

#### 3. `components/Hero.tsx`

```typescript
// Change from:
import { Button } from "~/components/ui/button";

// To:
import { Button } from "@/components/ui/button";
```

#### 4. `components/Skills.tsx`

```typescript
// Change from:
import { Badge } from "~/components/ui/badge";

// To:
import { Badge } from "@/components/ui/badge";
```

#### 5. `components/Projects.tsx`

```typescript
// Change from:
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

// To:
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
```

#### 6. `components/Contact.tsx`

```typescript
// Change from:
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

// To:
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
```

## Quick Find & Replace

If you're using VS Code or another code editor, you can do a global find and replace:

1. Open "Find in Files" (Ctrl+Shift+F or Cmd+Shift+F)
2. Find: `"~/components/`
3. Replace with: `"@/components/`
4. Replace all

This will update all import paths in one go!

## Recommended Approach

**Use `~/` imports** as provided in the code. It's cleaner and the configuration is simple. Just add this to your `tsconfig.json`:

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

Both `~/` and `@/` work exactly the same way - they're just different conventions for absolute imports.
