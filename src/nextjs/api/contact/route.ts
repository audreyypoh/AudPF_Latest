import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get Resend API key from environment variable
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Email service not configured. Please contact directly via email." },
        { status: 500 }
      );
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: ["audreyy.poh@gmail.com"],
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #ddd; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Name:</strong><br/>
                ${data.name}
              </p>
              
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Email:</strong><br/>
                <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a>
              </p>
              
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Phone Number:</strong><br/>
                <a href="tel:${data.phone}" style="color: #0066cc;">${data.phone}</a>
              </p>
              
              <p style="margin: 10px 0;">
                <strong style="color: #555;">Message:</strong><br/>
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px;">
                  ${data.message.replace(/\n/g, '<br/>')}
                </div>
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
              <p>This message was sent from your portfolio website contact form.</p>
              <p>Submitted from: Singapore</p>
              <p>Timestamp: ${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send email notification" },
        { status: 500 }
      );
    }

    const emailResult = await emailResponse.json();
    console.log("Email sent successfully:", emailResult);

    // Store the submission for your records (optional but recommended)
    const timestamp = new Date().toISOString();
    const submissionId = `contact_${timestamp}_${Math.random().toString(36).substring(7)}`;
    
    // Here you could store in a database or log file
    console.log("Contact form submission stored:", {
      id: submissionId,
      timestamp,
      data,
    });

    return NextResponse.json(
      { 
        success: true,
        message: "Your message has been sent successfully!",
        id: submissionId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
