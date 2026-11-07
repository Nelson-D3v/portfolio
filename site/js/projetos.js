/** Escapa texto para ir dentro de HTML ou de atributo. */
export function escapar(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const MARCA = { preencher: '[PREENCHER]', confirmar: '[CONFIRMAR]', ok: '' };

function htmlResultado({ texto, status }) {
  const marca = MARCA[status] ?? '';
  const partes = [marca, texto ? escapar(texto) : ''].filter(Boolean);
  const classe = status === 'ok' ? '' : ' pendente';
  return `<dd class="resultado${classe}">${partes.join(' ')}</dd>`;
}

/** Um cartão de projeto. Todo texto dos dados passa por escapar(). */
export function htmlProjeto(p) {
  const imagem = escapar(p.imagem);
  const tags = p.tecnologias.map((t) => `<li>${escapar(t)}</li>`).join('');
  const nota = p.nota ? `<p class="nota">${escapar(p.nota)}</p>` : '';
  const botao = p.link
    ? `<a class="btn principal" href="${escapar(p.link)}" target="_blank" rel="noopener">Ver no ar ↗</a>`
    : '';

  return `<article class="cartao" id="projeto-${escapar(p.id)}">
  <div class="foto">
    <div class="foto-vazia"><span>[IMAGEM]</span> coloque o print em<br><code>${imagem}</code></div>
    <img src="${imagem}" alt="Tela do projeto ${escapar(p.nome)}" loading="lazy" onerror="this.remove()">
  </div>
  <div class="corpo">
    <h3>${escapar(p.nome)}</h3>
    ${nota}
    <dl>
      <div><dt>Problema</dt><dd>${escapar(p.problema)}</dd></div>
      <div><dt>Solução</dt><dd>${escapar(p.solucao)}</dd></div>
      <div><dt>Resultado</dt>${htmlResultado(p.resultado)}</div>
    </dl>
    <ul class="tags">${tags}</ul>
    ${botao}
  </div>
</article>`;
}

export function renderProjetos(lista, el) {
  el.innerHTML = lista.length
    ? lista.map(htmlProjeto).join('')
    : '<p class="vazio">Nenhum projeto ainda. Volte em breve.</p>';
}
