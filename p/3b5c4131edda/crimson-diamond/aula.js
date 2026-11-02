/* ============================================================
   THE CRIMSON DIAMOND · THE CASE BOARD · LIVE CLASS  06/10/2026
   Main series A2 · past continuous em álibis e interrogatório: What were
   you doing at ten? · I was + -ing · I wasn't … · Were you …? Yes, I was.
   Erros universais: "What you were doing?", "I was sleep", "He working".
   O MUNDO (da aula velha): às 22h04 o alarme do museu toca e o Diamante
   Carmesim some. Três pessoas lá dentro (sem rosto: cartão com iniciais).
   Nove áudios (Arthur, Eleanor, Marco), conferidos com faster-whisper em
   06/10: batem. O marido da Eleanor é o ladrão; o bar estava fechado.
   A CARA: o QUADRO DE CORTIÇA escuro com fichas presas por alfinete e FIOS
   VERMELHOS em SVG ligando suspeito a lugar; o álibi que não fecha fica
   com o fio solto. Fila: FILA-LIVE-386.md · 071.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'vitrine-b' },
  { k: 'abre', est: 'o', min: 7, img: 'rua', rot: 'I · Your Alibi', t: 'What were you doing yesterday at 10 PM?', p: 'Pick a card. Answer out loud. Nobody corrects you here.' },
  { k: 'pecas', est: 'f', min: 6, img: 'galeria', rot: 'II · An Alibi Is a Tense', t: 'Five cards. Each one asks for a sentence.', p: 'Read the card. Say your own sentence out loud.' },
  { k: 'ordem', est: 'f', min: 6, img: 'galeria', rot: 'III · The Question', t: 'Detectives ask the same question all night.', p: 'Tap the words in order. Then ask it out loud.' },
  { k: 'ing', est: 'f', min: 6, img: 'galeria', rot: 'IV · Keep the -ing', t: 'Two pieces, always: was / were AND -ing.', p: 'Say the sentence that works. Then tap it.' },
  { k: 'arthur', est: 'l', min: 7, img: 'corredor', rot: 'V · Suspect One: Arthur', t: 'Arthur, the night guard. Thirty-four years here.', p: 'Ask the question on the screen. Play his answer. Then mark the two lies.' },
  { k: 'eleanor', est: 'l', min: 7, img: 'galeria', rot: 'VI · Suspect Two: Eleanor', t: 'Eleanor, a guest. She is very calm.', p: 'Ask. Play. Then mark the three things she really said.' },
  { k: 'marco', est: 'l', min: 7, extra: 1, img: 'bar', rot: 'VII · Suspect Three: Marco', t: 'Marco, the barman. Nobody asked him anything.', p: 'Ask. Play. Then mark the three things he really said.' },
  { k: 'quadro', est: 'f', min: 6, extra: 1, img: 'galeria', rot: 'VIII · The Board', t: 'Three alibis. Put the strings on the board.', p: 'Pick a suspect. Say the alibi in one sentence. Look at the evidence. Is the alibi true?' },
  { k: 'interroga', est: 'o', min: 7, extra: 1, img: 'vitrine-a', rot: 'IX · The Husband', t: 'Mr. Smith is in the room. Your teacher is Mr. Smith, and he lies.', p: 'Ask the questions. Listen. Catch the lie. Then name the thief.' },
  { k: 'seu', est: 'o', min: 7, extra: 1, img: 'rua', rot: 'X · Your Alibis', t: 'Now the detective asks you.', p: 'Answer with was / were + -ing. Then ask your teacher the same question.' },
  { k: 'fim', est: 'w', min: 6, img: 'galeria', rot: 'XI · Case Closed', t: 'Your alibi from scene I comes back.', p: 'Write your alibis for yesterday: 7 AM, 1 PM, 10 PM. It goes to My notes.' }
];

var TR = {
  'v-arthur-1.mp3': 'I was in the hall. I was walking to the west door.', 'v-arthur-2.mp3': 'That is not true. I was working. I am always working.', 'v-arthur-3.mp3': '…I was on the phone. My daughter was crying. I was not in the hall.',
  'v-eleanor-1.mp3': 'I was looking at the paintings in the east room.', 'v-eleanor-2.mp3': 'I was looking at the paintings while my husband was getting champagne.', 'v-eleanor-3.mp3': 'I do not know. He was not with me when the lights went out.',
  'v-marco-1.mp3': 'I was washing the glasses. The bar closes at 9:45.', 'v-marco-2.mp3': 'Closed. Shut. I was cleaning. Nobody was drinking anything.', 'v-marco-3.mp3': 'Champagne? At ten o’clock? Nobody came. I was alone for an hour.'
};

var ABRE = [
  { k: '10 PM', q: 'What were you doing yesterday at 10 PM?', fup: 'Who was with you?', st: ['At ten, I …'], ex: 'At ten, I was watching a series in bed.' },
  { k: '7 AM', q: 'And at 7 AM this morning?', fup: 'Is it always like that?', st: ['At seven, I …'], ex: 'At seven, I was making coffee.' }
];
var FORMAS = [{ k: 'was', t: 'I WAS + -ING' }, { k: 'neg', t: 'I WASN’T …' }, { k: 'sleep', t: 'I WAS SLEEP', erro: 1 }, { k: 'past', t: 'I SLEPT (DONE, NOT OPEN)', erro: 1 }];

var PECAS = [
  { w: 'was', m: 'I · he · she · it', s: 'I was drinking coffee.', ask: 'Two things you were doing yesterday at 8 PM.' },
  { w: 'were', m: 'you · we · they', s: 'They were closing the doors.', ask: 'What your family were doing last night.' },
  { w: '+ ing', m: 'the action, still open', s: 'work → working · sit → sitting · write → writing', ask: 'Add -ing out loud: run, take, stop, listen.' },
  { w: 'not', m: 'right after was / were', s: 'I wasn’t sleeping. They weren’t there.', ask: 'Two things you weren’t doing at ten.' },
  { w: '?', m: 'the helper jumps first', s: 'What were you doing? — Were you working? Yes, I was.', ask: 'Ask your teacher two questions about last night.' }
];

var ORDEM = [['What', 'were', 'you', 'doing', 'at', 'ten?'], ['Where', 'was', 'he', 'going?'], ['Were', 'you', 'working', 'at', 'nine?'], ['What', 'was', 'she', 'looking', 'at?'], ['Who', 'were', 'they', 'talking', 'to?']];

var ING = [
  [['I was sleeping.', 'ok'], ['I was sleep.', 'ing'], ['I sleeping.', 'aux']],
  [['He was working.', 'ok'], ['He working.', 'aux'], ['He were working.', 'were']],
  [['They were talking.', 'ok'], ['They was talking.', 'was'], ['They were talk.', 'ing']],
  [['She wasn’t listening.', 'ok'], ['She not listening.', 'aux'], ['She wasn’t listen.', 'ing']],
  [['Were you running?', 'ok'], ['You were running?', 'ordem'], ['Was you running?', 'was']],
  [['Yes, I was.', 'ok'], ['Yes, I was running yes.', 'curta'], ['Yes, I were.', 'were']]
];
var NOTA = { ing: 'The second piece: -ing (sleeping, talking).', aux: 'The first piece: was / were.', were: 'he / she / I: was.', was: 'you / we / they: were.', ordem: 'A question: the helper jumps first. Were you…?', curta: 'Short answer: Yes, I was.' };

var SUSPEITOS = {
  arthur: { n: 'Arthur', c: 'AG', r: 'NIGHT GUARD', turnos: [['Arthur, where were you at ten o’clock?', 'v-arthur-1.mp3'], ['The log says you were leaving your post at 9:58.', 'v-arthur-2.mp3'], ['Arthur. Thirty-four years. The truth, please.', 'v-arthur-3.mp3']],
    marcas: [['I was in the hall.', 1], ['I was working.', 1], ['I was on the phone.', 0], ['My daughter was crying.', 0]], meta: 2, rot: 'TAP THE TWO LIES', nao: 'That one was true. Play the last line again.', fecho: 'He lied first, then told the truth: he was talking to his daughter.' },
  eleanor: { n: 'Eleanor', c: 'ES', r: 'GUEST', turnos: [['Mrs. Smith, what were you doing at ten?', 'v-eleanor-1.mp3'], ['Were you alone?', 'v-eleanor-2.mp3'], ['Where is your husband now?', 'v-eleanor-3.mp3']],
    marcas: [['I was looking at the paintings.', 1], ['My husband was getting champagne.', 1], ['I was waiting for the police.', 0], ['He was not with me.', 1], ['We were leaving together.', 0]], meta: 3, rot: 'TAP THE THREE SHE SAID', nao: 'She never said that. Play it again.', fecho: 'Remember this: her husband was getting champagne at ten.' },
  marco: { n: 'Marco', c: 'MB', r: 'BARMAN', turnos: [['Marco, what were you doing at ten?', 'v-marco-1.mp3'], ['So at ten o’clock the bar was…?', 'v-marco-2.mp3'], ['Was anyone asking for champagne?', 'v-marco-3.mp3']],
    marcas: [['I was washing the glasses.', 1], ['Nobody was drinking anything.', 1], ['Two people were asking for champagne.', 0], ['I was alone for an hour.', 1], ['The bar was still open.', 0]], meta: 3, rot: 'TAP THE THREE HE SAID', nao: 'He never said that. Play it again.', fecho: 'At ten, nobody was getting champagne.' }
};

var QUADRO = [
  { k: 'arthur', n: 'Arthur', c: 'AG', lugar: 'THE PHONE', alibi: 'Arthur was talking to his daughter on the phone.', img: 'corredor', ev: '9:58 PM · the hall is empty. He wasn’t there.', fecha: 1, por: 'The empty hall agrees with him: he wasn’t in the hall. His alibi is true.' },
  { k: 'marco', n: 'Marco', c: 'MB', lugar: 'THE BAR', alibi: 'Marco was cleaning the bar.', img: 'bar', ev: '10:00 PM · the bar is shut. Clean glasses, nobody drinking.', fecha: 1, por: 'The photo shows a shut, clean bar. It closes.' },
  { k: 'eleanor', n: 'Eleanor', c: 'ES', lugar: 'THE EAST ROOM', alibi: 'Eleanor was looking at paintings while her husband was getting champagne.', img: 'bar', ev: '10:00 PM · the bar is shut. Nobody was getting champagne.', fecha: 0, por: 'The bar was closed. Her husband wasn’t getting champagne. Her alibi is not true.' }
];

var INTERROGA = ['Where were you at ten o’clock?', 'What were you doing at the bar?', 'Were you getting champagne? The bar was shut.', 'Who were you talking to?', 'Why were you running to the back door at 10:04?', 'What were you carrying?'];
var PARTES = [['q', 'WHAT WERE YOU DOING?'], ['curta', 'WERE YOU …? / NO, YOU WEREN’T'], ['ing', 'WAS / WERE + -ING']];
var CULPADOS = ['Arthur', 'Marco', 'Eleanor', 'Mr. Smith'];

var SEU = [
  { q: 'What were you doing yesterday at 7 PM?', ini: 'At seven I was …', ex: 'At seven I was cooking dinner with my sister.' },
  { q: 'What were your family doing last Sunday at lunchtime?', ini: 'They were …', ex: 'They were eating at my grandmother’s house.' },
  { q: 'What were you doing the last time your phone rang?', ini: 'I was …', ex: 'I was driving, so I didn’t answer.' },
  { q: 'Were you sleeping at midnight last night?', ini: 'Yes, I was. / No, I wasn’t. I was …', ex: 'No, I wasn’t. I was reading.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, od: { n: 0, pick: [], err: 0 }, ing: { n: 0, esc: '' }, sus: { arthur: { t: 0, m: {} }, eleanor: { t: 0, m: {} }, marco: { t: 0, m: {} } }, qd: { sel: -1, esc: {} }, it: { n: 0, partes: {}, culpa: '' }, seu: { n: 0 } };

function ficha(c, n, r, cls) { return '<div class="ficha-s' + (cls ? ' ' + cls : '') + '"><span class="alfinete"></span><b>' + c + '</b><small>' + n + '</small><em>' + r + '</em></div>'; }
function cortica(fechados, abertos) {
  var pos = { arthur: [90, 70], marco: [300, 70], eleanor: [510, 70] }, lug = { arthur: [90, 230, 'THE PHONE'], marco: [300, 230, 'THE BAR'], eleanor: [510, 230, 'THE EAST ROOM'] };
  var fios = Object.keys(pos).map(function (k) {
    if (fechados[k]) return '<path d="M' + pos[k][0] + ' ' + (pos[k][1] + 30) + ' Q' + (pos[k][0] + 30) + ' 160 ' + lug[k][0] + ' ' + (lug[k][1] - 20) + '" class="fio"/>';
    if (abertos[k]) return '<path d="M' + pos[k][0] + ' ' + (pos[k][1] + 30) + ' Q' + (pos[k][0] - 40) + ' 150 ' + (lug[k][0] - 60) + ' 170" class="fio solto"/>';
    return '';
  }).join('');
  var cards = Object.keys(pos).map(function (k) { var s = SUSPEITOS[k]; return '<g class="card-q"><rect x="' + (pos[k][0] - 52) + '" y="' + (pos[k][1] - 34) + '" width="104" height="64" rx="4"/><circle cx="' + pos[k][0] + '" cy="' + (pos[k][1] - 30) + '" r="5" class="pino"/><text x="' + pos[k][0] + '" y="' + (pos[k][1] + 2) + '" text-anchor="middle" class="ini">' + s.c + '</text><text x="' + pos[k][0] + '" y="' + (pos[k][1] + 20) + '" text-anchor="middle" class="sub">' + s.r + '</text></g>'
    + '<g class="card-l"><rect x="' + (lug[k][0] - 62) + '" y="' + (lug[k][1] - 20) + '" width="124" height="40" rx="4"/><text x="' + lug[k][0] + '" y="' + (lug[k][1] + 5) + '" text-anchor="middle">' + lug[k][2] + '</text></g>'; }).join('');
  return '<svg class="cortica" viewBox="0 0 600 270" role="img" aria-label="The case board"><rect width="600" height="270" rx="10" class="fundo-c"/>' + cards + fios + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · CITY MUSEUM · 10:04 PM</span><h1>The Crimson <b>Diamond</b></h1>'
    + '<p class="sub">Three people were inside. <b>What were you doing at ten?</b> One alibi doesn’t close.</p>'
    + '<div class="chipsx"><span class="pilula">What were you doing?</span><span class="pilula">I was working</span><span class="pilula">Yes, I was · No, I wasn’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the case</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + cortica({ arthur: 1 }, { eleanor: 1 }) + '</div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.pecas = function (c) {
  return cab(c) + '<div class="pecas">' + PECAS.map(function (x) { return '<div class="peca-c"><span class="alfinete"></span><b>' + x.w + '</b><small>' + x.m + '</small><p>“' + x.s + '”</p><em>' + x.ask + '</em></div>'; }).join('') + '</div>';
};

R.ordem = function (c) {
  var e = S.od, n = e.n, fim = n >= ORDEM.length;
  if (fim) return cab(c) + trilha(ORDEM, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE QUESTIONS</small><h2>The helper jumped every time: were you, was he.</h2></div></div>';
  var alvo = ORDEM[n], embaralha = ordem(alvo.map(function (w, i) { return [w, i]; }), n + 3), pronto = e.pick.length === alvo.length;
  return cab(c) + trilha(ORDEM, n) + '<div class="foco"><div class="montagem vd">' + (e.pick.length ? e.pick.map(function (i) { return '<span class="pal-m">' + alvo[i] + '</span>'; }).join(' ') : '<span class="vazio-m">tap the words in order</span>') + '</div>'
    + (pronto ? '<p class="aprova" style="text-align:center">Now ask it out loud, like a detective.</p><div style="text-align:center"><button type="button" class="btn" data-a="od-prox">Next question</button></div>'
      : '<div class="tres-b centro">' + embaralha.map(function (o) { var usado = e.pick.indexOf(o[1]) >= 0; return '<button type="button" class="pilula grande-p" data-a="od" data-n="' + o[1] + '"' + (usado ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (e.err ? '<p class="recusa" style="text-align:center">Not yet. After the question word, the helper comes first: were you, was he.</p>' : '')) + '</div>';
};

R.ing = function (c) {
  var e = S.ing, n = e.n, fim = n >= ING.length;
  if (fim) return cab(c) + trilha(ING, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Both pieces every time: was / were, and -ing.</h2></div></div>';
  var x = ING[n], ok = e.esc === 'ok';
  return cab(c) + trilha(ING, n) + '<div class="foco">' + (ok ? '<div class="balao vd"><small>IT WORKS</small><p>' + x[0][0] + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="ing-prox">Next</button></div>'
    : '<div class="versoes tres-v">' + ordem(x, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="ing" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa" style="text-align:center">' + NOTA[e.esc] + '</p>' : '')) + '</div>';
};

function rSuspeito(c, k) {
  var s = SUSPEITOS[k], e = S.sus[k], t = Math.min(e.t, s.turnos.length - 1), turno = s.turnos[t], ouviu = (S.ouviu || {})[turno[1]];
  var acertos = s.marcas.filter(function (m, i) { return e.m[i] && m[1]; }).length, todos = e.t >= s.turnos.length - 1 && ouviu;
  var lado = '<div class="pede vd"><small>YOU ASK · ' + (t + 1) + ' OF 3</small><b>“' + turno[0] + '”</b></div><div class="toca-linha">' + tocar(turno[1]) + '<div>' + transcricao(turno[1], TR[turno[1]]) + '</div></div>'
    + (ouviu && t < s.turnos.length - 1 ? '<div><button type="button" class="btn" data-a="sp" data-c="' + k + '">Next question</button></div>' : '');
  if (todos) lado += '<h5 class="rot-ouve">' + s.rot + '</h5><div class="marcas">' + s.marcas.map(function (m, i) { var on = e.m[i]; return '<button type="button" class="marca' + (on ? (m[1] ? ' certo' : ' errado') : '') + '" data-a="sm" data-c="' + k + '" data-n="' + i + '">' + m[0] + '</button>'; }).join('') + '</div>'
    + (acertos >= s.meta ? '<p class="aprova">' + s.fecho + '</p>' : s.marcas.some(function (m, i) { return e.m[i] && !m[1]; }) ? '<p class="recusa">' + s.nao + '</p>' : '');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ficha(s.c, s.n.toUpperCase(), s.r, 'grande') + '<div class="aberta vd" style="background-image:url(' + img(k === 'arthur' ? 'corredor' : k === 'marco' ? 'bar' : 'galeria') + ')"><span>INTERVIEW ROOM · ' + s.n.toUpperCase() + '</span></div></div><div class="lado-l">' + lado + '</div></div>';
}
R.arthur = function (c) { return rSuspeito(c, 'arthur'); };
R.eleanor = function (c) { return rSuspeito(c, 'eleanor'); };
R.marco = function (c) { return rSuspeito(c, 'marco'); };

R.quadro = function (c) {
  var e = S.qd, x = e.sel >= 0 ? QUADRO[e.sel] : null, fech = {}, abert = {};
  QUADRO.forEach(function (q, i) { if (e.esc[i] === q.fecha) { if (q.fecha) fech[q.k] = 1; else abert[q.k] = 1; } });
  var lado;
  if (!x) lado = '<div class="pergunta vd"><small>THE BOARD</small><h2>' + (Object.keys(fech).length === 2 && abert.eleanor ? 'Two strings closed. Eleanor’s didn’t. So where was her husband?' : 'Pick a suspect. Say the alibi in one sentence.') + '</h2></div>';
  else {
    var esc = e.esc[e.sel], ok = esc === x.fecha;
    lado = '<div class="pede vd"><small>' + x.n.toUpperCase() + ' · THE ALIBI</small><b>' + x.alibi + '</b></div><div class="aberta vd ev" style="background-image:url(' + img(x.img) + ')"><span>' + x.ev + '</span></div>'
      + (ok ? '<p class="aprova">' + x.por + '</p>' : '<div class="tres-b"><button type="button" class="pilula grande-p' + (esc === 1 ? ' errado' : '') + '" data-a="qd-v" data-v="1">IT CLOSES</button><button type="button" class="pilula grande-p' + (esc === 0 ? ' errado' : '') + '" data-a="qd-v" data-v="0">IT DOESN’T CLOSE</button></div>' + (esc !== undefined ? '<p class="recusa">Look at the evidence again. Does it agree with the alibi?</p>' : ''));
  }
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + cortica(fech, abert) + '<div class="tres-b">' + QUADRO.map(function (q, i) { return '<button type="button" class="chip' + (e.sel === i ? ' on' : '') + '" data-a="qd" data-n="' + i + '">' + q.n + '</button>'; }).join('') + '</div></div><div class="lado-l">' + lado + '</div></div>';
};

R.interroga = function (c) {
  var e = S.it, n = e.n, fim = n >= INTERROGA.length, p = e.partes[n] || {};
  if (fim) {
    var ok = e.culpa === 'Mr. Smith';
    return cab(c) + '<div class="mesa-c"><div class="aberta vd" style="background-image:url(' + img('vitrine-a') + ')"><span>THE EMPTY CASE</span></div><div class="lado-l"><div class="pergunta vd ja"><small>NAME THE THIEF</small><h2>Who took the Crimson Diamond?</h2></div><div class="tres-b">'
      + CULPADOS.map(function (q) { return '<button type="button" class="pilula grande-p' + (e.culpa === q ? (ok ? ' certo' : ' errado') : '') + '" data-a="it-c" data-v="' + q + '">' + q + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">Mr. Smith wasn’t getting champagne. He was running to the back door with the diamond, and Eleanor was covering for him. Case closed.</p>' : e.culpa ? '<p class="recusa">That alibi closed. Look at the board again.</p>' : '') + '</div></div>';
  }
  return cab(c) + trilha(INTERROGA, n) + '<div class="mesa-c">' + ficha('JS', 'MR. SMITH', 'ELEANOR’S HUSBAND', 'grande') + '<div class="lado-l"><div class="pede vd"><small>YOU ASK · QUESTION ' + (n + 1) + ' OF 6</small><b>“' + INTERROGA[n] + '”</b></div><p class="dica-aluno">Your teacher answers as Mr. Smith. He lies. Catch it.</p>'
    + '<h5 class="so-prof rot-ouve">WHAT YOU HEARD</h5><div class="tres-b">' + PARTES.map(function (k) { return '<button type="button" class="chip so-prof' + (p[k[0]] ? ' on' : '') + '" data-a="it-p" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div><p class="recusa">Not this: What you were doing? · I was sleep</p><div><button type="button" class="btn" data-a="it-prox">' + (n < INTERROGA.length - 1 ? 'Next question' : 'Name the thief') + '</button></div></div></div>';
};

R.seu = function (c) {
  var e = S.seu, n = Math.min(e.n, SEU.length - 1), x = SEU[n];
  return cab(c) + trilha(SEU, e.n) + '<div class="mesa-c">' + ficha('YOU', 'THE WITNESS', 'YOUR ALIBIS', 'grande') + '<div class="lado-l"><div class="pergunta vd ja"><small>THE DETECTIVE ASKS · ' + (n + 1) + ' OF 4</small><h2>' + x.q + '</h2></div>'
    + fala('se' + n, [x.ini], ['was', 'were', 'wasn’t', '-ing']) + mostra('se' + n, x.ex, 1) + '<p class="dica-aluno">Then ask your teacher the same question.</p>'
    + (n < SEU.length - 1 ? '<div><button type="button" class="btn" data-a="se-prox">Next question</button></div>' : '<p class="aprova">Four alibis, and all of them close.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'At 7 AM I was …\nAt 1 PM I was …\nAt 10 PM I wasn’t … I was …', 'Your alibis',
    ['At 7 AM I was ', 'At 1 PM I was ', 'At 10 PM I wasn’t ', 'I was ', 'we were '], ['YESTERDAY, THREE TIMES', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now your alibis: was / were + -ing.' : 'Three alibis for yesterday: was / were + -ing.'])
    + '<div class="lado-fim">' + ficha('CASE', 'CLOSED', 'THE CRIMSON DIAMOND') + '<div class="grande vd"><span>What <u>were</u> you doing?</span><span>I <u>was</u> work<u>ing</u> · I <u>wasn’t</u> there</span><span><u>Were</u> you …? Yes, I <u>was</u>.</span></div>'
    + mostra('fim', 'At 7 AM I was making coffee.<br>At 1 PM I was having lunch with my team.<br>At 10 PM I wasn’t sleeping. I was watching a movie.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.od = function (b, n) { var e = S.od, prox = e.pick.length; if (n === prox) { e.pick.push(n); e.err = 0; } else e.err = 1; };
TOQUES['od-prox'] = function () { S.od = { n: S.od.n + 1, pick: [], err: 0 }; };
TOQUES.ing = function (b, n, v) { S.ing.esc = v; };
TOQUES['ing-prox'] = function () { S.ing = { n: S.ing.n + 1, esc: '' }; };
TOQUES.sp = function (b, n, v, c) { S.sus[c].t++; };
TOQUES.sm = function (b, n, v, c) { S.sus[c].m[n] = 1; };
TOQUES.qd = function (b, n) { S.qd.sel = n; };
TOQUES['qd-v'] = function (b, n, v) { S.qd.esc[S.qd.sel] = +v; };
TOQUES['it-p'] = function (b, n, v) { var p = S.it.partes[S.it.n] = S.it.partes[S.it.n] || {}; p[v] = !p[v]; };
TOQUES['it-prox'] = function () { S.it.n++; };
TOQUES['it-c'] = function (b, n, v) { S.it.culpa = v; };
TOQUES['se-prox'] = function () { S.seu.n++; };
