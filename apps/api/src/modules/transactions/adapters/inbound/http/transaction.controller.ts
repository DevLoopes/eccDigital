import { Router, type Request, type Response} from "express";
import { CreateTransactionUseCase } from "../../../application/use-cases/create-transaction.use-case.js";
import { createTransactionDto } from "./transaction.dto.js";
import { isOk } from "../../../../../infra/common/utils/result.js";


export class TransactionController {
    public router = Router();

    constructor(
        private readonly createTransactionUseCase: CreateTransactionUseCase
    ) {
        this.initRoutes();
    }

    private initRoutes() {
        this.router.post('/', this.createTransaction.bind(this));
    }

    private async createTransaction(req: Request, res: Response) {
        const parsed = createTransactionDto.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ message: 'Dados inválidos', issues: parsed.error.issues });
        }

        const result = await this.createTransactionUseCase.execute(parsed.data);
        if (!isOk(result)) {
            return res.status(500).json({ message: 'Erro ao conectar/salvar no banco de dados', error: result.error });
        }
        
        return res.status(200).json(result.value);
    }
}