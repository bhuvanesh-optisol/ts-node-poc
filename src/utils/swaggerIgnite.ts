import { cleanEnv, str } from 'envalid';
import * as swaggerUi from 'swagger-ui-express';
// import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerDocument from '../swagger-docs/swagger.json';
import {Application}  from 'express';

function swaggerIgnite(applicationInstance:Application) {
  const { PORT, APP_PATH } = process.env;
    
    const options = {
      customCss: `
        .swagger-ui .topbar {
          display: none;
        }
        .swagger-ui .models {
          display: none;
        }`,
    };
    
    applicationInstance.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
}

export default swaggerIgnite;
