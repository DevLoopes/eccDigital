import { z } from 'zod';

// ==========================================
// CREATE (POST /users) - input schema
// ==========================================
export const CreateUserSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});
export type CreateUserInput = z.infer<typeof CreateUserSchema>;

// ==========================================
// RESPONSE (GET /users/:id) - output schema
// ==========================================
export const UserResponseSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.string(),
});
export type UserResponse = z.infer<typeof UserResponseSchema>;