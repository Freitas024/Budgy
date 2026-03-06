<div align="center">

# 🦅 Budgy

**SaaS Mobile-First para Gestão de Clientes e Serviços**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

---

O **Budgy** é uma plataforma completa pensada para lojistas e prestadores de serviços que precisam organizar seus clientes, orçamentos e serviços em um só lugar. Com uma interface moderna, escura e responsiva, o sistema roda em qualquer dispositivo e conecta-se a um banco PostgreSQL em tempo real.

## ✨ Funcionalidades

| Módulo | Descrição |
|--------|-----------|
| 📋 **Dashboard** | Visão geral com estatísticas, gráficos e atividades recentes |
| 👥 **Clientes** | Cadastro completo com nome, WhatsApp, e-mail e observações |
| 💼 **Serviços** | Catálogo de serviços com preço e instruções para IA |
| 📄 **Orçamentos** | Propostas comerciais com valor, prazo e vínculo ao cliente |
| ⚙️ **Configurações** | Dados da loja, horário de funcionamento e preferências |
| 🔐 **Autenticação** | Login e registro com hash de senha (bcrypt) |
| 🤖 **IA (futuro)** | Tabelas prontas para histórico de mensagens e memória de IA |

> Todas as telas possuem **pop-up forms** para criação rápida de registros, com validação no frontend e no backend.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org/)** — App Router, API Routes, SSR
- **[React 19](https://react.dev/)** — Componentes funcionais e hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** — Tipagem estática end-to-end
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização utilitária com design system dark
- **[Prisma 7](https://www.prisma.io/)** — ORM type-safe com migrations
- **[PostgreSQL](https://www.postgresql.org/)** — Banco relacional robusto
- **[Lucide React](https://lucide.dev/)** — Ícones elegantes e consistentes
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** — Hash seguro de senhas

## 📦 Arquitetura de Dados

```mermaid
erDiagram
    lojas ||--o{ clientes : "possui"
    lojas ||--o{ servicos : "oferece"
    lojas ||--o{ historico_mensagens : "registra"
    clientes ||--o{ tickets : "solicita"

    lojas {
        int id PK
        string nome
        string telefone_whatsapp UK
        string email UK
        string password_hash
        string ramo_atividade
        string horario_funcionamento
        boolean ativo
    }

    clientes {
        int id PK
        int loja_id FK
        string nome
        string whatsapp
        string email
        string observacoes
        boolean ativo
    }

    servicos {
        int id PK
        int loja_id FK
        string nome
        decimal preco
        string instrucao_ia
    }

    tickets {
        int id PK
        int loja_id FK
        int cliente_id FK
        string descricao_pedido
        string status
        decimal valor_estimado
        date data_validade
        date data_agendamento
    }
```

## 📁 Estrutura do Projeto

```
budgy/
├── prisma/
│   └── schema.prisma          # Modelos do banco de dados
├── src/
│   ├── app/
│   │   ├── (auth)/             # Login e Registro
│   │   ├── (dashboard)/        # Páginas protegidas
│   │   │   ├── inicio/         # Dashboard
│   │   │   ├── cliente/        # Gestão de clientes
│   │   │   ├── servicos/       # Catálogo de serviços
│   │   │   ├── orcamentos/     # Orçamentos / Tickets
│   │   │   └── configuracoes/  # Configurações da loja
│   │   └── api/                # API Routes (REST)
│   │       ├── auth/           # Login + Registro
│   │       ├── clientes/       # CRUD Clientes
│   │       ├── servicos/       # CRUD Serviços
│   │       └── tickets/        # CRUD Orçamentos
│   ├── components/ui/          # Componentes reutilizáveis
│   │   ├── button/
│   │   ├── cards/
│   │   ├── input/
│   │   └── modal/              # Pop-up forms
│   ├── hooks/                  # Custom hooks (useClientes, useServicos, useTickets)
│   ├── lib/                    # Funções utilitárias e clients de API
│   ├── types/                  # Interfaces TypeScript
│   └── config/                 # Dados de configuração
└── package.json
```

## 🛠️ Como Rodar Localmente

### Pré-requisitos

- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- PostgreSQL rodando (local, Docker ou nuvem)

### 1. Clone o repositório

```bash
git clone https://github.com/Freitas024/Budgy.git
cd Budgy
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` na raiz:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/budgy?schema=public"
```

### 4. Prepare o Prisma

```bash
pnpm prisma generate
pnpm prisma db push
```

> 💡 Use `pnpm prisma studio` para visualizar os dados no banco via interface web.

### 5. Inicie o servidor

```bash
pnpm dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

## 🧪 Testando as APIs

Você pode testar os endpoints diretamente via `curl`:

```bash
# Criar um cliente
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","whatsapp":"(11) 999887766","email":"joao@teste.com"}'

# Criar um serviço
curl -X POST http://localhost:3000/api/servicos \
  -H "Content-Type: application/json" \
  -d '{"nome":"Manutenção de Site","preco":"150.00"}'

# Criar um orçamento
curl -X POST http://localhost:3000/api/tickets \
  -H "Content-Type: application/json" \
  -d '{"descricao_pedido":"Redesign do portal","valor_estimado":"5000","status":"Aberto"}'

# Listar registros
curl http://localhost:3000/api/clientes
curl http://localhost:3000/api/servicos
curl http://localhost:3000/api/tickets
```

## 📄 Licença

Este projeto é de uso pessoal e portfólio.

## 🤝 Autor

Desenvolvido por **Vinícius Freitas**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Perfil-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/viniciusfreitas)
[![GitHub](https://img.shields.io/badge/GitHub-Freitas024-181717?logo=github)](https://github.com/Freitas024)
