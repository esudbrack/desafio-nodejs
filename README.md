# desafio-nodejs
Desafio Node.js®

## Objetivo: 
Criar uma web api (RESTful) em Node.Js com funcionalidade de login/logout de um Administrador e operações CRUD de Livros e Editora.

## Requisitos técnicos (a solução deve conter)
- Usar Status codes REST
- Validar dados de entrada
- Usar frameworks como Express.js ou outros
- Login do Administrador com Authorization (bearer token) via Header
- Persistência de dados (pode escolher o banco de dados)

## Funcionalidades:
O candidato está livre para escolher as rotas/endpoints da API.

Para a entidade "Livro", os atributos mínimos obrigatórios que desejamos são: ID (único), TÍTULO, AUTOR, EDITORA, PREÇO DE CUSTO e QUANTIDADE.

Para a entidade "Editora", os atributos mínimos obrigatórios que desejamos são: ID (único), NOME, CNPJ.

Deve ser criado algum tipo de relacionamento entre Livro e Editora (e com isso, voce pode mudar os atributos das Entidades acima descritas), onde uma Editora pode fornecer um ou mais livros. Em nosso desafio, um Livro deve ser de apenas uma Editora.

Deve ser possível operações de CRUD nas entidades acima, somente pelo Administrador do sistema.

A listagem de Produtos pode ser pública, mas NÂO pode mostrar o preço de custo.

## Diferenciais (ganha mais pontos se conter):
- Testes unitários
- Boas práticas de desenvolvimento de software com Node.Js para APIs
- Logging (Sentry, SEQ, etc....)
- Encriptar credenciais salvas (do Administrador)
- Deployar a API gerada em cloud (Heroku, Azure, AWS etc...)
- Usar MongoDb

## Processo de submissão (entrega do desafio)

O candidato deve implementar a solução (pacote) e enviar um "Pull Request" para este repositório com a solução final.

O fluxo de Pull Request será:

    1) Candidato fará um "fork público" desse repositório/desafio (não pode clonar direto)
    
    2) Fará o desenvolvimento do seu projeto nesse fork.
    
    3) Commitará e subirá as alterações para o SEU próprio fork.
    
    4) Pelo Github, irá enviar um Pull Request (Não vai fazer o PUSH diretamente para ESTE repositório!, somente PR)
    
    
## Prazo

O candidato terá 2 dias úteis para desenvolvimento e entrega (submissão do Pull Request e endereço de produção na nuvem)

Caso não consiga completar todos os requisitos técnicos ou funcionalidades, pode entregar assim mesmo com o que conseguiu, desde que esteja um "software funcional". 
Avaliaremos o desafio no rigor da vaga pretendida (junior, pleno ou senior).
