/* ============================================================
   LEFT ON THE DESK · THE COMPRESSOR · LIVE CLASS  06/10/2026
   Main series B2 · relativas reduzidas: corta who / which / that + BE e
   mais nada. -ING: o substantivo faz. -ED / particípio: o substantivo
   recebe, e quem fez some, a não ser que o BY segure. Sem BE, sem corte.
   Erros: ler "the proposal discussed" como passado; cortar só uma das
   duas palavras (which written, who working); cortar sem BE (the woman
   called you is…); -ING no lugar de particípio (the file sending).
   O MUNDO (da aula velha): a colega saiu ontem, a reunião é às 9, o
   bilhete de passagem de bastão tem uma página. O memo de voz mantido
   (memo.mp3), conferido no faster-whisper em 06/10: bate.
   A CARA (nova; a velha era a tesoura no papel claro): o COMPRESSOR —
   a frase é um trilho de blocos de palavras com um contador; tocar nos
   blocos certos (o par relativo + BE) apaga os dois, os blocos deslizam
   e o contador desce; cortar o bloco errado racha o trilho. E a CENA DO
   ESCRITÓRIO com quatro placas numeradas de perícia sobre a foto.
   Fila: FILA-LIVE-386.md · 127.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'luminaria' },
  { k: 'abre', est: 'o', min: 7, img: 'mesa', rot: 'I · Your Desk', t: 'Look at your desk, right now. Pick one object on it.', p: 'Tap the object. Then answer out loud, in detail.' },
  { k: 'bilhete', est: 'f', min: 6, img: 'luminaria', rot: 'II · The Desk at 7:50', t: 'Your colleague left yesterday. A meeting starts at 9 AM. The handover is one page. Read it cold.', p: 'Read the line. Answer the question out loud. Then tap.' },
  { k: 'memo', est: 'l', min: 7, img: 'mesa', rot: 'III · The Memo', t: 'She recorded the handover before she left. Listen.', p: 'Play the memo. Say TRUE or FALSE out loud, and why. Then tap.' },
  { k: 'gx', est: 'o', min: 4, img: 'luminaria', rot: 'IV · Look First', t: 'Four moments at the desk, before the 9 AM meeting.', p: 'Look at the picture. Guess what they say. Then tap to see it, and say it.' },
  { k: 'compressor', est: 'f', min: 6, img: 'luminaria', rot: 'V · The Compressor', t: 'Cut who / which / that + BE. Nothing else. No BE? Nothing to cut.', p: 'Tap the blocks to cut. If nothing can go, tap NOTHING TO CUT. Then say the short sentence.' },
  { k: 'seta', est: 'f', min: 6, img: 'corredor', rot: 'VI · Does It or Receives It?', t: '-ING: the noun does it. -ED / third form: the noun receives it.', p: 'Choose the form. Watch the arrow. Say the whole sentence.' },
  { k: 'quem', est: 'f', min: 6, img: 'corredor', rot: 'VII · Who Did It?', t: '-ED deletes the person, unless BY holds on to them.', p: 'Read it out loud. Tap SAYS WHO or DOESN’T SAY.' },
  { k: 'cena', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VIII · The Scene', t: 'An office at 7 AM. Something is wrong. Describe the scene, short and exact.', p: 'Tap an evidence marker. Choose the compressed description. Say it. Then describe it your way.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'IX · Cut Too Much', t: 'Five sentences were cut wrong. One is fine.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'fim', est: 'w', min: 6, img: 'luminaria', rot: 'X · Nine O’Clock', t: 'Your object from scene I. Say it long, then compress it.', p: 'Write your own handover: short and exact. It goes to your My notes.' }
];

var TR = { 'memo.mp3': 'Morning. Sorry, I’m out today. The proposal discussed yesterday was rejected. The client, waiting since March, wants a date. The file sent on Friday needs a signature. The invoice approved last week is still unpaid. Anyone asking about the launch should go to Marta. Nine o’clock. Good luck.' };

var OBJETOS = ['a cup', 'a phone', 'a notebook', 'keys', 'a plant', 'papers'];
var ABRE = [
  { q: 'Where did it come from?', fup: 'Was it a present?', st: ['It came from …'], ex: 'My sister gave it to me two years ago.' },
  { q: 'How long has it been there, and who put it there?', fup: 'Does anyone else use it?', st: ['It has been there since …'], ex: 'Since Monday. I put it there and forgot it.' },
  { q: 'Describe it in one long sentence.', fup: 'Can you say it shorter?', st: ['It’s a … which is … that …'], ex: 'It’s a blue cup which was given to me by my sister and which is always full of pens.' }
];

var BILHETE = [
  { f: 'The proposal discussed yesterday was rejected.', q: 'Who discussed the proposal?', ops: ['The memo doesn’t say.', 'The proposal.', 'Marta.'], w: 'The proposal didn’t discuss anything. Somebody discussed it, and the sentence won’t say who.' },
  { f: 'The client, waiting since March, wants a date.', q: 'Who is waiting?', ops: ['The client.', 'The memo doesn’t say.', 'The date.'], w: 'This time the sentence keeps the person: the client is waiting.' },
  { f: 'The file sent on Friday needs a signature.', q: 'Who sent the file?', ops: ['The memo doesn’t say.', 'The file.', 'You.'], w: 'The file was sent. The sender was cut out of the sentence.' }
];

var MEMO = [['The proposal was rejected.', 'sim'], ['The proposal discussed something yesterday.', 'nao'], ['The client has been waiting since March.', 'sim'], ['Somebody sent the file on Friday.', 'sim'], ['The file sent something on Friday.', 'nao'], ['The memo says who rejected the proposal.', 'nao']];

/* c:1 = pode sair (o par relativo + BE) */
var COMP = [
  [['The report'], ['which', 1], ['was', 1], ['left on the desk'], ['needs a signature.']],
  [['The client'], ['who', 1], ['is', 1], ['waiting in reception'], ['wants a date.']],
  [['The woman'], ['who'], ['called you'], ['is my manager.']],
  [['Anyone'], ['who', 1], ['is', 1], ['asking about the launch'], ['should go to Marta.']],
  [['The invoice'], ['that', 1], ['was', 1], ['approved last week'], ['is still unpaid.']],
  [['The files'], ['that'], ['we need'], ['are missing.']]
];

