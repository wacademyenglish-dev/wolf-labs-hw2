/* ============================================================
   NINE TIMES LONGER 2.0 · THE GEARS · LIVE CLASS · MAIN B2  22/10/2026
   Comparativos duplos: The more X, the more / less Y · The -er X, the
   -er Y (dois THE e uma vírgula); the more / fewer / less + substantivo;
   a forma curta (the sooner, the better). Multiplicadores: twice as
   long as, three times longer than, half as many as.
   O 2.0 (pedido do Carlos, 22/10: "nível B2… mais conversação… deixar o
   aluno falar mais… explicação legal… gostei das engrenagens… mais
   conversacional, de trocação de ideia"). A velha tinha SETE cenas de
   escolher entre três frases. Agora só a conversa e as engrenagens:
     I    Your Gears: a atividade dele vira a engrenagem A; ele diz o que
          muda (B) e se gira junto ou contra. Conversa, sem regra ainda.
     II   Mars, 1997: três hipóteses para DEFENDER, não para acertar;
          o professor revela; duas perguntas da vida dele.
     III  The Two THEs: a regra sempre na tela + o MONTADOR (metade A,
          metade B, sobe/desce): a frase se monta e as engrenagens giram.
     IV   Six Voices: ouve, recontar com dois THE (o professor marca),
          e uma pergunta da vida dele para cada voz.
     V–VII as palavras, o vídeo e o Line by Line (do kit, mantidos).
     VIII The Debate: cinco ideias; o aluno concorda ou rebate com as
          frases de B2; o professor pega o outro lado. No fim, o aluno
          inventa uma.
     IX   Your Numbers: os multiplicadores da vida dele, com os blocos.
     X    Fix the Findings (extra): seis notas, cinco erradas.
     XI   Your Laws: três leis da vida dele, com dois THE.
   Áudios v1–v6 e o vídeo iDbdXTMnOmE (1:21–3:37) mantidos.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'envelopes' },
  { k: 'abre', est: 'o', min: 6, img: 'monitor', rot: 'I · Your Gears', t: 'Something you do is gear A. What does it turn?', p: 'Pick an activity, then say what changes with it. Do they turn together, or against each other?' },
  { k: 'nave', est: 'o', min: 6, img: 'marte', rot: 'II · Mars, 1997', t: 'The spacecraft landed, sent pictures, then went quiet. It wasn’t broken. It had power.', p: 'Three theories. Pick one and defend it. Then your teacher opens the file.' },
  { k: 'dois', est: 'f', min: 8, img: 'monitor', rot: 'III · The Two THEs', t: 'Two THEs, one comma. The first amount pulls the second one.', p: 'Link the columns: tap a first half, then the half that finishes it. Read each sentence with a pause at the comma.' },
  { k: 'vozes', est: 'l', min: 8, img: 'mesa-som', rot: 'IV · Six Voices', t: 'Six people describe a proportion, without the structure.', p: 'Listen. Choose the sentence that says what they mean. Then answer the question about you.' },
  { k: 'palavras', est: 'l', img: 'monitor', rot: 'V · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'monitor', rot: 'VI · The Machines', t: 'What computers learned about managing time.', p: 'Guess first. Then watch. Then True or Lie.' },
  { k: 'falas', est: 'l', extra: 1, img: 'monitor', rot: 'VII · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'debate', est: 'o', min: 10, img: 'envelopes', rot: 'VIII · The Debate', t: 'Five ideas about work and life. Agree, or push back.', p: 'Your teacher reads the idea and takes the other side. Answer in your own words, with two THEs.' },
  { k: 'vezes', est: 'o', min: 6, img: 'monitor', rot: 'IX · Your Numbers', t: 'Twice as long, three times longer, half as many: the numbers of your life.', p: 'Answer with a real number. The teacher builds the blocks while you talk.' },
  { k: 'erros', est: 'f', min: 5, extra: 1, img: 'monitor', rot: 'X · Fix the Findings', t: 'Six findings from the lab. Five have a problem.', p: 'Read each one out loud the right way. Then tap it.' },
  { k: 'leis', est: 'w', min: 6, img: 'marte', rot: 'XI · Your Laws', t: 'Three laws of your life, with two THEs each.', p: 'Write them. Your teacher pushes back on one. They go to your My notes.' }
];

var YT = 'iDbdXTMnOmE';
var TR = {
  'v1.mp3': 'Every person we add to that group chat, I end up answering about twice as many messages and finishing about half as much actual work.',
  'v2.mp3': 'When the queue is short, we write proper answers. When it is long, the replies get shorter and shorter and honestly worse.',
  'v3.mp3': 'If somebody pings me while I am deep in something, I lose about twenty minutes getting back. It is not the interruption, it is the coming back.',
  'v4.mp3': 'The weeks I plan in the most detail are the weeks I end up improvising most, because the plan breaks by Tuesday and then I have nothing.',
  'v5.mp3': 'I moved everything to one check an hour. I get less done in the moment it happens, but at the end of the day there is more finished.',
  'v6.mp3': 'People say batch your messages. In my job, if I answer an hour late I lose the client. The advice assumes nobody is waiting on you.'
};

/* ---------- I · as engrenagens dele ---------- */
var COISAS = ['sleep', 'work', 'check your phone', 'exercise', 'drink coffee', 'scroll social media', 'travel', 'plan your week'];
var EFEITOS = ['energy', 'stress', 'time', 'money', 'patience', 'focus', 'mood'];
var ABRE = [
  { q: 'Tell me about it. What happens when you {A} more?', st: ['When I … more, I …', 'I get …', 'I have more / less …'], ex: 'When I sleep more, I have more energy and I’m nicer to people.' },
  { q: 'And when you {A} less? What do you notice first?', st: ['The first thing I notice is …', 'I start to …'], ex: 'The first thing I notice is my patience. I get irritated by everything.' },
  { q: 'Is that true for everybody, or is it just you?', st: ['I think it’s true for …', 'It depends on …'], ex: 'It depends on the person. My brother sleeps five hours and he’s fine.' },
  { q: 'Is there a point where it stops being true?', st: ['Up to a point …', 'After …, it’s the opposite.'], ex: 'Up to a point. After nine hours, I feel slow all day.' }
];

