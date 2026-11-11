/* ============================================================
   OUT OF LINE · THE SPOTLIGHT · LIVE CLASS  06/10/2026
   Main series B2 · inversão: palavra negativa na frente + auxiliar antes
   do sujeito (Never have I seen…); sem auxiliar, do/does/did + verbo
   puro (Rarely does she call); Hardly… when / No sooner… than; Had I
   known (o IF some). Erros: Never I have seen, Rarely she calls, did she
   finished, No sooner… when, If had I known.
   O MUNDO (da aula velha): retórica — o púlpito, o discurso de despedida.
   Os quatro áudios mantidos e conferidos no faster-whisper em 06/10: par-a
   e par-b batem; ganhou e demais eram transcrições RESUMIDAS na aula
   velha (com reticências) — aqui vai o texto inteiro que a voz diz,
   números por extenso. Sem vídeo.
   A CARA (nova; a velha era a fila de palavras no púlpito): o REFLETOR —
   as palavras da frase em fila no palco; tocar na palavra negativa a
   leva para a frente, sob o refletor; tocar no auxiliar o faz pular
   antes do sujeito. E o MEDIDOR DE FIGURINO no discurso: cada inversão
   pesa; mais de duas, e o discurso vira fantasia.
   Fila: FILA-LIVE-386.md · 131. Pasta piloto-inversion (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 10
   páginas. A auditoria: escolher entre três frases quase iguais (III, IV, VI,
   VIII, IX) e perguntas com três respostas escritas (V, VII). Agora: I o tema
   e as três perguntas falando + Check (escolhe + fala); II o discurso de
   despedida → a regra, e o palco acende quando a regra fecha (carta); III a
   forma errada com do/does/did (erro); IV dizer sem IF + Check (fala); V ouvir
   A e B e tocar a resposta (escolhe); VI ligar as duas metades (liga); VII
   verdade ou mentira sobre os dois áudios; VIII o discurso falado parte por
   parte, o medidor de figurino sobe a cada Check (fala); IX frases na ordem ou
   fora da ordem (separa). VIII deixa de ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'pulpito' },
  { k: 'abre', est: 'o', min: 7, img: 'plateia', rot: 'I · Never Before', t: 'Think of something you had never seen before, until that day.', p: 'Tap what it was. Say your answer out loud. Then tap Check.' },
  { k: 'gx', est: 'f', min: 4, img: 'pulpito', rot: 'II · The Flip', t: 'Watch the negative word jump to the front.', p: 'Flip each sentence. Notice where the helper goes. Then flip four on your own.' },
  { k: 'palco', est: 'f', min: 7, img: 'pulpito', rot: 'III · The Spotlight', t: 'A farewell speech at the pulpit. The negative word steps into the spotlight.', p: 'Read the speech out loud. Tap every inversion. Then finish the rule.' },
  { k: 'did', est: 'f', min: 6, img: 'pulpito', rot: 'IV · Nothing to Move', t: 'No helper in the sentence? Borrow one: do / does / did, and the verb goes plain.', p: 'One word is wrong in each line. Say it the right way out loud. Then tap Check.' },
  { k: 'semif', est: 'f', min: 6, img: 'microfone', rot: 'V · The IF Disappears', t: 'A formal third conditional can drop IF: If I had known → Had I known.', p: 'Read the sentence with IF. Say it without IF. Then tap Check.' },
  { k: 'peso', est: 'l', min: 7, img: 'microfone', rot: 'VI · Where the Weight Falls', t: 'The same sentence, twice. Same speaker, almost the same words.', p: 'Play both. Then tap your answers. Say both yourself.' },
  { k: 'metades', est: 'f', min: 6, img: 'plateia', rot: 'VII · Two Halves', t: 'Hardly … when. No sooner … than. The second event lands almost on top of the first.', p: 'Tap a first half, then its second half. Then say the whole sentence.' },
  { k: 'mereceu', est: 'l', min: 7, extra: 1, img: 'plateia', rot: 'VIII · Earned or Showing Off?', t: 'Two recordings, same grammar. One earned it.', p: 'Play both. True or lie? If it is a lie, say the truth.' },
  { k: 'discurso', est: 'o', min: 7, img: 'pulpito', rot: 'IX · One Minute at the Pulpit', t: 'A one-minute speech for a colleague who is leaving. Two inversions, no more.', p: 'Read your part. Say it out loud. Then tap Check: it joins the speech. Watch the costume meter.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'microfone', rot: 'X · Out of Order', t: 'Six sentences. Three are out of order.', p: 'Tap a sentence, then its box. Then say the fix for each one that is out of order.' },
  { k: 'fim', est: 'w', min: 6, img: 'plateia', rot: 'XI · Step Down', t: 'Your “never before” from scene I, at the pulpit.', p: 'Write it with the weight at the front, and once plainly. It goes to your My notes.' }
];

var TR = {
  'par-a.mp3': 'I have never seen a room go quiet like that.',
  'par-b.mp3': 'Never have I seen a room go quiet like that.',
  'ganhou.mp3': 'She took a department that had lost half its staff and rebuilt it in eleven months. Not only did she do it on the old budget, she did it without replacing a single person. Rarely have I seen work of that quality, and never from someone in their first year.',
  'demais.mp3': 'So, hardly had I got through the door when the dog started barking, and no sooner had I put my bag down than my sister rang. Never have I wanted a cup of tea more in my life.'
};

var COISAS = ['a place', 'a performance', 'a view', 'a storm', 'a crowd', 'an animal'];
/* I · as três perguntas, falando + Check (o exemplo e a pergunta de acompanhamento aparecem depois) */
var ABRE = [
  { pista: '<span class="ano">1</span>What was it, and where?', resp: 'For example: <b>It was</b> the sea, in Bahia. I was nine.', depois: 'How old were you?' },
  { pista: '<span class="ano">2</span>What made it different from anything before?<br><small style="font-size:.55em;color:var(--t2)">Say it with: I had never …</small>', resp: 'For example: <b>I had never</b> seen water that went on forever.', depois: 'What did you feel?' },
  { pista: '<span class="ano">3</span>Say it as strongly as you can, in one sentence.<br><small style="font-size:.55em;color:var(--t2)">Say it with: I had never …</small>', resp: 'For example: <b>I had never</b> seen anything so big in my life.', depois: 'Say it again, slower.' }
];

