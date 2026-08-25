import { z } from 'zod';

export const createUserDto = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export type CreateUserDto = z.infer<typeof createUserDto>;