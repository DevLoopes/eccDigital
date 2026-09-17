import type { User } from '../entities/user.entity.js';
import { Result } from '../../../../infra/common/utils/result.js';

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};

export type DbError = { code: string; message: string; details?: unknown };

export abstract class IUsersRepository {
  abstract findById(id: string): Promise<Result<User | null, DbError>>;
  abstract get(id: string): Promise<Result<User | null, DbError>>;
  abstract create(user: User): Promise<Result<User, DbError>>;
}