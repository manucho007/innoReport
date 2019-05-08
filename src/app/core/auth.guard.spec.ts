import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MockAuthService } from '../service-mocks/mock-auth.service';

describe('AuthGuard', () => {

  let fireAuthServiceSpy: jasmine.SpyObj<AngularFireAuth>;
  let firestoreServiceSpy: jasmine.SpyObj<AngularFirestore>
  let authServiceSpy: jasmine.SpyObj<AuthService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: RouterTestingModule }, 
        { provide: AuthService, useValue: MockAuthService }]
      
    });
  });

  it('should exist', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
