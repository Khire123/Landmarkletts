import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

// --- SHARED CSS WRAPPER ---
const emailWrapper = (content: string) => `
  <div style="background-color: #f4f1ea; padding: 40px 20px; font-family: 'Helvetica', Arial, sans-serif; color: #2E3540;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #b28a4a20;">
      <div style="background-color: #2E3540; padding: 30px; text-align: center;">
        <h1 style="color: #b28a4a; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">Landmark Letts</h1>
      </div>
      <div style="padding: 40px;">
        ${content}
      </div>
      <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; color: #999; font-size: 12px;">Jhumat House, London Rd, IG11 8BB</p>
        <p style="margin: 5px 0 0; color: #999; font-size: 12px;">© 2026 Landmark Letts. All rights reserved.</p>
      </div>
    </div>
  </div>
`;

serve(async (req) => {
  const payload = await req.json()
  const { record } = payload // 'record' contains the tour_requests data

  // --- 1. ADMIN EMAIL CONTENT ---
  const adminSubject = `🚨 NEW VIEWING REQUEST: ${record.property_name}`;

  const adminHtml = emailWrapper(`
    <div style="text-align: center; margin-bottom: 20px;">
        <span style="background: #b28a4a; color: white; padding: 5px 15px; border-radius: 50px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
            Tour Request
        </span>
    </div>
    <h2 style="color: #2E3540; margin-bottom: 20px; border-bottom: 2px solid #b28a4a; padding-bottom: 10px;">
        Booking Details
    </h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Property:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.property_name}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Client:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.name}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.email}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.phone}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.appointment_date}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Time:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.appointment_time}</td></tr>
    </table>
  `);

  // --- 2. USER EMAIL CONTENT ---
  const userHtml = emailWrapper(`
    <h2 style="color: #2E3540; margin-bottom: 20px;">Hi ${record.name},</h2>
    <p style="font-size: 16px; line-height: 1.6; color: #555;">
      We've received your request to view <strong>${record.property_name}</strong>.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #555;">
      Our property consultants are reviewing your preferred time: <strong>${record.appointment_date}</strong> at <strong>${record.appointment_time}</strong>.
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #555;">
      We will call you shortly on <strong>${record.phone}</strong> to confirm the viewing.
    </p>
    <div style="margin: 40px 0; text-align: center;">
      <a href="https://landmarkletts.co.uk" style="background-color: #b28a4a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Explore More Properties</a>
    </div>
    <p style="font-size: 14px; color: #888;">Best regards,<br><strong style="color: #2E3540;">The Landmark Letts Team</strong></p>
  `);

  // Prepare Email Tasks
  const emailTasks = [];

  // Admin Email
  emailTasks.push(
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Landmark Letts <contact@landmarkletts.co.uk>',
        to: 'contact@landmarkletts.co.uk', // 👈 Admin receives this
        subject: adminSubject,
        html: adminHtml,
      }),
    })
  );

  // User Email
  emailTasks.push(
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Landmark Letts <contact@landmarkletts.co.uk>',
        to: record.email, // 👈 User receives this
        subject: 'Viewing Request Received - Landmark Letts',
        html: userHtml,
      }),
    })
  );

  await Promise.all(emailTasks);

  return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } })
})