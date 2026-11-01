import { Router, type Request, type Response } from 'express';
import { type CreateLessonUseCase } from '../../../application/use-cases/create-lesson.use-case.js';
import { isOk } from '../../../../../infra/common/utils/result.js';

export class LessonController {
  public router = Router();

  constructor(private readonly createLessonUseCase: CreateLessonUseCase) {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.listLessons.bind(this));
    this.router.post('/', this.createLesson.bind(this));
  }

  private async listLessons(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Módulo de lições ativo.', module: 'lessons' });
  }

  private async createLesson(req: Request, res: Response): Promise<void> {
    const result = await this.createLessonUseCase.execute({
      topicId: req.body.topicId,
      title: req.body.title,
      description: req.body.description,
      pdfDriveUrl: req.body.pdfDriveUrl,
      lessonDate: req.body.lessonDate,
      createdBy: req.body.createdBy,
    });

    if (!isOk(result)) {
      res.status(500).json({ message: 'Erro ao criar a lição', error: result.error });
      return;
    }

    res.status(201).json(result.value);
  }
}
