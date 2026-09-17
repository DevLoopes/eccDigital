import { IUsersRepository, DbError } from '../../domain/repositories/user.repository.js';
import { User } from '../../domain/entities/user.entity.js';
import type { CreateUserDTO } from '../../domain/repositories/user.repository.js';
import { Result } from '../../../../infra/common/utils/result.js';

type Input = CreateUserDTO;

export class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(input: Input): Promise<Result<User, DbError>> {
    const user = new User({ name: input.name, email: input.email, password: input.password });
    const result = await this.usersRepository.create(user);
    return result;
  }
}