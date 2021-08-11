import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Header/nav/nav.component';
import { MainComponent } from './footer/main/main.component';
import { MainpageComponent } from './body/mainpage/mainpage.component';
import { ContactComponent } from './body/contact/contact.component';
import { ButtonComponent } from './common/button/button.component';
import { CategoriesComponent } from './body/categories/categories.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    MainpageComponent,
    ContactComponent,
    ButtonComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
