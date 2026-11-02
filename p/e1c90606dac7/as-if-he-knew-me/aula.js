/* ============================================================
   SEVERANCE · THE WELLNESS ROOM · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · as if / as though: o que NÃO é verdade dá um passo atrás
   (as if he knew him, as though she were his friend, as if she had
   never been here); o que parece verdade fica no presente (it looks as
   if the elevator is stuck).
   Erros: presente para o que é falso (as if he knows him), would / will
   depois de as if, passado simples onde é anterior e falso (as if I knew
   her for years → had known), like as if / like if, as if you be,
   particípio errado (had readed), ’s stuck sem be (as if it stuck).
   Catálogo WOLFLIX Live (07/10): família SCI-FI, modo DUBLAGEM.
   A tela forte: a sala de bem-estar da Lumon. Uma sala escura com uma
   poltrona, um quadro de colinas e um abajur. Cada frase certa é um
   “fato de bem-estar” lido em voz calma: o abajur esquenta (do verde
   frio ao âmbar), o quadro ganha cor e o fato aparece no cartão da
   sessão. A 294 (também Severance) era a tela dos números; esta é a
   outra sala do andar.
   O AQUECIMENTO (aquece.js): duas verdades e uma mentira. O FECHAMENTO
   (final.js): a entrevista, o professor é o Mark S.
   O VÍDEO: xEQP4VVuyrY (trailer oficial Apple TV, 2:55, idade 0, embed
   sim). Estranho, não violento. Falas conferidas na legenda (23/09),
   contadas com palavras nossas.
   A CARA: verde-sálvia da Lumon, âmbar do abajur; Gloock no título,
   Figtree no texto.
   Fila: FILA-LIVE-386.md · 303.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas. III: a conversa com a conselheira (escolher como reagir) antes; a
   palavra que você ouviu com ▶; depois, achar a palavra errada com ▶. V: ligar
   o que é verdade à frase com as if (a regra aparece quando tudo está ligado).
   VI: a sala de bem-estar com SEIS fatos, cada um com a fala primeiro. VII (era
   EXTRA, agora essencial): seis cartas, virar e dizer como a pessoa parece.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'sala', rot: 'I · Warm-up and The Interview', t: 'Before the trailer: your two worlds, then a man with two lives.', p: 'Answer three questions about your life. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Severance. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear a line again.' },
  { k: 'falas', est: 'l', img: 'elevador', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'sala', rot: 'V · As If, As Though', t: 'What is true? Match it with the sentence.', p: 'Tap one on the left, then its pair on the right. Then read the rule.' },
  { k: 'sessao', est: 'o', min: 7, img: 'sala', rot: 'VI · The Wellness Session', t: 'Six calm facts. Every one you say warms the room.', p: 'Read the clue. Say the sentence softly. Then tap Check.' },
  { k: 'parece', est: 'o', min: 7, img: 'elevador', rot: 'VII · As If', t: 'Six people. How do they look?', p: 'Tap a card. Say how they look with as if or as though.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · The Interview', t: 'The interview.', p: 'Interview.' }
];

var FILME = 'Severance', ANO = '2022';
var YT = 'xEQP4VVuyrY', DUR = 175;

var ENCARTE = [
  ['The show', '<i>Severance</i> is an Apple TV series (2022), directed by Ben Stiller, with Adam Scott as Mark.'],
  ['The procedure', 'At Lumon Industries, some workers have a chip in their brain. At work, they remember nothing of their life outside. At home, they remember nothing of work. Two people in one body.'],
  ['The room', 'When a worker is upset, he goes to the wellness room. A calm voice reads him nice facts about his “outie”, the person he is outside, as if that were enough.']
];

var ANTES = [
  { q: 'Are you a different person at work and at home? How?', h: 'At work I am … At home I am …' },
  { q: 'Would you like to forget your work when you go home?', h: 'Yes, because … / No, because …' }
];
var DEPOIS = [
  { q: 'How does Mark look when he sees Petey outside? Is it true?', h: 'He looks as if he … but …' },
  { q: 'Would you sign the consent form? Why or why not?', h: 'Never, because … / Maybe, if …' }
];

var TRECHOS = [
  { k: 'You chose to come back', ini: 0, fim: 30, ouvir: 'Who is the man, and where is he?', sentido: 'A voice says: every time you find yourself here, it is because you chose to come back. A man says his name: Mark S.', gram: 'He looks around <b>as if</b> he <b>had</b> never <b>seen</b> the room.' },
  { k: 'Consent', ini: 30, fim: 60, ouvir: 'What does Mark agree to?', sentido: 'He agrees to separate his memories: his work life and his personal life. Then someone asks him to say gratitude.', gram: 'He signs <b>as though</b> it <b>were</b> nothing.' },
  { k: 'No longer with us', ini: 60, fim: 92, ouvir: 'What happened to Petey?', sentido: 'Petey is no longer with the company, and nobody can say why. A handshake is available on request.', gram: 'They talk <b>as if</b> Petey <b>had</b> never <b>existed</b>.' },
  { k: 'Do I know you?', ini: 100, fim: 118, ouvir: 'Who is the stranger in the street?', sentido: 'Outside, a man stops Mark. Mark asks if he knows him. The man says he is Petey, from work, his best friend.', gram: 'Petey talks <b>as if</b> they <b>were</b> best friends.' },
  { k: 'Kind eyes', ini: 118, fim: 165, ouvir: 'What kind of place is the office?', sentido: 'Someone used to think only a monster could put a person in a place like that office. Still, they say: it is important your eyes be kind.', gram: 'It feels <b>as though</b> the office <b>were</b> a prison.' }
];

var TRAPS = [
  ['Not true: one step back', 'He looks at Petey as if he knows him.', 'He looks at Petey <b>as if</b> he <b>knew</b> him.', 'not true now: as if + past'],
  ['Not true before', 'I felt as if I knew her for years.', 'I felt <b>as if</b> I <b>had known</b> her for years.', 'not true, earlier: as if + had + participle'],
  ['No would', 'He talks as if he would know me.', 'He talks <b>as if</b> he <b>knew</b> me.', 'no would after as if'],
  ['Real, you can see it', 'It looks as if the elevator stuck.', 'It looks <b>as if</b> the elevator <b>is</b> stuck.', 'probably true: as if + present']
];

/* a sessão de bem-estar: o gesto forte */
var FATOS = [
  { pista: 'Mark · look at Petey · know him (he doesn’t)', fato: 'Your outie looks at old friends as if he knew them.', resp: 'He looks at Petey <b>as if he knew</b> him.', depois: 'Who looks at you as if they knew you, but they don’t?' },
  { pista: 'she · talk to him · be his friend (she isn’t)', fato: 'Your outie is spoken to as though he were loved.', resp: 'She talks to him <b>as though she were</b> his friend.', depois: 'Who talks to you as though they were your boss?' },
  { pista: 'Helly · act · never be here before (she has)', fato: 'Your outie walks in as if she had never been here.', resp: 'Helly acts <b>as if she had never been</b> here before.', depois: 'Have you ever acted as if you had never been somewhere?' },
  { pista: 'it · look · the elevator · be stuck (it probably is)', fato: 'Your outie is patient in elevators.', resp: 'It looks <b>as if</b> the elevator <b>is</b> stuck.', depois: 'Look out of the window. What does it look as if is going to happen?' },
  { pista: 'smile · be happy (you aren’t) · an order', fato: 'Your outie smiles generously.', resp: 'Smile <b>as if you were</b> happy.', depois: 'When do you have to smile as if you were happy?' },
  { pista: 'I · feel · know her for years (I didn’t)', fato: 'Your outie remembers someone you don’t.', resp: 'I felt <b>as if I had known</b> her for years.', depois: 'Have you ever met someone and felt as if you had known them for years?' }
];
var RECUSA = {
  real: 'It is not true: go one step back. as if he knew, as though she were, as if she had been.',
  would: 'No would after as if: as if he knew, as if she had been.',
  will: 'Not true: a past form. as though she were his friend.',
  base: 'Something you can see, probably true: as if + present (the elevator is stuck).',
  like: 'Say as if, not like as if / like if.',
  be: 'Not true: were. as if you were happy.',
  part: 'The participle of read is read: had read.',
  antes: 'Not true, and before that moment: had + participle (as if I had known her).'
};

