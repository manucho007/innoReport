import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAdminComponent } from './report-admin.component';
import { DownloadUrlPipe } from '../../core/download-url.pipe';

xdescribe('ReportAdminComponent', () => {
  let component: ReportAdminComponent;
  let fixture: ComponentFixture<ReportAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DownloadUrlPipe],
      declarations: [ ReportAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
