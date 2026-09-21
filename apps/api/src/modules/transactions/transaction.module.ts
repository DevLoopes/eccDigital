import { DrizzleTransactionsRepository } from "./adapters/outbound/persistence/drizzle-transaction.repository.js";
import { CreateTransactionUseCase } from "./application/use-cases/create-transaction.use-case.js";
import { TransactionController } from "./adapters/inbound/http/transaction.controller.js";
import { drizzleModule } from "../../infra/drizzle/drizzle.module.js";
import { registry } from "../../infra/common/openapi/openapi.js";
import { createTransactionDto } from "./adapters/inbound/http/transaction.dto.js";

const transactionsRepository = new DrizzleTransactionsRepository(drizzleModule.db);
const createTransactionUseCase = new CreateTransactionUseCase(transactionsRepository);

registry.registerPath({
    method: 'post',
    path: '/transactions',
    tags: ['Transactions'],
    summary: 'CreateTransactionUseCase',
    request: {
        body: {
            content: {
                'application/json': { schema: createTransactionDto },
            },
        },
    },
    responses: {
        201: { description: 'Transação realizada com sucesso' },
    }
});

const transactionsController = new TransactionController(createTransactionUseCase);
export const TransactionsModule = transactionsController.router;