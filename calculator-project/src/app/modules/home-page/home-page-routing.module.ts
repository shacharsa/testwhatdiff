
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';

export const routes: Route[]=[
    {
        path: '',
        pathMatch: 'full',
       redirectTo: 'homepage'      
    },
    {
        path: 'homepage',
        pathMatch: 'full',
        component: DetailsComponent,       
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    
})
export class HomePageRoutingModule{

}