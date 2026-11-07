import test from 'node:test';
import assert from 'node:assert/strict';
import { resolverTema, aplicarTema } from '../site/js/tema.js';

test('a escolha salva do visitante vence a preferência do sistema', () => {
  assert.equal(resolverTema('claro', true), 'claro');
  assert.equal(resolverTema('escuro', false), 'escuro');
});

test('sem escolha salva, segue o sistema', () => {
  assert.equal(resolverTema(null, true), 'escuro');
  assert.equal(resolverTema(null, false), 'claro');
});

test('valor salvo inválido é ignorado', () => {
  assert.equal(resolverTema('lixo', true), 'escuro');
  assert.equal(resolverTema('lixo', false), 'claro');
});

test('aplicarTema grava data-tema no elemento raiz', () => {
  const doc = { documentElement: { dataset: {} } };
  aplicarTema('claro', doc);
  assert.equal(doc.documentElement.dataset.tema, 'claro');
});
