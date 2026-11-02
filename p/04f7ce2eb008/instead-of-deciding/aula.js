/* ============================================================
   INSTEAD OF DECIDING · THE -ING GATE · LIVE CLASS  06/10/2026
   Main series B2 · preposição + -ing: instead of / without / after /
   before + -ing; verbo + preposição + -ing (insist on, succeed in, give
   up, think about); os TOs que são preposição (look forward to, be used
   to, object to): teste do IT. Erros: instead of decide, without to
   know, look forward to hear, insisted to pay, succeeded to open.
   O MUNDO (da aula velha): hábitos com o celular, sem terapia; as seis
   vozes (v1–v6) mantidas e conferidas no faster-whisper em 06/10 (batem;
   "eleven" fica por extenso como a voz diz); a noite das 7 às 10.
   A CARA (nova; a velha era a peneira clara): o PORTÃO DA PREPOSIÇÃO —
   o verbo chega como bloco, passa pelo portão e sai com a etiqueta -ING
   presa; e o RELÓGIO DA NOITE, um arco de 7 às 10 que acende hora a hora
   (o feed infinito do celular para quando a noite tem plano).
   Fila: FILA-LIVE-386.md · 123.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'quarto' },
  { k: 'abre', est: 'o', min: 7, img: 'quarto', rot: 'I · Instead Of', t: 'Think of something you did this week instead of making a decision.', p: 'Tap what you did. Then answer out loud.' },
  { k: 'alcance', est: 'o', min: 7, img: 'celular', rot: 'II · Who Could Have Told You', t: 'Six things went wrong. For most of history, only some could ever reach you.', p: 'Read it out loud. Tap NEAR (someone could walk over and tell you) or FAR (nobody could).' },
  { k: 'portao', est: 'f', min: 7, img: 'peneira', rot: 'III · The Gate', t: 'Tuesday, 11:40 PM. Nina writes a note to herself.', p: 'Read the note out loud. Tap every verb that comes right after a preposition. Then finish the rule.' },
  { k: 'dois', est: 'f', min: 6, img: 'peneira', rot: 'IV · Two Kinds of TO', t: 'Some TOs want a verb. Some are prepositions and want -ING.', p: 'Say the sentence out loud: a verb or -ING after the TO? Tap Check. Then look at the IT test.' },
  { k: 'vozes', est: 'l', min: 7, img: 'celular', rot: 'V · Six Voices', t: 'Six people say one thing each about their phone.', p: 'Play a voice. Build your question to that person out loud. Tap Check. Then ask it: your teacher answers.' },
  { k: 'noite', est: 'o', min: 7, img: 'poltrona', rot: 'VI · The Evening Plan', t: '7 PM to 10 PM. A real evening, without endless scrolling.', p: 'Say the plan for each hour out loud. Tap Check. Then answer the question about your own evening.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'peneira', rot: 'VII · Stuck at the Gate', t: 'Six sentences are stuck at the gate.', p: 'Say each sentence the right way, out loud. Then tap Check.' },
  { k: 'vida', est: 'o', min: 7, extra: 1, img: 'quarto', rot: 'VIII · About You', t: 'Four cards about your habits.', p: 'Tap a card. Answer with the frame, then add a detail.' },
  { k: 'fim', est: 'w', min: 6, img: 'poltrona', rot: 'IX · What Gets Through', t: 'Your sentence from scene I, and tonight.', p: 'Write it through the gate. It goes to your My notes.' }
];

var TR = {
  'v1.mp3': 'I open the same three apps in the same order. I do not remember choosing that order.',
  'v2.mp3': 'There is a message from my brother from eleven days ago. I read it the day it came.',
  'v3.mp3': 'I put my phone in the other room to study, then I go and get it to check the time.',
  'v4.mp3': 'I refresh the page. Nothing has changed. I refresh it again.',
  'v5.mp3': 'My daughter set it all up for me, now I know what is happening everywhere, and I sleep the same.',
  'v6.mp3': 'Everyone talks about putting the phone down. Nobody says what to pick up instead. That is the part nobody has an answer for.'
};

var COISAS = ['scrolling', 'watching videos', 'cleaning the house', 'reading the news', 'sleeping', 'checking messages'];
var ABRE = [
  { q: 'What were you supposed to decide?', fup: 'Is it decided now?', st: ['I was supposed to decide …'], ex: 'I was supposed to decide about a new job.' },
  { q: 'How long did you spend on it instead?', fup: 'Was it worth it?', st: ['About … hours.'], ex: 'About two hours. Easily.' },
  { q: 'What happened to the decision in the end?', fup: 'What will you do next time?', st: ['In the end, …'], ex: 'In the end, I decided nothing and went to bed.' }
];

var ALCANCE = [
  ['a pan caught fire in your kitchen', 'perto'], ['the neighbor’s roof came down in the storm', 'perto'], ['a factory shut down on another continent', 'longe'],
  ['the bakery on your street closed for the day', 'perto'], ['a flood on an island you can’t find on a map', 'longe'], ['a company you never used lost its customers’ data', 'longe']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* III · o bilhete da Nina (texto nosso) → a regra. "looking" em "really looking forward" é a pegadinha: não vem depois de preposição */
