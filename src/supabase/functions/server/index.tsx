import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { sendContactEmail } from "./email.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d18c3754/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-d18c3754/contact", async (c) => {
  try {
    const data = await c.req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return c.json(
        { error: "All fields are required: name, email, phone, and message" },
        400
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Validate phone format (allow numbers, spaces, hyphens, and + prefix)
    const phoneRegex = /^[\+]?[0-9\s\-]+$/;
    if (!phoneRegex.test(data.phone)) {
      return c.json({ error: "Invalid phone number format" }, 400);
    }

    console.log("Processing contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    // Store the submission in KV store for record keeping
    const timestamp = new Date().toISOString();
    const submissionId = `contact_${timestamp}_${crypto.randomUUID()}`;
    
    await kv.set(submissionId, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      timestamp,
      location: "Singapore",
    });

    console.log("Contact submission stored with ID:", submissionId);

    // Send email notification
    try {
      const emailResult = await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      
      console.log("Email sent successfully:", emailResult);
    } catch (emailError) {
      console.error("Error sending email notification:", emailError);
      // Still return success even if email fails, as we stored the submission
      return c.json({
        success: true,
        message: "Your message has been received and stored. However, email notification may be delayed.",
        id: submissionId,
        emailError: emailError instanceof Error ? emailError.message : "Unknown error",
      });
    }

    return c.json({
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
      id: submissionId,
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json(
      { 
        error: "An unexpected error occurred. Please try again later or email directly at audreyy.poh@gmail.com",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      500
    );
  }
});

Deno.serve(app.fetch);