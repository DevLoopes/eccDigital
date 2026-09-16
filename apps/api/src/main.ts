import { AppModule } from './app.module.js';
import { env } from './infra/common/configs/env.schemas.js';
import { CustomLogger } from './infra/common/logger/custom.logger.js';

const app = AppModule.bootstrap();

app.listen(env.PORT, () => {
  CustomLogger.info(`Servidor rodando em http://localhost:${env.PORT}`, 'MAIN');
  CustomLogger.info(`Ambiente de testes (Scalar) em http://localhost:${env.PORT}/api`, 'MAIN');
});