/* ---------- II · Marte ---------- */
var TEORIAS = [
  { t: 'It was busy with small tasks and never got to the important one.', k: 'certa' },
  { t: 'It was waiting for an instruction from Earth that never came.' },
  { t: 'It shut itself down to save power for the cold nights.' }
];
var MARTE_Q = [
  { q: 'Have you ever been 100% busy and finished nothing important? When?', st: ['Last week, I …', 'I spent the whole day …'], ex: 'Last Monday. I answered emails all day and the report never moved.' },
  { q: 'What are your “small tasks”, the ones that eat your day?', st: ['Mine are …', 'The worst one is …'], ex: 'Mine are WhatsApp groups. The worst one is the family group.' }
];

/* ---------- III · ligar as colunas (22/10, pedido do Carlos: no lugar do montador) ---------- */
/* d: 'mesmo' (as duas sobem juntas) ou 'oposto' (uma sobe, a outra desce) · a coluna B sai na ordem de LIGA_B */
var LIGA = [
  { a: 'The more messages you check,', b: 'the less work you finish.', d: 'oposto' },
  { a: 'The longer the queue,', b: 'the worse the answers.', d: 'oposto' },
  { a: 'The more people in the group chat,', b: 'the more messages you answer.', d: 'mesmo' },
  { a: 'The earlier you start,', b: 'the calmer you feel.', d: 'oposto' },
  { a: 'The more detailed the plan,', b: 'the more you improvise.', d: 'mesmo' }
];
var LIGA_B = [3, 0, 4, 1, 2];
/* acende só os dois THE da estrutura (o do começo e o depois da vírgula), nunca o artigo comum (the work, the chat) */
function doisThe(s) {
  return s.replace(/^The\b/, '<b class="tm-the">The</b>').replace(/, the\b/, '<b class="tm-virg">,</b> <b class="tm-the">the</b>');
}
/* o montador antigo (desligado): fica aqui porque o desenho dele pode voltar */
/* k: 'v' = verbo (the more / the less + oração) · 'n' = substantivo (the more / fewer / less + nome + oração) · 'a' = adjetivo (-er) */
var METADE_A = [
  { k: 'v', t: 'you check messages' },
  { k: 'n', conta: 1, nome: 'people', t: 'in the group chat' },
  { k: 'a', up: 'longer', down: 'shorter', t: 'the queue' },
  { k: 'a', up: 'earlier', down: 'later', t: 'you start' },
  { k: 'v', t: 'you plan' }
];
var METADE_B = [
  { k: 'v', t: 'you finish' },
  { k: 'n', conta: 0, nome: 'work', t: 'you get done' },
  { k: 'a', up: 'better', down: 'worse', t: 'the answers' },
  { k: 'a', up: 'calmer', down: 'more stressed', t: 'you feel' },
  { k: 'v', t: 'you improvise' }
];
function metade(x, sobe) {
  if (x.k === 'a') return (sobe ? x.up : x.down) + ' ' + x.t;
  if (x.k === 'n') return (sobe ? 'more' : x.conta ? 'fewer' : 'less') + ' ' + x.nome + ' ' + x.t;
  return (sobe ? 'more' : 'less') + ' ' + x.t;
}
function montada(a, sa, b, sb) {
  return '<b class="tm-the">The</b> ' + metade(METADE_A[a], sa) + '<b class="tm-virg">,</b> <b class="tm-the">the</b> ' + metade(METADE_B[b], sb) + '.';
}
var REGRA = [
  { w: 'the more / the less + clause', ex: 'The more you plan, the more you improvise.' },
  { w: 'the -er + noun or clause', ex: 'The longer the queue, the worse the answers.' },
  { w: 'the more / fewer / less + noun', ex: 'The more people, the fewer real answers. (fewer = you can count it)' },
  { w: 'the short form', ex: 'The sooner, the better. · The bigger, the better.' }
];
var NAO = [['More you practice, more you learn.', 'The more you practice, the more you learn.'], ['The more you check, less you finish.', 'the less you finish'], ['The most you plan, the most …', 'The more you plan, the more …'], ['The more long the queue …', 'The longer the queue …'], ['the less messages', 'the fewer messages']];

/* ---------- IV · as vozes ---------- */
/* 22/10 · o aluno ESCOLHE o que a voz quis dizer (no lugar do "You heard" do professor):
   ops[0] é a certa; as outras dizem outra coisa (sentido trocado), não a mesma frase com um erro */
