/* ============================================================
   NOT YOUR SHOE SIZE · THE BALANCE · LIVE CLASS  06/10/2026
   Main series B2 · hedging falado: tend to / seem to + verbo base;
   arguably antes da afirmação; to some extent (sempre TO). Afirmação ×
   evidência: a frase não pode ser mais forte que a evidência, nem mais
   fraca. Erros: afirmação absoluta (Intelligence is genetic), tend to
   being, seems be, in some extent, tends/tend com o sujeito errado.
   O MUNDO (da aula velha): inteligências múltiplas e o crítico; os dois
   áudios mantidos (v-claim, v-critic), conferidos no faster-whisper em
   06/10: batem. Sem vídeo. Nenhum nome de teórico na tela.
   A CARA (nova; a velha era o dial de certeza claro): a BALANÇA — a
   afirmação num prato, os pesos da evidência no outro. Frase forte
   demais: a balança tomba para a afirmação. Forma quebrada: a balança
   treme. A frase certa: a balança fica nivelada.
   Fila: FILA-LIVE-386.md · 129. Pasta piloto-shoe (conferida: não existia).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'regua' },
  { k: 'numero', est: 'o', min: 7, img: 'regua', rot: 'I · Out of Ten', t: 'How intelligent are you, from 0 to 10? No scale. Just a number.', p: 'Tap your number. Then defend it out loud.' },
  { k: 'afirma', est: 'l', min: 7, img: 'palco', rot: 'II · The Claim', t: 'A speaker makes a claim about intelligence. People usually remember only half of it.', p: 'Play it. Then, for each line: SAID or NOT SAID.' },
  { k: 'balanca', est: 'o', min: 7, img: 'regua', rot: 'III · The Balance', t: 'The claim goes on one side. The evidence goes on the other. Make them balance.', p: 'Read the claim and the evidence out loud. Choose the sentence that balances. Say it.' },
  { k: 'forma', est: 'f', min: 6, img: 'mesa', rot: 'IV · The Form', t: 'tend to / seem to + bare verb. arguably before the claim. to some extent: always TO.', p: 'Choose the word. Say the whole sentence.' },
  { k: 'evid', est: 'f', min: 6, img: 'mesa', rot: 'V · Claim or Evidence?', t: 'A claim says what is true. Evidence says what somebody saw.', p: 'Read it out loud. Tap CLAIM or EVIDENCE. Hedge every claim.' },
  { k: 'critico', est: 'l', min: 7, img: 'mesa', rot: 'VI · The Critic', t: 'Now somebody takes the theory apart. Listen to what they actually say.', p: 'Play it. Then, for each line: SAID or NOT SAID.' },
  { k: 'debate', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'VII · Three Claims', t: 'Your teacher states three claims at 100%. You answer below 100%, with a reason.', p: 'Read the claim. Choose the answer. Say it. Then say what you really think.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'mesa', rot: 'VIII · Too Sure', t: 'Five sentences have a problem, in the form or in the certainty. One is fine.', p: 'Choose the fix. Then say the whole sentence.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'IX · About You', t: 'Four cards about how your mind works.', p: 'Tap a card. Answer with the frame, then add one piece of evidence.' },
  { k: 'fim', est: 'w', min: 6, img: 'regua', rot: 'X · Your Number, Again', t: 'Intelligence isn’t your shoe size. Neither is certainty.', p: 'Defend your number again, below 100%. It goes to your My notes.' }
];

var TR = {
  'v-claim.mp3': 'Intelligence is not one thing. It is not a single number you carry around with you. There are several different kinds, and being strong in one of them tells you almost nothing about the others. And then there is the second half, which people forget: it is not fixed. Your shoe size is fixed. This is not.',
  'v-critic.mp3': 'Ask a psychologist about this and many of them will not be kind. There is very little hard evidence that these are separate intelligences at all. They look far more like talents. And if you decide that everything counts, music, movement, gardening, then the word intelligence stops meaning anything in particular. That is the objection. It is not that these abilities do not exist. It is that calling them intelligences may not buy us anything.'
};

var NUMERO = [
  { q: 'Why that number and not one higher?', fup: 'And not one lower?', st: ['Because I …'], ex: 'Because I learn fast, but I forget fast too.' },
  { q: 'Who would give you a different number, and why?', fup: 'Would they be right?', st: ['My … would say …'], ex: 'My brother would say five. He beats me at chess.' },
  { q: 'What would you need to see to change it?', fup: 'Has that ever happened?', st: ['I’d need to …'], ex: 'I’d need to pass a really hard exam.' }
];

var AFIRMA = [['Intelligence comes in more than one kind.', 'sim'], ['Everybody is a genius at something.', 'nao'], ['Being strong in one kind tells you little about the others.', 'sim'], ['IQ tests have been proven worthless.', 'nao'], ['Intelligence is not fixed.', 'sim'], ['Schools only reward two kinds.', 'nao']];
var CRITICO = [['There is little hard evidence that these are separate.', 'sim'], ['The abilities themselves don’t exist.', 'nao'], ['They look more like talents.', 'sim'], ['Only math really matters.', 'nao'], ['If everything counts, the word stops meaning anything.', 'sim'], ['The theory was invented to sell books.', 'nao']];

/* ops: [texto, tipo] · ok / forte (forte demais) / forma (forma quebrada) */
var BALANCA = [
  { claim: 'Intelligence is fixed at birth.', ev: 'Studies show scores can change, especially in childhood.', peso: 40, ops: [['Intelligence seems to change, to some extent.', 'ok'], ['Intelligence seems change, to some extent.', 'forma'], ['Intelligence is definitely not fixed at all.', 'forte']] },
  { claim: 'Musicians are better at math.', ev: 'Some studies find a small link. Others find none.', peso: 35, ops: [['Musicians seem to be slightly better at math, in some studies.', 'ok'], ['Musicians are better at math.', 'forte'], ['Musicians seem being better at math.', 'forma']] },
  { claim: 'People overrate their own intelligence.', ev: 'Most people rate themselves above average, with many exceptions.', peso: 70, ops: [['People tend to overrate their own intelligence.', 'ok'], ['People tend to overrating their own intelligence.', 'forma'], ['People never judge themselves correctly.', 'forte']] },
  { claim: 'This is the best theory of intelligence.', ev: 'Many teachers use it. Many psychologists reject it.', peso: 55, ops: [['It is arguably the most popular theory in schools.', 'ok'], ['It is the best theory, and that’s a fact.', 'forte'], ['It is the best arguably theory.', 'forma']] },
  { claim: 'IQ tests measure intelligence.', ev: 'They predict school results well, but miss creativity and social skills.', peso: 50, ops: [['IQ tests measure intelligence to some extent.', 'ok'], ['IQ tests measure intelligence in some extents.', 'forma'], ['IQ tests measure everything about a mind.', 'forte']] }
];

