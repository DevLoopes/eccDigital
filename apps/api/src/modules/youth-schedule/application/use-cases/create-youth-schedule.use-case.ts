import type { IYouthScheduleRepositoryPort } from '../../domain/repositories/youth-schedule.repository.port.js';
import type { YouthScheduleEvent } from '../../domain/entities/youth-schedule.entity.js';
import { ok, type Result } from '../../../../infra/common/utils/result.js';

type CreateYouthScheduleInput = {
  title: string;
  description?: string | null;
  eventDate: Date;
  location?: string | null;
};

export class CreateYouthScheduleUseCase {
  constructor(private readonly youthScheduleRepository: IYouthScheduleRepositoryPort) {}

  async execute(input: CreateYouthScheduleInput): Promise<Result<YouthScheduleEvent, Error>> {
    const item = await this.youthScheduleRepository.create(input);
    return ok(item);
  }
}
