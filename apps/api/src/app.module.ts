import express, { type Express } from 'express';
import { apiReference } from '@scalar/express-api-reference';
import { UsersModule } from './modules/users/users.module.js';
import { buildDocs } from './infra/common/openapi/openapi.js';

export class AppModule {
  public static bootstrap(): Express {
    const app = express();
    app.use(express.json());

    // Importar o módulo já registra o Zod dele automaticamente
    app.use('/users', UsersModule);

    // Gera o OpenAPI automaticamente a partir dos schemas Zod
    const document = buildDocs();

    app.use(
      '/api',
      apiReference({
        title: 'API Reference',
        spec: {
          content: document,
        },
      }),
    );

    return app;
  }
}