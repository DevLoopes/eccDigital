import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { type IUsersRepositoryPort } from '../../../application/ports/users.repository.port.js';
import { User } from '../../../domain/entities/users.entity.js';
import { UsersMapper } from '../mappers/users.mapper.js';
import { users as usersTable } from '@repo/database';
import { Result, ok, err } from '../../../../../infra/common/utils/result.js';

type DbError = { code: 'DB_ERROR'; message: string; details?: unknown };

export class DrizzleUsersRepository implements IUsersRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async findAll(): Promise<Result<User[], DbError>> {
    try {
      const records = await this.db.select().from(usersTable);
      return ok(records.map(UsersMapper.toDomain));
    } catch (error: any) {
      return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
    }
  }

  async findById(id: string): Promise<Result<User | null, DbError>> {
    try {
      const [record] = await this.db.select().from(usersTable).where(eq(usersTable.id, id));
      if (!record) return ok(null);
      return ok(UsersMapper.toDomain(record));
    } catch (error: any) {
      return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
    }
  }

  async create(user: User): Promise<Result<User, DbError>> {
    try {
      const [inserted] = await this.db
        .insert(usersTable)
        .values([UsersMapper.toPersistence(user)])
        .returning();
      return ok(UsersMapper.toDomain(inserted));
    } catch (error: any) {
      return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
    }
  }
}