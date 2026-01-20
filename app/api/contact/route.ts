import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password, not regular password
      },
    });

    // Prepare email attachments if file exists
    const attachments = [];
    if (body.file) {
      attachments.push({
        filename: body.file.name,
        content: Buffer.from(body.file.content, "base64"),
        contentType: body.file.contentType,
      });
    }

    // Email content
    const mailOptions = {
      from: `"ICR Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; padding: 15px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📧 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${body.name}</div>
              </div>
              
              <div class="field">
                <div class="label">✉️ Email:</div>
                <div class="value"><a href="mailto:${body.email}">${
        body.email
      }</a></div>
              </div>
              
              ${
                body.company
                  ? `
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${body.company}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${body.message.replace(/\n/g, "<br>")}</div>
              </div>
              
              ${
                body.file
                  ? `
              <div class="field">
                <div class="label">📎 Attached File:</div>
                <div class="value">${body.file.name} (${(
                      Buffer.from(body.file.content, "base64").length /
                      1024 /
                      1024
                    ).toFixed(2)} MB)</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">🕐 Submitted At:</div>
                <div class="value">${new Date(body.submittedAt).toLocaleString(
                  "en-US",
                  {
                    dateStyle: "full",
                    timeStyle: "short",
                  }
                )}</div>
              </div>
            </div>
            <div class="footer">
              This email was sent from the ICR Contact Form
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: attachments,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}
