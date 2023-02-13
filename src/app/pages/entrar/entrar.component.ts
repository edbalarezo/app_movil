import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* import { type } from 'os'; */
import { AuthenticationService } from 'src/app/services/autentication.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
})
export class EntrarComponent implements OnInit {

  credenciales={

    correo:null,
    password:null
  }
  type="string";


  constructor(private  authenticationService: AuthenticationService,
              private router:Router,
              private interaction: InteractionService) {
      console.log("hola estoy en login");   
  }

  ngOnInit() {
  }

  openMenu() {
    console.log('estoy en open menu');
  }

  async login() {
    await this.interaction.presentLoading('Ingresando...')
    console.log('credenciales -> ', this.credenciales);
     const respuesta =  await this.authenticationService.login(this.credenciales.correo,this.credenciales.password).catch( error=>{
       console.log('error');
       this.interaction.closeLoading();
       this.interaction.presentToast('Usuario o contraseña invalido')
      });
      if (respuesta) {
        console.log('res -> ', respuesta);
        this.interaction.closeLoading();
        this.interaction.presentToast('Ingresado con exito');
        this.router.navigate(['/home'])
    }
    }
  
 /*    mostrar() {
      var tipo = document.getElementById("password");
      if( tipo.type == "password"){
            tipo.type = "text";
      }else{
          tipo.type = "password";
      }
    }
 */
  
  }

