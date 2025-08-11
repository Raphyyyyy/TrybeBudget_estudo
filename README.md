# Boas-vindas ao repositório do projeto TrybeBudget!

Para realizar o projeto, atente a cada passo descrito a seguir. Se tiver alguma dúvida, envie uma mensagem pelo Discord! #vamoquevamo 🚀

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu projeto, você deverá criar um *Pull Request* neste repositório.

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/od-fe-001-planejamento-financeiro.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd od-fe-001-planejamento-financeiro`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `master`

  - Verifique se você está na branch `master`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`.
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-od-fe-001-planejamento-financeiro`

  4. Adicione as mudanças ao stage do Git e faça um `commit`

  - Verifique se as mudanças ainda não estão no stage.
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao stage do Git.
    - Exemplo:
      - `git add .` (adicionando todas as mudanças – que estavam em vermelho – ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial.
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_)

  5. Adicione a branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-od-fe-001-planejamento-financeiro`

  6. Crie um novo Pull Request (PR)

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/od-fe-001-planejamento-financeiro/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/od-fe-001-planejamento-financeiro/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, verificamos se você é capaz de:

  - criar uma aplicação React com rotas
  - fazer requisições para APIs externas
  - gerenciar estado local e global da aplicação

</details>

# Orientações

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Este projeto já possui o ESLint configurado. Para verificar se existe algum erro de lint em seu projeto, rode o comando:

  `npm run lint`

  ⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠
