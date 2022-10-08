import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {collection, collectionData, doc, Firestore, updateDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore,
              private db: AngularFirestore) { }

  getUser(): Observable<User[]> {
    const placeRef = collection(this.firestore, 'users');
    return collectionData(placeRef, { idField: 'id' }) as Observable<User[]>;
  }
  updateUserHabilitado(_id:any, _habilitado:boolean) {
    this.db.doc(`users/${_id}`).update({habilitado:_habilitado});
  }
}
