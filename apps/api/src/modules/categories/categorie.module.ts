import { DrizzleCategoriesRepository } from "./adapters/outbound/persistence/drizzle-categorie.repository.js";
import { CreateCategorieUseCase } from "./applications/use-cases/create-categorie.use-case.js";
import { CategorieController } from "./adapters/inbound/http/categorie.controller.js";
import { drizzleModule } from "../../infra/drizzle/drizzle.module.js";
import { registry } from "../../infra/common/openapi/openapi.js";
import { createCategorieDto } from "./adapters/inbound/http/categorie.dto.js";


const categoriesRepository = new DrizzleCategoriesRepository(drizzleModule.db);
const createCategorieUseCase = new CreateCategorieUseCase(categoriesRepository);

registry.registerPath({
    method: 'post',
    path: '/categories',
    tags: ['Categories'],
    summary: 'CreateCategorieUseCase',
    request: {
        body: {
            content: {
                'application/json': { schema: createCategorieDto },
            },
        },
    },
    responses: {
        201: { description: 'Categoria criada com sucesso'}
    }
});

const categoriesController = new CategorieController(createCategorieUseCase);
export const CategoriesModule = categoriesController.router;