# Backend Setup Guide for Contact Form

## Overview

Your portfolio website now has a fully functional contact form backend that:
- ✅ Collects name, email, phone number, and message from visitors
- ✅ Sends email notifications to **audreyy.poh@gmail.com**
- ✅ Stores all submissions in the database for your records
- ✅ Validates all form inputs
- ✅ Handles errors gracefully
- ✅ Uses Singapore timezone for timestamps

## Email Service Setup (Required)

To enable email notifications, you need to set up a **Resend API key**. Resend is a modern email service that's reliable and easy to use.

### Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Select **Full Access** permissions
6. Click **Create**
7. **Copy the API key** (it will only be shown once!)

### Step 3: Add API Key to Supabase

1. In your Supabase project, go to **Project Settings** → **Edge Functions**
2. Scroll to **Secrets**
3. Click **Add Secret**
4. Name: `RESEND_API_KEY`
5. Value: Paste your Resend API key
6. Click **Save**

### Step 4: Verify Domain (Important!)

By default, Resend only allows you to send from `onboarding@resend.dev`. For production use:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `audreyportfolio.com`)
4. Follow the DNS verification instructions
5. Once verified, update the `from` email in `/supabase/functions/server/email.tsx`:
   ```typescript
   from: "Audrey Poh <contact@yourdomain.com>",
   ```

## How It Works

### Contact Form Flow

1. **User fills out form** → Name, Email, Phone, Message
2. **Frontend validates** → Checks required fields and formats
3. **Sends to backend** → POST request to `/make-server-d18c3754/contact`
4. **Server validates** → Double-checks all data
5. **Stores in database** → Saves submission with unique ID
6. **Sends email** → Beautifully formatted email to your inbox
7. **Returns success** → User sees confirmation message

### Email Template

The email you receive will include:
- **Subject:** "New Consultation Request from [Name]"
- **Sender's Details:** Name, Email, Phone
- **Message:** Full message content
- **Metadata:** Timestamp (Singapore timezone), Location
- **Reply-To:** Automatically set to the sender's email for easy replies

### Database Storage

All submissions are stored in the KV store with:
- Unique ID: `contact_[timestamp]_[uuid]`
- All form fields: name, email, phone, message
- Timestamp in ISO format
- Location: Singapore

## Testing the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your email at **audreyy.poh@gmail.com**
4. You should receive a formatted email within seconds

## Troubleshooting

### Not Receiving Emails?

1. **Check spam folder** - First submission might go to spam
2. **Verify API key** - Make sure `RESEND_API_KEY` is set in Supabase
3. **Check logs** - View Supabase Edge Function logs for errors
4. **Verify domain** - If using custom domain, ensure it's verified

### Form Not Submitting?

1. **Check browser console** - Look for JavaScript errors
2. **Verify network** - Check if request reaches the server
3. **Check validation** - Ensure all required fields are filled
4. **Phone format** - Use valid format: `+65 9123 4567`

### Email Delays?

Even if email fails, the submission is **still stored** in the database. You can:
- Check logs for the submission ID
- Access stored submissions via the KV store
- The form will notify users if email is delayed

## Color Palette

Your website now uses this elegant color scheme:

- **Paper White**: #FEFDFB - Background
- **Ivory**: #F5F1E8 - Cards and inputs
- **Parchment**: #E8E4D9 - Secondary backgrounds
- **Pale Sage**: #D4D8C8 - Muted elements
- **Warm Taupe**: #C9B8AA - Accents
- **Misty Blue**: #A8BFBF - Highlights
- **Dusty Green**: #9DB0A8 - Focus rings
- **Soft Black**: #4A4A4A - Text

## Data Privacy & PDPA Compliance

⚠️ **Important for Singapore-based Financial Advisors:**

As you're collecting personal data in Singapore, ensure you comply with the Personal Data Protection Act (PDPA):

1. **Add Privacy Notice** - Include a privacy policy link on your website
2. **Consent** - Add a checkbox for users to consent to data collection
3. **Data Protection** - Ensure secure storage (Supabase provides this)
4. **Right to Access** - Be prepared to provide users their data upon request
5. **Data Retention** - Define how long you'll keep submissions

Consider adding to your contact form:
```tsx
<label>
  <input type="checkbox" required />
  I consent to the collection and processing of my personal data for consultation purposes.
  <a href="/privacy-policy">Privacy Policy</a>
</label>
```

## Next Steps

- [ ] Set up Resend account and add API key
- [ ] Test the contact form
- [ ] Verify you receive emails
- [ ] (Optional) Set up custom domain in Resend
- [ ] (Optional) Add PDPA consent checkbox
- [ ] (Optional) Create privacy policy page

## Support

If you encounter any issues:
1. Check the Supabase Edge Function logs
2. Verify all environment variables are set
3. Test with simple form submissions first
4. Check email spam/junk folders

Your contact form is now production-ready and will help you connect with potential clients in Singapore! 🇸🇬
