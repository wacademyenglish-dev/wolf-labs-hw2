/* ============================================================
   SPY x FAMILY · THE DOUBLE DOSSIER · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX A2 · present simple (rotina, verdade: he works, every day)
   × present continuous (agora: he is spying, right now, look!);
   verbos de estado não vão para o -ing (like, know, understand).
   Erros: he work, he is work, Look! he reads (é is reading), is
   working every day, is liking, Are you understand?, Is he go…?, Do
   Loid…?, What do you doing?, What you are doing?, Papa and Mama is.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo TELA DUPLA.
   A tela forte: o dossiê duplo de Berlint. À esquerda, o lado verde,
   a fachada (WHAT HE SAYS: a rotina, present simple); à direita, o lado
   escuro, a verdade (WHAT HE DOES: agora, present continuous). Cada
   frase certa carimba uma ficha na coluna certa; com oito, o carimbo
   CLASSIFIED.
   O AQUECIMENTO (aquece.js): o ranking. O FECHAMENTO (final.js): o
   debate (mentir para proteger a família).
   O VÍDEO: ofXigq9aIpo (trailer principal, Crunchyroll, 2:01, idade 0,
   embed sim), áudio japonês com legenda inglesa no quadro. CORTADO de
   0:02 a 1:44 (o logo branco do início é campo claro). Tempos lidos do
   quadro em 25/09; cada momento contado com palavras nossas.
   A CARA: verde-oliva do terno do Loid, noite azul-petróleo, rosa da
   Anya; Gloock + Karla + Black Ops One nos carimbos. A antiga era o
   estúdio de legenda.
   Fila: FILA-LIVE-386.md · 279.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: três cartas antes (o que ele diz, o que ele faz); a palavra que
   completa, com ▶ no início de cada momento; depois, três adivinhas (Who is it?).
   IV: ordenar frases em três caixas (rotina, agora, sentimento) e a regra
   aparece. V: o dossiê com SEIS fichas (era oito); em cada uma, tocar a página
   certa. VI (era EXTRA, agora essencial, 6 min): montar a pergunta e
   entrevistar o professor.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'sala', rot: 'I · Warm-up and Two Truths and a Lie', t: 'Before the trailer: your days, then a family full of secrets.', p: 'Answer three questions about your life. Then find the lie about the Forger family.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'II · The Trailer', t: 'Spy x Family. The main trailer.', p: 'Open the cards first. Watch the trailer. Then two short tasks: tap ▶ to see a moment again.' },
  { k: 'letra', est: 'l', min: 7, img: 'sala', rot: 'III · Scene by Scene', t: 'Five moments of the trailer. Tap one, watch, then talk.', p: 'Each frame is a moment in the video.' },
  { k: 'gx', est: 'f', min: 4, img: 'mesa', rot: 'IV · Every Day or Right Now?', t: 'Two scenes in the Forger house.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'V · Every Day × Right Now', t: 'He works every day. Right now, he’s spying.', p: 'Put each sentence in its box. Then read the rule.' },
  { k: 'dossie', est: 'o', min: 7, img: 'capa', rot: 'VI · The Double Dossier', t: 'What he says, what he does. Fill the dossier.', p: 'Read the clue. Say the sentence. Then pick the page: what he says, or what he does.' },
  { k: 'agora', est: 'o', min: 6, img: 'sala', rot: 'VII · Your Two Lives', t: 'Six questions about your two lives.', p: 'Build each question and tap Check. Ask the teacher. Then answer.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Debate', t: 'The debate.', p: 'Debate.' }
];

var SERIE = 'Spy x Family', ANO = '2022';
var YT = 'ofXigq9aIpo', DUR = 120;

var ENCARTE = [
  ['The show', '<i>Spy x Family</i> is a Japanese anime (2022) from the manga by Tatsuya Endo. It happens in Berlint, a city like Berlin in the 1960s.'],
  ['The father', 'Loid says he works at a hospital. In fact he is a spy. He needs a wife and a child, fast.'],
  ['The family', 'His wife Yor says she works at City Hall, but at night she is an assassin. Anya can read minds.']
];

var ANTES = [
  { q: 'Do you have a secret talent? What is it?', h: 'Yes, I can … / No, I don’t.' },
  { q: 'Look at your family right now. What are they doing, do you think?', h: 'My mother is … My brother is …' }
];
var DEPOIS = [
  { q: 'What does Loid say he does? What does he really do?', h: 'He says he … But he really …' },
  { q: 'Who is your favorite in the family? Why?', h: 'Anya, because she …' }
];

var TRECHOS = [
  { k: 'The spy', ini: 2, fim: 26, ouvir: 'What is Loid’s real job?', sentido: 'A man in a green suit is the best spy in the country. He has a new mission, and it is very important.', gram: 'He <b>works</b> as a spy. Right now he <b>is starting</b> a mission.' },
  { k: 'A father', ini: 26, fim: 44, ouvir: 'What does Loid need for the mission?', sentido: 'For the mission he needs a child. He decides to play the part of a father.', gram: 'He <b>is playing</b> a father.' },
  { k: 'Mama', ini: 44, fim: 60, ouvir: 'Who is Yor?', sentido: 'Yor joins the family as the new mother. She is shy, and Anya wants to hold her hand.', gram: 'Anya <b>is holding</b> Mama’s hand.' },
  { k: 'School', ini: 66, fim: 80, ouvir: 'Does Anya like studying?', sentido: 'Anya doesn’t want to study, and her father has no idea what children are thinking.', gram: 'Anya <b>doesn’t like</b> studying. What <b>is</b> she <b>thinking</b>?' },
  { k: 'The liar', ini: 88, fim: 104, ouvir: 'What does Anya think of her papa?', sentido: 'Anya thinks her papa is a big liar, but a very cool one. And right now, her parents are flirting.', gram: 'Papa and Mama <b>are flirting</b>.' }
];

var TRAPS = [
  ['Every day: he + -s', 'Loid work at a hospital.', 'Loid <b>works</b> at a hospital.', 'every day, always, usually: he works'],
  ['Right now: be + -ing', 'Look! He reads a newspaper.', 'Look! He <b>is reading</b> a newspaper.', 'now, right now, look!: he is reading'],
  ['Not both', 'He is work every day.', 'He <b>works</b> every day.', 'is + base verb never goes together'],
  ['Some verbs never take -ing', 'Anya is liking peanuts.', 'Anya <b>likes</b> peanuts.', 'like, love, know, want, understand']
];

/* o dossiê: o gesto forte */
var FICHAS = [
  { col: 'diz', quem: 'Loid', pista: 'every day · Loid · work at a hospital', f: 'Loid works at a hospital.' },
  { col: 'faz', quem: 'Loid', pista: 'right now · he · spy on a minister', f: 'Right now he is spying on a minister.' },
  { col: 'diz', quem: 'Yor', pista: 'every day · Yor · work at City Hall', f: 'Every day Yor works at City Hall.' },
  { col: 'faz', quem: 'Anya', pista: 'look! · Anya · read his mind', f: 'Look! Anya is reading his mind.' },
  { col: 'diz', quem: 'Anya', pista: 'always · Anya · not like · studying', f: 'Anya doesn’t like studying.' },
  { col: 'faz', quem: 'Papa and Mama', pista: 'right now · Papa and Mama · flirt', f: 'Papa and Mama are flirting.' }
];
var RECUSA = {
  s: 'He / she, every day: works (with -s).',
  iswork: 'Every day: works. Is + base verb never goes together.',
  agora: 'Right now, look!: be + -ing. He is spying.',
  semis: 'Right now: is + -ing. He is spying.',
  rotina: 'Every day = routine: present simple. Yor works.',
  ing: 'Right now: is + verb-ing. is reading.',
  doesnt: 'He / she: doesn’t like.',
  estado: 'Like is a feeling, not an action: no -ing. doesn’t like.',
  are: 'Papa and Mama = they: are flirting.',
  isgo: 'Questions about every day: Does Loid go…?',
  does: 'He / she: Does Loid go…?',
  do: 'Questions about now: What are you doing?',
  pergunta: 'In questions, put are before you. What are you doing?'
};

