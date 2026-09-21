import { Router, type Request, type Response } from "express";
import { CreateCategorieUseCase } from "../../../applications/use-cases/create-categorie.use-case.js";
import { createCategorieDto } from "./categorie.dto.js";
import { isOk } from "../../../../../infra/common/utils/result.js";

export class CategorieController {
  public router = Router();

  constructor(private readonly createCategorieUseCase: CreateCategorieUseCase) {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post("/", this.createCategorie.bind(this));
  }

  private async createCategorie(req: Request, res: Response) {
    const parsed = createCategorieDto.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Dados inválidos", issues: parsed.error.issues });
    }

    const result = await this.createCategorieUseCase.execute(parsed.data);
    if (!isOk(result)) {
      return res.status(500).json({
        message: "Erro ao conectar/salvar no banco de dados",
        error: result.error,
      });
    }

    return res.status(200).json(result);
  }
}
