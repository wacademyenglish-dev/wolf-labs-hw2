/* ============================================================
   EACH OTHER · TWO BROTHERS, TWO STORIES · LIVE CLASS  05/10/2026
   Main series A2 · myself / themselves (a ação volta) × each other (a ação
   cruza) · verbos sem -self (feel, get up, remember, relax, focus,
   complain) · by myself × alone
   O MUNDO (da aula velha): dois irmãos abriram uma padaria há nove anos;
   a documentarista Dana entrevistou cada um separado e as histórias não
   batem por uma palavra. A CARA: os dois irmãos como dois NÓS num SVG
   escuro; a seta que volta para a mesma pessoa é -self, as setas que se
   cruzam são each other. Sem áudio nem vídeo. Fila: FILA-LIVE-386.md · 048.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'padaria' },
  { k: 'abre', est: 'o', min: 7, img: 'paes', rot: 'I · Two of Your Stories', t: 'Three questions about you. Nothing to solve yet.', p: 'Pick a card. Nobody is corrected here. Your teacher taps what you used.' },
  { k: 'mics', est: 'f', min: 6, img: 'ilha', rot: 'II · Two Microphones', t: 'Separate interviews. Neither brother heard the other.', p: 'Read both lines out loud. Same story, or not?' },
  { k: 'gx', est: 'f', min: 4, img: 'padaria', rot: 'III · Self or Each Other?', t: 'Two bakery stories. Two different arrows.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'seta', est: 'o', min: 7, img: 'padaria', rot: 'IV · The Arrow', t: 'The action goes one of two ways. There is no third.', p: 'Tap a shape. Say the sentence. Then try the other shape.' },
  { k: 'trilhos', est: 'f', min: 6, img: 'padaria', rot: 'V · Which Way?', t: 'Both shapes are correct English. What changes is what happened.', p: 'Read the situation. Choose the arrow. Then say the sentence.' },
  { k: 'tira', est: 'f', min: 6, img: 'paes', rot: 'VI · What English Throws Away', t: 'Some sentences have one word too many.', p: 'Tap the extra word. If nothing is extra, tap NOTHING TO TAKE.' },
  { k: 'sala', est: 'f', min: 6, img: 'padaria', rot: 'VII · Count the Room', t: 'Alone, or by myself? Count the people first.', p: 'Say how many people are there. Then choose.' },
  { k: 'corte', est: 'o', min: 7, extra: 1, img: 'ilha', rot: 'VIII · The Editor’s Cut', t: 'Ten minutes of film, and only one version fits.', p: 'Choose the version that goes out. Your teacher is Dana and pushes back three times.' },
  { k: 'creditos', est: 'f', min: 6, extra: 1, img: 'ilha', rot: 'IX · The Credits', t: 'Each credit line is missing one piece.', p: 'Read the line. Choose the piece. Say the whole line.' },
  { k: 'fim', est: 'w', min: 6, img: 'paes', rot: 'X · Your Stories, Again', t: 'Write your two stories.', p: 'Something you taught yourself, and something you and someone taught each other. It goes to My notes.' }
];

var ABRE = [
  { k: 'BY YOURSELF', q: 'Tell me something you learned with nobody to help you.', fup: 'How long did it take?', st: ['I taught myself …', 'I learned … by myself.'], ex: 'I taught myself to play the guitar, with videos.' },
  { k: 'TOGETHER', q: 'Something you and another person learned together.', fup: 'Who taught what?', st: ['We taught each other …'], ex: 'My sister and I taught each other to cook.' },
  { k: 'WHICH ONE?', q: 'Which one took longer, and which do you remember better?', fup: 'Why?', st: ['The … one, because …'], ex: 'The guitar took longer, but I remember the cooking better.' }
];
var FORMAS = [{ k: 'self', t: 'MYSELF / OURSELVES' }, { k: 'each', t: 'EACH OTHER' }, { k: 'troca', t: 'THEMSELVES FOR EACH OTHER', erro: 1 }, { k: 'feel', t: 'FEEL MYSELF / GET MYSELF UP', erro: 1 }];

var MICS = [
  { a: 'We opened the bakery nine years ago, in March.', b: 'We opened the bakery nine years ago, in March.', k: 'sim', w: 'Same story. Same month, same year.' },
  { a: 'We taught ourselves. Nobody showed us anything.', b: 'We taught each other. He showed me the oven.', k: 'nao', w: 'Ourselves against each other: two different stories.' },
  { a: 'The first winter was hard for both of us.', b: 'The first winter was hard for both of us.', k: 'sim', w: 'Same story, same words.' },
  { a: 'I did the first year by myself.', b: 'He was alone that year.', k: 'nao', w: 'By myself (nobody helped) against alone (nobody was there).' },
  { a: 'We still argue about the bread every Monday.', b: 'We still argue about the bread every Monday.', k: 'sim', w: 'Same story, and they sound happy about it.' },
  { a: 'I would do it again.', b: 'I would do it again.', k: 'sim', w: 'Same. This line closes the film.' }
];
var VERBOS = [
  { v: 'taught', volta: 'They taught themselves.', cruza: 'They taught each other.' },
  { v: 'helped', volta: 'They helped themselves.', cruza: 'They helped each other.' },
  { v: 'looked at', volta: 'They looked at themselves.', cruza: 'They looked at each other.' }
];
var TRILHOS = [
  { sit: 'Tomás wrote to Rafa. Rafa wrote to Tomás.', k: 'cruza', frase: 'They wrote to each other.', w: 'Two letters, and each one went across.' },
  { sit: 'Tomás looked in the mirror. Rafa looked in the mirror.', k: 'volta', frase: 'They looked at themselves.', w: 'Two mirrors. Neither looked at the other.' },
  { sit: 'Rafa cut the bread, and cut his finger.', k: 'volta', frase: 'He cut himself.', w: 'The knife came back to the same person.', um: 1 },
  { sit: 'On Monday Tomás covered Rafa’s shift. On Friday Rafa covered his.', k: 'cruza', frase: 'They covered for each other.', w: 'Two shifts, two directions.' },
  { sit: 'Nobody trained them. They read, failed, and read again.', k: 'volta', frase: 'They taught themselves.', w: 'This is Tomás’s version.' },
  { sit: 'Tomás showed Rafa the oven. Rafa showed Tomás the books.', k: 'cruza', frase: 'They taught each other.', w: 'And this is Rafa’s version of the same years.' }
];
var TIRA = [
  { f: ['I', 'feel', 'myself', 'tired', 'today.'], tira: 2, w: 'Feel takes nothing: I feel tired today.' },
  { f: ['He', 'got', 'himself', 'up', 'at', 'five.'], tira: 2, w: 'Get up takes nothing: He got up at five.' },
  { f: ['She', 'hurt', 'herself', 'on', 'the', 'oven.'], tira: -1, w: 'This one keeps it. Hurt needs somebody, and here it is her.' },
  { f: ['They', 'complained', 'themselves', 'about', 'the', 'bread.'], tira: 2, w: 'Complain takes nothing.' },
  { f: ['Tomás', 'taught', 'himself', 'to', 'bake.'], tira: -1, w: 'This one keeps it. The student was the same man.' },
  { f: ['We', 'need', 'to', 'relax', 'ourselves.'], tira: 4, w: 'Relax takes nothing: We need to relax.' },
  { f: ['I', 'can’t', 'focus', 'myself', 'on', 'this.'], tira: 3, w: 'Focus takes nothing.' },
  { f: ['Do', 'you', 'remember', 'yourself', 'the', 'letter?'], tira: 3, w: 'Remember takes nothing.' }
];
var SALA = [
  { sit: 'Four of us in the kitchen, all busy. I made the whole batch with no help.', gente: 4, k: 'by', frase: 'I made it by myself.', w: 'Three other people were there, so alone is false.' },
  { sit: 'Sunday. The shop is closed and Rafa is away. I sat in the front room.', gente: 1, k: 'alone', frase: 'I was alone.', w: 'Nobody there at all.' },
  { sit: 'Rafa is at the counter; two customers wait. I carry the sacks in.', gente: 4, k: 'by', frase: 'I carried them by myself.', w: 'A full room, and nobody took the other end.' },
  { sit: 'The first year. Rafa lived in another city. Tomás opened every morning.', gente: 1, k: 'alone', frase: 'He was alone.', w: 'That is Rafa’s line. Tomás said by myself.' },
  { sit: 'A cooking class: twelve students, one teacher. I finished my loaf.', gente: 13, k: 'by', frase: 'I did it by myself.', w: 'Thirteen people in the room.' },
  { sit: 'Late. Everyone has gone home. I lock up and wait for the bus.', gente: 1, k: 'alone', frase: 'I was alone.', w: 'Nobody there.' }
];
var VERSOES = [
  { k: 'velho', quem: 'TOMÁS’S VERSION', linha: 'We taught ourselves. Nobody showed us anything. I did the first year by myself.', resumo: 'two men who owed nobody anything' },
  { k: 'novo', quem: 'RAFA’S VERSION', linha: 'We taught each other. He showed me the oven, I showed him the books.', resumo: 'two brothers who were each other’s teachers' }
];
var OBJECOES = ['If you run this version, what happens to the other brother’s story?', 'Show me the line where the arrow goes the way you want. Read it to me.', 'Nine years, ten minutes. Why would YOU watch this version on a Sunday?'];
var PECAS = [{ k: 'self', t: 'himself' }, { k: 'selves', t: 'themselves' }, { k: 'each', t: 'each other' }, { k: 'by', t: 'by himself' }, { k: 'nada', t: 'nothing at all' }];
var CRED = [
  { f: 'The brothers taught ___ for nine years.', k: 'each', w: 'Each other: the version that went out.' },
  { f: 'Tomás got up ___ at four every morning.', k: 'nada', w: 'Get up takes nothing.' },
  { f: 'Rafa cut ___ twice in the first month.', k: 'self', w: 'Himself: the knife came back.' },
  { f: 'They never complained ___ about the hours.', k: 'nada', w: 'Complain takes nothing.' },
  { f: 'The two of them still argue with ___ every Monday.', k: 'each', w: 'Each other: two people, two directions.' },
  { f: 'Tomás opened the shop ___ for a whole year.', k: 'by', w: 'By himself: nobody helped.' },
  { f: 'They introduced ___ to the crew on the first day.', k: 'selves', w: 'Themselves: each brother said his own name.' },
  { f: 'Dana remembered ___ the last shot at midnight.', k: 'nada', w: 'Remember takes nothing.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, mics: { esc: {} }, seta: { v: 0, forma: '' }, tri: { n: 0, esc: '' }, tira: { n: 0, esc: null }, sala: { n: 0, esc: '' }, corte: { k: '', obj: 0 }, cred: { n: 0, esc: '' } };

function setas(forma, cls, um) {
  var s = '<svg class="setas' + (cls ? ' ' + cls : '') + '" viewBox="0 0 360 170" role="img" aria-label="Arrows"><defs><marker id="pt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="currentColor"/></marker></defs>';
  s += '<g class="no"><circle cx="80" cy="100" r="34"/><text x="80" y="105">TOMÁS</text></g>' + (um ? '' : '<g class="no"><circle cx="280" cy="100" r="34"/><text x="280" y="105">RAFA</text></g>');
  if (forma === 'volta') s += '<path class="seta volta" d="M62 70 C40 10, 120 10, 98 70" marker-end="url(#pt)"/>' + (um ? '' : '<path class="seta volta" d="M262 70 C240 10, 320 10, 298 70" marker-end="url(#pt)"/>');
  else if (forma === 'cruza') s += '<path class="seta cruza" d="M112 88 C170 40, 200 40, 246 86" marker-end="url(#pt)"/><path class="seta cruza" d="M248 118 C190 160, 160 160, 114 118" marker-end="url(#pt)"/>';
  return s + '</svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · TWO BROTHERS, TWO STORIES</span><h1>Each <b>Other</b></h1>'
    + '<p class="sub">Two interviews about the same nine years. One small word makes them two different stories.</p>'
    + '<div class="chipsx"><span class="pilula">themselves</span><span class="pilula">each other</span><span class="pilula">by myself · alone</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the footage</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-s">' + setas('cruza') + '<p class="sussurro">They taught each other. Or did they teach themselves?</p></div></div>';
};

R.abre = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.mics = function (c) {
  var e = S.mics.esc;
  return cab(c) + '<div class="mics">' + MICS.map(function (x, i) {
    var esc = e[i], ok = esc === x.k;
    return '<div class="mic vd' + (ok ? ' feito' : '') + '"><div class="duas-l"><p><small>TOMÁS</small>' + x.a + '</p><p><small>RAFA</small>' + x.b + '</p></div><div class="tres-b">'
      + [['sim', 'Same story'], ['nao', 'Not the same']].map(function (o) { return '<button type="button" class="pilula' + (esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="mc" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
      + (esc ? '<p class="' + (ok ? 'aprova' : 'recusa') + '">' + (ok ? x.w : 'Read them again, one word at a time. If a word changed, it is a small one.') + '</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.seta = function (c) {
  var e = S.seta, x = VERBOS[e.v];
  return cab(c) + '<div class="mesa-s"><div class="vd sv-box">' + setas(e.forma) + '</div><div class="lado-l"><div class="tres-b">' + VERBOS.map(function (v, i) { return '<button type="button" class="chip' + (e.v === i ? ' on' : '') + '" data-a="st-v" data-n="' + i + '">' + v.v + '</button>'; }).join('') + '</div>'
    + '<div class="tres-b">' + [['volta', 'It comes back · -self'], ['cruza', 'It crosses · each other']].map(function (o) { return '<button type="button" class="pilula grande' + (e.forma === o[0] ? ' certo' : '') + '" data-a="st-f" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (e.forma ? '<div class="balao vd"><small>SAY IT</small><p>' + x[e.forma] + '</p></div><p class="dica-aluno">' + (e.forma === 'volta' ? 'Tomás to Tomás. Rafa to Rafa. Nobody crossed.' : 'Tomás to Rafa, and Rafa to Tomás. Both ways.') + '</p>' : '<p class="dica-aluno">Tap a shape.</p>') + '</div></div>';
};

R.trilhos = function (c) {
  var e = S.tri, n = e.n;
  if (n >= TRILHOS.length) return cab(c) + trilha(TRILHOS, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Same brothers, same nine years: the arrow decided which story it was.</h2></div></div>';
  var x = TRILHOS[n], ok = e.esc === x.k;
  return cab(c) + trilha(TRILHOS, n) + '<div class="mesa-s"><div class="vd sv-box">' + setas(ok ? x.k : '', '', x.um) + '</div><div class="lado-l"><div class="pede vd"><small>WHAT HAPPENED</small><b>' + x.sit + '</b></div><div class="tres-b">'
    + [['volta', 'It comes back'], ['cruza', 'It crosses']].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="tr" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa">Read it again. How many directions does the action have?</p>' : '') + (ok ? '<div class="balao vd"><small>SAY IT</small><p>' + x.frase + '</p></div><p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="tr-prox">Next</button></div>' : '') + '</div></div>';
};

R.tira = function (c) {
  var e = S.tira, n = e.n;
  if (n >= TIRA.length) return cab(c) + trilha(TIRA, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Six verbs that refuse it, two that need it. The verb decides: feel, get up, remember, relax, focus, complain take nothing.</h2></div></div>';
  var x = TIRA[n], ok = e.esc === x.tira;
  return cab(c) + trilha(TIRA, n) + '<div class="foco"><div class="frase-t">' + x.f.map(function (w, i) { return '<button type="button" class="palavra' + (e.esc === i ? (ok ? ' tirada' : ' errado') : '') + '" data-a="ti" data-v="' + i + '">' + w + '</button>'; }).join('') + '</div>'
    + '<div style="text-align:center"><button type="button" class="pilula' + (e.esc === -1 ? (ok ? ' certo' : ' errado') : '') + '" data-a="ti" data-v="-1">Nothing to take</button></div>'
    + (e.esc !== null && !ok ? '<p class="recusa" style="text-align:center">' + (x.tira === -1 ? 'This sentence is already right. Nothing to take out.' : e.esc === -1 ? 'One word is too many here. Look at the verb.' : 'That word belongs there. Look for another one.') + '</p>' : '')
    + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="ti-prox">Next</button></div>' : '') + '</div>';
};

R.sala = function (c) {
  var e = S.sala, n = e.n;
  if (n >= SALA.length) return cab(c) + trilha(SALA, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>Nobody there: alone. Nobody helping: by myself.</h2></div></div>';
  var x = SALA[n], ok = e.esc === x.k, pessoas = ''; for (var i = 0; i < Math.min(x.gente, 13); i++) pessoas += '<i></i>';
  return cab(c) + trilha(SALA, n) + '<div class="foco"><div class="pede vd"><small>THE ROOM</small><b>' + x.sit + '</b></div><div class="gente-s">' + (ok ? pessoas : '<span>How many people? Count them out loud.</span>') + '</div><div class="tres-b centro">'
    + [['alone', 'alone'], ['by', 'by myself']].map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="sa" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Count the people. That number decides.</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">' + x.frase + ' ' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="sa-prox">Next</button></div>' : '') + '</div>';
};

R.corte = function (c) {
  var e = S.corte, v = VERSOES.filter(function (x) { return x.k === e.k; })[0];
  var cartas = '<div class="versoes-c">' + VERSOES.map(function (x) { return '<button type="button" class="versao-c vd' + (e.k === x.k ? ' on' : '') + '" data-a="ct" data-v="' + x.k + '"><small>' + x.quem + '</small><p>“' + x.linha + '”</p><em>A film about ' + x.resumo + '.</em></button>'; }).join('') + '</div>';
  var lado = !v ? '<p class="dica-aluno">Choose one cut. There is no right answer.</p>'
    : (e.obj < 3 ? '<div class="balao vd"><small>DANA · OBJECTION ' + (e.obj + 1) + ' OF 3</small><p>“' + OBJECOES[e.obj] + '”</p></div>' + fala('ct' + e.obj, ['Because in this version …', 'This line shows …', 'I’d watch it because …'], []) + '<div><button type="button" class="btn so-prof" data-a="ct-ob">Defended · next objection</button></div>'
      : '<div class="balao vd resp"><small>DANA</small><p>“All right. It’s your cut. Lock it.”</p></div><p class="aprova">You chose, you defended it three times, and it’s your cut.</p>');
  return cab(c) + '<div class="mesa-s">' + cartas + '<div class="lado-l">' + lado + '</div></div>';
};

R.creditos = function (c) {
  var e = S.cred, n = e.n;
  if (n >= CRED.length) return cab(c) + trilha(CRED, n) + '<div class="foco"><div class="creditos vd">' + CRED.map(function (x) { var p = PECAS.filter(function (k) { return k.k === x.k; })[0]; return '<p>' + x.f.replace(' ___', x.k === 'nada' ? '' : ' <b>' + p.t + '</b>') + '</p>'; }).join('') + '</div></div>';
  var x = CRED[n], ok = e.esc === x.k, p = PECAS.filter(function (k) { return k.k === x.k; })[0];
  return cab(c) + trilha(CRED, n) + '<div class="foco"><div class="frase-n vd">' + x.f.replace('___', '<span class="gap">' + (ok ? (x.k === 'nada' ? '∅' : p.t) : '___') + '</span>') + '</div><div class="tres-b centro">'
    + PECAS.map(function (k) { return '<button type="button" class="pilula grande' + (e.esc === k.k ? (ok ? ' certo' : ' errado') : '') + '" data-a="cr" data-v="' + k.k + '">' + k.t + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">Read the verb again. Does the action come back, cross, or need nothing?</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="cr-prox">Next line</button></div>' : '') + '</div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I taught myself to …\nMy brother and I taught each other …\nI was alone, but …', 'Your two stories',
    ['I taught myself ', 'by myself', 'We taught each other ', 'each other', 'alone'], ['YOUR STORIES, AGAIN', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now write both stories with the right arrow.' : 'Something you taught yourself, and something you taught each other.'])
    + '<div class="lado-fim">' + setas('cruza', 'mini') + '<div class="grande vd"><span>it comes back: <u>myself</u> · <u>themselves</u></span><span>it crosses: <u>each other</u></span><span>nothing: feel, get up, relax, remember</span><span><u>by myself</u> = no help · <u>alone</u> = nobody there</span></div>'
    + mostra('fim', 'I taught myself to play the guitar.<br>My sister and I taught each other to cook.<br>I cooked by myself last Sunday, but I wasn’t alone: my cat was there.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.mc = function (b, n, v) { S.mics.esc[n] = v; };
TOQUES['st-v'] = function (b, n) { S.seta = { v: n, forma: '' }; };
TOQUES['st-f'] = function (b, n, v) { S.seta.forma = v; };
TOQUES.tr = function (b, n, v) { S.tri.esc = v; };
TOQUES['tr-prox'] = function () { S.tri = { n: S.tri.n + 1, esc: '' }; };
TOQUES.ti = function (b, n, v) { S.tira.esc = +v; };
TOQUES['ti-prox'] = function () { S.tira = { n: S.tira.n + 1, esc: null }; };
TOQUES.sa = function (b, n, v) { S.sala.esc = v; };
TOQUES['sa-prox'] = function () { S.sala = { n: S.sala.n + 1, esc: '' }; };
TOQUES.ct = function (b, n, v) { S.corte = { k: v, obj: 0 }; };
TOQUES['ct-ob'] = function () { S.corte.obj++; };
TOQUES.cr = function (b, n, v) { S.cred.esc = v; };
TOQUES['cr-prox'] = function () { S.cred = { n: S.cred.n + 1, esc: '' }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de seta.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Myself or each other? Two moments in the bakery.',
  a: { t: 'The action comes back', falas: [['Dana', 'What happened in the kitchen?'], ['The older brother', 'I burned <mark>myself</mark> on the oven.']], d: 'The same person does it and gets it: <b>myself</b>.' },
  b: { t: 'The action goes both ways', falas: [['Dana', 'And the two of you?'], ['The older brother', 'We don’t call <mark>each other</mark> any more.']], d: 'Two people, and each one does it to the other: <b>each other</b>.' },
  pergunta: 'Two small words, two arrows. What is different in the situation?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'He cut his own finger.', o: ['He cut himself.', 'He cut each other.'], c: 0, d: 'One person: himself.' },
    { p: 'Brother A trusts Brother B. Brother B trusts Brother A.', o: ['They trust themselves.', 'They trust each other.'], c: 1, d: 'Both ways between two people.' },
    { p: 'The baker looked in the mirror.', o: ['He looked at himself.', 'He looked at each other.'], c: 0, d: 'One person, one mirror: himself.' },
    { p: 'We leave notes for the other one. Both of us do it.', o: ['We write each other notes.', 'We write ourselves notes.'], c: 0, d: 'Both ways: each other.' }
  ],
  nota: 'The action comes back to the same person: <b>myself, himself, themselves</b>. The action goes both ways between two people: <b>each other</b>. Some verbs don’t need -self at all: he relaxes, she felt tired.',
  uso: { p: 'Your turn. One thing you did to yourself, and one thing you and a friend do for each other.', molde: ['I … myself.', 'We … each other.'], ex: 'I burned myself yesterday. My best friend and I help each other every week.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
