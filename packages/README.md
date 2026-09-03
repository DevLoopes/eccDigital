# A Utilidade das Ações de Chaves Estrangeiras no Banco de Dados

O uso de parâmetros como `onDelete: cascade` faz parte de um conceito fundamental de bancos de dados relacionais chamado **Integridade Referencial**. Eles definem automaticamente o que deve acontecer com os dados "filhos" (dependentes) quando um registro "pai" (principal) é alterado ou apagado.

Configurar isso diretamente no *schema* tira a responsabilidade da sua API de ter que limpar dados manualmente e evita que o banco fique cheio de "dados órfãos" (registros que apontam para IDs que não existem mais).

## Ações de Deleção (`onDelete`)

Aqui estão os principais comportamentos que você pode configurar em uma chave estrangeira (*Foreign Key*):

* **`cascade` (Cascata):** Quando o registro pai é deletado, todos os registros filhos vinculados a ele são apagados instantaneamente. 
  > *Exemplo:* Se um usuário excluir sua conta, todas as transações financeiras dele são deletadas junto para não deixar lixo no banco.

* **`set null` (Tornar Nulo):** Se o pai for deletado, a coluna de referência no filho fica vazia (`NULL`), mas a linha do filho não é apagada. 
  > *Exemplo:* Se você deletar uma Categoria, a transação não some do sistema, ela apenas fica "sem categoria".

* **`restrict` (Restringir) / `no action`:** O banco de dados bloqueia e gera um erro se você tentar deletar o pai enquanto houver filhos vinculados a ele. 
  > *Exemplo:* Proibir a exclusão de um Produto do sistema se ele já estiver vinculado a um Pedido de venda existente.

* **`set default` (Valor Padrão):** Quando o pai é apagado, a referência no filho volta automaticamente para um ID padrão pré-definido na tabela.

---

## Ações de Atualização (`onUpdate`)

Assim como na deleção, existe o parâmetro `onUpdate`. Ele define o que acontece com as referências se a Chave Primária (ID) do registro pai sofrer alguma alteração.

* **Comportamento em Cascata:** Se o ID do pai for atualizado de `10` para `99`, todos os filhos vinculados a ele mudarão sua coluna `user_id` para `99` automaticamente.
* **Aplicações Práticas:** Embora seja menos utilizado hoje em dia devido ao uso de UUIDs (que são imutáveis), o `onUpdate` é útil se você usar dados mutáveis como chaves primárias (ex: um e-mail ou código de matrícula).

---

## Por que fazer isso no Banco e não no Backend?

1. **Performance:** O banco de dados (como o PostgreSQL) é feito em C e otimizado para lidar com ponteiros de dados. Ele faz uma exclusão em cascata de forma nativa e muito mais rápida que o Node.js.
2. **Menos Código:** Sua rota na API não precisa fazer múltiplas *queries* (buscar filhos, deletar filhos, depois deletar o pai). Você roda apenas um `db.delete(users)` e o banco faz o resto.
3. **Consistência Absoluta:** Se sua API travar ou cair no meio de uma requisição de exclusão, as regras estruturais do banco de dados garantem que a sua tabela nunca ficará pela metade.