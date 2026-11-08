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
