import { check, index, numeric, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { categories } from './categories.js';
import { transactionTypeEnum } from './transactionTypeEnum.js';
import { users } from './users.js';
import { sql } from 'drizzle-orm';

export const transactions = pgTable('transactions', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    categoryId: uuid('category_id').notNull().references(() => categories.id, {onDelete: 'cascade'}),
    amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
    type: transactionTypeEnum('type').notNull(),
    transactionDate: timestamp('transaction_date').notNull(),
    description: text('description'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
    userIdIdx: index('idx_transactions_user_id').on(table.userId),
    categoryIdIdx: index('idx_transactions_category_id').on(table.categoryId),
    transactionDateIdx: index('idx_transactions_date').on(table.transactionDate),
    amountCheck: check('amount_check', sql`${table.amount} > 0`),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
}));