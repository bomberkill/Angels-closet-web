import { NextResponse } from 'next/server';
import { transport } from '@/lib/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: `${name} <contact@angelsclosets.com>`, // Consistent with V1
            replyTo: email,
            to: 'contact@angelsclosets.com',
            subject: `New Inquiry from ${name} - ${service || 'General'}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'General'}

Message:
${message}
            `,
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
