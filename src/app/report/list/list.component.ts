import { Component, OnInit } from '@angular/core';
import { Report } from "../../interfaces/report";
import { FirestoreService  } from "../../core/firestore.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  reports: Observable<Report[]>;
  constructor(public db: FirestoreService) { }

  ngOnInit() {
    this.reports = this.db.col$('requests');
  }

}
