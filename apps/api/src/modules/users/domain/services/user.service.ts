import { User } from '../entities/user.entity.js';
import type { IUsersRepository, CreateUserDTO, DbError } from '../repositories/user.repository.js';
import { Result } from '../../../../infra/common/utils/result.js';

export class UsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  build(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async findById(id: string): Promise<Result<User | null, DbError>> {
    return this.usersRepository.get(id);
  }

  async registerUser(data: CreateUserDTO): Promise<Result<User, DbError>> {
    const user = new User({ name: data.name, email: data.email, password: data.password });
    return this.usersRepository.create(user);
  }
}