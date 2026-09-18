import { z } from 'zod';

//==========================================
// CREATE (POST /categories) - input schema
//==========================================
export const createCategorieSchema = z.object({
    userId: z.string().uuid('O ID do usuário deve ser um UUID válido'),
    name: z.string().min(2, 'O nome da categoria deve ter pelo menos 2 caracteres'),
})
export type CreateCategorieInput = z.infer<typeof createCategorieSchema>;