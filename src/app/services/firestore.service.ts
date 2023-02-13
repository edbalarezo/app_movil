import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  saveDoc(path: string, id: string, data:any) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getDocumentId<tipo>(path: string, id: string) {
    return this.firestore.collection<tipo>(path).doc(id).valueChanges()
  }

  getCollection<tipo>(path: string) {
    return this.firestore.collection<tipo>(path).valueChanges()
  }

  getId() { return this.firestore.createId(); }



}