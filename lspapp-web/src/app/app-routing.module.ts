import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Components/login/login.component";
import {HomeComponent} from "./Components/home/home.component";
import {SugerenciasComponent} from "./Components/sugerencias/sugerencias.component";
import {RecomendacionesComponent} from "./Components/recomendaciones/recomendaciones.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sugerencias', component: SugerenciasComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
