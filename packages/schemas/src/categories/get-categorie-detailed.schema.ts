import { z } from "zod";

export const CategorieResponseSchema = z.object({
  id: z.string().uuid(),
  user_id: z.object({
    name: z.string(),
  }),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type CategorieResponse = z.infer<typeof CategorieResponseSchema>;
