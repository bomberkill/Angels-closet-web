import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST3,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER3,
        pass: process.env.SMTP_PASS3,
    },
});
