# v1.9.0 — Fase 18: Integração Visual Total dos Assets
- Mapeamento visual completo por tela com fallback automático de caminhos.
- Fundos, cards, palco, avatares, recrutáveis, staff e logos receberam reforço de conexão visual.
- Redução de overlays escuros para aumentar a visibilidade dos fundos.
- Build preserva todos os arquivos do jogo e continua sem assets pesados.

# v1.8.0 — Fase 17: UX Mobile Real + Resolução AAA
- Nova camada responsiva por viewport para mobile horizontal, tablet e desktop.
- Reorganização dos principais grids e painéis para reduzir elementos espremidos.
- Menu principal, barra superior, navegação lateral e cards com melhor conforto para toque.
- Rolagem mais segura em telas longas e listas internas.
- Ajustes visuais sem alterar a lógica principal do jogo.

# v1.5.0 — Fase 14: Ranking Mundial, Rivais e Premiações
- Ranking mundial dinâmico e navegável.
- Rivais persistentes plurais por gênero e região.
- Premiações anuais, prestígio e histórico de temporadas.
- Migração anti-quebra e integração com campanha longa.

## v1.3.1_20260522_1948 — Hotfix Scroll PC/Mobile

- Corrigida rolagem vertical no PC com mouse wheel/trackpad.
- Corrigida rolagem no mobile com dedo em landscape.
- Telas longas agora rolam internamente sem depender de TAB.
- Mantido fullscreen horizontal, aviso de rotação e versão visível no jogo.
- Adicionada documentação `docs/HOTFIX_SCROLL_PC_MOBILE_v1.3.1.md`.

# v1.0.1_20260522_1845 — Fase 9: QA Comercial e Hotfix Anti-Quebra

- Adicionada tela interna de QA Comercial.
- Adicionado teste automático de versão, telas, botões, save, idiomas, fullscreen e assets.
- Adicionado score de QA visível dentro do jogo.
- Adicionado registro do último QA no save.
- Adicionado botão para limpar diagnóstico local.
- Atualizada versão visível para `v1.0.1_20260522_1845`.

# v1.0.1_20260522_1845 — Fase 8: AAA Polish Release Candidate

- Adicionada tela de loading cinematográfica.
- Adicionado tutorial inicial com recompensa controlada de carreira.
- Adicionado áudio de interface com toggle em Settings.
- Adicionada tela Release Candidate com checklist interno.
- Adicionado export de backup do save em JSON.
- Balanceamento RC para avanço semanal.
- Atualizados VERSION.txt, BUILD_INFO.json, README e documentação da Fase 8.

# v0.7.0_20260522_1640 — Fase 7 — Internacionalização

- Adicionado seletor de idioma no topo e em Settings.
- Adicionados idiomas pt-BR, en-US e es-ES.
- Tradução inicial do menu, navegação, aviso mobile, lobby, settings e ciclo principal.
- Formatação localizada de números, datas, hora e moeda no HUD principal.
- Criada estrutura `/data/i18n/`.
- Atualizados VERSION.txt, BUILD_INFO.json e documentação da fase.

# CHANGELOG

## v0.5.0_20260522_1612
- Fase 5 implementada: composicao, estudio e lancamento musical aprofundados.
- Adicionados BPM, tom, intensidade, estrutura e direcao de letra.
- Adicionados produtor, direcao sonora, take simulado e waveform no estudio.
- Adicionadas janela de lancamento e estrategia de preco.
- Build mantem mobile landscape, PC, save slots, docs e versionamento visivel.

## v0.5.0_20260522_1612 — Fase 4 Core Gameplay Completo
- Implementado ciclo principal: gerenciar → produzir → promover → performar → evoluir.
- Adicionado painel de próxima ação no Lobby.
- Adicionado avanço semanal com fãs, caixa, XP e reputação.
- Adicionado log persistente de carreira.
- Integrados os sistemas existentes com o Save System real.
- Mantidos fullscreen horizontal mobile, PC jogável, versionamento visível e documentação.

# CHANGELOG — v0.2.1_20260522_1506

## Fase 2 — Mobile horizontal/fullscreen

- Atualizado versionamento para `v0.2.1_20260522_1506`.
- Adicionado `mobile-controller.js` dedicado para orientação horizontal, fullscreen e cálculo real de altura mobile via `--vh`.
- Melhorado aviso de rotação para celulares em modo retrato.
- Adicionado detector de permissões de fullscreen e orientation lock.
- Adicionadas classes globais: `is-mobile-device`, `is-portrait`, `is-landscape`, `is-fullscreen`, `mobile-landscape-ready`.
- Criado HUD discreto de diagnóstico mobile com resolução e estado de fullscreen.
- Ajustada responsividade landscape para celulares pequenos, celulares grandes, tablets e PC.
- Preservada a jogabilidade em PC sem bloquear orientação.
- Mantida regra de build completo com documentação e asset map.

