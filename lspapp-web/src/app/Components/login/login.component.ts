import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User[];


  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(private _auth : LoginService,
              private userService: UsersService,
              private _router: Router) {
    this.user = [{
      eliminado: false,
      email: 'example@example',
      fechaHoraActualizacion: '00:00',
      fechaHoraRegistro: '00:00',
      habilitado: false,
      imageUrl: 'none',
      name: 'none',
      rol: 'none',
    }];
  }

  ngOnInit(): void {
  }

  logIn():void{
    var mail = this.email.nativeElement.value;
    var contra = this.password.nativeElement.value;

    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      this._router.navigate(['/home']);
    });

    /*
        if (mail == '' && contra == '' || mail == '' || contra == ''){
      alert("No se ha podido hacer el log-in correctamente. Error en los datos ingresados");
    }

    this.userService.getUser().subscribe(users => {
      for (var i = 0; i < users.length; i++){
        if (mail == users[i].email &&
          users[i].rol == 'admin'){
          this.validacion = true;
        }
      }
    })


    if (this.validacion == true){
      this._auth.login(mail, contra).then(res=> {
        this._router.navigate(['/home']);
      });
    }
  */
  }
}
