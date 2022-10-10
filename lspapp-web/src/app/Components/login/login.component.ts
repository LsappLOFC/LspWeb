import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {User} from "../../interfaces/user";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User[];
  validacion: boolean = false;

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
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })
  }

  logIn():void{
    var mail = this.email.nativeElement.value;
    var contra = this.password.nativeElement.value;
    if (mail == '' && contra == '' || mail == '' || contra == '') {
      alert("Completar los campos correctamente");
    }
    if(mail != null && contra != null){
      for (var i = 0; i < this.user.length; i++){
        if (mail == this.user[i].email && this.user[i].rol == 'admin'){
          this.validacion = true;
        }
      }
    }
    if (this.validacion){
      this._auth.login(mail, contra).then(res=> {
        this._router.navigate(['/home']);
      });
    }
    else {
      alert("Usuario incorrecto");
    }
  }
}
