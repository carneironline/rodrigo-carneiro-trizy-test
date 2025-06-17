# Rodrigo Carneiro Trizy Test

Este é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📦 Instalação

Clone o repositório e instale as dependências:

```sh
git clone git@github.com:carneironline/rodrigo-carneiro-trizy-test.git
cd rodrigo-carneiro-trizy-test
npm install
```

## 🚀 Scripts Disponíveis

-   `npm run dev` — Inicia o servidor de desenvolvimento.
-   `npm run build` — Gera a build de produção.
-   `npm run start` — Inicia o servidor em modo produção.
-   `npm run lint` — Executa o linter.
-   `npm run test` — Executa os testes com Vitest.
-   `npm run test:coverage` — Executa os testes e gera relatório de cobertura.

## 🧪 Testes

Os testes deve ser adicionados em arquivos [`src/**/*.test.*`](src/components/driver-form/driver-form.test.tsx) e utilizam [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/).

Para rodar os testes:

```sh
npm run test
```

Para gerar o relatório de cobertura:

```sh
npm run test:coverage
```

## 📝 Licença

Este projeto está sob licença MIT.
