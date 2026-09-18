import { Transaction } from '../entities/transaction.entity.js';
import type { ITransactionsRepository, CreateTransactionDTO, DbError } from '../repositories/transaction.repository.js';
import { Result } from '../../../../infra/common/utils/result.js';

export class TransactionsService {
  constructor(private readonly transactionsRepository: ITransactionsRepository) {}

  build(transaction: Transaction) {
    return {
      id: transaction.id,
      userId: transaction.userId,
      categoryId: transaction.categoryId,
      amount: transaction.amount,
      transactionDate: transaction.transactionDate,
      description: transaction.description,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };
  }

  async createTransaction(data: CreateTransactionDTO): Promise<Result<Transaction, DbError>> {
    const transaction = new Transaction({
      userId: data.userId,
      categoryId: data.categoryId,
      amount: data.amount,
      transactionDate: data.transactionDate,
      description: data.description,
    });

    return this.transactionsRepository.create(transaction);
  }
}