import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/autentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInfoI } from 'src/app/models';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

showPassword=false;
passwordToogleIcon='eye';


  newUser: UserInfoI = {
    correo:null,
    password:null,
    nombre:null,
    telefono:null,
    uid:null,
    perfil:'visitante',
  };

  repassword: string= null;

  constructor(private authenticationService:AuthenticationService,
              private firestoreService: FirestoreService,
              public loadingController: LoadingController,
              private router: Router,
              private interaction:InteractionService
              ) { }

  ngOnInit() {}


  togglePassword():void{
this.showPassword=!this.showPassword;
if(this.passwordToogleIcon=='eye'){
this.passwordToogleIcon='eye-off';
}else{
  this.passwordToogleIcon='eye'
}
  }



  async registrarse() {
    if (this.newUser.password != this.repassword) {
      console.log('passwords no coinciden');  
      return;
    }

    this.interaction.presentLoading('Registrando...')
    console.log('User -> ', this.newUser);
    const res = await  this.authenticationService.registrarUser(this.newUser).catch( error=>{
      this.interaction.closeLoading();
      this.interaction.presentToast('Error en tu contraseña o correo')
      console.log('error');
    });
    console.log('res -> ',res);
    if (res) {

      console.log('exito al crear el usuario');
       const path = 'Usuarios';
       const id =  res.user.uid;
       this.newUser.uid = id;
       this.newUser.password = null
       this.firestoreService.saveDoc(path, id,this.newUser)
       this.interaction.closeLoading();
       this.interaction.presentToast('registrado con exito');
       this.router.navigate(['/home'])
       // guardar en la base de datos
    }
    
 }

 async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Usuario Registrado',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
}


}

 

