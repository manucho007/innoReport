import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportCreateComponent } from './report/report-create/report-create.component';
import { ReportListComponent } from './report/report-list/report-list.component';
import { ReportViewComponent } from './report/report-view/report-view.component';
import { HomeComponent } from './navigation/home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component'

import { AngularFirestore} from "@angular/fire/firestore";
import { AngularFireAuth} from "@angular/fire/auth";
import { AngularFireStorage } from "@angular/fire/storage";

import { AuthGuard } from './core/auth.guard';
import { DownloadUrlPipe } from './core/download-url.pipe';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'report-create', component: ReportCreateComponent,canActivate:[AuthGuard] },
  { path: 'report-list', component: ReportListComponent,canActivate:[AuthGuard] },
  { path: 'report-view/:id', component: ReportViewComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    AngularFirestore,
    AuthGuard,
    AngularFireAuth,
    AngularFireStorage
  ],
  exports: [RouterModule],
  declarations: [
    ReportCreateComponent, 
    ReportListComponent, 
    ReportViewComponent, 
    HomeComponent,
    UserLoginComponent,
    DownloadUrlPipe
  ]
})
export class AppRoutingModule { }
