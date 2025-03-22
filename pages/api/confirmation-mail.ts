import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function confirmationMail(request: NextApiRequest, response: NextApiResponse) {
  const { email, name } = request.body;
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Only POST methods are allowed' });
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST3,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER3,
      pass: process.env.SMTP_PASS3,
    },
  });
  const mailOptions = {
    from: `Angel's Closet <contact@angelsclosets.com>`,
    to: email,
    subject: "Thank You for Contacting Angel's Closet Team",
    text: `Hello ${name},\n\nThank you for reaching out to Angel's Closet! We’ve received your message and will get back to you as soon as possible.\n\nIf you need immediate assistance, feel free to reply to this email or contact us directly.\nPhone numer: +1 240 309 1643\n\nBest regards,\nThe Angel Team`,
  };
  try {
    await transport.sendMail(mailOptions);
    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return response.status(500).json({ message: `Error sending email: ${error}` });
  }
}
