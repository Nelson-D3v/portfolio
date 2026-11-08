// Chat simulado: reproduz o menu do bot real de WhatsApp, sem dados de pessoas.

export const MENU = [
  { id: 'foto', rotulo: 'Gerar foto com moldura', resposta: 'Envie uma foto e receba sua arte com a moldura do deputado.' },
  { id: 'figurinha', rotulo: 'Figurinha', resposta: 'Receba uma figurinha exclusiva do deputado.' },
  { id: 'material', rotulo: 'Material digital/físico', resposta: 'Acesse o kit de materiais de campanha, em versão digital ou física.' },
  { id: 'projetos', rotulo: 'Projetos e leis', resposta: 'Descubra o trabalho legislativo que já foi feito e o que está em andamento.' },
  { id: 'quem', rotulo: 'Quem é o deputado', resposta: 'Conheça a trajetória e a biografia do deputado.' },
  { id: 'contato', rotulo: 'Contato direto', resposta: 'Veja os canais para falar com a equipe.' },
  { id: 'causas', rotulo: 'Apoie nossas causas', resposta: 'Participe do abaixo-assinado e faça a diferença.' },
  { id: 'ia', rotulo: 'Converse comigo (IA)', resposta: 'Tem uma pergunta específica? Fale diretamente com a inteligência artificial do gabinete.' },
  { id: 'demanda', rotulo: 'Registrar uma demanda', resposta: 'Relate um problema, pedido de emenda ou solicitação de ajuda para o gabinete.' },
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

  mensagem('Olá! 👋 Bem-vindo(a) ao gabinete virtual. Escolha uma opção:', 'bot');

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
