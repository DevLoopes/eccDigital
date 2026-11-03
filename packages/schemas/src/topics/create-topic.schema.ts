import { z } from 'zod';

export const createTopicSchema = z.object({
  title: z.string().min(2, 'O título do tema é obrigatório.'),
  description: z.string().optional(),
  iconName: z.string().optional(),
});

export type CreateTopicDTO = z.infer<typeof createTopicSchema>;
