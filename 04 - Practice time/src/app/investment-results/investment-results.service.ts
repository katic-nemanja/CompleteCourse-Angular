import { Injectable, output, signal } from "@angular/core";
import type { Result } from "../shared/result.model";
import { InputData } from "../shared/result.model";

@Injectable({providedIn:'root'})

export class InvestmentResult{

    // izlaz = output<Result>();
    // resultData = output<Array<Result>>();
    // resultData?:Array<Result>;

    resultData = signal<Array<Result>|undefined>(undefined);



    calculateInvestmentResults(data:InputData) {
        console.log(data);
        let annualData = [];
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
        this.resultData.set(annualData);
        // this.resultData = annualData;
        // return annualData; 
    }

    getResultData(){
        return this.resultData;
    }

}




