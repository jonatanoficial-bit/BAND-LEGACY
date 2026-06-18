# Hotfix v1.3.8 — Forced Asset Binding

Esta build preserva a lógica do jogo e corrige somente a camada visual.

## Diagnóstico
O CSS legado continha regras `background-image` com `!important` apontando para caminhos antigos. Essas regras anulavam os caminhos oficiais aplicados pelo JavaScript.

## Correção
- aplicação dos fundos oficiais com prioridade `important`;
- substituição visual forçada por tela;
- ligação direta dos cards do lobby, banner e palco;
- reforço dos logos da banda;
- nenhuma imagem incluída no ZIP;
- nenhuma regra de gameplay alterada.

Consulte `ASSET_PATHS_COMPLETE_v1.3.8.md`.