var FORMA = [
  { a: 'Smart people ', b: ' to ask more questions.', ops: ['tend', 'tends', 'tending'] },
  { a: 'The test seems ', b: ' speed, not depth.', ops: ['to measure', 'measure', 'measuring'] },
  { a: 'It is, ', b: ', the most famous theory.', ops: ['arguably', 'argue', 'arguing'] },
  { a: 'I agree with her ', b: ' some extent.', ops: ['to', 'in', 'at'] },
  { a: 'Memory ', b: ' to get worse with stress.', ops: ['tends', 'tend', 'is tend'] },
  { a: 'He doesn’t ', b: ' to understand the question.', ops: ['seem', 'seems', 'seeming'] }
];

var EVID = [['Intelligence is mostly genetic.', 'claim'], ['In one study, twins raised apart had similar test scores.', 'evid'], ['Reading makes you smarter.', 'claim'], ['Children who read daily scored higher on vocabulary tests.', 'evid'], ['Most of the 200 teachers in the survey used the theory.', 'evid'], ['Everyone is intelligent in their own way.', 'claim']];

var DEBATE = [
  { claim: 'Some people are just born smart. End of story.', ops: [['Genes seem to matter, but only to some extent. Practice counts too.', 'ok'], ['Genes seem matter, but practice counts too.', 'forma'], ['That’s completely false. Nobody is born smart.', 'forte']], meu: 'Do you think people are born smart? Answer below 100%.' },
  { claim: 'Good students become successful adults.', ops: [['Good students tend to do well, arguably, but not always.', 'ok'], ['Good students tend doing well, but not always.', 'forma'], ['Good students always become successful.', 'forte']], meu: 'Think of someone you know. Did the rule work?' },
  { claim: 'Technology is making us less intelligent.', ops: [['It seems to change how we remember things, to some extent.', 'ok'], ['It seems to changing how we remember things.', 'forma'], ['Technology is definitely destroying our brains.', 'forte']], meu: 'Your phone and your memory. What have you noticed?' }
];

