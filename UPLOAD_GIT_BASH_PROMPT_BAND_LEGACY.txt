# PROMPT PARA NOVA CONVERSA — BAND LEGACY / UPLOAD GIT BASH

Use este texto em uma nova conversa com o ChatGPT caso precise de ajuda para fazer upload do projeto Band Legacy via Git Bash.

## Projeto
BAND LEGACY

## Pasta local Windows
C:\Users\jonat\Desktop\GAME\¨2026\BAND Legacy

## Caminho Git Bash
cd "/c/Users/jonat/Desktop/GAME/¨2026/BAND Legacy"

## Repositório GitHub
https://github.com/jonatanoficial-bit/BAND-LEGACY.git

## Comandos-base para upload
```bash
cd "/c/Users/jonat/Desktop/GAME/¨2026/BAND Legacy"
git status
git add .
git commit -m "Build Band Legacy vX.X.X"
git push -u origin main
```

## Se o repositório ainda não estiver configurado
```bash
cd "/c/Users/jonat/Desktop/GAME/¨2026/BAND Legacy"
git init
git branch -M main
git remote remove origin 2>/dev/null
git remote add origin https://github.com/jonatanoficial-bit/BAND-LEGACY.git
git add .
git commit -m "Build Band Legacy vX.X.X"
git push -u origin main
```

## Se aparecer erro de rejeição porque o GitHub já tem histórico
Se o objetivo for sobrescrever o GitHub com a build atual do PC, usar:
```bash
git push --force-with-lease -u origin main
```

## Se aparecer estado MERGING
Se o terminal mostrar algo como `(main|MERGING)`, primeiro sair do merge:
```bash
git merge --abort
```

Depois enviar:
```bash
git push --force-with-lease -u origin main
```

## Observações importantes
- O caminho tem espaço em `BAND Legacy`, por isso precisa ficar entre aspas.
- O caminho tem a pasta `¨2026`; manter exatamente assim.
- O upload da build Band Legacy v2.0.0 já foi concluído anteriormente com `git push --force-with-lease -u origin main`.
- Se o Vercel não atualizar automaticamente, entrar no Vercel e clicar em Redeploy.
