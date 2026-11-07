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
    imagem: 'assets/projetos/libelle.jpg',
    problema: 'Marca de moda feita sob encomenda que vendia pelo Instagram, sem catálogo nem pedidos num lugar só.',
    solucao:
      'Catálogo online com a identidade da marca, login de clientes, pedidos com pagamento pelo Mercado Pago, e-mails automáticos e painel de administração.',
    tecnologias: ['Node.js', 'Express', 'Supabase', 'Mercado Pago'],
    resultado: { texto: null, status: 'preencher' },
  },
  {
    id: 'bot-gabinete',
    nome: 'Bot de WhatsApp do gabinete',
    link: null,
    nota: null,
    imagem: 'assets/projetos/bot-gabinete.jpg',
    problema: 'Um gabinete recebendo mensagens de cidadãos pelo WhatsApp, todas respondidas à mão.',
    solucao:
      'Bot de WhatsApp com menu de opções (projetos, biografia, contato, abaixo-assinado e ajuda) e uma opção de pergunta livre respondida por IA com base em textos do próprio mandato.',
    tecnologias: ['Node.js', 'whatsapp-web.js', 'Python', 'IA local (GPT4All)'],
    resultado: {
      texto: '300+ mensagens de 35 pessoas em 4 semanas',
      status: 'confirmar',
    },
  },
  {
    id: 'forzy',
    nome: 'Forzy · manutenção preditiva',
    link: null,
    nota: 'Projeto acadêmico FIAP × Forzy-Promon.',
    imagem: 'assets/projetos/forzy.jpg',
    problema: 'Bombas industriais que só são consertadas depois que quebram, sem monitoramento contínuo.',
    solucao:
      'Painel de monitoramento com sensor de vibração (ESP32 + MPU6050) em tempo real, detecção de anomalias, cadastro de ativos com leitura da placa do motor por foto e assistente de IA para manutenção.',
    tecnologias: ['JavaScript', 'Python', 'ESP32', 'OpenAI'],
    resultado: { texto: null, status: 'preencher' },
  },
  {
    id: 'portal-cdr',
    nome: 'Portal CDR',
    link: 'https://portal-roca.vercel.app',
    nota: null,
    imagem: 'assets/projetos/portal-cdr.jpg',
    problema: 'Time de futebol sem um lugar único para consultar jogos, artilharia e estatísticas, que eram lançados à mão.',
    solucao: 'Portal público com filtros e rankings, e área de administração para lançar partidas. As estatísticas são calculadas a partir dos gols, assistências e cartões registrados, então nunca ficam fora de sincronia.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'Tailwind'],
    resultado: { texto: null, status: 'preencher' },
  },
  {
    id: 'portal-deputado',
    nome: 'Portal do deputado',
    link: null,
    nota: 'Este site está fora do ar no momento.',
    imagem: 'assets/projetos/portal-deputado.jpg',
    problema: '[PREENCHER] Gabinete sem um portal próprio para falar com a população.',
    solucao: '[PREENCHER] Portal institucional com banco de dados próprio.',
    tecnologias: ['Supabase', 'WordPress'],
    resultado: { texto: null, status: 'preencher' },
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
  texto:
    '[PREENCHER] Sou o Nelson, desenvolvedor de São Paulo e estudante de Inteligência Artificial na FIAP. Gosto de resolver problemas reais com código simples que funciona.',
};

export const contato = {
  email: 'nelsonfelix102005@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nelsonfelixneto',
  github: 'https://github.com/Nelson-D3v',
};
