import express from 'express';



 const asaw = express.Router();
//  import {  fileURLToPath } from 'url';
//  import { dirname } from 'path';
 
 
 
//  const __filename = fileURLToPath(import.meta.url);
//  const __dirname = dirname(__filename);


// asaw.get("/asaw", function(request,response){
//     response.status(200).sendFile(__dirname + "/index1.html");
// });


/**
 * @swagger
 * /async:
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
 * @param {URL} '/async' represents the endpoint. This argument specifies the path.
 * @param {Callback} (req,res) This callback gives response with status code and message.
 * @example
 *  - localhost:3000/async/{name:'rr'}
 *  - Responses:
 *          code: for the successfull execution, hello $rr will displays and status code is 202.
 *          code: when name field is empty, name is required will displays and status code is 400.
 *          code: for unsuccessfull execution, not found will be displayed and it status code is 404.
 *
 * @returns {void}
 */
    
asaw.post("/asaw",function(req,res){

    
    // var name=req.body.sa1;
    var name="rr";
async function display() {
    let myPromise = new Promise(function(resolve, reject) {
       
       if (name ==='') {
        res.status(400).send('Name field is empty');
        return;
      }
      resolve("Hello "+name);
    });
    res.status(202).send(await myPromise);

  }
  
  display();
})

export default asaw;