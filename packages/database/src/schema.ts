// packages/database/src/schema.ts
import { pgTable, text, timestamp, varchar, uuid, pgEnum, index, numeric, check } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const transactionTypeEnum = pgEnum('transaction_type', ['INCOME', 'EXPENSE']);

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  email: varchar('email', { length: 150 }).unique().notNull(),
  password_hash: varchar('password_hash', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', {withTimezone: true}).defaultNow(),
});

export const categories = pgTable('categories', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    name: varchar('name', { length: 100 }).notNull(),
    type: transactionTypeEnum('Enum').notNull(),
}, (table) => ({
    userIdIndex: index('idx_categories_user_id').on(table.userId),
}));

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