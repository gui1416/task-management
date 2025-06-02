# Task Management App

Uma aplicação moderna de gerenciamento de tarefas com colaboração em tempo real e notificações, construída com Next.js 15, React e TypeScript.

![Task Management App](/public/screen.png)

## ✨ Funcionalidades

### 🎯 Gerenciamento de Tarefas
- **Criar, editar e excluir tarefas** com facilidade
- **Alterar status** das tarefas (To Do, In Progress, Completed)
- **Definir prioridades** (Alta, Média, Baixa)
- **Atribuir responsáveis** para cada tarefa
- **Busca em tempo real** por título ou descrição

### 🎨 Interface Moderna
- **Design responsivo** que funciona em desktop e mobile
- **Dark mode** com alternância automática baseada no sistema
- **Componentes acessíveis** seguindo as melhores práticas
- **Animações suaves** e feedback visual

### 👥 Colaboração em Tempo Real
- **Indicador de usuários online** em tempo real
- **Notificações instantâneas** para atualizações de tarefas
- **Simulação de colaboradores** entrando e saindo do workspace

### 🔍 Filtros Avançados
- **Filtro por status** (Todas, To Do, In Progress, Completed)
- **Filtro por prioridade** (Todas, Alta, Média, Baixa)
- **Busca textual** em títulos e descrições
- **Contadores dinâmicos** para cada categoria

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos e acessíveis
- **Lucide React** - Ícones SVG otimizados
- **date-fns** - Biblioteca para manipulação de datas

## 📦 Instalação

1. **Clone o repositório**
   \`\`\`bash
   git clone https://github.com/gui1416/task-management.git
   cd task-management
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   \`\`\`

3. **Execute o projeto**
   \`\`\`bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   \`\`\`

4. **Abra no navegador**
   Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 🎮 Como Usar

### Criando uma Nova Tarefa
1. Clique no botão **"New Task"** no canto superior direito
2. Preencha o título e descrição da tarefa
3. Selecione o status, prioridade e responsável
4. Clique em **"Create Task"** para salvar

### Gerenciando Tarefas
- **Alterar status**: Clique no ícone de status ao lado do título
- **Editar tarefa**: Use o menu de três pontos e selecione "Edit"
- **Excluir tarefa**: Use o menu de três pontos e selecione "Delete"
- **Filtrar tarefas**: Use as abas de status

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial
├── components/
│   ├── ui/                 # Componentes base do shadcn/ui
│   ├── task-dashboard.tsx  # Dashboard principal
│   ├── task-list.tsx       # Lista de tarefas com filtros
│   ├── task-card.tsx       # Card individual de tarefa
│   ├── task-form.tsx       # Formulário de criação/edição
│   ├── notification-panel.tsx    # Painel de notificações
│   ├── collaboration-indicator.tsx # Indicador de usuários 
└── lib/
    ├── data.ts             # Dados mockados
    └── types.ts            # Definições de tipos TypeScript
\`\`\`

## 🔧 Configuração Avançada

### Personalizando Temas
O projeto usa o sistema de temas do Tailwind CSS. Para personalizar cores:

1. Edite o arquivo \`tailwind.config.ts\`
2. Modifique as variáveis CSS em \`app/globals.css\`

### Adicionando Novos Status
Para adicionar novos status de tarefas:

1. Atualize o tipo \`Task\` em \`lib/types.ts\`
2. Modifique os componentes \`TaskForm\` e \`TaskCard\`
3. Adicione as novas opções nos selects

## 🚀 Próximos Passos

### Funcionalidades Planejadas
- [ ] **Autenticação de usuários** com NextAuth.js
- [ ] **Banco de dados** com Supabase ou PostgreSQL
- [ ] **WebSockets** para colaboração em tempo real
- [ ] **Drag & Drop** para reorganizar tarefas
- [ ] **Comentários** nas tarefas
- [ ] **Anexos de arquivos**
- [ ] **Relatórios e analytics**
- [ ] **Notificações push**

### Melhorias Técnicas
- [ ] **Testes unitários** com Jest e Testing Library
- [ ] **Testes E2E** com Playwright
- [ ] **PWA** para uso offline
- [ ] **Internacionalização** (i18n)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Guilherme](https://github.com/gui1416)

