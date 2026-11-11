/* ============================================================
   HALF AS MUCH · THE PHONE WEEK · LIVE CLASS · MAIN B1  22/10/2026
   A irmã B1 da Nine Times Longer (B2), pedido do Carlos em 22/10: "uma
   versão de B1… mudando um pouco o tema, mas indo na mesma ideia".
   Mesma ideia (duas quantidades que puxam uma à outra, as engrenagens),
   tema novo: a Bea, designer, tenta passar UMA SEMANA com metade do
   celular. Gramática B1 (capítulo "Quanto, quão, que tipo"):
     · comparativo: calmer than, more relaxed than;
     · much / a bit / far + comparativo: much better, a bit more bored;
     · (not) as … as: not as exciting as before;
     · twice / half as … as: twice as many, half as much;
     · the more …, the more … como bloco pronto (the less I check it,
       the less I want it), sem a regra inteira (essa é da B2).
   Erros: more better · more calm · as … than · two times more · the double.
   Conversa o tempo todo, nada de múltipla escolha:
     I    Your Gears: o celular dele vira a engrenagem A.
     II   Bea's Week: o diário do dia 1, palpites livres, o dia 7.
     III  Bigger, Better, Half As Much: a regra na tela + o comparador
          (o mesmo fato dito de dois jeitos).
     IV   Five Voices: ouvir, recontar com um comparativo, e você?
     V    Before and After: os números da Bea em barras; o aluno descreve.
     VI   The Debate: seis ideias sobre telas; o professor do outro lado.
     VII  Fix Bea's Notes (extra).
     VIII Your Challenge: a semana desafio dele, com as engrenagens.
   Áudios: edge-tts (Ava US = Bea; William AU, Libby GB, Guy US, Emily IE,
   Neerja IN = as vozes).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'abre', est: 'o', min: 6, img: 'fundo', rot: 'I · Your Gears', t: 'Your phone is gear A. What does it turn?', p: 'Pick what you do on your phone, then what changes with it. Together, or against each other?' },
  { k: 'bea', est: 'l', min: 7, img: 'quarto', rot: 'II · Bea’s Week', t: 'Bea used her phone for six hours a day. This week she’s trying half as much.', p: 'Listen to day one. Make your predictions. Then listen to day seven. Then True or Lie.' },
  { k: 'gx', est: 'f', min: 4, img: 'quarto', rot: 'III · The Ladder', t: 'One change, five steps.', p: 'Read each step out loud, then go one step up. Notice how the change grows. Then climb with your own week.' },
  { k: 'regra', est: 'f', min: 8, img: 'fundo', rot: 'IV · Bigger, Better, Half As Much', t: 'One fact, two ways to say it: calmer than, or not as stressed as.', p: 'Pick a word and how big the change is. Say both sentences out loud.' },
  { k: 'vozes', est: 'l', min: 7, img: 'quarto', rot: 'V · Five Voices', t: 'Five people talk about their phones.', p: 'Listen. Say what they mean with a comparison. Then answer the question about you.' },
  { k: 'numeros', est: 'o', min: 7, img: 'fundo', rot: 'VI · Before and After', t: 'Bea’s numbers, last week and this week.', p: 'Tap a line. Describe the change. Then tell us your number.' },
  { k: 'debate', est: 'o', min: 8, img: 'quarto', rot: 'VII · The Debate', t: 'Six ideas about phones and screens. Agree, or say why not.', p: 'Your teacher reads the idea and takes the other side. Answer in your own words.' },
  { k: 'notas', est: 'f', min: 5, extra: 1, img: 'fundo', rot: 'VIII · Fix Bea’s Notes', t: 'Bea wrote her notes fast. Five lines have a problem.', p: 'Read each line out loud the right way. Then tap it. One line is already right.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'IX · Your Challenge', t: 'Your own week: one thing, half as much.', p: 'Choose your challenge. Write what you think will change. It goes to your My notes.' }
];

var TR = {
  dia1: 'Day one. I checked my phone this morning before I opened my eyes, I think. The app says six hours and forty minutes yesterday. Six hours! That’s <b>longer than</b> my sleep. So this week I’m trying something: <b>half as much</b> phone. Three hours a day, maximum. Let’s see.',
  dia7: 'Day seven. Okay. Three hours and ten minutes yesterday. I’m not perfect. But I slept <b>much better</b> this week, maybe an hour more every night. I read two books, and last week I read nothing. I’m <b>a bit more bored</b> in the evenings, honestly. But I’m <b>calmer</b>. <b>The less</b> I check it, <b>the less</b> I want it. Weird, right?',
  v1: 'I can’t use my phone less. It’s my job. The app sends me orders all day. On a busy Friday I get <b>twice as many</b> orders <b>as</b> on a Monday.',
  v2: 'My kids are on their tablets <b>much more than</b> I was at their age. I played outside. They play inside, with a screen. Maybe I’m old, but I think outside was <b>better</b>.',
  v3: 'I study with my phone on the desk. When it’s in another room, I finish my homework in <b>half the time</b>. Really. Half.',
  v4: 'People say phones make us lonely. Not me. I talk to my grandson in Canada every day. Without the phone, I’d see him twice a year.',
  v5: 'I switched my phone to black and white. It’s <b>not as exciting as</b> before, so I use it <b>less</b>. About forty minutes less a day.'
};

/* ---------- I · as engrenagens dele ---------- */
var COISAS = ['social media', 'videos', 'games', 'the news', 'messages', 'work emails'];
var EFEITOS = ['sleep', 'mood', 'free time', 'focus', 'patience', 'money'];
var ABRE = [
  { q: 'How many hours a day do you think you spend on {A}?', st: ['I think about … hours.', 'Maybe more than …'], ex: 'I think about two hours. Maybe more on Sundays.' },
  { q: 'What happens to your {B} on a day with a lot of {A}?', st: ['My … is worse / better.', 'I feel …'], ex: 'My sleep is worse. I go to bed later and I wake up tired.' },
  { q: 'Is your phone a friend or a problem? Why?', st: ['It’s a friend, because …', 'It’s a bit of a problem, because …'], ex: 'Both. It helps me at work, but I check it too much at night.' }
];

