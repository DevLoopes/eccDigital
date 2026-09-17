import { eq } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres/driver";
import { type ITransactionsRepositoryPort } from "../../../application/ports/transaction.repository.port.js";
import { Transaction } from "../../../domain/entities/transaction.entity.js";
import { TransactionMapper } from "../mappers/transaction.mapper.js";
import { transactions as transactionsTable } from "@repo/database";
import { Result, ok, err } from "../../../../../infra/common/utils/result.js";

type DbError = { code: 'DB_ERROR'; message: string; details?: unknown };

export class DrizzleTransactionsRepository implements ITransactionsRepositoryPort {
  constructor(private readonly db: NodePgDatabase) {}

    async findById(id: string): Promise<Result<Transaction | null, DbError>> {
        try {
            const [record] = await this.db.select().from(transactionsTable).where(eq(transactionsTable.id, id));
            if (!record) return ok(null);
            return ok(TransactionMapper.toDomain(record));
        } catch (error: any) {
            return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
        }
    }

    async get(id: string): Promise<Result<Transaction | null, DbError>> {
        return this.findById(id);
    }

    async create(transaction: Transaction): Promise<Result<Transaction, DbError>> {
        try {
            const [inserted] = await this.db
                .insert(transactionsTable)
                .values([TransactionMapper.toPersistence(transaction)])
                .returning();
            return ok(TransactionMapper.toDomain(inserted));
        } catch (error: any) {
            return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
        }
    }
}