var CARTA = { de: 'Note to self · Tuesday, 11:40 PM', assina: 'Nina',
  txt: 'Another night on the sofa. Instead of [[deciding]] about the new job, I watched forty videos. I went to bed without [[answering]] Leo, and after [[reading]] the news, I couldn’t sleep. So, a new plan. Leo insists on [[cooking]] for me on Friday, and I’m really looking forward to [[seeing]] him. Before [[going]] to bed tomorrow, I’ll put my phone in the kitchen. I’m not used to [[living]] without it. Will I succeed in [[changing]] one habit? We’ll see.' };
var REGRA = [
  { a: 'instead of · without · after · before + ', par: ['-ing', 'to + verb'], c: 0, b: ': without <b>answering</b>' },
  { a: 'Some verbs bring their own preposition: insist ', par: ['to', 'on'], c: 1, b: ' cooking · succeed in changing' },
  { a: 'Some TOs are prepositions: looking forward to ', par: ['see', 'seeing'], c: 1, b: ' him' },
  { a: 'The test: “I’m used to <b>it</b>” works, so this TO is a ', par: ['preposition', 'verb'], c: 0, b: ' → -ING' }
];
var PRESA = 'instead of · without · after · before + <b>-ing</b><br>insist <b>on</b> · succeed <b>in</b> + -ing<br>look forward <b>to</b> · be used <b>to</b> + -ing<br>Can <b>it</b> follow the TO? Then -ing.';

/* IV · dois tipos de TO: fala primeiro, o teste do IT acende em cima */
var DOIS = [
  { pista: 'I want to · <b>leave</b> · earlier', resp: 'I want to <b>leave</b> earlier.', it: 'I want to it', prep: 0, depois: 'What do you want to change this year?' },
  { pista: 'I’m used to · <b>work</b> · alone', resp: 'I’m used to <b>working</b> alone.', it: 'I’m used to it', prep: 1, depois: 'What are you used to doing alone?' },
  { pista: 'We decided to · <b>cancel</b> · the trip', resp: 'We decided to <b>cancel</b> the trip.', it: 'We decided to it', prep: 0, depois: 'What did you decide to do last weekend?' },
  { pista: 'She objects to · <b>work</b> · on weekends', resp: 'She objects to <b>working</b> on weekends.', it: 'She objects to it', prep: 1, depois: 'What do you object to doing, at work or at home?' },
  { pista: 'They plan to · <b>move</b> · in June', resp: 'They plan to <b>move</b> in June.', it: 'They plan to it', prep: 0, depois: 'What do you plan to do in June?' },
  { pista: 'I look forward to · <b>hear</b> · from you', resp: 'I look forward to <b>hearing</b> from you.', it: 'I look forward to it', prep: 1, depois: 'What are you looking forward to doing this year?' }
];

