/* ============================================================
   TOY STORY 5 · THE ATTIC BOX · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · wish / if only: o tempo dá um passo atrás. wish + passado
   (agora: I wish she played with me, I wish I were new), wish + had +
   particípio (já passou: if only she hadn’t left me), wish + would (o
   hábito de outra pessoa: I wish that tablet would stop), wish + could
   (uma capacidade), e hope para o que ainda pode acontecer.
   Erros: presente depois de wish (I wish she plays), will depois de wish,
   I wish I would, passado simples onde já passou (if only she didn’t
   leave → hadn’t left), if only + would have, would / could + passado,
   wish + can, wish onde é hope, hope + passado.
   Catálogo WOLFLIX Live (07/10): família ANIMAÇÃO, modo SESSÃO.
   A tela forte: a caixa de doação no sótão. Uma caixa de papelão aberta
   e oito brinquedos esquecidos (desenhos simples, nenhum personagem do
   filme). Cada desejo certo faz um brinquedo aparecer na borda da caixa
   e escreve o desejo dele numa etiqueta pendurada, à mão. No fim, a luz
   da janelinha do sótão cai sobre a caixa inteira.
   O AQUECIMENTO (aquece.js): o dado dos desejos. O FECHAMENTO
   (final.js): o debate, brinquedo ou tablet.
   O VÍDEO: c51ND9Hdbw0 (trailer oficial Disney/Pixar, 2:24, idade 0,
   embed sim). Para a família toda. Falas conferidas na legenda (24/09),
   contadas com palavras nossas.
   A CARA: noite azul de quarto de criança, amarelo do brinquedo; Baloo 2
   no título, Lexend no texto, Gaegu só nas etiquetas. A antiga era a
   sessão de cinema em casa.
   Fila: FILA-LIVE-386.md · 306.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'quarto', rot: 'I · Warm-up and The Attic Box', t: 'Before the trailer: your wishes, then the toys’ wishes.', p: 'Answer three questions about your life. Then open the attic box one thing at a time and say what each toy wishes.' },
  { k: 'palavras', est: 'l', img: 'capa', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'capa', rot: 'III · The Trailer', t: 'Toy Story 5. The official trailer.', p: 'Answer first. Watch the trailer. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'caixa', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'gx', est: 'f', min: 4, img: 'sotao', rot: 'V · Back, Now, Habit', t: 'Where does each wish live?', p: 'Tap a wish, then its place on the line. Notice the verbs. Then say three wishes about you.' },
  { k: 'regra', est: 'f', min: 6, img: 'quarto', rot: 'VI · I Wish, If Only', t: 'An old toy writes a note. Find the pattern.', p: 'Read the note out loud. Tap the wishes. Then finish the rule.' },
  { k: 'caixa', est: 'o', min: 7, img: 'caixa', rot: 'VII · The Attic Box', t: 'Four toys in the box. Choose how you answer each one.', p: 'Read what the toy says. Pick your answer. Then say the talk out loud.' },
  { k: 'desejos', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'VIII · Your Wishes', t: 'Six wishes from your own life.', p: 'Spin for a question. Answer with I wish / If only / I hope.' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'IX · The Debate', t: 'The debate.', p: 'Debate.' }
];

var FILME = 'Toy Story 5', ANO = '2026';
var YT = 'c51ND9Hdbw0', DUR = 144;

var ENCARTE = [
  ['The film', '<i>Toy Story 5</i> (2026), Disney and Pixar. Woody, Buzz, Jessie and the others are back, with Bonnie, the girl who plays with them now.'],
  ['The problem', 'A package arrives for Bonnie: Lilypad, a talking tablet. Soon there is screen time, and less play time. The toys feel forgotten.'],
  ['The question', 'Woody sees more and more abandoned toys every day. Toys are for play, someone says, but tech is for everything. Does Bonnie still need them?']
];

var ANTES = [
  { q: 'What was your favorite toy as a child? Where is it now?', h: 'My favorite toy was … Now it is …' },
  { q: 'How much time do kids you know spend on screens?', h: 'They spend about … hours …' }
];
var DEPOIS = [
  { q: 'What does Jessie wish? What does Woody wish?', h: 'Jessie wishes Bonnie … Woody wishes …' },
  { q: 'Do you wish you had grown up with tablets, or without them?', h: 'I wish I had … / I’m glad I didn’t …' }
];

var TRECHOS = [
  { k: 'The wedding', ini: 0, fim: 15, ouvir: 'What game is Bonnie playing?', sentido: 'Bonnie plays a wedding with her toys: Forky marries a little knife, and Jessie says the words.', gram: 'Jessie <b>wishes</b> every day <b>were</b> like this.' },
  { k: 'A package', ini: 15, fim: 40, ouvir: 'What arrives for Bonnie?', sentido: 'A package arrives: Lilypad, a tablet that talks and wants to play. Rex panics. Then Dad says screen time is over.', gram: 'Rex <b>wishes</b> the box <b>had</b>n’t <b>come</b>.' },
  { k: 'Always listening', ini: 40, fim: 58, ouvir: 'What does the tablet say?', sentido: 'Someone says the tablet isn’t even listening. The tablet answers that it is always listening.', gram: 'I <b>wish</b> it <b>would</b> stop listening.' },
  { k: 'Abandoned toys', ini: 58, fim: 80, ouvir: 'What is happening to toys everywhere?', sentido: 'Woody is finding more abandoned toys every day. Toys are for play, but tech is for everything. Jessie feels she is losing Bonnie.', gram: '<b>If only</b> Bonnie <b>played</b> with them more.' },
  { k: 'Make a child happy', ini: 115, fim: 144, ouvir: 'What is the toys’ mission?', sentido: 'Their mission on this planet is to make a child happy. Jessie says Bonnie still needs them. Buzz thinks they don’t believe he can do it.', gram: 'I <b>hope</b> Bonnie <b>remembers</b> them.' }
];

var TRAPS = [
  ['Now: one step back', 'I wish Bonnie plays with me.', 'I wish Bonnie <b>played</b> with me.', 'wish + past (now) · I wish I were'],
  ['Already over', 'If only she didn’t leave me in the box.', 'If only she <b>hadn’t left</b> me in the box.', 'wish / if only + had + participle'],
  ['Would: someone else', 'I wish I would be new.', 'I wish I <b>were</b> new. I wish the tablet <b>would</b> stop.', 'would only for another person’s habit'],
  ['Hope or wish', 'I wish Bonnie comes back tomorrow.', 'I <b>hope</b> Bonnie <b>comes</b> back tomorrow.', 'possible: hope + present']
];

/* a caixa do sótão: o gesto forte */
var BRINQUEDOS = [
  { toy: 'urso', nome: 'The old bear', desejo: 'I wish Bonnie played with me.' },
  { toy: 'robo', nome: 'The robot', desejo: 'I wish I were new.' },
  { toy: 'dino', nome: 'The dinosaur', desejo: 'If only she hadn’t left me.' },
  { toy: 'boneca', nome: 'The rag doll', desejo: 'I wish that tablet would stop.' }
];
var RECUSA = {
  presente: 'A wish about now goes one step back: wish she played, wish I were, wish she needed.',
  will: 'No will after wish: I wish she played.',
  wouldeu: 'Not “I wish I would”: use were or could. I wish I were new.',
  pastperf: 'It already happened: had + participle (if only she hadn’t left, if only we had known).',
  would2: 'If only + had + participle, no would.',
  base: 'After would / could: the base verb (would stop, could fly).',
  can: 'Wish + could, not can.',
  hope: 'A real possibility: hope + present (I hope she comes).',
  hope2: 'Hope + present for the future: I hope she comes.',
  would3: 'Need is a state: wish + past (still needed), not would.'
};

