import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eccTopics } from '@repo/database';
import { Topic } from '../../../domain/entities/topic.entity.js';
import type { ITopicsRepositoryPort } from '../../../domain/repositories/topic.repository.port.js';

export class DrizzleTopicsRepository implements ITopicsRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async list(): Promise<Topic[]> {
    const records = await this.db.select().from(eccTopics);

    return records.map(
      (record) =>
        new Topic(
          record.id,
          record.title,
          record.description ?? null,
          record.iconName ?? null,
          record.createdAt ?? undefined,
        ),
    );
  }
}
