// src/infra/common/openapi/openapi.ts
import { OpenAPIRegistry, OpenApiGeneratorV31, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { env } from '../configs/env.schemas.js';

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

export function buildDocs() {
  return new OpenApiGeneratorV31(registry.definitions).generateDocument({
    openapi: '3.1.0',
    info: {
      title: 'API Reference',
      version: '1.0.0',
    },
    servers: [{ url: `http://localhost:${env.PORT}` }],
  });
}