import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IMailMessage, IMailSend } from 'src/domain/useCases/sendEmail';

export default class mailProvider implements IMailSend {
  private readonly transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  async sendEmail(message: IMailMessage) {
    try {
      if (message.to.email) {
        let mailsended = await this.transporter.sendMail({
          from: `${message.from.name} < ${process.env.SMTP_USER} >`, //'ANTONIO <' + process.env.SMTP_USER + '>', // sender address
          to: message.to.email, // List of receivers
          subject: message.subject, //'Vehicle added 🚗', // Subject line
          text: message.body, //`Vehicle ${this.vehicle.brand} ${this.vehicle.model} was added successfully!`, // Plain text body
        });

        return mailsended;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
