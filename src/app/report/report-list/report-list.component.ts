import { Component, OnInit } from '@angular/core';
import { Report } from "../../interfaces/report";
import { FirestoreService  } from "../../core/firestore.service";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  reports: Observable<Report[]>;
  reportList: Observable<Report[]>;
  constructor(public db: FirestoreService,
    private router:Router) { }

  ngOnInit() {
    this.reports = this.db.colWithIds$('requests')
  }

  orderBy(name){
    console.log(name);
    this.reports = this.db.colWithIds$("requests", ref => ref.where("category.name", "==", `${name}`) )
  }
  entireList(){
    this.reports = this.db.colWithIds$('requests')
  }
  viewReport(id){
    this.router.navigate(['/report-view',id]);
  }
}
