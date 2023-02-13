
export interface Cupon {
     nombre: String;

 }

 export interface UserInfoI {
    correo:string;
    password:string;
    nombre:string;
    telefono:string;
    uid:string;
    perfil: 'visitante'|'admin'
    
    
} 
export interface ResponseApiSumaI{
     respuesta: number;
     estado:string;
    }

   export interface RequestApiSumaI{
        nota1: number;
        nota2: number;
        nota3: number;
      }

      export interface ResultadoJuego{
           id:string
           fecha:Date
          intentos:number
          tiempo:{
               minutos:number
               segundos:number
          }
          nivel:number
      }