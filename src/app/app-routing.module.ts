import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ActividadesComponent } from './pages/actividades/actividades.component';
import { HomeComponent } from './pages/home/home.component';
import { EntrarComponent } from './pages/entrar/entrar.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { PlantillaComponent } from './plantilla/plantilla.component';
import { NivelesComponent } from './pages/niveles/niveles.component';
import { PrimernivelComponent } from './pages/niveles/primernivel/primernivel.component';
 import { DesafioComponent } from './desafio/desafio.component'; 
import { RestauranteComponent } from './restaurante/restaurante.component';
import { SegundonivelComponent } from './pages/niveles/segundonivel/segundonivel.component';
import { TercernivelComponent } from './pages/niveles/tercernivel/tercernivel.component';
import { ListadeestudiantesComponent } from './pages/listadeestudiantes/listadeestudiantes.component';
import { InterfazpantallaComponent } from './interfazpantalla/interfazpantalla.component';
import { map } from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const uidAdmin='tjOx0sESvYf6Q70agxXsOxXy9WF2';
const onlyAdmin = () => map((user:any) => !!user && user.uid === uidAdmin);

const routes: Routes = [
  
  {path: 'plantilla', component: PlantillaComponent},
  {path: '', component: InterfazpantallaComponent}, 
  {path:'actividades', component: ActividadesComponent,  canActivate: [AngularFireAuthGuard]},
  {path:'home',component: HomeComponent,  canActivate: [AngularFireAuthGuard]},


  {path: 'entrar', component: EntrarComponent},
  {path: 'opciones', component: OpcionesComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'registro', component: RegistroComponent},
 

  {path: 'primernivel', component: PrimernivelComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'niveles', component: NivelesComponent, canActivate: [AngularFireAuthGuard]},
   {path: 'desafio', component: DesafioComponent, canActivate: [AngularFireAuthGuard]}, 
   {path: 'restaurante', component: RestauranteComponent, canActivate: [AngularFireAuthGuard]}, 
   {path: 'segundonivel', component: SegundonivelComponent, canActivate: [AngularFireAuthGuard]}, 
   {path: 'tercernivel', component: TercernivelComponent, canActivate: [AngularFireAuthGuard]}, 
   {path: 'listadeestudiantes', component: ListadeestudiantesComponent, canActivate: [AngularFireAuthGuard]   }, 
  

  

];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
