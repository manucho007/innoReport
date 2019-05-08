import { TestBed, async, inject } from '@angular/core/testing';

import { AuthAdminGuard } from './auth-admin.guard';
import { MockAuthService } from '../service-mocks/mock-auth.service'
import { AuthService } from './auth.service'
import { RouterTestingModule } from '@angular/router/testing';


describe('AuthAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthAdminGuard,
        { provide: AuthService, useValue: MockAuthService}
      ]
    });
  });

  it('should exist', inject([AuthAdminGuard], (guard: AuthAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
