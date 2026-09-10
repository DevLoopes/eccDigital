// packages/database/src/schema.ts
import { pgEnum } from 'drizzle-orm/pg-core';

// database/src/schema.ts
export const transactionTypeEnum = pgEnum('transaction_type', ['INCOME', 'EXPENSE']);
export * from "./schemas/users";
export * from "./schemas/categories";
export * from "./schemas/transactions";
