import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _auth : AngularFireAuth){}

  async login(email: string, password: string){
    try{
      return await this._auth.signInWithEmailAndPassword(email, password);
    }
    catch(error) {
      alert("No se ha podido hacer el log-in correctamente. Error en los datos ingresados");
      return null;
    }
  }

  SignOut() {
    return this._auth.signOut().then(() => {
      window.alert('La sesión se cerro correctamente');
    });
  }

}
