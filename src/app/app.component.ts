import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoI } from './models';
import { AuthenticationService } from './services/autentication.service';
import { FirestoreService } from './services/firestore.service';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login: boolean = false;
  rol:'visitante'| 'admin'=null;

  constructor(private auth:AuthenticationService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router,
    ) {

      this.auth.stateUser().subscribe( res => {
        if(res){
          console.log('esta logueado');
          this.login=true;
          this.getDatosUser(res.uid)
        }else{
          console.log('no esta logueado');
          this.login=false;
          
        }
      });
    }
    ngOnInit() {}


loginApp(){
  this.login=true;
}

  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesión Finalizada');
    this.router.navigate(['/plantilla']);
  }

  getDatosUser(uid:string){
  const path = 'Usuarios';
  const id = uid;
  this.firestore.getDocumentId<UserInfoI>(path, uid).subscribe(res => {

console.log('datos-> ', res);

if (res){
 this.rol=res.perfil
}

});
  }



}
