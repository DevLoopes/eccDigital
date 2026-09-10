import { z } from 'zod';

export const createUserDto = z.object({
  name: z.string().min(2).max(150),
  email: z.string().email().max(150),
  password: z.string().min(8).max(255),
});

export type CreateUserDto = z.infer<typeof createUserDto>;