var PARECES = [
  { k: 'Your boss', h: 'Your boss is smiling a lot today. How does he look?', ex: 'He looks as if he had won the lottery. Maybe he did!' },
  { k: 'A neighbor', h: 'A neighbor talks about your street. How does she talk?', ex: 'She talks as though she owned the whole street.' },
  { k: 'A child', h: 'A child eats a big ice cream. How does he eat?', ex: 'He eats as if he hadn’t eaten for a week.' },
  { k: 'The sky', h: 'The sky is dark and gray. What does it look like?', ex: 'It looks as if it is going to rain.' },
  { k: 'A tourist', h: 'A tourist walks in your city with a map. How does he walk?', ex: 'He walks as if he were lost.' },
  { k: 'You', h: 'Monday morning. How do you feel?', ex: 'I feel as though I hadn’t slept at all.' }
];

/* 23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = '<b>as if / as though</b> + <b>past</b> = not true<br>as if he <b>knew</b> · as though she <b>were</b><br>before that: <b>had</b> + participle (as if I <b>had known</b>)<br>you can see it, probably true: as if + <b>present</b>';
/* III · antes: a conversa com a conselheira */
var VD_REA = { formato: 'reacao', titulo: 'Before you watch: you are at Lumon. How do you answer?', quem: 'Counselor', fala: 'The wellness counselor tells you that you are doing great, and that your outie is very proud of you.', reacoes: [
  ['Say thank you', 'Thank you. I feel as if I had done something good.', 'Good. Now breathe, and smile.'],
  ['Ask a question', 'Who is my outie? I feel as if I had never met him.', 'He knows you well. He talks about you as though you were old friends.'],
  ['Say nothing', 'I look at her as though I did not understand.', 'Take your time. Nobody is in a hurry here.'] ] };
