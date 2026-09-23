import { z } from "zod";

export const TransactionResponseSchema = z.object({
  id: z.string().uuid({ message: "ID precisa ser um UUID válido" }),
});
export type TransactionQuery = z.infer<typeof TransactionResponseSchema>;
