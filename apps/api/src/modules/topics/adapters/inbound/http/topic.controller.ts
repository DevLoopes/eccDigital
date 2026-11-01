import { Router, type Request, type Response } from 'express';
import { type ListTopicsUseCase } from '../../../application/use-cases/list-topics.use-case.js';
import { isOk } from '../../../../../infra/common/utils/result.js';

export class TopicController {
  public router = Router();

  constructor(private readonly listTopicsUseCase: ListTopicsUseCase) {
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.get('/', this.listTopics.bind(this));
    this.router.post('/', this.createTopic.bind(this));
  }

  private async listTopics(_req: Request, res: Response): Promise<void> {
    const result = await this.listTopicsUseCase.execute();

    if (!isOk(result)) {
      res.status(500).json({ message: 'Erro ao listar os tópicos', error: result.error });
      return;
    }

    res.status(200).json(result.value);
  }

  private async createTopic(_req: Request, res: Response): Promise<void> {
    res.status(201).json({
      message: 'Módulo de tópicos ativo.',
      module: 'topics',
    });
  }
}
