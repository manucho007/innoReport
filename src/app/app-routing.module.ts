import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReportCreateComponent } from './report/report-create/report-create.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { HomeComponent } from './navigation/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'report-create', component: ReportCreateComponent },
  { path: 'report-list', component: ReportListComponent },
  { path: 'report-view', component: ReportViewComponent },
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
  declarations: [ReportCreateComponent, ReportListComponent, ReportViewComponent, HomeComponent]
})
export class AppRoutingModule { }
