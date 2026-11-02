/* ============================================================
   THE CAPSULE · ONE LINE, TWENTY YEARS · LIVE CLASS  06/10/2026
   Main series A2 · remember / forget / stop + -ING (a seta aponta para
   TRÁS: a ação aconteceu antes) × + TO (a seta aponta para FRENTE: a ação
   vem depois). Erros universais: "I stopped to smoke" (querendo dizer que
   parou), "Remember locking the door!" como lembrete, "I forgot buying
   milk" (querendo dizer que não comprou).
   O MUNDO (da aula velha): Clara e Nina enterraram uma cápsula em 2006;
   aberta em 2026, tem um bilhete da Nina: "I remembered to post it." A
   Clara achou que a amiga tinha esquecido e parou de falar com ela por
   vinte anos. Sem áudio.
   A CARA: a ESCAVAÇÃO — camadas de terra (anos) em faixas marrons, cada
   uma com um objeto; a SETA de latão que gira para trás ou para frente; o
   bilhete dobrado que abre dobra por dobra; o recibo dos correios.
   As duas fotos claras (bilhete, buraco) foram escurecidas com vinheta.
   Fila: FILA-LIVE-386.md · 070.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'caixa' },
  { k: 'sua', est: 'o', min: 7, img: 'terra', rot: 'I · Your 2016 Box', t: 'Before the dig: ten years ago, in your life.', p: 'Pick a card. Every answer goes into your own box. Nobody is corrected here.' },
  { k: 'chao', est: 'o', min: 7, img: 'buraco', rot: 'II · The Ground', t: 'Park Hill School, 2026. The box is under four layers of earth.', p: 'Dig one layer at a time. Read each object out loud and say what happened.' },
  { k: 'seta', est: 'f', min: 6, img: 'terra', rot: 'III · Back or Forward?', t: 'The rule of the arrow. Which happened first?', p: 'Read the sentence. Say which happened first. Then tap BACK or FORWARD.' },
  { k: 'ponteiro', est: 'o', min: 7, img: 'terra', rot: 'IV · The Arrow', t: 'Eight moments. The arrow already points the right way.', p: 'Say the sentence. Then tap the version you said.' },
  { k: 'filmes', est: 'f', min: 6, img: 'chao', rot: 'V · Two Films', t: 'Two short films, one sentence. Which film is it?', p: 'Describe both films. Then pick the one the sentence tells.' },
  { k: 'bilhete', est: 'o', min: 7, img: 'bilhete', rot: 'VI · The Folded Note', t: 'At the bottom of the box: a folded note from Nina.', p: 'Open it one fold at a time. Don’t decide until the last line.' },
  { k: 'recibo', est: 'f', min: 6, extra: 1, img: 'bilhete', rot: 'VII · The Receipt', t: 'Under the note, a post office receipt. It is the proof.', p: 'Read the receipt. Answer three questions.' },
  { k: 'caixa', est: 'o', min: 7, extra: 1, img: 'caixa', rot: 'VIII · Your Own Box', t: 'Now you bury a box for 2036. Pick a part of your life.', p: 'Say three things: a memory, a reminder, and a habit you stopped.' },
  { k: 'carta', est: 'o', min: 7, extra: 1, img: 'terra', rot: 'IX · A Letter to 2036', t: 'Dictate a short letter to yourself in 2036.', p: 'Your teacher asks. You answer. Then you ask back.' },
  { k: 'fim', est: 'w', min: 6, img: 'bilhete', rot: 'X · The Line You Write', t: 'The box is closed again.', p: 'Write the note for your own box: a memory, a reminder, a habit you stopped. It goes to your My notes.' }
];

var ABRE = [
  { k: '2016', q: 'What do you remember doing in 2016?', fup: 'Who was with you?', st: ['I remember …-ing'], ex: 'I remember living with my grandmother.' },
  { k: 'THE BOX', q: 'What three things would you put in a box in 2016?', fup: 'Why those?', st: ['I would put …'], ex: 'My first phone, a photo and a football shirt.' },
  { k: 'THIS WEEK', q: 'What did you forget to do this week?', fup: 'Did you do it later?', st: ['I forgot to …'], ex: 'I forgot to pay the electricity bill.' },
  { k: 'THE HABIT', q: 'What did you stop doing in the last ten years?', fup: 'Was it easy to stop?', st: ['I stopped …-ing'], ex: 'I stopped drinking soda.' },
  { k: 'THE FRIEND', q: 'Is there a friend you stopped talking to?', fup: 'What happened?', st: ['We stopped …-ing'], ex: 'Yes. We stopped talking after she moved away.' }
];
var FORMAS = [{ k: 'ing', t: 'REMEMBER / STOP + -ING' }, { k: 'to', t: 'FORGET / REMEMBER + TO' }, { k: 'stopto', t: 'STOPPED TO (= QUIT)', erro: 1 }, { k: 'forgoting', t: 'FORGOT BUYING (= DIDN’T BUY)', erro: 1 }];

var CAMADAS = [
  { ano: '2026', obj: 'THE KEY', txt: 'A tag on the key: “Clara remembers locking the box. Nina has the other key.”', q: 'Who locked the box? When?', ex: 'Clara did, in 2006. She remembers locking it.' },
  { ano: '2016', obj: 'THE TAPE', txt: 'A cassette. Two voices: “We stopped recording three times because Clara kept laughing.”', q: 'Why did they stop recording?', ex: 'Because Clara kept laughing.' },
  { ano: '2011', obj: 'THE TICKET', txt: 'A concert ticket. On the back: “Don’t forget to open this in 2026!”', q: 'What did they want to remember?', ex: 'To open the box in 2026.' },
  { ano: '2006', obj: 'THE PHOTO', txt: 'A school photo. On the back: “Nina remembered to bring the camera.”', q: 'Why is there a photo?', ex: 'Because Nina remembered to bring the camera.' }
];

var SETA = [
  { t: 'Clara remembers <b>locking</b> the box.', ok: 'tras', ordem: ['she locked it', 'she remembers'] },
  { t: 'Nina remembered <b>to bring</b> the camera.', ok: 'frente', ordem: ['she remembered', 'she brought it'] },
  { t: 'They stopped <b>recording</b>.', ok: 'tras', ordem: ['they were recording', 'they stopped'] },
  { t: 'They stopped <b>to eat</b>.', ok: 'frente', ordem: ['they stopped', 'they ate'] },
  { t: 'Don’t forget <b>to open</b> it.', ok: 'frente', ordem: ['don’t forget', 'open it'] },
  { t: 'I’ll never forget <b>meeting</b> you.', ok: 'tras', ordem: ['we met', 'I won’t forget'] }
];

var PONT = [
  { v: 'remember', acao: 'lock the door', seta: 'tras', ops: [['I remember locking the door.', 'ok'], ['I remember to lock the door.', 'frente'], ['I remember lock the door.', 'forma']] },
  { v: 'remember', acao: 'call Mom tonight', seta: 'frente', ops: [['Remember to call Mom tonight.', 'ok'], ['Remember calling Mom tonight.', 'tras'], ['Remember call Mom tonight.', 'forma']] },
  { v: 'stop', acao: 'smoke (she quit)', seta: 'tras', ops: [['She stopped smoking.', 'ok'], ['She stopped to smoke.', 'frente'], ['She stopped smoke.', 'forma']] },
  { v: 'stop', acao: 'buy water (on the road)', seta: 'frente', ops: [['We stopped to buy water.', 'ok'], ['We stopped buying water.', 'tras'], ['We stopped buy water.', 'forma']] },
  { v: 'forget', acao: 'buy milk (no milk at home)', seta: 'frente', ops: [['I forgot to buy milk.', 'ok'], ['I forgot buying milk.', 'tras'], ['I forgot buy milk.', 'forma']] },
  { v: 'remember', acao: 'meet Nina (in 2006)', seta: 'tras', ops: [['Clara remembers meeting Nina in 2006.', 'ok'], ['Clara remembers to meet Nina in 2006.', 'frente'], ['Clara remember meeting Nina in 2006.', 's']] },
  { v: 'forget', acao: 'lock the car', seta: 'frente', ops: [['Don’t forget to lock the car.', 'ok'], ['Don’t forget locking the car.', 'tras'], ['Don’t forget lock the car.', 'forma']] },
  { v: 'stop', acao: 'talk (they had a fight)', seta: 'tras', ops: [['They stopped talking after the fight.', 'ok'], ['They stopped to talk after the fight.', 'frente'], ['They stop talking after the fight yesterday.', 'tempo']] }
];
var NOTA = { frente: 'to points forward: the action comes after. Here it happened first: -ing.', tras: '-ing points back: the action happened first. Here it comes after: to.', forma: 'After the verb: -ing or to, never the plain verb.', s: 'Clara: remembers, with -s.', tempo: 'Yesterday is the past: stopped.' };

var FILMES = [
  { f: 'He stopped to look at the phone.', a: ['walking', 'stops', 'looks at the phone'], b: ['looking at the phone', 'puts it away', 'no more phone'], ok: 'a', por: 'stop to: he stopped walking in order to look at it.' },
  { f: 'She remembers turning off the oven.', a: ['turns off the oven', 'goes out', '“Yes, I did it.”'], b: ['goes out', '“The oven!”', 'goes back'], ok: 'a', por: 'remember + -ing: she did it, and now she has the memory.' },
  { f: 'I forgot to send the email.', a: ['writes the email', 'clicks send', 'done'], b: ['writes the email', 'closes the computer', 'the email is still there'], ok: 'b', por: 'forget to: the action never happened.' }
];

var DOBRAS = ['Clara, if you are reading this, we are old now.', 'I am writing this on the day we buried the box.', 'You asked me to post your music school form on Friday.', 'I remembered to post it.'];
var BILHETE_Q = [['I didn’t forget, so I posted it.', 'ok'], ['I forgot, so I didn’t post it.', 'a'], ['I wanted to post it, but I didn’t.', 'b']];

var RECIBO_Q = [
  { q: 'Did Nina post the form?', op: ['Yes. She remembered to post it.', 'No. She forgot to post it.'], nao: 'Look at the receipt: 16 June, 1 letter, sent by N. Hale.' },
  { q: 'The school said: “We have no form.” Who made the mistake?', op: ['The school. They forgot to open it.', 'Nina. She forgot to send it.'], nao: 'The receipt shows Nina sent it.' },
  { q: 'What does Clara remember now?', op: ['She remembers blaming Nina for twenty years.', 'She remembers to blame Nina for twenty years.'], nao: 'A memory of something that happened: remember + -ing.' }
];

var TEMAS = [['YOUR FAMILY', 'Tell me about your family, then and now.'], ['WORK OR STUDY', 'Tell me about your work or your studies.'], ['YOUR HEALTH', 'Tell me about your health and your habits.'], ['YOUR FRIENDS', 'Tell me about your friends.']];
var PECAS = [['memoria', 'I REMEMBER …-ING', 'a memory'], ['lembrete', 'DON’T FORGET TO …', 'a reminder'], ['parou', 'I STOPPED …-ING', 'a habit you stopped'], ['x1', 'REMEMBER TO (FOR A MEMORY)', ''], ['x2', 'STOPPED TO (FOR A HABIT)', '']];

var CARTA = [
  { q: 'What do you want to remember doing this year?', fup: 'Why is it important?', ex: 'I want to remember taking my son to his first football game.' },
  { q: 'What should you never forget to do?', fup: 'Do you forget it now?', ex: 'I should never forget to call my grandmother on Sundays.' },
  { q: 'What do you want to stop doing before 2036?', fup: 'How will you stop?', ex: 'I want to stop checking my phone in bed.' },
  { q: 'Your turn. Ask me: What do you remember doing when you were a child?', fup: 'Now ask me what I forgot to do this week.', ex: 'What do you remember doing when you were a child?' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, cav: 0, st: { n: 0, esc: '' }, pt: { n: 0, esc: '' }, fl: {}, dob: 0, bq: '', rc: {}, cx: { tema: 0, pecas: {} }, ct: { n: 0 } };

function setaSVG(dir) {
  var r = dir === 'tras' ? 180 : dir === 'frente' ? 0 : 90;
  return '<svg class="seta-d" viewBox="0 0 200 120" role="img" aria-label="The arrow"><line x1="20" y1="100" x2="180" y2="100" class="linha-t"/><text x="20" y="116">BEFORE</text><text x="180" y="116" text-anchor="end">AFTER</text>'
    + '<g transform="rotate(' + r + ' 100 62)" class="ponteiro-s"><line x1="100" y1="62" x2="160" y2="62"/><path d="M160 50 L184 62 L160 74 Z"/></g><circle cx="100" cy="62" r="10" class="eixo"/></svg>';
}
function estratos(aberto) {
  return '<div class="estratos">' + CAMADAS.map(function (c, i) {
    var vis = i < aberto;
    return '<div class="estrato e' + i + (vis ? ' aberto' : '') + '"><span class="ano">' + c.ano + '</span>' + (vis ? '<b>' + c.obj + '</b>' : '<i>· · ·</i>') + '</div>';
  }).join('') + '<div class="estrato fundo-e' + (aberto >= 4 ? ' aberto' : '') + '"><span class="ano">BOTTOM</span>' + (aberto >= 4 ? '<b>A FOLDED NOTE</b>' : '<i>· · ·</i>') + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A2 · BURIED 14 JUNE 2006 · OPENED 2026</span><h1>The <b>Capsule</b></h1>'
    + '<p class="sub">Two friends buried a box. Twenty years later, <b>one line</b> inside it explains twenty years of silence.</p>'
    + '<div class="chipsx"><span class="pilula">remember · forget · stop</span><span class="pilula">-ing points back</span><span class="pilula">to points forward</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start digging</button>' + faixaLive() + '</div>'
    + '<div class="capa-d">' + estratos(4) + '</div></div>';
};

R.sua = function (c) {
  return cartasPessoais(c, ABRE, S.abre, 'abre') + '<div class="partes so-prof"><h5>WHAT YOU HEAR · DON’T CORRECT</h5>' + FORMAS.map(function (f) { return '<button type="button" class="chip frase' + (f.erro ? ' erro-ouvido' : '') + (S.abre.formas[f.k] ? ' on' : '') + '" data-a="ab-f" data-v="' + f.k + '">' + f.t + '</button>'; }).join('') + '</div>';
};

R.chao = function (c) {
  var n = S.cav, x = n > 0 ? CAMADAS[n - 1] : null;
  return cab(c) + '<div class="mesa-c">' + estratos(n) + '<div class="lado-l">'
    + (x ? '<div class="achado vd"><small>' + x.ano + ' · ' + x.obj + '</small><p>' + x.txt + '</p></div><div class="pergunta vd ja"><small>SAY WHAT HAPPENED</small><h2>' + x.q + '</h2></div>' + mostra('cv' + n, x.ex) : '<div class="pergunta vd"><small>THE GROUND</small><h2>Four layers of earth. Dig the first one.</h2></div>')
    + (n < 4 ? '<div><button type="button" class="btn cheio" data-a="cv">Dig · layer ' + (n + 1) + '</button></div>' : '<p class="aprova">Four objects, four sentences. And at the bottom, a folded note.</p>') + '</div></div>';
};

R.seta = function (c) {
  var e = S.st, n = e.n, fim = n >= SETA.length;
  if (fim) return cab(c) + trilha(SETA, n) + '<div class="mesa-c">' + setaSVG('tras') + '<div class="lado-l"><div class="pergunta vd"><small>SIX ARROWS</small><h2>-ing looks back. to looks forward.</h2></div></div></div>';
  var x = SETA[n], ok = e.esc === x.ok;
  return cab(c) + trilha(SETA, n) + '<div class="mesa-c"><div class="vd quadro-s">' + setaSVG(ok ? x.ok : '') + (ok ? '<div class="ordem"><span>1 · ' + x.ordem[0] + '</span><span>2 · ' + x.ordem[1] + '</span></div>' : '') + '</div>'
    + '<div class="lado-l"><div class="sit vd"><small>THE SENTENCE</small><b>' + x.t + '</b></div>'
    + (ok ? '<div><button type="button" class="btn" data-a="st-prox">Next</button></div>' : '<div class="tres-b"><button type="button" class="pilula grande-p' + (e.esc === 'tras' ? ' errado' : '') + '" data-a="st" data-v="tras">← BACK · -ING</button><button type="button" class="pilula grande-p' + (e.esc === 'frente' ? ' errado' : '') + '" data-a="st" data-v="frente">FORWARD · TO →</button></div>' + (e.esc ? '<p class="recusa">' + (e.esc === 'tras' ? 'Look at the form: to points forward, the action comes after.' : 'Look at the form: -ing points back, the action happened first.') + '</p>' : '')) + '</div></div>';
};

R.ponteiro = function (c) {
  var e = S.pt, n = e.n, fim = n >= PONT.length;
  if (fim) return cab(c) + trilha(PONT, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT ARROWS</small><h2>The form after the verb is the direction in time.</h2></div></div>';
  var x = PONT[n], ok = e.esc === 'ok';
  return cab(c) + trilha(PONT, n) + '<div class="mesa-c"><div class="vd quadro-s">' + setaSVG(x.seta) + '<div class="ordem"><span>' + x.v.toUpperCase() + '</span><span>' + x.acao + '</span></div></div><div class="lado-l">'
    + (ok ? '<div class="balao vd"><small>THE SENTENCE</small><p>' + x.ops[0][0] + '</p></div><div><button type="button" class="btn" data-a="pt-prox">Next</button></div>'
      : '<p class="ini">The arrow points ' + (x.seta === 'tras' ? 'back: -ing.' : 'forward: to.') + ' Say the sentence.</p><h5 class="so-prof rot-ouve">TAP WHAT YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 1).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="pt" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NOTA[e.esc] + '</p>' : '')) + '</div></div>';
};

R.filmes = function (c) {
  return cab(c) + '<div class="filmes">' + FILMES.map(function (x, i) {
    var esc = S.fl[i], ok = esc === x.ok;
    var tira = function (k, quad) { return '<button type="button" class="tira' + (esc === k ? (ok ? ' certa' : ' errada') : '') + '" data-a="fl" data-n="' + i + '" data-v="' + k + '"' + (ok ? ' disabled' : '') + '><small>FILM ' + k.toUpperCase() + '</small><span class="quadros">' + quad.map(function (q) { return '<i>' + q + '</i>'; }).join('') + '</span></button>'; };
    return '<div class="par-f vd' + (ok ? ' feito' : '') + '"><p class="frase-f">“' + x.f + '”</p><div class="duas-t">' + tira('a', x.a) + tira('b', x.b) + '</div>' + (ok ? '<p class="aprova">' + x.por + '</p>' : esc ? '<p class="recusa">Which happened first? Look at the form.</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.bilhete = function (c) {
  var d = S.dob, todas = d >= DOBRAS.length, ok = S.bq === 'ok';
  var papel = '<div class="papel">' + DOBRAS.map(function (t, i) { return '<div class="dobra' + (i < d ? ' aberta-d' : '') + (i === 3 && i < d ? ' virada' : '') + '">' + (i < d ? t : '— fold ' + (i + 1) + ' —') + '</div>'; }).join('') + '<span class="assin">' + (todas ? '— Nina' : '') + '</span></div>';
  var lado = !todas ? '<div class="pergunta vd"><small>DON’T DECIDE YET</small><h2>Read each line out loud. What do you think happened?</h2></div><div><button type="button" class="btn cheio" data-a="db">Open fold ' + (d + 1) + '</button></div>'
    : (ok ? '<div class="balao vd"><small>THE LAST LINE</small><p>She remembered, and then she posted it.</p></div><p class="aprova">In 2006 the school said: We have no form. Clara was sure Nina forgot to post it, so she stopped answering her. The note says the opposite.</p>' + follow('NOW', 'Why did Clara stop answering Nina? What should Clara say to her now?', ['Clara stopped …-ing because …', 'I remember …', 'I’m sorry I …'], [], 'bq', '')
      : '<div class="pergunta vd ja"><small>THE LAST LINE</small><h2>What does “I remembered to post it” say?</h2></div><div class="versoes">' + ordem(BILHETE_Q, 4).map(function (o) { return '<button type="button" class="versao' + (S.bq === o[1] ? ' errado' : '') + '" data-a="bq" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (S.bq ? '<p class="recusa">Look at the form: remembered to points forward. First she remembered, then she posted it.</p>' : ''));
  return cab(c) + '<div class="mesa-c">' + papel + '<div class="lado-l">' + lado + '</div></div>';
};

R.recibo = function (c) {
  var n = 0; RECIBO_Q.forEach(function (_, i) { if (S.rc[i] === 0) n++; });
  return cab(c) + '<div class="mesa-c mesa-r"><div class="recibo"><b>PARK HILL POST OFFICE</b><span>16 JUNE 2006 · 9:42 AM</span><span class="tracejado"></span><span>1 LETTER</span><span>TO: CITY MUSIC SCHOOL</span><span class="tracejado"></span><span>SENT BY: N. HALE</span><em>THANK YOU</em></div><div class="lado-l">' + RECIBO_Q.map(function (x, i) {
    var esc = S.rc[i], ok = esc === 0;
    return '<div class="q-linha vd' + (ok ? ' feito' : '') + '"><p>' + x.q + '</p><div class="versoes">' + ordem(x.op.map(function (o, k) { return [o, k]; }), i + 5).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="rc" data-n="' + i + '" data-v="' + o[1] + '"' + (ok ? ' disabled' : '') + '>' + o[0] + '</button>'; }).join('') + '</div>' + (esc > 0 ? '<p class="recusa">' + x.nao + '</p>' : '') + '</div>';
  }).join('') + (n === 3 ? '<p class="aprova">Nina remembered to post it. The school forgot to open it.</p>' : '') + '</div></div>';
};

R.caixa = function (c) {
  var e = S.cx, t = TEMAS[e.tema], p = e.pecas[e.tema] || {};
  return cab(c) + '<div class="temas">' + TEMAS.map(function (x, i) { return '<button type="button" class="chip' + (e.tema === i ? ' on' : '') + '" data-a="cx-t" data-n="' + i + '">' + x[0] + '</button>'; }).join('') + '</div>'
    + '<div class="mesa-c"><div class="caixa-v"><div class="tampa">BOX FOR 2036</div>' + PECAS.slice(0, 3).map(function (k) { return '<div class="slot' + (p[k[0]] ? ' cheio' : '') + '"><small>' + k[2] + '</small><b>' + k[1] + '</b></div>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + t[0] + '</small><h2>' + t[1] + '</h2></div><p class="dica-aluno">A memory, a reminder, a habit you stopped.</p><h5 class="so-prof rot-ouve">WHAT YOU HEARD</h5><div class="tres-b">'
    + PECAS.map(function (k, i) { return '<button type="button" class="chip so-prof' + (i > 2 ? ' erro-ouvido' : '') + (p[k[0]] ? ' on' : '') + '" data-a="cx-p" data-v="' + k[0] + '">' + k[1] + '</button>'; }).join('') + '</div></div></div>';
};

R.carta = function (c) {
  var e = S.ct, n = Math.min(e.n, CARTA.length - 1), x = CARTA[n];
  return cab(c) + trilha(CARTA, e.n) + '<div class="mesa-c"><div class="carta-2036"><small>DEAR ME, IN 2036</small>' + CARTA.slice(0, n).map(function (q) { return '<p>· ' + q.q.replace('Your turn. ', '') + '</p>'; }).join('') + '<p class="cursor">…</p></div><div class="lado-l">' + follow('QUESTION ' + (n + 1) + ' OF 4', x.q, ['I want to remember …-ing', 'I should never forget to …', 'I want to stop …-ing'], [], 'ct' + n, mostra('cte' + n, x.ex, 1))
    + '<p class="dica-aluno">' + x.fup + '</p>' + (n < CARTA.length - 1 ? '<div><button type="button" class="btn" data-a="ct-prox">Next question</button></div>' : '<p class="aprova">A letter to 2036, and every arrow pointing the right way.</p>') + '</div></div>';
};

R.fim = function (c) {
  var f = S.abre.formas, lembra = FORMAS.filter(function (x) { return f[x.k]; }).map(function (x) { return x.t; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I remember …-ing\nDon’t forget to …\nI stopped …-ing', 'Your note',
    ['I remember ', 'Don’t forget to ', 'I stopped ', 'I forgot to ', 'We stopped to '], ['THE NOTE FOR YOUR OWN BOX', lembra.length ? 'In scene I your teacher heard: ' + lembra.join(', ') + '. Now the note, with every arrow right.' : 'A memory, a reminder, a habit you stopped: every arrow right.'])
    + '<div class="lado-fim">' + setaSVG('frente') + '<div class="grande vd"><span><u>-ing</u> points back: I remember locking it</span><span><u>to</u> points forward: remember to lock it</span><span>stopped <u>smoking</u> (quit) · stopped <u>to</u> eat</span></div>'
    + mostra('fim', 'I remember burying a box with my cousin in 2010.<br>Don’t forget to call Grandma on Sundays.<br>I stopped drinking soda in 2020.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-f'] = function (b, n, v) { S.abre.formas[v] = !S.abre.formas[v]; };
TOQUES.cv = function () { if (S.cav < 4) S.cav++; };
TOQUES.st = function (b, n, v) { S.st.esc = v; };
TOQUES['st-prox'] = function () { S.st = { n: S.st.n + 1, esc: '' }; };
TOQUES.pt = function (b, n, v) { S.pt.esc = v; };
TOQUES['pt-prox'] = function () { S.pt = { n: S.pt.n + 1, esc: '' }; };
TOQUES.fl = function (b, n, v) { S.fl[n] = v; };
TOQUES.db = function () { S.dob++; };
TOQUES.bq = function (b, n, v) { S.bq = v; };
TOQUES.rc = function (b, n, v) { S.rc[n] = +v; };
TOQUES['cx-t'] = function (b, n) { S.cx.tema = n; };
TOQUES['cx-p'] = function (b, n, v) { var p = S.cx.pecas[S.cx.tema] = S.cx.pecas[S.cx.tema] || {}; p[v] = !p[v]; };
TOQUES['ct-prox'] = function () { S.ct.n++; };
