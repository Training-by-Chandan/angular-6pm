import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';

import {MainpageComponent} from './body/mainpage/mainpage.component';
import {ContactComponent} from './body/contact/contact.component';
import {CategoriesComponent} from './body/categories/categories.component';

const routes: Routes = [
{path:'main',component:MainpageComponent}, 
{path:'contact',component: ContactComponent},
{path:'categories',component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
