// Exporta db e tabelas
export { getUserCategories, getTransactionsByUser, getTransactionsWithCategory } from './relations/index.js';
export { getDrizzle } from './client.js';
export { users } from "./schema/users.js";
export { categories } from "./schema/categories.js";
export { transactions } from "./schema/transactions.js";
export { transactionTypeEnum } from "./schema/transactionTypeEnum.js";