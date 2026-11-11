/* ============================================================
   BEAT THE BLANK · THE DETOUR · LIVE CLASS  06/10/2026
   Main series B1 · circunlocução: quatro moldes (It's a kind of… · It's
   the thing you use for …-ing · It's when you… · It's like…, but…), a
   junta no meio (that / who / where / whose / nada), comprar tempo em
   inglês (Well… · You know when you…), a porta lateral (mudar a frase).
   Erros universais: parar e perguntar "how do you say…?", silêncio,
   trocar de língua, "the thing for open", "a person who his job…".
   O MUNDO (da aula velha): quatro objetos na mesa e uma sensação que o
   aluno não sabe nomear (só ganham nome na última cena); três falantes
   fluentes contornando palavras; cinco jeitos de ganhar tempo; as
   cartas proibidas. 15 áudios conferidos no whisper em 06/10: batem (os
   t1–t5 dizem frases inteiras, que agora estão na transcrição).
   A CARA: o DESVIO — a palavra é a ponte fechada (ROAD CLOSED); os
   quatro moldes são quatro placas de desvio laranja; quem usa um
   molde passa. As cartas proibidas ganham a fita amarela de obra.
   Fila: FILA-LIVE-386.md · 082.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'branco', est: 'o', min: 7, img: 'mesa', rot: 'I · The First Blank', t: 'Four ordinary things on the table, and one feeling. You probably can’t name them in English.', p: 'Describe each one out loud. When nothing comes, tap I GOT STUCK. It costs nothing today.' },
  { k: 'reacao', est: 'l', min: 7, img: 'mesa', rot: 'II · What You Do Now', t: 'Everybody does one of these five when a word disappears.', p: 'Read all five out loud. Which one was yours in scene I? Then listen to three fluent people.' },
  { k: 'gx', est: 'f', min: 4, img: 'fichas', rot: 'III · The Detours in Blocks', t: 'Four detours. Each block has a job.', p: 'Read the blocks out loud. Notice the joint in the middle. Then build a detour and say your own.' },
  { k: 'moldes', est: 'f', min: 6, img: 'fichas', rot: 'IV · The Four Detours', t: 'English goes around a gap with a shape. There are only four.', p: 'Pick the detour that fits. Then say the whole sentence out loud.' },
  { k: 'tempo', est: 'l', min: 7, img: 'cinto', rot: 'V · Buying Time', t: 'Silence in English doesn’t read as thinking. Fill the gap with an English noise.', p: 'Play one. Copy the sound. Then answer a question with it.' },
  { k: 'cartas', est: 'o', min: 7, img: 'fichas', rot: 'VI · The Forbidden Cards', t: 'Six cards. Describe the word without saying it, or any of the forbidden words.', p: 'Your teacher guesses and watches the forbidden words. Every detour scores a point.' },
  { k: 'qual', est: 'o', min: 7, extra: 1, img: 'fichas', rot: 'VII · Which One Am I?', t: 'Four things that are almost the same. Pick one in your head.', p: 'Don’t touch the screen. Describe it until your teacher can point at the right one.' },
  { k: 'junta', est: 'l', min: 7, extra: 1, img: 'fichas', rot: 'VIII · The Joint', t: 'Every detour has a small word in the middle. Miss it and the sentence falls over.', p: 'Pick the joint. Then say the whole sentence out loud.' },
  { k: 'verbo', est: 'f', min: 6, extra: 1, img: 'fichas', rot: 'IX · When It’s a Verb', t: 'Going around a thing is easy. Going around a VERB is what really stops people.', p: 'Tap the pieces in order. Then say: “You know when you need…” and the sentence.' },
  { k: 'porta', est: 'o', min: 7, extra: 1, img: 'porta', rot: 'X · The Side Door', t: 'Sometimes the sentence is the problem. Change it, and the hard word disappears.', p: 'Read the hard sentence. Say your easier version. Then compare.' },
  { k: 'semvolta', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'XI · No Take-Backs', t: 'One topic, and the words keep leaving. Going quiet is the only way to lose.', p: 'Pick a topic and talk. Your teacher bans another word whenever they like.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'XII · The First Blank Again', t: 'The same five from scene I. Describe them again. Then they get their names.', p: 'Write a description of three things in your home that you can’t name in English. It goes to your My notes.' }
];

var TR = {
  'c1.mp3': 'So I bought one of those… You know when you need to open a bottle of wine? That thing. It broke the first time I used it.',
  'c2.mp3': 'My neighbor has a… how can I put it? It’s like a small van, but it’s for one person, and he parks it right where the trash cans go.',
  'c3.mp3': 'Well, it’s the thing you use for getting the staples out. Not the stapler, the other one. Honestly, nobody knows what it’s called.',
  'j1.mp3': 'It’s a thing that you use every morning.', 'j2.mp3': 'It’s a thing you use every morning.',
  'n1.mp3': 'A box grater.', 'n2.mp3': 'A staple remover.', 'n3.mp3': 'A shoelace, and the hard tip at the end of it is called an aglet.', 'n4.mp3': 'A doorstop.', 'n5.mp3': 'Pins and needles. That is what English calls it.',
  't1.mp3': 'Well, I’d say it’s the small one on the left.', 't2.mp3': 'Let me think for a second. OK, it’s the one you keep by the door.',
  't3.mp3': 'How can I put it? It’s not exactly a bag. It’s more like a very small suitcase.', 't4.mp3': 'The word is… hold on, hold on, it’ll come to me.',
  't5.mp3': 'You know, when you put the wet clothes in and they come out dry? That machine.'
};

var OBJETOS = [
  { rot: '1', x: 20, y: 52, onde: 'the metal one with the holes. What is it for?' },
  { rot: '2', x: 37, y: 54, onde: 'the small black tool beside it.' },
  { rot: '3', x: 55, y: 56, onde: 'the white one, and the hard tip at the end of it.' },
  { rot: '4', x: 80, y: 52, onde: 'the wedge. It lives behind a door.' },
  { rot: '5', x: 0, y: 0, onde: 'the feeling in your foot after you sit on it too long.', fora: 1 }
];
var REACAO = [
  { t: 'I stop and ask: how do you say…?', ok: 0, custo: 'You hand your sentence to the other person. It stops being yours.' },
  { t: 'I go quiet and wait for the word.', ok: 0, custo: 'Silence doesn’t read as thinking. It reads as: they don’t know this subject.' },
  { t: 'I change the subject.', ok: 0, custo: 'You end up talking about fewer things than you know.' },
  { t: 'I drop the sentence and say something easier.', ok: 0, custo: 'Your idea never arrives.' },
  { t: 'I go around it and keep talking.', ok: 1, custo: 'The conversation keeps moving, and you say MORE because of the word you didn’t have.' }
];
var MOLDES = [['kind', 'IT’S A KIND OF …', 'a category'], ['use', 'IT’S THE THING YOU USE FOR …-ING', 'a tool'], ['when', 'IT’S WHEN YOU …', 'an experience'], ['like', 'IT’S LIKE …, BUT …', 'like something else']];
var RODADAS_M = [
  { coisa: 'jet lag', k: 'when', tb: ['kind'], por: 'Not an object, an experience: it’s when you can’t sleep after a long flight.' },
  { coisa: 'a hammock', k: 'like', tb: ['kind'], por: 'You know a bed: it’s like a bed, but it hangs between two trees.' },
  { coisa: 'a spatula', k: 'use', tb: ['kind'], por: 'Function: it’s the thing you use for turning pancakes.' },
  { coisa: 'a beetle', k: 'kind', tb: [], por: 'The category is enough: it’s a kind of insect.' },
  { coisa: 'homesick', k: 'when', tb: ['like'], por: 'A feeling: it’s when you miss home a lot.' },
  { coisa: 'a scooter', k: 'like', tb: ['kind', 'use'], por: 'It’s like a bike, but you stand on it.' }
];
var COMPRADORES = [
  { t: 'Well…', g: 'half a second', au: 't1.mp3' }, { t: 'Let me think for a second.', g: 'buys three, politely', au: 't2.mp3' },
  { t: 'How can I put it…', g: 'buys three and warns them', au: 't3.mp3' }, { t: 'The word is… hold on.', g: 'keeps the turn yours', au: 't4.mp3' },
  { t: 'You know when you…', g: 'buys time AND starts the description', au: 't5.mp3' }
];
var PERGUNTAS_T = ['What’s the most useless thing you own?', 'Describe your street to somebody who has never been there.', 'What did you have for lunch three days ago?', 'What’s something everybody likes and you don’t?', 'Explain your job to a ten-year-old.'];
var CARTAS = [
  { alvo: 'an umbrella', bane: ['rain', 'open', 'wet'] }, { alvo: 'a pillow', bane: ['bed', 'head', 'sleep'] }, { alvo: 'a lighthouse', bane: ['sea', 'light', 'ship'] },
  { alvo: 'a hiccup', bane: ['stomach', 'drink', 'noise'] }, { alvo: 'a wallet', bane: ['money', 'pocket', 'card'] }, { alvo: 'a traffic jam', bane: ['car', 'street', 'late'] }
];
var QUAL = [
  { fam: 'IN A KITCHEN CUPBOARD', ops: ['a mug', 'a cup', 'a glass', 'a jar'] }, { fam: 'IN A TOOLBOX', ops: ['a hammer', 'a screwdriver', 'a wrench', 'a drill'] },
  { fam: 'WAYS OF WALKING', ops: ['to march', 'to wander', 'to rush', 'to limp'] }, { fam: 'THINGS YOU WEAR TO GO OUT', ops: ['a jacket', 'a coat', 'a hoodie', 'a raincoat'] },
  { fam: 'HOW SOMEBODY FEELS', ops: ['bored', 'tired', 'fed up', 'lazy'] }
];
var JUNTA = [
  { a: 'It’s the person', b: 'cuts your hair.', ok: 'who', ops: ['who', 'that', 'which', 'where'], por: 'A person: who.' },
  { a: 'It’s a place', b: 'you leave your car.', ok: 'where', ops: ['which', 'who', 'when', 'where'], por: 'A place: where.' },
  { a: 'It’s the moment', b: 'a plane leaves the ground.', ok: 'when', ops: ['where', 'when', 'that', 'who'], por: 'A moment: when.' },
  { a: 'It’s a person', b: 'job is to fix water pipes.', ok: 'whose', ops: ['who', 'that', 'whose', 'which'], por: 'Their job: whose.' },
  { a: 'It’s a machine', b: 'washes plates for you.', ok: 'that', ops: ['who', 'whose', 'where', 'that'], por: 'Not a person: that.' },
  { a: 'It’s a thing', b: 'you use every morning.', ok: '—', ops: ['who', 'where', 'whose', '—'], por: 'Nothing! When YOU or I comes next, you can drop it. Listen to both versions.', par: ['j1.mp3', 'j2.mp3'] }
];
var VERBO = [
  { sit: 'Your coffee is too hot. You do this first.', pecas: ['to', 'make', 'it', 'cold', 'with', 'your', 'mouth'], real: 'blow on it' },
  { sit: 'The clean clothes are on the bed. You do this before you put them away.', pecas: ['to', 'make', 'them', 'small', 'and', 'flat'], real: 'fold them' },
  { sit: 'There’s water on the table.', pecas: ['to', 'clean', 'it', 'with', 'a', 'cloth'], real: 'wipe it' },
  { sit: 'You want the juice, and the lemon still has it.', pecas: ['to', 'press', 'it', 'hard', 'with', 'your', 'hand'], real: 'squeeze it' },
  { sit: 'You want to eat the banana, not the outside of it.', pecas: ['to', 'take', 'the', 'skin', 'off'], real: 'peel it' }
];
var PORTA = [
  { dificil: 'He is extremely stubborn.', dica: 'say what he DOES', modelo: 'He never changes his mind.' },
  { dificil: 'I am exhausted.', dica: 'say how much', modelo: 'I’m so tired I can’t think.' },
  { dificil: 'The store is closed for renovation.', dica: 'say what they’re doing', modelo: 'The store is closed because they’re making it new inside.' },
  { dificil: 'She resigned last week.', dica: 'say what she said', modelo: 'She told them she isn’t coming back.' },
  { dificil: 'This is a temporary solution.', dica: 'say for how long', modelo: 'This works for now, not forever.' }
];
var TEMAS = ['your city', 'your morning', 'the last trip you took'];
var BANS = ['the name of the topic itself', 'people', 'big and small', 'good and bad', 'very'];
var NOMES = [{ rot: '1', nome: 'a box grater', au: 'n1.mp3' }, { rot: '2', nome: 'a staple remover', au: 'n2.mp3' }, { rot: '3', nome: 'a shoelace (the tip is an aglet)', au: 'n3.mp3' }, { rot: '4', nome: 'a doorstop', au: 'n4.mp3' }, { rot: '5', nome: 'pins and needles', au: 'n5.mp3' }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  br: { sel: 0, preso: 0 }, re: { esc: -1 }, mo: { n: 0, esc: '' }, tp: { q: 0 }, ct: { n: 0, t: 60, rodando: 0, pontos: 0, ban: 0, feitas: {} }, ql: { n: 0, aponta: -1 }, jt: { n: 0, esc: '' }, vb: { n: 0, pick: [], err: 0 }, pt: { n: 0, viu: {} }, sv: { tema: -1, bans: {} }, fm: { abre: 0 } };

var TIMER = null;
function paraTimer() { if (TIMER) { clearInterval(TIMER); TIMER = null; } }

function desvio(livre, placas) {
  var ps = (placas || ['KIND OF', 'USE FOR', 'WHEN YOU', 'LIKE…BUT']).map(function (p, i) {
    var x = 90 + i * 140;
    return '<g class="placa-d' + (livre === i ? ' on' : '') + '"><path d="M' + x + ' 186 L' + (x + 34) + ' 220 L' + x + ' 254 L' + (x - 34) + ' 220 Z"/><text x="' + x + '" y="224" text-anchor="middle">' + p + '</text></g>';
  }).join('');
  return '<svg class="desvio" viewBox="0 0 600 300" role="img" aria-label="The detour"><rect width="600" height="300" rx="16" class="chao"/>'
    + '<path d="M0 90 L230 90 M370 90 L600 90" class="estrada"/><path d="M230 90 L370 90" class="ponte"/>'
    + '<g class="fechado"><rect x="245" y="62" width="110" height="56" rx="6"/><text x="300" y="86" text-anchor="middle">ROAD</text><text x="300" y="106" text-anchor="middle">CLOSED</text></g>'
    + '<path d="M200 90 C 210 160, 390 160, 400 90" class="volta' + (livre >= 0 ? ' acesa' : '') + '"/>' + ps + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · B1 · FOUR DETOURS · NO SILENCE</span><h1>Beat the <b>Blank</b></h1>'
    + '<p class="sub">When the word doesn’t come, don’t stop. <b>Go around it.</b></p>'
    + '<div class="chipsx"><span class="pilula">It’s a kind of…</span><span class="pilula">the thing you use for…</span><span class="pilula">It’s when you…</span><span class="pilula">It’s like…, but…</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Take the detour</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + desvio(1) + '</div></div>';
};

R.branco = function (c) {
  var e = S.br, x = OBJETOS[e.sel];
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="mesa-obj" style="background-image:url(' + img('mesa') + ')">' + OBJETOS.filter(function (o) { return !o.fora; }).map(function (o, i) { return '<button type="button" class="pino-o' + (e.sel === i ? ' on' : '') + '" style="left:' + o.x + '%;top:' + o.y + '%" data-a="br" data-n="' + i + '">' + o.rot + '</button>'; }).join('') + '</div>'
    + '<div class="tres-b">' + OBJETOS.map(function (o, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + '" data-a="br" data-n="' + i + '">' + (o.fora ? 'THE FEELING' : 'OBJECT ' + o.rot) + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + (x.fora ? 'NOT ON THE TABLE' : 'OBJECT ' + x.rot) + '</small><h2>Describe ' + x.onde + '</h2></div>'
    + '<div class="preso"><button type="button" class="btn" data-a="br-p">I got stuck</button><span><b>' + e.preso + '</b> blanks so far</span></div><p class="dica-aluno">Nobody names them yet. Not the screen, not your teacher.</p></div></div>';
};

R.reacao = function (c) {
  var e = S.re;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="versoes">' + REACAO.map(function (r, i) { return '<button type="button" class="versao' + (e.esc === i ? (r.ok ? ' certo' : ' errado') : '') + '" data-a="re" data-n="' + i + '">' + r.t + '</button>'; }).join('') + '</div>'
    + (e.esc >= 0 ? '<p class="' + (REACAO[e.esc].ok ? 'aprova' : 'recusa') + '">' + REACAO[e.esc].custo + '</p>' : '<p class="dica-aluno">Read all five out loud first.</p>') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">THREE FLUENT SPEAKERS GO AROUND A WORD</h5>' + ['c1.mp3', 'c2.mp3', 'c3.mp3'].map(function (a, i) { return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(a) + '<b>SPEAKER ' + (i + 1) + '</b></div>' + transcricao(a, TR[a]) + '</div>'; }).join('')
    + '<p class="dica-aluno">What was each one trying to say?</p></div></div>';
};

R.moldes = function (c) {
  var e = S.mo, n = e.n, fim = n >= RODADAS_M.length;
  if (fim) return cab(c) + trilha(RODADAS_M, n) + '<div class="mesa-c"><div class="lado-l">' + desvio(-1) + '</div><div class="lado-l"><div class="pergunta vd"><small>SIX GAPS</small><h2>Four detours. Every gap goes through one of them.</h2></div></div></div>';
  var x = RODADAS_M[n], ok = e.esc === x.k || x.tb.indexOf(e.esc) >= 0, idx = MOLDES.map(function (m) { return m[0]; }).indexOf(e.esc);
  return cab(c) + trilha(RODADAS_M, n) + '<div class="mesa-c"><div class="lado-l">' + desvio(ok ? idx : -1) + '</div><div class="lado-l"><div class="balao vd"><small>THE WORD THAT DOESN’T COME</small><p>' + x.coisa + '</p></div>'
    + '<div class="versoes">' + MOLDES.map(function (m) { return '<button type="button" class="versao' + (e.esc === m[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="mo" data-v="' + m[0] + '">' + m[1] + ' <small>' + m[2] + '</small></button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova">' + (e.esc === x.k ? x.por : 'That works too. Say it, then try: ' + x.por) + '</p><div><button type="button" class="btn" data-a="mo-prox">Next word</button></div>' : e.esc ? '<p class="recusa">That detour doesn’t fit here. Is it a thing, a tool, an experience, or like something else?</p>' : '') + '</div></div>';
};

R.tempo = function (c) {
  var e = S.tp;
  return cab(c) + '<div class="mesa-c tempo-g"><div class="lado-l compradores">' + COMPRADORES.map(function (x) { return '<div class="comprador vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.t + '</b><small>' + x.g + '</small></div>' + transcricao(x.au, TR[x.au]) + '</div>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>ANSWER WITH A TIME-BUYER</small><h2>' + PERGUNTAS_T[e.q] + '</h2></div>' + fala('tp' + e.q, ['Well… / Let me think… / You know when you…'], ['Well…', 'Let me think for a second.', 'How can I put it…', 'You know when you…'])
    + '<div class="tres-b">' + PERGUNTAS_T.map(function (q, i) { return '<button type="button" class="chip' + (e.q === i ? ' on' : '') + '" data-a="tp" data-n="' + i + '">' + (i + 1) + '</button>'; }).join('') + '</div><p class="aprova">The fifth one is the best: it buys time and starts the sentence.</p></div></div>';
};

R.cartas = function (c) {
  var e = S.ct, n = Math.min(e.n, CARTAS.length - 1), x = CARTAS[n], fim = e.n >= CARTAS.length;
  if (e.rodando && !TIMER) TIMER = setInterval(function () { if (L[S.i].k !== 'cartas' || !S.ct.rodando) { paraTimer(); return; } S.ct.t--; if (S.ct.t <= 0) { S.ct.t = 0; S.ct.rodando = 0; paraTimer(); } pinta(); }, 1000);
  if (!e.rodando) paraTimer();
  var placar = '<div class="placar-c"><div><small>POINTS</small><b>' + e.pontos + '</b></div><div><small>FORBIDDEN</small><b class="mau">' + e.ban + '</b></div><div><small>TIME</small><b class="' + (e.t <= 10 ? 'quase' : '') + '">' + e.t + '</b></div></div>';
  if (fim) return cab(c) + trilha(CARTAS, e.n) + '<div class="foco">' + placar + '<div class="pergunta vd"><small>SIX CARDS</small><h2>Every point was a sentence you built without the word.</h2></div></div>';
  return cab(c) + trilha(CARTAS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="carta-p"><div class="fita"><span>FORBIDDEN · DON’T SAY</span></div><b>' + x.alvo + '</b><ul>' + x.bane.map(function (w) { return '<li>' + w + '</li>'; }).join('') + '</ul></div></div>'
    + '<div class="lado-l">' + placar + '<div class="tres-b">' + (e.rodando ? '<button type="button" class="btn" data-a="ct-pausa">Pause</button>' : '<button type="button" class="btn cheio" data-a="ct-go">' + (e.t < 60 ? 'Go on' : 'Start the 60 seconds') + '</button>') + '</div>'
    + '<h5 class="so-prof rot-ouve">YOU SCORE</h5><div class="tres-b so-prof"><button type="button" class="chip" data-a="ct-ponto">+ DETOUR</button><button type="button" class="chip" data-a="ct-ban">FORBIDDEN WORD</button><button type="button" class="chip" data-a="ct-certo">I GOT IT · NEXT CARD</button></div>'
    + '<p class="dica-aluno">Stuck? What do you DO with it?</p></div></div>';
};

R.qual = function (c) {
  var e = S.ql, n = Math.min(e.n, QUAL.length - 1), x = QUAL[n];
  return cab(c) + trilha(QUAL, e.n) + '<div class="foco"><div class="pergunta vd ja"><small>' + x.fam + '</small><h2>Pick one in your head. Describe it.</h2></div><div class="quatro">'
    + x.ops.map(function (o, i) { return '<button type="button" class="quarto-b' + (e.aponta === i ? ' on' : '') + '" data-a="ql" data-n="' + i + '">' + o + '</button>'; }).join('') + '</div>'
    + '<p class="dica-aluno" style="text-align:center">Your teacher points when they’re sure. Were they right?</p>'
    + (n < QUAL.length - 1 ? '<div style="text-align:center"><button type="button" class="btn" data-a="ql-prox">Next family</button></div>' : '<p class="aprova" style="text-align:center">Nothing was hidden. You still had to be exact, because three were almost right.</p>') + '</div>';
};

R.junta = function (c) {
  var e = S.jt, n = e.n, fim = n >= JUNTA.length;
  if (fim) return cab(c) + trilha(JUNTA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX JOINTS</small><h2>Six joints, and the sixth one was silence.</h2></div></div>';
  var x = JUNTA[n], ok = e.esc === x.ok;
  return cab(c) + trilha(JUNTA, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + ' <span class="lacuna-q">' + (ok ? (x.ok === '—' ? '∅' : x.ok) : '___') + '</span> ' + x.b + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o) { return [o, o]; }), n + 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="jt" data-v="' + o[1] + '">' + (o[0] === '—' ? 'nothing' : o[0]) + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.por + '</p>' + (x.par ? '<div class="tres-b centro">' + x.par.map(function (a) { return '<div class="ouve-c vd"><div class="toca-linha">' + tocar(a) + '</div>' + transcricao(a, TR[a]) + '</div>'; }).join('') + '</div>' : '') + '<div style="text-align:center"><button type="button" class="btn" data-a="jt-prox">Next</button></div>'
      : e.esc ? '<p class="recusa" style="text-align:center">Person, place, moment, belonging, or a thing?</p>' : '') + '</div>';
};

R.verbo = function (c) {
  var e = S.vb, n = e.n, fim = n >= VERBO.length;
  if (fim) return cab(c) + trilha(VERBO, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE ACTIONS</small><h2>Five everyday actions, and not one verb you had to look up.</h2></div></div>';
  var x = VERBO[n], emb = ordem(x.pecas.map(function (w, i) { return [w, i]; }), n + 9), pronto = e.pick.length === x.pecas.length;
  return cab(c) + trilha(VERBO, n) + '<div class="foco"><div class="pergunta vd ja"><small>THE SITUATION</small><h2>' + x.sit + '</h2></div><div class="montagem vd"><span class="pre-m">You know when you need</span> ' + (e.pick.length ? e.pick.map(function (i) { return '<span class="pal-m">' + x.pecas[i] + '</span>'; }).join(' ') : '<span class="vazio-m">tap the pieces in order</span>') + '</div>'
    + (pronto ? '<p class="aprova" style="text-align:center">Say it whole. (If you know it, the real verb is: ' + x.real + '.)</p><div style="text-align:center"><button type="button" class="btn" data-a="vb-prox">Next action</button></div>'
      : '<div class="tres-b centro">' + emb.map(function (o) { return '<button type="button" class="pilula grande-p" data-a="vb" data-n="' + o[1] + '"' + (e.pick.indexOf(o[1]) >= 0 ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (e.err ? '<p class="recusa" style="text-align:center">Not yet. What do your hands do first?</p>' : '')) + '</div>';
};

R.porta = function (c) {
  var e = S.pt, n = Math.min(e.n, PORTA.length - 1), x = PORTA[n], viu = e.viu[n];
  return cab(c) + trilha(PORTA, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('porta') + ')"><span>THE SIDE DOOR</span></div><p class="dica-aluno">Example: “We need to postpone the meeting.” → “We need to do the meeting later.”</p></div>'
    + '<div class="lado-l"><div class="balao vd"><small>THE HARD SENTENCE</small><p><s>' + x.dificil + '</s></p></div><div class="pede vd"><small>HINT</small><b>' + x.dica + '</b></div>' + fala('pt' + n, ['…'], [])
    + (viu ? '<div class="balao vd ok-b"><small>ONE EASIER VERSION</small><p>' + x.modelo + '</p></div>' : '<div><button type="button" class="chip" data-a="pt-v">Compare with one version</button></div>')
    + (n < PORTA.length - 1 ? '<div><button type="button" class="btn" data-a="pt-prox">Next sentence</button></div>' : '<p class="aprova">You didn’t go around those words. You went past them.</p>') + '</div></div>';
};

R.semvolta = function (c) {
  var e = S.sv, nb = Object.keys(e.bans).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">PICK A TOPIC</h5><div class="versoes">' + TEMAS.map(function (t, i) { return '<button type="button" class="versao' + (e.tema === i ? ' certo' : '') + '" data-a="sv" data-n="' + i + '">' + t + '</button>'; }).join('') + '</div>'
    + (e.tema >= 0 ? '<div class="balao vd"><small>TALK ABOUT</small><p>' + TEMAS[e.tema] + '</p></div>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">BANNED WORDS · ' + nb + ' OF 5</h5><div class="bans">' + BANS.map(function (b, i) { return '<button type="button" class="ban' + (e.bans[i] ? ' on' : '') + '" data-a="sv-b" data-n="' + i + '">' + b + '</button>'; }).join('') + '</div>'
    + '<p class="so-prof dica-aluno">Ban a word whenever your student leans on it. No timer: you decide.</p>' + (nb >= 5 ? '<p class="aprova">Five words gone, and you were still talking.</p>' : '') + '</div></div>';
};

R.fim = function (c) {
  var e = S.fm;
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my kitchen there’s a thing you use for …\nIt’s like …, but …\nIt’s when you …', 'Your own blanks',
    ['It’s a kind of ', 'It’s the thing you use for ', 'It’s when you ', 'It’s like ', ', but ', 'Well… '], ['THREE THINGS YOU CAN’T NAME YET', 'Describe the five from scene I again, out loud. Then write three things from your home, with a detour each.'])
    + '<div class="lado-fim">' + (e.abre ? '<div class="nomes">' + NOMES.map(function (x) { return '<div class="nome-n vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.rot + '</b><span>' + x.nome + '</span></div></div>'; }).join('') + '</div>' : '<div class="mesa-obj mini" style="background-image:url(' + img('mesa') + ')"></div><div><button type="button" class="btn cheio" data-a="fm-abre">Give them their names</button></div>')
    + '<div class="grande vd"><span>It’s <u>a kind of</u> … · <u>the thing you use for</u> …-ing</span><span>It’s <u>when you</u> … · It’s <u>like</u> …, <u>but</u> …</span><span>that · who · where · whose · or nothing</span></div>'
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.br = function (b, n) { S.br.sel = n; };
TOQUES['br-p'] = function () { S.br.preso++; };
TOQUES.re = function (b, n) { S.re.esc = n; };
TOQUES.mo = function (b, n, v) { S.mo.esc = v; };
TOQUES['mo-prox'] = function () { S.mo = { n: S.mo.n + 1, esc: '' }; };
TOQUES.tp = function (b, n) { S.tp.q = n; };
TOQUES['ct-go'] = function () { if (S.ct.t <= 0) S.ct.t = 60; S.ct.rodando = 1; };
TOQUES['ct-pausa'] = function () { S.ct.rodando = 0; paraTimer(); };
TOQUES['ct-ponto'] = function () { S.ct.pontos++; };
TOQUES['ct-ban'] = function () { S.ct.ban++; S.ct.pontos = Math.max(0, S.ct.pontos - 1); };
TOQUES['ct-certo'] = function () { paraTimer(); S.ct.n++; S.ct.t = 60; S.ct.rodando = 0; };
TOQUES.ql = function (b, n) { S.ql.aponta = n; };
TOQUES['ql-prox'] = function () { S.ql = { n: S.ql.n + 1, aponta: -1 }; };
TOQUES.jt = function (b, n, v) { S.jt.esc = v; };
TOQUES['jt-prox'] = function () { S.jt = { n: S.jt.n + 1, esc: '' }; };
TOQUES.vb = function (b, n) { var e = S.vb; if (n === e.pick.length) { e.pick.push(n); e.err = 0; } else e.err = 1; };
TOQUES['vb-prox'] = function () { S.vb = { n: S.vb.n + 1, pick: [], err: 0 }; };
TOQUES['pt-v'] = function () { S.pt.viu[Math.min(S.pt.n, PORTA.length - 1)] = 1; };
TOQUES['pt-prox'] = function () { S.pt.n++; };
TOQUES.sv = function (b, n) { S.sv.tema = n; };
TOQUES['sv-b'] = function (b, n) { S.sv.bans[n] = !S.sv.bans[n]; if (!S.sv.bans[n]) delete S.sv.bans[n]; };
TOQUES['fm-abre'] = function () { S.fm.abre = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de moldes.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'A detour in blocks. Each block has a job.',
  frases: [
    { b: [['It’s a kind of', 'DETOUR', 'aux'], ['tool', 'WHAT'], ['that', 'JOINT', 'aux'], ['cuts paper', 'ACTION']], d: 'A kind of + a big word you know. Then what it does.' },
    { b: [['It’s the thing', 'DETOUR', 'aux'], ['you use for', 'JOINT', 'aux'], ['opening cans', 'ACTION']], d: 'The thing you use for + the -ing.' },
    { b: [['It’s when', 'DETOUR', 'aux'], ['you', 'WHO'], ['feel nervous', 'ACTION'], ['before a test', 'WHEN']], d: 'It’s when + a full sentence.' },
    { b: [['It’s like a chair,', 'DETOUR', 'aux'], ['but', 'JOINT', 'aux'], ['it’s soft', 'HOW']], d: 'Like …, but … : what is the same, what is different.' }
  ],
  nota: 'Every detour does the same job: it goes around the missing word. Start with the <b>DETOUR</b>, add the <b>JOINT</b> (that, you use for, but), then the detail.',
  monta: { p: 'Build a detour for “a stapler”. Then say it.', pecas: [['you use for', 'JOINT', 'aux'], ['It’s the thing', 'DETOUR', 'aux'], ['joining papers', 'ACTION']], ordem: [1, 0, 2] },
  uso: { p: 'Your turn. Pick something in your room. Don’t say its name. Use a detour.', molde: ['It’s a kind of …', 'It’s the thing you use for …'], ex: 'It’s the thing you use for cleaning the floor.' },
  prof: 'Read the blocks top to bottom with the student. Point at the JOINT: it is the small word that keeps the sentence standing.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
