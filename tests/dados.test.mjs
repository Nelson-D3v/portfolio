import test from 'node:test';
import assert from 'node:assert/strict';
import * as dados from '../site/dados.js';

const { projetos, servicos, contato } = dados;
const TELEFONE = /\+?\d{2}[\s-]?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}/;
const por = (id) => projetos.find((p) => p.id === id);

test('há exatamente os 5 projetos combinados, nessa ordem', () => {
  assert.deepEqual(
    projetos.map((p) => p.id),
    ['libelle', 'bot-gabinete', 'forzy', 'portal-cdr', 'portal-deputado']
  );
});

test('todo projeto tem os campos do tipo Projeto', () => {
  for (const p of projetos) {
    for (const campo of ['id', 'nome', 'imagem', 'problema', 'solucao']) {
      assert.equal(typeof p[campo], 'string', `${p.id}.${campo}`);
      assert.ok(p[campo].length > 0, `${p.id}.${campo} vazio`);
    }
    assert.ok(p.link === null || typeof p.link === 'string', `${p.id}.link`);
    assert.ok(p.nota === null || typeof p.nota === 'string', `${p.id}.nota`);
    assert.ok(Array.isArray(p.tecnologias) && p.tecnologias.length > 0, `${p.id}.tecnologias`);
    assert.ok(['preencher', 'confirmar', 'ok'].includes(p.resultado.status), `${p.id}.status`);
    assert.match(p.imagem, new RegExp(`^assets/projetos/${p.id}\.(jpg|png)$`));
  }
});

test('a loja usa o domínio libelleclub.com.br', () => {
  assert.equal(por('libelle').link, 'https://libelleclub.com.br');
});

test('o portal do deputado não tem link e avisa que é um sistema interno', () => {
  assert.equal(por('portal-deputado').link, null);
  assert.match(por('portal-deputado').nota, /acesso restrito/i);
});

test('os números do bot ficam marcados para confirmar', () => {
  assert.equal(por('bot-gabinete').resultado.status, 'ok');
});

test('nenhum resultado "ok" fica sem texto', () => {
  for (const p of projetos) {
    if (p.resultado.status === 'ok') assert.ok(p.resultado.texto, p.id);
  }
});

test('nenhum telefone aparece em nenhum dado', () => {
  const { whatsappBot, ...contatoSemZap } = dados.contato;
  assert.doesNotMatch(JSON.stringify({ ...dados, contato: contatoSemZap }), TELEFONE);
});

test('o único telefone publicado é o do bot, e o botão fica escondido até o bot entrar no ar', () => {
  assert.equal(dados.contato.whatsappBot, '5511946655720');
  assert.equal(typeof dados.contato.botNoAr, 'boolean');
});

test('há 2 serviços, cada um com para quem e o que resolve', () => {
  assert.equal(servicos.length, 2);
  for (const s of servicos) {
    assert.ok(s.nome && s.paraQuem && s.resolve);
  }
});

test('contato aponta para o LinkedIn e o GitHub do Nelson', () => {
  assert.match(contato.linkedin, /nelsonfelixneto/);
  assert.match(contato.github, /Nelson-D3v/);
});
