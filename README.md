## Desafio

O Teste Técnico para Front-End da [BeTalent](https://www.linkedin.com/company/betalenttech/) consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server.

## Pré-requisitos

* Para utilização do projeto no desenvolvimento e necessario ter o [NodeJS](https://nodejs.org/en) instalado(versao usada v22.12.0).
* Gerenciador de versão [Git](https://git-scm.com/).

## Sobre o projeto

Para a construção do projeto foi utilizado o [Vite](https://vite.dev/) com TypeScript e Css com [TailwindCss v4](https://tailwindcss.com/docs/installation/using-vite)

A tabela contem seguintes colunas:

- imagem (thumb do/a usuário/a);
- nome;
- cargo
- data de admissão;
- telefone.

O input de pesquisa permiti filtrar dados por cargo, nome e telefone.


## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/cleitson/Desafio_BeMobile.git
    cd Desafio_BeMobile/
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

### Executar o projeto

> [!IMPORTANT]
> **ATENÇÃO**: É necessário deixar o json-server rodando no terminal para que os dados sejam visualizados no projeto.

1. Iniciando o json-server:
    ```sh
    npm run server
    ```
2. Em outro terminal iniciar o projeto em desenvolvimento:
    ```sh
    npm run dev
    ```

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o ESLint para verificar problemas no código.
- `npm run preview`: Visualiza a versão de produção do projeto.
- `npm run server`: inicializa o servidor json usando dados do arquivo `db.json`

## Contato

- LinkedIn: [Cleitson Lima](https://www.linkedin.com/in/cleitsonlima/)
- Portfólio: [cleitson.dev.br](https://cleitson.dev.br/)
- E-mail: cleitson.ftw@gmail.com