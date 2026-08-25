import { User } from '../entities/users.entity.js';
import { type IUsersRepository } from '../repositories/users.repository.js';

export class UsersService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async listUsers(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async registerUser(data: { name: string; email: string }): Promise<User> {
    const user = new User({ name: data.name, email: data.email });
    return this.usersRepository.create(user);
  }
}