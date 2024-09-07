import { signal } from "@angular/core";
import { Result } from "../shared/result.model";
import { InputData } from "../shared/result.model";

export function calculateInvestmentResults(data:InputData) {
    console.log(data);
    let annualData : Array<Result> = [];
    let investmentValue = data.initialInvest;

    for (let i = 0; i < data.duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
        investmentValue += interestEarnedInYear + data.annualInvest;
        const totalInterest =
            investmentValue - data.annualInvest * year - data.initialInvest;
        annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment:data.annualInvest,
            totalInterest: totalInterest,
            totalAmountInvested: data.initialInvest + data.annualInvest * year,
        });
    }
    console.log(annualData);
    return annualData; 
}


