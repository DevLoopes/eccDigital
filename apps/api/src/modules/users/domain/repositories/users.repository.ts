import type { User } from '../entities/users.entity.js';
import { Result } from '../../../../infra/common/utils/result.js';

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type GetUserQuery = {
  name?: string;
  email?: string;
};

export type DbError = { code: string; message: string; details?: unknown };

export abstract class IUsersRepository {
  abstract findAll(filters?: GetUserQuery): Promise<Result<User[], DbError>>;
  abstract findById(id: string): Promise<Result<User | null, DbError>>;
  abstract create(user: User): Promise<Result<User, DbError>>;
}