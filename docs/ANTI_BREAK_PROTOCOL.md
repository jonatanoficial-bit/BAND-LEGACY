# Band Legacy - Protocolo Anti-Quebra

Build: v0.1.1_20260519_1558

Objetivo: impedir que futuras fases quebrem o jogo durante a evolução dos sistemas, assets e telas.

## Recursos ativos

1. Boot seguro com `try/catch` global.
2. Captura de `window.error` e `unhandledrejection`.
3. Log local em `localStorage` e painel em Settings.
4. `SafeStore` para evitar travamento quando o navegador bloqueia storage.
5. Migração automática de save entre versões.
6. Fallback para tela principal quando uma rota não existe.
7. Verificação de assets principais.
8. Fullscreen/orientation lock com fallback quando o navegador negar permissão.
9. Reset de save local para recuperação rápida.
10. Regra visual: mobile portrait exibe aviso para virar o celular; landscape é obrigatório.

## Regra para próximas fases

Toda nova tela precisa:
- ter `section.screen` com `id` único;
- usar `data-screen="idDaTela"` nos botões;
- não remover `buildBadge`, `rotateWarning`, `diagnosticsLog` e `SafeStore`;
- manter backgrounds em `/assets/backgrounds/` e registrar no `ASSET_MAP.md`.