/* ---------- II · a semana da Bea ---------- */
var PALPITES = [
  { t: 'She sleeps better.', certo: 1 },
  { t: 'She reads more.', certo: 1 },
  { t: 'She feels calmer.', certo: 1 },
  { t: 'She gives up on day three.' },
  { t: 'She’s more bored.', certo: 1 },
  { t: 'She works more.' }
];
/* 23/10/2026 · AFTER numa tela só (pedido do dono: o Show answer cansa; ele quer uma tela dinâmica): o áudio do dia 7 fica na tela + True or Lie + seis cartões que acendem + uma pergunta final de um toque */
var DEB_VM = { formato: "verdadeOuMentira", titulo: "True or Lie? If it’s a lie, say the true line.", itens: [
  {"f": "Bea slept much better this week, about an hour more every night.", "t": true},
  {"f": "This week she read nothing.", "t": false, "c": "No. She read two books. Last week she read nothing."},
  {"f": "In the evenings, she is a bit more bored.", "t": true},
  {"f": "She says she feels more stressed than before.", "t": false, "c": "No. She says she is calmer."},
  {"f": "Yesterday she used her phone for three hours and ten minutes: about half as much.", "t": true},
  {"f": "The more she checks it, the less she wants it.", "t": false, "c": "No. The LESS she checks it, the less she wants it."}
] };
var DEB_GO = {
  "formato": "reacao",
  "titulo": "Last call · What should Bea use less?",
  "quem": "Bea",
  "fala": "Bea: “Day eight! I want to keep going. What should I use less?”",
  "reacoes": [
    [
      "Social media",
      "Use social media half as much. You’ll feel much calmer.",
      "“Half as much. OK, deal.”"
    ],
    [
      "Phone in bed",
      "Keep your phone out of the bedroom. You’ll sleep even better.",
      "“Even better? Now I want that.”"
    ],
    [
      "Notifications",
      "Turn off the notifications. The less you see it, the less you check it.",
      "“That’s my rule now.”"
    ]
  ]
};
var DEB_CHIPS = ["SLEEP", "BOOKS", "EVENINGS", "CALM", "THE PHONE", "THE RULE"];   /* seis cartões, no estilo do quadro de palpites: cada linha certa confirma um */
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
  var chips = DEB_CHIPS.map(function (x, i) {
    var s = d.st[i], nova = s === 1 && !debAcesa[i]; if (s === 1) debAcesa[i] = 1;
    return '<span class="hm-palpite deb-chip' + (s === 1 ? ' veio' : s === -1 ? ' nao' : '') + (nova ? ' nova' : '') + '">' + x + '<small>' + (s === 1 ? 'CONFIRMED' : s === -1 ? 'MISSED' : 'WAITING') + '</small></span>';
  }).join('');
  return debTopo(d, 'BEA’S WEEK', 'Confirmed') + '<div class="hm-palpites deb-chips" aria-hidden="true">' + chips + '</div>';
}
function debDir() {
  var d = debEstado();
  return FM.ex('deb_vm', DEB_VM) + (d.feitas === DEB_VM.itens.length ? FM.ex('deb_go', DEB_GO) : '<p class="fm-nota deb-dica">Answer all six lines. Then ' + DEB_GO.quem.replace(/^The /, 'the ') + ' has one last question.</p>');
}
function debPinta() {
  var a = document.getElementById('deb-nave'), b = document.getElementById('deb-dir');
  if (a) a.innerHTML = debNave(); if (b) b.innerHTML = debDir();
}