/* o palco da capa e do fim: as palavras em fila; o refletor na frente */
var PALCO = [
  { pal: ['I', 'have', 'never', 'seen', 'a room so quiet.'], fim: 'Never have I seen a room so quiet.' },
  { pal: ['We', 'have', 'rarely', 'had', 'a year like this.'], fim: 'Rarely have we had a year like this.' }
];

/* II · o discurso de despedida (texto nosso, no mundo do púlpito) → a regra */
var CARTA = { de: 'THE PULPIT · FAREWELL SPEECH · ROOM 4',
  txt: 'Friends, [[never have I seen]] a team like this one. [[Rarely have we had]] a year so hard. [[Hardly had we finished]] one project when the next one started. And [[not only did you finish]] everything, you did it with a smile. [[Never will I forget]] you.' };
var REGRA = [
  { a: 'The negative word (never, rarely, hardly) goes ', par: ['first', 'last'], c: 0 },
  { a: 'Then the helper (have, had, will) jumps ', par: ['before the subject', 'after the subject'], c: 0 },
  { a: 'In Never have I seen, the weight falls on ', par: ['the first word', 'the last word'], c: 0 },
  { a: 'This form belongs in ', par: ['a speech or a strong claim', 'every chat with a friend'], c: 0 },
  { a: 'In a short story, one inversion is ', par: ['enough', 'never enough'], c: 0 }
];
var PRESA = 'negative word <b>first</b><br>helper <b>before</b> the subject<br>Never <b>have I</b> seen…<br>no helper? <b>do / does / did</b> + plain verb<br><b>Had I</b> known = If I had known<br>Hardly … <b>when</b> · No sooner … <b>than</b>';

