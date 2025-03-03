import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contactMail({
  request,
  response,
}: {
  request: NextApiRequest;
  response: NextApiResponse;
}) {
  const { email, name, phone, subject, message } = request.body;
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Only POST methods are allowed' });
  }
  const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: '',
      pass: '',
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: '',
    subject: subject ?? "Message from Angel's Closet website",
    text: `${message}\n\nUser phone number : ${phone}`,
  };
  try {
    await transport.sendMail(mailOptions);
    return response.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return response.status(500).json({ message: 'Error sending email' });
  }
}
