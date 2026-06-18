# Fase 13 — Balanceamento Comercial e Campanha Longa

## Objetivo
Permitir a simulação controlada de 12, 26 ou 52 semanas de carreira, sem substituir o loop semanal manual.

## Implementado
- Nova tela **Campanha Longa**.
- Estratégias conservadora, equilibrada, agressiva e artística.
- Projeções de caixa, fãs, XP, risco e burnout.
- Simulação de temporadas com variação, crises e marcos de carreira.
- Pausa estratégica para reduzir burnout e elevar estabilidade.
- Migração anti-quebra para saves antigos.
- Integração com reputação, semana da carreira, HUD, save e QA.
- Build completa sem assets pesados.

## Auditoria
- Sintaxe JavaScript validada.
- IDs da nova tela e ações conferidos.
- Save anterior recebe `longCampaign` automaticamente.
- Valores têm piso zero e métricas usam limites de 0 a 100.

## Próxima fase recomendada
Fase 14 — Ranking mundial, concorrentes persistentes, premiações anuais e histórico de temporadas.
