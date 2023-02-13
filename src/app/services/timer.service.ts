import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timer:any;
  tiempo={
    minutos:0,
    segundos:0,
  }

  inittime= new Date();
  constructor() { 
    this.setTimer();
  }

 setTimer(){
/*    console.log("estoy en el tiempo => ", this.tiempo, this.inittime);  */

    this.tiempo.segundos ++;
    if(this.tiempo.segundos===60){
      this.tiempo.segundos=0;
      this.tiempo.minutos ++;
    }
    if(this.tiempo.minutos===60){
      this.tiempo.minutos=0;
      this.tiempo.segundos=0;
    }

    //funcion que se ejecuta despues de un tiempo
    this.timer=setTimeout(()=>{
     this.setTimer()
    },1000)
  
  }

  parartimer(){
    clearTimeout(this.timer);
  }

}
