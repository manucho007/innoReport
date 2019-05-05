import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from "./auth.service";
import { FirestoreService } from './firestore.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DownloadUrlPipe } from './download-url.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [
    FirestoreService,
    AuthService
  ]
})
export class CoreModule { }