</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Os testes deste projeto foram feitos por meio do [Cypress](https://www.cypress.io/how-it-works/). A resolução usada nos teste de layout é `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  Para o projeto ser validado, ele deve passar por todos os testes de comportamento. Para executar os teste, rode o comando: 
  
  ```bash
   npm run cy
  ```

  Esse comando roda a suíte de testes do Cypress que verifica se o fluxo geral e os requisitos funcionais estão funcionando como deveriam.
  
  Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

  Esses testes não consideram o layout de maneira geral, mas, sim, os atributos e as informações corretas. Então, preste atenção nesse aspecto. Os testes devolverão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

  > ⚠️ *Importante*: Sua aplicação deve estar rodando para que o Cypress no terminal possa testar.
</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

  Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

  Você pode estar se perguntando: *Como deixo meu projeto com um layout mais atrativo?* 🤔

  Para isso, disponibilizamos [este protótipo do Figma](https://www.figma.com/file/Dso6ToMiYiowrZILFiXipj/Projeto-Final-%7C-Curso-Fundamentos-de-Front-End-(Copy)?type=design&node-id=402%3A20312&mode=design&t=0CXielhkBGMbcZY0-1)!

  ⚠️ A estilização de sua aplicação não será avaliada nesse projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo do seu jeito.

</details>

# Simulando uma API com o `json-server`

Este projeto já vem com o `json-server` e `json-server-auth` instalados e com os arquivos necessários na pasta `server`. Você pode editar os arquivos `server/db.json` e `server/routes.json` conforme a sua necessidade.

Consulte a documentação do [`json-server`](https://github.com/typicode/json-server) e do [`json-server-auth`](https://github.com/jeremyben/json-server-auth?tab%253Dreadme-ov-file) para entender melhor o funcionamento do back-end do projeto.

Para iniciar o servidor, use o comando:

```bash
npm run server
```

É importante reparar que o servidor está configurado para ter um delay de 1500 milissegundos, para que a simulação fique mais próximo do comportamento de uma API real.

## Configurando o servidor para os testes

Os testes **não fazem mock das requisições**, então tenha em mente que o servidor usado no desenvolvimento também será usado nos testes.

Para garantir a integridade, antes de cada teste é feito uma limpeza no banco de dados (o arquivo `server/db.json` é apagado) e o conteúdo do arquivo `server/db-clear.json` será usado como base de dados "limpa".

Você pode alterar o arquivo `server/db.clear.json` de acordo com a necessidade do seu projeto, mas lembre-se das seguintes regras:
- você *não deve apagar a chave `users`* desse arquivo, pois o _users_ cadastrado nesse arquivo será usado para acessar a aplicação nos testes;
- a estrutura desse arquivo precisa refletir fielmente a estrutura usada pela aplicação.
- o usuário e senha padrão para acesso são:
  - user: user@domain.com
  - password: user@password


# Requisitos

## Página de login

Crie uma página para que a pessoa usuária se identifique com e-mail e senha.

### 1. Crie uma página inicial de login com os seguintes campos e características:

* A rota para esta página deve ser `/login`.

* Crie os campos para que a pessoa usuária insira seu e-mail e sua senha:
  - O campo para o e-mail precisa ter o atributo `name="email"`.
  - O e-mail precisa estar em um formato válido, como 'alguem@alguem.com'.
  - O campo para a senha precisa ter o atributo `name="password"`.

* Crie um botão com o texto `Entrar`:
  - A rota deve mudar para `/` após o login ser feito com sucesso.


* Adicione validações ao formulário:
  - O botão `Entrar` precisa estar **desabilitado** caso o e-mail não tenha um formato válido.
  - Uma mensagem de erro com o texto `Erro ao fazer login` deve ser exibida caso o email utilizado não esteja cadastrado.
  - Uma mensagem de erro com o texto `Erro ao fazer login` deve ser exibida caso a senha utilizada esteja errada.

* Faça o redirecionamento quando o login for bem sucedido:
  - Ao utilizar email e senha corretos, a pessoa usuária deve ser redirecionada para a rota `/`.

* Consulte a documentação do [`json-server-auth`](https://github.com/jeremyben/json-server-auth?tab%253Dreadme-ov-file#login-) para entender como chamar as rotas de login do BACK-END.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - A rota para a página deve ser `/login`.
  - Existe um formulário com campo `email`, campo `password` e botão `enviar`.
  - O botão `enviar` deve estar desabilitado caso o campo `email` não seja preenchido com um formato de email válido.
  - Uma mensagem de erro é exibida ao tentar fazer login com um email não cadastrado.
  - Uma mensagem de erro é exibida ao tentar fazer login com a senha errada.
  - O login é feito com sucesso ao usar login e senha corretos.
</details>

### 2. Faça o controle de navegação das rotas

  * Caso a pessoa acesse a rota `/` sem estar logada, ela deve ser redirecionada para a rota `/login`.

  * Caso a pessoa acesse a rota `/login` quando já estiver logada, ela deve ser redirecionada para a rota `/`.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - Caso a pessoa não esteja logada ao acessar a rota `/`, ela deve ser redirecionada para `/login`
  - Caso a pessoa já esteja logada ao acessar a rota `/login`, ela deve ser redirecionada para a rota `/`
</details>

---

## Página Home

Crie uma página para que a pessoa usuária gerencie as diferentes funcionalidades da aplicação. A rota para esta página deve ser `/`.

> ⚠️ *Importante*: todos os requisitos da página Home iniciam com o fluxo de login antes de avaliar o que é pedido.

### 3. Crie os elementos da página Home

  * A página deve conter um banner com o texto `Chegou a hora de organizar suas finanças pessoais!`.

  * A página deve conter um link que redirecione para a página `/salarios`

  * A página deve conter um link que redirecione para a página `/orcamento`

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - A página deve conter o texto do banner EXATAMENTE como descrito no requisito.
  - A página deve conter um link que redireciona para página `/salarios`.
  - A página deve conter um link que redireciona para página `/orcamento`.\
  
</details>

---

## Página de salários

Crie uma página para que a pessoa usuária possa adicionar novos salários, ver a lista de salários cadastrados e excluir algum item da lista. A rota para esta página deve ser `/salarios`.

> ⚠️ *Importante*: todos os requisitos da página de salários iniciam com o fluxo de login antes de avaliar o que é pedido.

### 4. Exiba uma mensagem quando não houver salários cadastrados

  - Ao acessar a rota `/salarios`, quando nenhum salário estiver cadastrado:
    
    - o texto `Nenhum salário adicionado` deve ser exibido;
    - o texto `Adicione um salário para fazer o cálculo` deve ser exibido;
    - um botão com o texto `Adicionar salário` deve ser exibido;

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - Os textos, EXATAMENTE iguais, informando que não há salários cadastrados e o botão `Adicionar salário` são exibidos.
  
</details>

### 5. Desenvolva o formulário para adicionar um novo salário

- Ao clicar no botão `Adicionar salário`, um formulário deve ser exibido.

- O formulário exibido deve ter a seguinte estrutura:
  
  - um título com o texto `Adicione um novo salário`;
  - um input com o atributo `name="grossSalary"` que receberá o valor do salário bruto;
  - um input com o atributo `name="deductions"` que receberá o valor dos descontos adicionais no salário;
  - um input com o atributo `name="date"` que receberá a data de quando esse salário foi alcançado;
    - esse input deve ser, obrigatoriamente, do tipo `date`
  - um input com o atributo `name="dependents"` que receberá o número de dependentes que a pessoa possui;
  - um botão com o texto `Cancelar`, que será usado para ocultar o formulário;
  - um botão com o texto `Calcular` que será usado para disparar o cálculo do salário líquido.

- O formulário deve ter os seguintes comportamentos:
  - ao clicar no botão `Cancelar`, o formulário deve deixar de ser exibido;
  - o botão `Calcular` deve iniciar desabilitado, e ser habilitado com as seguinte condições: 
    
    - o campo `grossSalary` deve ter um valor maior que zero;
    - o campo `deductions` deve ter um valor maior ou igual a zero;
    - o campo `date` deve estar preenchido com uma data válida;
    - o campo `dependents` deve ter um valor maior ou igual a zero;

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - O formulário é exibido ao clicar no botão `Adicionar salário`.
  - O formulário deixa de ser exibido ao clicar no botão `Cancelar`.
  - O formulário possui a estrutura pedida.
  - O botão `Calcular` começa desabilitado quando o formulário é exibido
  - O botão `Calcular` permanece desabilitado quando o campo `grossSalary` não é preenchido corretamente.
  - O botão `Calcular` permanece desabilitado quando o campo `deductions` não é preenchido corretamente.
  - O botão `Calcular` permanece desabilitado quando o campo `date` não é preenchido corretamente.
  - O botão `Calcular` permanece desabilitado quando o campo `dependents` não é preenchido corretamente.
  - O botão `Calcular` é habilitado quando todos os campos são preenchidos corretamente.
</details>

### 6. Exiba as informações calculadas sobre salário líquido

> ⚠️ *Importante*: para realizar os cálculos, utilize a função `calculateNetSalary` que está no arquivo `src/helpers/taxes.ts`. **Se você utilizar outro cálculo ou alterar a implementação dessa função o resultado final pode ser diferente e isso fará com que o requisito seja reprovado**.

- Ao clicar no botão `Calcular`, o formulário deve desaparecer e os seguintes elementos devem ser exibidos:
  
  - o salário bruto da pessoa *(valor informado pela pessoa)*;
  - o salário líquido da pessoa **(valor calculado)**;
  - o valor do desconto do INSS **(valor calculado)**;
  - o valor do desconto do imposto de renda **(valor calculado)**;
  - o valor dos outros descontos *(valor informado pela pessoa)*;
  - um botão com o texto `Editar`.
  - um botão com o texto `Salvar`.

- Todos os valores monetários devem estar no padrão `R$ 1.000,00`.

> 💡 *Dica*: você pode usar o método [NumberFormat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) da API `Intl` do Javascript para formatar os números no padrão correto.

- Ao clicar no botão `Editar`, as informações calculadas devem desaparecer e o formulário deve ser exibido novamente contendo os valores informados anteriormente.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - O salário líquido é calculado e exibido corretamente.
    - o salário bruto da pessoa (valor informado pela pessoa) é exibido;
    - o salário líquido da pessoa (valor calculado) é exibido;
    - o valor do desconto do INSS (valor calculado) é exibido;
    - o valor do desconto do imposto de renda (valor calculado) é exibido;
    - o valor dos outros descontos (valor informado pela pessoa)é exibido.

  - Ao clicar no botão `Editar`, as informações calculadas deixam de ser exibidas e o formulário é exibido novamente.
  
</details>

### 7. Salve as informações calculadas e exiba uma lista com todos os salários

- Após calcular o salário líquido, ao clicar no botão `salvar`, as informações devem ser salvas em uma lista de salários.

- Se houver salários cadastrados, uma lista com cada salário deve ser exibida.

- Para cada salário cadastrado, exiba as seguintes informações:
  - salário líquido;
  - salário bruto;
  - data;
  - um botão com o texto `Excluir salário`.

- Se houver salários cadastrados, a mensagem `Nenhum salário adicionado` não deve ser exibida.

- O botão `Adicionar salário` deve continuar sendo exibido e tendo o mesmo comportamento de exibir o formulário de cadastro.

- Todos os valores monetários devem estar no padrão `R$ 1.000,00`.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />

  - A mensagem `Nenhum salário adicionado` não é exibida quando existe algum salário cadastrado
  - Um salário cadastrado é exibido após ser salvo
  - Uma lista de salários é exibida quando mais de um salário é cadastrado

</details>

### 8. Remova um salário ao clicar no botão `Excluir salário`

- Ao clicar no botão `Excluir salário` de um determinado salário, este salário deve ser removido da lista e não ser mais exibido.

- Caso todos os salários sejam excluídos, a mensagem `Nenhum salário adicionado` deve ser renderizada novamente.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />

  - Um salário é removido da lista quando o botão `Excluir salário` é clicado
  - A mensagem `Nenhum salário adicionado` é exibida quando todos os salários cadastrados são removidos

</details>

---

## Página de Orçamento

Crie uma página para que a pessoa usuária possa adicionar novos gastos, ver a lista de gastos cadastrados e excluir algum item da lista. A rota para esta página deve ser `/orcamento`.

> ⚠️ *Importante*: todos os requisitos da página de orçamento iniciam com o fluxo de login e de adição de um salário antes de avaliar o que é pedido.

### 9. Exiba uma mensagem quando não houver gastos cadastrados no orçamento

  - Ao acessar a rota `/orcamento`, quando nenhum gasto estiver cadastrado:
    
    - o texto `Nenhum gasto adicionado` deve ser exibido;
    - o texto `Cadastre um gasto no orçamento atual` deve ser exibido;
    - um botão com o texto `Cadastrar gasto` deve ser exibido;

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - Os textos, EXATAMENTE iguais, informando que não há gastos cadastrados e o botão `Cadastrar gasto` são exibidos.
  
</details>

### 10. Crie um formulário para adicionar um novo gasto

- Ao clicar no botão `Cadastrar gasto`, um formulário deve ser exibido.

- O formulário exibido deve ter a seguinte estrutura:
  
  - um título com o texto `Adicionar novo gasto`;
  - um input com o atributo `name="name"` que receberá o nome do gasto;
  - um select com o atributo `name="type"` que deverá ter as seguintes opções:
    - uma option com o atributo `value="needs"`, representando a categoria gastos essenciais;
    - uma option com o atributo `value="wants"`, representando a categoria Lazer e desejos;
    - uma option com o atributo `value="savings"`, representando a categoria Investimentos;
  - um input com o atributo `name="amount"` que receberá o valor total do gasto;
  - um botão com o texto `Cancelar`, que será usado para ocultar o formulário;
  - um botão com o texto `Salvar` que será usado para cadastrar o gasto.

- O formulário deve ter os seguintes comportamentos:
  - ao clicar no botão `Cancelar`, o formulário deve deixar de ser exibido;
  - o botão `Salvar` deve iniciar desabilitado, e ser habilitado com as seguinte condições:
    - o campo `name` deve estar preenchido;
    - o campo `type` deve ter um valor selecionado;
    - o campo `amount` deve ter um valor maior que zero;

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />

  - O formulário é exibido ao clicar no botão `Cadastrar gasto`.
  - O formulário deixa de ser exibido ao clicar no botão `Cancelar`.
  - O formulário possui a estrutura pedida.
  - O botão `Salvar` começa desabilitado quando o formulário é exibido.
  - O botão `Salvar` permanece desabilitado quando o campo `name` não é preenchido corretamente.
  - O botão `Salvar` permanece desabilitado quando o campo `amount` não é preenchido corretamente.
  - O botão `Salvar` é habilitado quando todos os campos são preenchidos corretamente.
</details>

### 11. Salve o gasto informado e exiba uma lista com todos os gastos cadastrados

- Ao clicar no botão `Salvar`, as informações devem ser salvas em uma lista de gastos.

- Se houver gastos cadastrados, uma lista com cada gasto deve ser exibida.

- Para cada gasto cadastrado, exiba as seguintes informações:
  - nome do gasto;
  - valor total do gasto;
  - tipo do gasto, seguindo a seguinte regra:
    - gastos do tipo `needs` devem exibir o texto "Gastos essenciais";
    - gastos do tipo `wants` devem exibir o texto "Lazer e desejos";
    - gastos do tipo `savings` devem exibir o texto "Investimentos";
  - um botão com o texto `Excluir `.

- Se houver gastos cadastrados, a mensagem `Nenhum gasto adicionado` não deve ser exibida.

- O botão `Cadastrar gasto` deve continuar sendo exibido e tendo o mesmo comportamento de exibir o formulário de cadastro.

- Todos os valores monetários devem estar no padrão `R$ 1.000,00`.

> 💡 *Dica*: você pode usar o método [NumberFormat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) da API `Intl` do Javascript para formatar os números no padrão correto.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />

  - A mensagem `Nenhum gasto adicionado` não é exibida quando existe algum gasto cadastrado
  - Um gasto cadastrado é exibido após ser salvo
  - Uma lista de gastos é exibida quando mais de um gasto é cadastrado

</details>

### 12. Remova um gasto ao clicar no botão `Excluir`

- Ao clicar no botão `Excluir` de um determinado gasto, este gasto deve ser removido da lista e não ser mais exibido.

- Caso todos os gastos sejam excluídos, a mensagem `Nenhum gasto adicionado` deve ser renderizada novamente.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />
  
  - Um gasto é removido da lista quando o botão `Excluir` é clicado
  - A mensagem `Nenhum gasto adicionado` é exibida quando todos os gastos cadastrados são removidos

</details>

---
## Bônus

> ⚠️ *Importante*: apesar de ter avaliação automatizada, esse requisito não é obrigatório e não contará na sua nota final.

### 13. Calcule qual a porcentagem do salário cada tipo de gasto representa

- Ao entrar na página `/orcamento`, recupere as informações do salário mais recente, baseado na data cadastrada do salário.

- Faça a somatória de todos os gastos de cada categoria.

- Exiba o valor total de cada categoria e qual a porcentagem que esse valor representa do **salário líquido** mais recente.

- Para calcular a porcentagem, utilize a fórmula com arredondamento: `Math.ceil(valorTotal/salarioLiquido * 100)`.

- Cada categoria deve ter a somatória e a porcentagem exibidos no seguinte padrão: `R$ 1.000,00 (10%)`.

<br />
<details><summary><strong>O que será verificado</strong></summary>
<br />

  - A somatória e porcentagem por categoria são exibidas corretamente

</details>

---

## Desafio

Agora que você já fez todos os requisitos avaliativos do projeto, o que acha de se desafiar? 

O desafio é deixar seu projeto com o mesmo layout do [Figma](https://www.figma.com/file/Dso6ToMiYiowrZILFiXipj/Projeto-Final-%7C-Curso-Fundamentos-de-Front-End-(Copy)?type=design&node-id=402%3A20312&mode=design&t=0CXielhkBGMbcZY0-1).
Além dda parte visual, você também pode implementar algumas funcionalidades a mais que estão sugeridas nesse layout.
