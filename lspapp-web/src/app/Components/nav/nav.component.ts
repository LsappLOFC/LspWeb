import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _auth : LoginService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  SignOut(){
    this._auth.SignOut();
    this._router.navigate(['/login']);
  }

}
