import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';


import { ActividadesComponent } from './pages/actividades/actividades.component';

import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';


import { EntrarComponent } from './pages/entrar/entrar.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



import { NivelesComponent } from './pages/niveles/niveles.component';
import { PrimernivelComponent } from './pages/niveles/primernivel/primernivel.component';
 import { DesafioComponent } from './desafio/desafio.component'; 
import { RestauranteComponent } from './restaurante/restaurante.component';
import { SegundonivelComponent } from './pages/niveles/segundonivel/segundonivel.component';
import { TercernivelComponent } from './pages/niveles/tercernivel/tercernivel.component';
import { ListadeestudiantesComponent } from './pages/listadeestudiantes/listadeestudiantes.component';
import {HttpClientModule}from '@angular/common/http'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { InterfazpantallaComponent } from './interfazpantalla/interfazpantalla.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActividadesComponent,
    EntrarComponent,
    PlantillaComponent,
    RegistroComponent,
    OpcionesComponent,
    NivelesComponent,
    PrimernivelComponent,
    DesafioComponent ,
    RestauranteComponent,
    SegundonivelComponent,
    TercernivelComponent,
    ListadeestudiantesComponent,
    InterfazpantallaComponent
    
   
   
    



  ],
  entryComponents: [ ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireDatabaseModule
    
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