/* III · sem auxiliar: a forma errada (do / does / did + verbo puro) */
var DID = [
  { f: 'Rarely <u>she calls</u> me.', r: 'does she call' },
  { f: 'Not only <u>she finished</u>, she won.', r: 'did she finish' },
  { f: 'Seldom <u>I eat</u> out.', r: 'do I eat' },
  { f: 'Only later <u>did we realized</u> what happened.', r: 'did we realize' },
  { f: 'Little <u>did he knew</u> what was coming.', r: 'did he know' }
];

/* IV · sem IF: dizer a versão formal */
var SEMIF = [
  { pista: '<span class="ano">With IF</span>If I had known, I would have come.', resp: '<b>Had I known</b>, I would have come.' },
  { pista: '<span class="ano">With IF</span>If she had asked, we would have helped.', resp: '<b>Had she asked</b>, we would have helped.' },
  { pista: '<span class="ano">With IF</span>If we had left earlier, we would have made it.', resp: '<b>Had we left</b> earlier, we would have made it.' },
  { pista: '<span class="ano">With IF</span>If they had listened, none of this would have happened.', resp: '<b>Had they listened</b>, none of this would have happened.' }
];

/* V · os dois áudios: tocar A e B e tocar a resposta */
function pesoEsc() { return { formato: 'escolhe', titulo: 'Same speaker, almost the same words. What do you hear?', itens: [
  { p: 'Which one puts the heavy word first?', o: ['A', 'B'], c: 1, d: 'B: “Never” comes first, so it carries the weight.' },
  { p: 'In B, where does the weight fall?', o: ['At the front, on “Never”', 'At the end, on “that”', 'On “room”'], c: 0, d: 'At the front: the speaker steps up and makes a claim.' },
  { p: 'So what is the form for?', o: ['To put the heavy word first', 'To sound more polite', 'To make a question'], c: 0, d: 'A is a report. B is a claim, with the weight at the front.' }
] }; }

/* VI · ligar as duas metades (Hardly … when · No sooner … than) */
var METADES = { formato: 'liga', titulo: 'Match each first half to its second half.', pares: [
  ['Hardly had I sat down', 'when the phone rang.'],
  ['No sooner had she left', 'than it started to rain.'],
  ['Scarcely had we arrived', 'when the lights went out.'],
  ['No sooner had the door closed', 'than she started to laugh.'],
  ['Hardly had the words left my mouth', 'when I wanted them back.']
], ordemDireita: [3, 0, 4, 1, 2] };

/* VII · os dois áudios: verdade ou mentira (e a correção falada) */
var MERECEU = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it is a lie, say the truth.', itens: [
  { f: 'ONE is a speech in front of a big room. The inversions fit.', t: true },
  { f: 'TWO is a story for a friend. It sounds natural with so many inversions.', t: false, c: 'It is correct, but too much for a chat: it sounds like a costume.' },
  { f: 'The grammar in TWO is wrong.', t: false, c: 'Nothing is wrong. The grammar is right, the room is not.' },
  { f: 'A short story can take about ten inversions.', t: false, c: 'About one. After that, it sounds like a costume.' }
] };

/* VIII · o discurso falado parte por parte; o medidor de figurino sobe a cada Check */
var DISCURSO = [
  { txt: 'Rarely have I worked with someone so generous.', inv: 1, pista: '<span class="ano">Opening</span>Who are you talking about?<br><small style="font-size:.55em;color:var(--t2)">Start with: Rarely have I …</small>', resp: '<b>Rarely have I</b> worked with someone so generous.', depois: 'Who is the most generous person you know?' },
  { txt: 'She stayed late for everyone, and she never once complained.', inv: 0, pista: '<span class="ano">Middle</span>A plain sentence with a real example.<br><small style="font-size:.55em;color:var(--t2)">Save the weight: three inversions in a row would be a costume.</small>', resp: 'She stayed late for everyone, and she never once complained.', depois: 'What did she do that was generous?' },
  { txt: 'Not only did she make us better at our jobs, she made us better people.', inv: 1, pista: '<span class="ano">Close</span>One strong line for the end.<br><small style="font-size:.55em;color:var(--t2)">Start with: Not only did …</small>', resp: '<b>Not only did</b> she make us better at our jobs, she made us better people.', depois: 'Now say the whole speech once, with your own lines.' }
];

