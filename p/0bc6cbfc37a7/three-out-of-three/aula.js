/* ============================================================
   THREE OUT OF THREE · THE SPOTLIGHT · LIVE CLASS  06/10/2026
   Main series B1 · a voz passiva: be + particípio, com a coisa que
   sofre a ação na frente; BY só quando quem faz importa; happen, come,
   arrive, die não têm passiva. Erros: "was stole", "it was did", "it
   was happened", "were came", "borned".
   O MUNDO (da aula velha): uma mulher sem amígdala, testada por anos
   (cobras, filmes, casa assombrada) — curiosidade, nojo normal, nenhum
   medo. Em 2013, um respiro de CO2: três de três pacientes tiveram um
   ataque de pânico. E o estudo do "I am excited". O tema é o medo no
   corpo dos outros, não o do aluno. Três gravações mantidas (a1–a3),
   conferidas no faster-whisper em 06/10: batem.
   A CARA: o PALCO — fundo preto, um holofote em cone. Na passiva, o
   cartão do objeto entra no holofote na frente da frase, o verbo vira
   uma lâmpada "was + particípio", e quem fez sai para a coxia (fica
   com a etiqueta BY, ou some no escuro).
   Fila: FILA-LIVE-386.md · 111.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'pele' },
  { k: 'dado', est: 'o', min: 7, img: 'corredor', rot: 'I · Done for You', t: 'This year, things were done for you, by people you may not even remember.', p: 'Tap three starters. Finish each one out loud, with something true.' },
  { k: 'mulher', est: 'o', min: 7, img: 'pele', rot: 'II · The Tank Room', t: 'Five things were done to the same woman, over several years.', p: 'Say what most people would feel. Then choose what she felt.' },
  { k: 'palco', est: 'f', min: 6, img: 'corredor', rot: 'III · The Spotlight', t: 'The thing the action happens to steps into the light. The doer goes to the wings.', p: 'Two taps per sentence: the verb, then what happens to the doer. Then say it.' },
  { k: 'be', est: 'f', min: 6, img: 'cilindro', rot: 'IV · Be and the Third Form', t: 'BE and the third form. And some verbs never step into the light at all.', p: 'Choose the form. Then say the whole sentence.' },
  { k: 'neuro', est: 'l', min: 7, img: 'corredor', rot: 'V · What the Neurologist Saw', t: 'Listen once. Then finish five sentences from what you heard.', p: 'Watch out: one verb can’t go into the passive.' },
  { k: 'coluna', est: 'o', min: 7, img: 'respiro', rot: 'VI · The Empty Column', t: 'Everything they tested was in the room. Put each threat in its column.', p: 'Read the card out loud, then tap the column.' },
  { k: 'panico', est: 'l', min: 7, extra: 1, img: 'mascara', rot: 'VII · Three Out of Three', t: '2013. Three patients with no amygdala and twelve healthy people were given one breath of air with 35% CO₂.', p: 'Play the researcher once. Then guess each number.' },
  { k: 'jornal', est: 'o', min: 7, extra: 1, img: 'microfone', rot: 'VIII · The Newsroom', t: 'You edit the science page. Every headline goes into the passive before it’s printed.', p: 'Read the raw note. Choose the headline. Read it like a news anchor, then comment.' },
  { k: 'corpo', est: 'l', min: 7, extra: 1, img: 'cilindro', rot: 'IX · The Same Body', t: 'One more study, about a word.', p: 'Listen once. Answer four questions. Then say what you think.' },
  { k: 'fim', est: 'w', min: 6, img: 'pele', rot: 'X · Done for You, Again', t: 'Your three sentences from scene I come back.', p: 'Write them again, and the woman’s story in passive sentences. It goes to your My notes.' }
];

var TR = {
  'a1.mp3': 'What people expect me to say is that she was damaged, and that is not what I saw. She was tested for years, by different teams, with snakes, with movies, with a house built to frighten people, and every result came back the same. She was curious. She was interested. Her memory was normal, her language was normal, her disgust was normal. One thing was taken out of her, cleanly, on both sides, and nothing else was touched. That is why the case was published. Not because she was broken. Because she was not.',
  'a2.mp3': 'We expected nothing. That is the honest answer. Every model we had said that a person with no amygdala would breathe the gas and feel almost nothing, and the study was designed around that expectation. All three of them had a panic attack. Two of them asked us to stop. And afterwards, one of them said something none of us was ready for. She said she had never felt anything like it in her whole life, and she was in her forties. The thing that had been missing since childhood arrived in about twenty seconds, and it came in through her lungs.',
  'a3.mp3': 'The body does almost the same thing in both cases. The heart is pushed faster, the hands are cooled, the breath is shortened, and that happens whether you are terrified or whether you cannot wait. So when somebody tells you to calm down before you speak, you are being asked to go from fast to slow, and that is a long way. In our studies, people said three words out loud instead. I am excited. Same body, different name. The speeches were about thirty-five seconds longer, and they were judged more persuasive and more confident by people who did not know which group anybody was in.'
};

var INICIOS = ['I was given …', 'I was taught …', 'I was invited to …', 'I was helped with …', 'I was told that …', 'I was asked to …'];

var CARTAS = [
  { q: 'A live snake <b>was put</b> into her hands.', a: 1, w: '<b>Curiosity.</b> She asked if she could touch its tongue.' },
  { q: 'She <b>was taken</b> to a house built to frighten people.', a: 1, w: '<b>Curiosity</b> again. She walked ahead and frightened one of the actors.' },
  { q: 'She <b>was shown</b> three of the scariest movies ever made.', a: 1, w: '<b>Curiosity.</b> She asked for the title of one of them.' },
  { q: 'Something rotten <b>was held</b> under her nose.', a: 2, w: '<b>Disgust</b>, completely normal. So she wasn’t empty.' },
  { q: 'She <b>was asked</b>, again and again, what frightens her.', a: 3, w: '<b>Nothing.</b> She had nothing to report.' }
];
var SENT = ['FEAR', 'CURIOSITY', 'DISGUST', 'NOTHING'];

var PALCO = [
  { ag: 'A rare disease', vb: 'destroyed', ob: 'Two parts of her brain', ops: ['were destroyed', 'was destroyed', 'were destroy'], by: 'amb', byt: 'by a rare disease', pq: 'Both work. Drop it if the reader already knows the cause; keep it if the cause is the news.' },
  { ag: 'Different teams', vb: 'tested', ob: 'She', ops: ['was tested', 'tested', 'was test'], by: 'fica', byt: 'by different teams', pq: 'Here the doer matters: it wasn’t one team, it was many.' },
  { ag: 'The researchers', vb: 'gave', ob: 'The gas', ops: ['was given', 'was gave', 'gave'], by: 'cai', byt: 'by the researchers', pq: 'Who else would give it? The doer is obvious.' },
  { ag: 'A science journal', vb: 'published', ob: 'The case', ops: ['was published', 'published', 'was publishing'], by: 'cai', byt: 'by a science journal', pq: 'Which journal doesn’t matter here.' },
  { ag: 'Judges who didn’t know the groups', vb: 'judged', ob: 'The speeches', ops: ['were judged', 'was judged', 'were judge'], by: 'fica', byt: 'by judges who didn’t know the groups', pq: 'This doer is the whole point: the judges didn’t know who was who.' },
  { ag: 'Somebody', vb: 'stole', ob: 'The recording', ops: ['was stolen', 'was stole', 'was stealed'], by: 'cai', byt: 'by somebody', pq: '“By somebody” says nothing. Drop it.' }
];

var BE = [
  { a: 'Adrenaline ', b: ' before you know why.', ops: ['is released', 'releases', 'is releasing'], w: 'Present passive: <b>is released</b>.' },
  { a: 'The gas ', b: ' to twelve healthy people.', ops: ['was given', 'was gave', 'gave'], w: 'give · gave · <b>given</b>.' },
  { a: 'It ', b: ' very fast.', ops: ['happened', 'was happened', 'is happened'], w: '<b>happen</b> has no passive.' },
  { a: 'She ', b: ' with the disease.', ops: ['was born', 'borned', 'was bear'], w: 'There’s no verb “to born”: <b>was born</b>.' },
  { a: 'Her heart rate ', b: ' every second.', ops: ['was measured', 'measured', 'was measure'], w: 'Nobody cares who held the machine.' },
  { a: 'The results ', b: ' back the same.', ops: ['came', 'were came', 'were come'], w: '<b>come</b> has no passive.' },
  { a: 'The study ', b: ' in 2013.', ops: ['was done', 'was did', 'did'], w: 'do · did · <b>done</b>.' },
  { a: 'Fear ', b: ' to be one thing.', ops: ['is said', 'says', 'is saying'], w: '<b>It is said … / Fear is said to be …</b>' }
];

var NEURO = [
  { q: 'She ___ for years, by different teams.', op: ['was tested', 'tested', 'was testing'] },
  { q: 'Every result ___ back the same.', op: ['came', 'was came', 'was come'] },
  { q: 'One thing ___ out of her, on both sides.', op: ['was taken', 'was took', 'took'] },
  { q: 'Nothing else ___.', op: ['was touched', 'touched', 'was touching'] },
  { q: 'The case ___ because she was not broken.', op: ['was published', 'published', 'was publishing'] }
];

var FICHAS = [['a live snake in the room', 0], ['not enough air', 1], ['a house built to frighten people', 0], ['a heart that won’t slow down', 1], ['a horror movie on a screen', 0]];

var PLACAR = [
  { rot: 'PATIENTS', q: 'Of the three patients, how many had a panic attack?', op: ['three', 'none', 'one', 'two'], val: '3 / 3' },
  { rot: 'THE FEELING', q: 'For one patient, the feeling was …', op: ['completely new', 'old and familiar', 'like a horror movie', 'mild'], val: 'NEW' },
  { rot: 'HOW FAST', q: 'How long did it take to arrive?', op: ['about twenty seconds', 'about twenty minutes', 'about two hours', 'a whole day'], val: '20 s' },
  { rot: 'HOW', q: 'How did it come in?', op: ['through her lungs', 'through her eyes', 'through a movie', 'through a snake'], val: 'LUNGS' }
];

var NOTAS = [
  { raw: 'Researchers gave three patients a breath of CO₂.', ops: ['Three Patients Given CO₂ in New Study', 'Three Patients Gave CO₂ in New Study', 'Three Patients Was Given CO₂'], c: 'Would you volunteer for a study like that? Why or why not?', cheia: 'Three patients <b>were given</b> CO₂.' },
  { raw: 'Somebody stole a laptop with research data.', ops: ['Laptop With Research Data Stolen', 'Laptop With Research Data Stole', 'Laptop Was Stealed'], c: 'What should the lab do now?', cheia: 'A laptop <b>was stolen</b>.' },
  { raw: 'The team did the study in only six weeks.', ops: ['Study Done in Only Six Weeks', 'Study Did in Only Six Weeks', 'Study Was Doing in Six Weeks'], c: 'Is six weeks fast or slow for science, in your opinion?', cheia: 'The study <b>was done</b> in six weeks.' },
  { raw: 'A city banned phones in all its schools.', ops: ['Phones Banned in All City Schools', 'Phones Ban in All City Schools', 'Phones Were Banning in Schools'], c: 'Good idea or bad idea? Defend one side.', cheia: 'Phones <b>were banned</b>.' },
  { raw: 'Something unexpected happened in the lab.', ops: ['Something Unexpected Happened in the Lab', 'Something Unexpected Was Happened', 'Lab Was Happened Something'], c: 'This one has no passive. Why not?', cheia: 'Something <b>happened</b>. No passive.' }
];

var CORPO = [
  { q: 'Before a scary task and an exciting one, the body does …', op: ['almost the same thing', 'completely different things', 'nothing at all'] },
  { q: 'The heart is pushed faster, and the hands …', op: ['are cooled', 'cool down slowly', 'are warmed'] },
  { q: 'The “I am excited” speeches were …', op: ['about 35 seconds longer', '35 seconds shorter', 'the same length'] },
  { q: 'The speeches ___ more persuasive by people who didn’t know the groups.', op: ['were judged', 'judged', 'was judged'] }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {}, q: {},
  dd: {}, mu: { n: 0, esc: -1 }, pc: { n: 0, vb: -1, by: '' }, be: { n: 0, esc: -1 }, co: {}, jn: { n: 0, esc: -1 } };

/* o palco: objeto no holofote, verbo-lâmpada, quem fez na coxia */
function palco(x, vb, by, aceso) {
  var noBy = by === 'fica' || (by === 'amb');
  return '<div class="sp-palco' + (aceso ? ' aceso' : '') + '"><span class="sp-cone"></span>'
    + '<div class="sp-linha"><span class="sp-carta obj"><small>IN THE LIGHT</small>' + (aceso ? x.ob : x.ob.toLowerCase()) + '</span>'
    + '<span class="sp-carta lamp' + (vb ? ' on' : '') + '"><small>BE + THIRD FORM</small>' + (vb || '…') + '</span>'
    + '<span class="sp-carta doer' + (by === 'cai' ? ' saiu' : noBy && aceso ? ' by' : '') + '"><small>' + (by === 'cai' ? 'OFF STAGE' : 'THE WINGS') + '</small>' + (noBy && aceso ? x.byt : x.ag) + '</span></div>'
    + '<p class="sp-ativa">ACTIVE: ' + x.ag + ' ' + x.vb + ' ' + x.ob.toLowerCase().replace(/^she$/, 'her') + '.</p></div>';
}
function tres(acao, ops, esc, semente, classe, extra) {
  return '<div class="sp-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '"' + (extra || '') + '>' + o[0] + '</button>'; }).join('') + '</div>';
}
function quiz(k, lista, msg) {
  var e = S.q[k] || (S.q[k] = { n: 0, esc: -1 }), n = e.n;
  if (n >= lista.length) return '';
  var x = lista[n], ok = e.esc === 0;
  return '<div class="sp-quiz vd"><small>QUESTION ' + (n + 1) + ' OF ' + lista.length + '</small><h3>' + x.q + '</h3>' + tres('qz', x.op, e.esc, n + 1, '', ' data-c="' + k + '"')
    + (ok ? '<button type="button" class="btn" data-a="qz-prox" data-c="' + k + '">' + (n < lista.length - 1 ? 'Next question' : 'Done') + '</button>' : e.esc > 0 ? '<p class="recusa">' + (msg || 'Play it again and listen for that part.') + '</p>' : '<p class="dica-aluno">Answer out loud first. Then tap.</p>') + '</div>';
}
function quizN(k) { return (S.q[k] || { n: 0 }).n; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE PASSIVE</span><h1>Three Out <b>of Three</b></h1>'
    + '<p class="sub">She <b>was shown</b> snakes, horror movies and a haunted house. Nothing. Then she <b>was given</b> one breath of air.</p>'
    + '<div class="chipsx"><span class="pilula">be + third form</span><span class="pilula">by … only if it matters</span><span class="pilula">happened · came · arrived</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Turn on the light</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + palco({ ag: 'The researchers', vb: 'gave', ob: 'She', byt: 'by the researchers' }, 'was given', 'cai', 1).replace('her.</p>', 'her one breath of air.</p>') + '</div></div>';
};

