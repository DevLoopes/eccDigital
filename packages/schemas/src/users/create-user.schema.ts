import { z } from "zod";

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
