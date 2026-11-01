import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { churchAnnouncements } from '@repo/database';
import { Announcement } from '../../../domain/entities/announcement.entity.js';
import type { IAnnouncementsRepositoryPort } from '../../../domain/repositories/announcement.repository.port.js';

export class DrizzleAnnouncementsRepository implements IAnnouncementsRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async list(): Promise<Announcement[]> {
    const records = await this.db.select().from(churchAnnouncements);

    return records.map(
      (record) =>
        new Announcement(record.id, record.title, record.content, record.active, record.createdAt ?? undefined),
    );
  }

  async create(input: { title: string; content: string; active?: boolean }): Promise<Announcement> {
    const [record] = await this.db
      .insert(churchAnnouncements)
      .values({
        title: input.title,
        content: input.content,
        active: input.active ?? true,
      })
      .returning();

    return new Announcement(record.id, record.title, record.content, record.active, record.createdAt ?? undefined);
  }
}
