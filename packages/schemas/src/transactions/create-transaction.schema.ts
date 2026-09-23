import { z } from "zod";

// ==========================================
// CREATE (POST /transactions) - input schema
// ==========================================
export const createTransactionSchema = z.object({
  amount: z.number().refine((value) => value !== 0, {
    message: "O valor da transação deve ser diferente de zero",
  }),
  transactionDate: z
    .string()
    .trim()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "A data da transação deve ser uma data válida",
    }),
  description: z
    .string()
    .trim()
    .max(130, "A descrição da transação deve ter no máximo 130 caracteres"),
  categoryId: z
    .string()
    .trim()
    .uuid("O ID da categoria deve ser um UUID válido"),
  userId: z.string().trim().uuid("O ID do usuário deve ser um UUID válido"),
});
export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;
