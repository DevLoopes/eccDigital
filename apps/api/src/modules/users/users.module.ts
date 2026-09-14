import { Router } from 'express';
import { registry } from '../../infra/common/openapi/openapi.js';
import { createUserDto } from './adapters/inbound/http/get-users.dto.js';

const router = Router();

// Você apenas declara a rota associando o Schema do Zod
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

// Sua rota do Express executando o caso de uso
router.post('/', (req, res) => {
  const data = createUserDto.parse(req.body);
  // CreateUserUseCase.execute(data);
  res.status(201).json(data);
});

export const UsersModule = router;