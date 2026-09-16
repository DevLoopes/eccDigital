import { DrizzleUsersRepository } from './adapters/outbound/persistence/drizzle-users.repository.js';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case.js';
import { UsersController } from './adapters/inbound/http/users.controller.js';
import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { createUserDto } from './adapters/inbound/http/create-user.dto.js';

// 1. Repositório recebe a conexão com o banco
const usersRepository = new DrizzleUsersRepository(drizzleModule.db);
const createUserUseCase = new CreateUserUseCase(usersRepository);
// Register OpenAPI path so documentation is generated
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
		201: { description: 'Criado com sucesso' },
	},
});

const usersController = new UsersController(createUserUseCase);
export const UsersModule = usersController.router;