/* ============================================================
   THE OFFICE · THE DUNDIES · LIVE CLASS · WOLFLIX  07/10/2026
   WOLFLIX B2 · adjetivos extremos: absolutely / really / totally +
   extremo (absolutely terrified, freezing, exhausted, starving), very /
   a bit / extremely + normal (very scared, very cold); o extremo não
   aceita very, e o normal não aceita absolutely.
   Erros: very + extremo (very terrified, very exhausted), absolutely +
   normal (absolutely tired), more / -er com extremo (more freezing),
   a bit + extremo, extremely + extremo, too + extremo (too boiling).
   Catálogo WOLFLIX Live (07/10): família SITCOM, modo PLATEIA.
   A tela forte: os Dundies, a premiação caseira do escritório. Uma
   estante com oito troféus de plástico dourado, cada um com uma placa
   vazia; cada frase certa acende um troféu e grava na placa a categoria
   com o adjetivo extremo (Most Absolutely Terrified…), com o aplauso
   da plateia de mentira. No fim, a estante inteira brilhando.
   O AQUECIMENTO (aquece.js): a pilha, termine a frase. O FECHAMENTO
   (final.js): um minuto.
   O VÍDEO: OHZIHsXD5q8 (vídeo oficial Peacock “Most Watched Cold Opens”),
   tocando SÓ de 35:12 a 39:02 (o simulado de incêndio). Logo depois vem
   uma piada de RCP sobre a cor da pele de um personagem, fora da aula.
   Duas palavras com bipe. Falas conferidas na legenda (24/09).
   A CARA: noite de escritório, ouro dos troféus, vermelho do alarme;
   Bowlby One no título, Work Sans no texto, Special Elite nas placas.
   Fila: FILA-LIVE-386.md · 316.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'mundo', est: 'o', min: 8, img: 'escritorio', rot: 'I · Warm-up and The Interview', t: 'Before the clip: your extreme feelings, then a very serious man.', p: 'Answer three questions about your life. Then ask your teacher questions and find out who he is.' },
  { k: 'palavras', est: 'l', img: 'fumaca', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'fumaca', rot: 'III · The Clip', t: 'The Office. The fire drill.', p: 'Answer first. Watch the clip. Then two short tasks: tap ▶ to hear any moment again.' },
  { k: 'falas', est: 'l', img: 'fumaca', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'regra', est: 'f', min: 6, img: 'escritorio', rot: 'V · Absolutely, Not Very', t: 'Which words take very? Which take absolutely?', p: 'Sort the words into the two boxes. Then read the rule.' },
  { k: 'dundies', est: 'o', min: 7, img: 'capa', rot: 'VI · The Dundies', t: 'Six trophies on the shelf. Every right sentence wins one.', p: 'Read the category and the clue. Say the sentence out loud. Then tap Check.' },
  { k: 'escalas', est: 'o', min: 7, extra: 1, img: 'escritorio', rot: 'VII · Turn It Up', t: 'Six feelings. Normal and extreme.', p: 'Match each normal word to its extreme word. Then say both: very … / absolutely …' },
  { k: 'fim', est: 'o', min: 6, img: 'capa', rot: 'VIII · One Minute', t: 'One minute.', p: 'One minute.' }
];

var FILME = 'The Office', ANO = '2009';
var YT = 'OHZIHsXD5q8', DUR = 230, INI = 2112;

var ENCARTE = [
  ['The show', '<i>The Office</i> (US, 2005–2013) is a comedy about a paper company, filmed like a documentary. The boss, Michael, means well and gets almost everything wrong.'],
  ['The idea', 'Dwight gave a fire safety talk last week and nobody listened. So, to teach them, he starts a fire in the office himself, and locks the doors.'],
  ['The drill', 'Smoke, panic, people climbing out of windows, someone breaking into the vending machine. Then Dwight says: there is no fire. It was only a test.']
];

var ANTES = [
  { q: 'Have you ever been in a fire drill? Did people take it seriously?', h: 'Yes, at school … / No, never …' },
  { q: 'Who is the funniest person at your work or school?', h: 'It’s … because …' }
];
var DEPOIS = [
  { q: 'How did everyone feel during the drill? Use one extreme word.', h: 'They were absolutely …' },
  { q: 'Was Dwight right to do it? Why?', h: 'He was absolutely wrong / right because …' }
];

var TRECHOS = [
  { k: 'Nobody listened', ini: 2112, fim: 2160, ouvir: 'Why does Dwight do the drill?', sentido: 'Last week he gave a fire safety talk and nobody paid attention. Experience is the best teacher, he says.', gram: 'He was <b>absolutely furious</b>.' },
  { k: 'Something smoky', ini: 2160, fim: 2196, ouvir: 'What does someone smell?', sentido: 'Someone asks if anyone smells something smoky. The door handle is checked.', gram: 'The smoke was <b>really awful</b>.' },
  { k: 'Warm', ini: 2196, fim: 2226, ouvir: 'What question does Michael ask?', sentido: 'Someone says the handle is warm. Michael asks: what does warm mean?', gram: 'Warm? It was <b>boiling</b>!' },
  { k: 'Everyone for himself', ini: 2226, fim: 2290, ouvir: 'What does Michael say they are?', sentido: 'Michael says they are trapped and it is everyone for himself. Panic everywhere; someone is too heavy to lift.', gram: 'Everybody was <b>absolutely terrified</b>.' },
  { k: 'Only a simulation', ini: 2290, fim: 2340, ouvir: 'Was there a real fire?', sentido: 'Someone shouts that the fire is shooting at them. Then Dwight says: there is no fire. It was only a simulation.', gram: 'They were <b>exhausted</b>, and <b>furious</b>.' }
];

var TRAPS = [
  ['Extreme: no very', 'I was very terrified.', 'I was <b>absolutely terrified</b>.', 'absolutely / really / totally + extreme'],
  ['Normal: no absolutely', 'I was absolutely tired.', 'I was <b>very tired</b>. I was <b>absolutely exhausted</b>.', 'very / a bit / extremely + normal'],
  ['No -er, no more', 'It was more freezing than yesterday.', 'It was <b>absolutely freezing</b>, even worse than yesterday.', 'extreme words don’t compare'],
  ['Not too', 'The handle was too boiling.', 'The handle was <b>boiling</b>! It was <b>really hot</b>.', 'too + normal, never + extreme']
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
function comPlaca(corpo, regra) { return '<div class="fm-com-regra"><div class="fm-mio">' + corpo + '</div>' + FM.regra(regra) + '</div>'; }
var PRESA = 'very / a bit / extremely + <b>tired</b><br>absolutely / really / totally + <b>exhausted</b><br>no <s>very exhausted</s> · no <s>more freezing</s>';
/* III · antes: duas perguntas de opinião (toque + fala) */
var ANT = { formato: 'escolhe', titulo: 'Before you watch · tap one, then say why', itens: [
  { p: 'A fire drill at work: what do most people do?', o: ['Take it seriously', 'Laugh and talk', 'Stay at the desk'], c: -1, d: 'Say why. Try: Everybody is a bit … / Some people are absolutely …' },
  { p: 'A boss wants to teach a safety lesson. What is the best way?', o: ['A long PowerPoint', 'A real drill', 'A video'], c: -1, d: 'Say why. Try: I think … is better because …' }
] };
/* III · durante: a palavra errada e o motivo, cada um no minuto do clipe (35:12 = começo do clipe; legenda-dados.js) */
var VD_ERRO = { formato: 'erro', titulo: 'One word is wrong. Say the right one.', itens: [
  { f: '“Last week I gave a fire safety <u>speech</u>.”', r: 'talk', t: '35:19' },
  { f: '“Experience is the best <u>coach</u>.”', r: 'teacher', t: '35:32' },
  { f: '“Touch the <u>door</u>.”', r: 'handle', t: '36:35' },
  { f: '“There is no <u>smoke</u>.”', r: 'fire', t: '38:52' }
] };
var VD_ESC = { formato: 'escolhe', titulo: 'What happens? Tap the answer.', itens: [
  { p: 'Why does Dwight start the drill?', tm: '35:19', o: ['Nobody listened to his safety talk.', 'He wants a day off.', 'The office is cold.'], c: 0, d: 'He says experience is the best teacher.' },
  { p: 'Someone says the handle is warm. What does Michael ask?', tm: '36:41', o: ['“What does warm mean?”', '“Where is the key?”', '“Who has a phone?”'], c: 0, d: 'A very serious question in a very silly moment.' },
  { p: 'At the end, what is the truth?', tm: '38:52', o: ['There is no fire. It was a test.', 'The fire is in the hallway.', 'The fire is under control.'], c: 0, d: 'Everybody was absolutely terrified for nothing.' }
] };
/* III · depois: ponha o simulado na ordem */
var VD_ORD = { formato: 'ordem', toque: 'Tap the scenes in order: first, second, third…', ok: 'The green number is the right place.', itens: [
  { t: 'The handle is warm', n: 3, img: 'fumaca' },
  { t: 'Nobody listened', n: 1, img: 'escritorio' },
  { t: '“There is no fire.”', n: 5, img: 'capa' },
  { t: 'Somebody smells smoke', n: 2, img: 'fumaca' },
  { t: 'Everybody panics', n: 4, img: 'escritorio' }
] };
/* V · separe as palavras: very ou absolutely */
var SEP = { formato: 'separa', titulo: 'Sort the words. Which box does each one go to?', caixas: ['very + …', 'absolutely + …'], itens: [
  { t: 'tired', c: 0 }, { t: 'terrified', c: 1 }, { t: 'cold', c: 0 }, { t: 'starving', c: 1 }, { t: 'scared', c: 0 }, { t: 'boiling', c: 1 }
] };
/* VII · ligue o normal ao extremo */
var LIGA = { formato: 'liga', titulo: 'Match each normal word to its extreme word.', pares: [['tired', 'exhausted'], ['scared', 'terrified'], ['hungry', 'starving'], ['hot', 'boiling'], ['funny', 'hilarious'], ['big', 'enormous']], ordemDireita: [3, 0, 5, 2, 4, 1] };

