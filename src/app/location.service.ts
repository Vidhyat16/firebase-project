import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private httpClient: HttpClient, private store: AngularFirestore) {}

  getLocationList() {
    return this.httpClient.get('http://localhost:3000/first-api');
  }

  getQuery() {
    return this.store.collection('location').snapshotChanges();
  }

  insertQuery(data: any) {
    delete data.id
    return this.store.collection('location').add(data);
  }

  updateQuery(data: any) {
    const id = data.id;
    delete data.id;
    console.log(data);
    return this.store.collection('location').doc('location/' + id).update(data);
    
    //doc('location/' + id).update(data);
  }

  deleteQuery(data: any) {
    //delete data.id;
    console.log(data.id)
    return this.store.collection('location').doc(data.id).delete();
  }
}
