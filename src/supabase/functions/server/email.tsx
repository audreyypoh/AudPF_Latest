// Email sending functionality using Resend API
export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY environment variable is not configured");
  }

  const emailHtml = `
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background-color: #FEFDFB; padding: 40px;">
      <div style="border-bottom: 2px solid #4A4A4A; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="font-family: 'Playfair Display', Georgia, serif; color: #4A4A4A; font-size: 28px; margin: 0;">
          New Contact Form Submission
        </h1>
        <p style="color: #9DB0A8; margin: 5px 0 0 0; font-size: 14px;">
          From your portfolio website
        </p>
      </div>
      
      <div style="background-color: #F5F1E8; border-left: 4px solid #9DB0A8; padding: 20px; margin-bottom: 20px;">
        <div style="margin-bottom: 20px;">
          <p style="margin: 0 0 5px 0; color: #4A4A4A; opacity: 0.7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
            Name
          </p>
          <p style="margin: 0; color: #4A4A4A; font-size: 16px; font-weight: 500;">
            ${data.name}
          </p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <p style="margin: 0 0 5px 0; color: #4A4A4A; opacity: 0.7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
            Email
          </p>
          <p style="margin: 0;">
            <a href="mailto:${data.email}" style="color: #9DB0A8; text-decoration: none; font-size: 16px;">
              ${data.email}
            </a>
          </p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <p style="margin: 0 0 5px 0; color: #4A4A4A; opacity: 0.7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
            Phone Number
          </p>
          <p style="margin: 0;">
            <a href="tel:${data.phone}" style="color: #9DB0A8; text-decoration: none; font-size: 16px;">
              ${data.phone}
            </a>
          </p>
        </div>
        
        <div>
          <p style="margin: 0 0 10px 0; color: #4A4A4A; opacity: 0.7; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
            Message
          </p>
          <div style="background-color: #FEFDFB; padding: 15px; border-radius: 4px; border: 1px solid #E8E4D9;">
            <p style="margin: 0; color: #4A4A4A; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
${data.message}
            </p>
          </div>
        </div>
      </div>
      
      <div style="border-top: 1px solid #E8E4D9; padding-top: 20px; margin-top: 30px;">
        <p style="color: #9DB0A8; font-size: 12px; margin: 0;">
          <strong>Submitted:</strong> ${new Date().toLocaleString('en-SG', { 
            timeZone: 'Asia/Singapore',
            dateStyle: 'full',
            timeStyle: 'short'
          })}
        </p>
        <p style="color: #9DB0A8; font-size: 12px; margin: 5px 0 0 0;">
          <strong>Location:</strong> Singapore
        </p>
      </div>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["audreyy.poh@gmail.com"],
      subject: `New Consultation Request from ${data.name}`,
      html: emailHtml,
      reply_to: data.email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend API error:", errorText);
    throw new Error(`Failed to send email: ${errorText}`);
  }

  return await response.json();
}
