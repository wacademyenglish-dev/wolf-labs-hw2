/* ============================================================
   ME NEITHER · TWO MIRRORS · LIVE CLASS  06/10/2026
   Main series A2 · concordar: um SIM ecoa com too / So do I / Me too; um
   NÃO ecoa com either / Neither do I / Me neither. O verbinho vem da frase
   dela (so am I, neither can I, so did I). Discordar curto: I do / I don't.
   O MUNDO (da aula velha): a Marina se muda no sábado e não escolhe entre
   dois apartamentos (em cima da padaria · perto do parque). Doze áudios
   (seis pares), transcrição conferida com faster-whisper em 06/10: bate.
   A CARA: DOIS ESPELHOS ovais no escuro — o do SIM com moldura de latão, o
   do NÃO com moldura de prata fria. O espelho errado RACHA (SVG).
   Fila: FILA-LIVE-386.md · 055.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cozinha' },
  { k: 'abre', est: 'o', min: 7, img: 'flat1', rot: 'I · Marina Asks', t: 'Marina moves on Saturday. Two apartments, one day left.', p: 'Pick a card and answer her. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'ouve', est: 'l', min: 7, img: 'cozinha', rot: 'II · Six Answers', t: 'Two voices. Did the second person agree?', p: 'Play both. Choose. Then say the answer out loud, the same way.' },
  { k: 'espelhos', est: 'f', min: 6, img: 'planta', rot: 'III · Two Mirrors', t: 'Marina says something. Which mirror echoes it?', p: 'Is her sentence a YES or a NO? Tap the mirror. Then say both echoes.' },
  { k: 'verbo', est: 'f', min: 6, img: 'cozinha', rot: 'IV · The Little Verb', t: 'SO and NEITHER borrow her little verb.', p: 'Say the echo out loud. Then tap the little verb.' },
  { k: 'gx', est: 'f', min: 4, img: 'planta', rot: 'V · Marina on the Phone', t: 'Marina talks, you echo. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then echo your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'planta', rot: 'VI · The Rule', t: 'The NOT in her sentence chooses the mirror.', p: 'Fix each wrong line. Say it out loud. Then tap it.' },
  { k: 'discorda', est: 'o', min: 7, img: 'flat2', rot: 'VII · I Don’t!', t: 'Sometimes you don’t agree. That’s short too.', p: 'Marina says it. You disagree, out loud. Then tap what you said.' },
  { k: 'comum', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'VIII · Five in Common', t: 'Find five things you and your teacher have in common.', p: 'Your teacher says a sentence. You echo it, or you disagree. Five SAMEs win.' },
  { k: 'fim', est: 'w', min: 6, img: 'planta', rot: 'IX · Saturday', t: 'Marina chose. Your turn to write.', p: 'One thing you and a friend both do, one thing neither of you does. It goes to your My notes.' }
];

var TR = {
  'nm-a1.mp3': 'I don’t want the big one.', 'nm-b1.mp3': 'Me neither.', 'nm-a2.mp3': 'I love the bakery.', 'nm-b2.mp3': 'So do I.',
  'nm-a3.mp3': 'I can’t decide.', 'nm-b3.mp3': 'I can.', 'nm-a4.mp3': 'I don’t like the park place.', 'nm-b4.mp3': 'I don’t either.',
  'nm-a5.mp3': 'I want the elevator.', 'nm-b5.mp3': 'Me too.', 'nm-a6.mp3': 'I don’t have a car.', 'nm-b6.mp3': 'I do.'
};
var PARES = [
  { a: 'nm-a1.mp3', b: 'nm-b1.mp3', k: 1, w: 'A NO, and the echo of a NO: Me neither.' },
  { a: 'nm-a2.mp3', b: 'nm-b2.mp3', k: 1, w: 'A YES, and the echo of a YES: So do I.' },
  { a: 'nm-a3.mp3', b: 'nm-b3.mp3', k: 0, w: 'She can’t. He can. Short disagreement: just the little verb.' },
  { a: 'nm-a4.mp3', b: 'nm-b4.mp3', k: 1, w: 'A NO, echoed with either: I don’t either.' },
  { a: 'nm-a5.mp3', b: 'nm-b5.mp3', k: 1, w: 'A YES: Me too.' },
  { a: 'nm-a6.mp3', b: 'nm-b6.mp3', k: 0, w: 'She doesn’t have a car. He does: I do.' }
];

var ABRE = [
  { k: 'YOUR HOME', q: 'Do you live in a house or an apartment?', fup: 'How long have you lived there?', st: ['I live in …'], ex: 'I live in an apartment, on the fourth floor.' },
  { k: 'THE BEST THING', q: 'What is the best thing about your home?', fup: 'And the worst?', st: ['The best thing is …'], ex: 'The light in the morning. The worst is the noise!' },
  { k: 'TWO PHOTOS', q: 'Look at Marina’s two apartments. Which one do you like?', fup: 'Why?', st: ['I like the one …', 'because …'], ex: 'The one by the park. I like quiet places.' },
  { k: 'MARINA', q: 'Marina says: “I don’t want the small one.” And you?', fup: 'Your teacher keeps this answer for the end.', st: ['…'], ex: 'Me neither. / Neither do I.' }
];
var FORMAS = [{ k: 'too', t: 'TOO / SO DO I' }, { k: 'eith', t: 'EITHER / NEITHER DO I' }, { k: 'metoo', t: 'ME TOO FOR A NO', erro: 1 }, { k: 'donttoo', t: 'I DON’T … TOO', erro: 1 }];

var FRASES = [
  { f: 'I want the big one.', v: 1, curto: 'So do I.', longo: 'I want it too.' },
  { f: 'I don’t want the small one.', v: 0, curto: 'Neither do I.', longo: 'I don’t want it either.' },
  { f: 'I liked the kitchen.', v: 1, curto: 'So did I.', longo: 'I liked it too.' },
  { f: 'I didn’t like the stairs.', v: 0, curto: 'Neither did I.', longo: 'I didn’t like them either.' },
  { f: 'I’m moving on Saturday.', v: 1, curto: 'So am I.', longo: 'I’m moving on Saturday too.' },
  { f: 'I’m not ready.', v: 0, curto: 'Neither am I.', longo: 'I’m not ready either.' },
  { f: 'I can pay in cash.', v: 1, curto: 'So can I.', longo: 'I can pay in cash too.' },
  { f: 'I can’t sleep.', v: 0, curto: 'Neither can I.', longo: 'I can’t sleep either.' },
  { f: 'I have a lot of boxes.', v: 1, curto: 'So do I.', longo: 'I have a lot of boxes too.' },
  { f: 'I don’t have a car.', v: 0, curto: 'Neither do I.', longo: 'I don’t have a car either.' }
];

var VERBOS = ['do', 'does', 'did', 'am', 'can', 'have'];
var VERBO = [
  { f: 'I’m tired.', a: 'So ', b: ' I.', k: 'am', w: 'She used AM: so AM I.' },
  { f: 'I can swim.', a: 'So ', b: ' I.', k: 'can', w: 'CAN → so CAN I.' },
  { f: 'I went to the park.', a: 'So ', b: ' I.', k: 'did', w: 'Past, no little verb: DID.' },
  { f: 'I don’t eat meat.', a: 'Neither ', b: ' I.', k: 'do', w: 'DON’T → neither DO I.' },
  { f: 'I haven’t finished.', a: 'Neither ', b: ' I.', k: 'have', w: 'HAVEN’T → neither HAVE I.' },
  { f: 'I love this song.', a: 'So ', b: ' I.', k: 'do', w: 'Present, no little verb: DO.' },
  { f: 'My sister works here.', a: 'So ', b: ' my brother.', k: 'does', w: 'My brother = he: DOES.' }
];

var FITAS = [['A YES', 'I like it too · So do I · Me too'], ['A NO', 'I don’t like it either · Neither do I · Me neither'], ['THE LITTLE VERB', 'so am I · neither can I · so did I'], ['NOT THE SAME?', 'I do · I don’t · I can · I’m not']];
var ARMAS = [
  ['TOO FOR A NO', 'I don’t like it too.', 'I don’t like it either.', 'A NO echoes with either.'],
  ['ME TOO FOR A NO', '“I don’t want it.” — Me too.', '“I don’t want it.” — Me neither.', 'Her NOT chooses the mirror.'],
  ['NO NOT AFTER NEITHER', '“I don’t have a car.” — Neither don’t I.', '“I don’t have a car.” — Neither do I.', 'neither already has the NOT.'],
  ['THE LITTLE VERB', '“I can’t sleep.” — Neither do I.', '“I can’t sleep.” — Neither can I.', 'She used can: neither CAN I.'],
  ['AM, NOT DO', '“I’m tired.” — So do I.', '“I’m tired.” — So am I.', 'She used am: so AM I.'],
  ['SHE', 'She doesn’t work here too.', 'She doesn’t work here either.', 'A NO: either.']
];

var DISC = [
  { f: 'I love the bakery.', op: [['I don’t.', 'ok'], ['Neither do I.', 'a'], ['I do.', 'b']], no: { a: 'That agrees with a no. Hers is a yes: disagree with I don’t.', b: 'That agrees. You want the other way: I don’t.' } },
  { f: 'I can’t decide.', op: [['I can.', 'ok'], ['So can I.', 'a'], ['Neither can I.', 'b']], no: { a: 'So can I echoes a YES. Hers is a NO.', b: 'That agrees. Disagree: I can.' } },
  { f: 'I’m not ready.', op: [['I am.', 'ok'], ['So am I.', 'a'], ['I’m not.', 'b']], no: { a: 'So am I echoes a YES.', b: 'That agrees. Disagree: I am.' } },
  { f: 'I have a lot of boxes.', op: [['I don’t.', 'ok'], ['Me too.', 'a'], ['So do I.', 'b']], no: { a: 'That agrees. Disagree: I don’t.', b: 'That agrees. Disagree: I don’t.' } }
];

var COMUM = [
  { t: 'I like coffee in the morning.', e: 'So do I. / Me too.', d: 'I don’t.' },
  { t: 'I don’t like cold weather.', e: 'Neither do I. / Me neither.', d: 'I do.' },
  { t: 'I can cook.', e: 'So can I.', d: 'I can’t.' },
  { t: 'I didn’t sleep well last night.', e: 'Neither did I.', d: 'I did.' },
  { t: 'I’m a little tired today.', e: 'So am I.', d: 'I’m not.' },
  { t: 'I don’t have a pet.', e: 'Neither do I. / Me neither.', d: 'I do.' },
  { t: 'I went out last weekend.', e: 'So did I.', d: 'I didn’t.' },
  { t: 'I can’t swim very well.', e: 'Neither can I.', d: 'I can.' },
  { t: 'I live in an apartment.', e: 'So do I. / Me too.', d: 'I don’t.' },
  { t: 'I haven’t been to Japan.', e: 'Neither have I.', d: 'I have.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, ouv: {}, esp: { n: 0, esc: -1 }, verbo: { n: 0, esc: '' }, disc: { n: 0, esc: '' }, comum: { sel: -1, r: {} } };

function racha() {
  return '<svg class="fenda" viewBox="0 0 100 140" aria-hidden="true"><path d="M50 62 L30 20 M50 62 L72 14 M50 62 L88 70 M50 62 L64 128 M50 62 L18 96 M50 62 L10 54 M38 38 L26 44 M70 98 L82 110 M30 82 L22 70" fill="none" stroke="rgba(230,236,244,.75)" stroke-width="1.2"/></svg>';
}
function espelho(tipo, conteudo, estado, attr) {
  return '<button type="button" class="espelho ' + tipo + (estado ? ' ' + estado : '') + '"' + (attr || '') + '><span class="vidro-e">' + (estado === 'racha' ? racha() : '') + '<span class="eco">' + conteudo + '</span></span><b>' + (tipo === 'sim' ? 'YES MIRROR' : 'NO MIRROR') + '</b></button>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · TWO MIRRORS</span><h1>Me <b>Neither</b></h1>'
    + '<p class="sub">A yes and a no need different echoes. <b>So do I</b> · <b>Neither do I</b>. Pick the wrong mirror, and it cracks.</p>'
    + '<div class="chipsx"><span class="pilula">too · So do I</span><span class="pilula">either · Neither do I</span><span class="pilula">I do · I don’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Look in the mirrors</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + espelho('sim', '<small>“I love the bakery.”</small>So do I.') + espelho('nao', '<small>“I don’t have a car.”</small>Neither do I.') + '</div></div>';
};

R.abre = function (c) {
  var topo = cab(c), corpo = cartasPessoais(c, ABRE, S.abre, 'abre').slice(topo.length), mostraFotos = true;   /* 11/10: com o aquece2 a 1a pergunta ja vem na tela; as fotos ficam sempre */
  return topo + (mostraFotos ? '<div class="fotos-a"><div class="aberta vd" style="background-image:url(' + img('flat1') + ')"><span>OVER THE BAKERY · small · cheap · 5 min from work</span></div><div class="aberta vd" style="background-image:url(' + img('flat2') + ')"><span>BY THE PARK · big · quiet · 40 min from work</span></div></div>' : '')
    + corpo + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.ouve = function (c) {
  return cab(c) + '<div class="pares-o">' + PARES.map(function (x, i) {
    var esc = S.ouv[i], ok = esc === x.k, ouviu = (S.ouviu || {})[x.b];
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><div class="duas-vozes"><div class="toca-linha"><small class="quem">MARINA</small>' + tocar(x.a) + '<div>' + transcricao(x.a, TR[x.a]) + '</div></div><div class="toca-linha"><small class="quem">FRIEND</small>' + tocar(x.b) + '<div>' + transcricao(x.b, TR[x.b]) + '</div></div></div>'
      + (ouviu ? '<div class="tres-b">' + [[1, 'Agrees'], [0, 'Doesn’t agree']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="ov" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '')
      + (ok ? '<p class="aprova">' + x.w + '</p>' : esc !== undefined ? '<p class="recusa">Listen to the second voice again. Same, or different?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.espelhos = function (c) {
  var e = S.esp, n = e.n, fim = n >= FRASES.length;
  if (fim) return cab(c) + trilha(FRASES, n) + '<div class="foco"><div class="pergunta vd"><small>TEN ECHOES</small><h2>The NOT in her sentence chose the mirror every time.</h2></div><div class="par-e">' + espelho('sim', 'too · So do I · Me too') + espelho('nao', 'either · Neither do I · Me neither') + '</div></div>';
  var x = FRASES[n], ok = e.esc === x.v;
  var est = function (v) { return e.esc === v ? (ok ? 'acerto' : 'racha') : ''; };
  var eco = function (v) { return ok && v === x.v ? '<i>' + x.curto + '</i><small>' + x.longo + '</small>' : (v ? 'too · So …' : 'either · Neither …'); };
  return cab(c) + trilha(FRASES, n) + '<div class="mesa-e"><div class="marina vd"><small>MARINA</small><b>“' + x.f + '”</b>' + (ok ? '<div><button type="button" class="btn" data-a="es-prox">Next</button></div>' : (e.esc >= 0 ? '<p class="recusa">Crack. Look for the NOT in her sentence.</p>' : '<p class="dica-aluno">A YES or a NO? Say the echo, then tap the mirror.</p>')) + '</div>'
    + '<div class="par-e">' + espelho('sim', eco(1), est(1), ' data-a="es" data-v="1"' + (ok ? ' disabled' : '')) + espelho('nao', eco(0), est(0), ' data-a="es" data-v="0"' + (ok ? ' disabled' : '')) + '</div></div>';
};

R.verbo = function (c) {
  var e = S.verbo, n = e.n, fim = n >= VERBO.length;
  if (fim) return cab(c) + trilha(VERBO, n) + '<div class="foco"><div class="pergunta vd"><small>SEVEN ECHOES</small><h2>The little verb always comes from her sentence: am, can, did, do, have, does.</h2></div></div>';
  var x = VERBO[n], ok = e.esc === x.k;
  return cab(c) + trilha(VERBO, n) + '<div class="foco"><div class="marina vd"><small>MARINA</small><b>“' + x.f + '”</b></div><div class="q-grande vd"><small>YOUR ECHO</small><p>' + x.a + '<span class="gap">' + (ok ? x.k : '___') + '</span>' + x.b + '</p></div>'
    + '<div class="tres-b centro">' + ordem(VERBOS.map(function (k) { return [k, k]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="vb" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="vb-prox">Next</button></div>' : (e.esc ? '<p class="recusa" style="text-align:center">Look at her sentence. Which little verb is in it, or hiding?</p>' : '')) + '</div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="fitas">' + FITAS.map(function (f) { return '<div class="fita vd"><small>' + f[0] + '</small><b>' + f[1] + '</b></div>'; }).join('') + '</div>' + armas(ARMAS, 'THE CRACKS · SAY IT RIGHT, THEN TAP');
};

R.discorda = function (c) {
  var e = S.disc, n = e.n, fim = n >= DISC.length;
  if (fim) return cab(c) + trilha(DISC, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR DISAGREEMENTS</small><h2>Just the little verb, the other way: I do · I don’t · I can · I am.</h2></div></div>';
  var x = DISC[n], ok = e.esc === 'ok';
  return cab(c) + trilha(DISC, n) + '<div class="mesa-c"><div class="aberta vd" style="background-image:url(' + img('flat2') + ')"><span>MARINA</span></div><div class="lado-l"><div class="marina vd"><small>MARINA</small><b>“' + x.f + '”</b></div>'
    + (ok ? '<div class="balao vd"><small>YOU DISAGREE</small><p>' + x.op[0][0] + '</p></div><div><button type="button" class="btn" data-a="di-prox">Next</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.op, n + 3).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="di" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + x.no[e.esc] + '</p>' : '')) + '</div></div>';
};

R.comum = function (c) {
  var e = S.comum, same = 0, x = e.sel >= 0 ? COMUM[e.sel] : null;
  Object.keys(e.r).forEach(function (k) { if (e.r[k] === 's') same++; });
  var cartas = '<div class="cartas-c">' + COMUM.map(function (k, i) {
    var r = e.r[i];
    return '<button type="button" class="carta-c' + (e.sel === i ? ' on' : '') + (r ? ' r-' + r : '') + '" data-a="cm" data-n="' + i + '"><small>' + (i + 1) + (r ? ' · ' + (r === 's' ? 'SAME' : 'DIFFERENT') : '') + '</small><b>' + k.t + '</b></button>';
  }).join('') + '</div>';
  var lado = x ? '<div class="marina vd"><small>YOUR TEACHER SAYS</small><b>“' + x.t + '”</b></div><div class="fitas mini"><div class="fita vd"><small>SAME? ECHO IT</small><b>' + x.e + '</b></div><div class="fita vd"><small>DIFFERENT? DISAGREE</small><b>' + x.d + '</b></div></div>'
    + '<div class="tres-b"><button type="button" class="btn so-prof" data-a="cm-r" data-v="s">SAME</button><button type="button" class="btn so-prof" data-a="cm-r" data-v="d">DIFFERENT</button></div>'
    : '<div class="pergunta vd"><small>' + same + ' OF 5 IN COMMON</small><h2>' + (same >= 5 ? 'Five in common: both of you, or neither of you!' : 'Tap a card. Your teacher says it, true for them. You echo, or disagree.') + '</h2></div>';
  return cab(c) + '<div class="placar-c">' + [0, 1, 2, 3, 4].map(function (i) { return '<i class="' + (i < same ? 'on' : '') + '"></i>'; }).join('') + '<b>' + same + ' / 5</b></div><div class="mesa-k">' + cartas + '<div class="lado-l">' + lado + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'My friend loves …, and so do I.\nShe doesn’t …, and neither do I.', 'Two mirrors',
    ['and so do I.', 'and neither do I.', ' too.', ' either.', 'So am I.', 'Neither can I.'], ['MARINA CHOSE: “I don’t need a big kitchen, so I took the one over the bakery.”', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write: one thing you both do, one thing neither of you does.' : 'Write about you and a friend: one thing you both do, one thing neither of you does.'])
    + '<div class="lado-fim"><div class="par-e mini">' + espelho('sim', 'So do I') + espelho('nao', 'Neither do I') + '</div><div class="grande vd"><span>a YES: <u>too</u> · <u>So do I</u></span><span>a NO: <u>either</u> · <u>Neither do I</u></span><span>her little verb: <u>so am I</u> · <u>neither can I</u></span></div>'
    + mostra('fim', 'My friend Ana loves old movies, and so do I.<br>She doesn’t drink coffee, and neither do I.<br>She can’t cook. I can!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.ov = function (b, n, v) { S.ouv[n] = +v; };
TOQUES.es = function (b, n, v) { S.esp.esc = +v; };
TOQUES['es-prox'] = function () { S.esp = { n: S.esp.n + 1, esc: -1 }; };
TOQUES.vb = function (b, n, v) { S.verbo.esc = v; };
TOQUES['vb-prox'] = function () { S.verbo = { n: S.verbo.n + 1, esc: '' }; };
TOQUES.di = function (b, n, v) { S.disc.esc = v; };
TOQUES['di-prox'] = function () { S.disc = { n: S.disc.n + 1, esc: '' }; };
TOQUES.cm = function (b, n) { S.comum.sel = S.comum.sel === n ? -1 : n; };
TOQUES['cm-r'] = function (b, n, v) { S.comum.r[S.comum.sel] = v; S.comum.sel = -1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'Marina, on the phone. Tap the lit words.',
  falas: [
    { q: 'Marina', f: 'I really like the flat above the bakery.' },
    { q: 'You', f: '[[So do I]]. It smells like bread.' },
    { q: 'Marina', f: 'I can’t pay much for the rent.' },
    { q: 'You', f: '[[Neither can I]]. Not this month.' },
    { q: 'Marina', f: 'I’m not sure about the flat near the park.' },
    { q: 'You', f: '[[Neither am I]]. But I love the garden.' },
    { q: 'Marina', f: 'I’ve seen both flats twice.' },
    { q: 'You', f: '[[So have I]]. I was there on Saturday.' },
    { q: 'Marina', f: 'I love getting up early.' },
    { q: 'You', f: '[[I don’t]]. I hate it!' }
  ],
  porques: [
    'A yes and a yes: So + her little verb + I. She says like, so the little verb is do.',
    'A no and a no: Neither + her little verb + I. She says can’t, so the little verb is can. Only one no.',
    'Her sentence has am, so: Neither am I.',
    'Her sentence has have, so: So have I.',
    'You don’t agree: short and strong. She loves it. You don’t: I don’t.'
  ],
  nota: 'A <b>yes</b> echoes with <b>So + little verb + I</b>. A <b>no</b> echoes with <b>Neither + little verb + I</b>. The little verb comes from her sentence: like → <b>do</b>, can’t → <b>can</b>, I’m → <b>am</b>. You don’t agree? <b>I do. / I don’t.</b>',
  uso: { p: 'Your turn. Marina says: I love pizza. I can’t swim. Echo both. Then say one thing about you for your teacher to echo.', molde: ['So … I.', 'Neither … I.'], ex: 'So do I. Neither can I. I’m afraid of spiders.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
