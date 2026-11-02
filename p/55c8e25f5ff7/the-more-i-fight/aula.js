/* ============================================================
   SOLO LEVELING · THE SYSTEM · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · the more…, the more…: THE + comparativo + oração,
   vírgula, THE + comparativo + oração (the more I fight, the stronger
   I get); adjetivo longo com more (the more dangerous); forma curta
   (the sooner, the better).
   Erros: sem o THE (more I fight, more strong I get), more strong no
   lugar de stronger, the most no lugar de the more, o segundo THE
   esquecido, more + longo virado -er (dangerouser), ordem invertida no
   fim (the easier gets it), the best no lugar de the better.
   Catálogo WOLFLIX Live (07/10): família ANIME, modo SUBIR DE NÍVEL.
   A tela forte: a janela azul do Sistema. Oito missões diárias, uma
   embaixo da outra; cada frase certa marca a missão, enche a barra de
   XP e sobe a letra do rank, de E até S. No fim: RANK UP, S.
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O FECHAMENTO
   (final.js): a entrevista, o professor é o Jinwoo.
   O VÍDEO: n24l9gvM3XM (trailer oficial 3, Crunchyroll, 2:21, idade 0,
   embed sim). Áudio japonês com legenda em inglês na imagem; tempos
   lidos da legenda (24/09) e o trecho do Sistema ESTIMADO. Lutas e um
   pouco de sangue, rápido, nada demorado na tela.
   A CARA: azul do Sistema na noite, roxo das sombras; Oxanium nos
   títulos e na janela, Hanken Grotesk no texto. A antiga era o estúdio
   de legenda.
   Fila: FILA-LIVE-386.md · 296.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. II: adivinhar a regra do Sistema; verdadeiro ou mentira e um toque
   de sentido com ▶ nos momentos do trailer (TRECHOS; sem legenda-dados: o
   áudio é japonês); contar a história tocando cada palavra + uma régua;
   IV: separar o que vem depois de THE (e a regra aparece); V: a janela do
   Sistema com seis missões, ligar o começo ao fim (cada par sobe o rank);
   VI (era EXTRA): cartas que viram + contador de frases verdadeiras.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'templo', rot: 'I · Warm-up and The Hunter Rules', t: 'Before the trailer: your habits, then the rules of the gates.', p: 'Answer three questions about your life. Then read the rules of the hunters and say if you could live with them.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'II · The Trailer', t: 'Solo Leveling. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'letra', est: 'l', min: 7, img: 'templo', rot: 'III · Scene by Scene', t: 'Five moments of the trailer. Tap one, watch, then talk.', p: 'Each frame is a moment in the video.' },
  { k: 'regra', est: 'f', min: 6, img: 'teto', rot: 'IV · The More, the Stronger', t: 'The more I fight, the stronger I get. Which one needs more?', p: 'Sort the words into three boxes. Then read the rule.' },
  { k: 'sistema', est: 'o', min: 7, img: 'capa', rot: 'V · The System', t: 'Six daily quests. Every match ranks you up.', p: 'Tap the start of a quest, then its ending. Say each full sentence out loud.' },
  { k: 'diaria', est: 'o', min: 7, img: 'teto', rot: 'VI · Your Daily Quest', t: 'Six things in your life that grow. The more…, the more…?', p: 'Open a card and finish the sentence out loud. Tap Got it! for each true sentence.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VII · The Interview', t: 'The interview.', p: 'Interview.' }
];

var SERIE = 'Solo Leveling', ANO = '2024';
var YT = 'n24l9gvM3XM', DUR = 141;

var ENCARTE = [
  ['The show', '<i>Solo Leveling</i> is a Japanese anime (2024), from a Korean web novel. It is on Crunchyroll.'],
  ['The world', 'Ten years ago, gates to other worlds opened, and monsters came out. Some people woke up with powers and became hunters, ranked from E, the weakest, to S.'],
  ['The hunter', 'Sung Jinwoo is an E-rank, “the weakest hunter of all mankind”. He keeps working because his mother is in hospital. After a terrible dungeon, he sees a blue window that nobody else can see: the System. It gives him daily quests, and he levels up.']
];

var ANTES = [
  { q: 'In a video game, how do you get stronger?', h: 'You fight / You train / You …' },
  { q: 'Is there something you do every day to get better? What is it?', h: 'Every day I …' }
];
var DEPOIS = [
  { q: 'Why does Jinwoo keep fighting, if he is so weak?', h: 'Because his family …' },
  { q: 'Would you like a System in your life? What would your daily quest be?', h: 'Yes, my quest would be …' }
];

var TRECHOS = [
  { k: 'The weakest hunter', ini: 20, fim: 34, ouvir: 'What do people call Jinwoo?', sentido: 'People call him the weakest hunter of all mankind. He says it is his fault for being too weak, and that he is the only one in his family who can work.', gram: '<b>The weaker</b> he is, <b>the harder</b> his life gets.' },
  { k: 'The statue', ini: 34, fim: 50, ouvir: 'What is looking at the hunters?', sentido: 'Deep in the dungeon, a huge stone statue seems to be looking at them. Something is very wrong.', gram: '<b>The deeper</b> they go, <b>the scarier</b> it gets.' },
  { k: 'Whatever the cost', ini: 50, fim: 64, ouvir: 'What does Jinwoo decide?', sentido: 'He decides he will survive, whatever the cost. He has done his best to stay alive this far.', gram: '<b>The worse</b> it gets, <b>the harder</b> he fights.' },
  { k: 'The System', ini: 64, fim: 84, ouvir: 'What can Jinwoo see that nobody else can?', sentido: 'Blue windows in the air: the System gives him quests, and he grows stronger and stronger. (Times estimated.)', gram: '<b>The more</b> quests he finishes, <b>the stronger</b> he gets.' },
  { k: 'The boss', ini: 84, fim: 100, ouvir: 'Who does he go up against, and with whom?', sentido: 'He goes up against the boss without his party. He is afraid, but he says he has to do it.', gram: '<b>The bigger</b> the boss, <b>the braver</b> he gets.' }
];

var TRAPS = [
  ['Two times THE', 'More I fight, more strong I get.', '<b>The</b> more I fight, <b>the</b> stronger I get.', 'the + more / -er … , the + more / -er …'],
  ['Short words: -er', 'The more I train, the more fast I run.', 'The more I train, <b>the faster</b> I run.', 'fast → faster · good → better · strong → stronger'],
  ['More, not most', 'The most I read, the more I learn.', 'The <b>more</b> I read, the more I learn.', 'the more, never the most'],
  ['The order at the end', 'The more I practice, the easier gets it.', 'The more I practice, the easier <b>it gets</b>.', 'the + -er + subject + verb']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'The <b>more</b> I fight, <b>the stronger</b> I get.<br>short word: <b>-er</b> · long word: <b>more</b> + word<br>the more + <b>noun</b>: the more money he makes<br><b>The sooner, the better.</b>';
/* II · antes: adivinhar a regra do Sistema */
var VD_REV = { formato: 'revela', titulo: 'Before you watch · guess the rule of the System', pistas: [
  'It is a blue window in the air.', 'Only one hunter can see it.', 'It gives him a daily quest.', 'The more he fights, the stronger he gets.'
], resposta: 'The System. Its rule: the more you fight, the stronger you get.', mais: 'Next clue', botao: 'I know it! Show' };
/* II · durante: verdadeiro ou mentira e um toque de sentido, cada um no momento do trailer (TRECHOS; legenda lida na imagem em 24/09) */
var VD_VM = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it’s a lie, say the truth.', itens: [
  { f: 'People call Jinwoo the weakest hunter of all mankind.', t: true, tm: '0:20' },
  { f: 'Deep in the dungeon, a stone statue looks away from the hunters.', t: false, tm: '0:34', c: 'The statue seems to be looking at them. Something is very wrong.' },
  { f: 'Jinwoo decides he will survive, whatever the cost.', t: true, tm: '0:50' },
  { f: 'Jinwoo goes up against the boss with his whole party.', t: false, tm: '1:24', c: 'He goes up against the boss without his party.' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What do you see? Tap the answer.', itens: [
  { p: 'What can only Jinwoo see?', o: ['a blue window', 'a red door', 'a gold map'], c: 0, d: 'A blue window: the System gives him quests.' },
  { p: 'Is Jinwoo afraid of the boss?', tm: '1:24', o: ['No, he isn’t afraid', 'Yes, but he says he has to do it', 'He doesn’t know about the boss'], c: 1, d: 'He is afraid, but he says he has to do it.' }
] };
/* II · depois: contar a história tocando cada palavra + uma régua */
var VD_USA = { formato: 'usa', titulo: 'Tell Jinwoo’s story in your own words. Tap each word when you use it.', palavras: ['weakest', 'dungeon', 'statue', 'System', 'quests', 'stronger'], fim: 'All six words. The System approves.' };
var VD_REG = { formato: 'regua', titulo: 'After the trailer', frase: 'Going up against the boss alone is brave.', esquerda: 'Crazy', direita: 'Brave', depois: 'Say why. Try: The bigger the boss, the …' };
/* IV · separe o que vem depois de THE → a regra */
var SEP = { formato: 'separa', titulo: 'The more…, the …: sort what comes after THE.', caixas: ['the + short word + -er', 'the more + a long word', 'the more + a noun'], itens: [
  { t: 'stronger', c: 0 }, { t: 'more dangerous', c: 1 }, { t: 'more money', c: 2 }, { t: 'faster', c: 0 }, { t: 'more scared', c: 1 }, { t: 'more shadows', c: 2 }
] };
/* V · a janela do Sistema: seis missões; ligar o começo ao fim */
var MISSOES = [
  { tit: 'Daily quest', xp: 150 }, { tit: '100 push-ups', xp: 200 }, { tit: 'Read the gate', xp: 250 }, { tit: 'The hospital bills', xp: 300 }, { tit: 'The double dungeon', xp: 350 }, { tit: 'Enter the gate', xp: 500 }
];
var SS_LIGA = { formato: 'liga', titulo: 'Match the start of the quest to its ending.', pares: [
  ['The more I fight,', 'the stronger I get.'], ['The more he trains,', 'the faster he runs.'], ['The higher the rank,', 'the more dangerous the gate.'],
  ['The harder he works,', 'the more money he makes.'], ['The more you think about it,', 'the more scared you get.'], ['The sooner we enter,', 'the better.']
], ordemDireita: [3, 0, 5, 2, 4, 1] };
var RANKS = ['E', 'E', 'D', 'C', 'B', 'A', 'S'];
/* VI · cartas que viram + contador de frases verdadeiras */
var DI_CARTAS = { formato: 'cartas', titulo: 'Open a card. Finish the sentence out loud.', fechada: 'Tap to open', cartas: [
  ['Sleep', 'The more I sleep, the …?'], ['Your phone', 'The more time I spend on my phone, the …?'], ['Coffee', 'The more coffee I drink, the …?'],
  ['Age', 'The older I get, the …?'], ['A hobby', 'The more I play / cook / run, the …?'], ['The class', 'The more we practice, the …?']
] };
var DI_CONTA = { formato: 'contador', titulo: 'Your daily quest: three true sentences', botao: 'Got it!', revelar: 'Show a model', resposta: 'The more I cook, the better my food gets. The older I get, the more I like quiet weekends. The more we practice, the easier it gets.' };