/* V · as seis vozes numa folha: tocar, montar a pergunta, Check, perguntar */
var VOZES = [
  { au: 'v1.mp3', quem: 'A woman in her thirties', p: '(ever · think about · change · that order)?', r: 'Do you ever think about <b>changing</b> that order?' },
  { au: 'v2.mp3', quem: 'A man who works nights', p: '(what · stop you from · answer · it)?', r: 'What is stopping you from <b>answering</b> it?' },
  { au: 'v3.mp3', quem: 'A student', p: '(ever · end up · study · without · check · it)?', r: 'Do you ever end up studying without <b>checking</b> it?' },
  { au: 'v4.mp3', quem: 'A woman waiting on a result', p: '(what · look forward to · see · there)?', r: 'What are you looking forward to <b>seeing</b> there?' },
  { au: 'v5.mp3', quem: 'A man in his sixties', p: '(get used to · know · all of it)?', r: 'Have you gotten used to <b>knowing</b> all of it?' },
  { au: 'v6.mp3', quem: 'Someone who disagrees', p: '(what · insist on · do · with that hour)?', r: 'What would you insist on <b>doing</b> with that hour?' }
];

/* VI · a noite: fala primeiro, o relógio acende hora a hora */
var HORAS = [
  { h: '7 PM', pista: '<b>instead of</b> · eat in front of a screen · cook something', resp: 'Instead of <b>eating</b> in front of a screen, I’ll cook something.', depois: 'What will you do at 7 tonight, instead of what you usually do?' },
  { h: '8 PM', pista: '<b>after</b> · wash the dishes · call my sister', resp: 'After <b>washing</b> the dishes, I’ll call my sister.', depois: 'Who will you call tonight, and after doing what?' },
  { h: '9 PM', pista: 'read for an hour · <b>without</b> · check my phone', resp: 'I’ll read for an hour without <b>checking</b> my phone.', depois: 'What can you do for an hour without checking your phone?' },
  { h: '10 PM', pista: '<b>before</b> · go to bed · put the phone in the kitchen', resp: 'Before <b>going</b> to bed, I’ll put the phone in the kitchen.', depois: 'What will you do tonight before going to bed?' }
];

/* VII · presos no portão: uma parte errada, o aluno diz a frase que passa */
var ERROS = [
  { f: 'I scrolled for hours instead of <u>decide</u>.', r: 'deciding' },
  { f: 'She left without <u>to know</u> the answer.', r: 'knowing' },
  { f: 'I look forward to <u>meet</u> you.', r: 'meeting' },
  { f: 'He insisted <u>to pay</u> for dinner.', r: 'on paying' },
  { f: 'They succeeded <u>to open</u> the file.', r: 'in opening' },
  { f: 'I gave up <u>to check</u> the news at night.', r: 'checking' }
];

