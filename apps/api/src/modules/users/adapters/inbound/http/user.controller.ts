import { Router, type Request, type Response } from "express";
import { CreateUserUseCase } from "../../../application/use-cases/create-user.use-case.js";
import { GetUserUseCase } from "../../../application/use-cases/get-user.use-case.js";
import { createUserDto, getUserDto } from "./user.dto.js";
import { isOk } from "../../../../../infra/common/utils/result.js";

export class UsersController {
  public router = Router();

  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
  ) {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post("/", this.createUser.bind(this));
    this.router.get("/:id", this.getUserDetails.bind(this));
  }

  private async getUserDetails(req: Request, res: Response) {
    const parsed = getUserDto.safeParse(req.params);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Dados inválidos", issues: parsed.error.issues });
    }

    const result = await this.getUserUseCase.execute({ id: parsed.data.id });
    if (!isOk(result)) {
      return res
        .status(500)
        .json({
          message: "Erro ao conectar/salvar no banco de dados",
          error: result.error,
        });
    }

    if (result.value === null) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).json({
      name: result.value.name,
      email: result.value.email,
    });
  }

  private async createUser(req: Request, res: Response) {
    const parsed = createUserDto.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ message: "Dados inválidos", issues: parsed.error.issues });
    }

    const result = await this.createUserUseCase.execute(parsed.data);
    if (!isOk(result)) {
      return res
        .status(500)
        .json({
          message: "Erro ao conectar/salvar no banco de dados",
          error: result.error,
        });
    }

    return res.status(200).json(result.value);
  }
}
