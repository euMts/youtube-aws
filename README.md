# 🚀 API Tester

Um aplicativo web moderno e elegante para testar APIs com interface intuitiva e design responsivo.

📺 **Vídeo Tutorial:** [Link do vídeo aqui](https://youtu.be/CV7EWhzzbjY)

## ✨ Características

- 🎨 **Design Moderno** - Interface bonita com gradientes e animações suaves
- 📱 **Responsivo** - Funciona perfeitamente em desktop e mobile
- 🌙 **Tema Escuro/Claro** - Suporte automático a temas
- ⚡ **Rápido** - Construído com Next.js e Turbopack
- 🔒 **Seguro** - Configurações de API mantidas no servidor
- 🎯 **Simples** - Um clique para testar sua API

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna
- **React 19** - Biblioteca de interface
- **Turbopack** - Build tool ultra-rápido

## 🚀 Como Usar

### 1. Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd youtube-aws

# Instale as dependências
npm install
```

### 2. Configuração da API

**Opção A: Variável de Ambiente (Recomendado)**
```bash
# Crie um arquivo .env.local na raiz do projeto
echo "API_URL=https://sua-api.com/endpoint" > .env.local
```

**Opção B: Editar Diretamente**
Edite o arquivo `src/app/api/config/route.ts`:
```typescript
const apiUrl = 'https://sua-api.com/endpoint';
```

### 3. Executar

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy no AWS Amplify

Para fazer deploy no AWS Amplify, configure as variáveis de ambiente:

```bash
env | grep -e API_URL >> .env.production
```

**Configuração no Console do Amplify:**
1. Acesse o console do AWS Amplify
2. Vá em "Environment variables"
3. Adicione `API_URL` com o valor da sua API
4. Faça o deploy

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts          # Rota API para configuração
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
└── ...
```

## 🔧 Funcionalidades

### Interface Principal
- **Botão Estilizado** - Design moderno com gradientes e animações
- **Estados de Loading** - Spinner animado durante requisições
- **Exibição de Resposta** - Área dedicada para mostrar resultados
- **Tratamento de Erros** - Mensagens visuais para problemas
- **URL Dinâmica** - Exibe a URL da API sendo usada

### Rota API do Servidor
- **Endpoint**: `/api/config`
- **Método**: GET
- **Resposta**:
```json
{
  "apiUrl": "https://sua-api.com/endpoint",
  "message": "URL da API obtida com sucesso"
}
```

## 🔒 Segurança

- ✅ URLs de API mantidas no servidor
- ✅ Sem exposição de configurações sensíveis
- ✅ Validação de respostas HTTP
- ✅ Tratamento seguro de erros

## 📝 Exemplo de Uso

1. **Configure sua API** no arquivo `.env.local` ou `route.ts`
2. **Execute o projeto** com `npm run dev`
3. **Clique no botão** "Chamar API"
4. **Veja a resposta** na área de resultado

---

Feito com ❤️ usando Next.js e Tailwind CSS