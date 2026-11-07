const TEMAS = ['escuro', 'claro'];
const CHAVE = 'tema';

/** Decide o tema: a escolha salva vale; sem ela (ou inválida), segue o sistema. */
export function resolverTema(salvo, prefereEscuro) {
  if (TEMAS.includes(salvo)) return salvo;
  return prefereEscuro ? 'escuro' : 'claro';
}

export function aplicarTema(tema, doc) {
  doc.documentElement.dataset.tema = tema;
}

function lerSalvo() {
  try {
    return localStorage.getItem(CHAVE);
  } catch {
    return null; // janela privada ou armazenamento bloqueado
  }
}

function gravar(tema) {
  try {
    localStorage.setItem(CHAVE, tema);
  } catch {
    /* sem armazenamento: o tema só vale nesta visita */
  }
}

/** Liga o botão seletor: aplica o tema inicial e alterna ao clicar. */
export function iniciarTema(botao) {
  const prefereEscuro = matchMedia('(prefers-color-scheme: dark)').matches;
  let atual = resolverTema(lerSalvo(), prefereEscuro);

  const pintar = () => {
    aplicarTema(atual, document);
    botao.setAttribute('aria-pressed', String(atual === 'claro'));
    botao.setAttribute('aria-label', atual === 'claro' ? 'Mudar para tema escuro' : 'Mudar para tema claro');
  };

  botao.addEventListener('click', () => {
    atual = atual === 'escuro' ? 'claro' : 'escuro';
    gravar(atual);
    pintar();
  });
  pintar();
}
