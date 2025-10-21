# NoCode Kits Club

Plataforma de assinaturas para kits de automação e templates digitais, construída com Next.js, TypeScript e TailwindCSS.

## 🚀 Funcionalidades

- **Landing Page** com pricing e CTA para assinatura
- **Autenticação** via Clerk
- **Pagamentos** via Stripe (assinaturas recorrentes)
- **Área de Membros** com download de kits
- **Painel Admin** para gerenciar conteúdo
- **Automação Mensal** de liberação de kits
- **Emails Automáticos** via Resend
- **Armazenamento** via S3/DigitalOcean Spaces

## 🛠️ Stack Tecnológica

- **Frontend/Backend**: Next.js 15 + TypeScript
- **Autenticação**: Clerk
- **Banco de Dados**: PostgreSQL + Prisma ORM
- **Pagamentos**: Stripe
- **Emails**: Resend
- **Armazenamento**: AWS S3 / DigitalOcean Spaces
- **Hospedagem**: Vercel
- **Styling**: TailwindCSS + Radix UI

## 📋 Pré-requisitos

- Node.js 18+
- Yarn
- PostgreSQL
- Conta no Stripe
- Conta no Clerk
- Conta no Resend
- Conta no DigitalOcean Spaces (ou AWS S3)

## ⚙️ Configuração

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd nocode-kits-club
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `env.example` para `.env.local` e preencha as variáveis:

```bash
cp env.example .env.local
```

**Variáveis obrigatórias:**

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/nocode_kits_club"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/app
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/app

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...

# Resend Email
RESEND_API_KEY=re_...

# AWS S3 (DigitalOcean Spaces)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=nyc3
AWS_S3_BUCKET=nocode-kits-club
AWS_S3_ENDPOINT=https://nyc3.digitaloceanspaces.com

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
CRON_SECRET=your-secret-key-for-cron-jobs
ADMIN_EMAIL=admin@example.com
```

### 4. Configure o banco de dados

```bash
# Execute as migrações do Prisma
npx prisma migrate dev

# Gere o cliente Prisma
npx prisma generate
```

### 5. Execute o projeto

```bash
yarn dev
```

## 🔧 Configuração dos Serviços

### Clerk (Autenticação)

1. Crie uma conta no [Clerk](https://clerk.com)
2. Crie um novo projeto
3. Copie as chaves de API para o `.env.local`
4. Configure as URLs de redirecionamento:
   - Sign-in URL: `http://localhost:3000/sign-in`
   - Sign-up URL: `http://localhost:3000/sign-up`
   - After sign-in: `http://localhost:3000/app`
   - After sign-up: `http://localhost:3000/app`

### Stripe (Pagamentos)

1. Crie uma conta no [Stripe](https://stripe.com)
2. Copie as chaves de API para o `.env.local`
3. Crie um produto e preço no Stripe Dashboard
4. Configure o webhook:
   - URL: `https://seu-dominio.com/api/webhook/stripe`
   - Eventos: `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_succeeded`, `invoice.payment_failed`

### Resend (Emails)

1. Crie uma conta no [Resend](https://resend.com)
2. Copie a chave de API para o `.env.local`
3. Configure um domínio para envio de emails

### DigitalOcean Spaces (Armazenamento)

1. Crie uma conta no [DigitalOcean](https://digitalocean.com)
2. Crie um Space
3. Gere as chaves de acesso
4. Configure as variáveis no `.env.local`

## 📁 Estrutura do Projeto

```
├── app/                    # App Router (Next.js 15)
│   ├── api/               # API Routes
│   │   ├── webhook/       # Webhooks (Stripe)
│   │   ├── checkout/      # Checkout Stripe
│   │   ├── kits/          # Kits (área de membros)
│   │   ├── admin/         # Admin APIs
│   │   └── cron/          # Cron jobs
│   ├── app/               # Área de membros
│   ├── admin/             # Painel administrativo
│   └── page.tsx           # Landing page
├── components/            # Componentes React
│   └── ui/               # Componentes UI (Radix)
├── lib/                   # Utilitários
│   ├── prisma.ts         # Cliente Prisma
│   ├── stripe.ts         # Configuração Stripe
│   ├── s3.ts             # Configuração S3
│   ├── email.ts          # Configuração Resend
│   └── utils.ts          # Utilitários gerais
├── prisma/               # Schema do banco
│   └── schema.prisma     # Schema Prisma
└── middleware.ts         # Middleware Clerk
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Configuração do Cron Job

Para a automação mensal, configure um cron job que chame:

```
POST https://seu-dominio.com/api/cron/releases
Headers: x-cron-secret: your-secret-key
```

**Opções de cron:**
- Vercel Cron (recomendado)
- GitHub Actions
- Cron-job.org
- Uptime Robot

## 📊 Funcionalidades Implementadas

### ✅ Landing Page
- Hero section com CTA
- Seção de features
- Pricing
- Integração com Clerk

### ✅ Autenticação
- Login/Registro via Clerk
- Middleware de proteção
- Redirecionamentos automáticos

### ✅ Área de Membros
- Dashboard com estatísticas
- Lista de kits disponíveis
- Download de arquivos
- Histórico de releases

### ✅ Painel Admin
- Dashboard administrativo
- Gerenciamento de kits
- Agendamento de releases
- Estatísticas

### ✅ API Endpoints
- Webhook Stripe
- Checkout sessions
- Download de assets
- CRUD de kits
- Cron jobs

### ✅ Automações
- Liberação mensal de kits
- Emails automáticos
- Notificações

## Próximos Passos

1. **Analytics**
   - Google Analytics
   - Métricas de conversão
   - Tracking de downloads

2. **Melhorias UX**
   - Loading states
   - Error handling
   - Toast notifications

3. **Funcionalidades Avançadas**
   - Múltiplos planos
   - Cupons de desconto
   - Afiliados

4. **SEO**
   - Meta tags
   - Sitemap
   - Schema markup

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato.

---

**Desenvolvido com ❤️ para automatizar seu negócio digital!**