import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DownloadUrlPipe } from '../../core/download-url.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';


import { ReportViewComponent } from './report-view.component';
import { AngularFirestore } from '@angular/fire/firestore';

xdescribe('ReportViewComponent', () => {
  let component: ReportViewComponent;
  let fixture: ComponentFixture<ReportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReportViewComponent,
        DownloadUrlPipe
      ],
      providers: [
        AngularFirestore,
        { provide: ActivatedRoute, useValue: RouterTestingModule }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
