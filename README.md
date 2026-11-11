# groove — frontend

Vue 3 + Vite + Vue Router + Pinia + Axios. Tema claro/escuro com CSS variables.

## Rodando

```bash
npm install
cp .env.example .env
npm run dev
```

Abre em http://localhost:5173. O backend precisa estar rodando em http://localhost:3000.

## Estrutura

```
src/
├── main.js            # entry point
├── App.vue
├── style.css          # tokens de cor (claro/escuro) + classes globais
├── router/index.js    # rotas + guard de login
├── stores/
│   ├── auth.js        # login, registro, sessão (Pinia)
│   └── theme.js       # alternar claro/escuro
├── composables/api.js # instância do axios (injeta o JWT)
├── components/        # AppLayout, AppSidebar, PostCard, PostComposer, AuthCard
└── views/             # Home, Login, Register, Profile, User, Post
```
