# 📊 Sistema de Gestão Financeira - Frontend (TCC)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

Este é o repositório Frontend do Sistema de Gestão Financeira, desenvolvido como Trabalho de Conclusão de Curso (TCC) em Sistemas de Informação. 

O projeto foi construído utilizando **Next.js (App Router)** e focado em uma arquitetura modular escalável, permitindo fácil manutenção, responsividade (Mobile-First) e alta performance.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Biblioteca de UI:** [Shadcn/ui](https://ui.shadcn.com/)
* **Requisições & Cache:** [TanStack Query (React Query)](https://tanstack.com/query/latest) + [Axios](https://axios-http.com/)
* **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)

---
## 📂 Arquitetura do Projeto

Para evitar o acoplamento excessivo e a desorganização comum em projetos React, adotamos uma estrutura inspirada no **Feature-Sliced Design**. 

Toda a lógica e os componentes estão centralizados na pasta `src/`:

```text
src/
├── app/                  # Rotas, Páginas e Layouts (Padrão do Next.js App Router)
├── assets/               # Arquivos estáticos locais (Imagens, SVGs, Fontes)
├── commons/              # Recursos globais e compartilhados por toda a aplicação
│   ├── configs/          # Configurações de bibliotecas externas (ex: envs)
│   ├── constants/        # Constantes globais (ex: mapeamento de rotas)
│   ├── hooks/            # Custom Hooks genéricos (ex: useDebounce)
│   └── utils/            # Funções puras e utilitários (ex: formatadores de moeda)
├── components/           # Componentes visuais burros (Apresentacionais)
│   ├── layouts/          # Estruturas de página (Header, Sidebar, Footer)
│   └── ui/               # Componentes base gerados pelo Shadcn (Botões, Inputs)
├── features/             # 🧠 O coração do App: Componentes separados por domínio
│   ├── dashboard/        # Gráficos, métricas e visão geral
│   └── transactions/     # Formulários, listagens e lógica de despesas/receitas
├── providers/            # Provedores de Contexto (React Query, Theme, Auth)
├── services/             # Comunicação HTTP com o Backend Node.js
│   └── api.ts            # Instância configurada do Axios
└── styles/               # Folhas de estilo globais e variáveis do Tailwind

```

## 📂 Sobre
| Tecnologia        | Escolha                                | Por que utilizar?
| ----------------- | -------------------------------------- | ------------------------------------------|
| Linguagem | TypeScript | Unificação da stack. Você poderá exportar as interfaces e tipos dos seus DTOs do back-end diretamente para o front-end, garantindo que o dashboard nunca quebre por esperar um dado diferente do que a API envia.
| Framework | Next.js (React) | Sinergia perfeita com Node.js. O Next.js possui roteamento nativo excelente para painéis de controle, além de permitir componentização rápida. Como o foco está em regras de negócio financeiras, um framework opinativo te salva de ter que configurar Webpack ou roteadores do zero. |
| Busca de Dados | TanStack Query | Dashboards financeiros precisam refletir o saldo em tempo real. O React Query (TanStack) gerencia o cache, faz polling automático e atualiza a interface sem que você precise gerenciar estados complexos manualmente. |
| Estilização | Tailwind CSS + Shadcn/ui | Escrever CSS do zero toma muito tempo, e bibliotecas prontas como Material UI são muito engessadas. O Tailwind garante desenvolvimento rápido, e o Shadcn entrega componentes de dashboard (tabelas, modais, botões) altamente customizáveis e com aparência moderna. |

Metodologias para o Front-end

    Mobile-First (PWA): Como a entrada de dados pode ocorrer tanto pelo Telegram quanto pelo próprio sistema, garanta que o dashboard seja 100% responsivo. Transformá-lo em um Progressive Web App (PWA) permite que o usuário o instale como um app no celular direto do navegador.

    Component-Driven Development (CDD): Construa os componentes isoladamente (ex: "Card de Saldo", "Gráfico de Despesas", "Lista de Transações recentes"). Só depois una tudo nas páginas principais. Isso reduz a complexidade e facilita a manutenção.

Com essa estrutura, você isola a complexidade arquitetural no back-end (onde as transações precisam ser seguras e ACID) e mantém o front-end leve, tipado e focado exclusivamente em consumir a sua API Rest.
