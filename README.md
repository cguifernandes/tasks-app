# Tasks App

Aplicação moderna de gerenciamento de tarefas construída com React 19 e TypeScript.

## 📚 Sobre o Projeto

Este é um projeto desenvolvido para fins de **estudo e aprendizado** de tecnologias modernas de frontend. A aplicação permite que usuários gerenciem suas tarefas diárias com autenticação segura e interface intuitiva.

O projeto consome uma API REST desenvolvida em Go, que está disponível em: [**Tasks API (Golang)**](https://github.com/cguifernandes/tasks-api)

## ✨ Features

- ✅ **Autenticação JWT** - Login e registro de usuários
- ✅ **CRUD de Tarefas** - Criar, listar, editar e excluir tarefas
- ✅ **Gerenciamento de Estado** - Context API para usuário e modais
- ✅ **Tema Claro/Escuro** - Alternância de temas com persistência
- ✅ **Design Responsivo** - Interface adaptável para diferentes dispositivos
- ✅ **Notificações Toast** - Feedback visual para ações do usuário
- ✅ **Validação de Formulários** - Validação client-side com feedback em tempo real

## 🚀 Stacks Utilizadas

### Core

- [**React 19**](https://react.dev/) 
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Vite**](https://vite.dev/)
- [**Tailwind**](https://tailwindcss.com/) 
- [**Lucide React**](https://lucide.dev/) 

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── form/           # Componentes de formulário
│   ├── layout/         # Componentes de layout
│   ├── modals/         # Componentes de modais
│   └── ui/             # Componentes UI reutilizáveis (Radix UI)
├── context/            # Context Providers
│   ├── modal-provider.tsx    # Gerenciamento de modais
│   ├── theme-provider.tsx    # Gerenciamento de tema
│   └── user-provider.tsx     # Gerenciamento de autenticação
├── lib/                # Utilitários e helpers
├── types/              # Definições de tipos TypeScript
├── App.tsx             # Componente principal
└── main.tsx            # Entry point
```

## ⚡ Como rodar local


1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd tasks-app
```
2. Instale as dependências:
```bash
pnpm install
# ou
npm install
# ou
yarn install
```
3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:8080
```
4. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

5. Acesse o projeto em: `http://localhost:5173`

## 🔗 API Backend

Este projeto consome uma API REST desenvolvida em **Go (Golang)** com autenticação JWT.

🔗 **Repositório da API**: [https://github.com/cguifernandes/tasks-api](https://github.com/cguifernandes/tasks-api)

## 🙌 Boas práticas

- **Component Composition** - Composição de componentes reutilizáveis
- **Context API** - Gerenciamento de estado global
- **Custom Hooks** - Lógica reutilizável encapsulada
- **Type Safety** - TypeScript para prevenir erros
- **Separation of Concerns** - Separação clara de responsabilidades
- **DRY (Don't Repeat Yourself)** - Código reutilizável
- **SOLID Principles** - Código limpo e manutenível
- **Compound Components Pattern** - Componentes compostos flexíveis
