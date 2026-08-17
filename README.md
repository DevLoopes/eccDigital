# Sistema Web de Finanças Automatizado

## 📌 Descrição do Projeto

O projeto consiste no desenvolvimento de um **sistema web de gestão financeira automatizada**, criado para auxiliar pessoas e pequenas empresas no controle, organização e análise de suas informações financeiras.

A solução utiliza tecnologias de **Inteligência Artificial (IA), Large Language Models (LLMs), Model Context Protocol (MCP) e n8n** para automatizar tarefas que normalmente exigem processos manuais.

A plataforma será capaz de **cadastrar, consultar, organizar, interpretar e apresentar informações financeiras** de forma integrada. O usuário poderá registrar receitas, despesas, contas e categorias por meio de uma interface web ou utilizando comandos em linguagem natural.

Por meio da integração com **LLMs**, o sistema poderá compreender solicitações realizadas pelo usuário, como perguntas sobre seus gastos, receitas ou saldo, transformando essas solicitações em ações e consultas estruturadas.

O **MCP** será utilizado como mecanismo de integração entre o modelo de linguagem e os recursos do sistema, permitindo que a IA acesse e manipule dados de maneira controlada.

O **n8n** será responsável pela automação e orquestração dos fluxos, conectando o sistema web, banco de dados, modelos de linguagem e demais serviços necessários.

---

## 🎯 Problema

O controle financeiro é uma atividade comum, porém muitas pessoas e pequenos negócios ainda utilizam planilhas, anotações ou aplicativos que exigem o preenchimento manual de diversas informações.

Esse processo pode gerar:

- Perda de tempo;
- Registros inconsistentes;
- Dificuldade para consultar informações;
- Falta de organização;
- Dificuldade para identificar padrões de gastos;
- Baixa capacidade de análise financeira;
- Dependência de processos manuais.

Além disso, mesmo quando os dados estão registrados, transformar essas informações em conhecimento útil para tomada de decisão pode ser uma tarefa complexa.

Nesse contexto, o projeto busca solucionar esse problema por meio de uma plataforma que combine **gestão financeira tradicional, automação e Inteligência Artificial**.

---

## 🎯 Objetivo Geral

Desenvolver um **sistema web de gestão financeira automatizada** capaz de cadastrar, consultar, organizar e analisar informações financeiras, utilizando **MCP, LLMs e n8n** para integrar Inteligência Artificial e automação aos processos de gestão.

---

## 📋 Objetivos Específicos

- Permitir o cadastro de receitas e despesas;
- Organizar movimentações por categorias e datas;
- Disponibilizar consultas e pesquisas sobre os dados financeiros;
- Permitir interação com o sistema utilizando linguagem natural;
- Utilizar LLMs para interpretar solicitações dos usuários;
- Utilizar MCP para permitir a comunicação controlada entre a IA e os recursos do sistema;
- Utilizar n8n para criar e gerenciar fluxos automatizados;
- Gerar análises e relatórios financeiros;
- Reduzir a necessidade de operações manuais;
- Facilitar a compreensão das informações financeiras;
- Auxiliar o usuário na identificação de padrões e comportamentos de consumo.

---

## ⚙️ Funcionamento da Solução

A arquitetura proposta será composta por:

```text
┌──────────────────────────┐
│       Usuário            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      Sistema Web         │
│      Interface UI        │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       Backend / API      │
└────────────┬─────────────┘
             │
       ┌─────┴─────┐
       ▼           ▼
┌────────────┐ ┌────────────┐
│  Banco de  │ │    n8n     │
│   Dados    │ │ Automação  │
└────────────┘ └─────┬──────┘
                     │
                     ▼
              ┌─────────────┐
              │    MCP      │
              │  Tools/API  │
              └──────┬──────┘
                     │
                     ▼
              ┌─────────────┐
              │    LLM      │
              │ Inteligência│
              │ Artificial  │
              └─────────────┘
