# Portfólio · Nelson Félix

Site de uma página só, feito com HTML, CSS e JavaScript simples (sem instalar nada, sem build).
**Por que assim?** É a opção mais simples: abre rápido, a Vercel publica direto e qualquer pessoa consegue editar um texto.

## Estrutura

```
Portfolio/
├─ site/                  ← TUDO que vai para o ar fica aqui
│  ├─ index.html          ← estrutura da página
│  ├─ dados.js            ← ★ seus textos, projetos e contatos (edite aqui)
│  ├─ css/estilo.css      ← cores, fontes e layout
│  ├─ js/                 ← comportamento (tema claro/escuro, chat, projetos)
│  └─ assets/projetos/    ← ★ prints dos projetos
├─ tests/                 ← testes automáticos (não vão para o ar)
├─ ligar-site.bat         ← abre o site no seu computador
└─ LEIA-ME.md             ← este arquivo
```

## Onde editar seus dados (lista curta)

Tudo em `site/dados.js`:

1. **Nome, título e frase do topo** → `perfil`
2. **Projetos** (problema, solução, tecnologias, resultado, link) → `projetos`
3. **Serviços** → `servicos`
4. **Texto "Sobre"** → `sobre`
5. **E-mail, LinkedIn e GitHub** → `contato` (e-mail de contato (já é nelsonfelix102005@gmail.com))

**Prints dos projetos:** salve em `site/assets/projetos/` com o nome do projeto:
`libelle.jpg`, `bot-gabinete.jpg`, `forzy.jpg`, `portal-cdr.jpg`, `portal-deputado.jpg`.
Enquanto o arquivo não existir, o site mostra um aviso com o caminho certo.

**Marcas para procurar no `dados.js`:** `[PREENCHER]` (escreva o texto real) e `[CONFIRMAR]` (confira o dado, como os números do bot). Quando o texto estiver final, apague a marca.

## Ver no seu computador

Dê dois cliques em `ligar-site.bat` (precisa do Python instalado). O site abre em `http://localhost:8765`.
Não abra o `index.html` direto com dois cliques: o navegador bloqueia os módulos JavaScript nesse modo.

## Rodar os testes (opcional)

```
npm test
```

## Publicar na Vercel (passo a passo)

1. Crie um repositório no GitHub só com a pasta `site` (e, se quiser, `tests`, `LEIA-ME.md`). **Nunca** envie a pasta do bot de WhatsApp nem chaves/senhas.
2. Entre em vercel.com e faça login com o GitHub.
3. Clique em **Add New → Project** e escolha o repositório.
4. Em **Root Directory**, selecione `site` (se o repositório contiver só o conteúdo do site, deixe como está).
5. Em **Framework Preset**, escolha **Other**. Deixe Build Command e Output Directory vazios.
6. Clique em **Deploy**. Em cerca de um minuto você recebe o link `.vercel.app`.
7. Para mudar algo depois: edite, envie ao GitHub, e a Vercel republica sozinha.

## Antes de divulgar

- [ ] Adicionar os prints dos projetos
- [ ] Trocar todos os `[PREENCHER]` e confirmar os `[CONFIRMAR]`
- [ ] Escrever o texto do "Sobre"
- [ ] Decidir se Forzy e Portal CDR terão link
