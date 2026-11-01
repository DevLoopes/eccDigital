import type { Topic } from '../entities/topic.entity.js';

export interface ITopicsRepositoryPort {
  list(): Promise<Topic[]>;
}
