/* ============================================================
   THE LORD OF THE RINGS · THE COUNCIL · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B1 · first conditional: if + presente, will + verbo no
   resultado (if the Ring stays here, Sauron will find it); unless = if
   … not (unless somebody takes it); when / as soon as + presente.
   Erros: will depois de if / unless / when (if we will use), passado
   no if para um futuro real (if we used… we will), unless + not (unless
   somebody doesn’t take), resultado sem will (Sauron finds it), will +
   -ing (will protecting), will sem be (will safer), doesn’t will.
   Catálogo WOLFLIX Live (07/10): família FANTASIA, modo ESCOLHA.
   A tela forte: a mesa do Conselho de Elrond vista de cima. Oito
   cadeiras de pedra em roda, o Anel no centro. Cada frase certa dá a
   palavra a quem está sentado ali: a cadeira acende em ouro e um fio
   liga a voz ao Anel. Na última, o Anel sai do centro e vai até a
   cadeira do menor de todos. Quem vai é o Frodo.
   O AQUECIMENTO (aquece.js): o dado das escolhas. O FECHAMENTO
   (final.js): o debate, o menor pode fazer o maior trabalho?
   O VÍDEO: UXgbHdnoJrg (a abertura oficial da Warner Bros., o prólogo;
   usamos 0:00–3:56, embed sim). Tempos conferidos na aula antiga (24/09).
   Uma batalha antiga no meio: espadas e exércitos, sem sangue.
   A CARA: noite de Valfenda, ouro do Anel, prata élfica; IM Fell English
   SC nos títulos, Spectral no texto. A antiga era o filme de escolhas.
   Fila: FILA-LIVE-386.md · 299.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: True or Lie antes (o que você já sabe do Anel); a palavra que
   completa, com ▶ nas falas do prólogo; depois, Choose Your Response (você é
   o Isildur). V: ligar as duas metades da frase e a regra aparece. VI: a mesa
   com SEIS cadeiras (era oito), quem diz cada frase; o Anel vai ao Frodo,
   a sexta. VII (era EXTRA, agora essencial): A ou B (o professor escolhe a
   conversa) e as palavras para contar.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'lore', est: 'o', min: 8, img: 'fogo', rot: 'I · The Story', t: 'Before the trailer: everyone at one table.', p: 'Tap the next stop on the map. Read the page out loud. Then answer the question.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Prologue', t: 'The Lord of the Rings. How it all began.', p: 'True or lie first. Watch the prologue. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'fogo', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'mesa', rot: 'V · If, Unless, When', t: 'If you don’t find a way, no one will.', p: 'Match the two halves of each sentence. Then read the rule.' },
  { k: 'conselho', est: 'o', min: 7, img: 'capa', rot: 'VI · The Council', t: 'Six voices at the table. Every right answer gives one the floor.', p: 'Read the clue. Tap who is speaking. Then say the sentence.' },
  { k: 'escolhas', est: 'o', min: 7, img: 'mesa', rot: 'VII · Your Crossroads', t: 'Six choices in your life. What will happen if…?', p: 'The teacher picks A or B. Answer the three questions. Tap each word when you use it.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Debate', t: 'The debate.', p: 'Debate.' }
];

var FILME = 'The Lord of the Rings', ANO = '2001';
var YT = 'UXgbHdnoJrg', DUR = 236;

var ENCARTE = [
  ['The film', '<i>The Lord of the Rings: The Fellowship of the Ring</i> (2001), by Peter Jackson, from the books by J. R. R. Tolkien.'],
  ['The Ring', 'Long ago, the Dark Lord Sauron made one Ring to control all the others. He lost it, and now it is in the hands of a hobbit, Frodo. If Sauron gets it back, the world will fall.'],
  ['The Council', 'Elves, Dwarves, Men, a wizard and four hobbits sit at a round table in Rivendell. The Ring can’t be used and can’t be hidden. Unless somebody takes it to the fire where it was made, it will never be destroyed. Who will go?']
];

var ANTES = [
  { q: 'Have you seen The Lord of the Rings? Or read the books?', h: 'Yes, I have … / No, but I know …' },
  { q: 'If you find a ring that gives you power, will you keep it, or throw it away?', h: 'If I find it, I will …' }
];
var DEPOIS = [
  { q: 'Why did Isildur keep the Ring when he had one chance to destroy it?', h: 'Because the Ring …' },
  { q: 'What will happen if somebody uses the Ring again?', h: 'If somebody uses it, …' }
];

var TRECHOS = [
  { k: 'Much was lost', ini: 0, fim: 12, ouvir: 'What does the voice say about the old days?', sentido: 'A quiet voice says the world has changed. Much that once was is lost, and nobody alive remembers it.', gram: '<b>If</b> nobody <b>remembers</b>, the story <b>will</b> disappear.' },
  { k: 'The rings', ini: 10, fim: 46, ouvir: 'Who got the rings? How many each?', sentido: 'Great rings were made: three for the Elves, seven for the Dwarf lords, nine for Men, who want power above everything.', gram: '<b>If</b> you <b>give</b> people power, they <b>will</b> want more.' },
  { k: 'One ring', ini: 46, fim: 84, ouvir: 'Who made the last ring, and why?', sentido: 'They were all tricked. In secret, the Dark Lord made one master ring, to control all the others.', gram: '<b>Unless</b> someone <b>stops</b> him, he <b>will</b> rule them all.' },
  { k: 'The last alliance', ini: 84, fim: 180, ouvir: 'Who fought against the Dark Lord?', sentido: 'Some people resisted. Men and Elves marched together against his armies and fought on the slopes of the fire mountain. (A big battle, no blood.)', gram: '<b>If</b> we <b>fight</b> together, we <b>will</b> win.' },
  { k: 'One chance', ini: 215, fim: 236, ouvir: 'What chance did Isildur have, and what did he do?', sentido: 'The Ring went to Isildur, who had one chance to destroy evil forever. But the hearts of men are easily corrupted, and he kept it.', gram: '<b>If</b> he <b>keeps</b> it, it <b>will</b> betray him.' }
];

var TRAPS = [
  ['No will after if', 'If the Ring will stay here, Sauron will find it.', '<b>If</b> the Ring <b>stays</b> here, Sauron <b>will find</b> it.', 'if + present, will + verb'],
  ['Unless = if … not', 'Unless somebody doesn’t take it, it won’t be destroyed.', '<b>Unless</b> somebody <b>takes</b> it, it won’t be destroyed.', 'unless + positive verb'],
  ['When, as soon as', 'When we will leave, I will protect you.', '<b>When</b> we <b>leave</b>, I will protect you.', 'when / as soon as + present'],
  ['The result', 'If we fight together, we win tomorrow.', 'If we fight together, we <b>will win</b> tomorrow.', 'the result: will + verb']
];

/* o conselho: o gesto forte */
var VOZES = [
  { quem: 'Elrond', povo: 'the Elves', p: 'Someone warns: the Ring is in danger here. He is the host of the Council.', o: ['Elrond', 'Boromir', 'Sam'], c: 0, d: 'Elrond, for the Elves. Say it: If the Ring stays here, Sauron will find it. Then: if you hide something at home, will your family find it?' },
  { quem: 'Boromir', povo: 'Men', p: 'A man of Gondor wants to use the Ring as a weapon and win the war.', o: ['Gandalf', 'Boromir', 'Sam'], c: 1, d: 'Boromir, for Men. Say it: If we use the Ring, we will win the war. Is Boromir right?' },
  { quem: 'Gandalf', povo: 'the wizard', p: 'The old wizard says: nothing will change unless somebody takes the Ring to Mordor.', o: ['Frodo', 'Gandalf', 'Aragorn'], c: 1, d: 'Gandalf. Say it: Unless somebody takes it to Mordor, it won’t be destroyed. Now say one thing that won’t happen unless you do it.' },
  { quem: 'Aragorn', povo: 'Men', p: 'A ranger promises to protect the group as soon as they leave.', o: ['Aragorn', 'Elrond', 'Sam'], c: 0, d: 'Aragorn. Say it: When we leave, I will protect you. What will you do as soon as you get home today?' },
  { quem: 'Sam', povo: 'the Hobbits', p: 'A loyal gardener says he won’t go unless his friend goes too.', o: ['Boromir', 'Sam', 'Gandalf'], c: 1, d: 'Sam. Say it: I won’t go unless Frodo goes. Where won’t you go unless your best friend goes too?' },
  { quem: 'Frodo', povo: 'the Hobbits', p: 'The smallest one stands up: if nobody goes, he will take the Ring.', o: ['Elrond', 'Frodo', 'Aragorn'], c: 1, d: 'Frodo, the smallest of them all. Say it: If nobody goes, I will take it. What will you do if nobody else does it?' }
];
var RECUSA = {
  ifwill: 'After if / unless: present (if we use, unless somebody takes). Never will.',
  will: 'The result is the future: will + verb.',
  passado: 'A real future: if + present (if we use).',
  unlessneg: 'Unless already means “if … not”. No second not: unless somebody takes it.',
  neg: 'The negative: won’t + verb (it won’t break).',
  be: 'Don’t forget be: will be safer.',
  whenwill: 'After when / as soon as: present (when we leave).',
  base: 'After will: the base verb (will protect).'
};

