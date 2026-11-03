import { z } from 'zod';

export const createAnnouncementSchema = z.object({
  title: z.string().min(3, 'O título do aviso é obrigatório.'),
  content: z.string().min(5, 'O conteúdo do aviso não pode estar vazio.'),
  active: z.boolean().optional().default(true),
});

export type CreateAnnouncementDTO = z.infer<typeof createAnnouncementSchema>;
