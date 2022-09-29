import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: Firestore) { }

  getAllUser() : Observable<User[]>{
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id'}) as Observable<User[]>;
  }
}
