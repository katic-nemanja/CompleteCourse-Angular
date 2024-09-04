import { Result } from "../shared/result.model";

export function calculateInvestmentResults(initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number) {
    let annualData : Array<Result> = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        });
    }
    console.log(annualData);
    console.log(initialInvestment + duration + expectedReturn + annualInvestment);
    return annualData;
    
}