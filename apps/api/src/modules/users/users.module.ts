import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleUsersRepository } from './adapters/outbound/persistence/drizzle-users.repository.js';
import { UsersService } from './domain/services/users.service.js';
import { UsersController } from './adapters/inbound/http/users.controller.js';

export class UsersModule {
  static setup(db: NodePgDatabase) {
    const repository = new DrizzleUsersRepository(db);
    const service = new UsersService(repository);
    const controller = new UsersController(service);

    return { router: controller.router };
  }
}