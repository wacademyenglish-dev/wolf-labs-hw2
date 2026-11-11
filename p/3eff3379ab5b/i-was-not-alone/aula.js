/* ============================================================
   I WAS NOT ALONE · THE FLOOR PLAN · LIVE CLASS  05/10/2026
   Main series A1 · was / were · there was / there were · wasn't /
   weren't · Was it…? / Were you…? · I was scared
   O MUNDO (mantido): o aluno cuida da casa da Mrs. Reed e do cachorro Rex
   por uma noite. De manhã ela volta: quatro xícaras, uma ainda morna, um
   casaco no gancho, a janela aberta, e um cachorro que não latiu. Ela mora
   sozinha e ninguém tem a chave. "I wasn't alone."
   A CARA: a planta azul da casa no escuro; cada cômodo ACENDE quando a
   frase com was/were está certa. Na cena VI (information gap) o aluno tem
   a ficha da noite e o professor a da manhã (só ele vê).
   Áudios: os 16 da pasta (abertura, fechamento, as formas curtas, as
   perguntas), que a aula antiga não usava; conferidos no faster-whisper.
   Fila: FILA-LIVE-386.md · 012.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'hall-noite' },
  { k: 'fotos', est: 'o', min: 7, img: 'hall-noite', rot: 'I · Five Snapshots', t: 'Before the house: your day yesterday.', p: 'Pick a time. Where were you? Answer out loud. Then the follow-up.' },
  { k: 'nove', est: 'l', min: 7, img: 'cozinha-noite', rot: 'II · Nine O’Clock', t: 'Nine o’clock. Seven things in the house. Now, in the present.', p: 'Play the house first. Then say one sentence about each thing, in the present.' },
  { k: 'volta', est: 'f', min: 6, img: 'hall-manha', rot: 'III · She Is Back', t: '7:40 AM. Mrs. Reed is home. The same seven, now in the past.', p: 'Choose WAS or WERE, and say the whole sentence. The room lights up.' },
  { k: 'gx', est: 'f', min: 4, img: 'cozinha-noite', rot: 'IV · The Flip', t: 'The house, then the question.', p: 'Flip each sentence. Notice where was or were goes. Then flip four on your own.' },
  { k: 'regra', est: 'f', min: 6, img: 'hall-manha', rot: 'V · The Rule', t: 'The rule of the house.', p: 'Read the table out loud. Then fix the four traps.' },
  { k: 'xicaras', est: 'o', min: 7, img: 'cozinha-manha', rot: 'VI · Four Cups', t: 'The kitchen, in the morning. Things appear on the table.', p: 'Say what was there: There was… or There were… Then tap.' },
  { k: 'gap', est: 'o', min: 7, img: 'sala', rot: 'VII · Night Card, Morning Card', t: 'You have the NIGHT card. Your teacher has the MORNING card.', p: 'Ask Was…? or Were…? Your teacher answers from the morning card. Find what changed.' },
  { k: 'curtas', est: 'l', min: 7, extra: 1, img: 'hall-noite', rot: 'VIII · Short and Long', t: 'Was not, wasn’t. Were not, weren’t.', p: 'Play it. Did you hear the long way or the short way? Then say it both ways.' },
  { k: 'nao', est: 'o', min: 7, extra: 1, img: 'hall-manha', rot: 'IX · No, It Wasn’t', t: 'Mrs. Reed guesses. Her guesses are wrong.', p: 'Correct her: wasn’t or weren’t. Then the true sentence.' },
  { k: 'sustos', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'X · Three in the Morning', t: '3:00 AM. Four sounds in the house. How were you?', p: 'Pick a feeling and say it: I was scared.' },
  { k: 'entrevista', est: 'l', min: 7, extra: 1, img: 'cozinha-manha', rot: 'XI · Mrs. Reed Asks', t: 'Mrs. Reed sits at the kitchen table.', p: 'Play her question first. Then answer out loud. Then the follow-up.' },
  { k: 'fim', est: 'w', min: 6, img: 'hall-manha', rot: 'XII · Your Night', t: 'Your own night: yesterday, at home.', p: 'Write five lines with was, were, there was, there were. And one feeling. The red line watches them. It goes to your My notes.' }
];

var FOTOS = [
  { k: '7 AM', q: 'Where were you at seven in the morning yesterday?', fup: 'Were you tired?', st: ['I was at …', 'I was in …'], ex: 'I was at home, in the kitchen. Yes, I was tired!' },
  { k: '12 PM', q: 'Where were you at twelve o’clock?', fup: 'Who were you with?', st: ['I was at …'], ex: 'I was at work. I was with my team.' },
  { k: '6 PM', q: 'Where were you at six in the evening?', fup: 'Was it a good day?', st: ['I was …'], ex: 'I was on the bus. Yes, it was a good day.' },
  { k: '12 AM', q: 'Where were you at midnight?', fup: 'Were you alone?', st: ['I was in bed.', 'I was …'], ex: 'I was in bed. No, I wasn’t alone: my cat was there!' }
];

/* a planta: cômodos (x, y, w, h no viewBox 600×360) */
var SALAS = { hall: [20, 200, 170, 140, 'HALL'], kitchen: [200, 200, 220, 140, 'KITCHEN'], living: [20, 20, 300, 170, 'LIVING ROOM'], bedroom: [330, 20, 250, 170, 'BEDROOM'], bath: [430, 200, 150, 140, 'BATH'] };

