import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

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
        <p style="margin: 5px 0 0; color: #999; font-size: 12px;">© 2024 Landmark Letts. All rights reserved.</p>
      </div>
    </div>
  </div>
`;

serve(async (req) => {
  const payload = await req.json()
  const { record, table } = payload
  
  // Detect if this is a booking or a standard contact
  const isBooking = table === 'bookings';

  // --- 1. ADMIN EMAIL CONTENT ---
  const adminSubject = isBooking 
    ? `🚨 URGENT BOOKING: ${record.full_name}` 
    : `New Inquiry: ${record.full_name}`;

  const adminHtml = emailWrapper(`
    <div style="text-align: center; margin-bottom: 20px;">
        <span style="background: ${isBooking ? '#ef4444' : '#b28a4a'}; color: white; padding: 5px 15px; border-radius: 50px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
            ${isBooking ? 'Consultation Request' : 'General Message'}
        </span>
    </div>
    <h2 style="color: #2E3540; margin-bottom: 20px; border-bottom: 2px solid #b28a4a; padding-bottom: 10px;">
        ${isBooking ? 'Booking Details' : 'Contact Details'}
    </h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.full_name}</td></tr>
      ${record.email ? `<tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.email}</td></tr>` : ''}
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${record.phone}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>${isBooking ? 'Service' : 'Type'}:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${isBooking ? record.service_type : record.inquiry_type}</td></tr>
    </table>
    <div style="margin-top: 30px; padding: 20px; background-color: #f4f1ea; border-left: 4px solid ${isBooking ? '#ef4444' : '#b28a4a'};">
      <strong>Message:</strong><br/>
      "${isBooking ? record.description : record.message}"
    </div>
  `);

  // --- 2. USER EMAIL CONTENT ---
  const userHtml = emailWrapper(`
    <h2 style="color: #2E3540; margin-bottom: 20px;">Hi ${record.full_name},</h2>
    <p style="font-size: 16px; line-height: 1.6; color: #555;">
      ${isBooking 
        ? `We've received your request for a <strong>Free 15-minute Consultation</strong> regarding <strong>${record.service_type}</strong>.` 
        : `Thank you for reaching out. We have successfully received your inquiry regarding <strong>${record.inquiry_type}</strong>.`
      }
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #555;">
      ${isBooking 
        ? `Our team will call you shortly on <strong>${record.phone}</strong> to finalize your time slot.` 
        : `Our team of property experts is currently reviewing your details and will get back to you within 24 hours.`
      }
    </p>
    <div style="margin: 40px 0; text-align: center;">
      <a href="https://landmarkletts.co.uk" style="background-color: #b28a4a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">View Our Services</a>
    </div>
    <p style="font-size: 14px; color: #888;">Best regards,<br><strong style="color: #2E3540;">The Landmark Letts Team</strong></p>
  `);

  // Prepare Email Tasks
  const emailTasks = [];

  // Always send Admin Email
  emailTasks.push(
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: 'Landmark Letts <contact@landmarkletts.co.uk>',
        to: 'contact@landmarkletts.co.uk',
        subject: adminSubject,
        html: adminHtml,
      }),
    })
  );

  // Only send User Email if an email address exists (Bookings might only have phone)
  if (record.email) {
    emailTasks.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify({
          from: 'Landmark Letts <contact@landmarkletts.co.uk>',
          to: record.email,
          subject: isBooking ? 'Consultation Request Confirmed' : 'Message Received - Landmark Letts',
          html: userHtml,
        }),
      })
    );
  }

  await Promise.all(emailTasks);

  return new Response(JSON.stringify({ done: true }), { headers: { 'Content-Type': 'application/json' } })
})