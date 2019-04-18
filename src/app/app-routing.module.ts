import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportCreateComponent } from './report/report-create/report-create.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportViewComponent } from './report/report-view/report-view.component';

const routes: Routes = [
  { path: '', component: ReportListComponent },
  { path: 'report-create', component: ReportCreateComponent },
  { path: 'report-list', component: ReportListComponent },
  { path: 'report-view', component: ReportViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ReportCreateComponent, ReportListComponent, ReportViewComponent]
})
export class AppRoutingModule { }
