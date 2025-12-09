## Key Clarification
- Client (public): use `SUPABASE_URL` and the **Anon key** (JWT token). In Next.js, these are typically `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Server (secret): use `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` only on the backend (Supabase Edge Functions). Never expose these client-side.
- The value you shared (`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sb_publishable_...`) is not the anon JWT. For our contact flow, the client must send the **Anon key** in the `Authorization: Bearer <anon_jwt>` header to the Edge Function.

## What I Will Configure
1. Supabase Dashboard → Project Settings → API:
   - Copy `Service Role` key and `Project URL`. 
2. Supabase Dashboard → Project Settings → Configuration (env vars):
   - `RESEND_API_KEY`: your Resend key
   - `SUPABASE_URL`: `https://tpgivpsznssagdpmzahp.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY`: service role key
3. Database (SQL): ensure KV table exists:
   - `CREATE TABLE kv_store_d18c3754 (key TEXT PRIMARY KEY NOT NULL, value JSONB NOT NULL);`

## Deploy & Verify Edge Function
1. Deploy Edge Function named `make-server-d18c3754` using the existing code:
   - `src/supabase/functions/server/index.tsx`
   - `src/supabase/functions/server/email.tsx`
   - `src/supabase/functions/server/kv_store.tsx`
2. Health test:
   - `GET https://tpgivpsznssagdpmzahp.supabase.co/functions/v1/make-server-d18c3754/health`
3. Contact test:
   - `POST /contact` with `Authorization: Bearer <anon_jwt>` and valid JSON body
   - Confirm: 200 response, email delivered via Resend, record stored in `kv_store_d18c3754`

## Frontend Alignment
- Keep client posting to the same Supabase function with `Authorization: Bearer <anon_jwt>` (`src/components/Contact.tsx`).
- Optionally, I can switch the client to read `SUPABASE_URL` and `ANON_KEY` from env at build time (Vite) to avoid hardcoded values.

## Optional Vercel Path (If You Want SSR/Single-Host)
- Deploy Next.js app to Vercel and use `src/nextjs/api/contact/route.ts`.
- Set `RESEND_API_KEY` in Vercel project env.
- Update the contact form to POST to `/api/contact`.

## Deliverables
- Supabase environment configured with secrets.
- Edge Function deployed and passing health/contact tests.
- Verified email delivery and stored submissions.
- Documentation of keys and locations, plus optional frontend env refactor if you prefer.