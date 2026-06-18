# PHASE 6 - STUDIO PRODUCTION SYSTEM

Versao: v0.6.0_20260519_2113

## Objetivo
Adicionar o primeiro ciclo jogavel de producao em estudio: escolher projeto, sala, orcamento, takes, mixagem e masterizacao.

## Sistemas implementados
- Projetos vindos da biblioteca de composicao.
- Fallback anti-quebra: se nao houver demo finalizada, o estudio usa a musica ativa como projeto provisório.
- Salas de gravacao: Garagem Tratada, Estudio Indie Pro e Arena Gold Studio.
- Calculo de qualidade final, potencial de radio/streaming, autenticidade e risco.
- Finalizacao de master com custo real descontado do caixa.
- Masters finalizadas salvas para futuras fases: lancamento, charts, shows e turnes.

## Regras de integracao
- Nao remover caminhos de assets existentes.
- Substituir imagens provisórias usando os mesmos paths.
- Build sempre deve manter data/hora visivel e anti-quebra ativo.
