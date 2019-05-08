import { Injectable } from '@angular/core';
import { Report } from '../interfaces/report'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import * as firebase from 'firebase/app';

// The T is a Typescript generic that allows us to use our custom interfaces

export class MockFirestoreService {
    private mockReport: Report = {
        title: "MockReport",
        description: "Mock description of mock report"
    } 

  constructor() { }

  col<T>(ref: any, queryFn?): any {
    return of(this.mockReport);
  }

  doc<T>(ref: any): any {
    return of(this.mockReport);
  }

  // ****Get Data ****** Snapshot
  doc$<T>(ref: any): Observable<any> {
    return of(this.mockReport);
  }

  col$<T>(ref: any, queryFn?): Observable<any[]> {
    return of([this.mockReport, this.mockReport, this.mockReport]);

  } 

  // Return the mock collection. Can be used to return <any> type of info, but currently used to only return reports
  // So it will return reports in this mock
  colWithIds$(x, y): Observable<any[]> {
    return of([this.mockReport,this.mockReport,this.mockReport]);
  }

  // Replaced firebase server timestamp with local timestamp
  get timestamp() {
    let date = new Date();
    return date.getTime();
  }

  // Components don't seem to be doing anything with the returns from these methods, so for now methods won't return anything
  // Rewrite if methods will actually use return from method
  update<T>(ref: any, data: any) {}

  set<T>(ref: any, data: any) {}

  add<T>(ref: any, data) {}
}
