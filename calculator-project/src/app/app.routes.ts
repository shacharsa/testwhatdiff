import { Route } from '@angular/router';
import { CalculatorLobbyComponent } from './modules/calculator/components/calculator-lobby/calculator-lobby.component';
import { DetailsComponent } from './modules/home-page/components/details/details.component';

export const appRoutes: Route[]=[
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'homepage'
  },
  {
    path: 'homepage',
    pathMatch: 'full',
    loadChildren: () => import('../app/modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'calculator-lobby',
    pathMatch: 'full',
    loadChildren: () => import('../app/modules/calculator/calculator.module').then(m => m.CalculatorModule)
  }
];