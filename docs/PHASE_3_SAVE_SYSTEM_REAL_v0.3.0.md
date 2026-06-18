# BAND LEGACY — FASE 3 SAVE SYSTEM REAL

## Build
- Version: v0.3.0_20260522_1545
- Phase: FASE 3 - Save System Real

## Objetivo
Transformar New Game, Continue e Load Game em um sistema real de persistência, pronto para as fases futuras de gameplay.

## Implementado
- Até 5 slots independentes de save.
- New Game cria carreira nova no primeiro slot vazio.
- Continue carrega o save mais recente.
- Load Game abre tela dedicada com cards dos slots.
- Autosave após alterações de perfil, banda, staff, composição, estúdio, lançamentos, shows, economia, turnês, eventos e mercado.
- Save manual pelo botão "Salvar Agora".
- Reset seguro do save ativo com confirmação.
- Migração automática de save antigo `bandLegacy:save` para `bandLegacy:slot:slot_1`.
- Metadados de slot: banda, artista, gênero, cidade, dinheiro, XP, fãs, reputação, versão e data de atualização.
- Compatibilidade com builds antigas mantendo a chave legada `bandLegacy:save`.

## Estrutura localStorage
- `bandLegacy:activeSlot`
- `bandLegacy:saveIndex`
- `bandLegacy:slot:slot_1`
- `bandLegacy:slot:slot_2`
- `bandLegacy:slot:slot_3`
- `bandLegacy:slot:slot_4`
- `bandLegacy:slot:slot_5`
- `bandLegacy:save` para compatibilidade.

## Próxima fase
FASE 4 — Core Gameplay completo: fechar loop gerenciar → produzir → promover → performar → evoluir.
