import { z } from 'zod';

export const createLessonSchema = z.object({
  topicId: z.string().uuid('ID do tema inválido.'),
  title: z.string().min(3, 'O título da aula é obrigatório.'),
  description: z.string().optional(),
  pdfDriveUrl: z.string().url('A URL do Google Drive deve ser válida.'),
  lessonDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'A data deve estar no formato YYYY-MM-DD.'),
});

export type CreateLessonDTO = z.infer<typeof createLessonSchema>;