/* III · durante: a palavra que você ouviu, cada uma no tempo do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', titulo: 'Which word did you hear?', itens: [
  { a: 'I give ', par: ['consent', 'content'], c: 0, b: ' to sever my memories.', t: '0:31' },
  { a: 'Say ', par: ['gratitude', 'attitude'], c: 0, b: '.', t: '0:48' },
  { a: 'Non-disclosure policy ', par: ['forbids', 'forgives'], c: 0, b: '.', t: '1:23' },
  { a: 'A handshake is available upon ', par: ['request', 'quest'], c: 0, b: '.', t: '1:29' },
  { a: 'It’s important your eyes be ', par: ['kind', 'mind'], c: 0, b: '.', t: '2:29' }
] };
/* III · depois: uma palavra está errada, com ▶ */
var VD_ERR = { formato: 'erro', titulo: 'After the trailer: one word is wrong. Say the right one.', itens: [
  { f: 'PD is <u>still</u> with this company.', r: 'no longer', t: '1:14' },
  { f: 'A <u>hug</u> is available upon request.', r: 'handshake', t: '1:29' },
  { f: 'I’m your <u>worst</u> friend.', r: 'best', t: '1:52' },
  { f: 'Nothing is what they <u>do</u>.', r: 'say', t: '1:55' },
  { f: 'Do you know how to make your eyes <u>blue</u>?', r: 'kind', t: '2:32' }
] };
/* V · ligar o que é verdade à frase */
var VD_LIGA = { formato: 'liga', titulo: 'What is true? Match it with the sentence.', pares: [
  ['Mark does not know Petey.', 'He looks at Petey as if he <b>knew</b> him.'],
  ['Helly has been here before.', 'Helly acts as if she <b>had</b> never <b>been</b> here.'],
  ['The elevator is probably stuck.', 'It looks as if the elevator <b>is</b> stuck.'],
  ['Mark is not happy.', 'Smile as if you <b>were</b> happy.'],
  ['I met her yesterday.', 'I felt as if I <b>had known</b> her for years.']
] };
/* VII · seis cartas: como a pessoa parece */
var VD_CARTAS = { formato: 'cartas', titulo: 'Six people. Tap a card, then say how they look with as if or as though.', fechada: 'Tap to open', cartas: [
  ['Your boss', 'Your boss is smiling a lot today. How does he look?'],
  ['A neighbor', 'A neighbor talks about your street. How does she talk?'],
  ['A child', 'A child eats a big ice cream. How does he eat?'],
  ['The sky', 'The sky is dark and gray. What does it look like?'],
  ['A tourist', 'A tourist walks in your city with a map. How does he walk?'],
  ['You', 'Monday morning. How do you feel?']
] };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, wl: { n: 0, esc: -1 } };

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
  return '<div class="wl-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a sala de bem-estar: a poltrona, o quadro de colinas que ganha cor e o abajur que esquenta; o último fato lido aparece no cartão da sessão */
