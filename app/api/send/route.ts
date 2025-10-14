import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "GraceCity Website <onboarding@resend.dev>",
      // to: "gracecityofficial@gmail.com", // Change to your church email
      to: "peaceakhigbe18@gmail.com",
      subject: `New Message from ${name}`,
      html: `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9f9fb; padding: 40px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(90deg, #6b21a8, #9333ea); padding: 20px; text-align: center; color: white;">
        <h2 style="margin: 0;">💌 New Message from Grace City Website</h2>
      </div>

      <div style="padding: 30px;">
        <p style="font-size: 16px; color: #333;">Hello Grace City Team,</p>
        <p style="font-size: 16px; color: #333;">You’ve received a new message via the contact form:</p>

        <table style="width: 100%; margin-top: 20px;">
          <tr><td style="padding: 8px 0; font-weight: bold;">👤 Name:</td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">📧 Email:</td><td>${email}</td></tr>
        </table>

        <div style="margin-top: 30px; background: #faf5ff; border-left: 4px solid #9333ea; padding: 20px; border-radius: 8px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #444;">${message}</p>
        </div>

        <p style="margin-top: 40px; font-size: 14px; color: #777;">This message was sent from the official <strong>Grace City Website</strong>.</p>
      </div>
    </div>
  </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
