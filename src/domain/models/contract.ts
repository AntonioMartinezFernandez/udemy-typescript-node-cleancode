import { IContract } from '../interfaces/IContract';

export class ContractModel {
  constructor(public contract: IContract) {
    Object.assign(this, contract);
  }

  getId(): string {
    return this.contract.id;
  }

  getInitDate(): Date {
    return this.contract.initDate;
  }

  getExpirationDate(): Date {
    return this.contract.expirationDate;
  }
  getDuration(): number {
    return this.contract.months;
  }
  getMonthlyCost(): number {
    return this.contract.monthlyCost;
  }
}
