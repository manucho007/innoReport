import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './report/create/create.component';
import { ListComponent } from './report/list/list.component';
import { ViewComponent } from './report/view/view.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [CreateComponent, ListComponent, ViewComponent]
})
export class AppRoutingModule { }
