import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { type IUsersRepositoryPort } from '../../../application/ports/users.repository.port.js';
import { User } from '../../../domain/entities/users.entity.js';
import { UsersMapper } from '../mappers/users.mapper.js';

export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export class DrizzleUsersRepository implements IUsersRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

  async findAll(): Promise<User[]> {
    const records = await this.db.select().from(usersTable);
    return records.map(UsersMapper.toDomain);
  }

  async findById(id: string): Promise<User | null> {
    const [record] = await this.db.select().from(usersTable).where(eq(usersTable.id, id));
    if (!record) return null;
    return UsersMapper.toDomain(record);
  }

  async create(user: User): Promise<User> {
    const [inserted] = await this.db
      .insert(usersTable)
      .values(UsersMapper.toPersistence(user))
      .returning();
    return UsersMapper.toDomain(inserted);
  }
}