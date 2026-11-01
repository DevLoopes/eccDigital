import type { YouthScheduleEvent } from '../entities/youth-schedule.entity.js';

export interface IYouthScheduleRepositoryPort {
  list(): Promise<YouthScheduleEvent[]>;
  create(input: { title: string; description?: string | null; eventDate: Date; location?: string | null }): Promise<YouthScheduleEvent>;
}