var ENCRUZILHADAS = [
  { k: 'Tonight', h: 'If you are tired tonight, what will you do?', ex: 'If I am tired, I will order pizza and sleep early.' },
  { k: 'The weekend', h: 'What will you do this weekend, unless it rains?', ex: 'I will go to the beach, unless it rains.' },
  { k: 'A big offer', h: 'If a company in another country offers you a job, will you go?', ex: 'If the money is good, I will go!' },
  { k: 'Your phone', h: 'What will happen if you leave your phone at home tomorrow?', ex: 'If I leave it at home, I will be very nervous all day.' },
  { k: 'As soon as', h: 'What will you do as soon as you get home today?', ex: 'As soon as I get home, I will take a shower.' },
  { k: 'English', h: 'What will happen if you practice English every day?', ex: 'If I practice every day, I will speak better next year.' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>If</b> + present, <b>will</b> + verb<br><b>Unless</b> = if … not (no second not)<br><b>When / as soon as</b> + present<br>Never <b>will</b> after if, unless, when';
/* III · antes: True or Lie sobre o que você já sabe do Anel (sem ▶: ainda não tem vídeo) */
var VD_VL = { formato: 'verdadeOuMentira', titulo: 'Before you watch: true or lie? If it’s a lie, say the truth.', itens: [
  { f: 'Sauron made one Ring to control all the others.', t: 1 },
  { f: 'Frodo is an elf.', t: 0, c: 'Frodo is a hobbit.' },
  { f: 'The Ring can be used for good.', t: 0, c: 'The Ring can’t be used and can’t be hidden.' },
  { f: 'The Council sits at a round table in Rivendell.', t: 1 }
] };
/* III · durante: a palavra que completa, cada uma no minuto do prólogo (legenda-dados.js) */
var VD_ESC = { formato: 'escolhe', titulo: 'Tap the word that fits. Tap the time to hear it again.', itens: [
  { p: 'Three rings were given to the …', o: ['Elves', 'Dwarves', 'Men'], c: 0, tm: '0:17' },
  { p: 'Seven were given to the Dwarf …', o: ['Lords', 'Kings', 'Miners'], c: 0, tm: '0:24' },
  { p: 'Nine were gifted to Men, who above all else desire …', o: ['power', 'gold', 'peace'], c: 0, tm: '0:33' },
  { p: 'But they were all of them …', o: ['deceived', 'invited', 'tired'], c: 0, tm: '0:48' },
  { p: 'Sauron forged in secret a master ring to … all others.', o: ['control', 'break', 'hide'], c: 0, tm: '0:58' }
] };
/* III · depois: Choose Your Response (você é o Isildur) */
var VD_REA = { formato: 'reacao', titulo: 'After the prologue: you are Isildur. How do you answer?', quem: 'The voice', fala: 'You stand next to the fire. You have one chance to destroy the Ring forever.', reacoes: [
  ['Throw it in the fire', 'If I throw it in the fire, the world will be safe.', 'Then do it now. Unless you do it now, the Ring will win.'],
  ['Keep it', 'If I keep it, I will be the most powerful king.', 'The Ring will betray you. It has a will of its own.'],
  ['Ask for help', 'If I ask for help, the others will know about it.', 'Unless somebody helps you, you will fail.']
] };
/* V · ligar as duas metades; a regra aparece quando termina */
var VD_LIGA = { formato: 'liga', titulo: 'Match the two halves of each sentence.', pares: [
  ['If the Ring stays here,', 'Sauron will find it.'],
  ['Unless somebody takes it to Mordor,', 'it won’t be destroyed.'],
  ['When we leave,', 'I will protect you.'],
  ['If we fight together,', 'we will win.']
] };
/* VI · quem está falando */
var VD_VOZ = { formato: 'escolhe', titulo: 'Who is speaking? Tap the name, then say the sentence.', itens: VOZES.map(function (v) { return { p: v.p, o: v.o, c: v.c, d: v.d }; }) };
/* VII · A ou B e as palavras para contar */
var VD_AB = { formato: 'ab', a: { t: 'The Plan', d: 'Three questions about tonight and the weekend.<br>1. If you are tired tonight, what will you do?<br>2. What will you do this weekend, unless it rains?<br>3. What will you do as soon as you get home today?', st: ['If …, I will …', 'Unless …', 'As soon as …'] },
  b: { t: 'The Choices', d: 'Three questions about big decisions.<br>1. If a company in another country offers you a job, will you go?<br>2. What will happen if you leave your phone at home tomorrow?<br>3. What will happen if you practice English every day?', st: ['If …, I will …', 'I won’t …', 'When …'] } };
var VD_USA = { formato: 'usa', titulo: 'Answer the three questions. Tap each word when you use it.', palavras: ['If … will', 'Unless …', 'As soon as …', 'When …', 'I won’t …'], fim: 'All five. Now the teacher answers the other three.' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, cs: { n: 0, esc: -1 } };

/* a linha do vídeo: cada momento do prólogo é um fotograma, com a minutagem e o nome da cena */
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
  return '<div class="lr-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a mesa redonda vista de cima: oito cadeiras, o Anel no centro; quem já falou acende e um fio de ouro liga a cadeira ao Anel; no fim o Anel vai até o Frodo */
function mesa(luz, ultima) {
  var N = VOZES.length, n = luz.filter(Boolean).length, fim = n >= N, cx = 200, cy = 200, R0 = 150, P = 360 / N;
  var pos = VOZES.map(function (v, i) { var a = (i * P - 90) * Math.PI / 180; return [cx + R0 * Math.cos(a), cy + R0 * Math.sin(a)]; });
  var fios = '', cad = '';
  VOZES.forEach(function (v, i) {
    var p = pos[i], feita = luz[i], cls = feita ? (i === ultima ? ' fala novo' : ' fala') : '';
    if (feita) fios += '<line class="lr-fio' + (i === ultima ? ' novo' : '') + '" x1="' + p[0].toFixed(1) + '" y1="' + p[1].toFixed(1) + '" x2="' + cx + '" y2="' + cy + '"/>';
    var co = Math.cos((i * P - 90) * Math.PI / 180), si = Math.sin((i * P - 90) * Math.PI / 180), anc = co > .3 ? 'start' : co < -.3 ? 'end' : 'middle';
    var tx = cx + (R0 + 26) * co, ty = cy + (R0 + 26) * si + (anc === 'middle' ? (si < 0 ? -4 : 12) : 0);
    cad += '<g class="lr-cad' + cls + '"><rect x="' + (p[0] - 17).toFixed(1) + '" y="' + (p[1] - 17).toFixed(1) + '" width="34" height="34" rx="8" transform="rotate(' + (i * P) + ' ' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ')"/>'
      + '<text x="' + tx.toFixed(1) + '" y="' + (ty + 4).toFixed(1) + '" text-anchor="' + anc + '">' + v.quem + '</text></g>';
  });
  var fp = pos[N - 1], anel = fim ? 'style="--dx:' + (.66 * (fp[0] - cx)).toFixed(1) + 'px;--dy:' + (.66 * (fp[1] - cy)).toFixed(1) + 'px"' : '';
  return '<div class="lr-roda vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Council: ' + n + ' of ' + N + ' voices heard"><svg class="lr-svg" viewBox="-40 -10 480 420" aria-hidden="true">'
    + '<circle class="lr-tampo" cx="200" cy="200" r="118"/><circle class="lr-friso" cx="200" cy="200" r="108"/>' + fios + cad
    + '<g class="lr-anel' + (fim ? ' vai' : '') + '"' + (anel ? ' ' + anel : '') + '><circle cx="200" cy="200" r="15"/><circle class="lr-brilho" cx="200" cy="200" r="22"/></g></svg>'
    + '<p class="lr-legenda">' + (fim ? 'Six voices heard. The Ring goes to the smallest of them all.' : n + ' of ' + N + ' voices heard') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B1 · first conditional · if, unless, when</span><h1>Unless Somebody Goes</h1>'
    + '<p class="banda">' + FILME + ' · The Fellowship of the Ring</p>'
    + '<p class="sub">Elves, Dwarves, Men, a wizard and four hobbits sit around one stone table, with one Ring in the middle. Nobody can use it, nobody can hide it. Tonight you give every voice the floor, one if at a time, until the Council decides who goes.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take your seat</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r lr-foto"><img src="' + img('capa') + '" alt="A hidden elven valley at dusk with waterfalls and lit stone houses among autumn trees"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="lr-encarte vd"><div class="lr-capinha"><img src="' + img('fogo') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The fire where it was made</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="lr-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Nobody wants to carry the Ring. What will happen if nobody goes?</h2></div>' + mostra('enc', 'If nobody goes, Sauron will find the Ring, and the world will fall.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_VL) + '</div>'
    + '<div class="lado-l"><div class="lr-selo vd"><b>' + FILME + '</b><small>the opening of the film · an old battle, no blood · about four minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the prologue now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="lr-video"><div class="lr-vcol">' + iframe(YT, FILME + ' · prologue', '&start=0&end=236') + '<small class="lr-cred">' + FILME + ' · the prologue (Warner Bros.) · it stops at 3:56 · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the prologue</button></div></div></div>';
  else corpo = '<div class="lr-centro">' + FM.ex('rea', VD_REA) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="lr-video"><div class="lr-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="lr-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="lr-sentido">' + x.sentido + '</span><span class="lr-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="lr-centro"><p class="lr-dica">Tap a frame to open that moment of the prologue.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).lg, pronta = !!e && VD_LIGA.pares.every(function (p, i) { return e.par && e.par[i] === i; });
  return cab(c) + '<div class="lr-centro">' + FM.ex('lg', VD_LIGA)
    + (pronta ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra(PRESA, 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Match all four and the rule appears.</p>') + '</div>';
};

R.conselho = function (c) {
  var e = (S.fq || {}).voz, r = (e && e.r) || {};
  var luz = VOZES.map(function (v, i) { return r[i] === v.c; });
  var antes = S.csluz || [], nova = -1;
  luz.forEach(function (x, i) { if (x && !antes[i]) nova = i; });
  if (nova >= 0) S.csult = nova;
  S.csluz = luz;
  var pronta = luz.every(Boolean);
  return cab(c) + comPlaca('<div class="lr-mesa"><div class="lado-l">' + mesa(luz, S.csult == null ? -1 : S.csult) + '</div><div class="lado-l">' + FM.ex('voz', VD_VOZ)
    + (pronta ? '<p class="aprova">Every voice was heard, and the smallest one stood up. Now you are the Council: say what will happen if Frodo goes, and what will happen unless he does.</p>' : '') + '</div></div>', PRESA);
};

R.escolhas = function (c) {
  return cab(c) + comPlaca(FM.ex('ab', VD_AB) + FM.ex('us', VD_USA), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="lr-centro"><p class="lr-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Die of Choices', t: 'Before the film: what will you do if…?', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Choices', semente: 23,
  itens: [
    { q: 'If it rains this weekend, what will you do?', ex: 'If it rains, I will stay home and watch a movie.' },
    { q: 'What will you do tonight, unless you are too tired?', ex: 'I will go to the gym, unless I am too tired.' },
    { q: 'If you get a free day next week, where will you go?', ex: 'If I get a free day, I will go to the mountains.' },
    { q: 'What will happen if you don’t sleep tonight?', ex: 'If I don’t sleep, I will be terrible at work.' },
    { q: 'Who will you call first if you get great news?', ex: 'If I get great news, I will call my mother.' },
    { q: 'What won’t you do unless someone pays you?', ex: 'I won’t sing in public unless someone pays me!' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Can the smallest person do the biggest job?', p: 'Choose a side. The teacher takes the other one. Use if / unless + present and will.',
  frase: 'The smallest person can do the biggest job.',
  a: { rot: 'Yes, they can', motivos: ['If nobody expects you, nobody will stop you.', 'If you are small, you will be careful.', 'A hobbit will go far, unless he gives up.'] },
  b: { rot: 'No, they can’t', motivos: ['If the job is huge, you will need power.', 'Unless you have help, you will fail.', 'If you are weak, the Ring will win.'] },
  frases: ['If…, … will…', 'Unless…, …', 'I see your point, but…'] };
/*FIM@@*/
