import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  constructor(private _auth : LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  logIn():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
    });
  }
}