/* IX · frases na ordem ou fora da ordem */
var ERROS = { formato: 'separa', titulo: 'Is the sentence in line, or out of order? Tap a sentence, then its box.', itens: [
  { t: 'Never I have seen such a thing.', c: 0 }, { t: 'Rarely does she call me.', c: 1 }, { t: 'No sooner had I arrived when it started.', c: 0 },
  { t: 'Little did we know what was coming.', c: 1 }, { t: 'If had I known, I would have called.', c: 0 }, { t: 'Never will I forget that night.', c: 1 }
], caixas: ['Out of order · say the fix', 'In line'] };
var FIXES = ['Never <b>have I</b> seen such a thing.', 'No sooner had I arrived <b>than</b> it started.', '<b>Had I</b> known, I would have called.'];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {} };

/* o palco: as palavras em fila; o refletor na frente */
function palco(x, neg, aux, clicavel) {
  var p = x.pal, ordemP;
  if (neg && aux) ordemP = [2, 1, 0, 3, 4]; else if (neg) ordemP = [2, 0, 1, 3, 4]; else ordemP = [0, 1, 2, 3, 4];
  return '<div class="iv-palco' + (neg ? ' luz' : '') + '"><div class="iv-feixe"></div><div class="iv-fila">' + ordemP.map(function (i, pos) {
    var cls = 'iv-pal' + (i === 2 ? ' neg' : '') + (i === 1 ? ' aux' : '') + (i === 0 ? ' suj' : '') + (pos === 0 && neg ? ' frente' : '') + (i === 1 && aux ? ' pulou' : '');
    var at = clicavel ? ' data-a="pc" data-n="' + i + '"' : '';
    return '<' + (at ? 'button type="button"' : 'span') + ' class="' + cls + '"' + at + '>' + (pos === 0 && neg ? p[i].charAt(0).toUpperCase() + p[i].slice(1) : (i === 0 && neg ? p[i].toLowerCase().replace(/^i$/, 'I') : p[i])) + '</' + (at ? 'button' : 'span') + '>';
  }).join('') + '</div><div class="iv-chao"></div></div>';
}
/* o medidor de figurino */
function figurino(n) {
  var nivel = n <= 0 ? 0 : n <= 2 ? 1 : 2;
  return '<div class="iv-fig nivel' + nivel + '"><small>COSTUME METER</small><div class="iv-fig-barra">' + [0, 1, 2, 3, 4].map(function (i) { return '<i class="' + (i < n ? 'on' : '') + '"></i>'; }).join('') + '</div><b>' + (n === 0 ? 'PLAIN' : n <= 2 ? 'EARNED · ' + n + ' INVERSION' + (n > 1 ? 'S' : '') : 'COSTUME · ' + n + ' INVERSIONS') + '</b></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · INVERSION</span><h1>Out of <b>Line</b></h1>'
    + '<p class="sub"><i>I have never seen a room go quiet like that.</i> A report. <b>Never have I seen a room go quiet like that.</b> A claim, with the weight at the front, under the spotlight.</p>'
    + '<div class="chipsx"><span class="pilula">never have I</span><span class="pilula">not only did she</span><span class="pilula">had I known</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Step up to the pulpit</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + palco(PALCO[0], 1, 1, 0) + '</div></div>';
};

/* I · o tema (escolha pessoal) e as três perguntas falando */
R.abre = function (c) {
  var r = (S.fq && S.fq.tema && S.fq.tema.r) || {}, tema = r[0] != null ? COISAS[r[0]] : '';
  var esc = FM.escolhe('tema', { titulo: 'Something you had never seen before, until that day. What was it?', itens: [{ p: 'It was …', o: COISAS, c: -1, d: 'Keep it in mind: it steps up to the pulpit at the end.' }] });
  if (!tema) return cab(c) + esc + '<p class="dica-aluno" style="text-align:center">Tap what it was.</p>';
  return cab(c) + esc + FM.fala('ab', ABRE, { rotulo: 'Question', prox: 'Next question', diga: 'Say your answer out loud first',
    fim: 'Keep your strong sentence. At the end, it steps up to the pulpit.' })
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the strong sentence exactly. “Never I have seen …”: don’t correct yet.</p>';
};

