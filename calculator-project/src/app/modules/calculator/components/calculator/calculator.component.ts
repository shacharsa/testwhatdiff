import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  keyboardKeys: string[] = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "/"];
  public screenInput: string = "";


  ngOnInit(): void {
  }

  digitClicked(key) {
    if (this.screenInput === "ERROR"){
      this.screenInput = "";
    }
    this.screenInput = this.screenInput + key;
  }

  resetClicked() {
    this.screenInput = "";
  }

  equalsClicked() {
    this.calculatorService.getMathExpressionResult(this.screenInput).subscribe(res => {
      if (res.returnCode == 0){
        let exp= this.screenInput;
        this.screenInput = res.result;
        this.calculatorService.addCalculationDetails(exp, this.screenInput);
      } else {
        this.screenInput = "ERROR";
      }
      
    })
  }

}