var ERROS = [
  { f: 'Intelligence <s>is</s> genetic.', ops: ['seems to be partly', 'is always', 'seems being'], w: 'Too sure: <b>seems to be partly</b>.' },
  { f: 'People tend to <s>forgetting</s> names.', ops: ['forget', 'forgot', 'forgets'], w: 'TEND TO + <b>bare verb</b>.' },
  { f: 'The test <s>seems measure</s> speed.', ops: ['seems to measure', 'seem measure', 'seems measuring'], w: 'SEEM <b>TO</b> + verb.' },
  { f: 'I agree <s>in some extent</s>.', ops: ['to some extent', 'on some extent', 'in some extents'], w: 'Always <b>to</b> some extent.' },
  { f: 'Everyone <s>always learns</s> better with music.', ops: ['tends to learn', 'always is learning', 'tend to learn'], w: 'Too sure: <b>tends to learn</b>.' },
  { f: 'It is arguably the most famous theory.', ops: ['Nothing. It’s fine.', 'argue', 'arguing'], w: 'Five problems and one good sentence.' }
];

var VIDA = [
  { k: 'LEARNING', q: 'When do you learn best?', fup: 'What’s your evidence?', st: ['I tend to learn best when …'], ex: 'I tend to learn best when I teach somebody else.' },
  { k: 'HIDDEN SKILL', q: 'What are you better at than people think?', fup: 'When did you notice?', st: ['I seem to be better at … than …'], ex: 'I seem to be better at directions than my friends.' },
  { k: 'SCHOOL', q: 'Is school a good measure of intelligence?', fup: 'What does it miss?', st: ['To some extent, because …'], ex: 'To some extent, because it measures memory more than ideas.' },
  { k: 'THE SMARTEST', q: 'What is the smartest thing a person can do?', fup: 'Do you do it?', st: ['Arguably, the smartest thing is …'], ex: 'Arguably, the smartest thing is to ask for help early.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  nm: { num: -1, n: 0, foi: {} }, af: {}, bl: { n: 0, esc: -1 }, fo: { n: 0, esc: -1 }, ev: {}, cr: {}, db: { n: 0, esc: -1 }, er: { n: 0, esc: -1 }, vida: { sel: -1, foi: {} } };

/* a balança: a afirmação à esquerda, a evidência à direita */
function balanca(estado, peso, rotA, rotB) {
  var ang = estado === 'ok' ? 0 : estado === 'forte' ? -12 : estado === 'forma' ? 0 : -16;
  var tr = estado === 'forma' ? ' treme' : '';
  var pesos = ''; for (var i = 0; i < Math.round(peso / 10); i++) pesos += '<rect class="sh-peso" x="' + (318 + (i % 5) * 14) + '" y="' + (78 - Math.floor(i / 5) * 14) + '" width="12" height="12" rx="2"/>';
  return '<div class="sh-bal' + tr + (estado === 'ok' ? ' nivel' : '') + '"><svg viewBox="0 0 440 230" aria-hidden="true">'
    + '<path class="sh-pe" d="M220 200 L200 220 L240 220 Z"/><line class="sh-poste" x1="220" y1="60" x2="220" y2="205"/>'
    + '<g class="sh-braco" style="transform:rotate(' + ang + 'deg);transform-origin:220px 60px"><line x1="60" y1="60" x2="380" y2="60"/>'
    + '<g><line class="sh-fio" x1="70" y1="60" x2="70" y2="96"/><line class="sh-fio" x1="70" y1="60" x2="110" y2="96"/><path class="sh-prato a" d="M40 96 Q90 120 140 96 Z"/><text x="90" y="88" text-anchor="middle" class="sh-t a">CLAIM</text></g>'
    + '<g><line class="sh-fio" x1="370" y1="60" x2="370" y2="96"/><line class="sh-fio" x1="370" y1="60" x2="330" y2="96"/><path class="sh-prato b" d="M300 96 Q350 120 400 96 Z"/>' + pesos + '</g></g>'
    + '<circle cx="220" cy="60" r="7" class="sh-eixo"/></svg>'
    + '<div class="sh-leg"><span class="a">CLAIM · ' + (rotA || '100%') + '</span><span class="b">EVIDENCE · ' + (rotB || peso + '%') + '</span></div></div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="sh-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
function lista(dados, est, acao, rotulos) {
  return dados.map(function (x, i) { var foi = est[i], ok = foi === x[1]; return '<div class="sh-tf vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="sh-fs">' + rotulos.map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('');
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · TEND TO · SEEM TO · ARGUABLY</span><h1>Not Your <b>Shoe Size</b></h1>'
    + '<p class="sub">“Intelligence is fixed.” 100%, and probably wrong. <b>Intelligence seems to change, to some extent.</b> Now the claim weighs what the evidence weighs.</p>'
    + '<div class="chipsx"><span class="pilula">tend to + verb</span><span class="pilula">seem to + verb</span><span class="pilula">arguably · to some extent</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Put a claim on the scale</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="sh-frase vd"><s>Intelligence is fixed.</s></div>' + balanca('forte', 40) + '</div></div>';
};

R.numero = function (c) {
  var e = S.nm;
  var fila = '<div class="sh-regua">' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return '<button type="button" class="sh-num' + (e.num === n ? ' on' : '') + '" data-a="nm-n" data-n="' + n + '">' + n + '</button>'; }).join('') + '</div>';
  if (e.num < 0) return cab(c) + fila + '<p class="dica-aluno" style="text-align:center">No scale, no explanation yet. Just tap a number.</p>';
  return cab(c) + fila + sequencia({ est: 'o', rot: '', t: '', p: '' }, NUMERO, e, 'nm', 'Keep your number. It comes back at the end, with better words around it.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the number and the first defense exactly. “I am smart”, “I am bad at math”: don’t correct yet.</p>';
};

R.afirma = function (c) {
  var e = S.af, ouviu = (S.ouviu || {})['v-claim.mp3'], todos = AFIRMA.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="sh-ouve vd"><div class="toca-linha">' + tocar('v-claim.mp3') + '<b>A SPEAKER</b></div>' + transcricao('v-claim.mp3', TR['v-claim.mp3']) + '</div>'
    + (todos ? '<p class="aprova">Three said, three invented. The invented ones are the ones people quote.</p>' : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? lista(AFIRMA, e, 'af', [['sim', 'SAID'], ['nao', 'NOT SAID']]) : '<p class="dica-aluno">Play it first.</p>') + '</div></div>';
};

R.balanca = function (c) {
  var e = S.bl, n = e.n, fim = n >= BALANCA.length;
  if (fim) return cab(c) + trilha(BALANCA, n) + '<div class="foco"><div class="pergunta vd"><small>FIVE CLAIMS</small><h2>None of them stayed at 100%, and none fell to zero. Now one at 90% and one at 20%.</h2></div></div>';
  var x = BALANCA[n], tipo = e.esc >= 0 ? x.ops[e.esc][1] : '', ok = tipo === 'ok';
  return cab(c) + trilha(BALANCA, n) + '<div class="mesa-c"><div class="lado-l">' + balanca(tipo || 'cru', x.peso, ok ? 'balanced' : '100%')
    + '<div class="sh-cartas"><div class="sh-c a vd"><small>THE CLAIM · 100%</small><p>“' + x.claim + '”</p></div><div class="sh-c b vd"><small>THE EVIDENCE</small><p>' + x.ev + '</p></div></div></div>'
    + '<div class="lado-l"><p class="sh-rot">SAY IT SO IT BALANCES</p>' + tres('bl', x.ops.map(function (o) { return o[0]; }), e.esc, n + 1)
    + (ok ? '<div class="sh-linha-ok"><p class="aprova">Level. As strong as the evidence, and no stronger.</p><button type="button" class="btn" data-a="bl-prox">Next claim</button></div>'
      : tipo === 'forte' ? '<p class="recusa">It tips over: still too sure for this evidence.</p>' : tipo === 'forma' ? '<p class="recusa">The scale shakes: check the form after the hedge.</p>' : '<p class="so-prof dica-aluno">The target is the evidence, not maximum doubt. Ask: all people, or most people?</p>') + '</div></div>';
};

R.forma = function (c) {
  var e = S.fo, n = e.n, fim = n >= FORMA.length;
  if (fim) return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Same tools, same shape. Now a true sentence with each hedge.</h2></div></div>';
  var x = FORMA[n], ok = e.esc === 0;
  return cab(c) + trilha(FORMA, n) + '<div class="foco"><div class="balao vd"><p>' + x.a + '<u>' + (ok ? x.ops[0] : '_____') + '</u>' + x.b + '</p></div>' + tres('fo', x.ops, e.esc, n + 2, 'linha')
    + (ok ? '<div class="sh-linha-ok centro"><p class="aprova">Say the whole sentence.</p><button type="button" class="btn" data-a="fo-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">Look at the subject, then at what comes after the hedge.</p>' : '') + '</div>';
};

R.evid = function (c) {
  var e = S.ev, todos = EVID.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="sh-lista">' + lista(EVID, e, 'ev', [['claim', 'CLAIM'], ['evid', 'EVIDENCE']]) + '</div>'
    + (todos ? '<p class="aprova" style="text-align:center">Three claims, three pieces of evidence. The claims needed a hedge. Hedge them now, out loud.</p>' : '<p class="dica-aluno" style="text-align:center">Did somebody measure or see something? Then it’s evidence.</p>');
};

R.critico = function (c) {
  var e = S.cr, ouviu = (S.ouviu || {})['v-critic.mp3'], todos = CRITICO.every(function (x, i) { return e[i] === x[1]; });
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="sh-ouve vd"><div class="toca-linha">' + tocar('v-critic.mp3') + '<b>THE CRITIC</b></div>' + transcricao('v-critic.mp3', TR['v-critic.mp3']) + '</div>'
    + (todos ? '<p class="aprova">The critic hedged too: “may not buy us anything.” Nobody said the abilities are fake.</p>' : '') + '</div>'
    + '<div class="lado-l">' + (ouviu ? lista(CRITICO, e, 'cr', [['sim', 'SAID'], ['nao', 'NOT SAID']]) : '<p class="dica-aluno">Play it first. The critic is more careful than you expect.</p>') + '</div></div>';
};

R.debate = function (c) {
  var e = S.db, n = e.n, fim = n >= DEBATE.length;
  if (fim) return cab(c) + trilha(DEBATE, n) + '<div class="foco"><div class="pergunta vd"><small>THREE CLAIMS</small><h2>Three answers the evidence can live with. Now swap: you state a claim at 100%, your teacher hedges it.</h2></div></div>';
  var x = DEBATE[n], tipo = e.esc >= 0 ? x.ops[e.esc][1] : '', ok = tipo === 'ok';
  return cab(c) + trilha(DEBATE, n) + '<div class="mesa-c"><div class="lado-l"><div class="sh-c a vd"><small>YOUR TEACHER · 100% SURE</small><p>“' + x.claim + '”</p></div>' + (ok ? '<div class="pergunta vd ja"><small>WHAT YOU REALLY THINK</small><h2>' + x.meu + '</h2></div>' : balanca(tipo || 'cru', 45).replace('sh-bal', 'sh-bal mini')) + '</div>'
    + '<div class="lado-l">' + tres('db', x.ops.map(function (o) { return o[0]; }), e.esc, n + 3)
    + (ok ? '<p class="so-prof dica-aluno">Argue the other side once and let the student respond.</p><div><button type="button" class="btn" data-a="db-prox">Next claim</button></div>' : tipo === 'forte' ? '<p class="recusa">Back to 100%, just on the other side. Turn it down.</p>' : tipo === 'forma' ? '<p class="recusa">Check the form after the hedge.</p>' : '') + '</div></div>';
};

R.erros = function (c) {
  var e = S.er, n = e.n, fim = n >= ERROS.length;
  if (fim) return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="pergunta vd"><small>SIX SENTENCES</small><h2>Right form, right weight. Say line 1 at 90%, then at 30%.</h2></div></div>';
  var x = ERROS[n], ok = e.esc === 0;
  return cab(c) + trilha(ERROS, n) + '<div class="foco"><div class="balao vd"><p>' + x.f + '</p></div>' + tres('er', x.ops, e.esc, n + 3, 'linha')
    + (ok ? '<div class="sh-linha-ok centro"><p class="aprova">' + x.w + ' Say the whole sentence.</p><button type="button" class="btn" data-a="er-prox">Next</button></div>' : e.esc > 0 ? '<p class="recusa" style="text-align:center">The form after the hedge? And can anyone prove this at 100%?</p>' : '') + '</div>';
};

R.vida = function (c) { return cartasPessoais(c, VIDA, S.vida, 'vida', ['Because once …', 'For example, …', 'I’m not sure, but …']); };

R.fim = function (c) {
  var num = S.nm.num >= 0 ? S.nm.num : 7;
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I’d say I’m arguably a ' + num + '. I tend to be good at …, but …\nI seem to …\nTo some extent, …', 'Your number',
    ['tend to', 'seem to', 'arguably', 'to some extent'], ['YOUR NUMBER, BELOW 100%', 'Your number from scene I (' + num + '), defended with at least two hedges and one piece of evidence.'])
    + '<div class="lado-fim">' + balanca('ok', 60, 'your number', 'your evidence')
    + '<div class="grande vd"><span><u>tend to / seem to</u> + bare verb</span><span><u>arguably</u> before the claim</span><span><u>to some extent</u> · always TO</span><span>not as strong as you feel: as strong as the evidence</span><span>not <s>tend to being</s>, not <s>seems be</s></span></div>'
    + mostra('fim', 'I’d say I’m arguably a seven. I tend to be good at solving problems, but I forget names.<br>I seem to learn faster when I teach somebody.<br>To some extent, school measured that, but not everything.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['nm-n'] = function (b, n) { S.nm.num = n; };
TOQUES.af = function (b, n, v) { S.af[n] = v; };
TOQUES.bl = function (b, n) { S.bl.esc = n; };
TOQUES['bl-prox'] = function () { S.bl = { n: S.bl.n + 1, esc: -1 }; };
TOQUES.fo = function (b, n) { S.fo.esc = n; };
TOQUES['fo-prox'] = function () { S.fo = { n: S.fo.n + 1, esc: -1 }; };
TOQUES.ev = function (b, n, v) { S.ev[n] = v; };
TOQUES.cr = function (b, n, v) { S.cr[n] = v; };
TOQUES.db = function (b, n) { S.db.esc = n; };
TOQUES['db-prox'] = function () { S.db = { n: S.db.n + 1, esc: -1 }; };
TOQUES.er = function (b, n) { S.er.esc = n; };
TOQUES['er-prox'] = function () { S.er = { n: S.er.n + 1, esc: -1 }; };
