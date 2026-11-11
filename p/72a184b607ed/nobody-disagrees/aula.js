/* ============================================================
   NOBODY DISAGREES · THE CHAIRS · LIVE CLASS  06/10/2026
   Main series B1 · discordar com cuidado: I see what you mean, but… ·
   I'm not sure that… · Isn't it a bit…? · Wouldn't it be better to…?
   · I don't agree (nunca "I'm not agree"). "You're wrong" é inglês
   certo, e esquenta a sala; a aula é sobre a temperatura, não sobre a
   gramática. Outros erros: "Is not it", "Would not it be", "I don't
   agree you", "I'm not sure that it work".
   O MUNDO (da aula velha): uma reunião sobre um prazo; 15 gravações
   mantidas (j1–j3 o mesmo fato de três jeitos, v1–v3 subindo e
   descendo, r1–r6 a reunião da Anna e do Mark), conferidas no
   faster-whisper em 06/10: todas batem. Quatro ideias ruins do chefe.
   A CARA: AS CADEIRAS — a mesa da reunião vista de cima, no escuro;
   seis cadeiras vazias em volta. A frase direta empurra as cadeiras
   para longe da mesa; a frase cuidadosa traz de volta. O termômetro
   claro da aula velha saiu. Fila: FILA-LIVE-386.md · 093.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'reuniao' },
  { k: 'abre', est: 'o', min: 7, img: 'sala', rot: 'I · The Thing You Don’t Say', t: 'Think of someone you disagree with, and you don’t say it.', p: 'Tap who it is. Then answer the three questions out loud. Keep your first words: they come back.' },
  { k: 'gx', est: 'f', min: 4, img: 'reuniao', rot: 'II · In the Meeting', t: 'Anna and Mark in the meeting. Some words are lit.', p: 'Read it together. Tap the lit words: why this form? Then disagree in your own words.' },
  { k: 'termo', est: 'o', min: 7, img: 'reuniao', rot: 'III · The Chairs', t: 'Eight lines from real meetings. Watch the chairs.', p: 'Read it out loud. Tap HOT or COOL. A hot line pushes the chairs away. Then say the careful version.' },
  { k: 'tres', est: 'l', min: 7, img: 'mesa', rot: 'IV · One Fact, Three Ways', t: 'The deadline is too early. Everybody knows it. Three ways to say it.', p: 'Play each line. Say it back. Then tap what it does to the room.' },
  { k: 'frases', est: 'f', min: 6, img: 'mesa', rot: 'V · Cool It Down', t: 'Six hot lines. Choose the careful version that still disagrees.', p: 'It must still say no, and be correct English. Say it out loud with a calm voice.' },
  { k: 'voz', est: 'l', min: 7, img: 'sala', rot: 'VI · Up or Down', t: 'The same words, said two ways. One really asks. One tells.', p: 'Play both. Tap the one that sounds like a real question.' },
  { k: 'gravada', est: 'l', min: 7, extra: 1, img: 'sala', rot: 'VII · The Recorded Meeting', t: 'Anna wants the March date. Mark isn’t sure. Six turns.', p: 'Play each turn. Is the speaker ASKING or TELLING? The line appears after you choose.' },
  { k: 'ideias', est: 'o', min: 7, extra: 1, img: 'reuniao', rot: 'VIII · Four Bad Ideas', t: 'Your teacher is the boss, with four bad ideas.', p: 'Disagree, and keep the chairs at the table. Say your careful opening and finish it. Your teacher pushes back once.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'IX · I’m Not Agree', t: 'Five sentences have a problem. One is right.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'sua', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'X · Your Line, Three Ways', t: 'Your disagreement from scene I comes back.', p: 'Say it three ways, out loud. Then tell your teacher which one you would really use.' },
  { k: 'fim', est: 'w', min: 6, img: 'reuniao', rot: 'XI · The Room, Again', t: 'The meeting is over. The chairs are still at the table.', p: 'Write a careful disagreement for your real week. It goes to your My notes.' }
];

var TR = {
  'j1.mp3': 'The deadline is too early, isn’t it?', 'j2.mp3': 'The deadline isn’t too early, is it?', 'j3.mp3': 'Nobody thinks the deadline works, do they?',
  'v1up.mp3': 'You’re coming to the review, aren’t you?', 'v1down.mp3': 'You’re coming to the review, aren’t you.',
  'v2up.mp3': 'We can’t change it now, can we?', 'v2down.mp3': 'We can’t change it now, can we.',
  'v3up.mp3': 'That was the last one, wasn’t it?', 'v3down.mp3': 'That was the last one, wasn’t it.',
  'r1.mp3': 'So we’re all agreed on the March date, aren’t we.', 'r2.mp3': 'We haven’t heard from the design team yet, have we?', 'r3.mp3': 'They sent it on Friday, didn’t they.',
  'r4.mp3': 'I haven’t seen it, and I’m the only one who signs it off, aren’t I?', 'r5.mp3': 'Let’s push it a week, shall we.', 'r6.mp3': 'Nobody minds losing the week, do they?'
};

var QUEM = ['my manager', 'a colleague', 'a classmate', 'a teacher', 'a client', 'someone in my family'];
var PERG = ['What do you disagree about?', 'Why don’t you say it?', 'If you had to say it tomorrow, what would your first words be?'];

var LINHAS = [
  { t: 'You’re wrong.', k: 'quente', suave: 'I’m not sure that’s right.' },
  { t: 'That’s a bad idea.', k: 'quente', suave: 'I’m not sure that’s the best idea.' },
  { t: 'I see what you mean, but I think we need more time.', k: 'frio' },
  { t: 'No. We can’t do that.', k: 'quente', suave: 'I don’t think we can do that yet.' },
  { t: 'Isn’t the deadline a bit early?', k: 'frio' },
  { t: 'Wouldn’t it be better to wait a week?', k: 'frio' },
  { t: 'This plan doesn’t make sense.', k: 'quente', suave: 'I’m not sure this plan works for us.' },
  { t: 'That’s a good point, but I see it a little differently.', k: 'frio' }
];

var JEITOS = [
  { au: 'j1.mp3', ef: 0, ex: 'It invites the room to agree with you.' },
  { au: 'j2.mp3', ef: 1, ex: 'It sounds like you already decided, and dares them to disagree.' },
  { au: 'j3.mp3', ef: 2, ex: 'There’s no answer that doesn’t cost the other person something.' }
];
var EFEITOS = ['COOLS', 'WARMS', 'HEATS'];

var FRASES = [
  { q: 'You’re wrong about the budget.', ops: ['I’m not sure the budget is right.', 'I’m not agree with the budget.', 'Yes, the budget is perfect.'] },
  { q: 'That will never work.', ops: ['I see what you mean, but I’m worried it won’t work.', 'That will never work, sorry.', 'I see what you mean, but it never works.'] },
  { q: 'It’s too expensive.', ops: ['Isn’t it a bit expensive?', 'Is not it expensive?', 'It’s too expensive, OK?'] },
  { q: 'We should wait. Your plan is bad.', ops: ['Wouldn’t it be better to wait?', 'Would it not better to wait?', 'We should wait, obviously.'] },
  { q: 'I disagree. Completely.', ops: ['I don’t completely agree.', 'I’m not agree completely.', 'I completely disagree with you.'] },
  { q: 'No. Next idea.', ops: ['That’s a good point, but could we look at other options?', 'That’s a good point, but no.', 'Next, please.'] }
];

var VOZ = [{ t: 'You’re coming to the review, aren’t you', a: 'v1up.mp3', b: 'v1down.mp3' }, { t: 'We can’t change it now, can we', a: 'v2down.mp3', b: 'v2up.mp3' }, { t: 'That was the last one, wasn’t it', a: 'v3up.mp3', b: 'v3down.mp3' }];

var TURNOS = [
  { qm: 'ANNA', au: 'r1.mp3', d: 'desce' }, { qm: 'MARK', au: 'r2.mp3', d: 'sobe' }, { qm: 'ANNA', au: 'r3.mp3', d: 'desce' },
  { qm: 'MARK', au: 'r4.mp3', d: 'sobe' }, { qm: 'ANNA', au: 'r5.mp3', d: 'desce' }, { qm: 'ANNA', au: 'r6.mp3', d: 'sobe' }
];

var IDEIAS = [
  { chefe: 'Let’s have the team meeting at 7 AM every day.', ops: [['I see what you mean, but isn’t 7 AM a bit early for everyone?', 'ok'], ['That’s a terrible idea.', 'hot'], ['I’m not agree with 7 AM.', 'agree']], push: 'But early meetings are more productive.' },
  { chefe: 'We don’t need to test the app. Let’s launch it tomorrow.', ops: [['Wouldn’t it be safer to test it first?', 'ok'], ['You’re wrong. We need tests.', 'hot'], ['Would not it be safer to test?', 'wouldnt']], push: 'Testing takes too long.' },
  { chefe: 'Everyone should work from the office five days a week.', ops: [['I’m not sure that works for everyone.', 'ok'], ['No way.', 'hot'], ['I’m not sure that it work for everyone.', 'works']], push: 'It worked before, didn’t it?' },
  { chefe: 'Let’s cut the training budget to zero.', ops: [['That’s a fair point about money, but I see it a bit differently.', 'ok'], ['That’s stupid.', 'hot'], ['I don’t agree you.', 'with']], push: 'We can’t afford it this year.' }
];
var NAO = {
  hot: 'Correct English, and the chairs fly back. Start with a softener: I see what you mean, but… / I’m not sure that…',
  agree: 'agree is a verb: I don’t agree.', wouldnt: 'Wouldn’t it be…?', works: 'it works.', with: 'I don’t agree WITH you.'
};

var ERROS = [
  { f: '<s>I’m not agree</s> with that.', ops: ['I don’t agree', 'I’m not agreeing', 'I not agree'], w: 'Agree is a verb: I don’t agree.' },
  { f: '<s>Is not it</s> a bit early?', ops: ['Isn’t it', 'Is it not it', 'Not is it'], w: 'Isn’t it…?' },
  { f: '<s>Would not it be</s> better to wait?', ops: ['Wouldn’t it be', 'Would it not to be', 'Wouldn’t be it'], w: 'Wouldn’t it be…?' },
  { f: 'I see what you mean, <s>and</s> I think we need more time.', ops: ['but', 'so', 'because'], w: 'The disagreement comes after but.' },
  { f: 'I’m not sure that <s>it work</s>.', ops: ['it works', 'it working', 'it to work'], w: 'it works.' },
  { f: 'That’s a good point, but I see it a little differently.', ops: ['Nothing: it’s right', 'That’s a good point, and', 'I see it little different'], w: 'Five problems and one good sentence.' }
];

var JEITOS_SEUS = [['1 · WITH A SOFTENER', 'I see what you mean, but …'], ['2 · AS A QUESTION', 'Isn’t it …? / Wouldn’t it be better to …?'], ['3 · SHORT AND CALM', 'I’m not sure that …']];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { q: -1 }, tm: { n: 0, esc: '', quente: 0 }, tr3: { esc: {} }, fr: { n: 0, esc: -1 }, vz: { esc: {} }, gv: { n: 0, esc: '' }, id: { n: 0, esc: '' }, er: { n: 0, esc: -1 } };

/* a mesa vista de cima: dist 0 = cadeiras encostadas, 4 = longe; quente pinta a borda */
function mesa(dist, quente, mini) {
  var r = 92 + dist * 16, s = '<svg class="mesa' + (mini ? ' mini' : '') + '" viewBox="0 0 360 360" role="img" aria-label="The table"><circle class="chao" cx="180" cy="180" r="176"/>';
  for (var i = 0; i < 6; i++) {
    var a = (i * 60 - 90) * Math.PI / 180, x = 180 + r * Math.cos(a), y = 180 + r * Math.sin(a), g = i * 60;
    s += '<g class="cadeira' + (quente ? ' q' : '') + '" transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + (g) + ')"><rect x="-17" y="-15" width="34" height="30" rx="7"/><rect class="encosto" x="-17" y="-24" width="34" height="9" rx="4"/></g>';
  }
  return s + '<circle class="tampo" cx="180" cy="180" r="72"/><circle class="reflexo" cx="180" cy="180" r="56"/></svg>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE MEETING</span><h1>Nobody <b>Disagrees</b></h1>'
    + '<p class="sub"><b>You’re wrong.</b> Correct English, and the chairs fly back. <b>I’m not sure that’s right.</b> Same message, and everybody stays at the table.</p>'
    + '<div class="chipsx"><span class="pilula">I see what you mean, but…</span><span class="pilula">Isn’t it a bit…?</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Enter the meeting</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + mesa(0, 0) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  return cab(c) + '<div class="quem">' + QUEM.map(function (q, i) { return '<button type="button" class="pilula grande-p' + (e.q === i ? ' on' : '') + '" data-a="ab" data-n="' + i + '">' + q + '</button>'; }).join('') + '</div>'
    + (e.q >= 0 ? '<div class="mesa-c"><div class="lado-l">' + PERG.map(function (p, i) { return '<div class="pede vd"><small>' + (i + 1) + ' · ' + QUEM[e.q].toUpperCase() + '</small><b>' + p + '</b></div>'; }).join('') + '</div><div class="lado-l">' + fala('ab', ['I disagree with … about …', 'I don’t say it because …', 'My first words would be …'], ['I don’t agree', 'I’m not sure', 'but']) + '<p class="so-prof dica-aluno">Write down their first words, exactly. They come back in scene IX.</p></div></div>' : '<p class="dica-aluno" style="text-align:center">Tap who it is.</p>');
};

