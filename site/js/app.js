import { iniciarTema } from './tema.js';
import { renderProjetos } from './projetos.js';
import { iniciarChat } from './chat.js';
import { htmlServicos, htmlAutomacoes, htmlHabilidades, hrefWhatsapp } from './secoes.js';
import { projetos, perfil, servicos, automacoes, sobre, habilidades, contato } from '../dados.js';

const $ = (id) => document.getElementById(id);

iniciarTema($('tema-btn'));
$('hero-sobretitulo').textContent = perfil.titulo;
$('hero-frase').textContent = perfil.frase;
renderProjetos(projetos, $('lista-projetos'));
$('lista-automacoes').innerHTML = htmlAutomacoes(automacoes);
$('lista-servicos').innerHTML = htmlServicos(servicos);
for (const t of sobre.paragrafos) {
  const p = document.createElement('p');
  p.className = 'sub';
  p.textContent = t;
  $('texto-sobre').append(p);
}
$('lista-habilidades').innerHTML = htmlHabilidades(habilidades);

const zapContato = hrefWhatsapp(contato.whatsapp, 'Olá, vi seu portfólio e quero conversar sobre um projeto.');
if (zapContato) {
  $('link-whatsapp').href = zapContato;
  $('topo-contato').href = zapContato;
  $('topo-contato').target = '_blank';
  $('topo-contato').rel = 'noopener';
}
$('link-linkedin').href = contato.linkedin;
$('link-github').href = contato.github;

iniciarChat({ msgs: $('chat-msgs'), opcoes: $('chat-opcoes') });

/* animação leve de entrada: cada bloco aparece ao chegar na tela */
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const alvos = document.querySelectorAll('section h2, section .sobre-titulo, .sub, .cartao, .svc, .hab, .acoes.centro');
  document.documentElement.classList.add('anima');
  const obs = new IntersectionObserver((itens) => {
    for (const i of itens) if (i.isIntersecting) { i.target.classList.add('visivel'); obs.unobserve(i.target); }
  }, { threshold: 0.12 });
  alvos.forEach((el, n) => {
    el.classList.add('revela');
    el.style.setProperty('--atraso', `${(n % 3) * 0.08}s`);
    obs.observe(el);
  });
}

/* o texto do topo vai se "autocompletando", como alguém digitando */
{
  const el = $('hero-sobretitulo');
  const texto = el.textContent;
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && texto) {
    el.textContent = '';
    el.classList.add('digitando');
    el.setAttribute('aria-label', texto);
    let i = 0;
    const t = setInterval(() => {
      el.textContent = texto.slice(0, ++i);
      if (i >= texto.length) { clearInterval(t); el.classList.remove('digitando'); }
    }, 38);
  }
}