var DUAS = [
  { k: 'Monday morning', h: 'What do you usually do on Monday mornings? And this Monday?', ex: 'I usually go to the gym. This week I am working from home.' },
  { k: 'Your family', h: 'What does your mother do? What is she doing now?', ex: 'She works in a bank. Right now she is cooking dinner.' },
  { k: 'Your phone', h: 'What do you use your phone for? What app are you using these days?', ex: 'I use it for music. These days I am using a language app.' },
  { k: 'Your city', h: 'What do people do in your city on Sundays? What are they doing right now?', ex: 'They go to the beach. Right now they are sleeping!' },
  { k: 'Your secret', h: 'What do people think you do? What do you really do?', ex: 'They think I relax on Sundays. I am studying English!' },
  { k: 'This class', h: 'What do we usually do in class? What are we doing now?', ex: 'We usually talk. Right now we are filling a spy dossier.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>Every day</b>: he <b>works</b> · he <b>doesn’t</b> cook<br><b>Right now</b>: am / is / are + <b>-ing</b><br><b>Feelings</b> (like, know, want): never -ing<br>Papa and Mama = they: <b>are</b>';
/* II · antes: três cartas (o que diz, o que faz) */
var VD_CAR = { formato: 'cartas', titulo: 'Before you watch: tap a card. What do you think they really do?', fechada: 'Tap to open', cartas: [
  ['Loid', 'Loid says: “I work at a hospital.” What is he really doing right now?'],
  ['Yor', 'Yor says: “I work at City Hall.” What is her other job? What is she doing at night?'],
  ['Anya', 'Anya can read minds. What is she thinking right now?']
] };
/* II · durante: a palavra que completa, ▶ no início de cada momento (os tempos de TRECHOS) */
var VD_ESC = { formato: 'escolhe', titulo: 'Watch the moment. Tap the word that fits.', itens: [
  { p: 'The man in the green suit is the best … in the country.', o: ['spy', 'cook', 'doctor'], c: 0, tm: '0:02' },
  { p: 'For the mission, he needs a …', o: ['child', 'house', 'boat'], c: 0, tm: '0:26' },
  { p: 'Yor joins the family as the new …', o: ['teacher', 'mother', 'neighbor'], c: 1, tm: '0:44' },
  { p: 'Anya doesn’t want to …', o: ['study', 'sleep', 'travel'], c: 0, tm: '1:06' },
  { p: 'Anya thinks her papa is a big …', o: ['liar', 'hero', 'doctor'], c: 0, tm: '1:28' }
] };
/* II · depois: três adivinhas */
var VD_QUEM = [
  { formato: 'revela', titulo: 'Who is she?', pistas: ['She works at City Hall every day.', 'She has a secret job at night.', 'She is shy. Right now she is joining a new family.'], resposta: 'Yor, the new mother.', botao: 'I know it! Show' },
  { formato: 'revela', titulo: 'Who is he?', pistas: ['He says he works at a hospital.', 'He wears a green suit.', 'Right now he is playing a father for a mission.'], resposta: 'Loid, the best spy in the country.', botao: 'I know it! Show' },
  { formato: 'revela', titulo: 'Who is she?', pistas: ['She doesn’t like studying.', 'She loves peanuts.', 'Right now she is reading a mind.'], resposta: 'Anya.', botao: 'I know it! Show' }
];
/* IV · ordenar frases em três caixas; a regra aparece quando termina */
var VD_SEP = { formato: 'separa', titulo: 'Put each sentence in its box. Tap the sentence, then the box.', caixas: ['Every day · always', 'Right now · look!', 'Feelings · no -ing'], itens: [
  { t: 'Loid works at a hospital.', c: 0 }, { t: 'Right now he is spying.', c: 1 }, { t: 'Anya likes peanuts.', c: 2 },
  { t: 'He doesn’t cook.', c: 0 }, { t: 'They are flirting.', c: 1 }, { t: 'I know the answer.', c: 2 }
] };
/* V · o dossiê: em cada ficha, tocar a página certa */
var VD_DOS = { formato: 'escolhe', titulo: 'Read the clue and say the sentence. Then pick the page.', itens: FICHAS.map(function (f) {
  return { p: f.pista, o: ['What he says', 'What he does'], c: f.col === 'diz' ? 0 : 1, d: 'Say it: ' + f.f };
}) };
/* VI · montar a pergunta e entrevistar o professor */
var VD_ASK = { formato: 'pergunta', titulo: 'Build the question. Ask your teacher.', depoisRot: 'Then answer with', depois: ['I usually …', 'Right now I am …', 'My mother … every day'], itens: [
  { p: 'what · you · usually · do · on Monday mornings', r: 'What <b>do</b> you usually <b>do</b> on Monday mornings?' },
  { p: 'what · you · do · right now', r: 'What <b>are</b> you <b>doing</b> right now?' },
  { p: 'what · your mother · do · for a job', r: 'What <b>does</b> your mother <b>do</b>?' },
  { p: 'what · she · do · now', r: 'What <b>is</b> she <b>doing</b> now?' },
  { p: 'people in your city · go to the beach · on Sundays', r: '<b>Do</b> people in your city <b>go</b> to the beach on Sundays?' },
  { p: 'you · like · studying English', r: '<b>Do</b> you <b>like</b> studying English? (never: Are you liking)' }
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ds: { n: 0, esc: -1 } };

/* a tira de filme: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var t = Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="sy-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* o dossiê aberto em duas páginas: a fachada verde (WHAT HE SAYS) e a verdade escura (WHAT HE DOES); cada ficha certa entra na coluna dela com o carimbo; a vez aparece tracejada */
function dossie(luz, ultima) {
  var col = function (c) {
    return FICHAS.map(function (f, i) { return [f, i]; }).filter(function (p) { return p[0].col === c; }).map(function (p) {
      var f = p[0], i = p[1];
      if (luz[i]) return '<li class="sy-ficha' + (i === ultima ? ' novo' : '') + '"><small>' + f.quem + '</small><span>' + f.f + '</span></li>';
      return '<li class="sy-ficha vazia"><span></span></li>';
    }).join('');
  };
  var n = luz.filter(Boolean).length, fim = n >= FICHAS.length;
  return '<div class="sy-pasta vd' + (fim ? ' fechada' : '') + '" role="img" aria-label="The double dossier: ' + n + ' of ' + FICHAS.length + ' entries">'
    + '<div class="sy-pag diz"><b class="sy-tit">What he says</b><small class="sy-sub">every day · always · usually</small><ul>' + col('diz') + '</ul></div>'
    + '<div class="sy-pag faz"><b class="sy-tit">What he does</b><small class="sy-sub">right now · look! · today</small><ul>' + col('faz') + '</ul></div>'
    + (fim ? '<p class="sy-carimbo">Classified</p>' : '') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · A2 · present simple × present continuous</span><h1>What He Says, What He Does</h1>'
    + '<p class="banda">' + SERIE + ' · ' + ANO + '</p>'
    + '<p class="sub">In Berlint, a man says he works at a hospital. Every morning he goes to work in a green suit. But right now he isn’t working at the hospital: he is spying. Tonight you fill his double dossier.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the dossier</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sy-foto"><img src="' + img('capa') + '" alt="An old European city street at night with warm windows and a tram line"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sy-encarte vd"><div class="sy-capinha"><img src="' + img('sala') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The Forgers’ home</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sy-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Three people, three secrets. Do people in real families have secrets?</h2></div>' + mostra('enc', 'Yes, small secrets. My brother never says where he goes on Fridays!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_CAR) + '</div>'
    + '<div class="lado-l"><div class="sy-selo vd"><b>' + SERIE + '</b><small>the main trailer · Japanese with English subtitles</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sy-video"><div class="sy-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="sy-cred">' + SERIE + ' · main trailer (Crunchyroll) · tap a time to see the moment again</small></div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="sy-centro">' + VD_QUEM.map(function (q, i) { return FM.ex('qm' + i, q); }).join('') + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sy-video"><div class="sy-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sy-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sy-sentido">' + x.sentido + '</span><span class="sy-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sy-centro"><p class="sy-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, pronta = !!e && VD_SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  return cab(c) + '<div class="sy-centro">' + FM.ex('sep', VD_SEP)
    + (pronta ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Put all six in their boxes and the rule appears.</p>') + '</div>';
};

R.dossie = function (c) {
  var e = (S.fq || {}).dos, r = (e && e.r) || {};
  var luz = FICHAS.map(function (f, i) { return r[i] === (f.col === 'diz' ? 0 : 1); });
  var antes = S.dsluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.dsult = nova;
  S.dsluz = luz;
  var pronta = luz.every(Boolean);
  return cab(c) + comPlaca('<div class="sy-mesa"><div class="lado-l">' + dossie(luz, S.dsult == null ? -1 : S.dsult) + '</div><div class="lado-l">' + FM.ex('dos', VD_DOS)
    + (pronta ? '<p class="aprova">Classified. Now report to the teacher: two things Loid says he does every day, and two things the family is doing right now.</p>' : '') + '</div></div>', PRESA);
};

R.agora = function (c) {
  return cab(c) + comPlaca(FM.ex('ask', VD_ASK), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="sy-centro"><p class="sy-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'ranking', rot: 'I · The Best Cover Job', t: 'Before the trailer: the best secret job.', p: 'Tap them from the best to the worst cover for a spy. Then explain the top and the bottom.',
  rotulo: 'The best cover job', q: 'A spy needs a normal job. Which one is the best? Put them in order.',
  itens: ['A doctor', 'A teacher', 'A taxi driver', 'A waiter', 'An English student'],
  depois: 'And you? What do you do every day? Is it a good job for a spy?', ex: 'Number 1 is a taxi driver. He goes everywhere and nobody looks at him.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Is it OK to lie to your family to protect them?', p: 'Choose a side. The teacher takes the other one. Use present simple and present continuous.',
  frase: 'It is OK to lie to your family to protect them.',
  a: { rot: 'Yes, sometimes', motivos: ['Loid lies, but he protects the world.', 'Some secrets keep people safe.', 'A small lie doesn’t hurt anybody.'] },
  b: { rot: 'No, never', motivos: ['A family needs the truth.', 'Lies always come out one day.', 'If I lie, my family doesn’t really know me.'] },
  frases: ['I think… because…', 'Right now, in my family…', 'I see your point, but…'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'What he says, what he does. Two scenes.',
  a: { t: 'Every day', falas: [['Anya', 'What does Loid do?'], ['You', 'He <mark>works</mark> at a hospital every day.']], d: 'Every day is a routine: present simple. <b>works</b>.' },
  b: { t: 'Right now', falas: [['Anya', 'Look! What is he doing?'], ['You', 'He <mark>is spying</mark> on a man right now.']], d: 'Right now, look!: present continuous. <b>is spying</b>.' },
  pergunta: 'Same man, two forms. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'Yor goes to the office at nine every day. You say:', o: ['She goes to the office at nine.', 'She is going to the office at nine.'], c: 0, d: 'A routine.' },
    { p: 'Look! Yor is at the door with a dark bag. You say:', o: ['She is carrying a dark bag.', 'She carries a dark bag.'], c: 0, d: 'Right now.' },
    { p: 'Anya loves peanuts. You say:', o: ['She loves peanuts.', 'She is loving peanuts.'], c: 0, d: 'Feelings and knowing do not take -ing.' },
    { p: 'Loid is listening at the wall right now. Anya asks:', o: ['What is he doing?', 'What does he do?'], c: 0, d: 'Right now: is he doing.' }
  ],
  nota: '<b>Every day</b> or always true: <b>works</b>, <b>loves</b>. <b>Right now</b> (look!): <b>is spying</b>. Verbs for feelings and knowing do not take -ing: I know, she likes.',
  uso: { p: 'Your turn. One thing you do every day and one thing you are doing right now.', molde: ['Every day I …', 'Right now I’m …'], ex: 'Every day I drink coffee at eight. Right now I’m talking to my teacher.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_dois', GX_EXPLICA); };
