import { User } from '../entities/users.entity.js';
import type { IUsersRepository, CreateUserDTO, GetUserQuery } from '../repositories/users.repository.js';

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

  async findAll(filters?: GetUserQuery): Promise<User[]> {
    return this.usersRepository.findAll(filters);
  }

  async registerUser(data: CreateUserDTO): Promise<User> {
    const user = new User({ name: data.name, email: data.email, password: data.password });
    return this.usersRepository.create(user);
  }
}