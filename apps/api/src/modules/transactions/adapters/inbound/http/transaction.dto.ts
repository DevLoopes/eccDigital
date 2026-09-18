import { z } from "zod";

export const createTransactionDto = z.object({
  amount: z
    .number()
    .refine((value) => value !== 0, {
      message: "O valor deve ser diferente de zero",
    })
    .refine((value) => Number.isFinite(value), {
      message: "O valor deve ser um número válido",
    }),
  transactionDate: z.date(),
  description: z.string().trim().optional(),
  categoryId: z.string().uuid(),
  userId: z.string().uuid(),
});

export type CreateTransactionDto = z.infer<typeof createTransactionDto>;
