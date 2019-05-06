import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../../core/firestore.service";
import { Report } from "../../interfaces/report";
import { AngularFireStorage, AngularFireUploadTask } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

let imagePathDB;
let inputTags: any[];
@Component({
  selector: 'report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss']
})
export class ReportCreateComponent implements OnInit {
  percentageUpload: Observable<number>;
  imageDownloadURL: Observable<string>;
  report: Report = {
    title: "",
    description: "",
    imagePath: "",
    status: "received",
    tags: []
  }
  constructor(
    private db: FirestoreService,
    private storage: AngularFireStorage,
    public router: Router
  ) { }
  tagss = [
    'government',
    'city',
    'education',
    'well-being',
    'heatlh'
  ];

  ngOnInit() {
    console.log(this.tagss);

  }

  uploadFile(event) {
    // The File object
    const file = event.item(0)
    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }
    // The storage path
    imagePathDB = `reports/${new Date().getTime()}_${file.name}`;
    // The task
    const task = this.storage.upload(imagePathDB, file)

    // observe percentage changes
    this.percentageUpload = task.percentageChanges();
    // console.log(imagePathDB);

    // The ref
    const ref = this.storage.ref(imagePathDB);
    // // The file's download URL
    // this.imageDownloadURL = ref.getDownloadURL();
    task.snapshotChanges().pipe(
      finalize(() => this.imageDownloadURL = ref.getDownloadURL())
    )
      .subscribe();
  }

  createRequest() {
    this.report.imagePath = imagePathDB || "no image";
    this.report.tags = this.tagss;

    // Pushes the request to firestore
    this.db.add('requests', this.report);
    alert("Report Succesfully created");
    this.router.navigate(['/report-list']);

  }

}
