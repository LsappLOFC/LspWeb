import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from "../../services/users.service";
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText = "";
  listOfContacts:any ;

  formModal: any;

  constructor(private userService: UsersService,
              private http: HttpClient){
    //get request from web api
    this.userService.getUser().subscribe(data => {

      this.listOfContacts = data;

    }, error => console.error(error));
  }


  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
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