var NOVE = [
  { sala: 'hall', c: 'the front door', img: 'porta', d: 'open, or closed?', pres: 'The door is closed.', v: 'was', pas: 'The door was closed.' },
  { sala: 'living', c: 'the windows', img: 'janelas', d: 'open, or closed?', pres: 'The windows are closed.', v: 'were', pas: 'The windows were closed.' },
  { sala: 'hall', c: 'the coat hook', img: 'gancho', d: 'empty, or full?', pres: 'The hook is empty.', v: 'was', pas: 'The hook was empty.' },
  { sala: 'kitchen', c: 'the kitchen', img: 'cozinha-noite', d: 'clean, or dirty?', pres: 'The kitchen is clean.', v: 'was', pas: 'The kitchen was clean.' },
  { sala: 'kitchen', c: 'the cups', img: 'prateleira', d: 'how many, on the shelf?', pres: 'Five cups are on the shelf.', v: 'were', pas: 'Five cups were on the shelf.' },
  { sala: 'living', c: 'Rex, the dog', img: 'rex', d: 'loud, or quiet?', pres: 'Rex is loud.', v: 'was', pas: 'Rex was loud.' },
  { sala: 'bedroom', c: 'and you', img: 'quarto', d: 'alone, or not alone?', pres: 'I am alone.', v: 'was', pas: 'I was alone.' }
];

var XIC = [
  { n: 1, obj: 'a cup', ok: 'was', fr: 'There was a cup on the table.' },
  { n: 4, obj: 'cups', ok: 'were', fr: 'There were four cups on the table.' },
  { n: 2, obj: 'plates', ok: 'were', fr: 'There were two plates.' },
  { n: 1, obj: 'a spoon', ok: 'was', fr: 'There was a spoon in one cup.' },
  { n: 3, obj: 'chairs', ok: 'were', fr: 'There were three chairs near the table.' },
  { n: 1, obj: 'a warm cup', ok: 'was', fr: 'There was one warm cup. It was still warm.' }
];
var ICO = { 'a cup': '☕', cups: '☕', plates: '🍽️', 'a spoon': '🥄', chairs: '🪑', 'a warm cup': '♨️' };