var VOZES = [
  { au: 'v1.mp3', quem: 'A PROJECT MANAGER', diz: 'The more people in the chat, the more messages I answer and the less real work I finish.', q: 'How many group chats are you in? Which one costs you the most time?',
    ops: ['The more people in the chat, the more messages I answer and the less real work I finish.', 'The more people in the chat, the more real work I finish.', 'The fewer people in the chat, the more messages I answer.'] },
  { au: 'v2.mp3', quem: 'A SUPPORT AGENT', diz: 'The longer the queue, the shorter and worse the replies.', q: 'When you are busy, do your answers get shorter too? Give an example.',
    ops: ['The longer the queue, the shorter and worse the replies.', 'The longer the queue, the better the replies.', 'The shorter the queue, the worse the replies.'] },
  { au: 'v3.mp3', quem: 'A PROGRAMMER', diz: 'The deeper you are in the work, the longer it takes to come back after an interruption.', q: 'How long does it take you to get back after somebody interrupts you?',
    ops: ['The deeper you are in the work, the longer it takes to come back after an interruption.', 'The deeper you are in the work, the easier it is to come back.', 'The more interruptions you have, the faster you work.'] },
  { au: 'v4.mp3', quem: 'A TEAM LEADER', diz: 'The more detailed the plan, the more I end up improvising.', q: 'Do you plan your week? Does the plan survive until Friday?',
    ops: ['The more detailed the plan, the more I end up improvising.', 'The more detailed the plan, the less I improvise.', 'The less I plan, the more I improvise.'] },
  { au: 'v5.mp3', quem: 'A WRITER', diz: 'The less often I check, the more I finish by the end of the day.', q: 'Could you check your messages only once an hour? What would happen?',
    ops: ['The less often I check, the more I finish by the end of the day.', 'The more often I check, the more I finish.', 'The less often I check, the less I finish.'] },
  { au: 'v6.mp3', quem: 'SOMEONE WHO DISAGREES', diz: 'The later I answer, the more clients I lose.', q: 'Voice 5 or voice 6: who is right for your job? Why?',
    ops: ['The later I answer, the more clients I lose.', 'The later I answer, the happier my clients are.', 'The faster I answer, the more clients I lose.'] }
];

/* ---------- VI · depois do vídeo ---------- */
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "Time you spend deciding what to do first is time you aren’t spending doing it.", "t": true, "tm": "1:21"},
  {"f": "An inbox that is twice as full is just twice the work.", "t": false, "tm": "1:44", "c": "No. Twice as long, and twice as many passes: four times the work."},
  {"f": "Linux sometimes spent more time ranking tasks than doing them.", "t": true, "tm": "2:08"},
  {"f": "The Linux fix: rank every task in an even longer, more exact list.", "t": false, "tm": "2:15", "c": "No. A limited number of priority buckets. Less precise, but more progress."},
  {"f": "An inbox three times fuller could take six times longer to clear.", "t": false, "tm": "2:32", "c": "No. Nine times longer."},
  {"f": "Getting serious work done means minimizing context switches.", "t": true, "tm": "3:20"}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · Your inbox doubles tomorrow",
  "quem": "Teacher",
  "fala": "Teacher: “Your inbox doubles tomorrow. What is your plan?”",
  "reacoes": [
    [
      "Sort it all",
      "The more I sort, the less I actually finish.",
      "“Careful. The sorting eats the day.”"
    ],
    [
      "Reply in order",
      "The less I plan the order, the more I get done.",
      "“That is the Linux idea. Good.”"
    ],
    [
      "Check less",
      "The less often I check, the fewer interruptions I have.",
      "“Fewer switches, more work.”"
    ]
  ]
};

/* ---------- VIII · o debate ---------- */
var DEBATE = [
  { claim: 'The more you earn, the happier you are.', outro: 'Defend money: more money, fewer problems, more freedom.', ex: 'Up to a point. The more you earn, the more you spend, and after a while the happy part stops.' },
  { claim: 'The more hours you work, the more you get done.', outro: 'Defend long hours: the people who succeed are the ones who stay late.', ex: 'Not necessarily. The longer I work, the worse my work gets. After eight hours I just make mistakes.' },
  { claim: 'The younger you start a language, the better.', outro: 'Defend children: they learn faster and have no accent.', ex: 'That depends. The more you practice, the less your age matters. I started at thirty and I’m here.' },
  { claim: 'The more connected we are, the lonelier we feel.', outro: 'Defend technology: it keeps families together across countries.', ex: 'I’d say yes. The more time I spend on my phone, the less I really talk to people.' },
  { claim: 'The cheaper the product, the worse the quality.', outro: 'Defend cheap: you pay for the brand, not the quality.', ex: 'Not always. Sometimes the more famous the brand, the more you pay for nothing.' },
  { claim: 'Your turn: make a claim with two THEs. Your teacher will answer it.', voce: 1, outro: 'Answer their claim. Push back once, then agree with part of it.', ex: 'The more you travel, the more open-minded you become.' }
];
var EMPURRA = ['Up to a point, …', 'Not necessarily. …', 'That depends on …', 'I’d say the opposite: the more …, the …', 'I see your point, but …'];

/* ---------- IX · os números dele ---------- */
var VEZES_X = [['½', 0.5], ['×2', 2], ['×3', 3], ['×4', 4], ['×9', 9]];
var VEZES = [
  { q: 'Your commute, or your way to class: a bad day versus a good day?', st: ['On a bad day it takes twice as long.', 'It takes … times longer.'], ex: 'On a bad day it takes three times longer: an hour and a half instead of thirty minutes.' },
  { q: 'Messages: how many do you get now, compared with five years ago?', st: ['I get … times as many messages as …', 'about half as many'], ex: 'I get about four times as many messages as five years ago. Most of them are useless.' },
  { q: 'Cooking at home versus ordering food: how much longer, how much cheaper?', st: ['Cooking takes … times longer, but …', 'It’s half as expensive.'], ex: 'Cooking takes four times longer, but it’s half as expensive.' },
  { q: 'A task you hate: how much longer does it take than it should?', st: ['… takes me … times longer than it should.'], ex: 'Taxes take me nine times longer than they should, because I keep avoiding them.' }
];

