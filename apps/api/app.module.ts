import express, { type Express } from 'express';
import { drizzleModule } from './src/infra/drizzle/drizzle.module.js';
import { UsersModule } from './src/modules/users/users.module.js';

export class AppModule {
  public static bootstrap(): Express {
    const app = express();
    app.use(express.json());

    // Injeção de dependências global/módulos
    const usersModule = UsersModule.setup(drizzleModule.db);

    // Associação de rotas
    app.use('/users', usersModule.router);

    return app;
  }
}