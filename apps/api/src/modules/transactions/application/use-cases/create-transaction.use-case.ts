import { ITransactionsRepositoryPort } from "../ports/transaction.repository.port.js";
import { Transaction } from "../../domain/entities/transaction.entity.js";
import {
  CreateTransactionDTO,
  DbError,
} from "../../domain/repositories/transaction.repository.js";
import { Result } from "../../../../infra/common/utils/result.js";

type Input = CreateTransactionDTO;

export class CreateTransactionUseCase {
  constructor(
    private readonly transactionsRepository: ITransactionsRepositoryPort,
  ) {}

  async execute(input: Input): Promise<Result<Transaction, DbError>> {
    const transaction = new Transaction({
      amount: input.amount,
      transactionDate: input.transactionDate,
      description: input.description,
      categoryId: input.categoryId,
      userId: input.userId,
    });
    const result = await this.transactionsRepository.create(transaction);
    return result;
  }
}
