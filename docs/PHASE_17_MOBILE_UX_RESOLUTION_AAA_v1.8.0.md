# Fase 17 — UX Mobile Real + Resolução AAA

Build: `v1.8.0_mobile_ux_resolution_20260617_1600`

## Objetivo
Transformar o jogo em uma experiência realmente confortável em celular horizontal, tablet e desktop, sem alterar a lógica principal.

## Ajustes implementados
- Nova camada de adaptação por viewport (`applyResponsiveUXProfile`).
- Classes de UX por faixa de tamanho: `ux-compact`, `ux-narrow`, `ux-tight-height` e `ux-tablet`.
- Escalas dinâmicas para topo, painéis, tiles, avatares e hero do menu.
- Rolagem segura em telas longas com `overscroll-behavior` e `-webkit-overflow-scrolling`.
- Reorganização dos grids principais em duas colunas para telas intermediárias.
- Reorganização em uma coluna para celulares menores em landscape.
- Menu principal adaptado para botões em grade quando a altura é limitada.
- Barra superior com quebra de linha controlada, melhor leitura e melhor uso de espaço.
- Navegação lateral adaptada para grade em telas pequenas.
- Cards e listas com alturas mais confortáveis para toque e leitura.
- Layouts afetados: perfil, banda, staff, composição, estúdio, lançamento, show, economia, campanha longa, ranking mundial, dinâmica da banda e contratos.

## Regras preservadas
- Fullscreen horizontal.
- Sistema de save e migração anti-quebra.
- Idiomas PT-BR / EN / ES.
- Estrutura completa do projeto sem incluir assets pesados.

## Resultado esperado
A interface deixa de parecer apenas "adaptada" e passa a ficar mais próxima de um jogo mobile-first, com menos elementos espremidos e navegação mais clara.
