import type { User } from '../entities/users.entity.js';

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type GetUserQuery = {
  name?: string;
  email?: string;
};

export abstract class IUsersRepository {
  abstract findAll(filters?: GetUserQuery): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
  abstract create(user: User): Promise<User>;
}