import { DrizzleUsersRepository } from './adapters/outbound/persistence/drizzle-user.repository.js';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case.js';
import { GetUserUseCase } from './application/use-cases/get-user.use-case.js';
import { UsersController } from './adapters/inbound/http/user.controller.js';
import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { createUserDto, getUserDto } from './adapters/inbound/http/user.dto.js';

const usersRepository = new DrizzleUsersRepository(drizzleModule.db);
const createUserUseCase = new CreateUserUseCase(usersRepository);
const getUserUseCase = new GetUserUseCase(usersRepository);

registry.registerPath({
  method: 'post',
  path: '/users',
  tags: ['Users'],
  summary: 'CreateUserUseCase',
  request: {
    body: {
      content: {
        'application/json': { schema: createUserDto },
      },
    },
  },
  responses: {
    201: { description: 'Usuário criado com sucesso' },
  },
});

registry.registerPath({
  method: 'get',
  path: '/users/{id}',
  tags: ['Users'],
  summary: 'GetUserDetails',
  request: {
    params: getUserDto,
  },
  responses: {
    200: { description: 'Detalhes do usuário' },
    404: { description: 'Usuário não encontrado' },
  },
});

const usersController = new UsersController(createUserUseCase, getUserUseCase);
export const UsersModule = usersController.router;