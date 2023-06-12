import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageModule } from './modules/home-page/home-page.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
