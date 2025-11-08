# 📝 Tasks App

> **Projeto de Estudo** - Aplicação moderna de gerenciamento de tarefas construída com React 19 e TypeScript.

## 📋 Sobre o Projeto

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

## 🚀 Tecnologias Utilizadas

### Core

- [**React 19**](https://react.dev/) - Biblioteca JavaScript para interfaces de usuário
- [**TypeScript**](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [**Vite**](https://vite.dev/) - Build tool moderna e rápida

### Estilização

- [**Tailwind CSS v4**](https://tailwindcss.com/) - Framework CSS utility-first
- [**Lucide React**](https://lucide.dev/) - Ícones modernos e customizáveis

### Bibliotecas

- [**Sonner**](https://sonner.emilkowal.ski/) - Notificações toast elegantes
- [**next-themes**](https://github.com/pacocoursey/next-themes) - Gerenciamento de temas
- [**class-variance-authority**](https://cva.style/) - Gerenciamento de variantes de classes
- [**clsx**](https://github.com/lukeed/clsx) & [**tailwind-merge**](https://github.com/dcastil/tailwind-merge) - Utilitários para classes CSS

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

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- pnpm, npm ou yarn
- API rodando (veja [Tasks API](https://github.com/cguifernandes/tasks-api))

### Instalação

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

### Principais Endpoints

- `POST /auth/register` - Cadastro de usuário
- `POST /auth/login` - Login e obtenção do token JWT
- `GET /tasks/` - Listar todas as tarefas
- `POST /tasks/` - Criar nova tarefa (protegido)
- `PUT /tasks/:id` - Atualizar tarefa (protegido)
- `DELETE /tasks/:id` - Deletar tarefa (protegido)

## 🎨 Features de UI/UX

- **Sistema de Design Consistente** - Componentes baseados em Radix UI
- **Tema Dark/Light** - Alternância suave entre temas
- **Animações Fluidas** - Transições e micro-interações
- **Loading States** - Feedback visual durante requisições
- **Error Handling** - Tratamento elegante de erros
- **Responsive Design** - Layout adaptável para mobile e desktop

## 🧠 Conceitos Aplicados

Este projeto foi desenvolvido aplicando diversos conceitos modernos de React e boas práticas:

### Arquitetura

- **Component Composition** - Composição de componentes reutilizáveis
- **Context API** - Gerenciamento de estado global
- **Custom Hooks** - Lógica reutilizável encapsulada
- **Type Safety** - TypeScript para prevenir erros

### Padrões

- **Separation of Concerns** - Separação clara de responsabilidades
- **DRY (Don't Repeat Yourself)** - Código reutilizável
- **SOLID Principles** - Código limpo e manutenível
- **Compound Components Pattern** - Componentes compostos flexíveis

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview

# Linting
pnpm lint
```

## 🎓 Aprendizados

Este projeto foi desenvolvido com foco em aprendizado de:

- ✅ React 19 e suas novas features
- ✅ TypeScript para type safety
- ✅ Context API para gerenciamento de estado
- ✅ Integração com APIs REST
- ✅ Autenticação JWT no frontend
- ✅ Tailwind CSS v4 (nova versão)
- ✅ Componentes acessíveis com Radix UI
- ✅ Boas práticas de organização de código

## 🤝 Contribuindo

Este é um projeto de estudo, mas contribuições, sugestões e feedbacks são sempre bem-vindos!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source e está disponível para fins de estudo.

---

**Desenvolvido com 💜 para aprendizado**
