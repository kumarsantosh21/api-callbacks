/**
 * @constant express
 * @type {import}
 * @requires express
 * @returns {express} 
 * @description : Express is basically helps you manage everything, from routes, to handling requests and views.
 */
import express from "express";
 /**
  * @constant bodyParser
  * @type {import}
  * @requires bodyParser
  * @returns {bodyParser}
  * @description :  It is responsible for parsing the incoming request bodies in a middleware before you handle it.
  */
 import bodyParser from 'body-parser';
 
 const app=express();
 app.use(bodyParser.urlencoded({
     extended: true
   }));
 
 import callback from './router/callback.js';
 import promises from './router/promises.js';
 import asaw from './router/asaw.js';
 import appswagger from '../swaggerdocu.js';
 
 
 
 app.use('/',callback);
 app.use('/',promises);
 app.use('/',asaw);
 app.use('/',appswagger);


 app.set('view engine');
 
 
 app.use(express.static("public"));
 

 

   
 app.listen(3000, () => {
     console.log("Server listening on Port 3000");
 })
 
