export interface Result {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}

export interface InputData{
    initialInvest: number;
    annualInvest: number;
    expectedReturn: number;
    duration: number;
}