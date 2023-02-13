import { Component, OnInit, } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Cupon } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/autentication.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

estudiante: Cupon[]=[];
genero:String="masculino";
addNuevo: boolean=false;
loading: any;



editarEnable: boolean= false;

correo: string;
constructor(  public loadingController: LoadingController,
              public toastController: ToastController,
              private AutenticationService: AuthenticationService)

               {
  this.loadEstudiante();
}

ngOnInit() {

  this.AutenticationService.stateUser().subscribe( res => {
    console.log('res ->', res);
    if (res) {
        this.correo = res.email
      
    }
});




}

loadEstudiante(){
  this.estudiante=[

       {
        nombre: "Esteban",

       },

       {
        nombre: "paula",
   
       
       },

       {
        nombre: "David",

      
       }
  ];

}


addNuevoEnable(){
  this.addNuevo=true;
}



cancelar() {
  this.addNuevo = false;
  this.resetForm()
}

resetForm() {

}

editar(estudiante:Cupon) {
  console.log('Estudiante editado -> ', estudiante);
  this.editarEnable = true;
  this.addNuevo = true;

}

eliminar(i:number) {
      this.estudiante.splice(i);
}

async presentLoading() {
   this.loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Guardando...',
    duration: 2000
  });
  await this.loading.present();
  await this.loading.onDidDismiss();
  console.log('Guardado con exito');
}

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

}

