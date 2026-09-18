import { relations } from 'drizzle-orm';
import { categories } from '../schema/categories.js';
import { users } from '../schema/users.js';

export const categoriesRelations = relations(categories, ({ one }) => ({
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
}));
