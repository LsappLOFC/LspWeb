import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {Comments} from "../interfaces/comments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: Firestore,
              private db: AngularFirestore) { }

  getComments(): Observable<Comments[]> {
    const placeRef = collection(this.firestore, 'comments');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Comments[]>;
  }
  updateCommentsLeido(_id:any, _leido:boolean) {
    this.db.doc(`comments/${_id}`).update({leido:_leido});
  }
}
