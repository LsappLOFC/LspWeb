import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";
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
  users:User[];

  constructor(private userService: UsersService,
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

  openFormModal() {
    this.formModal.show();
    this.userService.getUser().subscribe(data => {
      data.forEach((user:any) => {
        console.log(user.id);
      })
    });
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
