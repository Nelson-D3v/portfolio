import test from 'node:test';
import assert from 'node:assert/strict';
import { escapar, htmlProjeto, renderProjetos } from '../site/js/projetos.js';
import { projetos } from '../site/dados.js';

const base = {
  id: 'libelle',
  nome: 'Libelle Club',
  link: 'https://libelleclub.com.br',
  nota: null,
  imagem: 'assets/projetos/libelle.jpg',
  problema: 'Problema X',
  solucao: 'Solução Y',
  tecnologias: ['Node.js', 'Supabase'],
  resultado: { texto: null, status: 'preencher' },
};

test('escapar neutraliza < > & e aspas', () => {
  const s = escapar('<b>"a"&\'');
  assert.doesNotMatch(s, /[<>"']/);
  assert.match(s, /&lt;b&gt;/);
});

test('projeto com link mostra o botão com rel noopener', () => {
  const h = htmlProjeto(base);
  assert.match(h, /href="https:\/\/libelleclub\.com\.br"/);
  assert.match(h, /rel="noopener"/);
});

test('projeto sem link não mostra botão de link', () => {
  const h = htmlProjeto({ ...base, link: null });
  assert.doesNotMatch(h, /<a /);
});

test('projeto com whatsapp mostra o botão "Testar o bot"; número inválido não', () => {
  const h = htmlProjeto({ ...base, link: null, whatsapp: '5511946655720' });
  assert.match(h, /href="https:\/\/wa\.me\/5511946655720"/);
  assert.match(h, /Testar o bot/);
  assert.doesNotMatch(htmlProjeto({ ...base, link: null, whatsapp: '123' }), /<a /);
});

test('o espaço de imagem mostra o caminho do arquivo', () => {
  assert.match(htmlProjeto(base), /assets\/projetos\/libelle\.jpg/);
});

test('resultado a confirmar e a preencher vêm marcados', () => {
  assert.match(htmlProjeto({ ...base, resultado: { texto: '300 msgs', status: 'confirmar' } }), /\[CONFIRMAR\]/);
  assert.match(htmlProjeto(base), /\[PREENCHER\]/);
});

test('resultado ok mostra o texto sem marca', () => {
  const h = htmlProjeto({ ...base, resultado: { texto: 'Vendas dobraram', status: 'ok' } });
  assert.match(h, /Vendas dobraram/);
  assert.doesNotMatch(h, /\[CONFIRMAR\]|\[PREENCHER\]/);
});

test('a nota aparece quando existe', () => {
  assert.match(htmlProjeto({ ...base, nota: 'Fora do ar' }), /Fora do ar/);
});

test('texto vindo dos dados é escapado (sem HTML injetado)', () => {
  const h = htmlProjeto({ ...base, problema: '<script>alert(1)</script>' });
  assert.doesNotMatch(h, /<script>/);
  assert.match(h, /&lt;script&gt;/);
});

test('lista vazia mostra mensagem em vez de ficar em branco', () => {
  const el = { innerHTML: '' };
  renderProjetos([], el);
  assert.match(el.innerHTML, /Nenhum projeto ainda/);
});

test('renderiza um cartão por projeto', () => {
  const el = { innerHTML: '' };
  renderProjetos(projetos, el);
  assert.equal((el.innerHTML.match(/class="cartao"/g) || []).length, projetos.length);
});
