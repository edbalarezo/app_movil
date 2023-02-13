import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/autentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  constructor(
    private auth:AuthenticationService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router,
  ) { }

  ngOnInit() {}


  logout(){
    this.auth.logout();
    this.interaction.presentToast('Sesión Finalizada');
    this.router.navigate(['/plantilla']);
  }

}