var GAP = [
  { sala: 'kitchen', coisa: 'THE CUPS', noite: 'Five cups were on the shelf.', q: 'Were the cups on the shelf?', manha: 'No, they weren’t. Four cups were on the table.', mudou: 1 },
  { sala: 'living', coisa: 'THE WINDOW', noite: 'The big window was closed.', q: 'Was the window closed?', manha: 'No, it wasn’t. It was open.', mudou: 1 },
  { sala: 'hall', coisa: 'THE COAT HOOK', noite: 'The hook was empty.', q: 'Was the hook empty?', manha: 'No, it wasn’t. A black coat was on it.', mudou: 1 },
  { sala: 'hall', coisa: 'THE FRONT DOOR', noite: 'The front door was locked.', q: 'Was the front door locked?', manha: 'Yes, it was. It was locked.', mudou: 0 },
  { sala: 'bath', coisa: 'THE TOWELS', noite: 'The towels were dry.', q: 'Were the towels dry?', manha: 'No, they weren’t. Two towels were wet.', mudou: 1 },
  { sala: 'living', coisa: 'REX', noite: 'At 11 PM, Rex was loud.', q: 'Was Rex loud at 3 AM?', manha: 'No, he wasn’t. The neighbor says he was quiet all night.', mudou: 1 }
];

var CURTAS = [
  { au: 'r1.mp3', t: 'The door was not open.', k: 0 }, { au: 'r2.mp3', t: 'The door wasn’t open.', k: 1 },
  { au: 'r3.mp3', t: 'The lights were not on.', k: 0 }, { au: 'r4.mp3', t: 'The lights weren’t on.', k: 1 },
  { au: 'r6.mp3', t: 'I wasn’t alone.', k: 1 }, { au: 'r7.mp3', t: 'They were not asleep.', k: 0 }
];

var NAO = [
  { g: 'The dog was loud at night.', ok: 'wasnt', certo: 'No, he wasn’t. He was quiet.' },
  { g: 'The towels were dry.', ok: 'werent', certo: 'No, they weren’t. They were wet.' },
  { g: 'The window was closed.', ok: 'wasnt', certo: 'No, it wasn’t. It was open.' },
  { g: 'The cups were on the shelf.', ok: 'werent', certo: 'No, they weren’t. They were on the table.' },
  { g: 'You were cold.', ok: 'wasnt', certo: 'No, I wasn’t. I was scared.' },
  { g: 'My neighbors were here.', ok: 'werent', certo: 'No, they weren’t. They were away.' }
];

var SONS = [
  { k: '3:02 AM', s: 'A door, downstairs.', q: 'How were you? Where were you?' },
  { k: '3:10 AM', s: 'Water in the bathroom.', q: 'How were you? Was the light on?' },
  { k: '3:25 AM', s: 'Cups in the kitchen.', q: 'How were you? Were you in bed?' },
  { k: '3:40 AM', s: 'Nothing. Rex was quiet.', q: 'How were you? Was Rex quiet?' }
];
var SENTES = ['scared', 'cold', 'tired', 'nervous', 'hungry', 'OK'];

