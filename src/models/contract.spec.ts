import { ContractModel } from './contract';
import { PremiumContractModel } from './contractPremium';

describe('Contract Class', () => {
  it('Regular Contract 12 months', () => {
    const contract = new ContractModel({
      id: '#001',
      initDate: new Date(2022, 0, 1, 1, 0, 0),
      expirationDate: new Date(2023, 0, 1, 1, 0, 0),
      months: 12,
      monthlyCost: 500,
    });

    expect(contract.getId()).toBe('#001');
    expect(contract.getInitDate()).toEqual(new Date(2022, 0, 1, 1, 0, 0));
    expect(contract.getExpirationDate()).toEqual(new Date(2023, 0, 1, 1, 0, 0));
    expect(contract.getDuration()).toBe(12);
    expect(contract.getMonthlyCost()).toBe(500);
  });

  it('Premium Contract 24 months (with discount)', () => {
    const premiumContract = new PremiumContractModel({
      id: '#001',
      initDate: new Date(2022, 0, 1, 1, 0, 0),
      expirationDate: new Date(2024, 0, 1, 1, 0, 0),
      months: 24,
      monthlyCost: 480,
      discountPercent: 10,
    });

    expect(premiumContract.getId()).toBe('#001');
    expect(premiumContract.getInitDate()).toEqual(
      new Date(2022, 0, 1, 1, 0, 0),
    );
    expect(premiumContract.getExpirationDate()).toEqual(
      new Date(2024, 0, 1, 1, 0, 0),
    );
    expect(premiumContract.getDuration()).toBe(24);
    expect(premiumContract.getMonthlyCost()).toBe(480);
    expect(premiumContract.getMonthlyDiscount()).toBe(48);
  });
});