/* os Dundies: o gesto forte */
var TROFEUS = [
  { cat: 'Most Terrified', pista: 'Michael · scared · extreme', resp: 'Michael was <b>absolutely terrified</b>.', depois: 'When were you absolutely terrified?' },
  { cat: 'Most Exhausted', pista: 'Stanley · tired · extreme', resp: 'Stanley was <b>absolutely exhausted</b>.', depois: 'What leaves you absolutely exhausted?' },
  { cat: 'Coldest Office', pista: 'the office · cold · normal', resp: 'The office was <b>very cold</b>.', depois: 'Is your office very cold or absolutely freezing?' },
  { cat: 'Hottest Handle', pista: 'the door handle · hot · extreme', resp: 'The door handle was <b>boiling</b>.', depois: 'What is absolutely boiling in your city?' },
  { cat: 'Most Furious', pista: 'Angela · angry · extreme', resp: 'Angela was <b>totally furious</b>.', depois: 'What makes you absolutely furious?' },
  { cat: 'Funniest Drill', pista: 'the drill · funny · extreme', resp: 'The drill was <b>absolutely hilarious</b>.', depois: 'What was absolutely hilarious this week?' }
];
var RECUSA = {
  very: 'An extreme word doesn’t take very: absolutely / really / totally terrified.',
  abs: 'Absolutely goes with extreme words. Normal word: very scared, or the extreme word: absolutely terrified.',
  bit: 'An extreme word is already 100%: absolutely exhausted, not a bit.',
  more: 'Extreme words don’t compare: really starving, absolutely awful.',
  too: 'Too goes with normal words (too hot). Boiling stands alone.',
  ext: 'Extremely + normal (extremely hot); the extreme word stands alone or with absolutely.'
};

