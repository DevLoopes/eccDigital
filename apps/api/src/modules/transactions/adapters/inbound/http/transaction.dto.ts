import { z } from 'zod';

export const createTransactionDto = z.object({
    amount: z.number().positive(),
    type: z.enum(['INCOME','EXPENSE']),
    transactionDate: z.date(),
    description: z.string().optional(),
    categoryId: z.string().uuid(),
    userId: z.string().uuid(),
});

export type CreateTransactionDto = z.infer<typeof createTransactionDto>;