import { drizzleModule } from '../../infra/drizzle/drizzle.module.js';
import { registry } from '../../infra/common/openapi/openapi.js';
import { DrizzleAnnouncementsRepository } from './adapters/outbound/persistence/drizzle-announcement.repository.js';
import { CreateAnnouncementUseCase } from './application/use-cases/create-announcement.use-case.js';
import { AnnouncementController } from './adapters/inbound/http/announcement.controller.js';

const announcementsRepository = new DrizzleAnnouncementsRepository(drizzleModule.db);
const createAnnouncementUseCase = new CreateAnnouncementUseCase(announcementsRepository);

registry.registerPath({
  method: 'post',
  path: '/announcements',
  tags: ['Announcements'],
  summary: 'CreateAnnouncement',
  responses: {
    201: { description: 'Aviso criado com sucesso.' },
  },
});

const announcementsController = new AnnouncementController(createAnnouncementUseCase);
export const AnnouncementsModule = announcementsController.router;
