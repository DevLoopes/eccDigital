import { eq } from "drizzle-orm";
import { NodePgDatabase } from "drizzle-orm/node-postgres/driver";
import { type ICategoriesRepositoryPort } from "../../../applications/ports/categorie.repository.port.js";
import { Categorie } from "../../../domain/entities/categorie.entity.js";
import { CategorieMapper } from "../mappers/categorie.mapper.js";
import { categories as categoriesTable } from "@repo/database";
import { Result, ok, err } from "../../../../../infra/common/utils/result.js";

type DbError = { code: 'DB_ERROR'; message: string; details?: unknown };

export class DrizzleCategoriesRepository implements ICategoriesRepositoryPort {
    constructor(private readonly db: NodePgDatabase) {}

    // async findById(id: string): Promise<Result<Categorie | null, DbError>> {
    //     try {
    //         const [record] = await this.db.select().from(categoriesTable).where(eq(categoriesTable.id, id));
    //         if (!record) return ok(null);
    //         return ok(CategorieMapper.toDomain(record));
    //     } catch (error: any) {
    //         return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
    //     }
    // }

    // async get(id: string): Promise<Result<Categorie | null, DbError>> {
    //     return this.findById(id);
    // }

    async create(categorie: Categorie): Promise<Result<Categorie, DbError>> {
        try {
            const [inserted] = await this.db
                .insert(categoriesTable)
                .values([CategorieMapper.toPersistence(categorie)])
                .returning();
            return ok(CategorieMapper.toDomain(inserted));
        } catch (error: any) {
            return err({ code: 'DB_ERROR', message: error?.message ?? 'Unknown DB error', details: error });
        }
    }
}
