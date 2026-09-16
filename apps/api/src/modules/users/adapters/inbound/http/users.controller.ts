import { Router, type Request, type Response } from 'express';
import { CreateUserUseCase } from '../../../application/use-cases/create-user.use-case.js';
import { createUserDto } from './create-user.dto.js';
import { isOk } from '../../../../../infra/common/utils/result.js';


export class UsersController {
  public router = Router();

  // Injetamos o Use Case diretamente no Controller
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    this.initRoutes();
  }

  private initRoutes() {
    this.router.post('/', this.createUser.bind(this));
  }

  private async createUser(req: Request, res: Response) {
    const parsed = createUserDto.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: 'Dados inválidos', issues: parsed.error.issues });
    }

    const result = await this.createUserUseCase.execute(parsed.data);
    if (!isOk(result)) {
      // DB or persistence error
      return res.status(500).json({ message: 'Erro ao conectar/salvar no banco de dados', error: result.error });
    }

    return res.status(201).json(result.value);
  }
}