import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, CheckboxCustomEvent } from '@ionic/angular';
import { ResultadoJuego, UserInfoI } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listadeestudiantes',
  templateUrl: './listadeestudiantes.component.html',
  styleUrls: ['./listadeestudiantes.component.scss'],
})
export class ListadeestudiantesComponent implements OnInit {

@Input() usuario:ResultadoJuego;

  usuarios: UserInfoI[]=[];

  userSelected:UserInfoI;

  jugada: ResultadoJuego[]=[];

  
  presentingElement = null;

  constructor(private actionSheetCtrl: ActionSheetController,
    private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.getUsuarios();


  }
  

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  getUsuarios(){
   const path='Usuarios/'
   this.firestoreService.getCollection<UserInfoI>(path).subscribe(res =>{
        console.log("los usres son ",res);
        this.usuarios = res
   });
   }

   selectuser(user: UserInfoI) {
        this.userSelected = user;
        this.loadJugudadas();
   }

   loadJugudadas() {
      const path = 'Usuarios/' + this.userSelected.uid + '/jugadas';
      this.firestoreService.getCollection<ResultadoJuego>(path).subscribe ( res => {
            this.jugada=res;
        console.log('resultados loaded successfully', res);
    
      })

   }
 
 }






