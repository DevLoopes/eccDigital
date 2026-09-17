import { z } from 'zod';

export const createUserDto = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const getUserDto = z.object({
  id: z.string().uuid(),
});

export const updateUserDto = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;
export type GetUserDto = z.infer<typeof getUserDto>;
export type UpdateUserDto = z.infer<typeof updateUserDto>;
