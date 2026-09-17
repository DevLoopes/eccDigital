import { Transaction } from '../entities/transaction.entity.js';
import { Result } from '../../../../infra/common/utils/result.js';

export type CreateTransactionDTO = {
  userId: string;
  categoryId: string;
  amount: number;
  type: 'INCOME' | 'EXPENSE';
  transactionDate: Date;
  description?: string;
};

export type DbError = { code: string; message: string; details?: unknown };

export abstract class ITransactionsRepository {
  abstract create(transaction: Transaction): Promise<Result<Transaction, DbError>>;
}