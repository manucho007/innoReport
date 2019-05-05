import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Pipe({
  name: 'downloadUrl'
})
export class DownloadUrlPipe implements PipeTransform {
  // Pipe gets the downloadURL from the storage ref in firebase
  constructor(public storage: AngularFireStorage) { }
  transform(featuredPhoto: any): any {
    let photo = this.storage.ref(featuredPhoto).getDownloadURL()
    return photo;
  }

}
