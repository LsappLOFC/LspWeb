import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";

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

  selectedDay: string = '';

  users: any;
  private filterValue: string | undefined;
  private dataSource: any;

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

  updateFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.listOfComents.filter = this.filterValue.trim().toLowerCase();
    console.log(this.listOfComents.filter);

    if (this.listOfComents.paginator) {
      this.listOfComents.paginator.firstPage();
    }
  }

  selectChangeHandler (event: any) {
    this.selectedDay = event.target.value;

    let primero: boolean = true;


    if (this.selectedDay == 'LEIDO'){
      console.log(this.selectedDay);

      console.log('Entraremos al for');

      console.log(this.listOfComents.length);

      for (var i = 0; i < this.listOfComents.length; i++){
        if (this.listOfComents[i].estado_leido == true){
          console.log(this.listOfComents[i]);
          console.log('filtro');

          this.listOfComents = this.listOfComents.filter((contact:any) =>{
            return contact.estado_leido.search(primero);
          });

        }
      }

    }


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
