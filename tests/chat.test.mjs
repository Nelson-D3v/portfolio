import test from 'node:test';
import assert from 'node:assert/strict';
import { MENU, responder, iniciarChat } from '../site/js/chat.js';

const TELEFONE = /\+?\d{2}[\s-]?\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}/;

test('o menu tem as 4 opções do fluxo real', () => {
  assert.deepEqual(MENU.map((m) => m.id), ['foto', 'projetos', 'ia', 'demanda']);
});

test('registrar demanda devolve um número de protocolo', () => {
  assert.match(responder('demanda'), /protocolo/i);
});

test('a IA admite quando não sabe', () => {
  assert.match(responder('ia'), /não sei/i);
});

test('opção desconhecida pede para escolher uma opção válida', () => {
  assert.equal(responder('xyz'), 'Não entendi. Escolha uma das opções.');
});

test('nenhuma resposta traz telefone', () => {
  for (const m of MENU) assert.doesNotMatch(m.resposta + m.rotulo, TELEFONE);
});

test('iniciarChat mostra a saudação e um botão por opção, e responde ao clique', () => {
  const criados = [];
  const fabrica = () => {
    const el = { children: [], className: '', textContent: '', listeners: {}, scrollTop: 0, scrollHeight: 0,
      append(c) { this.children.push(c); },
      addEventListener(t, f) { this.listeners[t] = f; },
      setAttribute() {} };
    criados.push(el);
    return el;
  };
  const msgs = fabrica();
  const opcoes = fabrica();
  iniciarChat({ msgs, opcoes }, { criar: fabrica, esperar: (f) => f() });

  assert.equal(msgs.children.length, 1, 'saudação');
  assert.equal(opcoes.children.length, MENU.length);

  opcoes.children[3].listeners.click();
  const textos = msgs.children.map((c) => c.textContent);
  assert.ok(textos.some((t) => t.includes(MENU[3].rotulo)), 'mensagem do visitante');
  assert.ok(textos.some((t) => /protocolo/i.test(t)), 'resposta do bot');
});
