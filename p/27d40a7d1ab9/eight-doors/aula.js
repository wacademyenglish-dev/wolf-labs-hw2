/* ============================================================
   THE EIGHT DOORS · THE OCTAGON · LIVE CLASS  06/10/2026
   Main series B1 · falar das próprias habilidades: good at / better
   at / not very good at (sempre AT) · suavizar: I'd say I'm quite… ·
   honestidade: although, to be honest · can't × haven't … yet.
   Erros: "good in music", "intelligent in math", "I didn't try yet",
   "I'm the best in everything", "I'm not good in nothing".
   O MUNDO (da aula velha): uma autoavaliação de verdade; a sala de
   testes com oito portas, uma para cada tipo de inteligência; nenhum
   número vem de clique: vem da PROVA dita em voz alta; três modos de
   pontuar (prova, evidência, escala); a crítica (não é comprovado); o
   laudo. Os dois áudios antigos (a ideia, a crítica) voltam a tocar,
   conferidos no faster-whisper em 06/10: batem.
   A CARA: o OCTÓGONO — oito portas em volta de um octógono desenhado
   com seno e cosseno; a forma medida em traço cheio âmbar, o palpite
   do começo em tracejado; o laudo é uma ficha de prova (Form 8-D)
   escura. O gabarito claro da aula velha saiu.
   Fila: FILA-LIVE-386.md · 102.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'portas' },
  { k: 'chute', est: 'o', min: 7, img: 'sala', rot: 'I · Before the Test', t: 'Before any door opens, the examiner wants to know you.', p: 'Answer the three questions. Then, for each door, say a full sentence; your teacher taps the step you used. No comments yet.' },
  { k: 'ideia', est: 'l', min: 7, img: 'portas', rot: 'II · The Idea', t: 'The examiner explains the idea behind the test.', p: 'Listen once. Then choose only the three things you really heard.' },
  { k: 'lingua', est: 'f', min: 6, img: 'sala', rot: 'III · How to Say It', t: 'Ability takes AT. Soften it. Be honest.', p: 'Read the ladder out loud, with one thing you do for each step. Then fix the four traps.' },
  { k: 'prova', est: 'o', min: 7, img: 'sala', rot: 'IV · Doors 1–3 · Proof', t: 'Three doors you can judge yourself, but only with proof.', p: 'Answer the question. Your teacher fills one bubble for each proof. Then the door locks with a number.' },
  { k: 'evid', est: 'o', min: 7, img: 'jardim', rot: 'V · Doors 4–6 · Evidence', t: 'Three doors you can’t judge by feeling. Choose the line that is true.', p: 'Your evidence gives the number. Then say it as a full sentence, with a date or a place.' },
  { k: 'escala', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VI · Doors 7–8 · Scale', t: 'The last two doors. Nobody can score these by looking at you.', p: 'Read each sentence out loud, say why, and tap how true it is for you.' },
  { k: 'forma', est: 'o', min: 7, extra: 1, img: 'portas', rot: 'VII · Your Shape', t: 'The solid line is what you proved. The dashed line is what you guessed.', p: 'Look for fifteen seconds before anybody speaks. Then answer the three questions.' },
  { k: 'critica', est: 'l', min: 7, extra: 1, img: 'portas', rot: 'VIII · The Other Side', t: 'The examiner has one more page.', p: 'Listen. Then say how much you believe the idea.' },
  { k: 'yet', est: 'f', min: 6, extra: 1, img: 'jardim', rot: 'IX · Can’t or Not Yet?', t: 'A real limit, or a door that is still open?', p: 'Decide, then say the better sentence. The last one is about you.' },
  { k: 'entrevista', est: 'o', min: 7, extra: 1, img: 'entrevista', rot: 'X · The Job Interview', t: 'A job interview. Your teacher is the interviewer. Use your report.', p: 'Not too humble, not too proud. Give evidence.' },
  { k: 'laudo', est: 'w', min: 6, img: 'portas', rot: 'XI · Your Report', t: 'Form 8-D is ready.', p: 'Read your report out loud. Then write it in your own words. It goes to your My notes.' }
];

var TR = {
  'v-claim.mp3': 'Intelligence is not one thing. It is not one number. There are different kinds, and being good at one kind does not tell you very much about the others. And here is the second part, which people always forget: it can change. Your shoe size cannot change. This can.',
  'v-critic.mp3': 'Not everybody agrees with this. Many psychologists say there is not much real evidence for it. They say these are talents, not intelligences. And if everything is an intelligence, then the word does not mean very much anymore. They are not saying these abilities are not real. They are saying that the word intelligence may be the wrong word.'
};

var PORTAS = ['words', 'numbers', 'space', 'music', 'body', 'nature', 'people', 'self'];
var NOME = { words: 'WORDS', numbers: 'NUMBERS', space: 'SPACE', music: 'MUSIC', body: 'THE BODY', nature: 'NATURE', people: 'OTHER PEOPLE', self: 'YOURSELF' };
var ATIV = { words: 'writing long messages', numbers: 'math in my head', space: 'finding my way in a new city', music: 'keeping a rhythm', body: 'sports', nature: 'looking after plants', people: 'knowing how a friend feels', self: 'understanding my own feelings' };
var CONVERSA = [
  { q: 'At school, what were you good at? One thing.', fup: 'Were you better at it than your friends?' },
  { q: 'Today, what do people come to you for?', fup: 'How do you feel when they ask you?' },
  { q: 'What is something you learned in the last year?', fup: 'Was it easy or hard?' }
];
var DEGRAUS = [[1, 'NOT AT ALL', 'To be honest, I’m not good at % at all.'], [3, 'NOT VERY', 'I’m not very good at %.'], [5, 'OK', 'I’m OK at %, although I’m not an expert.'], [7, 'QUITE', 'I’d say I’m quite good at %.'], [9, 'VERY', 'I’d say I’m really good at %.']];

var CLAIMS = [['Intelligence is not one thing.', 1], ['Intelligence can change.', 1], ['Being good at one kind says little about the others.', 1], ['Everybody is a genius at something.', 0], ['Schools only care about two kinds.', 0], ['IQ tests do not work.', 0]];

var ESCADA = ['brilliant at', 'really good at', 'quite good at', 'OK at', 'not very good at', 'terrible at'];
var ARMAS = [
  ['GOOD AT, NEVER GOOD IN', 'I am good in music.', 'I am good at music.', 'good at · better at · bad at. Always AT.'],
  ['SOFTEN IT', 'I am the best in math.', 'I’d say I’m quite good at math.', 'A careful claim sounds more believable, not less.'],
  ['NOT INTELLIGENT IN', 'She is intelligent in languages.', 'She is good at languages.', 'For one ability: good at.'],
  ['NOT YET', 'I didn’t try yet.', 'I haven’t tried yet.', 'yet goes with have / has.']
];

var PROVA_Q = { words: 'Prove it. What is the last thing you read or wrote that nobody asked you to?', numbers: 'Prove it. When did you last work out a problem that other people gave up on?', space: 'Prove it. Describe the way from your home to a place you like. No map, no drawing.' };
var PROVAS = ['AN EXAMPLE', 'A DETAIL: WHEN OR WHERE', 'A CAREFUL SENTENCE: I’D SAY…'];

var EVID = {
  music: { q: 'Forget how you feel about music. What have you actually done with it?', opts: [['I play or sing, and I still do it.', 9], ['I played years ago, and then I stopped.', 6], ['I hear when a note is wrong, but I don’t play.', 4], ['Music is noise behind the other things I do.', 2]] },
  body: { q: 'Your body: is it something you use, or something you carry around?', opts: [['I train, dance or make things every week.', 9], ['I used to, and my body still remembers how.', 6], ['I manage, as long as nobody is watching.', 4], ['I am the one who drops things.', 2]] },
  nature: { q: 'How much of the living world near your home can you name?', opts: [['I can name the trees and the birds where I live.', 9], ['I grow something, or I look after an animal.', 7], ['I like being outside, but I can’t name any of it.', 4], ['Nature is the place where the wifi is bad.', 2]] }
};

var ESCALA = [['NOT ME', 2], ['A BIT', 5], ['QUITE', 7], ['A LOT', 9]];
var ITENS_ESC = {
  people: { itens: ['People come to me for advice.', 'I notice that somebody is upset before they say it.', 'Being with people gives me energy.'], q: 'Which of the three would your best friend argue with?' },
  self: { itens: ['I usually know why I am in a bad mood.', 'I work better at my own pace.', 'I could name the thing I am worst at, right now.'], q: 'You answered all this about yourself. How would you know if you were wrong?' }
};

var YET = [
  { t: 'I can’t cook.', ok: 'yet', si: 'I haven’t learned to cook yet.' },
  { t: 'I can’t be in two places at the same time.', ok: 'cant', si: 'Nobody can. That one is a real limit.' },
  { t: 'I can’t speak Japanese.', ok: 'yet', si: 'I haven’t studied Japanese yet.' },
  { t: 'I can’t breathe under water.', ok: 'cant', si: 'A real limit, unless you have the equipment.' },
  { t: 'I can’t play the piano.', ok: 'yet', si: 'I haven’t tried the piano yet.' },
  { t: 'I can’t drive.', ok: 'yet', si: 'I haven’t got my driver’s license yet.' }
];

var ENTREV = [
  { q: 'So, tell me: what are you good at?', fup: 'Can you give me an example?' },
  { q: 'Your report says your tallest door is %alto. Is that true at work or at school, too?', fup: 'When did you last use it?' },
  { q: 'And what are you not very good at?', fup: 'Is it a can’t, or a not yet?' },
  { q: 'Your shortest door is %baixo. What would you do if a job needed it?', fup: 'Who could help you?' },
  { q: 'What do people come to you for?', fup: 'How do you feel when they do?' },
  { q: 'Your turn. Ask me two questions about what I’m good at.', fup: 'Now give me a compliment, and I’ll take it well.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  gut: {}, geral: -1, cv: 0, gsel: 0, cl: {}, med: {}, pv: { sel: 0, b: {}, aj: {}, erro: 0 }, ev: { sel: 'music' }, es: { sel: 'people', v: {} }, linha: -1, yt: { n: 0, esc: '' }, en: { n: 0 } };

function ang(i) { return (i * 45 - 90) * Math.PI / 180; }
function octogono(med, gut, mini) {
  var R0 = 120, s = '<svg class="octo' + (mini ? ' mini' : '') + '" viewBox="-200 -160 400 320" role="img" aria-label="Your shape">';
  [1, .66, .33].forEach(function (f) { s += '<polygon class="anel-o" points="' + PORTAS.map(function (k, i) { return (Math.cos(ang(i)) * R0 * f).toFixed(1) + ',' + (Math.sin(ang(i)) * R0 * f).toFixed(1); }).join(' ') + '"/>'; });
  PORTAS.forEach(function (k, i) { s += '<line class="raio-o" x1="0" y1="0" x2="' + (Math.cos(ang(i)) * R0).toFixed(1) + '" y2="' + (Math.sin(ang(i)) * R0).toFixed(1) + '"/>'; });
  function poly(obj, cls) { var tem = PORTAS.some(function (k) { return obj[k] !== undefined; }); if (!tem) return ''; return '<polygon class="' + cls + '" points="' + PORTAS.map(function (k, i) { var v = obj[k] === undefined ? 0 : obj[k]; return (Math.cos(ang(i)) * R0 * v / 10).toFixed(1) + ',' + (Math.sin(ang(i)) * R0 * v / 10).toFixed(1); }).join(' ') + '"/>'; }
  s += poly(gut || {}, 'chute-o') + poly(med || {}, 'med-o');
  PORTAS.forEach(function (k, i) { var x = Math.cos(ang(i)) * (R0 + 26), y = Math.sin(ang(i)) * (R0 + 22); s += '<text class="rot-o" x="' + x.toFixed(0) + '" y="' + (y + 4).toFixed(0) + '">' + NOME[k].replace('OTHER ', '').replace('THE ', '') + (med && med[k] !== undefined ? ' ' + med[k] : '') + '</text>'; });
  return s + '</svg>';
}
function media(o) { var v = PORTAS.filter(function (k) { return o[k] !== undefined; }).map(function (k) { return o[k]; }); return v.length ? Math.round(v.reduce(function (a, b) { return a + b; }, 0) / v.length * 10) / 10 : null; }
function extremos() { var m = S.med, k = PORTAS.filter(function (x) { return m[x] !== undefined; }); if (!k.length) return null; k.sort(function (a, b) { return m[b] - m[a]; }); return { alto: k[0], baixo: k[k.length - 1], top: k.slice(0, 3) }; }
function portaTag(k, on, val) { return '<span class="porta-tag' + (on ? ' on' : '') + '"><b>' + NOME[k] + '</b>' + (val !== undefined ? '<i>' + val + '</i>' : '') + '</span>'; }

var R = {};
R.capa = function () {
  var demo = { words: 7, numbers: 5, space: 8, music: 3, body: 6, nature: 4, people: 9, self: 6 }, demoG = { words: 6, numbers: 7, space: 5, music: 5, body: 5, nature: 5, people: 7, self: 8 };
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE TESTING ROOM · FORM 8-D</span><h1>The Eight <b>Doors</b></h1>'
    + '<p class="sub">A corridor, eight doors, and an examiner with a clipboard. No number comes from a click: it comes from what you <b>prove</b> out loud.</p>'
    + '<div class="chipsx"><span class="pilula">good at</span><span class="pilula">I’d say I’m quite…</span><span class="pilula">haven’t … yet</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the test</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + octogono(demo, demoG) + '</div></div>';
};

R.chute = function (c) {
  var cv = S.cv;
  if (cv < CONVERSA.length) { var x = CONVERSA[cv]; return cab(c) + trilha(CONVERSA, cv) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('sala') + ')"><span>THE TESTING ROOM</span></div></div><div class="lado-l"><div class="pergunta vd"><small>QUESTION ' + (cv + 1) + ' OF 3</small><h2>' + x.q + '</h2></div><p class="so-prof dica-aluno">Follow-up: “' + x.fup + '”</p><div><button type="button" class="btn" data-a="cv-prox">' + (cv < 2 ? 'Next question' : 'Now the guesses') + '</button></div></div></div>'; }
  var k = PORTAS[S.gsel], g = S.gut[k], deg = DEGRAUS.filter(function (d) { return d[0] === g; })[0];
  var tudo = PORTAS.every(function (p) { return S.gut[p] !== undefined; });
  return cab(c) + '<div class="portas-l">' + PORTAS.map(function (p, i) { return '<button type="button" class="porta-b' + (S.gsel === i ? ' sel' : '') + (S.gut[p] !== undefined ? ' feita' : '') + '" data-a="gs" data-n="' + i + '">' + NOME[p] + (S.gut[p] !== undefined ? ' <i>' + S.gut[p] + '</i>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>DOOR · ' + NOME[k] + '</small><h2>How good are you at ' + ATIV[k].replace('my ', 'your ') + '?</h2></div>' + (deg ? '<div class="balao vd ok-b"><p>' + deg[2].replace('%', ATIV[k]) + '</p></div>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP THE STEP YOU HEARD · NO COMMENTS</h5><div class="escada-b">' + DEGRAUS.map(function (d) { return '<button type="button" class="pilula grande-p' + (g === d[0] ? ' on' : '') + '" data-a="gt" data-n="' + d[0] + '">' + d[1] + '</button>'; }).join('') + '</div>'
    + (tudo ? '<div class="pede vd"><small>LAST ONE</small><b>How intelligent are you, from 0 to 10? Say what the number is based on.</b></div><div class="numeros">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return '<button type="button" class="num' + (S.geral === n ? ' on' : '') + '" data-a="geral" data-n="' + n + '">' + n + '</button>'; }).join('') + '</div>' + (S.geral >= 0 ? '<p class="aprova">Nine numbers, and none of them has proof yet. “Almost nobody keeps them,” says the examiner.</p>' : '') : '<p class="dica-aluno">Eight doors. A quick guess for each.</p>') + '</div></div>';
};

R.ideia = function (c) {
  var e = S.cl, ouviu = (S.ouviu || {})['v-claim.mp3'], certos = CLAIMS.filter(function (x, i) { return e[i] && x[1]; }).length, fim = certos >= 3;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('v-claim.mp3') + '<b>THE EXAMINER</b></div>' + transcricao('v-claim.mp3', TR['v-claim.mp3']) + '</div>'
    + (fim ? '<div class="pergunta vd ja"><h2>Which part is harder to believe: that there are many kinds, or that they can change?</h2></div>' : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">WHAT DID YOU REALLY HEAR? · ' + certos + ' OF 3</h5><div class="versoes">' + ordem(CLAIMS.map(function (x, i) { return [x, i]; }), 4).map(function (o) { var t = e[o[1]]; return '<button type="button" class="versao' + (t ? (o[0][1] ? ' certo' : ' errado') : '') + '" data-a="cl" data-n="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + o[0][0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno">Listen first.</p>' : CLAIMS.some(function (x, i) { return e[i] && !x[1]; }) ? '<p class="recusa">That sounds right, but the examiner didn’t say it. Separate what you heard from what you expected.</p>' : '') + (fim ? '<p class="aprova">Three ideas in the recording, and three that people add by themselves.</p>' : '') + '</div></div>';
};

R.lingua = function (c) {
  return cab(c) + '<div class="escada-l">' + ESCADA.map(function (d, i) { return '<span class="degrau-l d' + i + '">' + d + '</span>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP')
    + '<p class="aprova" style="text-align:center">And to take a compliment: “Thank you. It’s one of the things I’m good at.”</p>';
};

R.prova = function (c) {
  var e = S.pv, k = ['words', 'numbers', 'space'][e.sel], b = e.b[k] || {}, n = Object.keys(b).filter(function (x) { return b[x]; }).length, aj = e.aj[k] || 0, nota = Math.max(1, Math.min(10, 3 + n * 2 + aj)), trava = S.med[k] !== undefined;
  return cab(c) + '<div class="portas-l tres">' + ['words', 'numbers', 'space'].map(function (p, i) { return '<button type="button" class="porta-b' + (e.sel === i ? ' sel' : '') + (S.med[p] !== undefined ? ' feita' : '') + '" data-a="pv" data-n="' + i + '">' + NOME[p] + (S.med[p] !== undefined ? ' <i>' + S.med[p] + '</i>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>DOOR ' + (e.sel + 1) + ' · ' + NOME[k] + '</small><h2>' + PROVA_Q[k] + '</h2></div>' + (e.erro ? '<p class="recusa">Good AT, never good in. Say it again.</p>' : '') + '<div><button type="button" class="btn so-prof erro-b" data-a="pv-erro">Mistake heard: “good in”</button></div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">FILL ONE BUBBLE FOR EACH PROOF YOU HEAR</h5><div class="bolhas">' + PROVAS.map(function (p, i) { return '<button type="button" class="bolha' + (b[i] ? ' on' : '') + '" data-a="pv-b" data-n="' + i + '"' + (trava ? ' disabled' : '') + '><i></i>' + p + '</button>'; }).join('') + '</div>'
    + '<div class="nota-l"><button type="button" class="pilula" data-a="pv-aj" data-n="-1"' + (trava ? ' disabled' : '') + '>−1</button><b>' + (trava ? S.med[k] : nota) + '</b><button type="button" class="pilula" data-a="pv-aj" data-n="1"' + (trava ? ' disabled' : '') + '>+1</button><small>Move it only if your student says why.</small></div>'
    + (trava ? '<p class="aprova">Door locked with proof.</p>' : '<div><button type="button" class="btn cheio" data-a="pv-lock" data-n="' + nota + '">Lock the door</button></div>') + '</div></div>';
};

R.evid = function (c) {
  var k = S.ev.sel, x = EVID[k];
  return cab(c) + '<div class="portas-l tres">' + ['music', 'body', 'nature'].map(function (p) { return '<button type="button" class="porta-b' + (k === p ? ' sel' : '') + (S.med[p] !== undefined ? ' feita' : '') + '" data-a="ev" data-v="' + p + '">' + NOME[p] + (S.med[p] !== undefined ? ' <i>' + S.med[p] + '</i>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="lado-l"><div class="pergunta vd ja"><small>' + NOME[k] + '</small><h2>' + x.q + '</h2></div>' + (S.med[k] !== undefined ? fala('ev' + k, ['… , because last year / in … I …'], ['I’d say', 'although', 'to be honest']) : '') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">WHICH LINE IS TRUE?</h5><div class="versoes">' + x.opts.map(function (o) { return '<button type="button" class="versao' + (S.med[k] === o[1] ? ' on' : '') + '" data-a="ev-v" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (S.med[k] !== undefined ? '<p class="aprova">Nobody guessed this number. The evidence chose it: ' + S.med[k] + '.</p>' : '') + '</div></div>';
};

R.escala = function (c) {
  var e = S.es, k = e.sel, x = ITENS_ESC[k], v = e.v[k] || {};
  return cab(c) + '<div class="portas-l tres">' + ['people', 'self'].map(function (p) { return '<button type="button" class="porta-b' + (k === p ? ' sel' : '') + (S.med[p] !== undefined ? ' feita' : '') + '" data-a="es" data-v="' + p + '">' + NOME[p] + (S.med[p] !== undefined ? ' <i>' + S.med[p] + '</i>' : '') + '</button>'; }).join('') + '</div>'
    + '<div class="itens-esc">' + x.itens.map(function (t, i) { return '<div class="item-esc vd"><p>' + t + '</p><div class="tres-b">' + ESCALA.map(function (s) { return '<button type="button" class="pilula' + (v[i] === s[1] ? ' on' : '') + '" data-a="es-v" data-n="' + i + '" data-c="' + s[1] + '">' + s[0] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (S.med[k] !== undefined ? '<div class="pergunta vd ja"><small>' + NOME[k] + ' · ' + S.med[k] + '</small><h2>' + x.q + '</h2></div>' : '<p class="so-prof dica-aluno" style="text-align:center">Before each tap: the sentence that justifies it. “A lot, because last month…”</p>');
};

R.forma = function (c) {
  var ex = extremos();
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + octogono(S.med, S.gut) + '<div class="legenda-o"><span class="med">— what you proved</span><span class="gut">- - what you guessed</span></div></div>'
    + '<div class="lado-l">' + (ex ? '<div class="pede vd"><small>TALLEST · SHORTEST</small><b>' + NOME[ex.alto] + ' (' + S.med[ex.alto] + ') · ' + NOME[ex.baixo] + ' (' + S.med[ex.baixo] + ')</b></div>' : '<p class="dica-aluno">Measure the doors first.</p>')
    + ['Say your tallest door and your shortest door, with the numbers.', 'Where is the biggest gap between your guess and your proof?', 'Which door would surprise the people who know you?'].map(function (q, i) { return '<div class="pergunta vd ja"><small>' + (i + 1) + '</small><h2>' + q + '</h2></div>'; }).join('')
    + fala('fo', ['My tallest door is …', 'I guessed …, but the test says …', 'People would be surprised that I’m quite good at …'], ['good at', 'I’d say', 'although']) + '</div></div>';
};

R.critica = function (c) {
  var ouviu = (S.ouviu || {})['v-critic.mp3'];
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('v-critic.mp3') + '<b>THE OTHER SIDE</b></div>' + transcricao('v-critic.mp3', TR['v-critic.mp3']) + '</div></div>'
    + '<div class="lado-l"><h5 class="rot-ouve">HOW MUCH DO YOU BELIEVE THE IDEA?</h5><div class="linha-c"><small>IT’S JUST A NICE STORY</small><div class="numeros">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return '<button type="button" class="num' + (S.linha === n ? ' on' : '') + '" data-a="lc" data-n="' + n + '"' + (ouviu ? '' : ' disabled') + '>' + n + '</button>'; }).join('') + '</div><small>IT’S TRUE</small></div>'
    + (S.linha >= 0 ? '<div class="pergunta vd ja"><h2>Why that number? Use although. And: did you like your result? Does that make the theory true?</h2></div>' + fala('lc', ['I’d say …, although …'], ['although', 'evidence', 'talent', 'proven']) : '<p class="dica-aluno">Listen first. Then choose a number.</p>') + '</div></div>';
};

R.yet = function (c) {
  var e = S.yt, n = e.n, ex = extremos();
  if (n >= YET.length) return cab(c) + '<div class="foco"><div class="pergunta vd"><small>ABOUT YOU</small><h2>Your shortest door is ' + (ex ? NOME[ex.baixo] : '…') + '. Say it with haven’t … yet, and say the first step.</h2></div>' + fala('yt', ['I haven’t … yet, but I could start by …'], ['haven’t', 'yet', 'first step']) + '<p class="aprova" style="text-align:center">Can’t closes a door. Not yet leaves it open.</p></div>';
  var x = YET[n], ok = e.esc === x.ok;
  return cab(c) + trilha(YET, n) + '<div class="foco"><div class="balao vd"><p>“' + x.t + '”</p></div><div class="tres-b centro">' + [['A REAL LIMIT', 'cant'], ['NOT YET', 'yet']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="yt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="pede vd centro-t"><small>SAY IT</small><b>' + x.si + '</b></div><div style="text-align:center"><button type="button" class="btn" data-a="yt-prox">Next</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">' + (x.ok === 'yet' ? 'People learn this one. Say it with haven’t … yet.' : 'Nobody can learn this one. Can’t is the honest word.') + '</p>' : '') + '</div>';
};

R.entrevista = function (c) {
  var e = S.en, n = Math.min(e.n, ENTREV.length - 1), x = ENTREV[n], ex = extremos();
  var q = x.q.replace('%alto', ex ? NOME[ex.alto] : 'your tallest door').replace('%baixo', ex ? NOME[ex.baixo] : 'your shortest door');
  return cab(c) + trilha(ENTREV, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('entrevista') + ')"><span>THE INTERVIEWER</span></div></div>'
    + '<div class="lado-l"><div class="pede vd"><small>THE INTERVIEWER</small><b>“' + q + '”</b></div><p class="so-prof dica-aluno">Follow-up: “' + x.fup + '”</p>' + fala('en' + n, ['I’d say I’m quite good at …', 'To be honest, I’m not very good at …', 'I haven’t … yet.'], ['good at', 'I’d say', 'although', 'yet'])
    + (n < ENTREV.length - 1 ? '<div><button type="button" class="btn" data-a="en-prox">Next question</button></div>' : '<p class="aprova">Twelve answers with evidence. That’s how you talk about yourself.</p>') + '</div></div>';
};

R.laudo = function (c) {
  var ex = extremos(), m = media(S.med);
  var ficha = '<div class="ficha vd"><small>FORM 8-D · REPORT</small>' + (ex ? '<span>Strongest doors <b>' + ex.top.map(function (k) { return NOME[k] + ' ' + S.med[k]; }).join(' · ') + '</b></span><span>Shortest door <b>' + NOME[ex.baixo] + ' ' + S.med[ex.baixo] + '</b></span><span class="yet-l">I haven’t worked on ' + NOME[ex.baixo].toLowerCase() + ' yet.</span>' : '<span>Doors <b>—</b></span>')
    + '<span>Your guess at the start <b>' + (S.geral >= 0 ? S.geral + ' / 10' : '—') + '</b></span><span>The doors say <b>' + (m !== null ? m + ' / 10' : '—') + '</b></span><button type="button" class="pilula imprimir" data-a="imprime">PRINT</button></div>';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’d say I’m quite good at …\nTo be honest, I’m not very good at …\nI haven’t … yet, but …', 'Your report',
    ['I’d say I’m quite good at ', 'I’m not very good at ', 'although ', 'I haven’t ', ' yet'], ['YOUR REPORT, IN YOUR OWN WORDS', 'Your three strongest doors, your shortest one with “haven’t … yet”, and your two numbers.'])
    + '<div class="lado-fim">' + octogono(S.med, S.gut, 1) + ficha
    + mostra('fim', 'I’d say I’m quite good at finding my way in a new city.<br>To be honest, I’m not very good at keeping a rhythm, although I love music.<br>I haven’t learned to cook yet, but I want to start this year.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['cv-prox'] = function () { S.cv++; };
TOQUES.gs = function (b, n) { S.gsel = n; };
TOQUES.gt = function (b, n) { S.gut[PORTAS[S.gsel]] = n; var prox = PORTAS.map(function (p, i) { return [p, i]; }).filter(function (x) { return S.gut[x[0]] === undefined; })[0]; if (prox) S.gsel = prox[1]; };
TOQUES.geral = function (b, n) { S.geral = n; };
TOQUES.cl = function (b, n) { S.cl[n] = 1; };
TOQUES.pv = function (b, n) { S.pv.sel = n; S.pv.erro = 0; };
TOQUES['pv-b'] = function (b, n) { var k = ['words', 'numbers', 'space'][S.pv.sel]; S.pv.b[k] = S.pv.b[k] || {}; S.pv.b[k][n] = !S.pv.b[k][n]; };
TOQUES['pv-aj'] = function (b, n) { var k = ['words', 'numbers', 'space'][S.pv.sel]; S.pv.aj[k] = Math.max(-2, Math.min(2, (S.pv.aj[k] || 0) + n)); };
TOQUES['pv-lock'] = function (b, n) { var k = ['words', 'numbers', 'space'][S.pv.sel]; S.med[k] = n; S.pv.erro = 0; if (S.pv.sel < 2) S.pv.sel++; };
TOQUES['pv-erro'] = function () { S.pv.erro = 1; };
TOQUES.ev = function (b, n, v) { S.ev.sel = v; };
TOQUES['ev-v'] = function (b, n) { S.med[S.ev.sel] = n; };
TOQUES.es = function (b, n, v) { S.es.sel = v; };
TOQUES['es-v'] = function (b, n, v, c) { var k = S.es.sel; S.es.v[k] = S.es.v[k] || {}; S.es.v[k][n] = +c; var vs = S.es.v[k]; if (vs[0] !== undefined && vs[1] !== undefined && vs[2] !== undefined) S.med[k] = Math.round((vs[0] + vs[1] + vs[2]) / 3); };
TOQUES.lc = function (b, n) { S.linha = n; };
TOQUES.yt = function (b, n, v) { S.yt.esc = v; };
TOQUES['yt-prox'] = function () { S.yt = { n: S.yt.n + 1, esc: '' }; };
TOQUES['en-prox'] = function () { S.en.n++; };
TOQUES.imprime = function () { try { window.print(); } catch (e) { } };
