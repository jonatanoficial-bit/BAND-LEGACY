# Hotfix v1.3.2 — Reconhecimento dos assets organizados

Correção aplicada para o jogo reconhecer a pasta `assets/` gerada no pacote organizado.

## Regra principal

A pasta `assets/` precisa ficar diretamente na raiz do jogo:

```text
BAND-LEGACY-main/
  index.html
  script.js
  style.css
  assets/
```

Não coloque `assets` dentro de outra pasta como:

```text
VALE_GAMES_ASSETS_ORGANIZADOS/assets/
SEM ARRUMAR/assets/
```

O jogo procura exatamente por caminhos como:

```text
assets/backgrounds/BG_STUDIO_RECORDING_ROOM_01.png
assets/characters/player/CHR_PLAYER_MALE_01.png
assets/characters/faces/FACE_PLAYER_MALE_01.png
assets/logos/bands/LOGO_BAND_CROWN_01.png
```
