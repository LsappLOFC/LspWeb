import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./Components/login/login.component";
import {HomeComponent} from "./Components/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import { NavComponent } from './Components/nav/nav.component';
import { SugerenciasComponent } from './Components/sugerencias/sugerencias.component';
import {NgbAccordionModule, NgbAlertModule, NgbDatepickerModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {OrderModule} from "ngx-order-pipe";
import { RecomendacionesComponent } from './Components/recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    SugerenciasComponent,
    RecomendacionesComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbAccordionModule,
        NgbAlertModule,
        NgbDatepickerModule,
        OrderModule,
        NgbDropdownModule,
    ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
