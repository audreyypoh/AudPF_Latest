# Quick Start: Resend API Setup

## What You Need

To enable email notifications when someone fills out your contact form, you need a **Resend API key**.

## Step-by-Step Setup

### 1️⃣ Create Resend Account (Free)

Visit: **https://resend.com/signup**

- Sign up with your email
- Verify your account
- Log in to dashboard

### 2️⃣ Generate API Key

In the Resend dashboard:

1. Click **API Keys** in the left sidebar
2. Click **Create API Key** button
3. Name it: `Portfolio Contact Form`
4. Permission: Select **Full Access**
5. Click **Create**
6. **COPY THE KEY** (shown only once!)

Your API key will look like:
```
re_123abc456def789ghi012jkl345mno678
```

### 3️⃣ Add to Supabase Environment

You need to add this API key as an environment variable in Supabase:

**In Supabase Dashboard:**
1. Go to your project
2. Click **Project Settings** (gear icon)
3. Navigate to **Edge Functions**
4. Scroll to **Secrets** section
5. Click **Add a new secret**
6. Enter:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Paste your Resend API key
7. Click **Save**

**Alternative: Using Supabase CLI**
```bash
supabase secrets set RESEND_API_KEY=your_api_key_here
```

### 4️⃣ Test Your Setup

1. Visit your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email: **audreyy.poh@gmail.com**
5. You should receive a formatted email!

## Important Notes

### Free Tier Limits

Resend free tier includes:
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Perfect for contact forms!

### From Email Address

Currently using: `onboarding@resend.dev`

This works for testing, but for production you should:
1. Verify your own domain in Resend
2. Update the `from` address in the code

### Email Format

When someone submits the form, you'll receive:

**Subject:** New Consultation Request from [Their Name]

**Body includes:**
- Their name
- Their email (clickable)
- Their phone number (clickable)
- Their message
- Submission time (Singapore timezone)
- Location: Singapore

**Reply-To:** Automatically set to their email, so you can just hit reply!

## Troubleshooting

### ❌ "RESEND_API_KEY environment variable is not configured"

**Solution:** You haven't added the API key to Supabase yet. Follow Step 3 above.

### ❌ Email not received

**Check:**
1. Spam/junk folder (first email might go there)
2. Supabase Edge Function logs for errors
3. Your Resend dashboard for delivery status
4. That you copied the entire API key correctly

### ❌ "Failed to send email"

**Check:**
1. API key is valid and not expired
2. API key has correct permissions (Full Access)
3. Resend account is active
4. You haven't exceeded free tier limits

## Pro Tips

### 1. Whitelist Sender Email

Add `onboarding@resend.dev` to your Gmail contacts to ensure emails don't go to spam.

### 2. Monitor Submissions

Even if email fails, all submissions are stored in your database. Check:
- Supabase Dashboard → Table Editor → KV Store
- Look for keys starting with `contact_`

### 3. Set Up Email Filters

In Gmail, create a filter to:
- Label emails from your contact form
- Star important consultation requests
- Forward to team members if needed

## Security Notes

🔒 **Keep Your API Key Secret!**

- Never commit API keys to Git
- Never share your API key publicly
- Rotate keys if compromised
- Use different keys for dev/production

## Need Help?

**Resend Documentation:**
https://resend.com/docs

**Resend Support:**
https://resend.com/support

**Check Logs:**
In Supabase, go to Edge Functions → Logs to see what's happening.

---

Once you've completed these steps, your contact form will be fully operational! 🎉