var ENTR = [
  { au: 'q1.mp3', q: 'Were you alone?', fup: 'Are you sure?', st: ['Yes, I was.', 'No, I wasn’t.'], ex: 'Yes, I was. Well… I think I was.' },
  { au: 'q2.mp3', q: 'Was the door open?', fup: 'And in the morning?', st: ['No, it wasn’t.', 'Yes, it was.'], ex: 'No, it wasn’t. It was locked all night.' },
  { au: 'q3.mp3', q: 'Were you scared?', fup: 'Was it dark?', st: ['Yes, I was.', 'No, I wasn’t.'], ex: 'Yes, I was. It was dark, and there was a noise in the kitchen.' },
  { au: 'q4.mp3', q: 'Was Rex quiet?', fup: 'Is he always quiet?', st: ['Yes, he was.', 'No, he wasn’t.'], ex: 'Yes, he was. Very quiet. That was strange!' },
  { au: 'q5.mp3', q: 'Were the windows shut?', fup: 'All of them?', st: ['Yes, they were.', 'No, they weren’t.'], ex: 'Yes, they were. But in the morning one was open.' },
  { au: 'q6.mp3', q: 'Was it cold in there?', fup: 'Were you in bed?', st: ['Yes, it was.', 'No, it wasn’t.'], ex: 'Yes, it was. I was cold and scared.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  fotos: { sel: -1, foi: {} }, nove: { sel: -1, foi: {} }, volta: { n: 0, esc: '', acesas: {} }, xic: { n: 0, esc: '' },
  gap: { sel: -1, perguntou: {}, mostra: {} }, curtas: { n: 0, esc: -1 }, nao: { n: 0, esc: '' }, sustos: { n: 0, sente: {} }, entr: { n: 0, foi: {} } };

function planta(acesas, foco) {
  return '<svg class="planta" viewBox="0 0 600 360" role="img" aria-label="The floor plan of the house">' + Object.keys(SALAS).map(function (k) {
    var r = SALAS[k], on = acesas[k];
    return '<g class="comodo' + (on ? ' aceso' : '') + (foco === k ? ' foco' : '') + '"><rect x="' + r[0] + '" y="' + r[1] + '" width="' + r[2] + '" height="' + r[3] + '" rx="6"/><text x="' + (r[0] + r[2] / 2) + '" y="' + (r[1] + r[3] / 2 + 5) + '">' + r[4] + '</text></g>';
  }).join('') + '<path d="M95 340 h40" class="porta-p"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE FLOOR PLAN · A1</span><h1>I Was <b>Not Alone</b></h1>'
    + '<p class="sub">Mrs. Reed is away for one night. You look after her house, and her dog, Rex.</p>'
    + '<div class="chipsx"><span class="pilula">was · were</span><span class="pilula">there was · there were</span><span class="pilula">wasn’t · weren’t</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<div class="toca-linha vd">' + tocar('abre.mp3') + transcricao('abre.mp3', '“It is nine o’clock. The house is quiet. Rex is at the door. You are alone here. Or you are not.”') + '</div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the front door</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('hall-noite') + '" alt="A dark hall with a coat stand and stairs"><div class="placa-capa"><small>14 ELM ROAD</small><b>9:00 PM</b><span>GROUND FLOOR</span></div></div></div>';
};
R.fotos = function (c) { return cartasPessoais(c, FOTOS, S.fotos, 'fotos'); };

R.nove = function (c) {
  var e = S.nove, x = e.sel >= 0 ? NOVE[e.sel] : null, todos = NOVE.every(function (_, i) { return e.foi[i]; });
  var grade = '<div class="coisas">' + NOVE.map(function (it, i) { return '<button type="button" class="coisa' + (e.sel === i ? ' on' : '') + (e.foi[i] ? ' feita' : '') + '" data-a="nv-sel" data-n="' + i + '" style="background-image:url(' + img(it.img) + ')"><span>' + it.c + '</span></button>'; }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>9:00 PM · NOW</small><h2>' + x.c.charAt(0).toUpperCase() + x.c.slice(1) + ': ' + x.d + '</h2></div>' + mostra('nv' + e.sel, x.pres) + (e.foi[e.sel] ? '' : '<div><button type="button" class="btn so-prof" data-a="nv-foi">Said it</button></div>') : '<p class="dica-aluno">Pick a thing in the house.</p>';
  return cab(c) + '<div class="toca-linha vd centro">' + tocar('abre.mp3') + transcricao('abre.mp3', '“It is nine o’clock. The house is quiet. Rex is at the door. You are alone here. Or you are not.”', 'nv-abre') + '</div><div class="mesa-nove">' + grade + '<div class="lado-nove">' + lado + (todos ? '<p class="aprova">The house is quiet and you go up to bed. Nothing is in the past yet, because nothing has ended.</p>' : '') + '</div></div>';
};

R.volta = function (c) {
  var v = S.volta, n = v.n, fim = n >= NOVE.length, x = NOVE[Math.min(n, NOVE.length - 1)];
  var regra = '<p class="regra-linha">is → <b>was</b> · am → <b>was</b> · are → <b>were</b></p>';
  if (fim) return cab(c) + '<div class="mesa-planta"><div class="planta-box vd">' + planta(v.acesas) + '</div><div class="foco"><div class="pergunta vd"><small>SEVEN ROOMS LIT</small><h2>“I was alone.” Or was I?</h2></div></div></div>';
  var certo = v.esc === x.v;
  return cab(c) + trilha(NOVE, n) + '<div class="mesa-planta"><div class="planta-box vd">' + planta(v.acesas, x.sala) + regra + '</div><div class="lado-planta"><div class="pergunta vd' + (certo ? ' ja' : '') + '"><small>LAST NIGHT: “' + x.pres + '”</small><h2>' + (certo ? x.pas : x.pas.replace(/\b(was|were)\b/, '<span class="vaga">___</span>')) + '</h2></div>'
    + '<div class="dois-b">' + ['was', 'were'].map(function (w) { return '<button type="button" class="escolha-b' + (v.esc === w ? (certo ? ' certo' : ' errado') : '') + '" data-a="vt" data-v="' + w + '"' + (certo ? ' disabled' : '') + '>' + w.toUpperCase() + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. The ' + SALAS[x.sala][4].toLowerCase() + ' lights up. Say it: <b>' + x.pas + '</b></p><div><button type="button" class="btn" data-a="vt-prox">Next</button></div>' : (v.esc ? '<p class="recusa">' + (x.v === 'was' ? 'One thing, or I: WAS.' : 'More than one: WERE.') + '</p>' : '')) + '</div></div>';
};

R.regra = function (c) {
  return cab(c) + '<div class="tabela-ww vd">' + [['I', 'was'], ['he / she / it', 'was'], ['one thing', 'was'], ['you', 'were'], ['we / they', 'were'], ['more than one', 'were']].map(function (r) { return '<span>' + r[0] + '</span><b class="' + r[1] + '">' + r[1] + '</b>'; }).join('') + '</div>'
    + armas([['THERE WERE', 'There was four cups.', 'There were four cups.', 'Look at the thing after it.'], ['THE QUESTION', 'You were alone?', 'Were you alone?', 'The verb goes first.'], ['THEY', 'They was tired.', 'They were tired.', 'They: were.'], ['A FEELING', 'I was with fear.', 'I was scared.', 'The feeling is one word.']], 'THE FOUR TRAPS · TAP TO FIX');
};

R.xicaras = function (c) {
  var e = S.xic, n = e.n, fim = n >= XIC.length, x = XIC[Math.min(n, XIC.length - 1)];
  var mesa = '<div class="mesa-cozinha" style="background-image:url(' + img('cozinha-manha') + ')"><div class="tampo-x">' + XIC.slice(0, Math.min(n + 1, XIC.length)).map(function (it, i) { var s = ''; for (var k = 0; k < it.n; k++) s += '<i>' + ICO[it.obj] + '</i>'; return '<span class="grupo' + (i === n ? ' novo' : '') + '">' + s + '</span>'; }).join('') + '</div></div>';
  if (fim) return cab(c) + '<div class="mesa-xic">' + mesa + '<div class="foco"><div class="pergunta vd"><small>THE KITCHEN TABLE</small><h2>Five cups on the shelf last night. Four on the table this morning. One was still warm.</h2></div></div></div>';
  var certo = e.esc === x.ok;
  return cab(c) + trilha(XIC, n) + '<div class="mesa-xic">' + mesa + '<div class="lado-xic"><div class="pergunta vd' + (certo ? ' ja' : '') + '"><small>ON THE TABLE · ' + x.n + ' · ' + x.obj.toUpperCase() + '</small><h2>' + (certo ? x.fr : 'There ___ …') + '</h2></div>'
    + '<div class="dois-b">' + ['was', 'were'].map(function (w) { return '<button type="button" class="escolha-b' + (e.esc === w ? (certo ? ' certo' : ' errado') : '') + '" data-a="xc" data-v="' + w + '"' + (certo ? ' disabled' : '') + '>THERE ' + w.toUpperCase() + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova">GOT IT. Say it.</p><div><button type="button" class="btn" data-a="xc-prox">Next</button></div>' : (e.esc ? '<p class="recusa">' + (x.ok === 'were' ? 'Look at the number: more than one. THERE WERE.' : 'Only one: THERE WAS.') + '</p>' : '')) + '</div></div>';
};

R.gap = function (c) {
  var g = S.gap, x = g.sel >= 0 ? GAP[g.sel] : null, acesas = {};
  GAP.forEach(function (f, i) { if (g.mostra[i] && f.mudou) acesas[f.sala] = 1; });
  var fichas = '<div class="ficha-noite vd"><small>YOUR NIGHT CARD</small>' + GAP.map(function (f, i) { return '<button type="button" class="linha-ficha' + (g.sel === i ? ' on' : '') + (g.mostra[i] ? (f.mudou ? ' mudou' : ' igual') : '') + '" data-a="gp-sel" data-n="' + i + '"><b>' + f.coisa + '</b><span>' + f.noite + '</span>' + (g.mostra[i] ? '<em>' + (f.mudou ? 'CHANGED' : 'SAME') + '</em>' : '') + '</button>'; }).join('') + '</div>';
  var lado = x ? '<div class="pergunta vd"><small>ASK YOUR TEACHER</small><h2>' + (g.perguntou[g.sel] ? x.q : 'Was …? / Were …?') + '</h2></div>'
    + (g.perguntou[g.sel] ? '' : '<div class="so-prof dica-prof">Wait for the question. Then tap.</div><div><button type="button" class="btn so-prof" data-a="gp-q">Asked</button></div>' + mostra('gp' + g.sel, x.q))
    + (g.perguntou[g.sel] && !g.mostra[g.sel] ? '<div class="manha-prof so-prof vd"><small>YOUR MORNING CARD · ONLY YOU SEE THIS</small><p>' + x.manha + '</p></div><div><button type="button" class="btn so-prof" data-a="gp-m">Answered · show it</button></div>' : '')
    + (g.mostra[g.sel] ? '<div class="manha vd"><small>THE MORNING</small><p>' + x.manha + '</p></div>' : '')
    : '<p class="dica-aluno">Pick a line on your night card.</p>';
  var todos = GAP.every(function (_, i) { return g.mostra[i]; });
  return cab(c) + '<div class="mesa-gap">' + fichas + '<div class="lado-gap"><div class="planta-box mini vd">' + planta(acesas, x && x.sala) + '</div>' + lado + (todos ? '<p class="aprova">Five things changed. One didn’t: the front door was locked all night.</p>' : '') + '</div></div>';
};

R.curtas = function (c) {
  var e = S.curtas, n = e.n, fim = n >= CURTAS.length, x = CURTAS[Math.min(n, CURTAS.length - 1)];
  if (fim) return cab(c) + trilha(CURTAS, n) + '<div class="foco"><div class="pergunta vd"><small>SHORT AND LONG</small><h2>was not → wasn’t · were not → weren’t. People say the short way.</h2></div></div>';
  var ouviu = (S.ouviu || {})[x.au], certo = e.esc === x.k;
  return cab(c) + trilha(CURTAS, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (certo ? '“' + x.t + '”' : (ouviu ? 'Long way, or short way?' : 'Play it. Ears only.')) + '</span></div>'
    + '<div class="dois-b">' + ['LONG · was not', 'SHORT · wasn’t'].map(function (t, k) { return '<button type="button" class="escolha-b' + (e.esc === k ? (k === x.k ? ' certo' : ' errado') : '') + '" data-a="ct" data-n="' + k + '"' + (ouviu && !certo ? '' : ' disabled') + '>' + t + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Now say it both ways.</p><div style="text-align:center"><button type="button" class="btn" data-a="ct-prox">Next</button></div>' : (e.esc >= 0 ? '<p class="recusa" style="text-align:center">Play it again. Count the words.</p>' : '')) + '</div>';
};

R.nao = function (c) {
  var e = S.nao, n = e.n, fim = n >= NAO.length, x = NAO[Math.min(n, NAO.length - 1)];
  if (fim) return cab(c) + trilha(NAO, n) + '<div class="foco"><div class="pergunta vd"><small>SIX WRONG GUESSES</small><h2>Six corrections. Mrs. Reed sits down. She looks at the cups.</h2></div></div>';
  var certo = e.esc === x.ok;
  return cab(c) + trilha(NAO, n) + '<div class="foco"><div class="balao-reed vd"><small>MRS. REED GUESSES</small><p>“' + x.g + '”</p></div><div class="dois-b">'
    + [['wasnt', 'No, … wasn’t.'], ['werent', 'No, … weren’t.']].map(function (o) { return '<button type="button" class="escolha-b' + (e.esc === o[0] ? (certo ? ' certo' : ' errado') : '') + '" data-a="na" data-v="' + o[0] + '"' + (certo ? ' disabled' : '') + '>' + o[1] + '</button>'; }).join('') + '</div>'
    + (certo ? '<p class="aprova" style="text-align:center">GOT IT. Say it: <b>' + x.certo + '</b></p><div style="text-align:center"><button type="button" class="btn" data-a="na-prox">Next</button></div>' : (e.esc ? '<p class="recusa" style="text-align:center">' + (x.ok === 'werent' ? 'More than one, or they: WEREN’T.' : 'One thing, he, it, or I: WASN’T.') + '</p>' : '')) + '</div>';
};

R.sustos = function (c) {
  var e = S.sustos, n = e.n, fim = n >= SONS.length, x = SONS[Math.min(n, SONS.length - 1)], sel = e.sente[n];
  if (fim) return cab(c) + trilha(SONS, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR SOUNDS, FOUR FEELINGS</small><h2>I was scared: the feeling is one word, not “with fear”.</h2></div></div>';
  return cab(c) + trilha(SONS, n) + '<div class="foco"><div class="relogio-noite vd"><b>' + x.k + '</b><p>' + x.s + '</p></div><div class="pergunta vd"><small>YOU, IN BED</small><h2>' + x.q + '</h2></div>'
    + '<div class="sentimentos">' + SENTES.map(function (s) { return '<button type="button" class="chip frase' + (sel === s ? ' on' : '') + '" data-a="su" data-v="' + s + '">I was ' + s + '.</button>'; }).join('') + '</div>'
    + (sel ? mostra('su' + n, 'I was ' + sel + '. I was in bed, and the light was off.', 1) + '<div style="text-align:center"><button type="button" class="btn" data-a="su-prox">Next sound</button></div>' : '') + '</div>';
};

R.entrevista = function (c) {
  var a = S.entr, n = a.n, fim = n >= ENTR.length, x = ENTR[Math.min(n, ENTR.length - 1)];
  if (fim) return cab(c) + trilha(ENTR, n) + '<div class="foco"><div class="pergunta vd"><small>MRS. REED</small><h2>“I live alone. Nobody has a key.” Say the last sentence of the story.</h2></div><div class="toca-linha vd centro">' + tocar('fecha.mp3') + transcricao('fecha.mp3', '“It was nine o’clock. The house was quiet. Rex was at the door. You were alone here. You were not.”') + '</div>' + mostra('fim-h', 'I wasn’t alone.') + '</div>';
  return cab(c) + trilha(ENTR, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + transcricao(x.au, '<b>“' + x.q + '”</b>', 'en' + n) + '</div>'
    + (a.foi[n] ? follow('FOLLOW-UP', x.fup, ['Yes, …', 'No, …', 'Because …'], [], 'enf' + n) + '<div style="text-align:center"><button type="button" class="btn" data-a="seq-prox" data-c="entr">Next question</button></div>'
      : '<div class="acoes-fup" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center"><button type="button" class="btn so-prof" data-a="seq-foi" data-c="entr">Answered · show the follow-up</button></div>' + fala('en' + n + 'a', x.st, []) + mostra('en' + n, x.ex, 1) + '') + '</div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Last night I was at home.\nThe windows were …\nThere was …', 'Your night',
    ['I was ', 'It was ', 'They were ', 'There was ', 'There were ', 'wasn’t', 'weren’t', 'I was scared'], ['YOUR NIGHT', 'Last night, at home. Where were you? What was there? How were you?'])
    + '<div class="lado-fim"><div class="grande vd"><span>The door <u>was</u> locked.</span><span>The cups <u>were</u> on the table.</span><span>I <u>wasn’t</u> alone.</span><small>One thing, I, he, she, it: WAS. More than one, you, we, they: WERE. There WERE four cups. WERE you alone?</small></div>'
    + mostra('fim', 'Last night I was at home.<br>The windows were closed and the house was quiet.<br>There was a cup of tea on the table.<br>My brothers weren’t there. They were at a party.<br>At midnight there was a noise, and I was scared!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['nv-sel'] = function (b, n) { S.nove.sel = n; };
TOQUES['nv-foi'] = function () { S.nove.foi[S.nove.sel] = 1; };
TOQUES.vt = function (b, n, v) { var e = S.volta, x = NOVE[e.n]; if (!x || e.esc === x.v) return false; e.esc = v; if (v === x.v) e.acesas[x.sala] = 1; };
TOQUES['vt-prox'] = function () { var e = S.volta; e.n++; e.esc = ''; };
TOQUES.xc = function (b, n, v) { var x = XIC[S.xic.n]; if (!x || S.xic.esc === x.ok) return false; S.xic.esc = v; };
TOQUES['xc-prox'] = function () { S.xic = { n: S.xic.n + 1, esc: '' }; };
TOQUES['gp-sel'] = function (b, n) { S.gap.sel = n; };
TOQUES['gp-q'] = function () { S.gap.perguntou[S.gap.sel] = 1; };
TOQUES['gp-m'] = function () { S.gap.mostra[S.gap.sel] = 1; };
TOQUES.ct = function (b, n) { S.curtas.esc = n; };
TOQUES['ct-prox'] = function () { S.curtas = { n: S.curtas.n + 1, esc: -1 }; };
TOQUES.na = function (b, n, v) { var x = NAO[S.nao.n]; if (!x || S.nao.esc === x.ok) return false; S.nao.esc = v; };
TOQUES['na-prox'] = function () { S.nao = { n: S.nao.n + 1, esc: '' }; };
TOQUES.su = function (b, n, v) { S.sustos.sente[S.sustos.n] = v; };
TOQUES['su-prox'] = function () { S.sustos.n++; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de regra.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The sentence, then the question. Watch the words move.',
  frases: [
    { de: ['There', '*was', 'a cup', 'on the table', '.'], para: ['*Was', 'there', 'a cup', 'on the table', '?'], d: 'The question starts with Was. There comes after.' },
    { de: ['The window', '*was', 'open', '.'], para: ['*Was', 'the window', 'open', '?'], d: 'Was jumps to the front.' },
    { de: ['You', '*were', 'scared', '.'], para: ['*Were', 'you', 'scared', '?'], d: 'Were jumps to the front.' }
  ],
  notaBotao: 'What moves?',
  nota: 'In a question, <b>was</b> or <b>were</b> goes first: <b>Was</b> the window open? <b>Were</b> you scared? No do, no did.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'Rex was in the kitchen.', r: '<b>Was</b> Rex in the kitchen?' },
    { de: 'The door was open.', r: '<b>Was</b> the door open?' },
    { de: 'There were two cups on the table.', r: '<b>Were</b> there two cups on the table?' },
    { de: 'You were home at nine.', r: '<b>Were</b> you home at nine?' }
  ],
  uso: { p: 'Your turn. Ask your teacher three questions about last night. Start with Was or Were.', molde: ['Were you …?', 'Was it …?'], ex: 'Were you at home at 9 PM? Was it a quiet night? Were your friends with you?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
