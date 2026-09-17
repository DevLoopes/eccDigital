import { User } from '../../domain/entities/user.entity.js';
import { Result } from '../../../../infra/common/utils/result.js';
import { DbError, IUsersRepository } from '../../domain/repositories/user.repository.js';

type Input = {
  id: string;
};

export class GetUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(input: Input): Promise<Result<User | null, DbError>> {
    const result = await this.usersRepository.findById(input.id);
    return result;
  }
}   