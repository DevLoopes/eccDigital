import { Router, type Request, type Response } from 'express';
import { type CreateAnnouncementUseCase } from '../../../application/use-cases/create-announcement.use-case.js';
import { isOk } from '../../../../../infra/common/utils/result.js';

export class AnnouncementController {
  public router = Router();

  constructor(private readonly createAnnouncementUseCase: CreateAnnouncementUseCase) {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.listAnnouncements.bind(this));
    this.router.post('/', this.createAnnouncement.bind(this));
  }

  private async listAnnouncements(_req: Request, res: Response): Promise<void> {
    res.status(200).json({ message: 'Módulo de avisos ativo.', module: 'announcements' });
  }

  private async createAnnouncement(req: Request, res: Response): Promise<void> {
    const result = await this.createAnnouncementUseCase.execute({
      title: req.body.title,
      content: req.body.content,
      active: req.body.active,
    });

    if (!isOk(result)) {
      res.status(500).json({ message: 'Erro ao criar o aviso', error: result.error });
      return;
    }

    res.status(201).json(result.value);
  }
}
