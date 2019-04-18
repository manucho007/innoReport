import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../../core/firestore.service";
import { Report } from "../../interfaces/report";
import { text } from '@angular/core/src/render3';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  report:Report={
    title: "",
    description:""
  }
  constructor(private db: FirestoreService) { }

  ngOnInit() {

  }

  createRequest(){
    this.db.add('requests',this.report);
    this.report.title="";
    this.report.description="";
  }
}
