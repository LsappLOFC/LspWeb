import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {Comments} from "../../interfaces/comments";
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  listOfComents:any;
  listOfContacts:any;
  searchText = "";

  constructor(private commentService: CommentsService,
              private userService: UsersService) {
    this.commentService.getComments().subscribe(data => {
      this.listOfComents = data;
    }, error => console.error(error));

    this.userService.getUser().subscribe(data => {
      this.listOfContacts = data;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toString();

      this.listOfComents = this.listOfComents.filter((contact:any) =>{
        if(searchValue == contact.fechaHoraRegistro){
          return contact.fechaHoraRegistro
        }
        // you can keep on adding object properties here

      });

      console.log(this.listOfComents);
    }
    else {
      this.commentService.getComments().subscribe(data => {

        this.listOfComents = data;

      }, error => console.error(error));
      // if(this.searchText== ""){ you don't need this if

    }
  }

}
