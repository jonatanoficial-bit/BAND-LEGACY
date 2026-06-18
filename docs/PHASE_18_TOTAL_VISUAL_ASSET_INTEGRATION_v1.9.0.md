# Fase 18 — Integração Visual Total dos Assets

Build: `v1.9.0_total_visual_asset_integration_20260617_1635`

## Objetivo
Fazer o jogo usar de forma mais consistente todos os assets oficiais já organizados, sem incluir as imagens pesadas dentro desta build.

## Implementado
- Novo mapeamento visual por tela com múltiplos caminhos candidatos.
- Fundo oficial aplicado por tela com fallback automático.
- Cards do lobby com fundos diferentes, evitando sensação visual repetida.
- Banner principal conectado ao lobby/backstage.
- Palco/show-stage conectado a fundos de arena/estádio.
- Avatar do jogador aplicado no topo, preview grande e botões de seleção.
- Member cards reforçados para mostrar os recrutáveis.
- Staff cards reforçados para mostrar NPCs.
- Logos da banda reforçados no cabeçalho e criação da banda.
- Overlays escuros reduzidos para não esconder os fundos.
- Molduras visuais para personagens, logos e cards.
- Integração com a camada mobile da Fase 17.

## Importante
Esta build continua sem imagens pesadas. Para funcionar visualmente, coloque a pasta `assets/` organizada diretamente na raiz do projeto:

```text
BAND-LEGACY-main/
  index.html
  script.js
  style.css
  assets/
    backgrounds/
    characters/
    logos/
```

## Regra preservada
Não foram alteradas regras de gameplay, economia, save, progressão ou balanceamento. A fase é visual/integração.
