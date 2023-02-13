import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RealtimedbService {

  constructor(private realtimedb: AngularFireDatabase) { 
  }
  createObject (path:string, data:any) {
    return this.realtimedb.object(path).set(data);
  }

  getObject (path:string) {
    return this.realtimedb.object(path).valueChanges();
  }
}
