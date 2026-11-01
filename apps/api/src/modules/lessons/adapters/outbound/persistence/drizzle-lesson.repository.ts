import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { eccLessons } from '@repo/database';
import { Lesson } from '../../../domain/entities/lesson.entity.js';
import type { ILessonsRepositoryPort } from '../../../domain/repositories/lesson.repository.port.js';

export class DrizzleLessonsRepository implements ILessonsRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async list(): Promise<Lesson[]> {
    const records = await this.db.select().from(eccLessons);

    return records.map(
      (record) =>
        new Lesson(
          record.id,
          record.topicId,
          record.title,
          record.description ?? null,
          record.pdfDriveUrl,
          record.lessonDate,
          record.createdBy,
          record.createdAt ?? undefined,
        ),
    );
  }

  async create(input: {
    topicId: string;
    title: string;
    description?: string | null;
    pdfDriveUrl: string;
    lessonDate: string;
    createdBy: string;
  }): Promise<Lesson> {
    const [record] = await this.db
      .insert(eccLessons)
      .values({
        topicId: input.topicId,
        title: input.title,
        description: input.description ?? null,
        pdfDriveUrl: input.pdfDriveUrl,
        lessonDate: input.lessonDate,
        createdBy: input.createdBy,
      })
      .returning();

    return new Lesson(
      record.id,
      record.topicId,
      record.title,
      record.description ?? null,
      record.pdfDriveUrl,
      record.lessonDate,
      record.createdBy,
      record.createdAt ?? undefined,
    );
  }
}
