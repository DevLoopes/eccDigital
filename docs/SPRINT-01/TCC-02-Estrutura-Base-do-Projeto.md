# 📄 TCC-02: Estrutura Base do Projeto e Arquitetura do Sistema

**Sprint:** 01  
**Módulo:** Fundamentação e Arquitetura  
**Documento:** Definição de Arquitetura, Tecnologias e Fluxo de Dados  

---

## 📌 1. Visão Geral e Objetivo Central

O projeto consiste no desenvolvimento de um **Sistema Web de Gestão Financeira Automatizada**, projetado para resolver um dos maiores atritos na vida financeira pessoal e de pequenos negócios: **a inserção manual de dados**.

O objetivo central desta solução é criar um ecossistema onde o usuário consiga gerenciar suas finanças sem a fricção do cadastramento manual repetitivo, unindo a robustez de um sistema de gestão tradicional à inteligência e automação providas por **Inteligência Artificial (LLMs), Model Context Protocol (MCP) e orquestração de fluxos (n8n)**.

### 💡 1.1. A Gênese da Solução e o Diferencial de Mercado
A concepção deste projeto partiu de uma observação pragmática do comportamento do usuário: 
*Ao finalizar um pagamento via aplicativo bancário, o usuário rotineiramente gera um comprovante em PDF e o compartilha em aplicativos de mensagens (como o Telegram ou WhatsApp).* 

No cenário dos aplicativos de finanças atuais (concorrentes de mercado), o usuário precisaria abrir um segundo aplicativo, preencher formulários, categorizar o gasto, digitar o valor e a data. **Isso gera inconsistência, abandono de uso e perda de rastreabilidade.**

**O Diferencial:**  
Este sistema inverte a lógica de entrada de dados. Transformamos o aplicativo de mensagens (Telegram) em uma porta de entrada (interface conversacional). O usuário simplesmente compartilha o PDF do comprovante (ou envia um áudio/texto) para o Chatbot. O orquestrador (n8n) captura esse evento, aciona uma LLM que extrai metadados (data, hora, valor, tipo de transação, destinatário) e via comunicação segura (API REST com validação de tokens), alimenta o banco de dados e atualiza o Dashboard Financeiro em tempo real.

---

## ⚙️ 2. Arquitetura Geral do Sistema

Para suportar essa visão, o sistema foi desenhado sob uma topologia distribuída, garantindo escalabilidade, segurança e separação de responsabilidades.

```text
┌─────────────────────────┐      (1. Envia Comprovante PDF / Áudio)
│         Usuário         ├──────────────────────────────┐
└────────────┬────────────┘                              │
             │                                           ▼
             │ (4. Acessa Dashboard)            ┌─────────────────┐
             ▼                                  │ Chatbot Telegram│
┌─────────────────────────┐                     └────────┬────────┘
│    Frontend (Next.js)   │                              │ (2. Webhook Triggers)
│    Dashboard em T.R.    │                              ▼
└────────────┬────────────┘                     ┌─────────────────┐
             │                                  │       n8n       │
             │ (5. Consome Dados via API)       │ (Orquestrador)  │
             ▼                                  └────┬───────┬────┘
┌─────────────────────────┐      (3. Extração)       │       │ 
│     Backend Node.js     │◄─────────────────────────┘       │ (3.1. Parsing via IA)
│ (Hexagonal Architecture)│                                  ▼
└────────────┬────────────┘                     ┌─────────────────┐
             │                                  │       LLM       │
             │ (6. Persistência ACID)           │ (com MCP Tools) │
             ▼                                  └─────────────────┘
┌─────────────────────────┐
│     Banco de Dados      │
│      (PostgreSQL)       │
└─────────────────────────┘