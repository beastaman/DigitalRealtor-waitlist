import { type NextRequest, NextResponse } from "next/server"

// Airtable configuration
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = "Waitlist" // You can change this table name

// Resend configuration for email sending
const RESEND_API_KEY = process.env.RESEND_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { email, name, company, socialHandle, notes } = await request.json()

    if (!email || !name) {
      return NextResponse.json({ error: "Email and name are required" }, { status: 400 })
    }

    // Check if required environment variables are present
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
      console.error("Missing Airtable configuration:", {
        hasApiKey: !!AIRTABLE_API_KEY,
        hasBaseId: !!AIRTABLE_BASE_ID,
      })
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`
    console.log("Attempting to add to Airtable:", { email, name, company, socialHandle, notes })
    console.log("Airtable URL:", airtableUrl)
    console.log("Token prefix:", AIRTABLE_API_KEY?.substring(0, 10) + "...")

    // Add to Airtable
    const airtableResponse = await fetch(
      airtableUrl,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Name: name,
            Company: company || "",
            "Social Handle": socialHandle || "",
            Notes: notes || "",
            Status: "Pending",
          },
        }),
      }
    )

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text()
      console.error("Airtable error:", {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        error: errorText,
      })
      return NextResponse.json(
        {
          error: "Failed to save to database",
          details: errorText,
        },
        { status: 500 }
      )
    }

    const airtableData = await airtableResponse.json()
    console.log("Successfully added to Airtable:", airtableData)

    // Send welcome email using Resend (only if API key is available)
    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Digital Realtor <hello@digitalrealtor.co>",
            to: [email],
            subject: "You're In — Welcome to Digital Realtor!",
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to Digital Realtor</title>
              </head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); padding: 40px 20px; text-align: center; border-radius: 12px; margin-bottom: 30px;">
                  <h1 style="color: #000; font-size: 28px; margin: 0; font-weight: bold;">You're In, ${name}!</h1>
                  <p style="color: #000; font-size: 18px; margin: 10px 0 0 0; opacity: 0.8;">Welcome to Digital Realtor — your AI content team is ready</p>
                </div>

                <div style="background: #f8f9fa; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
                  <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">What happens next?</h2>

                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="background: #fbbf24; color: #000; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">1</span>
                      <span style="font-weight: 600;">Early Access Notification</span>
                    </div>
                    <p style="margin-left: 45px; color: #666; margin-bottom: 0;">You'll be among the first to know when Digital Realtor launches</p>
                  </div>

                  <div style="margin-bottom: 20px;">
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="background: #fbbf24; color: #000; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">2</span>
                      <span style="font-weight: 600;">Platform Access</span>
                    </div>
                    <p style="margin-left: 45px; color: #666; margin-bottom: 0;">Start generating AI content ideas, scripts, and captions for your social media</p>
                  </div>

                  <div>
                    <div style="display: flex; align-items: center; margin-bottom: 15px;">
                      <span style="background: #fbbf24; color: #000; width: 30px; height: 30px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px;">3</span>
                      <span style="font-weight: 600;">Build Your Brand</span>
                    </div>
                    <p style="margin-left: 45px; color: #666; margin-bottom: 0;">Schedule posts, track analytics, and grow your audience on autopilot</p>
                  </div>
                </div>

                <div style="background: #1a1a1a; color: #fff; padding: 30px; border-radius: 12px; text-align: center;">
                  <h3 style="color: #fbbf24; margin-bottom: 15px;">What You'll Get Access To:</h3>
                  <ul style="list-style: none; padding: 0; text-align: left;">
                    <li style="margin-bottom: 10px;">✅ Unlimited AI content ideas & post generations</li>
                    <li style="margin-bottom: 10px;">✅ Script & Caption AI (advanced prompts + formats)</li>
                    <li style="margin-bottom: 10px;">✅ Unlimited saved content + folders</li>
                    <li style="margin-bottom: 10px;">✅ Multi-platform post templates</li>
                    <li style="margin-bottom: 10px;">✅ Full Analytics + AI Performance Insights</li>
                  </ul>
                </div>

                <div style="text-align: center; margin-top: 30px; padding-top: 30px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 14px;">
                    Questions? Reply to this email — we'd love to hear from you!<br>
                    <strong>Abdelrahman Abd Rabou — Digital Realtor</strong>
                  </p>
                  <p style="color: #999; font-size: 12px; margin-top: 20px;">
                    You're receiving this because you signed up for early access to Digital Realtor.<br>
                    Don't want these emails? <a href="#" style="color: #fbbf24;">Unsubscribe here</a>
                  </p>
                </div>
              </body>
              </html>
            `,
          }),
        })

        if (!emailResponse.ok) {
          console.error("Failed to send email, but continuing:", await emailResponse.text())
        } else {
          console.log("Email sent successfully")
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError)
        // Don't fail the whole request if email fails
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 })
  }
}
