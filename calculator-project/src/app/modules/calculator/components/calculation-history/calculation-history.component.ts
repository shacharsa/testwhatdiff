import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ICalculationDetails } from '../../models/ICalculationDetails.model';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.scss']
})
export class CalculationHistoryComponent implements OnInit {
  public calculationArray: ICalculationDetails[]= [];
  columnsToDisplay = ["seqNo", "expression", "result"];
  @ViewChild(MatTable) table: MatTable<any>;
  
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculationArray = this.calculatorService.calculationArray;
    this.calculatorService.calculationArrayChanged.subscribe(res=>{
      this.calculationArray= res;
      this.table.renderRows();
    });
  }

}
