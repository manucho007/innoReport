import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './report/create/create.component';
import { ListComponent } from './report/list/list.component';
import { ViewComponent } from './report/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFirestore } from "@angular/fire/firestore";
const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'view', component: ViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AngularFirestore],
  exports: [RouterModule],
  declarations: [CreateComponent, ListComponent, ViewComponent]
})
export class AppRoutingModule { }
