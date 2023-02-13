import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss'],
})
export class RestauranteComponent implements OnInit {



mesas: string []=[];
newMesa: string;
total:number=4


  constructor() { }

  ngOnInit() {}


add(){
  this.mesas.push(this.newMesa)
  console.log(this.mesas)
}
eliminar(i:number) {
  this.mesas.splice(i,1);
}

gettotal(){

this.total==this.total;
}


}
