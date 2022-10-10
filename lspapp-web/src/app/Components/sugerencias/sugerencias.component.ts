import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";
import {User} from "../../interfaces/user";


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  listOfComents:any;
  listOfUsers:any;
  comments: unknown;
  searchText = "";
  date = '';

  users: any;

  constructor(private commentService: CommentsService,
              private userService: UsersService) {

    this.commentService.getComments().subscribe(data => {
      this.listOfComents = data;
    }, error => console.error(error));
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.listOfUsers = data;
    }, error => console.error(error));
  }

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }



  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toLocaleLowerCase();

      this.listOfComents = this.listOfComents.filter((contact:any) =>{
        return contact.comment.toLocaleLowerCase().match(searchValue);
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


  changeStatusLeido(id: string, estado_leido: boolean) {
    if (estado_leido){
      alert('El mensaje esta marcado como LEIDO, no se puede hacer cambios');
    }
    else {
      estado_leido = true
      this.commentService.updateCommentsLeido(id, estado_leido);
    }
  }

  changeStatusLeidoToNoLeido(id: string, estado_leido: boolean) {
    if (!estado_leido){
      alert('El mensaje esta marcado como NO LEIDO, no se puede hacer cambios');
    }
    else {
      estado_leido = false
      this.commentService.updateCommentsLeido(id, estado_leido);
    }
  }
}
