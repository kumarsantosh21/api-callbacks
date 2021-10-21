import express from 'express';

 const promises = express.Router();
//  import {  fileURLToPath } from 'url';
//  import { dirname } from 'path';
 
 
 
//  const __filename = fileURLToPath(import.meta.url);
//  const __dirname = dirname(__filename);


// promises.get("/promises", function(request,response){
//     response.status(200).sendFile(__dirname + "/index1.html");
// });


/**
 * @swagger
 * /promises:
 *      post:
 *          description: Request posts a name to server
 *          responses:
 *            '202':
 *              description: Accepted
 *              body: Hello $name.
 */


/**
 * Post is responsible for getting information from server.
 * @function post
 * @param {URL} '/promises' represents the endpoint. This argument specifies the path.
 * @param {Callback} (req,res) This callback gives response with status code and message.
 * @example
 *  - localhost:3000/promises/{name:'Santosh'}
 *  - Responses:
 *          code: for the successfull execution, hello $Santosh will displays and status code is 202.
 *          code: when name field is empty, name is required will displays and status code is 400.
 *          code: for unsuccessfull execution, not found will be displayed and it status code is 404.
 *
 * @returns {void}
 */


promises.post("/promises", function(request, response){
    let myPromise = new Promise(function(myResolve) {
        
        //  var name=request.body.sa1;
         var name="kk";
         if (name ==='') {
            response.status(400).send('Name field is empty');
            return;
          }
          myResolve(name);
      });
      
      myPromise.then(
        function(name) {response.status(202).send('Hello '+name);}       
      );
});

export default promises;