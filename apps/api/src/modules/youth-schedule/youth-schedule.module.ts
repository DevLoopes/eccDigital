import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { DrizzleYouthScheduleRepository } from './adapters/outbound/persistence/drizzle-youth-schedule.repository.js';
import { CreateYouthScheduleUseCase } from './application/use-cases/create-youth-schedule.use-case.js';
import { YouthScheduleController } from './adapters/inbound/http/youth-schedule.controller.js';

const youthScheduleRepository = new DrizzleYouthScheduleRepository(drizzleModule.db);
const createYouthScheduleUseCase = new CreateYouthScheduleUseCase(youthScheduleRepository);

registry.registerPath({
  method: 'post',
  path: '/youth-schedule',
  tags: ['YouthSchedule'],
  summary: 'CreateYouthScheduleEvent',
  responses: {
    201: { description: 'Evento da programação jovem criado com sucesso.' },
  },
});

const youthScheduleController = new YouthScheduleController(createYouthScheduleUseCase);
export const YouthScheduleModule = youthScheduleController.router;
