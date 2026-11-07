// Chat simulado: reproduz o menu do bot real de WhatsApp, sem dados de pessoas.

export const MENU = [
  { id: 'foto', rotulo: 'Foto com moldura', resposta: 'Envie uma foto e receba sua arte com a moldura da campanha.' },
  { id: 'projetos', rotulo: 'Projetos e leis', resposta: 'Veja o trabalho legislativo concluído e o que está em andamento.' },
  { id: 'ia', rotulo: 'Conversar com a IA', resposta: 'Tem uma dúvida? Pergunte. Se eu não souber a resposta, digo que não sei e levo a pergunta para a equipe.' },
  { id: 'demanda', rotulo: 'Registrar demanda', resposta: 'Conte o problema. Eu organizo o pedido e devolvo um número de protocolo (ex.: #0042).' },
];

const NAO_ENTENDI = 'Não entendi. Escolha uma das opções.';

export function responder(id) {
  return MENU.find((m) => m.id === id)?.resposta ?? NAO_ENTENDI;
}

const padrao = {
  criar: (tag) => document.createElement(tag),
  esperar: (fn) => setTimeout(fn, 350),
};

/** Monta o chat dentro de { msgs, opcoes }. O texto entra sempre via textContent. */
export function iniciarChat({ msgs, opcoes }, deps = padrao) {
  const { criar, esperar } = deps;

  function mensagem(texto, quem) {
    const el = criar('div');
    el.className = `msg ${quem}`;
    el.textContent = texto;
    msgs.append(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  mensagem('Olá! 👋 Sou o assistente virtual. Escolha uma opção:', 'bot');

  for (const item of MENU) {
    const botao = criar('button');
    botao.className = 'chat-opcao';
    botao.textContent = item.rotulo;
    botao.setAttribute('type', 'button');
    botao.addEventListener('click', () => {
      mensagem(item.rotulo, 'me');
      esperar(() => mensagem(responder(item.id), 'bot'));
    });
    opcoes.append(botao);
  }
}
