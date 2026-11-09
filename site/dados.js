// =====================================================================
//  TODO O CONTEÚDO DO SITE FICA AQUI. Edite os textos, links e projetos.
//
//  Marcas para você procurar e substituir:
//    [PREENCHER]  -> escreva o texto real
//    [CONFIRMAR]  -> confira se a informação está certa
//  Imagens dos projetos: coloque em assets/projetos/<id>.jpg
// =====================================================================

export const perfil = {
  nome: 'Nelson Félix',
  titulo: 'Desenvolvimento web · Automação · IA',
  frase:
    'Crio sites, sistemas e automações de WhatsApp para agências e para quem tem um projeto próprio. Do primeiro rascunho até o ar, sem complicação.',
};

// resultado.status: 'preencher' (falta escrever), 'confirmar' (confira) ou 'ok' (texto final)
export const projetos = [
  {
    id: 'libelle',
    nome: 'Libelle Club',
    link: 'https://libelleclub.com.br',
    nota: null,
    imagem: 'assets/projetos/libelle.png',
    problema: 'Marca de moda feita sob encomenda que vendia pelo Instagram, sem catálogo nem pedidos num lugar só.',
    solucao:
      'Catálogo online com a identidade da marca, login de clientes, pedidos com pagamento pelo Mercado Pago, frete do Correio calculado no checkout, reserva segura de peças únicas, e-mails automáticos e painel de administração onde a própria marca edita produtos e publica o site.',
    tecnologias: ['Node.js', 'Express', 'Supabase', 'Mercado Pago', 'SuperFrete'],
    resultado: {
      texto:
        'No ar desde agosto, com +10 pedidos feitos pelo site. Antes, cada pedido era fechado um por um no Instagram; agora o pedido chega com pagamento e frete calculados na hora, e a equipe só acompanha a lista de pedidos. A marca também atualiza as peças e publica o site sozinha, pelo painel.',
      status: 'ok',
    },
  },
  {
    id: 'bot-gabinete',
    nome: 'Bot de WhatsApp do gabinete',
    link: null,
    nota: null,
    imagem: 'assets/projetos/bot-gabinete.png',
    problema: 'Um gabinete recebendo mensagens de cidadãos pelo WhatsApp, todas respondidas à mão.',
    solucao:
      'Bot de WhatsApp com menu numerado: foto com a moldura do deputado, figurinhas, kit de material de campanha (digital ou físico), projetos e leis, biografia, contato, abaixo-assinado, registro de demandas e uma conversa livre respondida por IA com base em textos do próprio mandato.',
    tecnologias: ['Node.js', 'whatsapp-web.js', 'Python', 'IA local (GPT4All)'],
    resultado: {
      texto: '300+ mensagens de 35 pessoas em 4 semanas',
      status: 'ok',
    },
  },
  {
    id: 'forzy',
    nome: 'Forzy · manutenção preditiva',
    link: 'https://forzy-ims.vercel.app',
    nota: 'Projeto acadêmico FIAP × Forzy-Promon, feito em equipe.',
    imagem: 'assets/projetos/forzy.png',
    problema: 'Bombas industriais que só são consertadas depois que quebram, sem monitoramento contínuo.',
    solucao:
      'Painel de monitoramento de uma bomba industrial com sensor de vibração (ESP32 + MPU6050) em tempo real, análise de espectro (FFT), detecção de anomalias, planta SCADA em 2D e 3D, cadastro de ativos com leitura da placa do motor por foto e assistente de IA para manutenção.',
    tecnologias: ['JavaScript', 'HTML/CSS', 'ESP32', 'Python', 'OpenAI'],
    resultado: {
      texto: '3º lugar no pódio do NEXT, o principal evento de tecnologia da FIAP.',
      status: 'ok',
    },
  },
  {
    id: 'portal-cdr',
    nome: 'Portal CDR',
    link: 'https://portal-roca.vercel.app',
    nota: null,
    imagem: 'assets/projetos/portal-cdr.png',
    problema: 'Time de futebol que anotava jogos, jogadores, gols e cartões em planilhas do Excel, sem um lugar único e fácil para consultar a artilharia e as estatísticas.',
    solucao: 'Portal público com filtros e rankings, e área de administração para lançar partidas. As estatísticas são calculadas a partir dos gols, assistências e cartões registrados, então nunca ficam fora de sincronia. Também importa as planilhas e o histórico do clube e tem 75 testes automatizados.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind', 'Vitest'],
    resultado: {
      texto:
        'No ar desde outubro. O time deixou as planilhas do Excel: jogos, jogadores, gols, assistências e cartões são lançados num só lugar e as estatísticas se calculam sozinhas. As planilhas antigas podem ser importadas.',
      status: 'ok',
    },
  },
  {
    id: 'portal-deputado',
    nome: 'Portal do deputado',
    link: null,
    nota: 'Sistema interno, com acesso restrito.',
    imagem: 'assets/projetos/portal-deputado.png',
    problema:
      'Uma campanha a deputado estadual sem um lugar único para registrar as pessoas que apoiavam o candidato (academias, embaixadores, influenciadores, vereadores e lideranças) e sem como estimar quantos votos isso representava na eleição de 2026.',
    solucao:
      'Portal de gestão do mandato com cadastro de academias, embaixadores, influenciadores, vereadores e lideranças, controle de emendas, mapa interativo e painel com filtros por região e cidade, exportação para CSV e estimativa de votos calculada a partir dos cadastros. O portal também monitora os cadastros feitos por cada assessor.',
    tecnologias: ['Supabase', 'WordPress', 'Leaflet'],
    resultado: {
      texto: 'Usado para organizar a base de apoio e estimar os votos da eleição de 2026, com acompanhamento do trabalho de cada assessor.',
      status: 'ok',
    },
  },
];

