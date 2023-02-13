import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const cors= require('cors')({
  origin:true
});

  export const promedio3Universidad = functions.https.onRequest((request, response) => {


    return cors(request, response, async () => {

      response.set('Access-Control-Allow-Origin', '*');
      response.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
      response.set('Access-Control-Allow-Headers', '*');
      
      const data= request.body as RequestApi;
      if(data.nota1!= undefined && data.nota2!=undefined && data.nota3!=undefined){
         const res:ResponseApi={
             promedio:(data.nota1+data.nota2+data.nota3)/3,
             estado:'success',
         }
        response.send(res)
      
      }else{
         const res: ResponseApi={
             promedio:0,
             estado:'error falta informacion',
         }
         response.send(res)
      }
    });
  
  
  });




export const scheduledTest = functions.pubsub.schedule('every 1 minutes').onRun( async (context) => {
    
    console.log('scheduledNotificationsBibliaFunction');

}); 


 interface RequestApi{
   nota1: number;
   nota2: number;
   nota3: number;

 
 }
 interface ResponseApi{
  promedio: number;
  estado:string; 
 } 