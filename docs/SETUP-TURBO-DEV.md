# Como rodar o monorepo (pnpm + turbo) com banco e apps (web, api)

Este documento descreve como conectar as partes do projeto (packages/database, apps/api e apps/web) para que, a partir da raiz do repositório, você consiga iniciar o banco e executar frontend e backend em modo desenvolvimento usando `pnpm` + `turbo`.

Resumo rápido
- Requisitos: `pnpm` (v11+), `docker` e `docker-compose` (ou `docker compose`).
- Comandos principais (opções):
  - Iniciar banco (em background): `docker compose up -d`
  - Rodar todos os dev scripts: `pnpm install -w` e `pnpm run dev:all`

Visão geral do fluxo
- O Turbo já está configurado no root (`turbo.json`) com uma task `dev` persistente. O script `dev:all` no `package.json` raíz executa `turbo dev`.
- Para que `turbo dev` execute os serviços, cada pacote/aplicação deve ter um `script` chamado `dev`. No repositório atual:
  - `apps/web` possui `dev: "next dev"` ✅
  - `apps/api` possui `dev: "tsx watch src/server.ts"` ✅
  - `packages/database` não possui `dev` (usa comandos `drizzle-kit`), portanto o banco não é iniciado por `turbo` automaticamente — recomendamos iniciar o banco via `docker compose`.

Arquivos importantes e observações
- `turbo.json`: já contém `dev` como task persistente e inclui `.env` em `globalDependencies`.
- `docker-compose.yml`: define o serviço `postgres-db` e um serviço `api` para rodar em container (comentado o serviço `web`).
- `packages/database/drizzle.config.ts`: lê `../../.env` e usa `DATABASE_URL` via `process.env.DATABASE_URL`.
- `apps/api/src/infra/common/configs/env.schemas.ts`: o servidor espera `DATABASE_URL` no `process.env` (via `envSchema`).

Atenção: nome das variáveis de ambiente
- Há uma pequena inconsistência: `packages/database` (Drizzle) usa `DATABASE_URL` enquanto `apps/api` espera `DATABASE_URL`.
- Soluções recomendadas (escolha uma):
  1) Definir ambas no `.env` (mais simples):
     - `DATABASE_URL=postgresql://user:pass@localhost:5432/dbname`
     - `DATABASE_URL=$DATABASE_URL` (alguns shells/gestores de env suportam isso; caso não, duplique o valor)
  2) Unificar o código: ajustar `drizzle.config.ts` para usar `DATABASE_URL` (requer alterar código)

Exemplo mínimo de `.env` (na raiz do repositório)

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=sifr_db
POSTGRES_PORT=5432
API_PORT=3333
WEB_PORT=3000
# URLs usadas pelo código/Drizzle
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/sifr_db

Passo a passo — opção recomendada (sem alterar código)
1. Na raiz do repositório, crie/copiar um arquivo `.env` conforme o exemplo acima.
2. Inicie o banco com Docker Compose:

```bash
docker compose up -d
```

Isso criará o container `my_postgres` (conforme `docker-compose.yml`). Aguarde o `healthcheck` ficar ok.

3. Instale dependências na workspace (uma única vez):

```bash
pnpm install -w
```

4. Rodar todas as tasks de desenvolvimento com Turbo:

```bash
pnpm run dev:all
```

Observações:
- `pnpm run dev:all` executa `turbo dev` no root que, por sua vez, invocará o `dev` em `apps/api` e `apps/web` em paralelo (graças a `dependsOn: ["^dev"]` no `turbo.json`).
- Como `packages/database` não tem `dev`, o banco precisa ser levantado separadamente (por `docker compose`). Se preferir, você pode criar um pequeno package com script `dev` que executa `docker compose up` e incluí-lo no workspace.

Sugestões para automação (opcional, requer editar `package.json`)
- Adicionar no root um script que rode o docker compose e o turbo em sequência:

```json
"scripts": {
  "dev": "docker compose up -d && pnpm run dev:all"
}
```

Ou, se preferir não rodar em background, para ver logs:

```json
"scripts": {
  "dev": "docker compose up --build"
}
```

Mas como você pediu para não alterar o código, manter os passos manuais (`docker compose up -d` + `pnpm run dev:all`) é a opção sem alteração.

Verificações e troubleshooting
- Se `apps/api` falhar ao conectar no banco:
  - Verifique se o container Postgres está rodando: `docker ps`.
  - Verifique o valor de `DATABASE_URL` no `.env` e se corresponde ao host/porta expostos pelo `docker-compose`.
  - Logs do Postgres: `docker logs my_postgres`.
- Se `turbo dev` não iniciar algum app:
  - Confirme que cada app tem `script` `dev` no respectivo `package.json`.
  - Rode `pnpm --filter ./apps/api dev` manualmente para isolar problemas.
- Portas em uso: ajuste `API_PORT`/`WEB_PORT` no `.env` se necessário.

Como o Turbo lida com variáveis de ambiente
- O `turbo.json` já inclui `.env` em `globalDependencies`, então mudanças no `.env` podem disparar reexecuções nas tasks.
- Além disso, se você precisar que variáveis específicas sejam passadas, defina `globalPassThroughEnv` em `turbo.json`.

Próximos passos sugeridos (opcionais)
- Criar um pequeno package `dev-tools` com script `dev` que executa `docker compose up` para que o banco também seja controlado pelo `turbo dev`.
- Unificar nomes de variáveis de ambiente (`DATABASE_URL`) para reduzir ambiguidade.
- Adicionar healthchecks e scripts de wait-for-db no `apps/api` para evitar tentativas de conexão antes do DB ficar pronto.

Conclusão
- Com `.env` configurado e o Postgres iniciado via `docker compose`, executar `pnpm install -w` e em seguida `pnpm run dev:all` deverá iniciar `apps/api` e `apps/web` em modo dev via `turbo`.

Se quiser, eu posso:
- Sugerir e aplicar automaticamente um `script dev` no root que combine `docker compose up -d` + `turbo dev`.
- Criar um `package` pequeno `dev-tools` com `dev` que levanta o banco via Docker e que seja incluído no fluxo do `turbo dev`.