export const servicos = [
  {
    nome: 'Sites e sistemas',
    paraQuem: 'Agências que precisam de reforço e pessoas com projeto próprio.',
    resolve:
      'Você precisa estar no ar, vender ou organizar um processo, e não tem quem construa.',
  },
  {
    nome: 'Automação e integrações',
    paraQuem: 'Quem perde tempo com tarefas repetitivas ou com atendimento no WhatsApp.',
    resolve: 'Bots, scripts e ligações entre sistemas que trabalham sozinhos.',
  },
];

export const sobre = {
  paragrafos: [
    'Sou o Nelson, tenho 20 anos, sou desenvolvedor e estudo Inteligência Artificial na FIAP. Resolvo problemas reais com código que funciona: coloquei no ar uma loja que fecha pedidos sozinha, um bot de WhatsApp para um gabinete e um sistema de manutenção preditiva que ficou em 3º lugar no NEXT.',
    'Depois de trabalhar com agências, escolhi atender direto: você fala com a pessoa que faz o trabalho. Isso traz decisões rápidas, comunicação sem intermediários e um resultado mais coerente do começo ao fim.',
    'Se você quer um site rápido, claro e estável, com design atual e abordagem profissional, vamos nos encaixar. Se procura algo barato, sem estratégia e feito em cima de um template, eu não sou a opção.',
  ],
};

// nivel de 1 a 5: 1 = básico, 2 = iniciante, 3 = intermediário, 4 = avançado, 5 = especialista
export const habilidades = [
  { nome: 'JavaScript', nivel: 4 },
  { nome: 'Node.js', nivel: 4 },
  { nome: 'HTML e CSS', nivel: 4 },
  { nome: 'Python', nivel: 3 },
  { nome: 'TypeScript', nivel: 3 },
  { nome: 'SQL e Supabase', nivel: 3 },
];

export const contato = {
  email: 'nelsonfelix102005@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nelsonfelixneto',
  github: 'https://github.com/Nelson-D3v',
  // WhatsApp do bot (só dígitos: 55 + DDD + número). O botão só aparece com botNoAr: true.
  whatsappBot: '5511946655720',
  botNoAr: false, // mude para true quando o bot estiver rodando na VPS
};