/* ---------- III · o comparador ---------- */
var ADJ = [
  { a: 'calm', c: 'calmer' }, { a: 'tired', c: 'more tired' }, { a: 'bored', c: 'more bored' },
  { a: 'happy', c: 'happier' }, { a: 'busy', c: 'busier' }, { a: 'relaxed', c: 'more relaxed' }
];
var MOD = [['', 'no word'],['a bit', 'a bit'], ['much', 'much'], ['far', 'far']];
var REGRA = [
  { w: '-er than · more … than', ex: 'calmer than · busier than · more relaxed than', d: 'Short words take -er. Long words take more.' },
  { w: 'a bit / much / far + -er', ex: 'a bit more bored · much better · far happier', d: 'How big is the change?' },
  { w: '(not) as … as', ex: 'It’s not as exciting as before.', d: 'The same fact, from the other side.' },
  { w: 'twice / half as … as', ex: 'twice as many orders as · half as much phone', d: 'many = you can count it · much = you can’t' },
  { w: 'the more …, the more …', ex: 'The less I check it, the less I want it.', d: 'Two amounts that pull each other.' }
];
var NAO = [['more better', 'better'], ['more calm', 'calmer'], ['not as good than', 'not as good as'], ['two times more books', 'twice as many books'], ['the double', 'twice as much']];

/* ---------- IV · as vozes ---------- */
var VOZES = [
  { au: 'v1', quem: 'A DELIVERY DRIVER', diz: 'On Fridays he gets twice as many orders as on Mondays.', q: 'Do you use your phone for work? Is it more or less than your free time?' },
  { au: 'v2', quem: 'A MOTHER OF TWO', diz: 'Her kids use screens much more than she did.', q: 'When you were a child, did you play more inside or outside?' },
  { au: 'v3', quem: 'A STUDENT', diz: 'Without the phone on his desk, he’s twice as fast.', q: 'Where is your phone when you study English?' },
  { au: 'v4', quem: 'A RETIRED TEACHER', diz: 'For her, the phone makes life less lonely, not more.', q: 'Who do you talk to most on your phone?' },
  { au: 'v5', quem: 'A PROGRAMMER', diz: 'In black and white, her phone is not as exciting as before.', q: 'Would you try black and white for a week? Why or why not?' }
];

/* ---------- V · os números da Bea ---------- */
var NUMEROS = [
  { k: 'Phone', antes: 6.7, depois: 3.2, max: 8, un: 'hours a day', diz: 'She uses her phone about half as much as last week.', q: 'And you? How many hours yesterday? Check your phone!' },
  { k: 'Sleep', antes: 6, depois: 7, max: 8, un: 'hours a night', diz: 'She sleeps an hour more. She sleeps much better.', q: 'How many hours do you sleep? Is it enough?' },
  { k: 'Books', antes: 0, depois: 2, max: 3, un: 'books a week', diz: 'Last week she read nothing. This week, two books.', q: 'When did you last read a book? On paper or on a screen?' },
  { k: 'Steps', antes: 4, depois: 8, max: 10, un: 'thousand steps', diz: 'She walks twice as much as last week.', q: 'Do you walk more or less than five years ago?' },
  { k: 'Coffee', antes: 3, depois: 3, max: 4, un: 'cups a day', diz: 'She drinks as much coffee as last week. No change!', q: 'Coffee or tea? How many cups?' }
];