---

# Changelog

## v0.2.0_20260522_1501 — Fase 1 UI AAA + Navegação

- Reconstrução visual inicial para aproximar o jogo das referências enviadas.
- Build version visível no jogo.
- Melhoria de botões, painéis, brilho dourado, contraste, fundo por tela e responsividade.
- Aviso mobile horizontal/fullscreen revisado.
- Documentação de caminhos obrigatórios de assets adicionada.
- Build info e Version.txt adicionados.

# Band Legacy v1.1.0_20260519_2256 - Phase 11 International Tours

- Adicionado sistema de Turnês Internacionais.
- Adicionadas rotas: América do Sul, Europa, EUA e Ásia.
- Adicionados transporte, equipe de estrada, fadiga, risco logístico, resultado financeiro e ganho de fãs.
- Mantido anti-quebra e fullscreen landscape obrigatório.
- Adicionado asset provisório `assets/backgrounds/world_tour/bg_world_tour_v001.png`.

# CHANGELOG

## v1.0.1_20260519_2354
- Recriado pacote da Fase 10 apos falha de carregamento do link anterior.
- Adicionado sistema de Economia / Contratos.
- Adicionados dados de gravadoras, patrocinadores, royalties, merch, despesas mensais e simulacao financeira.
- Mantido dispositivo anti-quebra, fullscreen landscape e build visivel.

# Changelog

## v0.7.0_20260519_2136 - Phase 7 Music Release System
- Added release screen and commercial campaign controls.
- Added formats, platforms, marketing, video and PR tuning.
- Added predictions for hype, streams, critics and charts.
- Added publish flow with cost, revenue, fans, XP and reputation impact.
- Added release catalog, social/review feed and chart board.
- Added provisional release background and seed data.
- Preserved fullscreen landscape, visible build, asset pipeline and anti-break protocol.

# CHANGELOG

## v0.3.0_20260519_1745 - Phase 3 Band System
- Implementado sistema de banda.
- Adicionada tela de gerenciamento dos integrantes.
- Adicionados atributos: tecnica, criatividade, presenca de palco, stamina, ego, lealdade e moral.
- Adicionado calculo de overall, sinergia, energia, moral e risco de conflito.
- Adicionado editor de integrante e gerador provisorio de NPC.
- Mantido anti-quebra, fullscreen landscape e build visivel.
- Estrutura preparada para inserir avatares, fundos, logos e UI definitiva depois.

## v0.2.0_20260519_1614 - Phase 2 Career Identity
- Perfil, carreira e salvamento seguro.


## v0.4.0_20260519_1835 - Phase 4 Staff System
- Adicionada tela de Staff.
- Contratação e demissão de profissionais.
- Sistema de salário, assinatura e impacto de staff.
- Simulação mensal com folha, fãs e XP.
- Mantido fullscreen landscape, anti-quebra e estrutura para assets AAA futuros.

## v0.5.0_20260519_1902 - Phase 5 Composition System
- Added full composition screen.
- Added song part selection and demo finalization.
- Added scoring model for quality, hit potential, originality and emotional impact.
- Added provisional composition background asset.
- Added safe save migration for composition state.


## v0.6.0_20260519_2113 - Phase 6 Studio Production System
- Added full studio production screen.
- Added recording rooms, budget, takes, mix and master controls.
- Added final master calculation and cost guard.
- Added released masters list for future launch/charts/show systems.
- Maintained fullscreen landscape, build badge, safe save migration and anti-break protocol.


## v0.8.0_20260519_2158 - Phase 8 Live Show System
- Adicionado sistema de shows ao vivo.
- Adicionada setlist dinâmica com músicas lançadas, masters, demos ou faixas provisórias.
- Adicionados venues, público, receita, custo, lucro, fãs e XP.
- Adicionados botões Iniciar Show, Interagir, Solo e Encerrar.
- Mantidos anti-quebra, fullscreen landscape e build visível.

## v0.9.0_20260519_2136 - Phase 9 Social AI System
- Adicionada tela Social Media.
- Implementada IA de público com hype, viralização, lealdade, risco e alcance.
- Adicionados comentários de fãs, tendências e histórico de campanhas.
- Integração com fãs, XP, reputação, staff, lançamentos e shows.
- Mantido fullscreen landscape, anti-quebra e build visível.

## v1.2.0_20260520_1113 - Phase 12 Dynamic Events
- Added Dynamic Events screen.
- Added conflict, press, fan, sponsor, award and backstage event pool.
- Added narrative choices with consequences for cash, fans, XP, morale, ego, heat and crisis risk.
- Added placeholder event background at assets/backgrounds/events/bg_events_v001.png.
- Maintained fullscreen landscape, visible build badge and anti-break protocol.


