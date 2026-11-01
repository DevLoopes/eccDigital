import type { ILessonsRepositoryPort } from '../../domain/repositories/lesson.repository.port.js';
import type { Lesson } from '../../domain/entities/lesson.entity.js';
import { ok, type Result } from '../../../../infra/common/utils/result.js';

type CreateLessonInput = {
  topicId: string;
  title: string;
  description?: string | null;
  pdfDriveUrl: string;
  lessonDate: string;
  createdBy: string;
};

export class CreateLessonUseCase {
  constructor(private readonly lessonsRepository: ILessonsRepositoryPort) {}

  async execute(input: CreateLessonInput): Promise<Result<Lesson, Error>> {
    const lesson = await this.lessonsRepository.create(input);
    return ok(lesson);
  }
}
