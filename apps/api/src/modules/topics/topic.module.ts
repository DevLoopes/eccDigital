import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { DrizzleTopicsRepository } from './adapters/outbound/persistence/drizzle-topic.repository.js';
import { ListTopicsUseCase } from './application/use-cases/list-topics.use-case.js';
import { TopicController } from './adapters/inbound/http/topic.controller.js';

const topicsRepository = new DrizzleTopicsRepository(drizzleModule.db);
const listTopicsUseCase = new ListTopicsUseCase(topicsRepository);

registry.registerPath({
  method: 'get',
  path: '/topics',
  tags: ['Topics'],
  summary: 'ListTopics',
  responses: {
    200: { description: 'Lista de tópicos da ECC.' },
  },
});

const topicsController = new TopicController(listTopicsUseCase);
export const TopicsModule = topicsController.router;