R.termo = function (c) {
  var e = S.tm, n = e.n, fim = n >= LINHAS.length, dist = Math.min(4, e.quente);
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + mesa(0, 0) + '</div><div class="lado-l"><div class="pergunta vd"><small>EIGHT LINES</small><h2>Four hot, four cool. The message was the same. The chairs weren’t.</h2></div></div></div>';
  var x = LINHAS[n], ok = e.esc === x.k, quente = ok && x.k === 'quente';
  return cab(c) + trilha(LINHAS, n) + '<div class="mesa-c"><div class="lado-l centro">' + mesa(quente ? Math.min(4, dist + 2) : (ok ? 0 : dist), quente) + '<p class="legenda-m">' + (quente ? 'The chairs moved back.' : ok ? 'Everybody stayed.' : 'Read it as the other person.') + '</p></div>'
    + '<div class="lado-l"><div class="balao vd"><small>LINE ' + (n + 1) + ' OF 8</small><p>“' + x.t + '”</p></div><div class="tres-b centro">' + [['HOT', 'quente'], ['COOL', 'frio']].map(function (o) { return '<button type="button" class="pilula grande-p ' + o[1] + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="tm" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? (x.suave ? '<div class="pede vd frio-b"><small>NOW SAY THE CAREFUL VERSION</small><b>' + x.suave + '</b></div>' : '<p class="aprova">Cool, and it still disagrees.</p>') + '<div><button type="button" class="btn" data-a="tm-prox">Next line</button></div>' : e.esc ? '<p class="recusa">Say it out loud as the other person. How does it feel to hear it?</p>' : '') + '</div></div>';
};

R.tres = function (c) {
  var e = S.tr3;
  return cab(c) + '<div class="tres-j">' + JEITOS.map(function (j, i) {
    var esc = e.esc[i], ok = esc === j.ef, ouviu = (S.ouviu || {})[j.au];
    return '<div class="jeito vd"><div class="toca-linha">' + tocar(j.au) + '<b>VOICE ' + (i + 1) + '</b></div>' + transcricao(j.au, TR[j.au]) + '<div class="tres-b">' + EFEITOS.map(function (f, fi) { return '<button type="button" class="pilula ef' + fi + (esc === fi ? (ok ? ' certo' : ' errado') : '') + '" data-a="tr3" data-n="' + i + '" data-v="' + fi + '"' + (ouviu ? '' : ' disabled') + '>' + f + '</button>'; }).join('') + '</div>'
      + (ok ? '<p class="aprova">' + j.ex + '</p>' + mesa(j.ef * 2, j.ef === 2, 1) : esc !== undefined ? '<p class="recusa">Answer it as the other person. What can they say?</p>' : '') + '</div>';
  }).join('') + '</div>';
};

R.frases = function (c) {
  var e = S.fr, n = e.n, fim = n >= FRASES.length;
  if (fim) return cab(c) + trilha(FRASES, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Six hot lines, six cool ones, and every one still said no.</h2></div></div>';
  var x = FRASES[n], ok = e.esc === 0;
  return cab(c) + trilha(FRASES, n) + '<div class="foco"><div class="balao vd quente-b"><small>HOT</small><p>“' + x.q + '”</p></div><div class="versoes duas-v">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 5).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="fr" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div style="text-align:center"><button type="button" class="btn" data-a="fr-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Does it still disagree? Is it correct English? Does it keep the other person at the table?</p>' : '') + '</div>';
};

R.voz = function (c) {
  var e = S.vz;
  return cab(c) + '<div class="tres-j">' + VOZ.map(function (p, i) {
    var esc = e.esc[i], certo = /up/.test(p.a) ? 0 : 1, ouviu = (S.ouviu || {})[p.a] && (S.ouviu || {})[p.b];
    return '<div class="jeito vd"><p class="frase-v">“' + p.t + '…”</p><div class="dois-v">' + [p.a, p.b].map(function (au, k) { return '<div class="toca-linha">' + tocar(au) + '<b>' + 'AB'[k] + '</b></div>'; }).join('') + '</div>'
      + '<div class="tres-b">' + ['A ASKS', 'B ASKS'].map(function (f, k) { return '<button type="button" class="pilula' + (esc === k ? (k === certo ? ' certo' : ' errado') : '') + '" data-a="vz" data-n="' + i + '" data-v="' + k + '"' + (ouviu ? '' : ' disabled') + '>' + f + '</button>'; }).join('') + '</div>'
      + (!ouviu ? '<p class="dica-aluno">Play both first.</p>' : esc === undefined ? '' : esc === certo ? '<p class="aprova">Up asks. Down tells.</p>' : '<p class="recusa">Play them again. Which one goes up at the end?</p>') + '</div>';
  }).join('') + '</div>';
};

R.gravada = function (c) {
  var e = S.gv, n = e.n, fim = n >= TURNOS.length;
  var feitos = TURNOS.slice(0, n).map(function (t) { return '<div class="turno ' + t.qm.toLowerCase() + '"><b>' + t.qm + '</b><span>' + TR[t.au] + '</span><i>' + (t.d === 'sobe' ? 'ASKING' : 'TELLING') + '</i></div>'; }).join('');
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="turnos">' + feitos + '</div></div><div class="lado-l"><div class="pergunta vd"><small>SIX TURNS</small><h2>Who disagreed more carefully, Anna or Mark? Why?</h2></div>' + fala('gv', ['Mark, because he …', 'Anna closed doors: she …'], ['asked', 'told', 'careful']) + '</div></div>';
  var x = TURNOS[n], ok = e.esc === x.d, ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(TURNOS, n) + '<div class="mesa-c"><div class="lado-l"><div class="turnos">' + feitos + '</div><div class="ouve-c vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.qm + ' · TURN ' + (n + 1) + '</b></div></div></div>'
    + '<div class="lado-l"><div class="tres-b centro">' + [['ASKING', 'sobe'], ['TELLING', 'desce']].map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (ok ? ' certo' : ' errado') : '') + '" data-a="gv" data-v="' + o[1] + '"' + (ouviu ? '' : ' disabled') + '>' + o[0] + '</button>'; }).join('') + '</div>'
    + (!ouviu ? '<p class="dica-aluno" style="text-align:center">Play the turn first.</p>' : ok ? '<div class="balao vd ok-b"><small>' + x.qm + '</small><p>' + TR[x.au] + '</p></div><div style="text-align:center"><button type="button" class="btn" data-a="gv-prox">Next turn</button></div>' : e.esc ? '<p class="recusa" style="text-align:center">Play it again. Listen only to the last two words.</p>' : '') + '</div></div>';
};

