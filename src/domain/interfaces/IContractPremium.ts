import { IContract } from './IContract';

export interface IContractPremium extends IContract {
  discountPercent: number;
}
