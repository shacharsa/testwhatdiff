import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorLobbyComponent } from './components/calculator-lobby/calculator-lobby.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { FormsModule } from '@angular/forms';
import { CalculationHistoryComponent } from './components/calculation-history/calculation-history.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    CalculatorComponent, 
    CalculatorLobbyComponent, CalculationHistoryComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    MatTableModule     
    
  ],
  exports: [
    CalculatorComponent, 
    CalculatorLobbyComponent
  ]
})
export class CalculatorModule { }
