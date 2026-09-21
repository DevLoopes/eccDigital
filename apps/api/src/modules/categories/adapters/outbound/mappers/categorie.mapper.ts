import { Categorie } from "../../../domain/entities/categorie.entity.js";

export class CategorieMapper {
    static toDomain(raw: any): Categorie {
        return new Categorie({
            id: raw.id,
            userId: raw.userId,
            name: raw.name,
        });
    }

    static toPersistence(categorie: Categorie) {
        return {
            id: categorie.id,
            userId: categorie.userId,
            name: categorie.name,
        };
    }
}