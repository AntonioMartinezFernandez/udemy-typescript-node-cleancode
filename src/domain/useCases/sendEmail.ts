export interface IMailAddress {
  name?: string;
  email: string | undefined;
}

export interface IMailMessage {
  to: IMailAddress;
  from: IMailAddress;
  subject: string;
  body: string;
}

export interface IMailSend {
  sendEmail: (message: IMailMessage) => Promise<void>;
}
