import { ICategoriesRepositoryPort } from "../ports/categorie.repository.port.js";
import { Categorie } from "../../domain/entities/categorie.entity.js";
import {
  CreateCategorieDTO,
  DbError,
} from "../../domain/repositories/categorie.repository.js";
import { Result } from "../../../../infra/common/utils/result.js";

type Input = CreateCategorieDTO;

export class CreateCategorieUseCase {
  constructor(
    private readonly categoriesRepository: ICategoriesRepositoryPort,
  ) {}

  async execute(input: Input): Promise<Result<Categorie, DbError>> {
    const categorie = new Categorie({
        userId: input.userId,
        name: input.name,
    });
    const result = await this.categoriesRepository.create(categorie);
    return result;
  }
}
