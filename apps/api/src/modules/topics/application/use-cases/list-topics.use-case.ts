import type { ITopicsRepositoryPort } from '../../domain/repositories/topic.repository.port.js';
import type { Topic } from '../../domain/entities/topic.entity.js';
import { ok, type Result } from '../../../../infra/common/utils/result.js';

export class ListTopicsUseCase {
  constructor(private readonly topicsRepository: ITopicsRepositoryPort) {}

  async execute(): Promise<Result<Topic[], Error>> {
    const topics = await this.topicsRepository.list();
    return ok(topics);
  }
}
