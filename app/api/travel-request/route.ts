import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      fullName,
      email,
      department,
      subject,
      purpose,
      destination,
      aware,
      dutyDate,
      travelDate,
      returnDate,
      evangelismDate,
    } = await req.json();

    await resend.emails.send({
      from: "GraceCity Website <onboarding@resend.dev>",
      // to: "gracecityzone@gmail.com",
      to: "peaceakhigbe18@gmail.com",
      subject: `✈️ Workers Travel Request - ${fullName}`,
      html: `
  <div style="font-family: 'Inter', 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 50px 0;">
    <div style="max-width: 640px; margin: auto; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #6b21a8, #9333ea); padding: 28px 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 22px; color: #fff; font-weight: 600; letter-spacing: 0.3px;">
          Grace City Workers Travel Request
        </h1>
      </div>

      <!-- Body -->
      <div style="padding: 32px;">
        <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
          Hello Admin 👋, a new <strong>Workers Travel Request</strong> has been submitted via the Grace City website.
        </p>

        <div style="border-top: 1px solid #e5e7eb; margin: 20px 0;"></div>

        <!-- Table -->
        <table style="width: 100%; border-collapse: collapse;">
          <tbody>
            <tr><td style="padding: 10px 0; color: #6b7280;">👤 <strong>Full Name:</strong></td><td style="text-align: right; color: #111827;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">📧 <strong>Email:</strong></td><td style="text-align: right; color: #111827;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">🏢 <strong>Department:</strong></td><td style="text-align: right; color: #111827;">${department}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">📘 <strong>Subject:</strong></td><td style="text-align: right; color: #111827;">${subject}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">📝 <strong>Purpose:</strong></td><td style="text-align: right; color: #111827;">${purpose}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">📍 <strong>Destination:</strong></td><td style="text-align: right; color: #111827;">${destination}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">👀 <strong>Dept. Aware?:</strong></td><td style="text-align: right; color: #111827;">${aware}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">📅 <strong>Duty Date:</strong></td><td style="text-align: right; color: #111827;">${dutyDate}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">🚗 <strong>Travel Date:</strong></td><td style="text-align: right; color: #111827;">${travelDate}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">🔙 <strong>Return Date:</strong></td><td style="text-align: right; color: #111827;">${returnDate}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280;">🙏 <strong>Evangelism Date:</strong></td><td style="text-align: right; color: #111827;">${evangelismDate}</td></tr>
          </tbody>
        </table>

        <div style="border-top: 1px solid #e5e7eb; margin: 30px 0;"></div>

        <p style="font-size: 15px; color: #6b7280; line-height: 1.7;">
          Please review this request promptly. This message was generated automatically from the official <strong>Grace City Website</strong>.
        </p>

        // <div style="margin-top: 40px; text-align: center;">
        //   <a href="https://rccggracecity.org/" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #6b21a8, #9333ea); color: white; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 15px;">
        //     Visit Grace City Website
        //   </a>
        // </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f9fafb; text-align: center; padding: 18px; font-size: 13px; color: #9ca3af;">
        © ${new Date().getFullYear()} Grace City Church, Abuja. All rights reserved.
      </div>
    </div>
  </div>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Travel request error:", error);
    return NextResponse.json({ success: false, error });
  }
}
