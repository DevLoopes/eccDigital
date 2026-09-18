import { relations } from "drizzle-orm/relations";
import { transactions } from "../schema/transactions";
import { users } from "../schema/users";
import { categories } from "../schema/categories";

// --- Declaração de Relacionamento para o Drizzle ---
// o Drizzle não tem essa informação de relacionamento
// para as queries relacionais, embora o PostgreSQL
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
