import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/firestore.service';
import { Observable } from 'rxjs';
import { Report } from 'src/app/interfaces/report';

@Component({
  selector: 'report-admin',
  templateUrl: './report-admin.component.html',
  styleUrls: ['./report-admin.component.scss']
})
export class ReportAdminComponent implements OnInit {
  reportDoc:Observable<Report>;
  reportList:Observable<Report[]>
  constructor(public db:FirestoreService) { }

  ngOnInit() {
    // this.reportList = this.db.colWithIds$("requests", ref => ref.where("category is", "==", "A") )
    this.reportList = this.db.colWithIds$('requests');
  }

  updateReport(reportid, reportstatus){
    reportstatus
    this.db.update(`requests/${reportid}`,{status:reportstatus})
  }

}