var MEUS = [
  { k: 'Time', h: 'What do you wish you had more of?', ex: 'I wish I had more time for my family.' },
  { k: 'A skill', h: 'What do you wish you could do?', ex: 'I wish I could play the piano.' },
  { k: 'A habit', h: 'What do you wish someone would stop doing?', ex: 'I wish my neighbor would stop playing loud music.' },
  { k: 'The past', h: 'What do you wish you had done as a child?', ex: 'I wish I had learned to swim.' },
  { k: 'A toy', h: 'Which old toy do you wish you still had?', ex: 'If only I still had my red bike!' },
  { k: 'This week', h: 'What do you hope happens this week?', ex: 'I hope it doesn’t rain on Saturday.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, ts: { n: 0, esc: -1 } };

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
  return '<div class="ts-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'I wish she <b>played</b> · I wish I <b>were</b><br>If only she <b>hadn’t left</b><br>I wish it <b>would</b> stop<br>I <b>hope</b> she comes back';
/* III · antes: adivinhe o que chega para a Bonnie */
var VD_REV = { formato: 'revela', titulo: 'Before you watch · guess what arrives for Bonnie', pistas: [
  'It comes in a package.', 'It is for Bonnie, not for the toys.', 'It talks, and it wants to play.', 'It has a screen.'
], resposta: 'A talking tablet. Its name is Lilypad.', mais: 'Next clue', botao: 'I know it! Show' };
/* III · durante: a palavra que você ouviu e quem fala, cada um no minuto do trailer (legenda-dados.js) */
var VD_SOM = { formato: 'som', itens: [
  { a: 'There’s a ', par: ['passage', 'package'], c: 1, b: ' for you.', t: '0:16' },
  { a: 'Bonnie, screen ', par: ['time', 'team'], c: 0, b: '’s over now.', t: '0:28' },
  { a: 'We’re finding more ', par: ['abundant', 'abandoned'], c: 1, b: ' toys each day.', t: '0:57' },
  { a: 'The mission is to make a child ', par: ['happy', 'hungry'], c: 0, b: '.', t: '1:57' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'Who says it? Tap the answer.', itens: [
  { p: '“Screen time’s over now.”', tm: '0:28', o: ['Dad', 'Woody', 'The tablet'], c: 0, d: 'Dad ends the tablet time.' },
  { p: '“I’m always listening.”', tm: '0:42', o: ['Rex', 'The tablet', 'Jessie'], c: 1, d: 'The tablet answers: it never stops.' },
  { p: '“Toys are for play, but tech is for everything.”', tm: '1:05', o: ['Jessie', 'Woody', 'Bonnie'], c: 1, d: 'Woody says it to Jessie.' },
  { p: '“Bonnie still needs us.”', tm: '2:03', o: ['The tablet', 'Dad', 'Jessie'], c: 2, d: 'Jessie still has hope.' }
] };
/* III · depois: duas réguas */
var RG1 = { formato: 'regua', titulo: 'After the trailer · 1', frase: '“Toys are for play, but tech is for everything.”', esquerda: 'Disagree', direita: 'Agree', depois: 'Say why: I wish … / If only … / I hope …' };
var RG2 = { formato: 'regua', titulo: 'After the trailer · 2', frase: 'Do you wish you had grown up with tablets?', esquerda: 'No, I’m glad I didn’t', direita: 'Yes, I wish I had', depois: 'Say why: I wish I had … / I’m glad I didn’t …' };
/* V · o bilhete do ursinho → a regra */
var CARTA = { de: 'A note from the old bear · found in the attic box',
  txt: 'Dear Bonnie, I wish you [[played]] with me like before. I wish I [[were]] new again. I wish I [[could]] help you. If only you [[hadn’t put]] me in the box! I wish the tablet [[would stop]] talking all day. But I [[hope]] you come back tomorrow.',
  assina: 'The old bear' };
var REGRA = [
  { a: 'I wish she ', par: ['played', 'plays'], c: 0, b: ' with me. (now: one step back)' },
  { a: 'I wish I ', par: ['am', 'were'], c: 1, b: ' new.' },
  { a: 'If only she ', par: ['hadn’t left', 'didn’t leave'], c: 0, b: ' me here. (it already happened)' },
  { a: 'I wish the tablet ', par: ['stops', 'would stop'], c: 1, b: ' talking. (another one’s habit)' },
  { a: 'I ', par: ['hope', 'wish'], c: 0, b: ' she comes back tomorrow. (it can still happen)' }
];
/* VI · a caixa: quatro conversas, a reação muda o que o brinquedo responde */
var CX = [
  { k: 'cx1', titulo: 'Toy 1 · The old bear', quem: 'Bear', fala: '“Bonnie doesn’t play with me anymore.”', reacoes: [
    ['Cheer him up', 'I wish Bonnie played with you more. I’m sure she misses you.', 'Thanks. I wish she remembered me.'],
    ['Be honest', 'I wish I could say she’ll come back, but I’m not sure.', 'Me too. I hope she does.'],
    ['Make a plan', 'I hope we find a way. I wish we were in her room now.', 'That would be wonderful!']] },
  { k: 'cx2', titulo: 'Toy 2 · The robot', quem: 'Robot', fala: '“I’m so old now. I wish I were new again.”', reacoes: [
    ['Be kind', 'I wish you were new too, but I like you the way you are.', 'That makes me feel better.'],
    ['Make a joke', 'If only we had a shiny new battery!', 'Ha! If only…'],
    ['Look back', 'I wish we had more time together, before the box.', 'Me too. We were a good team.']] },
  { k: 'cx3', titulo: 'Toy 3 · The dinosaur', quem: 'Dino', fala: '“She put me in the box last summer. It was a mistake.”', reacoes: [
    ['Agree', 'If only she hadn’t put you here. If only we had known.', 'I wish I hadn’t been so loud.'],
    ['Comfort him', 'Don’t worry. I hope she opens the box tomorrow.', 'Do you really think so?'],
    ['Blame the tablet', 'I wish that tablet would stop talking all day. If only it hadn’t arrived!', 'Me too. It never sleeps.']] },
  { k: 'cx4', titulo: 'Toy 4 · The rag doll', quem: 'Doll', fala: '“Can you hear the tablet downstairs? It never stops.”', reacoes: [
    ['Complain', 'I wish it would stop. I wish she turned it off at night.', 'That would help us all.'],
    ['Dream', 'I wish I could tell her we still need her.', 'Say it loud. Maybe she will hear us.'],
    ['Stay hopeful', 'I hope Bonnie remembers us. Toys are for play.', 'I hope so too.']] }
];
/* VII · a roleta dos desejos */
var ROLETA = { formato: 'sorteio', titulo: 'Spin for a question', opcoes: ['What do you wish you had more of?', 'What do you wish you could do?', 'What do you wish someone would stop doing?', 'What do you wish you had done as a child?', 'Which old toy do you wish you still had?', 'What do you hope happens this week?'], botao: 'Spin' };
var CRONO = { formato: 'cronometro', titulo: 'Thirty seconds to answer', texto: 'I wish … / If only … / I hope …', segundos: 30 };

/* os brinquedos: silhuetas simples, nenhum personagem do filme */
var FORMAS = {
  urso: '<circle cx="0" cy="-14" r="11"/><circle cx="-9" cy="-23" r="4.5"/><circle cx="9" cy="-23" r="4.5"/><ellipse cx="0" cy="6" rx="12" ry="13"/>',
  robo: '<rect x="-10" y="-26" width="20" height="16" rx="3"/><rect x="-12" y="-8" width="24" height="22" rx="3"/><line x1="0" y1="-26" x2="0" y2="-32"/><circle cx="0" cy="-33" r="2"/>',
  dino: '<path d="M-16 12 C-16 -4 -4 -10 6 -10 L10 -24 C14 -28 20 -26 20 -20 L16 -8 C18 0 16 12 10 12 Z"/>',
  boneca: '<circle cx="0" cy="-18" r="9"/><path d="M-12 14 L-6 -8 L6 -8 L12 14 Z"/><path d="M-9 -24 C-12 -18 -12 -12 -10 -8 M9 -24 C12 -18 12 -12 10 -8"/>',
  carro: '<rect x="-18" y="-6" width="36" height="12" rx="4"/><path d="M-10 -6 L-6 -16 L8 -16 L12 -6 Z"/><circle cx="-10" cy="8" r="5"/><circle cx="10" cy="8" r="5"/>',
  foguete: '<path d="M0 -32 C8 -22 8 -2 6 10 L-6 10 C-8 -2 -8 -22 0 -32 Z"/><path d="M-6 2 L-14 14 L-6 10 Z M6 2 L14 14 L6 10 Z"/><circle cx="0" cy="-12" r="3"/>',
  bola: '<circle cx="0" cy="-2" r="15"/><path d="M-15 -2 H15 M0 -17 C-7 -8 -7 4 0 13"/>',
  chapeu: '<path d="M-22 4 C-14 10 14 10 22 4 C14 -2 12 -2 10 -4 L8 -18 C4 -22 -4 -22 -8 -18 L-10 -4 C-12 -2 -14 -2 -22 4 Z"/>'
};
/* a caixa no sótão: os brinquedos que já desejaram aparecem na borda, com a etiqueta escrita à mão */
function caixa(feitas, atual, nova) {
  var N = BRINQUEDOS.length, fim = feitas >= N;
  var ts = BRINQUEDOS.map(function (b, i) {
    var x = 70 + i * 86, fora = i < feitas, cls = fora ? (nova && i === feitas - 1 ? ' fora novo' : ' fora') : (i === atual ? ' vez' : '');
    return '<g class="ts-toy' + cls + '" transform="translate(' + x + ' ' + (fora ? 104 : 168) + ')">' + FORMAS[b.toy] + '</g>';
  }).join('');
  var tags = BRINQUEDOS.map(function (b, i) { return i < feitas ? '<li class="' + (nova && i === feitas - 1 ? 'novo' : '') + '"><small>' + b.nome + '</small><span>' + b.desejo + '</span></li>' : ''; }).filter(Boolean).reverse().slice(0, 2).join('');
  return '<div class="ts-sotao vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The attic box: ' + feitas + ' of ' + N + ' toys back at the edge">'
    + '<svg class="ts-svg" viewBox="0 0 400 210" aria-hidden="true"><path class="ts-telhado" d="M0 74 L200 2 L400 74"/><circle class="ts-janela" cx="340" cy="40" r="16"/><path class="ts-raio" d="M330 52 L120 200 L330 200 Z" style="opacity:' + (.04 + .14 * feitas / N).toFixed(2) + '"/>'
    + '<g class="ts-dentro">' + ts + '</g>'
    + '<path class="ts-aba" d="M30 120 L10 96 L60 108 Z"/><path class="ts-aba" d="M370 120 L392 98 L340 108 Z"/><rect class="ts-cx" x="30" y="120" width="340" height="76" rx="3"/><path class="ts-fita" d="M30 138 H370"/></svg>'
    + '<ul class="ts-tags">' + (tags || '<li class="vazio"><span>Four toys, forgotten in a box. What do they wish?</span></li>') + '</ul>'
    + '<p class="ts-legenda">' + (fim ? 'Every toy is back in the light.' : feitas + ' of ' + N + ' toys back at the edge of the box') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · wish, if only · one step back in time</span><h1>If Only</h1>'
    + '<p class="banda">' + FILME + ' · Disney Pixar</p>'
    + '<p class="sub">A tablet arrives, screen time starts, and the toys end up in a box in the attic. Tonight you open the box and let each toy say what it wishes: I wish she played with me. If only she hadn’t left me here.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the box</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r ts-foto"><img src="' + img('capa') + '" alt="A dusty attic with an open cardboard box of old toys under a small round window"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="ts-encarte vd"><div class="ts-capinha"><img src="' + img('quarto') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>Bonnie’s room, at night</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="ts-centro"><div class="pergunta vd ja"><small>Talk</small><h2>The toys feel forgotten. What do you think they wish?</h2></div>' + mostra('enc', 'They wish Bonnie played with them like before. If only the tablet hadn’t arrived!', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('rev', VD_REV) + '</div>'
    + '<div class="lado-l"><div class="ts-selo vd"><b>' + FILME + '</b><small>the official trailer · for the whole family · about two and a half minutes</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the trailer now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="ts-video"><div class="ts-vcol">' + iframe(YT, FILME + ' · trailer') + '<small class="ts-cred">' + FILME + ' · official trailer (Disney Pixar) · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('som', VD_SOM) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the trailer</button></div></div></div>';
  else corpo = '<div class="mesa-c">' + FM.ex('rg1', RG1) + FM.ex('rg2', RG2) + '</div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="ts-video"><div class="ts-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="ts-cred">' + Math.floor(x.ini / 60) + ':' + ('0' + x.ini % 60).slice(-2) + ' to ' + Math.floor(x.fim / 60) + ':' + ('0' + x.fim % 60).slice(-2) + ' · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="ts-sentido">' + x.sentido + '</span><span class="ts-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="ts-centro"><p class="ts-dica">Tap a frame to open that moment of the trailer.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { toque: 'Tap the wishes in the note', pronta: 'The rule is ready. It stays in the corner on the next page.' });
};

R.caixa = function (c) {
  var q = S.fq || {}, feitas = CX.filter(function (x) { return q[x.k] && q[x.k].r >= 0; }).length;
  var fim = feitas >= CX.length ? '<div class="fm-cena fm-fim"><p>All four toys are back in the light. Now be Bonnie, grown up, finding the box: say two wishes and one hope.</p></div>' : '';
  return cab(c) + comPlaca('<div class="fm-obj">' + caixa(feitas, feitas < CX.length ? feitas : -1, 0) + '</div><div class="mesa-c">' + CX.map(function (x) { return FM.ex(x.k, { formato: 'reacao', titulo: x.titulo, quem: x.quem, fala: x.fala, reacoes: x.reacoes }); }).join('') + '</div>' + fim, PRESA);
};

R.desejos = function (c) {
  return cab(c) + comPlaca('<div class="mesa-c"><div class="lado-l">' + FM.ex('rol', ROLETA) + '</div><div class="lado-l">' + FM.ex('cro', CRONO) + '</div></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="ts-centro"><p class="ts-dica">The debate.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'dado', rot: 'I · The Die of Wishes', t: 'Before the trailer: what do you wish?', p: 'Tap the die and answer. Then the teacher answers.', rotulo: 'Wishes', semente: 31,
  itens: [
    { q: 'What do you wish you had more of?', ex: 'I wish I had more time.' },
    { q: 'Which toy do you wish you still had?', ex: 'I wish I still had my red bike.' },
    { q: 'What do you wish someone would stop doing?', ex: 'I wish my neighbor would stop playing loud music.' },
    { q: 'What do you wish you could do?', ex: 'I wish I could play the guitar.' },
    { q: 'What do you wish you had done as a child?', ex: 'I wish I had learned to swim.' },
    { q: 'What do you hope happens this week?', ex: 'I hope it doesn’t rain on Saturday.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'debate', rot: 'VIII · The Debate', t: 'Should children play with toys, not tablets?', p: 'Choose a side. The teacher takes the other one. Use I wish / If only / I hope.',
  frase: 'Children today should play with toys, not tablets.',
  a: { rot: 'Yes, they should', motivos: ['If only kids played outside more.', 'I wish parents would put the tablet away.', 'Toys teach you to imagine.'] },
  b: { rot: 'No, it’s not so simple', motivos: ['I wish I had had a tablet as a child!', 'Tablets can teach a lot.', 'If only parents had more time to play.'] },
  frases: ['I wish…', 'If only…', 'I see your point, but…'] };
/*FIM@@*/

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G2 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'linhaTempo', titulo: 'The toys in the attic box. Where does each wish go?',
  marcos: [{ t: 'BEFORE', s: 'it already happened' }, { t: 'NOW', s: 'not true today' }, { t: 'A HABIT', s: 'it keeps happening' }],
  frases: [
    { f: 'If only she hadn’t left the toy in the attic.', c: 0, d: 'had + left · about before' },
    { f: 'I wish I were new.', c: 1, d: 'were · about now' },
    { f: 'I wish that tablet would stop talking.', c: 2, d: 'would · a habit that annoys me' },
    { f: 'If only I hadn’t stayed in the box.', c: 0, d: 'had + stayed · about before' },
    { f: 'I wish she played with me.', c: 1, d: 'played · about now' },
    { f: 'I wish the kids would play with me again.', c: 2, d: 'would · somebody else’s habit' }
  ],
  nota: 'A wish takes the verb <b>back</b>. Before: <b>had</b> + the third form. Now: a past form (<b>were</b> for I, he, she). A habit that annoys you: <b>would</b>. Never “I wish she plays”, and never “I wish I would”.',
  uso: { p: 'Your turn. One thing you wish had been different before, one thing you wish were different now, and one habit you wish somebody would stop.', molde: ['If only I had …', 'I wish I were …', 'I wish he would stop …'], ex: 'If only I had saved money. I wish I were taller. I wish my neighbor would stop playing loud music.' },
  prof: 'Let the student place the wishes alone. A wrong place comes back with one tap.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_tempo', GX_EXPLICA); };
