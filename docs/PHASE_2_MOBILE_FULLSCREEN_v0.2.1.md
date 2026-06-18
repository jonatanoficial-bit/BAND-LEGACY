# BAND LEGACY — PHASE 2 MOBILE LANDSCAPE FULLSCREEN

Build: `v0.2.1_20260522_1506`  
Base: `v0.2.0_20260522_1501`  
Data: 2026-05-22 15:06 UTC

## Objetivo

Implementar a segunda fase do roadmap: o jogo deve ser jogável em PC e também funcionar no celular em tela cheia horizontal, com aviso claro para o usuário virar o aparelho.

## Entregue nesta fase

1. `mobile-controller.js` dedicado.
2. Detecção de celular/tablet por user-agent, ponteiro touch e largura de tela.
3. Aviso de rotação quando o aparelho estiver em retrato.
4. Tentativa de fullscreen após toque do usuário.
5. Tentativa de travar orientação em landscape quando o navegador permitir.
6. Fallback seguro quando o navegador negar fullscreen/orientation lock.
7. CSS com `--vh` para corrigir bug clássico de altura no mobile.
8. Ajustes de HUD para celulares pequenos em landscape.
9. Scroll interno em painéis críticos sem quebrar o fundo cinematográfico.
10. Badge técnico discreto no mobile com versão, resolução e estado de fullscreen.
11. PC preservado: sem bloqueio de orientação, sem overlay obrigatório.

## Regra importante sobre navegadores

Nenhum navegador moderno permite fullscreen automático sem interação do usuário. Por isso, o jogo agora pede um toque do usuário em `Ativar tela cheia horizontal` ou em botões de fullscreen.

## Teste mínimo recomendado

- PC desktop: abrir `index.html` e navegar pelas telas.
- Android Chrome: abrir, virar celular para landscape, tocar em fullscreen.
- iPhone Safari: abrir, virar celular para landscape, usar aviso/fallback visual; fullscreen pode ser limitado pelo Safari.
- Tablet: verificar HUD e menus laterais.

## Arquivos alterados

- `index.html`
- `style.css`
- `script.js`
- `mobile-controller.js`
- `VERSION.txt`
- `BUILD_INFO.json`
- `CHANGELOG.md`
- `docs/PHASE_2_MOBILE_FULLSCREEN_v0.2.1.md`

## Próxima fase sugerida

Fase 3: Save System real — New Game, Continue, Load Game, autosave, slots, migração de versão e validação anti-quebra.
