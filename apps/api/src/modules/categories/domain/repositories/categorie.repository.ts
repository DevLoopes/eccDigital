import { Categorie } from "../entities/categorie.entity.js";
import { Result } from "../../../../infra/common/utils/result.js";

export type CreateCategorieDTO {
    userId: string;
    name: string;
}

export type DbError = { code: string; message: string; details?: unknown };

export abstract class ICategoriesRepository {
    abstract create(categorie: Categorie): Promise<Result<Categorie, DbError>>;
}