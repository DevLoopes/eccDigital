import { z } from 'zod';

export const createUserDto = z.object({
  name: z.string().trim().min(2).max(150),
  email: z.string().trim().email(),
  password: z.string().trim().min(6).max(255),
});

export const getUserDto = z.object({
  id: z.string().uuid(),
});

export const updateUserDto = z.object({
  name: z.string().trim().min(3).optional(),
  email: z.string().trim().email().optional(),
  password: z.string().trim().min(6).max(255).optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
export type GetUserDto = z.infer<typeof getUserDto>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;
