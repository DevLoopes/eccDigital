import { z } from 'zod';

// ==========================================
// CREATE (POST /transactions) - input schema
// ==========================================
export const createTransactionSchema = z.object({
  amount: z.number().positive('O valor da transação deve ser positivo'),
  type: z.enum(['INCOME', 'EXPENSE'], {
    errorMap: () => ({ message: 'O tipo da transação deve ser "INCOME" ou "EXPENSE"' }),
  }),
  transactionDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'A data da transação deve ser uma data válida',
  }),
  description: z.string().min(1, 'A descrição da transação é obrigatória'),
  categoryId: z.string().uuid('O ID da categoria deve ser um UUID válido'),
});
export type CreateTransactionInput = z.infer<typeof createTransactionSchema>;