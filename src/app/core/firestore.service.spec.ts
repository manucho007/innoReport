import { TestBed } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';

xdescribe('FirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });
});
