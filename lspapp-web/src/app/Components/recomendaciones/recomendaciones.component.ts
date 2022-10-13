import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  listOfComents:any;
  listOfUsers:any;
  comments: unknown;
  searchText = "";
  box: number = 1;
  selecteEstado: string = '';
  users: any;

  constructor(private commentService: CommentsService,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(data => {
      this.listOfComents = data;
    }, error => console.error(error));

    this.userService.getUser().subscribe(data => {
      this.listOfUsers = data;
    }, error => console.error(error));
  }

  getEstado(event: any){
    this.selecteEstado = event.target.value;

    if (this.selecteEstado == 'SELECCIONARESTADO') {
      this.box = 1;
    }
    if (this.selecteEstado == 'LEIDO') {
      this.box = 2;
    }
    if (this.selecteEstado == 'NOLEIDO') {
      this.box = 3;
    }
  }

  getValueEstado(){
    console.log(this.box);
    return this.box;
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
