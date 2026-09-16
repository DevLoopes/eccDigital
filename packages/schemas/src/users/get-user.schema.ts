import { z } from 'zod';

// ==========================================
// SCHEMAS DE PARÂMETROS DE ROTA (GET by ID / DELETE)
// ==========================================
export const UserIdParamSchema = z.object({
  id: z.string().uuid({ message: 'ID precisa ser um UUID válido' }),
});
export type UserIdParam = z.infer<typeof UserIdParamSchema>;

// ==========================================
// GET / LIST / SEARCH (GET /users)
// ==========================================
// Query params para filtros e paginação
export const GetUsersQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
});
export type GetUsersQuery = z.infer<typeof GetUsersQuerySchema>;