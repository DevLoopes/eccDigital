import { eq } from 'drizzle-orm';
import { type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { categories } from '../schema/categories.js';
import { transactions } from '../schema/transactions.js';

export const getUserCategories = async (db: NodePgDatabase, userId: string) => {
	return db.select().from(categories).where(eq(categories.userId, userId));
};

export const getTransactionsByUser = async (db: NodePgDatabase, userId: string) => {
	return db.select().from(transactions).where(eq(transactions.userId, userId));
};

export const getTransactionsWithCategory = async (db: NodePgDatabase, userId: string) => {
	return db
		.select({
			id: transactions.id,
			amount: transactions.amount,
			description: transactions.description,
			transactionDate: transactions.transactionDate,
			categoryName: categories.name,
		})
		.from(transactions)
		.leftJoin(categories, eq(transactions.categoryId, categories.id))
		.where(eq(transactions.userId, userId));
};