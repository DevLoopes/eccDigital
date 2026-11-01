import { Router, type Request, type Response } from 'express';
import { type CreateYouthScheduleUseCase } from '../../../application/use-cases/create-youth-schedule.use-case.js';
import { isOk } from '../../../../../infra/common/utils/result.js';

export class YouthScheduleController {
  public router = Router();

  constructor(private readonly createYouthScheduleUseCase: CreateYouthScheduleUseCase) {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.listSchedule.bind(this));
    this.router.post('/', this.createSchedule.bind(this));
  }

  private async listSchedule(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Módulo de programação jovem ativo.', module: 'youth-schedule' });
  }

  private async createSchedule(req: Request, res: Response): Promise<void> {
    const result = await this.createYouthScheduleUseCase.execute({
      title: req.body.title,
      description: req.body.description,
      eventDate: new Date(req.body.eventDate),
      location: req.body.location,
    });

    if (!isOk(result)) {
      res.status(500).json({ message: 'Erro ao criar evento', error: result.error });
      return;
    }

    res.status(201).json(result.value);
  }
}