/* II · o discurso → a regra; quando a regra fecha, o palco mostra a frase invertida */
R.palco = function (c) {
  var e = (S.fq && S.fq.disc && S.fq.disc.r) || {}, feitas = 0;
  REGRA.forEach(function (x, i) { if (e[i] === x.c) feitas++; });
  var pronta = feitas === REGRA.length;
  return cab(c) + palco(PALCO[0], pronta ? 1 : 0, pronta ? 1 : 0, 0)
    + FM.carta('disc', CARTA, REGRA, { toque: 'Tap every inversion (negative word + helper)', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.did = function (c) { return cab(c) + FM.erro('did', DID, { titulo: 'One word is wrong. Say it the right way.', regra: PRESA }); };

R.semif = function (c) {
  return cab(c) + FM.fala('semif', SEMIF, { rotulo: 'Line', prox: 'Next line', regra: PRESA, diga: 'Say it without IF first',
    fim: 'No IF, and nothing else changed. One about your own life: Had I known …' });
};

R.peso = function (c) {
  var ouviu = (S.ouviu || {})['par-a.mp3'] && (S.ouviu || {})['par-b.mp3'];
  var esq = '<div class="lado-l">' + [['par-a.mp3', 'A · PLAIN'], ['par-b.mp3', 'B · MARKED']].map(function (x) { return '<div class="iv-ouve vd"><div class="toca-linha">' + tocar(x[0]) + '<b>' + x[1] + '</b></div>' + transcricao(x[0], TR[x[0]]) + '</div>'; }).join('') + '</div>';
  var dir = !ouviu ? '<p class="dica-aluno">Play both, one after the other.</p>' : FM.ex('peso', pesoEsc());
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + dir + '</div></div>';
};

R.metades = function (c) {
  var e = (S.fq && S.fq.mt && S.fq.mt.par) || {}, todos = METADES.pares.every(function (x, i) { return e[i] === i; });
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('mt', METADES)
    + (todos ? '<p class="aprova" style="text-align:center">Five sentences. Now say each whole sentence out loud, then one true one from this week.</p>' : '<p class="dica-aluno" style="text-align:center">NO SOONER is a comparison: sooner … THAN. HARDLY and SCARCELY take WHEN.</p>') + '</div>' + FM.regra(PRESA) + '</div>';
};

R.mereceu = function (c) {
  var ouviu = (S.ouviu || {})['ganhou.mp3'] && (S.ouviu || {})['demais.mp3'];
  var esq = '<div class="lado-l">' + [['ganhou.mp3', 'ONE · AN AWARD SPEECH'], ['demais.mp3', 'TWO · TELLING A FRIEND']].map(function (x) { return '<div class="iv-ouve vd"><div class="toca-linha">' + tocar(x[0]) + '<b>' + x[1] + '</b></div>' + transcricao(x[0], TR[x[0]]) + '</div>'; }).join('') + '</div>';
  var dir = !ouviu ? '<p class="dica-aluno">Play both. Think about the room, not the grammar.</p>' : FM.ex('mr', MERECEU) + '<p class="aprova">You know the form, and you know when to leave it alone. Tell story TWO plainly.</p>';
  return cab(c) + '<div class="mesa-c">' + esq + '<div class="lado-l">' + dir + '</div></div>';
};

/* VIII · o discurso, parte por parte; o medidor e o texto crescem a cada Check */
R.discurso = function (c) {
  return cab(c) + FM.fala('disc2', DISCURSO, {
    rotulo: 'Part', prox: 'Next part', regra: PRESA, diga: 'Say your part out loud first',
    lado: function (feitas) {
      var partes = DISCURSO.slice(0, feitas), inv = partes.reduce(function (s, x) { return s + x.inv; }, 0);
      return '<div class="mesa-c"><div class="lado-l">' + figurino(inv) + '</div><div class="lado-l"><div class="iv-texto vd"><small>THE SPEECH SO FAR</small>' + (partes.length ? partes.map(function (x) { return '<p>' + x.txt + '</p>'; }).join('') : '<p class="vazio">…</p>') + '</div></div></div>';
    },
    fim: 'Two inversions, and a plain sentence in the middle so they land. Now deliver it with your own lines.'
  });
};

R.erros = function (c) {
  var e = (S.fq && S.fq.erros && S.fq.erros.em) || {}, ok = ERROS.itens.every(function (x, i) { return e[i] === x.c; });
  return cab(c) + '<div class="fm-com-regra"><div class="fm-mio">' + FM.ex('erros', ERROS)
    + (ok ? '<div class="pergunta vd ja"><small>THE FIXES</small><h2>' + FIXES.join('<br>') + '</h2></div><p class="aprova">Now say the plain version of two of them.</p>' : '<p class="dica-aluno" style="text-align:center">Then say the fix for each sentence that is out of order.</p>') + '</div>' + FM.regra(PRESA) + '</div>';
};

R.fim = function (c) {
  var r = (S.fq && S.fq.tema && S.fq.tema.r) || {}, tema = r[0] != null ? COISAS[r[0]] : 'a place';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Never had I seen ' + tema + ' like … until …\nI had never seen … (the plain version)\nHad I known …, I would have …', 'Your line',
    ['Never had I', 'Rarely have I', 'Not only did', 'Had I known', 'No sooner had'], ['YOUR LINE, AT THE PULPIT', 'Your “never before” with the weight at the front, the plain version for a chat, and one “Had I known …”.'])
    + '<div class="lado-fim">' + palco(PALCO[0], 1, 1, 0)
    + '<div class="grande vd"><span><u>negative + helper + subject</u> · Never have I …</span><span><u>no helper?</u> do / does / did + plain verb</span><span><u>Hardly … when</u> · <u>No sooner … than</u></span><span><u>Had I known</u> = If I had known</span><span>not <s>Never I have seen …</s></span></div>'
    + mostra('fim', 'Never had I seen the sea until I was nine.<br>I had never seen water that went on forever.<br>Had I known, I would have gone much earlier.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G7 · uma cena curta nova (k: gx) antes de palco.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'vira', titulo: 'The normal sentence, then the speech. Watch the words move.',
  frases: [
    { de: ['*I', '*have', 'never', 'seen', 'such courage', '.'], para: ['+Never', '*have', '*I', 'seen', 'such courage', '.'], d: 'The negative word goes first. The helper jumps before the subject.' },
    { de: ['She', 'rarely', '*calls', 'her father', '.'], para: ['+Rarely', '+does', 'she', '*call', 'her father', '.'], d: 'No helper? Add do, does or did. The verb is clean again.' },
    { de: ['+If I had', 'known', 'the truth', ',', 'I would have left', '.'], para: ['+Had I', 'known', 'the truth', ',', 'I would have left', '.'], d: 'The if disappears. Had goes before I.' }
  ],
  notaBotao: 'What moves?',
  nota: 'A negative word goes first, for weight: <b>Never</b>, <b>Rarely</b>, <b>Hardly</b>. Then the helper jumps before the subject: <b>have I</b>. With no helper: <b>do, does, did</b> + a clean verb: <b>Rarely does she call</b>.',
  pergunta: 'Your turn. Flip it out loud, then check.',
  treino: [
    { de: 'I have never heard such a speech.', r: 'Never <b>have I heard</b> such a speech.' },
    { de: 'He seldom gives a speech.', r: 'Seldom <b>does he give</b> a speech.' },
    { de: 'We had hardly sat down when the lights went out.', r: 'Hardly <b>had we sat</b> down when the lights went out.' },
    { de: 'If I had known, I would have come.', r: '<b>Had I known</b>, I would have come.' }
  ],
  uso: { p: 'Your turn. A farewell speech: one thing you have never done, and one thing you rarely do.', molde: ['Never have I …', 'Rarely do I …'], ex: 'Never have I felt so proud. Rarely do I speak in front of people.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_vira', GX_EXPLICA); };