var SETA = [
  { a: 'The client ', b: ' since March wants a date.', v: 'wait', ops: ['waiting', 'waited'], faz: 1 },
  { a: 'The file ', b: ' on Friday needs a signature.', v: 'send', ops: ['sent', 'sending'], faz: 0 },
  { a: 'The people ', b: ' in the next room are loud.', v: 'work', ops: ['working', 'worked'], faz: 1 },
  { a: 'The car ', b: ' outside isn’t ours.', v: 'park', ops: ['parked', 'parking'], faz: 0 },
  { a: 'The man ', b: ' the meeting is new.', v: 'lead', ops: ['leading', 'led'], faz: 1 },
  { a: 'The emails ', b: ' yesterday were lost.', v: 'write', ops: ['written', 'writing'], faz: 0 }
];

var QUEM = [['The proposal rejected <b>by the board</b> was expensive.', 'sim'], ['The proposal rejected yesterday was expensive.', 'nao'], ['The file signed <b>by Marta</b> is on the desk.', 'sim'], ['The invoice approved last week is unpaid.', 'nao'], ['The report written <b>by the new intern</b> is excellent.', 'sim']];

var PISTAS = [
  { obj: 'A COFFEE CUP', x: 34, y: 66, ops: ['A cup left on the table is still warm.', 'A cup left on the table it is still warm.', 'A cup leaving on the table is still warm.'], meu: 'What does the warm cup tell you?' },
  { obj: 'A WINDOW', x: 78, y: 30, ops: ['The window facing the street is open.', 'The window faced the street is open.', 'The window which facing the street is open.'], meu: 'Who opened it, do you think?' },
  { obj: 'A LETTER', x: 56, y: 58, ops: ['A letter signed by the director is missing.', 'A letter signing by the director is missing.', 'A letter was signed by the director is missing.'], meu: 'What was in the letter?' },
  { obj: 'A PERSON', x: 16, y: 38, ops: ['A man carrying a box was seen at 6 AM.', 'A man carried a box was seen at 6 AM.', 'A man who carrying a box was seen at 6 AM.'], meu: 'Solve the mystery in three sentences.' }
];

