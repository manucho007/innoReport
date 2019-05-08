import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListComponent } from './report-list.component';
import { MockFirestoreService } from '../../service-mocks/mock-firestore.service';
import { FirestoreService } from '../../core/firestore.service'
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('ReportListComponent', () => {
  let component: ReportListComponent;
  let fixture: ComponentFixture<ReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportListComponent ],
      providers: [
        { provide: Router, useValue: RouterTestingModule }, 
        { provide: FirestoreService, useClass: MockFirestoreService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
