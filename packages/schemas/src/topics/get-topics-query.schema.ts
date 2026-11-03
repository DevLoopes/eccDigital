import { z } from 'zod';

export const getTopicsQuerySchema = z.object({
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(10),
  search: z.string().optional(),
});

export type GetTopicsQueryDTO = z.infer<typeof getTopicsQuerySchema>;
