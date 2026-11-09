import { iniciarTema } from './tema.js';
import { renderProjetos } from './projetos.js';
import { iniciarChat } from './chat.js';
import { htmlServicos, htmlHabilidades, hrefEmail, hrefWhatsapp } from './secoes.js';
import { projetos, perfil, servicos, sobre, habilidades, contato } from '../dados.js';

const $ = (id) => document.getElementById(id);

iniciarTema($('tema-btn'));
$('hero-sobretitulo').textContent = perfil.titulo;
$('hero-frase').textContent = perfil.frase;
renderProjetos(projetos, $('lista-projetos'));
$('lista-servicos').innerHTML = htmlServicos(servicos);
for (const t of sobre.paragrafos) {
  const p = document.createElement('p');
  p.className = 'sub';
  p.textContent = t;
  $('texto-sobre').append(p);
}
$('lista-habilidades').innerHTML = htmlHabilidades(habilidades);

const mailto = hrefEmail(contato.email);
$('email-grande').textContent = contato.email;
$('email-grande').href = mailto;
$('email-botao').href = mailto;
$('topo-email').href = mailto;
$('link-linkedin').href = contato.linkedin;
$('link-github').href = contato.github;

iniciarChat({ msgs: $('chat-msgs'), opcoes: $('chat-opcoes') });

const zap = hrefWhatsapp(contato.whatsappBot, 'Oi');
if (contato.botNoAr && zap) {
  $('chat-whatsapp').href = zap;
  $('chat-whatsapp').hidden = false;
}
