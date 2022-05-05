import { ContractModel } from './contract';
import { IContractPremium } from '../interfaces/IContractPremium';

export class PremiumContractModel extends ContractModel {
  discountPercent: number;

  constructor(public contract: IContractPremium) {
    super(contract);
    this.discountPercent = contract.discountPercent;
  }

  getMonthlyDiscount(): number {
    return this.contract.monthlyCost * (this.discountPercent / 100);
  }
}
