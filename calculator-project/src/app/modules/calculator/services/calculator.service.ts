import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICalculationDetails } from '../models/ICalculationDetails.model';
import { CustomEncoder } from './encoder.service';


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public calculationArray: ICalculationDetails[]=[];
  public calculationArrayChanged= new Subject<ICalculationDetails[]>();
  seqNo= 0;

  constructor(private http: HttpClient) { }

  public getMathExpressionResult(expression: string): Observable<any>{
    const params = new HttpParams({encoder: new CustomEncoder()}).set("expression", expression);
    return this.http.get("https://localhost:44377/api/calculator/getMathExpressionResult" , {params});
  }

  public addCalculationDetails(expression: string, result: string){
    this.calculationArray.push({seqNo: ++this.seqNo, expression: expression, result: result});
    this.calculationArrayChanged.next(this.calculationArray);
  }
}
