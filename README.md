# Teste Técnico - Frontend 🚀

Suponha que você tenha sido solicitado a desenvolver uma e-commerce para o ramo de locação. O cliente solicitou um MVP para validar seu conhecimento, com as seguintes características:

- [x] **Portal web responsivo ou aplicativo mobile** 📱
- [x] **Autenticação por e-mail e senha criptografados** 🔐
- [x] **Tela inicial com lista de produtos, descrições e um ícone para o carrinho de compras** 🛒
- [x] **Campo de busca livre para filtrar produtos** ✨
- [x] **Detalhes do produto com foto, descrição, informações técnicas e opções de locação (diário, semanal, quinzenal e mensal)** 📦
- [x] **Carrinho de compras exibindo produtos, quantidade, valor unitário e total, com opções de alteração ou remoção** 🛍️

## Critérios de Desenvolvimento

Desenvolva o MVP utilizando qualquer tecnologia, seguindo os seguintes critérios:

- **Portal ou aplicativo**
- **Tela de login e autenticação** (usuário: "fredx@sisloc.com.br" | senha: "123Fred")
- **Backend respondendo a chamadas API REST**
- **Repositório de dados contendo informações da locadora e produtos**

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
## Configuração do ambiente
1. Entre na pasta do projeto e renomeie ou copie o arquivo .env.example
```sh
cp .env.example .env
```
2. Configure as variáveis de ambiente
```sh
VUE_APP_API_URL=BASE_URL # Like http://localhost:3000/api
VUE_APP_UPLOADS_URL=BASE_UPLOADS_URL # Like http://localhost:3000/uploads
```
3. Rode o projeto
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