R.ideias = function (c) {
  var e = S.id, n = e.n, fim = n >= IDEIAS.length;
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + mesa(0, 0) + '</div><div class="lado-l"><div class="pergunta vd"><small>FOUR BAD IDEAS</small><h2>Four careful disagreements, and every chair is still at the table.</h2></div></div></div>';
  var x = IDEIAS[n], ok = e.esc === 'ok', quente = e.esc === 'hot';
  return cab(c) + trilha(IDEIAS, n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd chefe"><small>THE BOSS</small><b>“' + x.chefe + '”</b></div><div class="centro">' + mesa(quente ? 4 : 0, quente, 1) + '</div></div>'
    + '<div class="lado-l">' + (ok ? '<div class="balao vd ok-b"><p>' + x.ops[0][0] + '</p></div><p class="so-prof dica-aluno">Push back: “' + x.push + '” Let them answer again, still careful.</p><div><button type="button" class="btn" data-a="id-prox">Next bad idea</button></div>'
      : '<h5 class="so-prof rot-ouve">TAP THE OPENING YOU HEARD</h5><div class="versoes">' + ordem(x.ops, n + 8).map(function (o) { return '<button type="button" class="versao' + (e.esc === o[1] ? ' errado' : '') + '" data-a="id" data-v="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>' + (e.esc ? '<p class="recusa">' + NAO[e.esc] + '</p>' : '')) + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX OF SIX</small><h2>Careful, and correct.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div><div class="tres-b centro">'
    + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="pilula grande-p' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="er" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Read it again. What’s the problem?</p>' : '') + '</div>';
};

R.sua = function (c) {
  return cab(c) + '<div class="mesa-c"><div class="lado-l centro">' + mesa(0, 0) + '</div><div class="lado-l">' + JEITOS_SEUS.map(function (j, i) { return '<div class="pede vd"><small>' + j[0] + '</small><b>' + j[1] + '</b></div>'; }).join('')
    + fala('sua', ['I’d use number … because …'], ['softener', 'question', 'calm']) + '</div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I see what you mean, but …\nIsn’t it a bit …?\nI’m not sure that …', 'Your careful line',
    ['I see what you mean, but ', 'I’m not sure that ', 'Isn’t it a bit ', 'Wouldn’t it be better to ', 'I don’t agree'], ['DISAGREE CAREFULLY WITH THIS:', 'English grammar is easy. Then write the line you will use this week.'])
    + '<div class="lado-fim">' + mesa(0, 0, 1) + '<div class="grande vd"><span><u>You’re wrong</u> = correct, and hot</span><span><u>I see what you mean, but</u> · <u>I’m not sure that</u></span><span><u>Isn’t it…? Wouldn’t it be…?</u> · <u>I don’t agree</u></span></div>'
    + mostra('fim', 'I see what you mean, but English grammar has a lot of exceptions.<br>Isn’t it a bit hard to say it’s easy?<br>This week: I’m not sure that the new schedule works for everyone.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.ab = function (b, n) { S.ab.q = n; };
TOQUES.tm = function (b, n, v) { var e = S.tm; if (e.esc === LINHAS[e.n].k) return; e.esc = v; };
TOQUES['tm-prox'] = function () { var e = S.tm, x = LINHAS[e.n]; S.tm = { n: e.n + 1, esc: '', quente: x.k === 'quente' ? e.quente + 1 : Math.max(0, e.quente - 1) }; };
TOQUES.tr3 = function (b, n, v) { S.tr3.esc[n] = +v; };
TOQUES.fr = function (b, n) { S.fr.esc = n; };
TOQUES['fr-prox'] = function () { S.fr = { n: S.fr.n + 1, esc: -1 }; };
TOQUES.vz = function (b, n, v) { S.vz.esc[n] = +v; };
TOQUES.gv = function (b, n, v) { S.gv.esc = v; };
TOQUES['gv-prox'] = function () { S.gv = { n: S.gv.n + 1, esc: '' }; };
TOQUES.id = function (b, n, v) { S.id.esc = v; };
TOQUES['id-prox'] = function () { S.id = { n: S.id.n + 1, esc: '' }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G9 · uma cena curta nova (k: gx) antes de termo.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'dialogoAceso', titulo: 'The meeting, at the table. Tap the lit words.',
  falas: [
    { q: 'Boss', f: 'We’ll finish the whole report by Friday.' },
    { q: 'Anna', f: '[[I see what you mean, but]] Friday is very early.' },
    { q: 'Boss', f: 'Then we’ll skip the tests.' },
    { q: 'Mark', f: '[[I’m not sure that]] it’s safe.' },
    { q: 'Anna', f: '[[Isn’t it]] a bit risky?' },
    { q: 'Mark', f: '[[Wouldn’t it be better to]] wait until Monday?' },
    { q: 'Boss', f: 'So you don’t like my idea?' },
    { q: 'Anna', f: 'It’s not that. [[I don’t agree]] with the date.' }
  ],
  porques: [
    'It shows you listened first. Then but, and the real no.',
    'A soft no: you doubt it, you don’t say “wrong”.',
    'A negative question: soft and still clear. Isn’t it a bit …?',
    'A suggestion as a question: Wouldn’t it be better to + verb?',
    'I don’t agree. Never “I’m not agree”: agree is a verb, no be.'
  ],
  nota: 'The same no, in cooler words: <b>I see what you mean, but …</b> · <b>I’m not sure that …</b> · <b>Isn’t it a bit …?</b> · <b>Wouldn’t it be better to …?</b> And always <b>I don’t agree</b>, never “I’m not agree”.',
  uso: { p: 'Your turn. Your boss says: “Let’s have the meeting at 7 AM.” Disagree in two careful ways.', molde: ['I see what you mean, but …', 'Wouldn’t it be better to …?'], ex: 'I see what you mean, but 7 AM is very early. Wouldn’t it be better to meet at nine?' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_aceso', GX_EXPLICA); };
