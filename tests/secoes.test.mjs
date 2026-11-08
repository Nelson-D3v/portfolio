import test from 'node:test';
import assert from 'node:assert/strict';
import { htmlServicos, hrefEmail, hrefWhatsapp } from '../site/js/secoes.js';
import { servicos } from '../site/dados.js';

test('renderiza um cartão por serviço, com "Para" e "Resolve"', () => {
  const h = htmlServicos(servicos);
  assert.equal((h.match(/class="svc"/g) || []).length, 2);
  assert.match(h, /Para:/);
  assert.match(h, /Resolve:/);
  assert.match(h, /Sites e sistemas/);
});

test('texto dos serviços é escapado', () => {
  const h = htmlServicos([{ nome: '<img src=x>', paraQuem: 'a & b', resolve: '"c"' }]);
  assert.doesNotMatch(h, /<img/);
  assert.match(h, /a &amp; b/);
});

test('hrefEmail monta mailto para um e-mail válido', () => {
  assert.equal(hrefEmail('ola@exemplo.com'), 'mailto:ola@exemplo.com');
});

test('hrefEmail com valor inválido cai para a seção de contato', () => {
  assert.equal(hrefEmail(''), '#contato');
  assert.equal(hrefEmail('sem-arroba'), '#contato');
});

test('hrefWhatsapp monta o link wa.me e rejeita número inválido', () => {
  assert.equal(hrefWhatsapp('5511946655720', 'Oi'), 'https://wa.me/5511946655720?text=Oi');
  assert.equal(hrefWhatsapp('(11) 94665-5720'), null);
  assert.equal(hrefWhatsapp(null), null);
});
