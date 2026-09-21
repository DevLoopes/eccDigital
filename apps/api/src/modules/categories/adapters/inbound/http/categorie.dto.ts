import z from "zod";

export const createCategorieDto = z.object({
    userId: z.string().uuid(),
    name: z.string().trim().min(2).max(100),
})

export type CreateCategorieDto = z.infer<typeof createCategorieDto>;