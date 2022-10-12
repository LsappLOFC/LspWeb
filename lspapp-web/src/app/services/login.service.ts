import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  validacion: boolean = true;

  constructor(private _auth : AngularFireAuth,
              private _router: Router){}

  async login(email: string, password: string, ){
    try{
      this.validacion = true;
      return await this._auth.signInWithEmailAndPassword(email, password);
    }
    catch(error) {
      alert("Datos del usuario ingresado incorrectamente, revisar el email y el password");
      this.validacion = false;
      return null;
    }
  }

  getvalidacion(){
    return this.validacion;
  }

  SignOut() {
    return this._auth.signOut().then(() => {
      window.alert('La sesión se cerro correctamente');
    });
  }

}
