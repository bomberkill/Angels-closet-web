import { NextResponse } from 'next/server';
import { transport } from '@/lib/mailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const mailOptions = {
            from: `Angel's Closet <contact@angelsclosets.com>`,
            to: email,
            subject: "Thank You for Contacting Angel's Closet Team",
            text: `Hello ${name},

Thank you for reaching out to Angel's Closet! We’ve received your message and will get back to you as soon as possible.

If you need immediate assistance, feel free to reply to this email or contact us directly.
Phone numer: +1 240 309 1643

Best regards,
The Angel Team`,
        };

        await transport.sendMail(mailOptions);

        return NextResponse.json({ message: 'Confirmation email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return NextResponse.json(
            { error: 'Failed to send confirmation email' },
            { status: 500 }
        );
    }
}
