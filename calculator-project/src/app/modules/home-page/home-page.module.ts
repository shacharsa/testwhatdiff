import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [DetailsComponent]
})
export class HomePageModule { }
