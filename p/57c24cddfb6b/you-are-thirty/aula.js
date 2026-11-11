/* ============================================================
   YOU ARE THIRTY · BLOW OUT THE CANDLES · LIVE CLASS  05/10/2026
   Main series A1 · be para idade e estados: I'm thirty · I'm hungry /
   cold / afraid · How old are you? · THIR-ty × thir-TEEN (a batida)
   O MUNDO (da aula velha): um bolo de aniversário; cada frase com I am
   acende uma vela; a bolsa devolve o que não se "tem" (thirty, hungry).
   A CARA: o BOLO em CSS, escuro (cobertura de chocolate, velas com
   chama), e uma BOLSA de couro.
   ÁUDIOS (faster-whisper): os p-* NÃO são "She is fourteen" como dizia
   a transcrição velha — cada pessoa se apresenta em 1ª pessoa ("Hi, I am
   Ana. I am 18."). Agora o aluno ouve e conta: She's eighteen.
   Fila: FILA-LIVE-386.md · 043.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'bolo' },
  { k: 'bolsa', est: 'f', min: 6, img: 'mesa', rot: 'I · On You or in the Bag', t: 'What you are, and what you have.', p: 'Say the sentence out loud. Then put the card where it goes: on you, or in the bag.' },
  { k: 'gx', est: 'o', min: 4, img: 'bolo', rot: 'II · Yes, I Am', t: 'Ping-pong at the party. Three words for each answer.', p: 'The teacher asks. Tap your true answer and say it fast. Then you ask.' },
  { k: 'velas', est: 'o', min: 7, img: 'bolo', rot: 'III · The Family of Am', t: 'Eight states. Every sentence starts the same way.', p: 'Read the situation. Say the whole sentence. Then light the candle.' },
  { k: 'ouvir', est: 'l', min: 7, img: 'bolo', rot: 'IV · Listen', t: 'The same shape every time.', p: 'Listen first. Say it three times. Then see the words.' },
  { k: 'batida', est: 'l', min: 7, img: 'bolo', rot: 'V · Where the Beat Falls', t: 'Same sounds, different beat.', p: 'Play. Clap the beat. Choose it. Then say the number.' },
  { k: 'idades', est: 'l', min: 7, img: 'mesa', rot: 'VI · How Old Is She?', t: 'Six people at the party say hello.', p: 'Listen to each one. Tap the age. Then tell your teacher: She’s … / He’s …' },
  { k: 'pergunta', est: 'l', min: 7, extra: 1, img: 'bolo', rot: 'VII · The Question', t: 'How old are you? is one fast block.', p: 'Play. Say it three times, faster each time.' },
  { k: 'mimica', est: 'o', min: 7, extra: 1, img: 'frio', rot: 'VIII · Guess How I Am', t: 'A mime game.', p: 'One mimes, one guesses: Are you …? Yes, I am. / No, I’m not.' },
  { k: 'festa', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'IX · The Family Party', t: 'A party for your family. Four cakes.', p: 'Who are they, and how old are they? Your teacher asks questions.' },
  { k: 'fim', est: 'w', min: 6, img: 'bolo', rot: 'X · Blow Out the Candles', t: 'Write your birthday card.', p: 'Your age, your family’s ages, and three states. The red line watches have. It goes to your My notes.' }
];

var TR = {
  'y-thirty.mp3': 'I am thirty.', 'y-im.mp3': 'I’m thirty.', 'y-hungry.mp3': 'I am hungry.', 'y-cold.mp3': 'I am cold.', 'y-have.mp3': 'I have a phone.',
  'y-howold.mp3': 'How old are you?', 'y-howolds.mp3': 'How old is she?', 'y-heis.mp3': 'He is fifteen.', 'y-imnot.mp3': 'I’m not thirty.',
  'p-bea.mp3': 'Hi, I am Bea. I am fourteen.', 'p-marcos.mp3': 'Hello, I am Marcos. I am thirty.', 'p-ana.mp3': 'Hi, I am Ana. I am eighteen.',
  'p-julia.mp3': 'Hi, I am Julia. I am fifteen.', 'p-rui.mp3': 'Hello, I am Rui. I am seventy.', 'p-paulo.mp3': 'Hello, I am Paulo. I am fifty.'
};

var FORMAS = [{ k: 'am', t: 'I’M … (AGE)' }, { k: 'num', t: 'JUST THE NUMBER' }, { k: 'have', t: 'I HAVE … YEARS', erro: 1 }, { k: 'havest', t: 'I HAVE HUNGRY / COLD', erro: 1 }];
var BOLSA = [
  { t: 'a phone', k: 'have', s: 'I have a phone.' }, { t: 'thirty', k: 'am', s: 'I am thirty.' }, { t: 'Mexican', k: 'am', s: 'I am Mexican.' }, { t: 'a car', k: 'have', s: 'I have a car.' },
  { t: 'hungry', k: 'am', s: 'I am hungry.' }, { t: 'two brothers', k: 'have', s: 'I have two brothers.' }, { t: 'a dog', k: 'have', s: 'I have a dog.' }, { t: 'cold', k: 'am', s: 'I am cold.' }
];
var VELAS = [
  { p: 'hungry', ic: '🍽️', c: 'It’s nine at night. No dinner.' }, { p: 'thirsty', ic: '🥤', c: 'The bottle is empty.' }, { p: 'cold', ic: '🥶', c: 'The window is open. It’s winter.' },
  { p: 'hot', ic: '🥵', c: 'The fan is off. It’s 35 degrees.' }, { p: 'afraid', ic: '😨', c: 'The room is dark. A noise!' }, { p: 'sleepy', ic: '😴', c: 'It’s one in the morning.' },
  { p: 'tired', ic: '😮‍💨', c: 'Ten hours of work today.' }, { p: 'thirty', ic: '🎂', c: 'Today is your 30th birthday.' }
];
var OUVIR = ['y-thirty.mp3', 'y-im.mp3', 'y-hungry.mp3', 'y-cold.mp3', 'y-have.mp3'];
var PARES = [
  { au: 'f-30.mp3', ty: '30', tyw: 'THIR-ty', teen: '13', teenw: 'thir-TEEN', alvo: 'ty' }, { au: 'f-16.mp3', ty: '60', tyw: 'SIX-ty', teen: '16', teenw: 'six-TEEN', alvo: 'teen' },
  { au: 'f-40.mp3', ty: '40', tyw: 'FOR-ty', teen: '14', teenw: 'four-TEEN', alvo: 'ty' }, { au: 'f-15.mp3', ty: '50', tyw: 'FIF-ty', teen: '15', teenw: 'fif-TEEN', alvo: 'teen' },
  { au: 'f-18.mp3', ty: '80', tyw: 'EIGH-ty', teen: '18', teenw: 'eigh-TEEN', alvo: 'teen' }, { au: 'f-70.mp3', ty: '70', tyw: 'SEVEN-ty', teen: '17', teenw: 'seven-TEEN', alvo: 'ty' }
];
var PESSOAS = [
  { n: 'BEA', g: 'She', au: 'p-bea.mp3', idade: '14', o: ['14', '40'], w: 'fourteen' }, { n: 'MARCOS', g: 'He', au: 'p-marcos.mp3', idade: '30', o: ['30', '13'], w: 'thirty' },
  { n: 'ANA', g: 'She', au: 'p-ana.mp3', idade: '18', o: ['18', '80'], w: 'eighteen' }, { n: 'JULIA', g: 'She', au: 'p-julia.mp3', idade: '15', o: ['15', '50'], w: 'fifteen' },
  { n: 'RUI', g: 'He', au: 'p-rui.mp3', idade: '70', o: ['70', '17'], w: 'seventy' }, { n: 'PAULO', g: 'He', au: 'p-paulo.mp3', idade: '50', o: ['50', '15'], w: 'fifty' }
];
var PERGUNTA = ['y-howold.mp3', 'y-howolds.mp3', 'y-heis.mp3', 'y-imnot.mp3'];
var CARTAS = [{ k: 'cold', ic: '🥶' }, { k: 'hungry', ic: '🍽️' }, { k: 'tired', ic: '😮‍💨' }, { k: 'sleepy', ic: '😴' }, { k: 'afraid', ic: '😨' }, { k: 'hot', ic: '🥵' }, { k: 'thirsty', ic: '🥤' }, { k: 'bored', ic: '🥱' }];
var PARTES_M = [{ k: 'pergunta', t: 'ARE YOU …?' }, { k: 'curta', t: 'YES, I AM / NO, I’M NOT' }, { k: 'erro', t: 'HEARD: DO YOU HAVE COLD?', erro: 1 }];
var CONVIDADOS = ['SOMEONE IN YOUR FAMILY', 'A CHILD YOU KNOW', 'A FRIEND', 'YOU'];
var PARTES_F = [{ k: 'quem', t: 'THIS IS MY …' }, { k: 'idade', t: 'HE’S / SHE’S … (AGE)' }, { k: 'estado', t: 'A STATE (always hungry …)' }, { k: 'erro', t: 'HEARD: SHE HAS … YEARS', erro: 1 }];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  bolsa: { sel: -1, onde: {}, erro: '', formas: {} }, velas: { n: 0 }, ouv: {}, bat: { n: 0, esc: '' }, ida: { sel: -1, esc: {} }, perg: {}, mim: { c: -1, partes: {}, feitas: 0 }, festa: { n: 0, partes: {} } };

function bolo(acesas, total, grande) {
  var v = ''; for (var i = 0; i < total; i++) v += '<span class="vela' + (i < acesas ? ' acesa' : '') + '"><i></i></span>';
  return '<div class="bolo' + (grande ? ' grande' : '') + '"><div class="velas">' + v + '</div><div class="camada c1"></div><div class="camada c2"></div><div class="prato-b"></div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · BLOW OUT THE CANDLES</span><h1>You Are <b>Thirty</b></h1>'
    + '<p class="sub">In English you don’t have your age. You <b>are</b> your age.</p>'
    + '<div class="chipsx"><span class="pilula">I’m 30</span><span class="pilula">I’m hungry</span><span class="pilula">How old are you?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Light the first candle</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-b">' + bolo(5, 8, 1) + '<p class="sussurro">Every sentence with I am lights a candle.</p></div></div>';
};

R.bolsa = function (c) {
  var e = S.bolsa, x = e.sel >= 0 ? BOLSA[e.sel] : null, n = Object.keys(e.onde).length;
  var cartas = '<div class="cartas-b">' + BOLSA.map(function (b, i) { return e.onde[i] ? '' : '<button type="button" class="carta-b' + (e.sel === i ? ' on' : '') + '" data-a="bs" data-n="' + i + '">' + b.t + '</button>'; }).join('') + '</div>';
  var lugar = function (k, t) { var lista = BOLSA.filter(function (b, i) { return e.onde[i] && b.k === k; }); return '<button type="button" class="lugar ' + k + (x ? ' pronto' : '') + '" data-a="bs-v" data-v="' + k + '"><small>' + t + '</small><div>' + lista.map(function (b) { return '<span>' + b.s + '</span>'; }).join('') + '</div></button>'; };
  return cab(c) + '<div class="partes so-prof"><h5>FIRST ASK: HOW OLD ARE YOU? · TAP HOW THEY SAID IT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (e.formas[f.k] ? ' on' : '') + '" data-a="bs-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>'
    + cartas + (x ? '<p class="ini" style="text-align:center">Say it: “I … ' + x.t + '.” Then tap where it goes.</p>' : '<p class="dica-aluno" style="text-align:center">' + (n === 8 ? 'Three of those eight are the whole lesson: thirty, hungry, cold.' : 'Tap a card.') + '</p>')
    + (e.erro ? '<p class="recusa" style="text-align:center">' + (e.erro === 'am' ? 'It bounces back: that’s not a thing you carry. It’s you: I am …' : 'That one is a thing you have: I have …') + '</p>' : '')
    + '<div class="lugares">' + lugar('am', 'ON YOU · what you are · I am …') + lugar('have', 'IN THE BAG · what you have · I have …') + '</div>';
};

R.velas = function (c) {
  var e = S.velas, n = e.n;
  var lado = n >= VELAS.length ? '<div class="pergunta vd"><small>EIGHT CANDLES</small><h2>Eight sentences, and every one starts with I am. Your age is just one of the family.</h2></div>' + follow('NOW MIME', 'Your teacher mimes one. Guess: You’re …!', ['You’re …!', 'Are you …?'], [], 'vl')
    : '<div class="pede vd"><small>SITUATION ' + (n + 1) + ' OF 8</small><b>' + VELAS[n].c + '</b></div><p class="ini">I am … ' + VELAS[n].ic + '</p><div><button type="button" class="btn cheio" data-a="vl">Said it · light the candle</button></div>'
      + mostra('vl' + n, 'I am ' + VELAS[n].p + '. I’m ' + VELAS[n].p + '.');
  return cab(c) + '<div class="mesa-v"><div class="vd capa-b">' + bolo(n, 8, 1) + '<div class="ditos">' + VELAS.slice(0, n).map(function (v) { return '<span>I’m ' + v.p + '</span>'; }).join('') + '</div></div><div class="lado-l">' + lado + '</div></div>';
};

function listaOuvir(lista, e, toque) {
  return '<div class="escutas">' + lista.map(function (au, i) {
    var ouviu = (S.ouviu || {})[au];
    return '<div class="toca-linha vd' + (e[i] ? ' feito' : '') + '"><span class="num">' + (i + 1) + '</span>' + tocar(au) + '<div class="lin">' + (e[i] ? '<span class="frase-o">' + TR[au] + '</span>' : ouviu ? '<button type="button" class="pilula" data-a="' + toque + '" data-n="' + i + '">Said it three times · show it</button>' : '<span class="transcricao vazia">Listen first.</span>') + '</div></div>';
  }).join('') + '</div>';
}
R.ouvir = function (c) { return cab(c) + listaOuvir(OUVIR, S.ouv, 'ov') + (Object.keys(S.ouv).length === 5 ? '<p class="aprova" style="text-align:center">I’m thirty. Fast, one sound. And have is still right for things: I have a phone.</p>' : ''); };
R.pergunta = function (c) { return cab(c) + listaOuvir(PERGUNTA, S.perg, 'pg') + (Object.keys(S.perg).length === 4 ? follow('NOW YOU', 'Ask me about three people in my family.', ['How old is your …?', 'How old are …?'], [], 'pg') : ''); };

R.batida = function (c) {
  var e = S.bat, n = e.n;
  if (n >= PARES.length) return cab(c) + trilha(PARES, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Punch at the start: a -ty. Punch at the end: a -teen.</h2></div>' + follow('NOW YOU', 'Say a number. Your teacher claps the beat.', ['thirty', 'thirteen', 'fifty', 'fifteen'], [], 'bt') + '</div>';
  var x = PARES[n], ouviu = (S.ouviu || {})[x.au], esc = e.esc, ok = esc === x.alvo;
  var b = function (k, num, w) { return '<button type="button" class="batida-b' + (esc === k ? (ok ? ' certo' : ' errado') : '') + '" data-a="bt" data-v="' + k + '"' + (ouviu ? '' : ' disabled') + '><b>' + num + '</b><span>' + w.split('-').map(function (s) { return s === s.toUpperCase() ? '<u>' + s + '</u>' : s; }).join('·') + '</span><i>' + (k === 'ty' ? 'DA-da' : 'da-DA') + '</i></button>'; };
  return cab(c) + trilha(PARES, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (ouviu ? 'Clap it. Where is the punch?' : 'Listen first.') + '</span></div><div class="batidas">' + b('ty', x.ty, x.tyw) + b('teen', x.teen, x.teenw) + '</div>'
    + (esc && !ok ? '<p class="recusa" style="text-align:center">Play it again and clap. Where is the punch?</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. Say it with the punch: ' + (x.alvo === 'ty' ? x.tyw : x.teenw) + '.</p><div style="text-align:center"><button type="button" class="btn" data-a="bt-prox">Next</button></div>' : '') + '</div>';
};

R.idades = function (c) {
  var e = S.ida, x = e.sel >= 0 ? PESSOAS[e.sel] : null;
  var bolos = '<div class="convidados">' + PESSOAS.map(function (p, i) { var ok = e.esc[i] === p.idade; return '<button type="button" class="convidado vd' + (e.sel === i ? ' on' : '') + (ok ? ' feito' : '') + '" data-a="id" data-n="' + i + '">' + bolo(ok ? 1 : 0, 1) + '<b>' + p.n + '</b><small>' + (ok ? p.idade : '?') + '</small></button>'; }).join('') + '</div>';
  var lado = '<p class="dica-aluno" style="text-align:center">Tap a person.</p>';
  if (x) {
    var ouviu = (S.ouviu || {})[x.au], esc = e.esc[e.sel], ok = esc === x.idade;
    lado = '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>' + (ouviu ? '<div class="tres-b centro">' + ordem(x.o, e.sel).map(function (o) { return '<button type="button" class="pilula grande' + (esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="id-v" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>' : '')
      + (esc && !ok ? '<p class="recusa" style="text-align:center">Play it again and clap the beat.</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. Tell your teacher: <b>' + x.g + '’s ' + x.w + '.</b> (not ' + x.g.toLowerCase() + ' has)</p>' : '') + '</div>';
  }
  return cab(c) + bolos + lado;
};

R.mimica = function (c) {
  var e = S.mim, x = e.c >= 0 ? CARTAS[e.c] : null, p = e.partes;
  return cab(c) + '<div class="mesa-v"><div class="lado-l"><div class="cartas-m">' + CARTAS.map(function (k, i) { return '<button type="button" class="carta-m' + (e.c === i ? ' on' : '') + '" data-a="mm" data-n="' + i + '">' + (e.c === i ? k.ic + '<b>' + k.k + '</b>' : '?') + '</button>'; }).join('') + '</div>'
    + '<p class="dica-aluno">The mimer taps a card (the other person looks away). Round ' + (e.feitas + 1) + ' of 6.</p></div><div class="lado-l">'
    + '<div class="pergunta vd"><small>THE GUESSER ASKS</small><h2>Are you …? → Yes, I am. / No, I’m not.</h2></div>' + fala('mm', ['Are you cold?', 'Yes, I am.', 'No, I’m not.', 'I’m …'], CARTAS.map(function (k) { return k.k; }))
    + '<div class="partes so-prof"><h5>TAP WHAT YOU HEAR</h5>' + PARTES_M.map(function (k) { return '<button type="button" class="chip frase' + (k.erro ? ' erro-ouvido' : '') + (p[k.k] ? ' on' : '') + '" data-a="mm-p" data-v="' + k.k + '">' + k.t + '</button>'; }).join('') + '</div>'
    + (p.erro ? '<p class="recusa">States use be: Are you cold? I’m hungry.</p>' : '') + '<div><button type="button" class="btn" data-a="mm-prox">Next round</button></div>' + (e.feitas >= 6 ? '<p class="aprova">Six rounds. Every state with be.</p>' : '') + '</div></div>';
};

R.festa = function (c) {
  var e = S.festa, n = e.n, fim = n >= CONVIDADOS.length;
  var bolos = '<div class="convidados quatro">' + CONVIDADOS.map(function (g, i) { return '<div class="convidado vd' + (i === n ? ' on' : '') + (i < n ? ' feito' : '') + '">' + bolo(i < n ? 1 : 0, 1) + '<b>' + g + '</b></div>'; }).join('') + '</div>';
  if (fim) return cab(c) + bolos + follow('ABOUT YOU', 'Are you hungry right now? What are you afraid of? Now ask me: How old are you? Are you cold?', ['I’m …', 'I’m afraid of …', 'How old are you?'], [], 'fs', mostra('fs', 'No, I’m not hungry. I’m afraid of spiders! How old are you?', 1));
  var p = e.partes[n] || {};
  return cab(c) + bolos + '<div class="foco"><div class="pede vd"><small>CAKE ' + (n + 1) + ' OF 4</small><b>' + CONVIDADOS[n].charAt(0) + CONVIDADOS[n].slice(1).toLowerCase() + ': who, how old, and one state.</b></div>'
    + fala('fs' + n, ['This is my …', 'He’s / She’s …', 'He’s always …'], ['hungry', 'tired', 'cold', 'sleepy']) + mostra('fs' + n, ['This is my grandma. She’s seventy-eight. She’s always cold!', 'This is my brother. He’s twelve. He’s always hungry.', 'This is my friend Leo. He’s thirty-one. He’s always tired.', 'And this is me. I’m thirty-four. I’m always sleepy!'][n], 1)
    + '<div class="partes so-prof"><h5>TAP WHAT YOU HEAR</h5>' + PARTES_F.map(function (k) { return '<button type="button" class="chip frase' + (k.erro ? ' erro-ouvido' : '') + (p[k.k] ? ' on' : '') + '" data-a="fs-p" data-v="' + k.k + '">' + k.t + '</button>'; }).join('') + '</div>'
    + (p.erro ? '<p class="recusa" style="text-align:center">Age uses be: She’s forty.</p>' : '') + '<div style="text-align:center"><button type="button" class="btn" data-a="fs-prox">Light the cake</button></div></div>';
};

R.fim = function (c) {
  var f = S.bolsa.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’m thirty-two.\nMy mom is sixty. She’s always cold.', 'Your birthday card',
    ['I’m ', 'He’s ', 'She’s ', ' years old', 'hungry', 'cold', 'tired', 'afraid of '], ['YOUR AGE, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write it with am.' : 'Your age, your family’s ages, and three states.'])
    + '<div class="lado-fim">' + bolo(8, 8) + '<div class="grande vd"><span>age: <u>I’m</u> 30 (not I have)</span><span>states: <u>I’m</u> hungry · cold · afraid</span><span><u>THIR</u>ty · thir<u>TEEN</u></span><span>How old <u>are</u> you?</span></div>'
    + mostra('fim', 'I’m thirty-two. My mom is sixty, and she’s always cold.<br>My brother is fifteen. He’s always hungry.<br>I’m tired now, but I’m happy!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['bs-f'] = function (b, n, v) { S.bolsa.formas[v] = !S.bolsa.formas[v]; };
TOQUES.bs = function (b, n) { S.bolsa.sel = n; S.bolsa.erro = ''; };
TOQUES['bs-v'] = function (b, n, v) { var e = S.bolsa; if (e.sel < 0) return false; var x = BOLSA[e.sel]; if (x.k === v) { e.onde[e.sel] = 1; e.sel = -1; e.erro = ''; } else e.erro = x.k; };
TOQUES.vl = function () { if (S.velas.n < 8) S.velas.n++; };
TOQUES.ov = function (b, n) { S.ouv[n] = 1; };
TOQUES.pg = function (b, n) { S.perg[n] = 1; };
TOQUES.bt = function (b, n, v) { S.bat.esc = v; };
TOQUES['bt-prox'] = function () { S.bat = { n: S.bat.n + 1, esc: '' }; };
TOQUES.id = function (b, n) { S.ida.sel = n; };
TOQUES['id-v'] = function (b, n, v) { S.ida.esc[S.ida.sel] = v; };
TOQUES.mm = function (b, n) { S.mim.c = S.mim.c === n ? -1 : n; };
TOQUES['mm-p'] = function (b, n, v) { S.mim.partes[v] = !S.mim.partes[v]; };
TOQUES['mm-prox'] = function () { S.mim = { c: -1, partes: {}, feitas: S.mim.feitas + 1 }; };
TOQUES['fs-p'] = function (b, n, v) { var p = S.festa.partes[S.festa.n] = S.festa.partes[S.festa.n] || {}; p[v] = !p[v]; };
TOQUES['fs-prox'] = function () { S.festa.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G8 · uma cena curta nova (k: gx) antes de velas.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'respostaCurta', titulo: 'Short answers. Three words, fast.',
  perguntas: [
    { q: 'Are you thirty?', s: 'Yes, I <mark>am</mark>.', n: 'No, I’m <mark>not</mark>.', mais: 'How old are you? I’m …' },
    { q: 'Are you hungry?', s: 'Yes, I <mark>am</mark>.', n: 'No, I’m <mark>not</mark>.', mais: 'Say it: I’m hungry. / I’m not hungry.' },
    { q: 'Is your mother fifty?', s: 'Yes, she <mark>is</mark>.', n: 'No, she <mark>isn’t</mark>.', mais: 'How old is she? She’s …' },
    { q: 'Is it cold in the room?', s: 'Yes, it <mark>is</mark>.', n: 'No, it <mark>isn’t</mark>.' },
    { q: 'Are your friends here?', s: 'Yes, they <mark>are</mark>.', n: 'No, they <mark>aren’t</mark>.', mais: 'How old are they? They’re …' },
    { q: 'Are you afraid of dogs?', s: 'Yes, I <mark>am</mark>.', n: 'No, I’m <mark>not</mark>.' }
  ],
  nota: 'The short answer repeats the be: Yes, I <b>am</b>. No, she <b>isn’t</b>. Not “Yes, I’m”, and not “Yes, I do”.',
  uso: { p: 'Your turn. Ask your teacher three questions with Are you …? or Is your …? Your teacher answers the short way.', molde: ['Are you …?', 'Is your … thirty?'], ex: 'Are you tired? Is your brother thirty? Are your friends here?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_curta', GX_EXPLICA); };
