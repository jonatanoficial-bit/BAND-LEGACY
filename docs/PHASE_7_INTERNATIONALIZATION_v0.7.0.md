# BAND LEGACY — FASE 7 — INTERNACIONALIZAÇÃO

Versão: `v0.7.0_20260522_1640`

## Objetivo

Preparar o jogo para venda internacional com suporte inicial a:

- Português do Brasil (`pt-BR`)
- Inglês (`en-US`)
- Espanhol (`es-ES`)

## Implementado

1. seletor de idioma no topo da interface;
2. seletor de idioma também na tela Settings;
3. persistência do idioma escolhido no navegador;
4. tradução inicial do menu principal, aviso mobile, navegação lateral, tela de saves, perfil, criação de banda, lobby, cards principais, settings e textos do ciclo de carreira;
5. formatação localizada de data, hora, números e moeda no HUD principal;
6. estrutura oficial `/data/i18n/` criada para expansão futura;
7. fallback interno para o jogo continuar funcionando mesmo se aberto via `file://` e o navegador bloquear leitura de JSON externo;
8. build versionada com versão visível no jogo.

## Regra para as próximas fases

A partir desta fase, novos textos de interface devem ser cadastrados no sistema de idioma. Evitar textos fixos diretamente no HTML ou em mensagens geradas pelo JavaScript.

## Arquivos principais alterados

- `index.html`
- `script.js`
- `style.css`
- `/data/i18n/pt-BR.json`
- `/data/i18n/en-US.json`
- `/data/i18n/es-ES.json`

## Pendências para a fase final AAA

- expandir tradução para todos os eventos gerados dinamicamente;
- revisar tom de tradução com tradutor humano;
- separar 100% dos textos em chaves estáveis;
- adicionar localização de tutorial, emails, eventos narrativos e contratos.