var ERROS = [
  { f: 'The file <s>sending</s> on Friday needs a signature.', ops: ['sent', 'sends', 'was sending'], w: 'It received the action: <b>sent</b>.' },
  { f: 'The woman <s>called you</s> is my manager. (she called you)', ops: ['who called you', 'calling you yesterday', 'called by you'], w: 'No BE: keep <b>who</b>.' },
  { f: 'The client <s>waited</s> since March wants a date.', ops: ['waiting', 'was waiting', 'waits'], w: 'The client is doing it: <b>waiting</b>.' },
  { f: 'The report <s>which written</s> by Ana is great.', ops: ['written', 'which writing', 'wrote'], w: 'Cut both words: <b>written</b>.' },
  { f: 'The people <s>who working</s> here are friendly.', ops: ['working', 'who work are', 'worked'], w: 'Cut both: <b>working</b>.' },
  { f: 'The car parked outside isn’t ours.', ops: ['Nothing. It’s right.', 'parking', 'which parked'], w: 'Five cut wrong, one clean.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { tema: '', n: 0, foi: {} }, bl: { n: 0, esc: -1 }, mm: {}, cp: { n: 0, cut: {}, nada: 0, quebra: 0 }, st: { n: 0, esc: -1 }, qm: {}, cn: { sel: -1, esc: {} }, er: { n: 0, esc: -1 } };

/* o compressor: blocos num trilho, o contador de palavras */
function conta(blocos, cut) { return blocos.reduce(function (s, b, i) { return s + (cut[i] ? 0 : b[0].split(' ').length); }, 0); }
function trilho(blocos, cut, clicavel, quebra) {
  var total = conta(blocos, {}), agora = conta(blocos, cut);
  return '<div class="dk-trilho' + (quebra ? ' quebrou' : '') + '"><div class="dk-blocos">' + blocos.map(function (b, i) {
    var at = clicavel ? ' data-a="cp-b" data-n="' + i + '"' : '';
    if (!clicavel && cut[i]) return '';
    return '<' + (clicavel ? 'button type="button"' : 'span') + ' class="dk-bloco' + (cut[i] ? ' cortado' : '') + (b[1] ? ' par' : '') + '"' + at + '>' + b[0] + '</' + (clicavel ? 'button' : 'span') + '>';
  }).join('') + '</div><div class="dk-contador"><b>' + agora + '</b><small>WORDS' + (agora < total ? ' · −' + (total - agora) : '') + '</small></div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="dk-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · REDUCED RELATIVE CLAUSES</span><h1>Left on <b>the Desk</b></h1>'
    + '<p class="sub"><b>The report left on the desk needs a signature.</b> Two words were cut, and somebody quietly disappeared from the sentence. Cut the right two and it gets shorter. Cut the wrong ones and it breaks.</p>'
    + '<div class="chipsx"><span class="pilula">cut who / which / that + be</span><span class="pilula">-ing: it does it</span><span class="pilula">-ed: it receives it</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the compressor</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + trilho(COMP[0], { 1: 1, 2: 1 }, 0, 0) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="dk-temas">' + OBJETOS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="ab-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap the object really on your desk.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your long sentence. At the end, the compressor makes it shorter.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the long sentence exactly. Long “which is / that was” chains: don’t correct yet.</p>';
};

R.bilhete = function (c) {
  var e = S.bl, n = e.n, fim = n >= BILHETE.length;
  var papel = '<div class="dk-papel vd"><small>HANDOVER · 7:50 AM · MEETING AT 9</small>' + BILHETE.map(function (b, i) { return '<p class="' + (i === n ? 'agora' : '') + (i < n ? ' lida' : '') + '">' + b.f + '</p>'; }).join('') + '</div>';
  if (fim) return cab(c) + '<div class="mesa-c"><div class="lado-l">' + papel + '</div><div class="lado-l"><div class="pergunta vd"><small>THREE LINES</small><h2>Two of them lost the person who did it. Now listen to her memo.</h2></div></div></div>';
  var x = BILHETE[n], ok = e.esc === 0;
  return cab(c) + trilha(BILHETE, n) + '<div class="mesa-c"><div class="lado-l">' + papel + '</div><div class="lado-l"><div class="pergunta vd ja"><small>ANSWER OUT LOUD FIRST</small><h2>' + x.q + '</h2></div>' + tres('bl', x.ops, e.esc, n + 1)
    + (ok ? '<p class="aprova">' + x.w + '</p><div><button type="button" class="btn" data-a="bl-prox">Next line</button></div>' : e.esc > 0 ? '<p class="recusa">Read it again. Did the noun DO it, or RECEIVE it?</p>' : '<p class="so-prof dica-aluno">“The memo doesn’t say” is a correct answer. Ask: can a proposal discuss?</p>') + '</div></div>';
};

R.memo = function (c) {
  var e = S.mm, ouviu = (S.ouviu || {})['memo.mp3'], todos = MEMO.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="dk-ouve vd"><div class="toca-linha">' + tocar('memo.mp3') + '<b>VOICE MEMO · 11:47 PM</b></div>' + transcricao('memo.mp3', TR['memo.mp3']) + '</div>'
    + (todos ? '<p class="aprova">Two of the false ones are false for the same reason: the noun received the action.</p>' : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? MEMO.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="dk-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="dk-fs">' + [['sim', 'TRUE'], ['nao', 'FALSE']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="mm" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') : '<p class="dica-aluno">Play the memo first.</p>') + '</div></div>';
};

R.compressor = function (c) {
  var e = S.cp, n = e.n, fim = n >= COMP.length;
  if (fim) return cab(c) + trilha(COMP, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Four got shorter. Two had nothing to cut, and you left them alone.</h2></div></div>';
  var x = COMP[n], pares = x.map(function (b, i) { return b[1] ? i : -1; }).filter(function (i) { return i >= 0; }), temPar = pares.length > 0;
  var certo = temPar ? pares.every(function (i) { return e.cut[i]; }) && !e.quebra : e.nada === 1;
  var meio = !temPar && e.nada === 2;
  return cab(c) + trilha(COMP, n) + '<div class="foco">' + trilho(x, e.cut, !certo, e.quebra)
    + '<div class="dk-nada"><button type="button" class="versao grande-v' + (e.nada ? (temPar ? ' errado' : ' certo') : '') + '" data-a="cp-n">NOTHING TO CUT</button></div>'
    + (certo ? '<div class="dk-linha-ok centro"><p class="aprova">' + (temPar ? 'Compressed. Read the long one, then the short one.' : 'Right: no BE after the relative word. Leave it alone.') + '</p><button type="button" class="btn" data-a="cp-prox">Next sentence</button></div>'
      : e.quebra ? '<p class="recusa" style="text-align:center">Crack. The sentence breaks. Only a relative word together with BE can go. <button type="button" class="pilula" data-a="cp-r">Try again</button></p>'
      : e.nada && temPar ? '<p class="recusa" style="text-align:center">Look again: there is a relative word with BE.</p>' : '<p class="dica-aluno" style="text-align:center">Is there a BE after the relative word?</p>') + '</div>';
};

R.seta = function (c) {
  var e = S.st, n = e.n, fim = n >= SETA.length;
  if (fim) return cab(c) + trilha(SETA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Doers took -ING. Receivers took the third form. Now a pair about your own office.</h2></div></div>';
  var x = SETA[n], ok = e.esc === 0, noun = x.a.replace(/^The /, '').trim();
  var diag = '<div class="dk-seta' + (ok ? (x.faz ? ' faz' : ' recebe') : '') + '"><span class="dk-n">' + noun.toUpperCase() + '</span><span class="dk-flecha"><i></i><b>' + (ok ? (x.faz ? 'DOES IT · -ING' : 'RECEIVES IT · -ED') : '?') + '</b></span><span class="dk-v">' + x.v.toUpperCase() + '</span></div>';
  return cab(c) + trilha(SETA, n) + '<div class="foco">' + diag + '<div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>'
    + '<div class="dk-dois">' + ordem(x.ops.map(function (o, i) { return [o, i]; }), n + 2).map(function (o) { return '<button type="button" class="versao grande-v' + (e.esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="st" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
    + (ok ? '<div class="dk-linha-ok centro"><p class="aprova">Say the long one too: the ' + noun + (x.faz ? ' who is / which is …' : ' that was …') + '</p><button type="button" class="btn" data-a="st-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Does the noun do it, or receive it? Can a car park itself?</p>' : '') + '</div>';
};

R.quem = function (c) {
  var e = S.qm, todos = QUEM.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="dk-quem">' + QUEM.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="dk-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="dk-fs">' + [['sim', 'SAYS WHO'], ['nao', 'DOESN’T SAY']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="qm" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Three kept the person with BY. Two let them disappear. Add BY to those two.</p>' : '<p class="dica-aluno" style="text-align:center">Look for BY. No BY, no person.</p>');
};

R.cena = function (c) {
  var e = S.cn, x = e.sel >= 0 ? PISTAS[e.sel] : null, esc = x ? e.esc[e.sel] : undefined, ok = esc === 0, feitas = PISTAS.filter(function (_, i) { return e.esc[i] === 0; }).length;
  var foto = '<div class="dk-foto"><img src="' + img(L[7].img) + '" alt="">' + PISTAS.map(function (p, i) { return '<button type="button" class="dk-placa' + (e.sel === i ? ' on' : '') + (e.esc[i] === 0 ? ' feita' : '') + '" style="left:' + p.x + '%;top:' + p.y + '%" data-a="cn" data-n="' + i + '"><b>' + (i + 1) + '</b><small>' + p.obj + '</small></button>'; }).join('') + '</div>';
  var dir = !x ? '<div class="pergunta vd"><small>7:00 AM</small><h2>Four markers. Tap one.</h2></div>'
    : '<div class="pergunta vd ja"><small>MARKER ' + (e.sel + 1) + ' · ' + x.obj + '</small><h2>Describe it in one compressed sentence.</h2></div>' + tres('cn-v', x.ops, esc === undefined ? -1 : esc, e.sel + 5)
      + (ok ? '<div class="pergunta vd ja"><small>YOUR TURN</small><h2>' + x.meu + '</h2></div>' : esc > 0 ? '<p class="recusa">Cut the pair, keep the rest. Does it do it, or receive it?</p>' : '');
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + foto + (feitas >= 4 ? '<p class="aprova">Four clues, four compressed sentences, and a story you told yourself.</p>' : '<p class="so-prof dica-aluno">After each clue, push: which one? left where? by whom?</p>') + '</div><div class="lado-l">' + dir + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Cut the pair, keep the rest. Say the long version of two of them.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div>' + tres('er', x.ops, e.esc, n + 3, 'linha')
    + (ok ? '<div class="dk-linha-ok centro"><p class="aprova">' + x.w + ' Say the whole sentence.</p><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Did you cut both words? Does the noun do it or receive it?</p>' : '') + '</div>';
};

R.fim = function (c) {
  var obj = S.ab.tema || 'a cup';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'The ' + obj.replace(/^an? /, '') + ' left on my desk since … is …\nThe … waiting for me at work is …\nSomething done this week by … was …', 'Your handover',
    ['left on', 'waiting', 'sent by', 'written by', 'signed by'], ['YOUR HANDOVER, COMPRESSED', 'Your object from scene I, short. Then two lines of your own handover memo, and one with BY.'])
    + '<div class="lado-fim">' + trilho(COMP[4], { 1: 1, 2: 1 }, 0, 0)
    + '<div class="grande vd"><span><u>cut</u> who / which / that + BE, nothing else</span><span><u>-ING</u> · the noun does it</span><span><u>-ED / third form</u> · it receives it; BY keeps the person</span><span>no BE, no cut: not <s>the woman called you is …</s></span></div>'
    + mostra('fim', 'The cup left on my desk since Monday is full of pens.<br>The emails waiting for me at work are from the client.<br>The report signed by my manager was sent on Friday.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-t'] = function (b, n, v) { S.ab.tema = v; };
TOQUES.bl = function (b, n) { S.bl.esc = n; };
TOQUES['bl-prox'] = function () { S.bl = { n: S.bl.n + 1, esc: -1 }; };
TOQUES.mm = function (b, n, v) { S.mm[n] = v; };
TOQUES['cp-b'] = function (b, n) { var x = COMP[S.cp.n]; if (!x[n][1]) { S.cp.quebra = 1; S.cp.cut[n] = 1; return; } S.cp.cut[n] = S.cp.cut[n] ? 0 : 1; };
TOQUES['cp-n'] = function () { S.cp.nada = 1; };
TOQUES['cp-r'] = function () { S.cp.cut = {}; S.cp.quebra = 0; S.cp.nada = 0; };
TOQUES['cp-prox'] = function () { S.cp = { n: S.cp.n + 1, cut: {}, nada: 0, quebra: 0 }; };
TOQUES.st = function (b, n) { S.st.esc = n; };
TOQUES['st-prox'] = function () { S.st = { n: S.st.n + 1, esc: -1 }; };
TOQUES.qm = function (b, n, v) { S.qm[n] = v; };
TOQUES.cn = function (b, n) { S.cn.sel = n; };
TOQUES['cn-v'] = function (b, n) { S.cn.esc[S.cn.sel] = n; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G12 · uma cena curta nova (k: gx) antes de compressor.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'fotoPrimeiro', titulo: 'Look first. What do they say?',
  cenas: [
    { img: 'mesa', antes: 'The handover, 7:50 AM. A report is on the desk. Lena wrote it yesterday.', frase: '“Which report?” “The report <mark>written by Lena</mark>.”' },
    { img: 'luminaria', antes: 'A lamp is on. A woman is sitting under it, reading.', frase: '“Who is Lena?” “The woman <mark>sitting under the lamp</mark>.”' },
    { img: 'corredor', antes: 'In the hall, a man is waiting for the 9 AM meeting.', frase: '“Who is Tom?” “The man <mark>waiting in the hall</mark>.”' },
    { img: 'sala', antes: 'There is a box in the meeting room. Nobody knows who left it.', frase: '“Which box?” “The box <mark>left in the room</mark>.”' }
  ],
  nota: 'Cut <b>who / which / that + BE</b>, and nothing else. The noun does it: <b>-ing</b> (the woman sitting there). The noun receives it: <b>-ed</b> (the report written by Lena). No BE in the sentence? Nothing to cut.',
  uso: { p: 'Your turn. Look at your desk or your room. Describe two things, short and exact.', molde: ['The cup … next to …', 'The notes … by …'], ex: 'The cup standing next to my laptop is cold. The notes written by my boss are on the left.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_foto', GX_EXPLICA); };
