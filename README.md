T# Aplicação CRUD Next.js + TypeScript
Esta é uma aplicação de CRUD (Create, Read, Update, Delete) construída usando [Next.js](https://nextjs.org/) e [TypeScript](https://www.typescriptlang.org/).

## Observação

Esta aplicação funciona sem depender do Firebase, porém para evitar o uso indevido dos meus dados pessoais, o arquivo de configuração do Firebase não foi fornecido neste repositório. Caso deseje executar este aplicativo com o Firebase, basta adicionar seu próprio arquivo de configuração `firebase.ts` à raiz do projeto com o seguinte formato:

```ts
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"  
};

export default firebaseConfig; 

```

Substitua os valores entre aspas por suas próprias configurações do Firebase e o aplicativo funcionará com essas credenciais. Não compartilhe suas credenciais do Firebase com ninguém!


## Começando
1. Clone o repositório
bash
git clone https://github.com/yourusername/nextjs-crud.git
2. Instale as dependências:
bash
npm install 
3. Execute o servidor de desenvolvimento:
bash
npm run dev
Isso iniciará o servidor de desenvolvimento e abrirá http://localhost:3000 no seu navegador.
4. Faça build para produção:
bash
npm run build
Isso criará uma versão de produção otimizada do aplicativo na pasta out.
## Funcionalidades
Esta aplicação possui as operações CRUD básicas:
- Create: Adicionar um novo item
- Read: Visualizar todos os itens ou pesquisar por um item específico
- Update: Atualizar um item existente
- Delete: Excluir um item
Os dados são mantidos no arquivo data.ts e carregados na página do índice.
## Tecnologias
Esta aplicação usa: 
- [Next.js](https://nextjs.org/) - Framework React para produção
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipos 
- [React](https://reactjs.org/) - Biblioteca JavaScript para UI
- [Bootstrap](https://getbootstrap.com/) - Framework CSS 
- [Firebase](https://firebase.google.com/) - Plataforma de desenvolvimento de aplicativos (banco de dados, auth, storage, etc.)
