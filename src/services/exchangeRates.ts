export class ExchangeRates {
  public get usdToEur(): number {
    return 0.87815;
  }
  public get usdToGbp(): number {
    return 0.78569;
  }

  public convertUsdToGbp(dollars: number): string {
    return (dollars * this.usdToGbp).toFixed(2);
  }
}
