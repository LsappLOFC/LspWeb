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
  updateCommentsLeido(_id:any, _estado_leido:boolean) {
    this.db.doc(`comments/${_id}`).update({estado_leido:_estado_leido});
  }

  getCommentById(id:string){
    return this.db.collection('comments').doc(id).valueChanges()
  }
}
