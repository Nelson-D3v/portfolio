import { escapar } from './projetos.js';

export function htmlServicos(lista) {
  return lista
    .map(
      (s) => `<article class="svc">
  <h3>${escapar(s.nome)}</h3>
  <p><b>Para:</b> ${escapar(s.paraQuem)}</p>
  <p><b>Resolve:</b> ${escapar(s.resolve)}</p>
</article>`
    )
    .join('');
}

export function htmlAutomacoes(lista) {
  return lista
    .map(
      (a) => `<article class="svc">
  <h3>${escapar(a.nome)}</h3>
  <p><b>O que faz:</b> ${escapar(a.faz)}</p>
  <p><b>Ganho:</b> ${escapar(a.ganho)}</p>
</article>`
    )
    .join('');
}

export const NIVEIS = ['Básico', 'Iniciante', 'Intermediário', 'Avançado', 'Especialista'];

export function htmlHabilidades(lista) {
  return lista
    .map((h) => {
      const n = Math.min(5, Math.max(1, Math.round(Number(h.nivel)) || 1));
      return `<li class="hab">
  <span class="hab-nome">${escapar(h.nome)}</span>
  <span class="hab-barra n${n}" role="img" aria-label="${NIVEIS[n - 1]}">${[1, 2, 3, 4, 5]
        .map((i) => `<i class="${i <= n ? 'cheio' : ''}"></i>`)
        .join('')}</span>
  <span class="hab-nivel">${NIVEIS[n - 1]}</span>
</li>`;
    })
    .join('');
}

/** mailto: para um e-mail com cara de válido; senão leva o visitante à seção de contato. */
export function hrefEmail(email) {
  const e = String(email ?? '').trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? `mailto:${e}` : '#contato';
}

/** Link wa.me para um número só com dígitos (55 + DDD + número); null se o número for inválido. */
export function hrefWhatsapp(numero, texto = '') {
  const n = String(numero ?? '').replace(/[^0-9]/g, '');
  if (!/^55[0-9]{10,11}$/.test(n)) return null;
  return `https://wa.me/${n}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;
}
