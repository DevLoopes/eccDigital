import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { youthSchedule } from '@repo/database';
import { YouthScheduleEvent } from '../../../domain/entities/youth-schedule.entity.js';
import type { IYouthScheduleRepositoryPort } from '../../../domain/repositories/youth-schedule.repository.port.js';

export class DrizzleYouthScheduleRepository implements IYouthScheduleRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async list(): Promise<YouthScheduleEvent[]> {
    const records = await this.db.select().from(youthSchedule);

    return records.map(
      (record) =>
        new YouthScheduleEvent(
          record.id,
          record.title,
          record.description ?? null,
          new Date(record.eventDate),
          record.location ?? null,
          record.createdAt ?? undefined,
        ),
    );
  }

  async create(input: { title: string; description?: string | null; eventDate: Date; location?: string | null }): Promise<YouthScheduleEvent> {
    const [record] = await this.db
      .insert(youthSchedule)
      .values({
        title: input.title,
        description: input.description ?? null,
        eventDate: input.eventDate,
        location: input.location ?? null,
      })
      .returning();

    return new YouthScheduleEvent(
      record.id,
      record.title,
      record.description ?? null,
      new Date(record.eventDate),
      record.location ?? null,
      record.createdAt ?? undefined,
    );
  }
}
