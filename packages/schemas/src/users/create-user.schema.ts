import { z } from "zod";

// ==========================================
// CREATE (POST /users) - input schema
// ==========================================
export const CreateUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "O nome deve ter no mínimo 2 caracteres")
    .max(150, "O nome deve ter no máximo 150 caracteres"),
  email: z.string().trim().email("E-mail inválido"),
  password: z
    .string()
    .trim()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .max(255, "A senha deve ter no máximo 255 caracteres"),
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
  updatedAt: z.string(),
});
export type UserResponse = z.infer<typeof UserResponseSchema>;