var ESCALAS = [
  { k: 'Hungry', h: 'Say it normal, then extreme: hungry.', ex: 'I’m very hungry. Actually, I’m absolutely starving!' },
  { k: 'Tired', h: 'Monday morning: tired, or more?', ex: 'I’m very tired. By Friday, I’m absolutely exhausted.' },
  { k: 'Cold', h: 'Your office in summer?', ex: 'It’s very cold. In the meeting room, it’s freezing!' },
  { k: 'Funny', h: 'The funniest video you saw this month?', ex: 'It was very funny. No, it was absolutely hilarious.' },
  { k: 'Big', h: 'The biggest thing you have seen?', ex: 'The stadium was very big. The cruise ship was enormous!' },
  { k: 'Good', h: 'The best meal of your life?', ex: 'It was very good. It was absolutely delicious.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  video: { p: 0 }, lt: { sel: -1, viu: {} }, of: { n: 0, esc: -1 } };

/* a linha do vídeo: os tempos são do vídeo longo; o fotograma mostra a minutagem dentro do clipe (35:12 = 0:00) */
function onda(marcas, sel, acao) {
  var ims = []; L.forEach(function (x) { if (x.img && ims.indexOf(x.img) < 0) ims.push(x.img); });
  var fr = (marcas || []).map(function (x, i) {
    var r = x.ini - INI, t = Math.floor(r / 60) + ':' + ('0' + r % 60).slice(-2);
    var bg = ' style="--bg:url(\'' + img(ims[(i + 1) % ims.length]) + '\')"';
    var dentro = '<i class="tq-img"></i><b>' + t + '</b><span>' + x.k + '</span>';
    return acao ? '<button type="button" class="tq' + (sel === i ? ' on' : '') + '"' + bg + ' data-a="' + acao + '" data-n="' + i + '">' + dentro + '</button>' : '<span class="tq"' + bg + '>' + dentro + '</span>';
  }).join('');
  return '<div class="tira' + (acao ? ' grande' : '') + '" aria-hidden="' + (acao ? 'false' : 'true') + '"><div class="tira-furos"></div><div class="tira-q">' + fr + '</div><div class="tira-furos"></div></div>';
}
function tres(acao, ops, esc, semente) {
  return '<div class="of-ops">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).filter(function (o) { return esc !== 0 || o[1] === 0; }).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
/* a estante: oito troféus de plástico; os ganhos brilham em ouro e a placa ganha a categoria */
function estante(feitas, atual, nova) {
  var N = TROFEUS.length, fim = feitas >= N;
  var ts = TROFEUS.map(function (t, i) {
    var cls = i < feitas ? (nova && i === feitas - 1 ? ' ganho novo' : ' ganho') : (i === atual ? ' vez' : '');
    return '<div class="of-t' + cls + '"><svg viewBox="0 0 60 90" aria-hidden="true"><path class="of-taca" d="M14 8 H46 V22 C46 36 38 44 30 44 C22 44 14 36 14 22 Z"/><path class="of-alca" d="M14 14 C4 14 4 30 16 32 M46 14 C56 14 56 30 44 32"/><rect class="of-haste" x="27" y="44" width="6" height="16"/><rect class="of-base" x="16" y="60" width="28" height="10" rx="2"/></svg><span class="of-placa">' + (i < feitas ? t.cat : '') + '</span></div>';
  }).join('');
  return '<div class="of-estante vd' + (fim ? ' cheio' : '') + '" role="img" aria-label="The Dundies: ' + feitas + ' of ' + N + ' trophies"><div class="of-titulo">The Dundies</div><div class="of-prat">' + ts + '</div>'
    + '<p class="of-legenda">' + (fim ? '(The fake audience goes wild.)' : feitas ? '(Applause.) And the Dundie goes to… ' + TROFEUS[feitas - 1].cat + '.' : 'Six empty plaques. Let the show begin.') + '</p></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">WOLFLIX · B2 · extreme adjectives · absolutely, not very</span><h1>What Does Warm Mean?</h1>'
    + '<p class="banda">' + FILME + ' · the fire drill</p>'
    + '<p class="sub">Nobody was a bit scared. Everybody was absolutely terrified. Tonight the office hands out its own awards for the fire drill, and every right word, very or absolutely, wins somebody a cheap gold trophy.</p>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Start the show</button>' + faixaLive() + '</div>'
    + '<figure class="capa-r of-foto"><img src="' + img('capa') + '" alt="A row of cheap gold office trophies on a dark shelf at night"><figcaption>' + onda(TRECHOS) + '</figcaption></figure></div>';
};

R.encarte = function (c) {
  return cab(c) + '<div class="of-encarte vd"><div class="of-capinha"><img src="' + img('escritorio') + '" alt=""><div><small>' + FILME + ' · ' + ANO + '</small><b>The office, after hours</b></div></div>'
    + '<dl>' + ENCARTE.map(function (x) { return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>'; }).join('') + '</dl></div>'
    + '<div class="of-centro"><div class="pergunta vd ja"><small>Talk</small><h2>Was Dwight’s idea very bad, or absolutely awful?</h2></div>' + mostra('enc', 'It was absolutely awful. People were terrified, and someone could get hurt.', 1) + '</div>';
};

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('ant', ANT) + '</div>'
    + '<div class="lado-l"><div class="of-selo vd"><b>' + FILME + '</b><small>the fire drill · about four minutes · two words bleeped</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch the clip now</button></div></div></div>';
  else if (e.p === 1) corpo = '<div class="of-video"><div class="of-vcol">' + iframe(YT, FILME + ' · the fire drill', '&start=2112&end=2342') + '<small class="of-cred">' + FILME + ' · official cold open (Peacock) · it stops by itself · tap a time to hear it again</small></div><div class="lado-l">' + FM.ex('erro', VD_ERRO) + FM.ex('esc', VD_ESC) + '<div><button type="button" class="btn" data-a="vd-p" data-n="2">After the clip</button></div></div></div>';
  else corpo = '<div class="of-centro">' + FM.ex('ord', VD_ORD) + '<div class="fm-depois-chips"><span>Then retell it</span><em>First, …</em><em>Then, …</em><em>At the end, …</em><em>absolutely terrified · really hot · totally furious</em></div></div>';
  return cab(c) + corpo;
};

R.letra = function (c) {
  var e = S.lt, x = TRECHOS[e.sel];
  var corpo = x ? '<div class="of-video"><div class="of-vcol">' + iframe(YT, x.k + ' · ' + FILME, '&start=' + x.ini + '&end=' + x.fim) + '<small class="of-cred">' + Math.floor((x.ini - INI) / 60) + ':' + ('0' + (x.ini - INI) % 60).slice(-2) + ' to ' + Math.floor((x.fim - INI) / 60) + ':' + ('0' + (x.fim - INI) % 60).slice(-2) + ' of the clip · it stops by itself</small></div>'
    + '<div class="lado-l"><div class="pergunta vd ja"><small>' + x.k + ' · watch</small><h2>' + x.ouvir + '</h2></div>'
    + mostra('lt' + e.sel, '<span class="of-sentido">' + x.sentido + '</span><span class="of-gram">' + x.gram + '</span>') + '</div></div>'
    : '<div class="of-centro"><p class="of-dica">Tap a frame to open that moment of the clip.</p></div>';
  return cab(c) + onda(TRECHOS, e.sel, 'lt') + corpo;
};

R.regra = function (c) {
  var e = (S.fq || {}).sep, tudo = !!e && SEP.itens.every(function (x, i) { return e.em && e.em[i] === x.c; });
  return cab(c) + '<div class="of-centro">' + FM.ex('sep', SEP)
    + (tudo ? '<div style="width:min(980px,100%);margin:0 auto">' + FM.regra('<b>Normal</b> words: very / a bit / extremely + <b>tired</b>, <b>cold</b>, <b>scared</b>.<br><b>Extreme</b> words: absolutely / really / totally + <b>exhausted</b>, <b>freezing</b>, <b>terrified</b>.<br>Extreme words are already at 100%: no <s>very terrified</s>, no <s>more freezing</s>.', 'The rule') + '</div>' : '<p class="fm-nota" style="text-align:center">Sort all six words and the rule appears.</p>') + '</div>';
};

R.dundies = function (c) {
  return cab(c) + FM.fala('dun', TROFEUS.map(function (x) { return { pista: '<span class="ano">' + x.cat + '</span>' + x.pista, resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Dundie', prox: 'Next Dundie', regra: PRESA,
    lado: function (feitas, atual, nova) { return '<div class="fm-obj">' + estante(feitas, atual, nova) + '</div>'; },
    fim: 'The shelf is full. Now be Michael and give the closing speech: three extreme words, no very. Try: This year was absolutely …'
  });
};

R.escalas = function (c) {
  return cab(c) + comPlaca(FM.ex('lig', LIGA) + '<div class="fm-depois-chips"><span>Then say both</span><em>I’m very tired. I’m absolutely exhausted.</em><em>It was very big. It was enormous!</em></div>', PRESA);
};

R.fim = function (c) {
  return cab(c) + '<div class="of-centro"><p class="of-dica">One minute.</p></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES.lt = function (b, n) { S.lt.sel = n; S.lt.viu[n] = 1; };

/*@@AQ*/
/* o aquecimento desta aula (07/10): o motor está em aquece.js */
var AQ = { tipo: 'pilha', rot: 'I · Finish It', t: 'Before the clip: how did you feel?', p: 'Turn one card at a time and finish it out loud. Then the teacher finishes it too.', rotulo: 'Finish it',
  depois: 'Which card was the most extreme? Say it again.',
  itens: [
    { q: 'After my longest day at work, I was absolutely …', ex: '… exhausted. I slept for ten hours.' },
    { q: 'The funniest thing I saw this year was …', ex: '… my dog in the snow. Absolutely hilarious.' },
    { q: 'The coldest place I’ve been was …', ex: '… a hotel in Gramado. It was freezing!' },
    { q: 'I was really starving the day I …', ex: '… forgot my lunch and had a meeting until four.' },
    { q: 'The best meal of my life was absolutely …', ex: '… delicious. My grandmother’s feijoada.' },
    { q: 'I was totally terrified when …', ex: '… the plane started shaking.' }
  ] };
/*AQ@@*/

/*@@FIM*/
var FIM = { tipo: 'minuto', rot: 'VIII · One Minute', t: 'One minute of extreme words.', p: 'Pick a topic. Talk for one minute with extreme adjectives. No very with extreme words! Then the teacher.',
  temas: [
    { t: 'The worst day of your year', ajuda: 'It was absolutely… I was totally… The traffic was…' },
    { t: 'Your best holiday', ajuda: 'The view was absolutely… The food was… I was really…' },
    { t: 'Dwight’s fire drill', ajuda: 'Everybody was absolutely… The handle was… It was a totally… idea.' }
  ],
  palavras: ['absolutely', 'really', 'totally', 'terrified', 'exhausted', 'hilarious'] };
/*FIM@@*/
