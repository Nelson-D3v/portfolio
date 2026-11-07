import { iniciarTema } from './tema.js';
import { renderProjetos } from './projetos.js';
import { iniciarChat } from './chat.js';
import { htmlServicos, hrefEmail } from './secoes.js';
import { projetos, perfil, servicos, sobre, contato } from '../dados.js';

const $ = (id) => document.getElementById(id);

iniciarTema($('tema-btn'));
$('hero-sobretitulo').textContent = perfil.titulo;
$('hero-frase').textContent = perfil.frase;
renderProjetos(projetos, $('lista-projetos'));
$('lista-servicos').innerHTML = htmlServicos(servicos);
$('texto-sobre').textContent = sobre.texto;

const mailto = hrefEmail(contato.email);
$('email-grande').textContent = contato.email;
$('email-grande').href = mailto;
$('email-botao').href = mailto;
$('topo-email').href = mailto;
$('link-linkedin').href = contato.linkedin;
$('link-github').href = contato.github;

iniciarChat({ msgs: $('chat-msgs'), opcoes: $('chat-opcoes') });
