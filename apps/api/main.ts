import { AppModule } from './app.module.js';
import { env } from './src/infra/common/configs/env.schemas.js';
import { CustomLogger } from './src/infra/common/logger/custom.logger.js';

const app = AppModule.bootstrap();

app.listen(env.PORT, () => {
  CustomLogger.info(`Servidor rodando em http://localhost:${env.PORT}`, 'MAIN');
});