var VIDA = [
  { k: 'BEFORE SLEEP', q: 'What do you do before going to sleep?', fup: 'And the phone? Where is it?', st: ['Before going to sleep, I usually …'], ex: 'Before going to sleep, I usually read two pages.' },
  { k: 'NEVER GIVE UP', q: 'What could you never give up doing?', fup: 'Why that one?', st: ['I could never give up …'], ex: 'I could never give up drinking coffee in the morning.' },
  { k: 'THIS MONTH', q: 'What are you looking forward to this month?', fup: 'What will you do there?', st: ['I’m looking forward to …'], ex: 'I’m looking forward to seeing my cousins.' },
  { k: 'NO THINKING', q: 'What do you do without thinking?', fup: 'Would you like to change it?', st: ['I often … without thinking.'], ex: 'I often check my email without thinking.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { tema: '', n: 0, foi: {} }, al: {}, vida: { sel: -1, foi: {} } };

/* o portão: o verbo entra como bloco e sai com a etiqueta -ING */
function portao(prep, verbo, passou, ing) {
  return '<div class="dm-portao' + (passou ? ' passou' : '') + '"><span class="dm-bloco entra">' + verbo + '</span><span class="dm-arco"><i></i><b>' + prep.toUpperCase() + '</b><i></i></span><span class="dm-bloco sai">' + (passou ? ing.slice(0, -3) + '<em>ing</em>' : '?') + '</span></div>';
}
/* o relógio da noite: um arco das 7 às 10 que acende hora a hora */
function relogio(n) {
  var seg = '', rot = '', cx = 160, cy = 150, r = 120;
  for (var i = 0; i < 4; i++) {
    var a0 = Math.PI * (1 - i / 4) - .04, a1 = Math.PI * (1 - (i + 1) / 4) + .04;
    var x0 = cx + r * Math.cos(a0), y0 = cy - r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1);
    seg += '<path class="dm-seg' + (i < n ? ' aceso' : '') + (i === n ? ' agora' : '') + '" d="M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' A' + r + ' ' + r + ' 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + '"/>';
    var am = Math.PI * (1 - (i + .5) / 4), xl = cx + (r - 34) * Math.cos(am), yl = cy - (r - 34) * Math.sin(am) + 4;
    rot += '<text x="' + xl.toFixed(1) + '" y="' + yl.toFixed(1) + '" text-anchor="middle" class="' + (i < n ? 'aceso' : '') + '">' + HORAS[i].h + '</text>';
  }
  return '<div class="dm-relogio"><svg viewBox="0 0 320 170" aria-hidden="true">' + seg + rot + '<text x="160" y="148" text-anchor="middle" class="dm-meio">' + (n >= 4 ? 'PLANNED' : n + ' / 4') + '</text></svg></div>';
}
/* o teste do IT (cena IV): acende quando o aluno toca Check */
function testeIt(i, ver) {
  if (i < 0) return '<div class="dm-it vd sim"><small>THE IT TEST</small><b>If IT can follow the TO, the TO is a preposition: -ING.</b></div>';
  var x = DOIS[i];
  return '<div class="dm-it vd' + (ver ? (x.prep ? ' sim' : ' nao') : '') + '"><small>THE IT TEST</small><b>' + (ver ? x.it + (x.prep ? '. ✓ It works: a preposition, so -ING.' : '? ✗ No: this TO wants a verb.') : 'Say it with IT after the TO. Does it work?') + '</b></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · PREPOSITION + -ING</span><h1>Instead of <b>Deciding</b></h1>'
    + '<p class="sub"><b>I spent the evening scrolling instead of deciding anything.</b> After a preposition, a verb only gets through with -ING. <i>Instead of decide</i> stays outside.</p>'
    + '<div class="chipsx"><span class="pilula">instead of · without · after</span><span class="pilula">insist on · succeed in</span><span class="pilula">look forward to + -ing</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the gate</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + portao('instead of', 'decide', 1, 'deciding') + relogio(2) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="dm-temas">' + COISAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="ab-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap what you really did.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your answer. At the end it comes back as one sentence with INSTEAD OF.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Write the first answer exactly. Expect “instead of decide”. Don’t correct yet.</p>';
};

R.alcance = function (c) {
  var e = S.al, todos = ALCANCE.every(function (x, i) { return e[i] === x[1]; });
  var perto = ALCANCE.filter(function (x, i) { return e[i] === 'perto' && x[1] === 'perto'; }).length, longe = ALCANCE.filter(function (x, i) { return e[i] === 'longe' && x[1] === 'longe'; }).length;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + ALCANCE.map(function (x, i) { var foi = e[i], ok = foi === x[1]; return '<div class="dm-al vd' + (foi ? (ok ? ' certo' : ' errado') : '') + '"><span>' + x[0] + '</span><div class="dm-fs">' + [['perto', 'NEAR'], ['longe', 'FAR']].map(function (o) { return '<button type="button" class="pilula' + (foi === o[0] ? (ok ? ' certo' : ' errado') : '') + '" data-a="al" data-n="' + i + '" data-v="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>'
    + '<div class="lado-l"><div class="dm-aneis"><div class="dm-anel fora"><small>FAR · NOBODY COULD TELL YOU</small><b>' + longe + '</b></div><div class="dm-anel dentro"><small>NEAR</small><b>' + perto + '</b></div></div>'
    + (todos ? '<p class="aprova">Three could reach you. The other three arrive in a second now, right next to the pan on fire.</p><p class="so-prof dica-aluno">Ask: what do you do after hearing news like that?</p>' : '<p class="dica-aluno">A world with no phones. Who could walk over with this news?</p>') + '</div></div>';
};

R.portao = function (c) {
  return cab(c) + FM.carta('gate', CARTA, REGRA, { toque: 'Tap every verb right after a preposition', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.dois = function (c) {
  return cab(c) + FM.fala('to2', DOIS, {
    rotulo: 'TO', regra: PRESA,
    lado: function (feitas, atual, ver) { return testeIt(atual, ver); },
    fim: 'Three TOs wanted a verb. Three were prepositions. Now say one true sentence of each kind.'
  });
};

R.vozes = function (c) {
  var ouviu = S.ouviu || {};
  return cab(c) + FM.pergunta('vozes', VOZES.map(function (x) {
    return { p: '<span style="display:flex;align-items:center;gap:10px;font-style:normal;margin-bottom:4px">' + tocar(x.au) + '<b style="font:700 13px var(--mono,var(--ui));letter-spacing:.08em;text-transform:uppercase;color:var(--t2)">' + x.quem + '</b></span>'
      + (ouviu[x.au] ? '<small style="display:block;font-style:normal;font-size:15px;line-height:1.5;color:var(--t2);margin-bottom:4px">“' + TR[x.au] + '”</small>' : '') + x.p, r: x.r };
  }), { titulo: 'Play a voice. Build your question to them.', regra: PRESA, depoisRot: 'Then one more', depois: ['Why?', 'Since when?', 'And what would you do instead?'] });
};

R.noite = function (c) {
  return cab(c) + FM.fala('noite', HORAS.map(function (x) { return { pista: '<span class="ano">' + x.h + '</span>' + x.pista, resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Hour', prox: 'Next hour', regra: PRESA,
    lado: function (feitas) { return relogio(feitas); },
    fim: 'Four plans, and every preposition carried an -ING. Now your real evening: what will stop you from doing it tonight?'
  });
};

R.erros = function (c) {
  return cab(c) + FM.erro('presos', ERROS, { titulo: 'One part is stuck. Say the sentence that gets through.', regra: PRESA });
};

R.vida = function (c) { return cartasPessoais(c, VIDA, S.vida, 'vida', ['Yes, because …', 'Not really, …', 'Instead of …, I …']); };

R.fim = function (c) {
  var tema = S.ab.tema || 'scrolling';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'This week I spent time ' + tema + ' instead of deciding …\nTonight, instead of …, I’ll …\nI’m looking forward to …', 'Your sentence',
    ['instead of', 'without', 'after', 'before', 'looking forward to', 'used to'], ['THROUGH THE GATE', 'What you did instead of deciding, what you’ll do tonight instead of scrolling, and what you’re looking forward to.'])
    + '<div class="lado-fim">' + portao('without', 'scroll', 1, 'scrolling')
    + '<div class="grande vd"><span><u>preposition + -ING</u> · instead of deciding, without knowing</span><span><u>verb + preposition + -ING</u> · insist on paying, succeed in opening</span><span><u>TO + -ING</u> · look forward to seeing, used to getting up</span><span>not <s>instead of decide</s>, not <s>without to know</s></span></div>'
    + mostra('fim', 'This week I spent hours watching videos instead of deciding about the trip.<br>Tonight, instead of scrolling, I’ll cook and call my sister.<br>I’m looking forward to sleeping well.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-t'] = function (b, n, v) { S.ab.tema = v; };
TOQUES.al = function (b, n, v) { S.al[n] = v; };
