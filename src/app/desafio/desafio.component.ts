import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestApiSumaI, ResponseApiSumaI } from '../models';
import { RealtimedbService } from '../services/realtimedb.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.scss'],
})
export class DesafioComponent implements OnInit {


  stateled: boolean = false;
  versionDB=0;
  respuesta:  ResponseApiSumaI;
  data: RequestApiSumaI={
  nota1: null,
  nota2:null,
  nota3:null,
  }  

  constructor(
  private http:HttpClient,
  public alertController: AlertController,
  private realtimedbService: RealtimedbService,

   
  ) 
  { 
    this.getStateLED();

  }
 
  
  

  ngOnInit() {}



  getsuma(){

    const url='http://localhost:5001/gamificationsoftware/us-central1/promedio3Universidad';
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<ResponseApiSumaI>(url,this.data, httpOptions).subscribe(res=>{
      console.log('recibo respuesta del servidor ->', res);
      this.respuesta=res;
      return;
      
    })
  }

 getsumaCliente(){
  const data= this.data;
  this.respuesta ={
  respuesta:(data.nota1+data.nota2+data.nota3)/3,
  estado:'success',
}

 }
 async guardarLed(){

  console.log("se envio con exito");
  
  let path = 'led';
  await this.realtimedbService.createObject(path, true);
  this.versionDB = this.versionDB + 1;
  path = 'version'
  this.realtimedbService.createObject(path, this.versionDB);

}

async apagarLed(){
  let path = 'led';
  await this.realtimedbService.createObject(path, false);
  this.versionDB = this.versionDB + 1;
  path = 'version'
  this.realtimedbService.createObject(path, this.versionDB);
  
}

getStateLED(){
  const path = 'state-led';
  this.realtimedbService.getObject(path).subscribe( res => {
    this.stateled = res as any;
  })
  
}

}