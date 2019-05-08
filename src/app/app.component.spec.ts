import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { NavbarComponent} from './navigation/navbar/navbar.component';
import { AuthService } from './core/auth.service';
import { MockAuthService } from './service-mocks/mock-auth.service';
import { Component, OnInit } from '@angular/core';

//Mock Components — to avoid all sort of dependency/injection problems, mock components are used instead of real ones

@Component({
  selector: 'user-profile',
  templateUrl: './user/user-profile/user-profile.component.html',
})
export class MockUserProfileComponent {}

@Component({
  selector: 'app-navbar',
  templateUrl: './navigation/navbar/navbar.component.html',
})
export class MockNavbarComponent {}

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockUserProfileComponent,
        MockNavbarComponent
      ],
      providers: [
        {provide: AuthService, useValue: MockAuthService}
      ]
    }).compileComponents();

    TestBed.get(AuthService);

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
