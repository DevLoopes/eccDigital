import { check, index, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { categories } from "./categories.js";
import { transactionTypeEnum } from "./transactionTypeEnum.js";
import { users } from "./users.js";
import { sql } from "drizzle-orm/sql/sql";

export const transactions = pgTable('transactions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    categoryId: uuid('category_id').notNull().references(() => categories.id, {onDelete: 'cascade'}),
    amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
    type: transactionTypeEnum('Enum').notNull(),
    transactionDate: timestamp('transaction_date').notNull(),
    description: text('description'),
}, (table) => ({
    userIdIdx: index('idx_transactions_user_id').on(table.userId),
    dateIdx: index('idx_transactions_date').on(table.transactionDate),
    amountCheck: check('amount_check', sql`${table.amount} > 0`),
}));