/* ---------- VI · o debate ---------- */
var DEBATE = [
  { claim: 'Children shouldn’t have a phone before they’re 14.', outro: 'Defend early phones: kids need to call their parents and learn technology.', ex: 'I agree, more or less. Kids are much happier outside than on a screen.' },
  { claim: 'Life was better before smartphones.', outro: 'Defend smartphones: maps, banks, family far away, all in your pocket.', ex: 'Not really. Life is much easier now, but maybe it’s not as calm as before.' },
  { claim: 'Reading on paper is better than reading on a screen.', outro: 'Defend screens: cheaper, lighter, a thousand books in one place.', ex: 'For me, paper is much better. On a screen I get tired faster.' },
  { claim: 'Social media makes people less happy.', outro: 'Defend social media: friends, jobs, ideas, fun.', ex: 'It depends. The more I compare my life, the less happy I am.' },
  { claim: 'A phone-free day every week is a good idea.', outro: 'Defend the phone: work, emergencies, the family group.', ex: 'Maybe, but Sunday without WhatsApp? My mother would call the police!' },
  { claim: 'Your turn: say an idea about phones or screens. Your teacher will answer it.', voce: 1, outro: 'Answer their idea. Disagree once, then agree with part of it.', ex: 'Video calls are better than phone calls.' }
];
var FRASES = ['I agree, because …', 'I don’t agree. I think …', 'It depends on …', 'Maybe, but …', 'For me, … is much … than …'];

/* ---------- VII · as notas da Bea ---------- */
var NOTAS = [
  { errado: 'I sleep more better now.', certo: 'I sleep <ins>much better</ins> now.', por: 'Better is already a comparative: no more.' },
  { errado: 'My phone is not as interesting than before.', certo: 'My phone is not as interesting <ins>as</ins> before.', por: 'as … as, never as … than.' },
  { errado: 'I read two times more books.', certo: 'I read <ins>twice as many</ins> books.', por: 'twice as many + things you can count.' },
  { errado: 'The less I check it, the less I want it.', ok: 1, por: 'This one is right.' },
  { errado: 'I’m a bit more calm in the evenings.', certo: 'I’m a bit <ins>calmer</ins> in the evenings.', por: 'Short word: calm → calmer.' },
  { errado: 'Last week I used it the double.', certo: 'Last week I used it <ins>twice as much</ins>.', por: 'Not “the double”: twice as much.' }
];

/* ---------- VIII · o desafio dele ---------- */
var DESAFIOS = ['my phone', 'social media', 'coffee', 'sugar', 'TV series', 'work emails at night'];

var S = { i: 0, faixa: 1, fala: {}, resp: {},
  ab: { a: '', b: '', dir: '', n: 0 }, be: { palpites: {}, dia7: 0 }, cp: { adj: 0, mod: 2 },
  vz: { n: 0, ok: 0, nao: 0 }, nu: { n: -1 }, db: { n: 0 }, nt: {}, dz: '' };

/* uma engrenagem em SVG (a mesma da Nine Times Longer) */
function roda(cx, cy, r, dentes, classe) {
  var d = '';
  for (var i = 0; i < dentes; i++) d += '<rect x="' + (cx - 7) + '" y="' + (cy - r - 12) + '" width="14" height="16" rx="3" transform="rotate(' + (360 / dentes * i).toFixed(1) + ' ' + cx + ' ' + cy + ')"/>';
  return '<g class="hm-roda ' + (classe || '') + '" style="transform-origin:' + cx + 'px ' + cy + 'px">' + d + '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><circle class="hm-furo" cx="' + cx + '" cy="' + cy + '" r="' + (r * .32).toFixed(0) + '"/></g>';
}
function engrenagens(dir, gira, rotA, rotB) {
  var mesmo = dir === 'mesmo', ax = 120, bx = mesmo ? 400 : 262, y = 120;
  var corr = mesmo ? '<path class="hm-correia" d="M' + ax + ' ' + (y - 70) + ' L' + bx + ' ' + (y - 70) + ' A70 70 0 0 1 ' + bx + ' ' + (y + 70) + ' L' + ax + ' ' + (y + 70) + ' A70 70 0 0 1 ' + ax + ' ' + (y - 70) + 'Z"/>' : '';
  var cA = gira ? 'gira' : '', cB = gira ? (mesmo ? 'gira' : 'gira-rev') : '';
  return '<div class="hm-eng"><svg viewBox="0 0 ' + (mesmo ? 520 : 400) + ' 250" aria-hidden="true">' + corr + roda(ax, y, 62, 12, 'a ' + cA) + roda(bx, y, 62, 12, 'b ' + cB)
    + '<text x="' + ax + '" y="236" text-anchor="middle">A ' + (gira ? '▲ MORE' : '') + '</text><text x="' + bx + '" y="236" text-anchor="middle" class="tb">B ' + (gira ? (mesmo ? '▲ MORE' : '▼ LESS') : '?') + '</text></svg>'
    + (rotA ? '<div class="hm-rotulos"><span><b>A</b> ' + rotA + '</span><span><b>B</b> ' + rotB + '</span></div>' : '') + '</div>';
}
function conta(q) { return q.replace('{A}', S.ab.a || 'your phone').replace('{B}', S.ab.b || 'mood'); }
function ouve(a, rot) { return '<div class="hm-ouve vd"><div class="hm-toca">' + tocar(a) + '<b>' + rot + '</b></div>' + transcricao(a, TR[a]) + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · CALMER THAN · NOT AS … AS · HALF AS MUCH</span><h1>Half as <b>Much</b></h1>'
    + '<p class="sub">Six hours a day on her phone. Longer than her sleep. This week, Bea tries <b>half as much</b>. Is she happier, calmer, or just a bit more bored?</p>'
    + '<div class="chipsx"><span class="pilula">much better</span><span class="pilula">not as … as</span><span class="pilula">twice as many</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the week</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r hm-foto"><img src="' + img('capa') + '" alt="A phone face down on a bedside table at night, a book next to it"><figcaption>' + tocar('dia1') + '<span>Bea, day one.</span></figcaption></figure></div>';
};

