import type { Lesson } from '../entities/lesson.entity.js';

export interface ILessonsRepositoryPort {
  list(): Promise<Lesson[]>;
  create(input: {
    topicId: string;
    title: string;
    description?: string | null;
    pdfDriveUrl: string;
    lessonDate: string;
    createdBy: string;
  }): Promise<Lesson>;
}
