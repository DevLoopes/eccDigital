import { index, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { transactionTypeEnum } from "./transactionTypeEnum.js";
import { users } from "./users.js";

export const categories = pgTable('categories', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, {onDelete: 'cascade'}),
    name: varchar('name', { length: 100 }).notNull(),
    type: transactionTypeEnum('Enum').notNull(),
}, (table) => ({
    userIdIndex: index('idx_categories_user_id').on(table.userId),
}));