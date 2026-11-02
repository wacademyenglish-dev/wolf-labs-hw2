/* ============================================================
   SAY THAT AGAIN · THE STATIC RADIO · LIVE CLASS  06/10/2026
   Main series A2 · pedir repetição e esclarecimento: Sorry? · Could you
   say that again? · Could you speak more slowly? · Do you mean…? · How do
   you spell that? · What does … mean? Erro universal: "What?", "Repeat.",
   e balançar a cabeça dizendo yes.
   O MUNDO (da aula velha): uma viagem — aeroporto, hostel, estação,
   fronteira, restaurante, dormitório. Nove áudios em velocidade real,
   conferidos com faster-whisper em 06/10: a transcrição antiga estava
   "limpa" demais (sem contrações, sem "Lovely!", sem "Good afternoon."); a
   daqui é o que a voz diz. O lento da fronteira começa em "the purpose".
   A CARA: o RÁDIO antigo com mostrador de sintonia; o CHIADO (faixas de
   ruído) cobre a palavra que importa e só limpa com o pedido certo.
   Fila: FILA-LIVE-386.md · 060.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'radio' },
  { k: 'abre', est: 'l', min: 7, img: 'plataforma', rot: 'I · Arrival', t: 'An announcement. Everybody moves. You didn’t catch it.', p: 'Play it once. Then pick a card and answer your teacher.' },
  { k: 'tres', est: 'l', min: 7, img: 'plataforma', rot: 'II · Three Words', t: 'You don’t need every word. You need three.', p: 'Play the same announcement. Tap the three things a traveler needs.' },
  { k: 'saidas', est: 'o', min: 7, img: 'radio', rot: 'III · Five Ways Out', t: 'You’ll use these more than any other English on a trip.', p: 'Say the phrase out loud. Then do what the card asks.' },
  { k: 'polido', est: 'f', min: 6, img: 'radio', rot: 'IV · Not “What?”', t: 'Short can sound rude. Choose the one that keeps them talking.', p: 'Say the better one out loud. Then tap it.' },
  { k: 'chiado', est: 'l', min: 7, img: 'radio', rot: 'V · The Static', t: 'Six messages. Static covers the word you need.', p: 'Play it. Say what you need, out loud. Then tap it, and the static clears.' },
  { k: 'cabine', est: 'l', min: 7, extra: 1, img: 'cabine', rot: 'VI · The Booth', t: 'Every border asks three questions, in three different times.', p: 'Play the officer. Choose the time. Then answer out loud.' },
  { k: 'garcom', est: 'o', min: 7, extra: 1, img: 'hostel', rot: 'VII · The Waiter', t: 'Dinner. The waiter speaks fast.', p: 'Play it. Ask about the word you don’t know. Then answer.' },
  { k: 'rapido', est: 'o', min: 7, extra: 1, img: 'hostel', rot: 'VIII · The Fast Talker', t: 'Your teacher speaks fast on purpose. Interrupt, politely.', p: 'Your teacher reads each message fast. Use a way out every time.' },
  { k: 'dorm', est: 'o', min: 7, extra: 1, img: 'dorm', rot: 'IX · The Dorm', t: 'Midnight. Somebody talks to you in the dark.', p: 'Play it. Answer, and ask a question back.' },
  { k: 'fim', est: 'w', min: 6, img: 'radio', rot: 'X · Signal Clear', t: 'Your ways out, in your own words.', p: 'Write what you’ll say the next time you don’t understand. It goes to your My notes.' }
];

var TR = {
  'v-airport.mp3': 'Passengers for flight BA 247 to Lisbon, please proceed to gate 22. Gate 22, closing in 15 minutes.',
  'v-dorm-1.mp3': 'Hey, is anyone sleeping in that bunk? Where are you from?',
  'v-hostel-2.mp3': 'Lovely! You’re in room 4, top bunk. Breakfast is from 7 till 10, and the code for the front door is 1942.',
  'v-imm-1-slow.mp3': '…the purpose of your visit. Why are you here?',
  'v-imm-1.mp3': 'Good afternoon. Why are you visiting?',
  'v-imm-2.mp3': 'And where have you come from today?',
  'v-imm-3.mp3': 'How long are you planning to stay?',
  'v-station.mp3': 'Sorry, love, that train’s been cancelled. Next one’s at ten past, platform 6. You’ll have to change at Reading.',
  'v-waiter-2.mp3': 'That comes with chips or salad, and there’s a sourdough bread on the side. Any allergies I should know about?'
};

var ABRE = [
  { k: 'WHAT YOU CAUGHT', q: 'What did you hear? One word is enough.', fup: 'And what did you do with it?', st: ['I heard …', 'Something about …'], ex: 'I heard “gate” and a number.' },
  { k: 'LAST TIME', q: 'The last time you didn’t understand someone, what did you do?', fup: 'Your teacher keeps this one for the end.', st: ['I said …', 'I just …'], ex: 'I just said yes and smiled. Then I was lost.' }
];
var FORMAS = [{ k: 'polido', t: 'SORRY? / SAY THAT AGAIN?' }, { k: 'mean', t: 'DO YOU MEAN…?' }, { k: 'what', t: 'WHAT? / REPEAT.', erro: 1 }, { k: 'yes', t: 'I JUST SAID YES', erro: 1 }];

var TRES = [
  { t: 'a gate number', ok: 1, w: 'Gate 22. The right door.' }, { t: 'a city', ok: 1, w: 'Lisbon. It tells you the announcement is yours.' }, { t: 'a time', ok: 1, w: 'Fifteen minutes. Walk or run.' },
  { t: 'a price', w: 'Nobody announces prices at a gate.' }, { t: 'a door code', w: 'That’s the hostel, later.' }, { t: 'a person’s name', w: 'Only if you are being paged.' },
  { t: 'the weather', w: 'Different voice, different place.' }, { t: 'a seat number', w: 'It’s on your boarding pass.' }
];
var TRES_ORD = ordem(TRES.map(function (x, i) { return i; }), 4);

var SAIDAS = [
  { w: 'Sorry?', m: 'the fastest', s: 'Sorry? · Sorry, what was that?', ask: 'Say it three times, like you mean it.' },
  { w: 'Could you say that again?', m: 'the polite one', s: 'Sorry, could you say that again, please?', ask: 'Say it as if there is glass between you.' },
  { w: 'Could you speak more slowly?', m: 'the one that fixes it', s: 'Could you speak more slowly, please?', ask: 'Ask your teacher to slow down, now.' },
  { w: 'Do you mean…?', m: 'the one that saves you', s: 'Do you mean platform six?', ask: 'You heard “room four”. Check it.' },
  { w: 'How do you spell that?', m: 'names and places', s: 'How do you spell “Reading”?', ask: 'Ask your teacher to spell their street.' },
  { w: 'What does … mean?', m: 'new words', s: 'What does “allergy” mean?', ask: 'Ask about one word from this lesson.' }
];

var POLIDO = [
  { ok: 'Sorry, what was that?', mau: 'What?' },
  { ok: 'Could you say that again, please?', mau: 'Repeat.' },
  { ok: 'Could you speak more slowly, please?', mau: 'Slow!' },
  { ok: 'Sorry, do you mean platform six?', mau: 'Six? Six what?' },
  { ok: 'How do you spell that?', mau: 'Write it.' },
  { ok: 'Sorry, what does “delayed” mean?', mau: 'I don’t understand.' }
];

var PEDIDOS = [['rep', 'Sorry, could you say that again?'], ['slow', 'Could you speak more slowly, please?'], ['mean', 'Do you mean …?'], ['spell', 'How do you spell that?'], ['def', 'Sorry, what does that word mean?'], ['rude', 'What?']];
var CHIADO = [
  { au: 'v-airport.mp3', onde: 'THE AIRPORT', a: 'Passengers for flight BA 247 to Lisbon, please proceed to ', x: 'gate 22', b: '.', k: 'rep', diz: 'Sorry, could you say that again?', why: 'You heard nothing clear: ask for it again.' },
  { au: 'v-hostel-2.mp3', onde: 'THE HOSTEL', a: 'The code for the front door is ', x: '1942', b: '.', k: 'mean', diz: 'Do you mean one nine four two?', why: 'You caught most of the number: check it.' },
  { au: 'v-station.mp3', onde: 'THE STATION', a: 'You’ll have to change at ', x: 'Reading', b: '.', k: 'spell', diz: 'How do you spell that?', why: 'A place name: ask for the spelling. R-E-A-D-I-N-G.' },
  { au: 'v-station.mp3', onde: 'THE STATION', a: 'Next one’s at ten past, ', x: 'platform 6', b: '.', k: 'mean', diz: 'Do you mean platform six?', why: 'Check the part you caught.' },
  { au: 'v-imm-1.mp3', au2: 'v-imm-1-slow.mp3', onde: 'THE BORDER', a: 'What’s the ', x: 'purpose', b: ' of your visit?', k: 'slow', diz: 'Could you speak more slowly, please?', why: 'Too fast. Ask for slower, then play the slow one.' },
  { au: 'v-waiter-2.mp3', onde: 'THE RESTAURANT', a: 'Any ', x: 'allergies', b: ' I should know about?', k: 'def', diz: 'Sorry, what does “allergies” mean?', why: 'A new word: ask what it means.' }
];

var CABINE = [
  { au: 'v-imm-1.mp3', q: 'Why are you visiting?', k: 'now', ex: 'I’m a tourist. I’m here for a holiday.' },
  { au: 'v-imm-2.mp3', q: 'And where have you come from today?', k: 'before', ex: 'I’ve come from São Paulo.' },
  { au: 'v-imm-3.mp3', q: 'How long are you planning to stay?', k: 'after', ex: 'I’m going to stay for two weeks.' }
];
var TEMPOS = [['now', 'NOW'], ['before', 'BEFORE'], ['after', 'AFTER']];

var GARCOM = [
  { q: 'Ask about the word you didn’t know.', m: 'Sorry, what does “allergies” mean?' },
  { q: 'Your teacher explains. Now answer: can you eat everything?', m: 'I can’t eat peanuts. / No allergies, thanks.' },
  { q: 'Check what comes with the dish.', m: 'Sorry, do you mean chips or salad?' },
  { q: 'Order, and ask one question back.', m: 'I’ll have the salad. Is the bread free?' }
];
var RAPIDO = [
  { t: 'THE HOSTEL', s: 'Hi, so, check-out’s at eleven, towels are two euros, and the kitchen closes at midnight, okay?' },
  { t: 'THE TAXI', s: 'That’s gonna be about thirty-five, plus the airport fee, and I only take cash, alright?' },
  { t: 'THE PHARMACY', s: 'Take one of these twice a day after meals, and don’t mix them with ibuprofen.' },
  { t: 'THE MUSEUM', s: 'Tickets are twelve, students eight, and the east wing is closed for renovation today.' },
  { t: 'A NEW FRIEND', s: 'You should totally come to the gig at the Crown on Friday, it’s near Marylebone.' }
];
var PARTES = [['rep', 'SAY THAT AGAIN'], ['slow', 'MORE SLOWLY'], ['mean', 'DO YOU MEAN…?'], ['spell', 'SPELL / WHAT DOES … MEAN']];
var DORM = [
  { q: 'Answer the first question.', m: 'No, it’s free. / Sorry, is this one yours?' },
  { q: 'Answer the second question.', m: 'I’m from Brazil, from Recife.' },
  { q: 'Ask a question back.', m: 'And you? Where are you from?' },
  { q: 'Your teacher answers fast. Check what you caught.', m: 'Sorry, do you mean Melbourne?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, tres: {}, pol: { n: 0, esc: '' }, ch: { n: 0, esc: '' }, cab: {}, gar: { n: 0 }, rap: { n: 0, partes: {} }, dorm: { n: 0 } };

function radio(freq, cls) {
  return '<div class="radio' + (cls ? ' ' + cls : '') + '"><div class="grade-r"></div><div class="visor-r"><span class="faixa-r"></span><i style="left:' + freq + '%"></i><small>88</small><small>98.6</small><small>108</small></div><div class="botoes-r"><span></span><span></span></div></div>';
}
function estatica(txt, limpo) { return limpo ? '<b class="limpo">' + txt + '</b>' : '<span class="ruido" aria-label="static">' + txt.replace(/./g, '▒') + '</span>'; }
function passosTrilha(lista, e, chave, nome) {
  var n = Math.min(e.n, lista.length - 1), x = lista[n];
  return trilha(lista, e.n) + '<div class="pergunta vd ja"><small>' + nome + ' · STEP ' + (n + 1) + ' OF ' + lista.length + '</small><h2>' + x.q + '</h2></div>' + mostra(chave + n, x.m, 1)
    + (n < lista.length - 1 ? '<div><button type="button" class="btn" data-a="' + chave + '-prox">Next step</button></div>' : '');
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · FREQUENCY 98.6 · WEAK SIGNAL</span><h1>Say That <b>Again</b></h1>'
    + '<p class="sub">The static only clears when you ask the right way. <b>Sorry?</b> · <b>Do you mean…?</b> · <b>More slowly, please.</b></p>'
    + '<div class="chipsx"><span class="pilula">Could you say that again?</span><span class="pilula">Do you mean…?</span><span class="pilula">How do you spell that?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn it on</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + radio(52, 'grande') + '<p class="linha-r">Passengers for flight BA 247 to Lisbon, please proceed to ' + estatica('gate 22', 0) + '.</p></div></div>';
};

R.abre = function (c) {
  var topo = cab(c), corpo = cartasPessoais(c, ABRE, S.abre, 'abre').slice(topo.length);
  return topo + '<div class="toca-barra"><span class="rot-ouve">THE ANNOUNCEMENT</span>' + tocar('v-airport.mp3') + '<div>' + transcricao('v-airport.mp3', TR['v-airport.mp3']) + '</div></div>' + corpo
    + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.tres = function (c) {
  var n = 0; TRES.forEach(function (x, i) { if (S.tres[i] && x.ok) n++; });
  return cab(c) + '<div class="toca-barra">' + tocar('v-airport.mp3') + '<div>' + transcricao('v-airport.mp3', TR['v-airport.mp3'], 'tres-t') + '</div></div>'
    + '<div class="chips-t">' + TRES_ORD.map(function (i) { var x = TRES[i], on = S.tres[i]; return '<button type="button" class="ficha-t' + (on ? (x.ok ? ' certo' : ' errado') : '') + '" data-a="tr" data-n="' + i + '"><b>' + x.t + '</b>' + (on ? '<small>' + x.w + '</small>' : '') + '</button>'; }).join('') + '</div>'
    + (n === 3 ? '<p class="aprova" style="text-align:center">Gate, city, time. Now say all three in one sentence.</p>' + mostra('tres', 'Gate 22, Lisbon, closing in 15 minutes.', 1) : '<p class="dica-aluno" style="text-align:center">' + n + ' of 3 found.</p>');
};

R.saidas = function (c) {
  return cab(c) + '<div class="saidas">' + SAIDAS.map(function (x, i) { return '<div class="saida vd"><small>' + x.m + '</small><b>' + x.w + '</b><p>“' + x.s + '”</p><em>' + x.ask + '</em></div>'; }).join('') + '</div>';
};

R.polido = function (c) {
  var e = S.pol, n = e.n, fim = n >= POLIDO.length;
  if (fim) return cab(c) + trilha(POLIDO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX CHOICES</small><h2>The polite one is also the one that works.</h2></div></div>';
  var x = POLIDO[n], ok = e.esc === 'ok';
  return cab(c) + trilha(POLIDO, n) + '<div class="foco">' + (ok ? '<div class="balao vd"><small>THE WAY OUT</small><p>' + x.ok + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="po-prox">Next</button></div>'
    : '<div class="versoes dois-v">' + ordem([[x.ok, 'ok'], [x.mau, 'mau']], n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="po" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">That one stops the conversation. Choose the question.</p>' : '')) + '</div>';
};

R.chiado = function (c) {
  var e = S.ch, n = e.n, fim = n >= CHIADO.length;
  if (fim) return cab(c) + trilha(CHIADO, n) + '<div class="mesa-r"><div class="vd quadro-r">' + radio(52) + '</div><div class="lado-l"><div class="pergunta vd"><small>SIGNAL CLEAR</small><h2>Six clear signals. Every one opened with the right question.</h2></div></div></div>';
  var x = CHIADO[n], ok = e.esc === x.k, ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(CHIADO, n) + '<div class="mesa-r"><div class="vd quadro-r">' + radio(ok ? 52 : 30 + n * 6) + '<div class="toca-linha">' + tocar(x.au) + (ok && x.au2 ? tocar(x.au2) + '<span class="rot-ouve">THE SLOW ONE</span>' : '<span class="rot-ouve">' + x.onde + '</span>') + '</div></div>'
    + '<div class="lado-l"><div class="mensagem-r vd"><small>' + x.onde + '</small><p>' + x.a + estatica(x.x, ok) + x.b + '</p></div>'
    + (ok ? '<div class="balao vd"><small>YOU SAID</small><p>' + x.diz + '</p></div><p class="aprova">' + x.why + '</p>' + (ouviu ? transcricao(x.au, TR[x.au], 'ch' + n) : '') + '<div><button type="button" class="btn" data-a="ch-prox">Next message</button></div>'
      : (ouviu ? '<h5 class="so-prof rot-ouve">TAP WHAT YOU SAID</h5><div class="pedidos">' + PEDIDOS.map(function (p) { return '<button type="button" class="versao' + (e.esc === p[0] ? ' errado' : '') + '" data-a="ch" data-v="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + (e.esc === 'rude' ? 'What? sounds rude and asks for nothing. Choose a real request.' : 'The static didn’t clear. What exactly do you need: again, slower, a check, a spelling, a meaning?') + '</p>' : '') : '<p class="transcricao vazia">Play it first.</p>')) + '</div></div>';
};

R.cabine = function (c) {
  return cab(c) + '<div class="faixa-cab vd" style="background-image:url(' + img('cabine') + ')"><span>THE BOOTH · THREE QUESTIONS</span></div><div class="cabine3">' + CABINE.map(function (x, i) {
    var esc = S.cab[i], ok = esc === x.k, ouviu = (S.ouviu || {})[x.au];
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><div class="toca-linha">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au], 'cb' + i) + '</div></div>'
      + (ouviu ? '<div class="tres-b">' + TEMPOS.map(function (t) { return '<button type="button" class="pilula' + (esc === t[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="cb" data-n="' + i + '" data-v="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>' : '')
      + (ok ? mostra('cbx' + i, x.ex, 1) : esc ? '<p class="recusa">Listen again. Is it about now, before, or after?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.garcom = function (c) {
  return cab(c) + '<div class="mesa-r"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('hostel') + ')"><span>THE RESTAURANT</span></div><div class="toca-linha">' + tocar('v-waiter-2.mp3') + '<div>' + transcricao('v-waiter-2.mp3', TR['v-waiter-2.mp3'], 'gar-t') + '</div></div></div><div class="lado-l">' + passosTrilha(GARCOM, S.gar, 'ga', 'THE WAITER') + '</div></div>';
};

R.rapido = function (c) {
  var e = S.rap, n = e.n, fim = n >= RAPIDO.length;
  if (fim) return cab(c) + trilha(RAPIDO, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE FAST SPEAKERS</small><h2>And you stopped every one of them, politely.</h2></div></div>';
  var x = RAPIDO[n], p = e.partes[n] || {};
  return cab(c) + trilha(RAPIDO, n) + '<div class="mesa-r"><div class="lado-l"><div class="mensagem-r vd rapida"><small>' + x.t + ' · YOUR TEACHER READS IT FAST</small><p class="so-prof">“' + x.s + '”</p><p class="aluno-ve">Your teacher is talking fast. Stop them, politely.</p></div></div>'
    + '<div class="lado-l"><h5 class="so-prof rot-ouve">TAP EACH WAY OUT YOU HEARD</h5><div class="tres-b">' + PARTES.map(function (k) { return '<button type="button" class="chip' + (p[k[0]] ? ' on' : '') + '" data-a="rp" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div>'
    + '<p class="recusa">Not this: What? · Repeat. · nodding</p><div><button type="button" class="btn" data-a="rp-prox">Next speaker</button></div></div></div>';
};

R.dorm = function (c) {
  return cab(c) + '<div class="mesa-r"><div class="lado-l"><div class="aberta vd" style="background-image:url(' + img('dorm') + ')"><span>MIDNIGHT · THE DORM</span></div><div class="toca-linha">' + tocar('v-dorm-1.mp3') + '<div>' + transcricao('v-dorm-1.mp3', TR['v-dorm-1.mp3'], 'dm-t') + '</div></div></div><div class="lado-l">' + passosTrilha(DORM, S.dorm, 'dm', 'THE DORM') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Next time I don’t understand, I’ll say …', 'Your ways out',
    ['Sorry, could you say that again?', 'More slowly, please.', 'Do you mean ', 'How do you spell that?'], ['THE LAST TIME YOU DIDN’T UNDERSTAND', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. What will you say next time? And on your next trip?' : 'What will you say next time? Which way out will you use first on your next trip?'])
    + '<div class="lado-fim">' + radio(52, 'mini') + '<div class="grande vd"><span><u>Sorry?</u> · <u>Could you say that again?</u></span><span><u>More slowly, please.</u></span><span><u>Do you mean…?</u> · <u>How do you spell that?</u></span><span>never <s>What?</s> · <s>Repeat.</s></span></div>'
    + mostra('fim', 'Last time I just said yes. Next time I’ll say: Sorry, could you speak more slowly, please?<br>And if I catch a number, I’ll check it: Do you mean gate 22?', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.tr = function (b, n) { S.tres[n] = 1; };
TOQUES.po = function (b, n, v) { S.pol.esc = v; };
TOQUES['po-prox'] = function () { S.pol = { n: S.pol.n + 1, esc: '' }; };
TOQUES.ch = function (b, n, v) { S.ch.esc = v; };
TOQUES['ch-prox'] = function () { S.ch = { n: S.ch.n + 1, esc: '' }; };
TOQUES.cb = function (b, n, v) { S.cab[n] = v; };
TOQUES['ga-prox'] = function () { S.gar.n++; };
TOQUES.rp = function (b, n, v) { var p = S.rap.partes[S.rap.n] = S.rap.partes[S.rap.n] || {}; p[v] = !p[v]; };
TOQUES['rp-prox'] = function () { S.rap.n++; };
TOQUES['dm-prox'] = function () { S.dorm.n++; };
