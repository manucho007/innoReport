import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ReportCreateComponent } from './report-create.component';
import { MockAuthService } from '../../service-mocks/mock-auth.service'
import { AngularFirestore } from '@angular/fire/firestore'
import { AuthService } from '../../core/auth.service';

xdescribe('ReportCreateComponent', () => {
  let component: ReportCreateComponent;
  let fixture: ComponentFixture<ReportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: MockAuthService },
        AngularFirestore,

      ],
      declarations: [ ReportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
