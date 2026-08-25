**Estrutura Da API**

```text
api/
|
|--infra/
|       |--common/
|       |        |--configs/
|       |        |         L_env.schemas.ts 
|       |        |--logger/
|       |        |        L _custom.logger.ts
|       |        L-utils/
|       |               L_fns.ts
|       L-drizzle/
|                |--drizzle.module.ts
|                L_drizzle.service.ts
|--modules/
|         L_users/
|               |--adapters/
|               |          |--inbound
|               |          |         L_http
|               |          |              |--get-users.dto.ts
|               |          |              |--users.controller.spec.ts
|               |          |              L_users.controller.ts
|               |          L_outbound/
|               |                    |--mappers/
|               |                    |         L_users.mapper.ts
|               |                    L_persistence/
|               |                                 L_drizzle-users.repository.ts
|               |--application/
|               |             |--ports/
|               |             |        L_users.repository.port.ts
|               |             L_use-cases/
|               |--domain/
|               |        |--entities/
|               |        |          L_users.entity.ts
|               |        |--exceptions/
|               |        |--repositories/
|               |        |             L_users.repository.ts
|               |        L_services/
|               |                  |--users.service.spec.ts
|               |                  L_users.service.ts
|               L_users.module.ts
|
|--app.module.ts
L_mains.ts