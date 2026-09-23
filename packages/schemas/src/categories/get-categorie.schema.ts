import { z } from "zod";

export const GetDetailedCategorieParamSchema = z.object({
  id: z.string().uuid({ message: "ID precisa ser um UUID válido" }),
});
export type CategorieIdParam = z.infer<typeof GetDetailedCategorieParamSchema>;
