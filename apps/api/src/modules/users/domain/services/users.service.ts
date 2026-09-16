import { User } from '../entities/users.entity.js';
import type { IUsersRepository, CreateUserDTO, GetUserQuery, DbError } from '../repositories/users.repository.js';
import { Result } from '../../../../infra/common/utils/result.js';

export class UsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  build(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  async findAll(filters?: GetUserQuery): Promise<Result<User[], DbError>> {
    return this.usersRepository.findAll(filters);
  }

  async registerUser(data: CreateUserDTO): Promise<Result<User, DbError>> {
    const user = new User({ name: data.name, email: data.email, password: data.password });
    return this.usersRepository.create(user);
  }
}