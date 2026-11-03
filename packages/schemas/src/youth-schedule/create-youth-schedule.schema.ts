import { z } from 'zod';

export const createYouthScheduleSchema = z.object({
  title: z.string().min(3, 'O título do evento é obrigatório.'),
  description: z.string().optional(),
  eventDate: z.string().datetime('Data e hora do evento inválidas.'),
  location: z.string().min(2, 'O local do evento é obrigatório.'),
});

export type CreateYouthScheduleDTO = z.infer<typeof createYouthScheduleSchema>;
