import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST3,
    // port: 587,
    // secure: false,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER3,
        pass: process.env.SMTP_PASS3,
    },
    debug: false,
    logger: false,
    pool: true,
    maxConnections: 1,
    // maxMessages: 100,
    // tls: {
    //     minVersion: 'TLSv1.2',
    //     ciphers: 'DEFAULT:!SSLv3:!RC4:!DSS',
    // }
});
