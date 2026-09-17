import { Transaction } from '../../../domain/entities/transaction.entity.js';

export class TransactionMapper {
    static toDomain(raw: any): Transaction {
        return new Transaction({
            id: raw.id,
            amount: Number(raw.amount),
            type: raw.type,
            transactionDate: raw.transactionDate,
            description: raw.description,
            categoryId: raw.categoryId,
            userId: raw.userId,
        });
    }

    static toPersistence(transaction: Transaction) {
        return {
            id: transaction.id,
            amount: transaction.amount?.toString(),
            type: transaction.type,
            transactionDate: transaction.transactionDate,
            description: transaction.description,
            categoryId: transaction.categoryId,
            userId: transaction.userId,
        };
    }
}