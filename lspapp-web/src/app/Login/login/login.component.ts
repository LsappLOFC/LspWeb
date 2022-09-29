import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];

  constructor(private loginService: LoginService) {
    this.users = [{
      eliminado: false,
      email: 'email@example',
      fechaHoraActualizacion: '00:00',
      fechaHoraRegistro: '00:00',
      habilitado: false,
      imageUrl: 'url',
      name: 'example',
      rol: 'none',
    }];
  }

  ngOnInit(): void {
    this.loginService.getAllUser().subscribe(users => {
      console.log(users);
    })
  }

}
