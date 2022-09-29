import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  getUser(): Observable<User[]> {
    const placeRef = collection(this.firestore, 'users');
    return collectionData(placeRef, { idField: 'id' }) as Observable<User[]>;
  }
}
