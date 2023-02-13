import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/autentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
/* import { Firestore } from '@google-cloud/firestore'; */

import { InteractionService } from 'src/app/services/interaction.service';
/* import { FirestoreService } from 'src/app/services/firestore.service'; */
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-segundonivel',
  templateUrl: './segundonivel.component.html',
  styleUrls: ['./segundonivel.component.scss'],
})
export class SegundonivelComponent implements OnInit {

  tiempo={
    minutos:0,
    segundos:0,
  }
  cartas: any[]=[];
  primerClick: CartaI;
  intentos: number=0;
  cont = 0;
  aciertos=0
  fecha:Date


  constructor(
    public timerService:TimerService,
    private interaction: InteractionService,
    private router: Router,
    private firestore: FirestoreService,
    private auth: AuthenticationService
    /* firestore: Firestore */
  ) { 
    setTimeout(()=>{
      this.tiempo=this.timerService.tiempo;
     },1000)
  }



  ngOnInit() {
    this.login();
    this.setCartas();
  
  }

  async login() {
    await this.interaction.presentLoading('Iniciando')
    
    this.interaction.presentToast('Comienza ahora - Buena Suerte')

       this.interaction.closeLoading();
      }

  setCartas() {
     const carta1: CartaI = {
        imagen: "assets/img/limon.png",
        enable: false,
        position: 0,
        success: false
     };
     const carta2: CartaI = {
      imagen: "assets/img/limon.png",
      enable: false,
      position: 0,
      success: false
     };
     const carta3: CartaI = {
      imagen: "assets/img/manzana.png",
      enable: false,
      position: 0,
      success: false
     };
     const carta4: CartaI = {
      imagen: "assets/img/manzana.png",
      enable: false,
      position: 0,
      success: false
     };
     const carta5: CartaI = {
      imagen: "assets/img/pera.png",
      enable: false,
      position: 0,
      success: false
     };
     const carta6: CartaI = {
      imagen: "assets/img/pera.png",
      enable: false,
      position: 0,
      success: false
     };
/*      const carta7: CartaI = {
      imagen: "assets/img/aguacate.png",
      enable: false,
      position: 0,
      success: false
     };
     const carta8: CartaI = {
      imagen: "assets/img/aguacate.png",
      enable: false,
      position: 0,
      success: false
     }; */


  this.cartas.push(carta2);
  this.cartas.push(carta6);
  this.cartas.push(carta5);
 /*  this.cartas.push(carta8); */
  this.cartas.push(carta3);
  this.cartas.push(carta4);
  this.cartas.push(carta1);
/*   this.cartas.push(carta7); */
    

  }

 async vuelta(carta: CartaI) {
     carta.enable = true;
     console.log('vuelta ->', this.cont);
     if (this.cont == 0) {
       this.primerClick = carta;
     }
     if (this.cont == 1) {
        this.intentos=this.intentos+1

        if (carta.imagen == this.primerClick.imagen) {
          this.interaction.presentToast('Excelente');
            console.log('muy bien');
            carta.success = true;
            this.aciertos++;
            if(this.aciertos==3){
            this.timerService.parartimer()

            this.interaction.presentLoading('FELICIDADES ACABASTE EL NIVEL CON EXITO') 
            this.interaction.presentToast('Prueba el Siguiente Nivel');
            setTimeout(() => {
              this.interaction.closeLoading();
            }, 2000);
                 this.router.navigate(['/niveles'])
   
            //felicitar al usuario
            const data:ResultadoJuego ={
              intentos:this.intentos,
              fecha:new Date(),
              tiempo:this.tiempo,
              nivel:2,
              id: this.firestore.getId(),  
            }
            const uid=  await this.auth.getUid();
            const path = 'Usuarios/' + uid + '/jugadas';
         
            this.firestore.saveDoc(path,data.id,data).then(() => {
              this.interaction.presentToast('Se guardo correctamente tu progreso');
            })

            }
            this.primerClick.success = true;
        } else {
          this.interaction.presentToast('Intenta de Nuevo');
          console.log('mal');
          setTimeout(() => {
            this.reset()
          }, 2000);
        }
        this.cont = 0;
        return;
     }
     this.cont = this.cont + 1;
  }

  reset() {
    
     this.cartas.forEach( carta => {
      if (!carta.success) {
        carta.enable = false;
      }
     })
  }




  //clearTimeout(tiempo)

}


interface CartaI {
  imagen: string;
  enable: boolean;
  position: number;
  success: boolean;
}
interface ResultadoJuego{
  intentos:number
  fecha:Date
  tiempo:{
    minutos:number
    segundos:number
        }
  nivel:number
  id:string
      }
