import { z } from "zod";

export const TransactionResponseSchema = z.object({
  id: z.string().uuid(),
  amount: z.number(),
  transactionDate: z.string(),
  description: z.string(),
  categoryId: z.object({
    name: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type GetTransactionQuery = z.infer<typeof TransactionResponseSchema>;
