
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CalculatorLobbyComponent } from './components/calculator-lobby/calculator-lobby.component';

export const routes: Route[]=[
    {
        path: '',
        pathMatch: 'full',
        component: CalculatorLobbyComponent,       
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class CalculatorRoutingModule{

}