R.dado = function (c) {
  var e = S.dd, sel = INICIOS.filter(function (_, i) { return e[i]; }).length;
  return cab(c) + '<div class="sp-inicios">' + INICIOS.map(function (t, i) { return '<button type="button" class="sp-inicio' + (e[i] ? ' on' : '') + '" data-a="dd" data-n="' + i + '">' + t + '</button>'; }).join('') + '</div>'
    + '<div class="foco">' + (sel >= 3 ? '<div class="pergunta vd ja"><small>THREE SENTENCES</small><h2>Now say who did one of them, and whether that person matters in the sentence.</h2></div>' + fala('dd', ['… by my …', 'It doesn’t matter who …', 'It matters, because …'], ['by', 'matter']) : '<p class="dica-aluno" style="text-align:center">Finish each one out loud, with something true.</p>')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the three sentences down exactly. Listen for “I was gave”. They come back in scene X.</p></div>';
};

R.mulher = function (c) {
  var e = S.mu, n = e.n, fim = n >= CARTAS.length;
  if (fim) return cab(c) + trilha(CARTAS, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE CARDS</small><h2>Curiosity, curiosity, curiosity, then normal disgust. Four answers were the same and one was different. Which one matters most, and why?</h2></div></div>';
  var x = CARTAS[n], ok = e.esc === x.a;
  return cab(c) + trilha(CARTAS, n) + '<div class="foco"><div class="balao vd"><small>CARD ' + (n + 1) + ' OF 5</small><p>' + x.q + '</p></div><div class="sp-sent">' + SENT.map(function (s, i) { return '<button type="button" class="versao grande-v' + (e.esc === i ? (ok ? ' certo' : ' errado') : '') + '" data-a="mu" data-n="' + i + '">' + s + '</button>'; }).join('') + '</div>'
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="mu-prox">Next card</button></div>' : e.esc >= 0 ? '<p class="recusa" style="text-align:center">That’s what most people would feel. She didn’t.</p>' : '<p class="dica-aluno" style="text-align:center">First: what would most people feel?</p>') + '</div>';
};

R.palco = function (c) {
  var e = S.pc, n = Math.min(e.n, PALCO.length - 1), fim = e.n >= PALCO.length, x = PALCO[n];
  if (fim) return cab(c) + trilha(PALCO, e.n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>The doer stayed only when it mattered. Now say the active and the passive back to back.</h2></div></div>';
  var okVb = e.vb === 0, okBy = e.by && (x.by === 'amb' || e.by === x.by), tudo = okVb && okBy;
  return cab(c) + trilha(PALCO, e.n) + palco(x, okVb ? x.ops[0] : '', tudo ? (x.by === 'amb' ? e.by : x.by) : '', okVb)
    + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">1 · THE VERB</h5>' + tres('pc-vb', x.ops, e.vb, n + 1) + '</div>'
    + '<div class="lado-l">' + (okVb ? '<h5 class="rot-ouve">2 · THE DOER: DOES IT MATTER?</h5><div class="sp-dois">' + [['fica', 'KEEP · BY …'], ['cai', 'DROP IT']].map(function (o) { var esc = e.by === o[0], certo = x.by === 'amb' || x.by === o[0]; return '<button type="button" class="versao grande-v' + (esc ? (certo ? ' certo' : ' errado') : '') + '" data-a="pc-by" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div>' : '')
    + (tudo ? '<p class="aprova">' + x.pq + ' Say the whole sentence.</p><div><button type="button" class="btn" data-a="pc-prox">Next sentence</button></div>' : e.vb > 0 ? '<p class="recusa">BE + the third form: was (one thing) or were (more) + tested, given, stolen.</p>' : e.by && !okBy ? '<p class="recusa">Who did it? Does it matter here?</p>' : '') + '</div></div>';
};

R.be = function (c) {
  var e = S.be, n = e.n, fim = n >= BE.length;
  if (fim) return cab(c) + trilha(BE, n) + '<div class="foco"><div class="pergunta vd"><small>EIGHT SENTENCES</small><h2>Third form every time, and two verbs that never go into the passive. Can you name two more?</h2></div></div>';
  var x = BE[n], ok = e.esc === 0;
  return cab(c) + trilha(BE, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('be', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<p class="aprova" style="text-align:center">' + x.w + '</p><div style="text-align:center"><button type="button" class="btn" data-a="be-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Be + third form, unless nothing can do it to you. Can somebody “happen” something to you?</p>' : '') + '</div>';
};

R.neuro = function (c) {
  var ouviu = (S.ouviu || {})['a1.mp3'], feito = quizN('ne') >= NEURO.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('a1.mp3') + '<b>THE NEUROLOGIST</b></div>' + transcricao('a1.mp3', TR['a1.mp3']) + '</div>' + (feito ? '<div class="sp-lista vd"><small>WHAT SHE SAID</small><span>was tested</span><span class="nao">came</span><span>was taken</span><span>was touched</span><span>was published</span></div>' : '') + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>A woman feels no fear at all. Is she “broken”? What do you think a doctor would say?</h2></div><p class="dica-aluno">Play the neurologist.</p>'
      : !feito ? quiz('ne', NEURO, 'Did somebody do it to her, or did it just happen?') : follow('THE QUESTION', '“Not because she was broken. Because she was not.” What does she mean?', ['She means that …', 'The case was published because …'], ['broken', 'normal'], 'ne')) + '</div></div>';
};

R.coluna = function (c) {
  var e = S.co, todos = FICHAS.every(function (f, i) { return e[i] === f[1]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + FICHAS.map(function (f, i) { var foi = e[i] !== undefined, ok = e[i] === f[1]; return '<div class="sp-ficha vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + f[0] + '</span><div class="sp-fs">' + [[0, 'OUTSIDE'], [1, 'INSIDE']].map(function (o) { return '<button type="button" class="pilula' + (e[i] === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="co" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="sp-cols"><div class="sp-col"><small>OUTSIDE HER BODY · TESTED</small>' + FICHAS.filter(function (f, i) { return e[i] === 0 && f[1] === 0; }).map(function (f) { return '<span>' + f[0] + '</span>'; }).join('') + '</div><div class="sp-col dentro"><small>INSIDE HER BODY · NEVER TESTED</small>' + FICHAS.filter(function (f, i) { return e[i] === 1 && f[1] === 1; }).map(function (f) { return '<span>' + f[0] + '</span>'; }).join('') + '</div></div>'
    + (todos ? follow('THE QUESTION', 'Nothing in the second column was tested for nineteen years. Why not, do you think?', ['Maybe because …', 'Nobody thought …'], [], 'co') : '<p class="dica-aluno">Is it in the room, or in the body?</p>') + '</div></div>';
};

R.panico = function (c) {
  var ouviu = (S.ouviu || {})['a2.mp3'], n = quizN('pa'), feito = n >= PLACAR.length;
  var placar = '<div class="sp-placar">' + PLACAR.map(function (p, i) { return '<div class="sp-casa vd' + (i < n ? ' feita' : '') + '"><small>' + p.rot + '</small><b>' + (i < n ? p.val : '?') + '</b></div>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('a2.mp3') + '<b>THE RESEARCHER · 2013</b></div>' + transcricao('a2.mp3', TR['a2.mp3']) + '</div>' + placar + '<p class="pista">Three patients and twelve healthy people. A small study.</p></div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>Everybody expected the patients to feel almost nothing. What do you think happened?</h2></div><p class="dica-aluno">Play the researcher.</p>'
      : !feito ? quiz('pa', PLACAR) : follow('SAY IT IN THE PASSIVE', 'The patients were expected to … Then: does this destroy the old idea, or only put a limit on it?', ['The patients were expected to …', 'The study was designed …', 'It only puts a limit on …'], ['were expected', 'was designed'], 'pa')) + '</div></div>';
};

R.jornal = function (c) {
  var e = S.jn, n = Math.min(e.n, NOTAS.length - 1), fim = e.n >= NOTAS.length, x = NOTAS[n], ok = e.esc === 0;
  if (fim) return cab(c) + trilha(NOTAS, e.n) + '<div class="foco"><div class="pergunta vd"><small>FIVE HEADLINES PRINTED</small><h2>One of them couldn’t go into the passive, and you knew why. Now write a sixth headline about your own week.</h2></div></div>';
  return cab(c) + trilha(NOTAS, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="pede vd"><small>THE RAW NOTE</small><b>' + x.raw + '</b></div>' + (ok ? '<div class="sp-manchete vd"><small>PRINTED</small><b>' + x.ops[0] + '</b><span>' + x.cheia + '</span></div><div><button type="button" class="btn" data-a="jn-prox">Next note</button></div>' : '<p class="pista">Headlines drop is / was / were: “Laptop Stolen” = a laptop was stolen.</p>') + '</div>'
    + '<div class="lado-l"><h5 class="rot-ouve">CHOOSE THE HEADLINE</h5>' + tres('jn', x.ops, e.esc, n + 1)
    + (ok ? follow('COMMENT', x.c, ['I think …', 'In my opinion …'], [], 'jn' + n) : e.esc > 0 ? '<p class="recusa">Third form. And check: can this verb go into the passive?</p>' : '') + '</div></div>';
};

R.corpo = function (c) {
  var ouviu = (S.ouviu || {})['a3.mp3'], feito = quizN('cp') >= CORPO.length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="ouve-c vd"><div class="toca-linha">' + tocar('a3.mp3') + '<b>THE SAME BODY</b></div>' + transcricao('a3.mp3', TR['a3.mp3']) + '</div>' + (feito ? '<div class="sp-dupla vd"><span>TERRIFIED</span><i></i><span>EXCITED</span><small>SAME BODY · DIFFERENT NAME</small></div>' : '') + '</div>'
    + '<div class="lado-l">' + (!ouviu ? '<div class="pergunta vd ja"><h2>What does your body do before something you really want? And before something you really fear?</h2></div><p class="dica-aluno">Play the recording.</p>'
      : !feito ? quiz('cp', CORPO) : follow('TAKE A SIDE', 'Same body, different name. Convincing, or a word trick?', ['It’s convincing, because …', 'It’s just a word trick, because …'], ['judged', 'persuasive'], 'cp') + '<p class="so-prof dica-aluno">A finding about other people, not advice.</p>') + '</div></div>';
};

R.fim = function (c) {
  var e = S.dd, frases = INICIOS.filter(function (_, i) { return e[i]; });
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I was given …\nShe was tested …\nThe study was done …\nSomething happened …', 'Done for you',
    ['was given', 'was taught', 'was tested', 'were given', 'by', 'happened'], ['YOUR THREE SENTENCES, AND HER STORY', 'Add by … only if the doer matters. Then the woman’s story in passive sentences.'])
    + '<div class="lado-fim">' + (frases.length ? '<div class="sp-lista vd"><small>YOUR STARTERS FROM SCENE I</small>' + frases.map(function (f) { return '<span>' + f + '</span>'; }).join('') + '</div>' : '')
    + '<div class="grande vd"><span><u>be + third form</u> · the thing in front</span><span><u>by …</u> only if the doer matters</span><span>happen · come · arrive: no passive</span><span>not <s>was stole</s>, not <s>was happened</s></span></div>'
    + mostra('fim', 'I was given a plant by my neighbor.<br>She was tested for years. She was shown snakes and movies.<br>In 2013 she was given one breath of air, and a panic attack happened.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.dd = function (b, n) { S.dd[n] = !S.dd[n]; };
TOQUES.mu = function (b, n) { S.mu.esc = n; };
TOQUES['mu-prox'] = function () { S.mu = { n: S.mu.n + 1, esc: -1 }; };
TOQUES['pc-vb'] = function (b, n) { S.pc.vb = n; };
TOQUES['pc-by'] = function (b, n, v) { S.pc.by = v; };
TOQUES['pc-prox'] = function () { S.pc = { n: S.pc.n + 1, vb: -1, by: '' }; };
TOQUES.be = function (b, n) { S.be.esc = n; };
TOQUES['be-prox'] = function () { S.be = { n: S.be.n + 1, esc: -1 }; };
TOQUES.qz = function (b, n, v, c) { S.q[c].esc = n; };
TOQUES['qz-prox'] = function (b, n, v, c) { S.q[c] = { n: S.q[c].n + 1, esc: -1 }; };
TOQUES.co = function (b, n, v) { S.co[n] = +v; };
TOQUES.jn = function (b, n) { S.jn.esc = n; };
TOQUES['jn-prox'] = function () { S.jn = { n: S.jn.n + 1, esc: -1 }; };
