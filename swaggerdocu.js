import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const appswagger = express.Router();

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'API',
        description: 'A simple Rest API that greets you.',
    
        version: '1.0.0',
      
        servers: ['http://localhost:3000/'],
      },
      schemes: 'http',
      consumes: 'application/json',
      produces: 'application/json',
    },
    apis: ['./src/router/*.js'],
  };

export const swaggerDocs = swaggerJSDoc(swaggerOptions);
appswagger.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default appswagger;
