import type { IAnnouncementsRepositoryPort } from '../../domain/repositories/announcement.repository.port.js';
import type { Announcement } from '../../domain/entities/announcement.entity.js';
import { ok, type Result } from '../../../../infra/common/utils/result.js';

type CreateAnnouncementInput = {
  title: string;
  content: string;
  active?: boolean;
};

export class CreateAnnouncementUseCase {
  constructor(private readonly announcementsRepository: IAnnouncementsRepositoryPort) {}

  async execute(input: CreateAnnouncementInput): Promise<Result<Announcement, Error>> {
    const announcement = await this.announcementsRepository.create(input);
    return ok(announcement);
  }
}
