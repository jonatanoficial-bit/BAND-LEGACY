# BAND LEGACY — CAMINHOS VISUAIS ATIVOS v1.3.6

Esta build usa os caminhos que JÁ EXISTEM no projeto atual enviado pelo usuário.
Não renomeie essas pastas sem atualizar `script.js` e `style.css`.

## Fundos por tela
- Menu: `assets/backgrounds/main_menu/bg_main_menu_v001.png`
- Novo jogo/perfil: `assets/backgrounds/bg_new_game_avatar_v001.png`
- Lobby: `assets/backgrounds/lobby/bg_lobby_v001.png`
- Banda: `assets/backgrounds/bg_create_band_v001.png`
- Composição: `assets/backgrounds/composition/bg_composition_v001.png`
- Estúdio: `assets/backgrounds/studio/bg_studio_v001.png`
- Lançamento: `assets/backgrounds/release/bg_release_v001.png`
- Show: `assets/backgrounds/live_show/bg_live_show_v001.png`
- Social: `assets/backgrounds/social/bg_social_v001.png`
- Eventos: `assets/backgrounds/events/bg_events_v001.png`
- Mercado: `assets/backgrounds/market/bg_market_v001.png`
- Staff: `assets/backgrounds/staff/bg_staff_v001.png`
- Finanças: `assets/backgrounds/economy/bg_economy_v001.png`
- Turnê: `assets/backgrounds/world_tour/bg_world_tour_v001.png`

## Avatares e faces
- `assets/characters/player/CHR_PLAYER_*.png`
- `assets/characters/faces/FACE_PLAYER_*.png`

## Recrutáveis
- `assets/characters/recruits/CHR_RECRUIT_*.png`
- extras: `assets/characters/recruits/extras/`

## Staff
- `assets/characters/staff/CHR_STAFF_*.png`

## Logos
- Banda: `assets/logos/bands/LOGO_BAND_*.png`
- Rock opcional: `assets/logos/bands/optional_rock_only/LOGO_BAND_SKULL_WINGS_01.png`
- Universo: `assets/logos/world/LOGO_LABEL_01.png` e `LOGO_FESTIVAL_01.png`

## Diagnóstico da falha anterior
Os avatares apareciam porque os novos caminhos de personagens existiam no projeto. Os fundos não apareciam porque o código procurava nomes `BG_...` que não estavam na pasta atual. Esta build aponta para os nomes reais já existentes e conecta os logos ao cabeçalho e à criação da banda.
