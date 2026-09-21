import { Categorie } from "../entities/categorie.entity.js";
import { CreateCategorieDTO, DbError, ICategoriesRepository } from "../repositories/categorie.repository.js";
import { Result } from "../../../../infra/common/utils/result.js";

export class CategoriesService {
    constructor(private readonly categoriesRepository: ICategoriesRepository) {}

    build(categorie: Categorie) {
        return {
            id: categorie.id,
            userId: categorie.userId,
            name: categorie.name,
            createdAt: categorie.createdAt,
            updatedAt: categorie.updatedAt,
        };
    }

    async createCategorie(data: CreateCategorieDTO): Promise<Result<Categorie, DbError>> {
        const categorie = new Categorie({
            userId: data.userId,
            name: data.name,
        });

        return this.categoriesRepository.create(categorie);
    }
}