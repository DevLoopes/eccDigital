import { z } from 'zod';

export const getLessonsQuerySchema = z.object({
  topicId: z.string().uuid('ID do tema inválido.').optional(),
  page: z.coerce.number().optional().default(1),
  limit: z.coerce.number().optional().default(10),
  search: z.string().optional(),
});

export type GetLessonsQueryDTO = z.infer<typeof getLessonsQuerySchema>;
