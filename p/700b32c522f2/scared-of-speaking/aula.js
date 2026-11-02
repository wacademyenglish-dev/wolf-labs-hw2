/* ============================================================
   SCARED OF SPEAKING · OPEN MIC · LIVE CLASS  06/10/2026
   Main series A2 · adjetivo + preposição + -ING (good at · scared of ·
   tired of · nervous about · interested in · worried about · proud of) e a
   diferença scared OF + -ing (o medo em si) × scared TO + verbo (não faz
   por causa do medo). Erros universais: "good in", "interested on",
   "scared of speak", "good at cook".
   O MUNDO (da aula velha): a Lena mudou de país; tirou quatro B2; no dia
   12 o telefone tocou e ela não atendeu. Trinta dias de memos de voz. Seis
   áudios conferidos com faster-whisper em 06/10: a voz usa contrações
   (it's, I'm, that's, we'll) e o memo 30 não abre com "Voice memo." — a
   transcrição daqui é o que se ouve.
   A CARA: o PALCO de microfone aberto com o MEDIDOR DE NERVOS (barra
   vertical de LEDs) que desce a cada frase inteira; zerou, acende ON AIR.
   Os memos têm a ONDA em barras (a do dia 12 tem buracos).
   Fila: FILA-LIVE-386.md · 061.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'palco' },
  { k: 'abre', est: 'o', min: 7, img: 'cidade', rot: 'I · Three Blanks', t: 'Three sentences about you. Nobody corrects them.', p: 'Pick a card. Finish it about yourself. Say the whole thing out loud.' },
  { k: 'result', est: 'l', min: 7, img: 'cidade', rot: 'II · Four B2s', t: 'This is Lena. She moved for work. Her English was tested.', p: 'Play the result. Then say her score in a full sentence.' },
  { k: 'memo1', est: 'l', min: 7, img: 'caneca', rot: 'III · Memo One', t: 'Lena records a voice memo every night. This is the first one.', p: 'Look at the wave. Play it. Then answer.' },
  { k: 'fone', est: 'f', min: 6, img: 'fone', rot: 'IV · Seven Rings', t: 'Day twelve. Lena is home. She doesn’t know the number.', p: 'Tap RING seven times. Say nothing. Then one question.' },
  { k: 'fenda', est: 'o', min: 7, img: 'palco', rot: 'V · The Middle Word', t: 'The verb is easy now. The small word in the middle is not.', p: 'Say the WHOLE sentence with the middle word. Then tap it. Each one makes you less nervous.' },
  { k: 'recado', est: 'l', min: 7, extra: 1, img: 'fone', rot: 'VI · The Voicemail', t: 'She didn’t answer. They left a message.', p: 'Play the fast one once. Say how much you understood. Then the slow one.' },
  { k: 'regra', est: 'f', min: 6, extra: 1, img: 'palco', rot: 'VII · The Rule', t: 'After a preposition: -ING. The small word doesn’t translate.', p: 'Say each wrong line the right way, out loud. Then tap it.' },
  { k: 'ounao', est: 'f', min: 6, extra: 1, img: 'caneca', rot: 'VIII · Fear or Action', t: 'Both are English. They don’t say the same thing.', p: 'The thing she fears, or something she doesn’t do because of the fear? Say it, then tap.' },
  { k: 'memo12', est: 'l', min: 7, extra: 1, img: 'caneca', rot: 'IX · Memo Twelve', t: 'The same night as the call. She is not reading this one.', p: 'Compare the waves. Play it. Then answer.' },
  { k: 'dias', est: 'f', min: 6, extra: 1, img: 'cidade', rot: 'X · Six Days', t: 'Six memos, no sound. You build what she said.', p: 'Say the sentence first. Then tap the adjective, the small word and the -ing verb.' },
  { k: 'mic', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'XI · Open Mic', t: 'Your minute. Something you love doing.', p: 'One prompt at a time. Say it into the mic. The last one turns it ON AIR.' },
  { k: 'fim', est: 'w', min: 6, img: 'caneca', rot: 'XII · Three Blanks Again', t: 'Day thirty. And your three sentences, again.', p: 'Write your three blanks again: good at, scared of, tired of. It goes to your My notes.' }
];

var TR = {
  'resultado.mp3': 'Assessment complete. Reading: B2. Writing: B2. Listening: B2. Speaking: B2. Your English is very good. You do not need any extra classes.',
  'memo01.mp3': 'Voice memo. Monday, March 4th. Today I went to the office and I met my new team. Everyone was very kind. The weather is cold, but I have a warm coat. I think this is a good place. End of memo.',
  'recado-rapido.mp3': 'Hi, this is Dan calling from Halton Deliveries about the package for apartment 12. We came by this morning and nobody was home, so it’s back at the warehouse now. Just give us a call back whenever you can and we’ll set up another day. Thanks, bye.',
  'recado-devagar.mp3': 'Hi, this is Dan, calling from Halton Deliveries, about the package for apartment 12. We came by this morning, and nobody was home, so it’s back at the warehouse now. Just give us a call back whenever you can, and we’ll set up another day. Thanks, bye.',
  'memo12.mp3': 'Voice memo. It’s late. I’m not reading this one. Today my phone rang, and I did not answer it. I was scared of answering. I was scared of saying the wrong thing to a person I cannot see. I listened to the message tonight. It was about a package. That’s all it was. I am good at reading. I am good at writing. I am not good at picking up the phone. And I am tired of being like this.',
  'memo30.mp3': 'I answered the phone today. It was a wrong number. It was nothing at all. But I’m not scared of answering anymore. Well, less scared. End of memo.'
};

var ABRE = [
  { k: 'GOOD …', q: 'I am good … (something you do well)', fup: 'Who taught you?', st: ['I am good at …'], ex: 'I am good at cooking rice.' },
  { k: 'SCARED …', q: 'I am scared … (something that is hard for you)', fup: 'Since when?', st: ['I am scared of …'], ex: 'I am scared of speaking in meetings.' },
  { k: 'TIRED …', q: 'I am tired … (something that happens too much)', fup: 'What would you change?', st: ['I am tired of …'], ex: 'I am tired of waiting for the bus.' }
];
var FORMAS = [{ k: 'ing', t: 'PREPOSITION + -ING' }, { k: 'par', t: 'THE RIGHT PAIR' }, { k: 'prep', t: 'GOOD IN / INTERESTED ON', erro: 1 }, { k: 'inf', t: 'OF SPEAK / AT COOK', erro: 1 }];

var ONDA1 = [62, 70, 58, 74, 66, 71, 60, 68, 72, 63, 69, 64, 73, 61, 70, 66, 59, 72, 65, 68];
var ONDA12 = [54, 71, 22, 68, 74, 18, 62, 70, 25, 66, 72, 20, 58, 69, 30, 64, 19, 70, 27, 66];

var Q1 = [
  { q: 'Does she sound nervous?', op: ['No, she sounds fine.', 'Yes, very.'], w: 'She sounds fine. That is the point.' },
  { q: 'She says “End of memo.” Who talks like that?', op: ['Somebody reading.', 'Somebody talking.'], w: 'Nobody says that out loud. She wrote it first.' },
  { q: 'So her English here is…', op: ['good, and prepared', 'bad'], w: 'Prepared. That is why the wave has no holes.' }
];
var Q12 = [
  { q: 'The wave has holes. Why?', op: ['She is thinking.', 'The recording is broken.'], w: 'Holes are a person thinking.' },
  { q: 'How many times does she say a small word + -ing?', op: ['Six.', 'Two.'], w: 'Six: scared of answering, scared of saying, good at reading, good at writing, good at picking up, tired of being.' },
  { q: 'What is she tired of?', op: ['being like this', 'reading'], w: 'I am tired of being like this.' }
];

var FENDA = [
  { adj: 'good', verbo: 'cooking', ok: 'at', op: ['in', 'at', 'on'], w: 'GOOD takes AT.' },
  { adj: 'scared', verbo: 'flying', ok: 'of', op: ['of', 'from', 'with'], w: 'SCARED takes OF.' },
  { adj: 'tired', verbo: 'waiting', ok: 'of', op: ['from', 'for', 'of'], w: 'TIRED takes OF.' },
  { adj: 'nervous', verbo: 'driving', ok: 'about', op: ['for', 'about', 'to'], w: 'NERVOUS takes ABOUT.' },
  { adj: 'interested', verbo: 'learning', ok: 'in', op: ['on', 'about', 'in'], w: 'INTERESTED takes IN. Never ON.' },
  { adj: 'worried', verbo: 'losing', ok: 'about', op: ['about', 'of', 'with'], w: 'WORRIED takes ABOUT.' }
];

var ACHADOS = [
  { t: 'it was a delivery company', v: 1 }, { t: 'nobody was home when they came', v: 1 }, { t: 'the package is at the warehouse', v: 1 },
  { t: 'it was bad news', v: 0 }, { t: 'somebody was angry', v: 0 }
];

var FITAS = [['THE PAIR', 'good AT · scared OF · tired OF'], ['MORE PAIRS', 'nervous ABOUT · interested IN · proud OF'], ['AFTER IT', 'always -ING: of speaking'], ['TO + VERB', 'you don’t do it, because of the fear']];
var ARMAS = [
  ['GOOD AT', 'She is good in reading.', 'She is good at reading.', 'good takes at.'],
  ['-ING', 'I am scared of speak.', 'I am scared of speaking.', 'After a preposition: -ing. Always.'],
  ['INTERESTED IN', 'I’m interested on learning Italian.', 'I’m interested in learning Italian.', 'interested takes in. Never on.'],
  ['NO TO', 'She is good at to cook.', 'She is good at cooking.', 'No to after the small word: at cooking.'],
  ['NERVOUS ABOUT', 'I’m nervous for driving.', 'I’m nervous about driving.', 'nervous takes about.'],
  ['TIRED OF', 'I’m tired from waiting.', 'I’m tired of waiting.', 'tired of = I don’t want it anymore.']
];

var OUNAO = [
  { sit: 'She has this feeling every day of her life.', a: 'She’s scared of flying.', b: 'She’s scared to fly.', v: 0, w: 'The thing she fears: OF + -ING.' },
  { sit: 'The letter was in her hand, and she put it down.', a: 'She was scared of opening it.', b: 'She was scared to open it.', v: 1, w: 'She didn’t do it, because of the fear: TO + verb.' },
  { sit: 'What is his biggest fear? He answers in one word: swimming.', a: 'He’s scared of swimming.', b: 'He’s scared to swim.', v: 0, w: 'He names the fear: OF + -ING.' },
  { sit: 'The dog was right there, and he stood still.', a: 'He was scared of moving.', b: 'He was scared to move.', v: 1, w: 'He didn’t move, because of the fear: TO + verb.' },
  { sit: 'Lena, on day twelve, with the phone ringing in her hand.', a: 'She was scared of answering.', b: 'She was scared to answer.', v: 1, w: 'She doesn’t answer, because of the fear: TO + verb. Both are true about the same woman.' }
];

var DIAS = [
  { dia: 'DAY 14', q: 'She went back to the gym.', ok: ['tired', 'of', 'sitting'] },
  { dia: 'DAY 17', q: 'She read a whole book in English.', ok: ['good', 'at', 'reading'] },
  { dia: 'DAY 19', q: 'She has a presentation on Friday.', ok: ['nervous', 'about', 'presenting'] },
  { dia: 'DAY 22', q: 'She signed up for a class.', ok: ['interested', 'in', 'learning'] },
  { dia: 'DAY 26', q: 'The phone rang again.', ok: ['scared', 'of', 'answering'] },
  { dia: 'DAY 28', q: 'She called them back herself.', ok: ['proud', 'of', 'calling'] }
];
var BANCOS = [['tired', 'good', 'nervous', 'interested', 'scared', 'proud'], ['of', 'at', 'about', 'in'], ['sitting', 'reading', 'presenting', 'learning', 'answering', 'calling']];
var ROTS = ['ADJECTIVE', 'SMALL WORD', 'VERB + ING'];

var PROMPTS = [
  { q: 'What do you love doing?', ini: 'I am really interested in …' },
  { q: 'What part of it are you good at?', ini: 'I am good at …' },
  { q: 'What were you nervous about at the start?', ini: 'At first, I was nervous about …' },
  { q: 'What are you tired of hearing about it?', ini: 'I am tired of people …' },
  { q: 'Now all of it: one minute, no stopping.', ini: 'I love … I am good at … At first …' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, res: -1, q1: {}, toques: 0, fone: -1, fd: { n: 0, esc: '' }, rec: { r: {}, ach: {} }, ou: { n: 0, esc: -1 }, q12: {}, dias: { n: 0, pick: [null, null, null], err: 0 }, mic: { n: 0 } };

function nervos() {
  var n = S.fd.n + S.dias.n + S.mic.n + (S.fd.esc === FENDA[Math.min(S.fd.n, 5)].ok && S.fd.n < 6 ? 1 : 0);
  return Math.max(0, Math.round(100 * (1 - n / 17)));
}
function medidor(v) {
  var leds = '';
  for (var i = 9; i >= 0; i--) { var on = v > i * 10, cor = i >= 7 ? 'r' : i >= 4 ? 'a' : 'g'; leds += '<i class="led ' + cor + (on ? ' on' : '') + '"></i>'; }
  return '<div class="medidor"><small>NERVES</small><div class="leds">' + leds + '</div><b>' + v + '</b></div>';
}
function noAr(on) { return '<div class="no-ar' + (on ? ' on' : '') + '">ON AIR</div>'; }
function onda(lista, cls) { return '<div class="onda' + (cls ? ' ' + cls : '') + '">' + lista.map(function (h) { return '<i style="height:' + h + '%"></i>'; }).join('') + '</div>'; }
function perguntasMemo(lista, est, chave) {
  return lista.map(function (x, i) {
    var esc = est[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.q + '</p><div class="tres-b">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 3).map(function (o) { return '<button type="button" class="pilula' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + chave + '" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">' + x.w + '</p>' : esc > 0 ? '<p class="recusa">Listen again.</p>' : '') + '</div>';
  }).join('');
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · OPEN MIC</span><h1>Scared of <b>Speaking</b></h1>'
    + '<p class="sub">Four B2s. And on day twelve, the phone rang and Lena didn’t answer. Every whole sentence you say brings the nerves down. At zero, the mic goes on.</p>'
    + '<div class="chipsx"><span class="pilula">good at</span><span class="pilula">scared of + -ing</span><span class="pilula">tired of</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Step up to the mic</button>' + faixaLive() + '</div>'
    + '<div class="capa-d"><div class="palco">' + noAr(0) + '<div class="mic"><span class="cabeca"></span><span class="haste"></span><span class="base"></span></div>' + medidor(100) + '</div></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT · KEEP THEIR THREE SENTENCES</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.result = function (c) {
  var ouviu = (S.ouviu || {})['resultado.mp3'], ops = [['She is good at reading.', 0], ['She is good in reading.', 1], ['She is good at read.', 2]], ok = S.res === 0;
  return cab(c) + '<div class="mesa-c"><div class="laudo vd"><small>ASSESSMENT · LENA</small>' + ['READING', 'WRITING', 'LISTENING', 'SPEAKING'].map(function (k) { return '<div class="linha-l"><span>' + k + '</span><b>' + (ouviu ? 'B2' : '··') + '</b></div>'; }).join('') + '<div class="toca-linha">' + tocar('resultado.mp3') + '<div>' + transcricao('resultado.mp3', TR['resultado.mp3']) + '</div></div></div>'
    + '<div class="lado-l">' + (ouviu ? '<div class="pergunta vd ja"><small>HER READING</small><h2>Say it out loud, then tap what you said.</h2></div><div class="versoes">' + ordem(ops, 2).map(function (o) { return '<button type="button" class="versao' + (S.res === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="rs" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">AT, and the verb takes -ING. “You do not need any extra classes.” Remember that.</p>' : S.res > 0 ? '<p class="recusa">Two small things: the middle word, and the end of the verb.</p>' : '') : '<p class="transcricao vazia">Play the result first.</p>') + '</div></div>';
};

R.memo1 = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="memo vd"><small>MEMO 01 · DAY 1</small>' + onda(ONDA1) + '<div class="toca-linha">' + tocar('memo01.mp3') + '<div>' + transcricao('memo01.mp3', TR['memo01.mp3']) + '</div></div></div><div class="lado-l">' + ((S.ouviu || {})['memo01.mp3'] ? perguntasMemo(Q1, S.q1, 'q1') : '<p class="transcricao vazia">Play the memo first.</p>') + '</div></div>';
};

R.fone = function (c) {
  var t = S.toques, pronto = t >= 7, ops = [['answering', 0], ['answer', 1], ['to answer', 2]], ok = S.fone === 0;
  var rec = ['', 'After a small word like OF, the verb always takes -ING.', 'Scared to answer is English too: it means you don’t answer because of the fear. Here we name the fear itself: scared of answering.'];
  return cab(c) + '<div class="mesa-c"><div class="celular' + (pronto ? '' : ' toca') + '"><small>UNKNOWN NUMBER</small><b>+44 ••• ••• 4471</b><span class="anel">' + (pronto ? 'MISSED CALL' : 'RINGING · ' + t + ' / 7') + '</span>' + (pronto ? '' : '<button type="button" class="btn" data-a="fn-t">RING</button>') + '</div>'
    + '<div class="lado-l">' + (pronto ? '<div class="pergunta vd ja"><small>DAY 12</small><h2>She was scared of…</h2></div><div class="tres-b">' + ordem(ops, 3).map(function (o) { return '<button type="button" class="pilula grande-p' + (S.fone === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="fn" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (ok ? '<p class="aprova">OF is a preposition. After it: -ING. She was scared of answering. Say it once more.</p>' : S.fone > 0 ? '<p class="recusa">' + rec[S.fone] + '</p>' : '')
      : '<div class="pergunta vd"><small>SAY NOTHING</small><h2>It rings. And rings. Nobody speaks.</h2></div>') + '</div></div>';
};

R.fenda = function (c) {
  var e = S.fd, n = e.n, fim = n >= FENDA.length, v = nervos();
  if (fim) return cab(c) + '<div class="mesa-m">' + medidor(v) + '<div class="lado-l"><div class="pergunta vd"><small>SIX PAIRS</small><h2>You learn them two words at a time.</h2></div></div></div>';
  var x = FENDA[n], ok = e.esc === x.ok;
  return cab(c) + trilha(FENDA, n) + '<div class="mesa-m">' + medidor(v) + '<div class="lado-l"><div class="q-grande vd"><small>THE WHOLE SENTENCE</small><p>I’m ' + x.adj + ' <span class="gap">' + (ok ? x.ok : '___') + '</span> ' + x.verbo + '.</p></div>'
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="fd-prox">Next</button></div>' : '<div class="tres-b">' + ordem(x.op.map(function (o) { return [o, o]; }), n + 4).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? ' errado' : '') + '" data-a="fd" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">That pair doesn’t exist. Try the other small word.</p>' : '')) + '</div></div>';
};

R.recado = function (c) {
  var e = S.rec, rap = (S.ouviu || {})['recado-rapido.mp3'], dev = (S.ouviu || {})['recado-devagar.mp3'];
  var nAch = ACHADOS.filter(function (x, i) { return e.ach[i] && x.v; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="q-linha vd"><small class="rot-ouve">1 · REAL SPEED · 273 WORDS A MINUTE · PLAY IT ONCE</small><div class="toca-linha">' + tocar('recado-rapido.mp3', 1) + '</div>'
    + (rap ? '<div class="tres-b">' + ['almost nothing', 'some words', 'all of it'].map(function (o, i) { return '<button type="button" class="pilula' + (e.r.a === i ? ' certo' : '') + '" data-a="rc-a" data-v="' + i + '">' + o + '</button>'; }).join('') + '</div>' : '') + '</div>'
    + (e.r.a !== undefined ? '<div class="q-linha vd"><small class="rot-ouve">2 · THE SAME WORDS · SLOWER</small><div class="toca-linha">' + tocar('recado-devagar.mp3') + '<div>' + transcricao('recado-devagar.mp3', TR['recado-devagar.mp3']) + '</div></div>' + (dev ? '<div class="tres-b">' + ['all of it', 'some of it', 'almost nothing'].map(function (o, i) { return '<button type="button" class="pilula' + (e.r.b === i ? ' certo' : '') + '" data-a="rc-b" data-v="' + i + '">' + o + '</button>'; }).join('') + '</div>' : '') + '</div>' : '') + '</div>'
    + '<div class="lado-l">' + (dev ? '<div class="pergunta vd ja"><small>WHAT DID THE MESSAGE SAY?</small><h2>Tap the true ones.</h2></div><div class="achados">' + ACHADOS.map(function (x, i) { var on = e.ach[i]; return '<button type="button" class="ficha-a' + (on ? (x.v ? ' certo' : ' errado') : '') + '" data-a="rc-c" data-n="' + i + '">' + x.t + (on && !x.v ? '<small>The message didn’t say that.</small>' : '') + '</button>'; }).join('') + '</div>' + (nAch === 3 ? '<p class="aprova">A package. The fear was real, and the thing was nothing.</p>' : '') : '<p class="transcricao vazia">Fast one first. Accept “almost nothing”: that is honest.</p>') + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE TRAPS · SAY IT RIGHT, THEN TAP');
};

R.ounao = function (c) {
  var e = S.ou, n = e.n, fim = n >= OUNAO.length;
  if (fim) return cab(c) + trilha(OUNAO, n) + '<div class="foco"><div class="pergunta vd"><small>SAME WOMAN, TWO SENTENCES</small><h2>The fear (of + -ing), and what the fear stops her doing (to + verb).</h2></div></div>';
  var x = OUNAO[n], ok = e.esc === x.v;
  return cab(c) + trilha(OUNAO, n) + '<div class="foco"><div class="q-grande vd"><small>THE SITUATION</small><p>' + x.sit + '</p></div><div class="versoes dois-v">' + [[x.a, 0], [x.b, 1]].map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ou" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '><small>' + (o[1] ? 'TO + VERB · SHE DOESN’T DO IT' : 'OF + -ING · THE FEAR') + '</small>' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ou-prox">Next</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">Is it the thing she fears, or something she doesn’t do because of the fear?</p>' : '') + '</div>';
};

R.memo12 = function (c) {
  var aberto = (S.trans || {})['memo12.mp3'];
  return cab(c) + '<div class="mesa-c mesa-12"><div class="memo vd' + (aberto ? ' aberto' : '') + '">' + (aberto ? '' : '<small>MEMO 01 · DAY 1</small>' + onda(ONDA1, 'velha')) + '<small>MEMO 12 · DAY 12</small>' + onda(ONDA12, aberto ? 'velha' : '') + '<div class="toca-linha">' + tocar('memo12.mp3') + '<div>' + transcricao('memo12.mp3', TR['memo12.mp3']) + '</div></div></div><div class="lado-l">' + ((S.ouviu || {})['memo12.mp3'] ? perguntasMemo(Q12, S.q12, 'q12') : '<p class="transcricao vazia">Play the memo first.</p>') + '</div></div>';
};

R.dias = function (c) {
  var e = S.dias, n = e.n, fim = n >= DIAS.length, v = nervos();
  if (fim) return cab(c) + '<div class="mesa-m">' + medidor(v) + '<div class="lado-l"><div class="pergunta vd"><small>SIX DAYS</small><h2>Six sentences with no help. The shape is yours.</h2></div></div></div>';
  var x = DIAS[n], cheio = e.pick.every(function (p) { return p; }), ok = cheio && e.pick.every(function (p, i) { return p === x.ok[i]; });
  return cab(c) + trilha(DIAS, n) + '<div class="mesa-m">' + medidor(v) + '<div class="lado-l"><div class="q-grande vd"><small>' + x.dia + '</small><p>' + x.q + '</p><p class="montada">She’s ' + e.pick.map(function (p, i) { return '<span class="gap">' + (p || ROTS[i].toLowerCase()) + '</span>'; }).join(' ') + '.</p></div>'
    + (ok ? '<p class="aprova">Say it once more, fast.</p><div><button type="button" class="btn" data-a="di-prox">Next day</button></div>'
      : BANCOS.map(function (b, k) { return '<div class="banco"><small>' + ROTS[k] + '</small><div class="tres-b">' + b.map(function (w) { return '<button type="button" class="pilula' + (e.pick[k] === w ? ' on' : '') + '" data-a="di" data-n="' + k + '" data-v="' + w + '">' + w + '</button>'; }).join('') + '</div></div>'; }).join('') + (cheio ? '<p class="recusa">Not quite. Which piece fits this day?</p>' : '')) + '</div></div>';
};

R.mic = function (c) {
  var e = S.mic, n = e.n, fim = n >= PROMPTS.length, v = nervos();
  return cab(c) + trilha(PROMPTS, n) + '<div class="mesa-m"><div class="palco mini">' + noAr(fim) + medidor(v) + '</div><div class="lado-l">'
    + (fim ? '<div class="pergunta vd"><small>ON AIR</small><h2>One minute, and the nerves are at zero.</h2></div>' : '<div class="pergunta vd ja"><small>PROMPT ' + (n + 1) + ' OF 5</small><h2>' + PROMPTS[n].q + '</h2></div><p class="ini">' + PROMPTS[n].ini + '</p><div><button type="button" class="btn so-prof" data-a="mc">Said it · into the mic</button></div>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I am good at …\nI am scared of …\nI am tired of …', 'Three blanks',
    ['I am good at ', 'I am scared of ', 'I am tired of ', 'I am interested in '], ['ONE HOUR AGO YOU SAID THREE SENTENCES', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Write your three blanks again: the right small word, then -ing.' : 'Write your three blanks again: the right small word, then -ing.'])
    + '<div class="lado-fim"><div class="memo vd"><small>MEMO 30 · DAY 30</small><div class="toca-linha">' + tocar('memo30.mp3') + '<div>' + transcricao('memo30.mp3', TR['memo30.mp3']) + '</div></div></div><div class="grande vd"><span>good <u>at</u> · scared <u>of</u> · tired <u>of</u></span><span>nervous <u>about</u> · interested <u>in</u></span><span>after the small word: <u>-ing</u></span></div>'
    + mostra('fim', 'I am good at fixing bikes.<br>I am scared of speaking in meetings, but less scared now.<br>I am tired of waiting for the bus.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.rs = function (b, n, v) { S.res = +v; };
TOQUES.q1 = function (b, n, v) { S.q1[n] = +v; };
TOQUES['fn-t'] = function () { S.toques++; };
TOQUES.fn = function (b, n, v) { S.fone = +v; };
TOQUES.fd = function (b, n, v) { S.fd.esc = v; };
TOQUES['fd-prox'] = function () { S.fd = { n: S.fd.n + 1, esc: '' }; };
TOQUES['rc-a'] = function (b, n, v) { S.rec.r.a = +v; };
TOQUES['rc-b'] = function (b, n, v) { S.rec.r.b = +v; };
TOQUES['rc-c'] = function (b, n) { S.rec.ach[n] = 1; };
TOQUES.ou = function (b, n, v) { S.ou.esc = +v; };
TOQUES['ou-prox'] = function () { S.ou = { n: S.ou.n + 1, esc: -1 }; };
TOQUES.q12 = function (b, n, v) { S.q12[n] = +v; };
TOQUES.di = function (b, n, v) { S.dias.pick[n] = v; };
TOQUES['di-prox'] = function () { S.dias = { n: S.dias.n + 1, pick: [null, null, null] }; };
TOQUES.mc = function () { S.mic.n++; };