/* as missões do Sistema: o gesto forte */

var DIARIAS = [
  { k: 'Sleep', h: 'The more I sleep, the …?', ex: 'The more I sleep, the more tired I feel on Mondays!' },
  { k: 'Your phone', h: 'The more time I spend on my phone, the …?', ex: 'The more time I spend on my phone, the less I read.' },
  { k: 'Coffee', h: 'The more coffee I drink, the …?', ex: 'The more coffee I drink, the faster I talk.' },
  { k: 'Age', h: 'The older I get, the …?', ex: 'The older I get, the more I like quiet weekends.' },
  { k: 'A hobby', h: 'The more I play / cook / run, the …?', ex: 'The more I cook, the better my food gets.' },
  { k: 'The class', h: 'The more we practice, the …?', ex: 'The more we practice, the easier it gets.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ss: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do trailer é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="sl-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a janela do Sistema: a letra do rank num hexágono, a barra de XP e as oito missões; cada frase certa marca uma missão e sobe o rank */
function sistema(feitas, atual, nova) {
  var N = MISSOES.length, xp = 0; MISSOES.forEach(function (m, i) { if (i < feitas) xp += m.xp; });
  var total = MISSOES.reduce(function (a, m) { return a + m.xp; }, 0);
  var rk = RANKS[feitas], subiu = nova && RANKS[feitas] !== RANKS[feitas - 1];
  var fim = feitas >= N;
  var linhas = MISSOES.map(function (m, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ok novo' : ' ok') : (i === atual ? ' vez' : '');
    return '<li class="sl-q' + cls + '"><i class="sl-caixa" aria-hidden="true"></i><span>' + m.tit + '</span><b>' + (i < feitas ? '+' + m.xp + ' XP' : '' + m.xp + ' XP') + '</b></li>';
  }).join('');
  return '<div class="sl-janela vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The System: rank ' + rk + ', ' + feitas + ' of ' + N + ' quests done">'
    + '<div class="sl-topo"><b>System</b><small>Player: you · Job: hunter</small></div>'
    + '<div class="sl-perfil"><div class="sl-hex' + (subiu ? ' sobe' : '') + '"><svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,4 92,27 92,73 50,96 8,73 8,27"/></svg><b>' + rk + '</b><small>rank</small></div>'
    + '<div class="sl-medidor"><div class="sl-escada">' + ['E', 'D', 'C', 'B', 'A', 'S'].map(function (r) { return '<span class="' + (r === rk ? 'agora' : 'EDCBAS'.indexOf(r) < 'EDCBAS'.indexOf(rk) ? 'passou' : '') + '">' + r + '</span>'; }).join('') + '</div>'
    + '<div class="sl-xp"><i style="width:' + Math.round(xp / total * 100) + '%"></i></div><small>' + xp + ' / ' + total + ' XP</small></div></div>'
    + '<ul class="sl-lista">' + linhas + '</ul>'
    + '<p class="sl-aviso">' + (fim ? 'Rank up. You are now an S-rank hunter.' : 'Daily quest: ' + feitas + ' of ' + N + ' done.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · the more…, the more… · stronger and stronger</span><h1>The More I Fight</h1>'
    + '<p class="banda">' + SERIE + ' · Crunchyroll</p>'
    + '<p class="sub">The weakest hunter in the world sees a blue window nobody else can see, and it has one rule: the more you fight, the stronger you get. Tonight you clear six daily quests and take your rank from E to S, one sentence at a time.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Accept the quest</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r sl-foto"><img src="' + img('capa') + '" alt="A huge glowing blue gate in a dark, wet subway tunnel"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="sl-encarte vd"><div class="sl-capinha"><img src="' + img('templo') + '" alt=""><div><small>' + SERIE + ' · ' + ANO + '</small><b>The double dungeon</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="sl-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Jinwoo is the weakest, and he keeps going. Is that brave, or crazy?</h2></div>' + mostra('enc', 'I think it is brave. The harder his life gets, the harder he tries.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('rev', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="sl-selo vd"><b>' + SERIE + '</b><small>the official trailer · Japanese voices, English subtitles · fights, nothing long on screen</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="sl-video"><div class="sl-vcol">' + iframe(YT, SERIE + ' · trailer') + '<small class="sl-cred">' + SERIE + ' · official trailer 3 (Crunchyroll) · read the English subtitles · tap a time to see it again</small></div><div class="lado-l">' + FM.ex('vm', VD_VM) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('usa', VD_USA) + '</div><div class="lado-l">' + FM.ex('reg', VD_REG) + '</div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="sl-video"><div class="sl-vcol">' + iframe(YT, x.k + ' · ' + SERIE, '&start=' + x.ini + '&end=' + x.fim) + '<small class="sl-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="sl-sentido">' + x.sentido + '</span><span class="sl-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="sl-centro"><p class="sl-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, tudo = !!e && SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  return cab(c) + '<div class="sl-centro">' + FM.ex('sep', SEP)
    + (tudo ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('The <b>more</b> I fight, <b>the stronger</b> I get: the + more / -er, the + more / -er.<br>Short words: <b>-er</b> (faster, harder). Long words: <b>more</b> (the more dangerous).<br>With a noun: the <b>more</b> money he makes.<br>No verb at all: <b>The sooner, the better.</b>', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six and the rule appears.</p>') + '</div>';
};

R.sistema = function (c) {
  var e = (S.fq || {}).sl, par = (e && e.par) || {}, feitas = 0;
  Object.keys(par).forEach(function (i) { if (par[i] === +i) feitas++; });
  var fim = feitas >= SS_LIGA.pares.length;
  return cab(c) + comPlaca('<div class="sl-mesa"><div class="lado-l"><div class="fm-obj">' + sistema(feitas, -1, 0) + '</div></div><div class="lado-l">' + FM.ex('sl', SS_LIGA)
    + (fim ? '<div class="fm-cena fm-fim"><p>All six quests are done. Now say each full sentence out loud, and then two of your own: The more …, the …</p></div>' : '') + '</div></div>', PRESA);
};

R.diaria = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('dic', DI_CARTAS) + '</div><div class="lado-l">' + FM.ex('dcn', DI_CONTA) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="sl-centro"><p class="sl-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the trailer: the more…, and a lie.', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about their life. One is a lie. Which one?',
  frases: ['The more I sleep on Sunday, the more tired I feel on Monday.', 'The more coffee I drink, the calmer I get.', 'The older I get, the more I like quiet weekends.'], mentira: 1,
  depois: 'Now you: say two true sentences and one lie with “The more …, the …”. The teacher finds the lie.',
  ex: 'The more I run, the happier I feel. The more I study, the less I sleep. The more pizza I eat, the thinner I get.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview the weakest hunter in the world.', p: 'The teacher is Sung Jinwoo, the hunter who sees the System. Ask how his life changes as he levels up. Then swap: you are you, a hunter who just woke up with powers.',
  papel: 'Sung Jinwoo, the hunter who levels up', papel2: 'you, a hunter who just woke up with powers',
  itens: [
    { q: 'What happens the more you fight?', ex: 'The more I fight, the stronger I get.' },
    { q: 'Is it true that the higher the rank, the more dangerous the gate?', ex: 'Yes. The higher the rank, the more dangerous it is.' },
    { q: 'How do you feel, the more people look at you?', ex: 'The more people look at me, the less I want to talk.' },
    { q: 'What gets easier the more you train?', ex: 'Everything. The more I train, the easier the dungeons get.' },
    { q: 'The more power you have, the happier you are?', ex: 'No. The more power I have, the more I worry about my family.' }
  ] };
/*FIM@@*/
