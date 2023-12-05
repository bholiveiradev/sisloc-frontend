# Teste Técnico - Frontend

Suponha que você tenha sido solicitado a desenvolver uma e-commerce para o ramo de locação. O cliente solicitou um MVP para validar seu conhecimento, com as seguintes características:

- [x] Portal web responsivo ou aplicativo mobile;
- [x] Autentica&ccedil;ão por e-mail e senha criptografados;
- [x] Tela inicial com uma lista dos produtos disponíveis para comercialização (com foto, descritivo e valor) e um ícone para ir para o carrinho de compras (carrinho está na navbar);
- [x] A tela deve possuir um campo de busca livre, que filtra os produtos possuam os caracteres digitados;
- [x] Ao clicar em um produto na lista, a plataforma deve ir para a tela de detalhe do produto;
- [x] A tela com detalhe do produto deve ser exibida a foto, descritivo, informações técnicas, valor de locação para cada modalidade (diário, semanal, quinzenal e mensal) e um botão adicionar o produto carrinho de compras;
- [x] A tela do carrinho de compras deve exibir o produto com foto, quantidade, valor unitário e total e a opção de alterar a quantidade ou mesmo remover o item do carrinho.

Desenvolva com o MVP solicitado em qualquer tecnologia, e respeitando os seguintes critérios:
  - Portal ou aplicativo
  - Tela de login e autenticação (criar um usuário "fredx@sisloc.com.br" e senha "123Fred");
  - Backend respondendo a chamadas API REST; 
  - Repositório de dados contendo informações da locadora e produtos;

## Pré-requisitos
É preciso ter instalado previamente as seguintes tecnologias:
- [Node.js](https://nodejs.org) - 20.10.0 LTS
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Setup

Yarn:
```sh
yarn install
```
NPM:
```sh
npm i
```
Entre na pasta do projeto e renomeie ou copie o arquivo .env.example, inserindo as informa&ccedil;ões do seu ambiente
```sh
cp .env.example .env
```
```sh
VUE_APP_API_URL=BASE_URL # Like http://localhost:3000/api
VUE_APP_UPLOADS_URL=BASE_UPLOADS_URL # Like http://localhost:3000/uploads
```

### Compila&ccedil;ão e hot-reload para desenvolvimento
Yarn:
```sh
yarn serve
```
NPM:
```sh
npm run serve
```

### Compila&ccedil;ão, minifica&ccedil;ão e otimiza&ccedil;ão para produ&ccedil;ão
Yarn:
```sh
yarn build
```
NPM:
```sh
npm run build
```

### Lints e fixes
Yarn:
```sh
yarn lint
```
NPM:
```sh
npm run lint
```

## Tecnologias Utilizadas
- [Vue.js](https://vuejs.org/) - Framework Frontend
- [Bootstrap 5](https://getbootstrap.com/) e [Bootswatch](https://bootswatch.com/) - UI
- [Vue Router](https://router.vuejs.org/) - Roteador oficial do Vue.js
- [Vuex](https://vuex.vuejs.org/ptbr/) - Store de gerenciamento de estados globais
- [Axios](https://axios-http.com/) - Http client para chamadas ao backend