function sala(feitas, nova) {
  var fim = feitas >= FATOS.length, f = feitas / FATOS.length;
  var luz = 'rgb(' + Math.round(110 + 114 * f) + ',' + Math.round(150 + 33 * f) + ',' + Math.round(140 - 16 * f) + ')';
  var fato = feitas ? FATOS[feitas - 1].fato : 'The session begins. Breathe, and listen.';
  var pontos = FATOS.map(function (x, i) { return '<i class="' + (i < feitas ? 'ok' : '') + '"></i>'; }).join('');
  return '<div class="wl-sala vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The wellness room: ' + feitas + ' of 6 facts, the lamp grows warmer">'
    + '<svg class="wl-svg" viewBox="0 0 400 210" aria-hidden="true" style="--luz:' + luz + ';--f:' + f.toFixed(2) + '">'
    + '<rect class="wl-parede" width="400" height="210"/><rect class="wl-chao" y="168" width="400" height="42"/>'
    + '<circle class="wl-halo' + (nova ? ' acende' : '') + '" cx="318" cy="70" r="' + (36 + 70 * f).toFixed(0) + '"/>'
    + '<g class="wl-quadro"><rect x="120" y="40" width="130" height="80" rx="2"/><path class="wl-colina" d="M124 116 L160 74 L188 98 L214 66 L246 116 Z"/><path class="wl-colina2" d="M124 116 C150 100 180 104 246 110 L246 116 Z"/></g>'
    + '<g class="wl-poltrona"><rect x="40" y="118" width="62" height="50" rx="12"/><rect x="34" y="132" width="14" height="36" rx="6"/><rect x="94" y="132" width="14" height="36" rx="6"/></g>'
    + '<g class="wl-abajur"><path d="M304 52 L332 52 L340 76 L296 76 Z"/><line x1="318" y1="76" x2="318" y2="166"/><line x1="306" y1="168" x2="330" y2="168"/></g></svg>'
    + '<div class="wl-cartao"><small>Wellness fact ' + (feitas || '·') + '</small><p class="' + (nova ? 'novo' : '') + '">' + fato + '</p><div class="wl-pontos">' + pontos + '</div></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · as if, as though · real and not real</span><h1>As If He Knew Me</h1>'
    + '<p class="banda">' + FILME + ' · Apple TV</p>'
    + '<p class="sub">At Lumon, people look at you as if they knew you, and talk as though nothing were wrong. Tonight you sit in the wellness room and say six calm facts, one step back from the truth, until the lamp is warm.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Begin the session</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r wl-foto"><img src="' + img('capa') + '" alt="A long dim corporate corridor with green carpet and a door at the end"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="wl-encarte vd"><div class="wl-capinha"><img src="' + img('sala') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The wellness room</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="wl-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Mark’s innie and outie are strangers. Do you ever feel as if you were two people?</h2></div>' + mostra('enc', 'Yes. At work I talk as if I were very calm, but at home I am not calm at all!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('v0', VD_REA) + '</div>'
    + '<div class="lado-l"><div class="wl-selo vd"><b>' + FILME + '</b><small>the official trailer · strange, not violent · about three minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="wl-video"><div class="wl-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="wl-cred">' + FILME + ' · official trailer (Apple TV) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('v1', VD_SOM) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="wl-centro">' + FM.ex('v2', VD_ERR) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="wl-video"><div class="wl-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="wl-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="wl-sentido">' + x.sentido + '</span><span class="wl-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="wl-centro"><p class="wl-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  /* a regra aparece quando as cinco frases estão ligadas */
  var e = (S.fq && S.fq.rg) || { par: {} }, feitos = 0;
  VD_LIGA.pares.forEach(function (p, i) { if (e.par[i] === i) feitos++; });
  var liga = FM.ex('rg', VD_LIGA);
  return cab(c) + (feitos === VD_LIGA.pares.length ? comPlaca(liga, PRESA) : liga);
};

R.sessao = function (c) {
  return cab(c) + '<div class="fm-lado2">' + FM.ex('ss', { formato: 'fala', rotulo: 'Fact', regra: PRESA,
    lado: function (f, a, v) { return sala(f, v && a >= 0 ? 1 : 0); },
    fim: 'The lamp is warm and the session is over. Now tell the teacher three wellness facts about your own outie, with as if.',
    itens: FATOS.map(function (x) { return { pista: x.pista, resp: x.resp, depois: x.depois }; }) }) + '</div>';
};

R.parece = function (c) {
  return cab(c) + comPlaca(FM.ex('pc', VD_CARTAS), PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="wl-centro"><p class="wl-dica">The interview.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'mentira', rot: 'I · Two Truths and a Lie', t: 'Before the trailer: your work self, and a lie.', p: 'The teacher reads three sentences. Two are true. Which one is the lie?',
  q: 'The teacher’s three sentences about work and home. One is a lie. Which one?',
  frases: ['At work I talk as if I were very serious.', 'I talk to my plants as if they were people.', 'Once I slept at the office, as if it were my home.'], mentira: 2,
  depois: 'Now you: say two true sentences and one lie with “as if”. The teacher finds the lie.',
  ex: 'I drive as if I were in a race. I eat as if I hadn’t eaten for days. I dance as if I were a professional.' };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'entrevista', rot: 'VIII · The Interview', t: 'Interview Mark S., the innie.', p: 'The teacher is Mark S., who has never seen the world outside Lumon. Ask how things feel and look to him. Then swap: you are an innie at Lumon.',
  papel: 'Mark S., an innie at Lumon', papel2: 'you, an innie on your first day',
  itens: [
    { q: 'How do you feel when you start work?', ex: 'I feel as if I had just woken up.' },
    { q: 'How does Ms. Cobel look at you?', ex: 'She looks at me as though she knew a secret.' },
    { q: 'Does Petey seem like a stranger to you?', ex: 'No. He talks as if he were my best friend.' },
    { q: 'What does the outside world feel like?', ex: 'It feels as if it didn’t exist.' },
    { q: 'Do you act happy at work?', ex: 'I smile as if I were happy. It’s not as if I had a choice.' }
  ] };
/*FIM@@*/