## v1.3.1_20260520_1210_RECOVERY
- Recovery da Fase 13 com IA de Mercado Musical.
- Tela Mercado IA adicionada ao lobby e navegação.
- Tendências por gênero, regiões, rivais e simulação semanal.
- Novo slot de asset: assets/backgrounds/market/bg_market_v001.png.

## v0.5.0_20260522_1612 — FASE 3 SAVE SYSTEM REAL
- Implementados 5 slots de save independentes.
- New Game cria carreira nova no primeiro slot vazio.
- Continue carrega o save mais recente.
- Load Game agora possui tela própria com cards de slot.
- Adicionado botão de save manual.
- Adicionado reset seguro do save ativo.
- Adicionada migração automática de saves antigos.
- Adicionado status visual de autosave no topo do jogo.
- Mantida versão visível no jogo.
- Mantido suporte mobile horizontal/fullscreen da fase anterior.


## v0.6.0_20260522_1625 — Fase 6: Shows ao Vivo e Turnês

- Aprofundado sistema de shows ao vivo com cidade, tipo de show, merch por fã e risco técnico.
- Adicionadas ações de palco: Crowd chant, Corrigir falha técnica e Encore.
- Resultado do show agora considera risco técnico, correções da equipe, cidade, tipo de show, bilheteria, merch, fãs e XP.
- Histórico de shows registra cidade, venue, nota, público, lucro e fãs ganhos.
- Mantido mobile horizontal/fullscreen, PC jogável, Save System real, Core Gameplay e Estúdio/Lançamento.
- Versão visível atualizada para v0.6.0_20260522_1625.



## v1.1.0_20260522_1905 — Fase 10 Asset Pipeline Comercial

- Adicionada tela Assets / Asset Pipeline Comercial.
- Adicionado scan de caminhos de imagem.
- Adicionada exportação do manifesto de assets em JSON.
- Criados `data/assets/asset_manifest.json` e `data/assets/asset_groups.json`.
- Criado `docs/ASSET_REPLACEMENT_GUIDE.md`.
- Integrado Asset Pipeline ao QA Comercial.
- Atualizada versão visível no jogo.


## v1.2.0_20260522_1915 — Fase 11 UX Final e Onboarding Internacional
- Adicionada tela Onboarding Internacional.
- Criadas missões guiadas para a primeira hora de jogo.
- Adicionado progresso visual, recompensas iniciais e exportação do plano UX.
- Integrado onboarding ao save system, HUD, core gameplay e navegação.
- Atualizado versionamento visível no jogo.


## v1.3.1_20260522_1948 — Fase 12 Localização Completa e Revisão Editorial Internacional
- Expandido catálogo de localização para PT-BR, EN e ES.
- Criada tela Localização Internacional com auditoria de cobertura.
- Adicionados arquivos `data/i18n/pt-BR.json`, `data/i18n/en-US.json`, `data/i18n/es-ES.json` e `data/i18n/localization_catalog.json`.
- Adicionado exportador de pacote de idiomas em JSON.
- Conectado QA Comercial ao catálogo de localização.
- Mantido fallback anti-quebra: se faltar texto traduzido, o jogo mantém PT-BR sem travar.
- Atualizada versão visível no jogo para v1.3.1_20260522_1948.


## v1.4.0_20260612_2030 — Fase 13 Campanha Longa e Balanceamento Comercial
- Nova tela Campanha Longa com horizontes de 12, 26 e 52 semanas.
- Estratégias conservadora, equilibrada, agressiva e artística.
- Projeções de caixa, fãs, XP, risco, burnout e estabilidade.
- Simulação agregada com crises, marcos e evolução de reputação.
- Migração segura de saves e integração ao ciclo principal.
- Assets externos preservados; build distribuída sem imagens pesadas.

## v1.6.0_band_dynamics_20260612_1937
- Adicionada a tela Dinâmica da Banda.
- Sistema persistente de moral, química, confiança, ego e risco de ruptura.
- Reuniões, integração, conflitos procedurais e resolução de crises.
- Migração anti-quebra para saves anteriores.


## v1.7.0_contracts_negotiations_20260612_2015
- Nova tela Contratos & Patrocínios.
- Gravadoras e distribuidores com adiantamento, royalties, marketing, controle e duração.
- Patrocinadores com mensalidade, bônus, fit e requisitos.
- Rodadas de negociação com prioridades diferentes.
- Assinatura, rescisão, multas e histórico persistente.
- Migração anti-quebra para saves anteriores.
