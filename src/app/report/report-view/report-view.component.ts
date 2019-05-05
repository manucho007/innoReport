import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../../core/firestore.service";
import { Report } from "../../interfaces/report";
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {
  reportDoc:Observable<Report>
  constructor(private route:ActivatedRoute, public db:FirestoreService) { }

  ngOnInit() {
  var idReport = this.route.snapshot.params.id;
  this.reportDoc = this.db.doc$(`requests/${idReport}`);
  }

}
