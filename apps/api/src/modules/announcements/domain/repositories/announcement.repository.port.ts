import type { Announcement } from '../entities/announcement.entity.js';

export interface IAnnouncementsRepositoryPort {
  list(): Promise<Announcement[]>;
  create(input: { title: string; content: string; active?: boolean }): Promise<Announcement>;
}