/* ---------- X · as notas do laboratório ---------- */
var ACHADOS = [
  { errado: 'More you practice, the better you get.', certo: '<ins>The more</ins> you practice, the better you get.', por: 'The first THE.' },
  { errado: 'The more you check, less you finish.', certo: 'The more you check, <ins>the less</ins> you finish.', por: 'The second THE: the one that falls.' },
  { errado: 'It took nine times more long.', certo: 'It took nine times <ins>longer</ins>.', por: 'Short adjective: -er.' },
  { errado: 'The less you sort, the more you finish.', ok: 1, por: 'This one is right: two THEs, one comma.' },
  { errado: 'The more big the team, the slower the decisions.', certo: 'The <ins>bigger</ins> the team, the slower the decisions.', por: 'Big → bigger.' },
  { errado: 'The more people, the less messages I can answer.', certo: 'The more people, the <ins>fewer</ins> messages I can answer.', por: 'You can count messages: fewer.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {},
  ab: { a: '', b: '', dir: '', n: 0 }, nv: { teoria: -1, aberto: 0 }, mt: { a: 0, sa: 1, b: 0, sb: 0 },
  lc: { sel: -1, feitos: {}, erro: -1, ult: -1 }, vz: { n: 0, esc: -1 }, video: { p: 0 }, db: { n: 0 }, vx: { n: 0, x: 0 }, ac: {} };

/* uma engrenagem em SVG */
function roda(cx, cy, r, dentes, classe) {
  var d = '';
  for (var i = 0; i < dentes; i++) d += '<rect x="' + (cx - 7) + '" y="' + (cy - r - 12) + '" width="14" height="16" rx="3" transform="rotate(' + (360 / dentes * i).toFixed(1) + ' ' + cx + ' ' + cy + ')"/>';
  return '<g class="tm-roda ' + (classe || '') + '" style="transform-origin:' + cx + 'px ' + cy + 'px">' + d + '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><circle class="tm-furo" cx="' + cx + '" cy="' + cy + '" r="' + (r * .32).toFixed(0) + '"/></g>';
}
/* duas engrenagens: encaixadas (oposto) ou na correia (mesmo); sobeA = a engrenagem A sobe (true) ou desce */
function engrenagens(dir, gira, rotA, rotB, sobeA) {
  var mesmo = dir === 'mesmo', ax = 120, bx = mesmo ? 400 : 262, y = 120, up = sobeA !== false;
  var corr = mesmo ? '<path class="tm-correia" d="M' + ax + ' ' + (y - 70) + ' L' + bx + ' ' + (y - 70) + ' A70 70 0 0 1 ' + bx + ' ' + (y + 70) + ' L' + ax + ' ' + (y + 70) + ' A70 70 0 0 1 ' + ax + ' ' + (y - 70) + 'Z"/>' : '';
  var cA = gira ? (up ? 'gira' : 'gira-rev') : '', cB = gira ? ((mesmo ? up : !up) ? 'gira' : 'gira-rev') : '';
  var bUp = mesmo ? up : !up;
  return '<div class="tm-eng' + (gira ? ' rodando ' + dir : '') + '"><svg viewBox="0 0 ' + (mesmo ? 520 : 400) + ' 250" aria-hidden="true">' + corr + roda(ax, y, 62, 12, 'a ' + cA) + roda(bx, y, 62, 12, 'b ' + cB)
    + '<text x="' + ax + '" y="236" text-anchor="middle">A ' + (gira ? (up ? '▲ MORE' : '▼ LESS') : '') + '</text><text x="' + bx + '" y="236" text-anchor="middle" class="tb">B ' + (gira ? (bUp ? '▲ MORE' : '▼ LESS') : '?') + '</text></svg>'
    + (rotA ? '<div class="tm-rotulos"><span><b>A</b> ' + rotA + '</span><span><b>B</b> ' + rotB + '</span></div>' : '') + '</div>';
}
/* blocos que multiplicam */
function blocos(x) {
  var meia = x > 0 && x < 1, n = x >= 1 ? x : 0;
  return '<div class="tm-blocos"><div class="tm-linha-b"><small>NORMAL</small><span>' + (meia ? '<i></i><i></i>' : '<i></i>') + '</span></div><div class="tm-linha-b"><small>' + (x ? (meia ? 'HALF AS …' : '×' + x) : 'YOURS · ?') + '</small><span>' + (meia ? '<i class="q"></i>' : n ? new Array(n + 1).join('<i class="q"></i>') : '<i class="vazio"></i>') + '</span></div></div>';
}
function conta(q) { return q.replace('{A}', S.ab.a || 'do it'); }
function marcaProf(acao, dica) {
  return '<div class="tm-marca so-prof"><span>You heard:</span><button type="button" class="btn" data-a="' + acao + '-ok">Both THEs</button><button type="button" class="pilula" data-a="' + acao + '-nao">Missing a THE</button></div>'
    + (dica ? '<p class="recusa">' + dica + '</p>' : '');
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · THE MORE …, THE LESS …</span><h1>Nine Times <b>Longer</b></h1>'
    + '<p class="sub"><b>The more messages you check, the less work you finish.</b> Two amounts, two THEs, one comma, and a spacecraft on Mars that learned it the hard way.</p>'
    + '<div class="chipsx"><span class="pilula">the more …, the less …</span><span class="pilula">the -er …, the -er …</span><span class="pilula">twice as long · nine times longer</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn the gear</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + engrenagens('oposto', 1, 'messages you check', 'work you finish') + '</div></div>';
};

/* I · as engrenagens dele: A = a atividade, B = o que muda, e a direção */
R.abre = function (c) {
  var e = S.ab, pronto = e.a && e.b && e.dir;
  var escolhas = '<div class="tm-escolha"><small>GEAR A · something you do</small><div class="tm-temas">' + COISAS.map(function (t) { return '<button type="button" class="pilula' + (e.a === t ? ' on' : '') + '" data-a="ab-a" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>'
    + (e.a ? '<small>GEAR B · what changes with it</small><div class="tm-temas">' + EFEITOS.map(function (t) { return '<button type="button" class="pilula' + (e.b === t ? ' on b' : '') + '" data-a="ab-b" data-v="' + t + '">your ' + t + '</button>'; }).join('') + '</div>' : '')
    + (e.a && e.b ? '<small>When A goes up, B goes …</small><div class="tm-temas"><button type="button" class="pilula' + (e.dir === 'mesmo' ? ' on' : '') + '" data-a="ab-d" data-v="mesmo">up too · together</button><button type="button" class="pilula' + (e.dir === 'oposto' ? ' on' : '') + '" data-a="ab-d" data-v="oposto">down · against</button></div>' : '') + '</div>';
  var eng = engrenagens(e.dir || 'oposto', pronto ? 1 : 0, e.a ? 'you ' + e.a : 'something you do', e.b ? 'your ' + e.b : 'what changes');
  if (!pronto) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + eng + '</div><div class="lado-l">' + escolhas + '<p class="dica-aluno">Choose together, out loud. There is no wrong answer.</p></div></div>';
  var n = Math.min(e.n, ABRE.length - 1), x = ABRE[n], fim = e.n >= ABRE.length;
  var conversa = fim ? '<div class="pergunta vd"><small>KEEP YOUR ANSWER</small><h2>English has one shape for what you just said. It’s two scenes away.</h2></div>'
    : '<div class="pergunta vd"><small>QUESTION ' + (n + 1) + ' OF ' + ABRE.length + '</small><h2>' + conta(x.q) + '</h2></div>' + fala('ab' + n, x.st, []) + mostra('ab' + n, x.ex, 1)
      + '<div class="tm-linha-ok"><span></span><button type="button" class="btn" data-a="ab-prox">' + (n === ABRE.length - 1 ? 'Finish' : 'Next question') + '</button></div>';
  return cab(c) + trilha(ABRE, e.n) + '<div class="mesa-c"><div class="lado-l">' + eng + '<p class="tm-mini-frase">When you ' + e.a + ' more, your ' + e.b + ' goes ' + (e.dir === 'mesmo' ? 'up' : 'down') + '.</p>'
    + '<p class="so-prof tm-nota-prof">Write down their first sentence exactly (“When I sleep more, I …” or “More I sleep, more I …”). Don’t correct yet: it comes back in III.</p></div>'
    + '<div class="lado-l">' + conversa + '</div></div>';
};

/* II · Marte: defender uma teoria, abrir o arquivo, falar da vida */
R.nave = function (c) {
  var e = S.nv;
  var teorias = '<div class="tm-teorias">' + TEORIAS.map(function (x, i) {
    var cls = e.teoria === i ? ' on' : '';
    if (e.aberto) cls += x.k === 'certa' ? ' certa' : ' fora';
    return '<button type="button" class="tm-teoria' + cls + '" data-a="nv-t" data-n="' + i + '"' + (e.aberto ? ' disabled' : '') + '><small>THEORY ' + (i + 1) + '</small><span>' + x.t + '</span></button>';
  }).join('') + '</div>';
  var antes = '<div class="pergunta vd ja"><small>PICK ONE AND DEFEND IT</small><h2>What was it doing? Why do you think so?</h2></div>'
    + fala('nv', ['I’d go with theory …, because …', 'It can’t be …, because …', 'It makes sense that …'], []) + teorias
    + (e.teoria >= 0 ? '<div><button type="button" class="btn cheio" data-a="nv-abre">Open the file</button></div>' : '<p class="dica-aluno">Tap the theory you will defend.</p>');
  var depois = teorias + '<div class="balao vd ok-b"><small>THE FILE · SAY IT</small><p>The more small tasks it did, the less important work it finished.</p></div>'
    + MARTE_Q.map(function (x, i) { return '<div class="pergunta vd ja"><small>YOU</small><h2>' + x.q + '</h2></div>' + fala('mq' + i, x.st, []) + mostra('mq' + i, x.ex, 1); }).join('');
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="tm-sonda vd"><small>MARS · JULY 1997 · DAY 10</small><b>SIGNAL LOST</b><span>Power: OK · Battery: OK · Busy: 100%</span></div>'
    + (e.aberto ? engrenagens('oposto', 1, 'small tasks it did', 'important work it finished').replace('tm-eng', 'tm-eng mini')
      : '<div class="selo-v vd"><b>FILE · DAY 10</b><small>NASA found the answer. It opens after you defend your theory.</small></div>') + '</div>'
    + '<div class="lado-l">' + (e.aberto ? depois : antes) + '</div></div>';
};

/* III · a regra sempre na tela + ligar as colunas (22/10) */
R.dois = function (c) {
  var e = S.lc, feitas = Object.keys(e.feitos).length, u = e.ult >= 0 ? LIGA[e.ult] : null;
  var colA = LIGA.map(function (x, i) {
    var cls = e.feitos[i] ? ' feita' : e.sel === i ? ' on' : '';
    return '<button type="button" class="tm-lc-item a' + cls + '" data-a="lc-a" data-n="' + i + '" data-lc="a' + i + '"' + (e.feitos[i] ? ' disabled' : '') + '>' + x.a + '</button>';
  }).join('');
  var colB = LIGA_B.map(function (i) {
    var cls = e.feitos[i] ? ' feita' : e.erro === i ? ' errada' : '';
    return '<button type="button" class="tm-lc-item b' + cls + '" data-a="lc-b" data-n="' + i + '" data-lc="b' + i + '"' + (e.feitos[i] ? ' disabled' : '') + '>' + LIGA[i].b + '</button>';
  }).join('');
  var topo = u ? '<div class="tm-montada vd"><small>' + (feitas === LIGA.length ? 'FIVE LINKS · NOW ONE ABOUT YOU' : 'LINKED · SAY IT WITH A PAUSE AT THE COMMA') + '</small><p>'
      + doisThe(u.a + ' ' + u.b) + '</p></div>'
      + engrenagens(u.d, 1, '', '', true).replace('tm-eng', 'tm-eng mini')
    : '<div class="tm-montada vd"><small>LINK THE COLUMNS</small><p class="tm-lc-dica">Tap a first half. Then tap the half that finishes it.</p></div>';
  return cab(c) + '<div class="tm-regra"><div class="lado-l">' + topo
    + '<div class="tm-lc" data-lc-caixa><svg class="tm-lc-fios" aria-hidden="true"></svg><div class="tm-lc-col">' + colA + '</div><div class="tm-lc-col">' + colB + '</div></div>'
    + (e.erro >= 0 ? '<p class="recusa">That half doesn’t finish it. Read the first half again: does the second amount go up or down?</p>' : '')
    + '<p class="so-prof tm-nota-prof">After each link, ask: “Is it true for you? When is it NOT true?” Then go back to their sentence from scene I and fix it together.</p></div>'
    + doisRegra() + '</div>';
};
/* o painel da regra (o mesmo de antes) */
function doisRegra() {
  return '<div class="lado-l"><div class="tm-gram vd"><small>THE GRAMMAR</small><p class="tm-forma"><b class="tm-the">The</b> + comparative …<b class="tm-virg">,</b> <b class="tm-the">the</b> + comparative …</p>'
    + REGRA.map(function (r) { return '<div class="tm-gl"><b>' + r.w + '</b><span>' + r.ex + '</span></div>'; }).join('')
    + '<p class="tm-gl-nota">Neither THE is an article here: together they tie the two amounts.</p></div>'
    + '<div class="tm-nao vd"><small>NOT THIS</small>' + NAO.map(function (x) { return '<p><s>' + x[0] + '</s><span>' + x[1] + '</span></p>'; }).join('') + '</div></div>';
};
/* as linhas entre as metades ligadas: desenhadas depois de pintar, pela posição real dos botões */
(function () {
  var antes = window.depoisDePintar;
  window.depoisDePintar = function (palco) {
    if (antes) try { antes(palco); } catch (e) { /* segue */ }
    var cx = palco.querySelector('[data-lc-caixa]'); if (!cx) return;
    var svg = cx.querySelector('.tm-lc-fios'), r0 = cx.getBoundingClientRect(), d = '';
    Object.keys(S.lc.feitos).forEach(function (i) {
      var a = cx.querySelector('[data-lc="a' + i + '"]'), b = cx.querySelector('[data-lc="b' + i + '"]'); if (!a || !b) return;
      var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
      var x1 = ra.right - r0.left, y1 = ra.top + ra.height / 2 - r0.top, x2 = rb.left - r0.left, y2 = rb.top + rb.height / 2 - r0.top, m = (x1 + x2) / 2;
      d += '<path d="M' + x1 + ' ' + y1 + ' C' + m + ' ' + y1 + ' ' + m + ' ' + y2 + ' ' + x2 + ' ' + y2 + '"/><circle cx="' + x1 + '" cy="' + y1 + '" r="4"/><circle cx="' + x2 + '" cy="' + y2 + '" r="4"/>';
    });
    svg.setAttribute('viewBox', '0 0 ' + r0.width + ' ' + r0.height); svg.innerHTML = d;
  };
  addEventListener('resize', function () { var p = document.getElementById('palco'); if (p && window.depoisDePintar) window.depoisDePintar(p); });
})();

/* o montador antigo (desligado em 22/10; o Carlos pediu ligar as colunas) */
R.montador = function (c) {
  var m = S.mt, mesmo = !!m.sa === !!m.sb;
  var lado = function (lista, sel, sobe, acao) {
    return '<div class="tm-lado-m"><div class="tm-dir"><button type="button" class="pilula' + (sobe ? ' on' : '') + '" data-a="' + acao + '-s" data-n="1">▲ more</button><button type="button" class="pilula' + (!sobe ? ' on' : '') + '" data-a="' + acao + '-s" data-n="0">▼ less</button></div>'
      + '<div class="tm-pecas">' + lista.map(function (x, i) { return '<button type="button" class="tm-peca' + (sel === i ? ' on' : '') + '" data-a="' + acao + '" data-n="' + i + '">' + (x.k === 'a' ? (sobe ? x.up : x.down) + ' ' + x.t : x.k === 'n' ? x.nome + ' ' + x.t : x.t) + '</button>'; }).join('') + '</div></div>';
  };
  return cab(c) + '<div class="tm-regra">'
    + '<div class="lado-l"><div class="tm-montada vd"><small>YOUR SENTENCE · SAY IT WITH A PAUSE AT THE COMMA</small><p>' + montada(m.a, m.sa, m.b, m.sb) + '</p></div>'
    + engrenagens(mesmo ? 'mesmo' : 'oposto', 1, '', '', !!m.sa).replace('tm-eng', 'tm-eng mini')
    + '<div class="tm-montador"><div><small class="tm-rot">HALF A</small>' + lado(METADE_A, m.a, m.sa, 'mt-a') + '</div><div><small class="tm-rot">HALF B</small>' + lado(METADE_B, m.b, m.sb, 'mt-b') + '</div></div>'
    + '<p class="so-prof tm-nota-prof">Ask: “Is it true? When is it NOT true?” Every sentence they build is a mini-debate.</p></div>'
    + '<div class="lado-l"><div class="tm-gram vd"><small>THE GRAMMAR</small><p class="tm-forma"><b class="tm-the">The</b> + comparative …<b class="tm-virg">,</b> <b class="tm-the">the</b> + comparative …</p>'
    + REGRA.map(function (r) { return '<div class="tm-gl"><b>' + r.w + '</b><span>' + r.ex + '</span></div>'; }).join('')
    + '<p class="tm-gl-nota">Neither THE is an article here: together they tie the two amounts.</p></div>'
    + '<div class="tm-nao vd"><small>NOT THIS</small>' + NAO.map(function (x) { return '<p><s>' + x[0] + '</s><span>' + x[1] + '</span></p>'; }).join('') + '</div></div></div>';
};

/* IV · as vozes: ouvir, recontar com dois THE, falar da vida */
R.vozes = function (c) {
  var e = S.vz, n = Math.min(e.n, VOZES.length - 1), fim = e.n >= VOZES.length, x = VOZES[n], ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + trilha(VOZES, e.n) + '<div class="foco"><div class="pergunta vd"><small>SIX VOICES</small><h2>None of them used the structure. You did, six times. Which voice sounds most like your life?</h2></div></div>';
  /* 22/10 · o aluno escolhe a frase que diz o que a voz quis dizer; certo abre o "And you?" */
  var ok = e.esc === 0;
  var opcoes = '<div class="tm-ops">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) {
    return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="vz" data-n="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + doisThe(o[0]) + '</button>';
  }).join('') + '</div>';
  var recontar = !ouviu ? '<p class="dica-aluno">Play the voice first.</p>'
    : '<div class="pergunta vd ja"><small>WHICH SENTENCE SAYS WHAT THEY MEAN?</small><h2>Choose, then read it out loud with a pause at the comma.</h2></div>' + opcoes
      + (ok ? '<div class="pergunta vd ja"><small>AND YOU?</small><h2>' + x.q + '</h2></div>' + fala('vzq' + n, ['In my case, …', 'Honestly, …', 'It depends on …'], [])
          + '<div class="tm-linha-ok"><span></span><button type="button" class="btn" data-a="vz-prox">Next voice</button></div>'
        : e.esc > 0 ? '<p class="recusa">Listen again. Does the second amount go up or down for them?</p>' : '');
  return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="tm-ouve vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="lado-l">' + recontar + '</div></div>';
};

/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): vídeo na tela + True or Lie com ▶ + as engrenagens da aula (giram a partir do 1º acerto) e seis blocos que enchem a cada acerto + uma pergunta final de um toque */
function depVideo() { return iframe(YT, 'Time and machines', '&start=81&end=217'); }
var debAcesa = {};
function debEstado() {
  var e = (S.fq && S.fq.deb_vm && S.fq.deb_vm.r) || {}, ok = 0, feitas = 0, st = [];
  DEB_VM.itens.forEach(function (x, i) {
    var r = e[i]; if (r == null) { st.push(0); return; }
    feitas++; if ((r === 't') === !!x.t) { ok++; st.push(1); } else st.push(-1);
  });
  return { ok: ok, feitas: feitas, st: st };
}
function debTopo(d, rot, titulo) {
  var n = DEB_VM.itens.length;
  return '<div class="deb-topo"><div><small>' + rot + ' · ' + d.feitas + ' OF ' + n + ' ANSWERED</small><h3>' + titulo + ' <b>' + d.ok + '</b> / ' + n + '</h3></div></div>';
}
function debNave() {
  var d = debEstado(), n = DEB_VM.itens.length;
  var bl = '';
  for (var k = 0; k < n; k++) { var s = d.st[k], nova = s === 1 && !debAcesa[k]; if (s === 1) debAcesa[k] = 1; bl += '<i class="' + (s === 1 ? 'q' + (nova ? ' nova' : '') : s === -1 ? 'perdida' : 'vazio') + '"></i>'; }
  return debTopo(d, 'THE GEARS', 'Gears turning') + engrenagens('oposto', d.ok > 0 ? 1 : 0, 'lines you found', 'work you finish').replace('tm-eng', 'tm-eng mini') + '<div class="tm-blocos deb-blocos"><div class="tm-linha-b"><small>FOUND</small><span>' + bl + '</span></div></div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}
R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>BEFORE YOU WATCH</small><h2>If your inbox doubles in size, how much longer does it take to sort? Guess, and say why.</h2></div>' + fala('vda', ['Twice as long, I think, because …', 'Maybe … times longer.'], []) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>About two minutes. It opens after your guess.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'Time and machines', '&start=81&end=217') + '<small class="cred">1:21 to 3:37 · it stops by itself</small></div><div class="lado-video"><div class="pergunta vd ja"><small>WHILE YOU WATCH</small><h2>Listen for the inbox that doubles, and the fix that worked by caring less.</h2></div><div><button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button></div></div></div>';
  else corpo = '<div class="deb"><div class="deb-esq">' + depVideo() + '<small class="deb-cred">Tap a time to hear that moment again (1:21 to 3:37).</small><div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* VIII · o debate: sem opções, o professor pega o outro lado */
R.debate = function (c) {
  var e = S.db, n = e.n, fim = n >= DEBATE.length;
  if (fim) return cab(c) + trilha(DEBATE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX IDEAS</small><h2>You agreed, you pushed back, and you made your own. Which idea changed your mind, even a little?</h2></div></div>';
  var x = DEBATE[n];
  return cab(c) + trilha(DEBATE, n) + '<div class="mesa-c"><div class="lado-l"><div class="tm-claim vd' + (x.voce ? ' voce' : '') + '"><small>' + (x.voce ? 'YOUR CLAIM' : 'THE IDEA · ' + (n + 1) + ' OF 5') + '</small><p>' + (x.voce ? x.claim : '“' + x.claim + '”') + '</p></div>'
    + '<div class="tm-carta so-prof"><small>TEACHER · TAKE THE OTHER SIDE</small><p>' + x.outro + '</p><p>Push once, then ask: “Has it ever been true for you?”</p></div></div>'
    + '<div class="lado-l">' + fala('db' + n, EMPURRA, ['the more', 'the less', 'the fewer', 'the -er']) + mostra('db' + n, x.ex, 1)
    + '<div class="tm-linha-ok"><span></span><button type="button" class="btn" data-a="db-prox">' + (n === DEBATE.length - 1 ? 'End the debate' : 'Next idea') + '</button></div></div></div>';
};

/* IX · os números dele, com os blocos */
R.vezes = function (c) {
  var e = S.vx, n = e.n, fim = n >= VEZES.length;
  if (fim) return cab(c) + trilha(VEZES, n) + '<div class="foco"><div class="pergunta vd"><small>YOUR NUMBERS</small><h2>Longer, faster, never “more long”. Twice as long AS, three times longer THAN.</h2></div></div>';
  var x = VEZES[n];
  return cab(c) + trilha(VEZES, n) + '<div class="mesa-c"><div class="lado-l">' + blocos(e.x)
    + '<div class="tm-vx so-prof"><span>Their number:</span>' + VEZES_X.map(function (v) { return '<button type="button" class="pilula' + (e.x === v[1] ? ' on' : '') + '" data-a="vx-x" data-v="' + v[1] + '">' + v[0] + '</button>'; }).join('') + '</div>'
    + '<div class="tm-mult vd"><p><b>twice as</b> long <b>as</b> · <b>three times</b> long<b>er than</b> · <b>half as</b> many <b>as</b></p><p class="nao">not <s>nine times more long</s>, not <s>two times longer as</s></p></div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>QUESTION ' + (n + 1) + ' OF ' + VEZES.length + '</small><h2>' + x.q + '</h2></div>' + fala('vx' + n, x.st, []) + mostra('vx' + n, x.ex, 1)
    + '<div class="tm-linha-ok"><span></span><button type="button" class="btn" data-a="vx-prox">Next</button></div></div></div>';
};

/* X · as notas do laboratório */
R.erros = function (c) {
  var feitas = ACHADOS.filter(function (_, i) { return S.ac[i]; }).length;
  return cab(c) + '<div class="tm-lab vd"><small>LAB NOTES · TIME AND WORK · DRAFT</small>' + ACHADOS.map(function (x, i) {
    var on = S.ac[i];
    return '<button type="button" class="tm-achado' + (on ? (x.ok ? ' ok' : ' fix') : '') + '" data-a="ac" data-n="' + i + '"' + (on ? ' disabled' : '') + '><i>' + (i + 1) + '</i>'
      + (on && !x.ok ? '<span><s>' + x.errado + '</s>' + x.certo + '</span>' : '<span>' + x.errado + '</span>') + (on ? '<small>' + x.por + '</small>' : '') + '</button>';
  }).join('') + '</div>'
    + '<div class="tm-fim-ac">' + (feitas === ACHADOS.length ? '<p class="aprova">Six findings, both THEs, every -er in place.</p>' : '<p class="dica-aluno">' + (ACHADOS.length - feitas) + ' to check. One is already right.</p>' + mostra('ac', 'The more you practice · the less you finish · nine times longer · the bigger the team · the fewer messages. Number 4 is right.')) + '</div>';
};

/* XI · as leis dele */
R.leis = function (c) {
  var a = S.ab.a || 'sleep';
  return cab(c) + '<div class="fim">' + escritaFinal('leis', (S.txt || {}).leis || '', (S.salvo || {}).leis, 'Law 1: The more I ' + a + ', the …\nLaw 2: The less I …, the more …\nLaw 3: The …er …, the …er …', 'Your laws',
    ['The more', 'the less', 'the fewer', 'the better', 'twice as long as'], ['THE LAWS OF YOUR LIFE', 'Three laws, two THEs each. Your teacher will try to break one of them.'])
    + '<div class="lado-fim">' + engrenagens('mesmo', 1, 'you practice', 'you improve')
    + '<div class="grande vd"><span><u>The more / -er X, the more / less / -er Y</u> · two THEs, one comma</span><span><u>the fewer</u> for things you can count</span><span><u>twice as long as</u> · <u>three times longer than</u></span><span>not <s>More you practice, more …</s>, not <s>nine times more long</s></span></div>'
    + mostra('leis', 'Law 1: The more I sleep, the nicer I am.<br>Law 2: The less I check my phone, the more I read.<br>Law 3: The earlier I start, the calmer the day.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-a'] = function (b, n, v) { S.ab.a = v; };
TOQUES['ab-b'] = function (b, n, v) { S.ab.b = v; };
TOQUES['ab-d'] = function (b, n, v) { S.ab.dir = v; };
TOQUES['ab-prox'] = function () { S.ab.n++; };
TOQUES['nv-t'] = function (b, n) { S.nv.teoria = n; };
TOQUES['nv-abre'] = function () { S.nv.aberto = 1; };
TOQUES['mt-a'] = function (b, n) { S.mt.a = n; };
TOQUES['mt-b'] = function (b, n) { S.mt.b = n; };
TOQUES['mt-a-s'] = function (b, n) { S.mt.sa = n; };
TOQUES['mt-b-s'] = function (b, n) { S.mt.sb = n; };
TOQUES.vz = function (b, n) { S.vz.esc = n; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: -1 }; };
TOQUES['lc-a'] = function (b, n) { S.lc.sel = n; S.lc.erro = -1; };
TOQUES['lc-b'] = function (b, n) {
  if (S.lc.sel < 0) return false;
  if (S.lc.sel === n) { S.lc.feitos[n] = 1; S.lc.ult = n; S.lc.erro = -1; } else S.lc.erro = n;
  S.lc.sel = -1;
};
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['db-prox'] = function () { S.db.n++; };
TOQUES['vx-x'] = function (b, n, v) { S.vx.x = +v; };
TOQUES['vx-prox'] = function () { S.vx = { n: S.vx.n + 1, x: 0 }; };
TOQUES.ac = function (b, n) { S.ac[n] = 1; };
