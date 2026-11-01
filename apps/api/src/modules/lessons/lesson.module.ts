import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { DrizzleLessonsRepository } from './adapters/outbound/persistence/drizzle-lesson.repository.js';
import { CreateLessonUseCase } from './application/use-cases/create-lesson.use-case.js';
import { LessonController } from './adapters/inbound/http/lesson.controller.js';

const lessonsRepository = new DrizzleLessonsRepository(drizzleModule.db);
const createLessonUseCase = new CreateLessonUseCase(lessonsRepository);

registry.registerPath({
  method: 'post',
  path: '/lessons',
  tags: ['Lessons'],
  summary: 'CreateLesson',
  responses: {
    201: { description: 'Lição criada com sucesso.' },
  },
});

const lessonsController = new LessonController(createLessonUseCase);
export const LessonsModule = lessonsController.router;