/* I · as engrenagens dele */
R.abre = function (c) {
  var e = S.ab, pronto = e.a && e.b && e.dir;
  var escolhas = '<div class="hm-escolha"><small>GEAR A · on my phone I …</small><div class="hm-temas">' + COISAS.map(function (t) { return '<button type="button" class="pilula' + (e.a === t ? ' on' : '') + '" data-a="ab-a" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>'
    + (e.a ? '<small>GEAR B · what changes with it</small><div class="hm-temas">' + EFEITOS.map(function (t) { return '<button type="button" class="pilula' + (e.b === t ? ' on b' : '') + '" data-a="ab-b" data-v="' + h(t) + '">my ' + t + '</button>'; }).join('') + '</div>' : '')
    + (e.a && e.b ? '<small>More ' + e.a + ', and my ' + e.b + ' goes …</small><div class="hm-temas"><button type="button" class="pilula' + (e.dir === 'mesmo' ? ' on' : '') + '" data-a="ab-d" data-v="mesmo">up</button><button type="button" class="pilula' + (e.dir === 'oposto' ? ' on' : '') + '" data-a="ab-d" data-v="oposto">down</button></div>' : '') + '</div>';
  var eng = engrenagens(e.dir || 'oposto', pronto ? 1 : 0, e.a || 'something on your phone', e.b ? 'your ' + e.b : 'what changes');
  if (!pronto) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + eng + '</div><div class="lado-l">' + escolhas + '<p class="dica-aluno">Choose out loud. There is no wrong answer.</p></div></div>';
  var n = Math.min(e.n, ABRE.length - 1), x = ABRE[n], fim = e.n >= ABRE.length;
  var conversa = fim ? '<div class="pergunta vd"><small>NOW MEET BEA</small><h2>Bea’s gears turned the wrong way. This week she’s trying to change them.</h2></div>'
    : '<div class="pergunta vd"><small>QUESTION ' + (n + 1) + ' OF ' + ABRE.length + '</small><h2>' + conta(x.q) + '</h2></div>' + fala('ab' + n, x.st, []) + mostra('ab' + n, x.ex, 1)
      + '<div class="hm-linha-ok"><span></span><button type="button" class="btn" data-a="ab-prox">' + (n === ABRE.length - 1 ? 'Finish' : 'Next question') + '</button></div>';
  return cab(c) + trilha(ABRE, e.n) + '<div class="mesa-c"><div class="lado-l">' + eng + '<p class="hm-mini">More ' + e.a + ', ' + (e.dir === 'mesmo' ? 'more' : 'less') + ' ' + e.b + '.</p></div><div class="lado-l">' + conversa + '</div></div>';
};

/* II · a semana da Bea: dia 1, palpites livres, dia 7 */
R.bea = function (c) {
  var e = S.be, n = Object.keys(e.palpites).filter(function (k) { return e.palpites[k]; }).length;
  var palpites = '<div class="hm-palpites">' + PALPITES.map(function (x, i) {
    var on = e.palpites[i], cls = on ? ' on' : '';
    if (e.dia7) cls += x.certo ? ' veio' : ' nao';
    return '<button type="button" class="hm-palpite' + cls + '" data-a="be-p" data-n="' + i + '"' + (e.dia7 ? ' disabled' : '') + '>' + x.t + (e.dia7 ? '<small>' + (x.certo ? 'Yes!' : 'No') + '</small>' : '') + '</button>';
  }).join('') + '</div>';
  var antes = ouve('dia1', 'BEA · DAY 1') + '<div class="pergunta vd ja"><small>YOUR PREDICTIONS · DAY 7</small><h2>Tap everything you think will happen. Say why.</h2></div>' + palpites
    + fala('be', ['I think she’ll …, because …', 'I don’t think she’ll …'], [])
    + (n ? '<div><button type="button" class="btn cheio" data-a="be-7">Listen to day seven</button></div>' : '');
  /* 23/10/2026 · AFTER = o dia 7 numa tela só: o áudio e a transcrição ficam à esquerda; True or Lie, o contador e a pergunta final à direita */
  if (e.dia7) return cab(c) + '<div class="deb"><div class="deb-esq"><div class="hm-app vd"><small>SCREEN TIME · YESTERDAY</small><b>3 h 10 min</b><span>Day 7 · about half as much</span></div>' + ouve('dia7', 'BEA · DAY 7') + '<div id="deb-nave">' + debNave() + '</div></div><div class="deb-dir" id="deb-dir">' + debDir() + '</div></div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="hm-app vd"><small>SCREEN TIME · YESTERDAY</small><b>' + (e.dia7 ? '3 h 10 min' : '6 h 40 min') + '</b><span>' + (e.dia7 ? 'Day 7 · about half as much' : 'Day 1 · longer than her sleep') + '</span></div>'
    + '</div><div class="lado-l">' + antes + '</div></div>';
};

/* III · a regra sempre na tela + o comparador */
R.regra = function (c) {
  var e = S.cp, x = ADJ[e.adj], m = MOD[e.mod][0];
  var frase1 = 'This week I’m ' + (m ? '<b class="hm-mod">' + m + '</b> ' : '') + '<b class="hm-c">' + x.c + ' than</b> last week.';
  var frase2 = 'Last week I wasn’t <b class="hm-c">as ' + x.a + ' as</b> this week.';
  var barra = function (v) { return '<i style="--v:' + v + '"></i>'; };
  var alto = [55, 66, 82, 100][e.mod];
  return cab(c) + '<div class="hm-regra"><div class="lado-l"><div class="hm-comp vd"><small>ONE FACT · TWO WAYS TO SAY IT</small>'
    + '<div class="hm-barras"><div><span>last week</span>' + barra(45) + '</div><div><span>this week</span>' + barra(alto) + '</div></div>'
    + '<p class="hm-frase">' + frase1 + '</p><p class="hm-frase">' + frase2 + '</p></div>'
    + '<div class="hm-ctl"><small>THE WORD</small><div class="hm-temas">' + ADJ.map(function (a, i) { return '<button type="button" class="pilula' + (e.adj === i ? ' on' : '') + '" data-a="cp-a" data-n="' + i + '">' + a.a + '</button>'; }).join('') + '</div>'
    + '<small>HOW BIG IS THE CHANGE?</small><div class="hm-temas">' + MOD.map(function (q, i) { return '<button type="button" class="pilula' + (e.mod === i ? ' on' : '') + '" data-a="cp-m" data-n="' + i + '">' + q[1] + '</button>'; }).join('') + '</div></div>'
    + '<p class="so-prof hm-nota-prof">Ask after each one: “Is it true for you this week?” Then let them build a sentence about their own week.</p></div>'
    + '<div class="lado-l"><div class="hm-gram vd"><small>THE GRAMMAR · HOW MUCH, HOW BIG</small>'
    + REGRA.map(function (r) { return '<div class="hm-gl"><b>' + r.w + '</b><span>' + r.ex + '</span><em>' + r.d + '</em></div>'; }).join('') + '</div>'
    + '<div class="hm-nao vd"><small>NOT THIS</small>' + NAO.map(function (x) { return '<p><s>' + x[0] + '</s><span>' + x[1] + '</span></p>'; }).join('') + '</div></div></div>';
};

/* IV · as vozes: ouvir, recontar, falar da vida */
R.vozes = function (c) {
  var e = S.vz, n = Math.min(e.n, VOZES.length - 1), fim = e.n >= VOZES.length, x = VOZES[n], ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + trilha(VOZES, e.n) + '<div class="foco"><div class="pergunta vd"><small>FIVE VOICES</small><h2>Two love their phones, two want less, one can’t stop. Which voice sounds most like you?</h2></div></div>';
  var lado = !ouviu ? '<p class="dica-aluno">Play the voice first.</p>'
    : '<div class="pergunta vd ja"><small>SAY WHAT THEY MEAN · ONE COMPARISON</small><h2>' + (e.ok ? x.diz : 'Use: much more … than · twice as … as · not as … as') + '</h2></div>'
      + (e.ok ? '<div class="pergunta vd ja"><small>AND YOU?</small><h2>' + x.q + '</h2></div>' + fala('vq' + n, ['In my case, …', 'Honestly, …', 'Not really. …'], [])
          + '<div class="hm-linha-ok"><span></span><button type="button" class="btn" data-a="vz-prox">Next voice</button></div>'
        : '<div class="hm-marca so-prof"><span>You heard:</span><button type="button" class="btn" data-a="vz-ok">Good comparison</button><button type="button" class="pilula" data-a="vz-nao">Not yet</button></div>'
          + (e.nao ? '<p class="recusa">Try with a comparison: much more … than, twice as … as, not as … as.</p>' : '') + mostra('vz' + n, x.diz));
  return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l">' + ouve(x.au, x.quem) + '</div><div class="lado-l">' + lado + '</div></div>';
};

/* V · os números da Bea em barras */
R.numeros = function (c) {
  var e = S.nu;
  var linhas = NUMEROS.map(function (x, i) {
    var on = e.n === i;
    return '<button type="button" class="hm-num' + (on ? ' on' : '') + '" data-a="nu" data-n="' + i + '"><b>' + x.k + '</b>'
      + '<span class="hm-bar antes" style="--v:' + (x.antes / x.max * 100).toFixed(0) + '"><em>' + x.antes + '</em></span>'
      + '<span class="hm-bar depois" style="--v:' + (x.depois / x.max * 100).toFixed(0) + '"><em>' + x.depois + '</em></span><small>' + x.un + '</small></button>';
  }).join('');
  var x = e.n >= 0 ? NUMEROS[e.n] : null;
  var lado = x ? '<div class="pergunta vd ja"><small>' + x.k.toUpperCase() + ' · DESCRIBE THE CHANGE</small><h2>Last week ' + x.antes + ', this week ' + x.depois + '. What changed?</h2></div>'
      + fala('nu' + e.n, ['She … much more / less than …', 'twice as much / many as', 'half as much as', 'as much as'], []) + mostra('nu' + e.n, x.diz)
      + '<div class="pergunta vd ja"><small>AND YOU?</small><h2>' + x.q + '</h2></div>'
    : '<p class="dica-aluno">Tap a line on Bea’s chart.</p>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="hm-grafico vd"><small>BEA’S WEEK · <i class="hm-leg antes"></i> last week <i class="hm-leg depois"></i> this week</small>' + linhas + '</div></div><div class="lado-l">' + lado + '</div></div>';
};

/* VI · o debate */
R.debate = function (c) {
  var e = S.db, n = e.n, fim = n >= DEBATE.length;
  if (fim) return cab(c) + trilha(DEBATE, n) + '<div class="foco"><div class="pergunta vd"><small>SIX IDEAS</small><h2>You agreed, you disagreed, and you made your own. Which idea was the hardest to answer?</h2></div></div>';
  var x = DEBATE[n];
  return cab(c) + trilha(DEBATE, n) + '<div class="mesa-c"><div class="lado-l"><div class="hm-claim vd' + (x.voce ? ' voce' : '') + '"><small>' + (x.voce ? 'YOUR IDEA' : 'THE IDEA · ' + (n + 1) + ' OF 5') + '</small><p>' + (x.voce ? x.claim : '“' + x.claim + '”') + '</p></div>'
    + '<div class="hm-carta so-prof"><small>TEACHER · TAKE THE OTHER SIDE</small><p>' + x.outro + '</p><p>Then ask: “What about you, when you were a kid / last year?”</p></div></div>'
    + '<div class="lado-l">' + fala('db' + n, FRASES, ['much better', 'not as … as', 'more … than', 'less']) + mostra('db' + n, x.ex, 1)
    + '<div class="hm-linha-ok"><span></span><button type="button" class="btn" data-a="db-prox">' + (n === DEBATE.length - 1 ? 'End the debate' : 'Next idea') + '</button></div></div></div>';
};

/* VII · as notas da Bea */
R.notas = function (c) {
  var feitas = NOTAS.filter(function (_, i) { return S.nt[i]; }).length;
  return cab(c) + '<div class="hm-caderno vd"><small>BEA’S NOTES · DAY 7</small>' + NOTAS.map(function (x, i) {
    var on = S.nt[i];
    return '<button type="button" class="hm-nota' + (on ? (x.ok ? ' ok' : ' fix') : '') + '" data-a="nt" data-n="' + i + '"' + (on ? ' disabled' : '') + '>'
      + (on && !x.ok ? '<span><s>' + x.errado + '</s>' + x.certo + '</span>' : '<span>' + x.errado + '</span>') + (on ? '<small>' + x.por + '</small>' : '') + '</button>';
  }).join('') + '</div>'
    + '<div class="hm-fim-n">' + (feitas === NOTAS.length ? '<p class="aprova">Bea’s notes are right.</p>' : '<p class="dica-aluno">' + (NOTAS.length - feitas) + ' to check. One is already right.</p>' + mostra('nt', 'much better · as interesting as · twice as many books · a bit calmer · twice as much. “The less I check it, the less I want it” is right.')) + '</div>';
};

/* VIII · o desafio dele */
R.fim = function (c) {
  var d = S.dz || 'my phone';
  var chips = '<div class="hm-temas">' + DESAFIOS.map(function (t) { return '<button type="button" class="pilula' + (S.dz === t ? ' on' : '') + '" data-a="dz" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  return cab(c) + '<div class="hm-desafio"><small>YOUR CHALLENGE · HALF AS MUCH …</small>' + chips + '</div><div class="fim">'
    + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Next week I want to use ' + d + ' half as much.\nI think I’ll be much …er.\nMaybe I’ll be a bit more …\nThe less I …, the more I …', 'Your challenge',
      ['half as much', 'much …er than', 'not as … as', 'a bit more', 'The less I'], ['YOUR WEEK', 'One thing, half as much. What will change? Your teacher will ask you about it next class.'])
    + '<div class="lado-fim">' + engrenagens('oposto', 1, d, 'time for you')
    + '<div class="grande vd"><span><u>calmer than</u> · <u>more relaxed than</u></span><span><u>much</u> better · <u>a bit</u> more bored</span><span><u>not as</u> exciting <u>as</u> · <u>twice as many</u> · <u>half as much</u></span><span>not <s>more better</s>, not <s>as … than</s>, not <s>the double</s></span></div>'
    + mostra('fim', 'Next week I want to use social media half as much.<br>I think I’ll be much calmer at night.<br>Maybe I’ll be a bit more bored on the bus.<br>The less I scroll, the more I sleep.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-a'] = function (b, n, v) { S.ab.a = v; };
TOQUES['ab-b'] = function (b, n, v) { S.ab.b = v; };
TOQUES['ab-d'] = function (b, n, v) { S.ab.dir = v; };
TOQUES['ab-prox'] = function () { S.ab.n++; };
/* 23/10/2026 · no AFTER, True/Lie e a pergunta final não repintam a página (o vídeo segue tocando): só o contador e as linhas */
window.addEventListener('load', function () {
  ['fq2-tf', 'fq2-rea'].forEach(function (k) {
    var f = TOQUES[k]; if (!f) return;
    TOQUES[k] = function (b, n, v, c) { var r = f(b, n, v, c); if (document.getElementById('deb-dir')) { debPinta(); return false; } return r; };
  });
});
TOQUES['be-p'] = function (b, n) { S.be.palpites[n] = !S.be.palpites[n]; };
TOQUES['be-7'] = function () { S.be.dia7 = 1; };
TOQUES['cp-a'] = function (b, n) { S.cp.adj = n; };
TOQUES['cp-m'] = function (b, n) { S.cp.mod = n; };
TOQUES['vz-ok'] = function () { S.vz.ok = 1; };
TOQUES['vz-nao'] = function () { S.vz.nao = 1; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, ok: 0, nao: 0 }; };
TOQUES.nu = function (b, n) { S.nu.n = n; };
TOQUES['db-prox'] = function () { S.db.n++; };
TOQUES.nt = function (b, n) { S.nt[n] = 1; };
TOQUES.dz = function (b, n, v) { S.dz = v; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One change. Climb it one step at a time.',
  degraus: [
    { r: 'calm', f: 'Bea is calm.', d: 'One fact.' },
    { r: 'than', f: 'Bea is <b>calmer than</b> last week.', d: 'a short adjective: -er + than. A long one: more relaxed than.' },
    { r: 'much', f: 'She is <b>much calmer than</b> last week.', d: 'much, a bit, far: how big the change is.' },
    { r: 'as', f: 'Last week she wasn’t <b>as calm as</b> she is now.', d: 'The same idea, the other way: not as … as.' },
    { r: 'half', f: 'She uses her phone <b>half as much as</b> before.', d: 'half as much as · twice as many as' }
  ],
  nota: 'One idea, many steps: <b>calmer than</b>, <b>much calmer than</b>, <b>not as calm as</b>, <b>half as much as</b>. Never more better, never two times more.',
  uso: { p: 'Your turn. Climb the ladder with your own phone week: …er than, much …er than, not as … as, half as much as.', molde: ['I’m … than last week.', 'Not as … as …'], ex: 'I’m calmer than last week. I’m much happier than before. I’m not as tired as I was. I use my phone half as much as before.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
