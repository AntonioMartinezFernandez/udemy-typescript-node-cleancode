import IVehicle from '../../domain/interfaces/IVehicle';
import vehicleRepository from '../repositories/vehicle/vehicleRepository';
import mailProvider from '../adapters/nodemailerAdapter';
import { IMailMessage } from 'src/domain/useCases/sendEmail';

export class VehicleService {
  async create(vehicle: IVehicle) {
    const savedVehicle = await vehicleRepository.create(vehicle);
    return savedVehicle;
  }

  async sendmail(vehicle: IVehicle) {
    let message: IMailMessage = {
      to: { email: vehicle.email },
      from: { email: process.env.SMTP_USER, name: 'Clean Code App' },
      subject: 'Vehicle added 🚗',
      body: `Vehicle ${vehicle.brand} ${vehicle.model} was added successfully!`,
    };
    const mailsender = new mailProvider();
    const mailsended = await mailsender.sendEmail(message);
    return mailsended;
  }
}

export default new VehicleService();
