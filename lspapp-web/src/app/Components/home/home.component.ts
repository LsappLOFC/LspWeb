import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText = "";
  listOfContacts:any;

  id = "";
  habilitado: boolean = true;

  formModal: any;
  users:User[];

  constructor(private userService: UsersService,
              private _router: Router,
              private http: HttpClient){
    this.users = [];
    this.userService.getUser().subscribe(data => {
      this.listOfContacts = data;
      this.users = data;
    }, error => console.error(error));
  }


  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal(id:string, habilitado: boolean) {
    this.formModal.show();
    this.id = id;
    this.habilitado = habilitado;
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
    if (this.habilitado){
      this.habilitado = false
      this.userService.updateUserHabilitado(this.id, this.habilitado);
    }
    else {
      this.habilitado = true
      this.userService.updateUserHabilitado(this.id, this.habilitado);
    }
  }

  refresh(){
    window.location.reload()
  }

  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toLocaleLowerCase();

      this.listOfContacts = this.listOfContacts.filter((contact:any) =>{
        return contact.email.toLocaleLowerCase().match(searchValue )
          ;
        // you can keep on adding object properties here

      });

      console.log(this.listOfContacts);
    }
    else {
      this.userService.getUser().subscribe(data => {

        this.listOfContacts = data;

      }, error => console.error(error));
      // if(this.searchText== ""){ you don't need this if

    }
  }
}
