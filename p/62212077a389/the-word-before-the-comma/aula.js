/* ============================================================
   PLAN B · THE RADAR · LIVE CLASS  06/10/2026
   Main series B1 · first conditional: IF + presente, WILL na outra
   metade · when (certo) × if (talvez) · unless = if not (sem dupla
   negação) · as soon as / until + presente · in case = faça agora,
   antes de saber. Erro universal: "If it will rain".
   O MUNDO (da aula velha): o seu fim de semana; seis lugares com
   previsão; a mesma frase com if/when; o show no parque no sábado e o
   gerente nervoso ("And what if…?"); a corrente de ifs. Quatro
   gravações mantidas (f1–f4), conferidas no faster-whisper em 06/10.
   A CARA: o RADAR — uma tela de radar meteorológico à noite, verde
   sobre preto, com a varredura girando; cada lugar é um ponto; o
   plano certo trava o ponto (verde, com o ícone do tempo); "if it
   will" vira estática vermelha. O mapa claro da aula velha saiu.
   Fila: FILA-LIVE-386.md · 096.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js), mesmas 11 páginas:
   a regra agora vem DEPOIS do texto (II, o recado do Sam, gerente do
   show no parque); o radar é fala primeiro + Check (III); if × when em
   fala primeiro (IV); as quatro gravações viram qual palavra você ouviu
   (V); Ask Me (VI); a frase errada em voz alta (VII, extra); o show (VIII)
   e a corrente (IX) deixam de ser extra; a corrente é pôr na ordem.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'piquenique' },
  { k: 'fds', est: 'o', min: 7, img: 'porta', rot: 'I · Your Weekend', t: 'What are you doing this weekend, and what if the weather changes?', p: 'Tap your plan and the weather. Then say your plan B out loud, the way it comes out. Keep it: it comes back.' },
  { k: 'gx', est: 'f', min: 4, img: 'palco', rot: 'II · Right, Not This', t: 'Six lines about the concert and the rain. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'carta', est: 'f', min: 7, img: 'palco', rot: 'III · Sam’s Message', t: 'Saturday: a concert in the park, and the radar says rain.', p: 'Read Sam’s message out loud. Tap the IF half of each plan. Then finish the rule.' },
  { k: 'radar', est: 'o', min: 7, img: 'piquenique', rot: 'IV · The Radar', t: 'Six places, six forecasts. Lock each one on the radar.', p: 'Read the forecast. Say the plan B out loud. Then tap Check: the right plan locks the blip.' },
  { k: 'quando', est: 'f', min: 6, img: 'porta', rot: 'V · Maybe or Sure?', t: 'IF is a possibility. WHEN is sure: it will happen.', p: 'Read the situation. Say the sentence with IF or WHEN out loud. Then tap Check.' },
  { k: 'voz', est: 'l', min: 7, img: 'prisma', rot: 'VI · The Same Sentence, Twice', t: 'Four short lines. Lines 1 and 2 are the same sentence with one word changed.', p: 'Play each line. Tap the small word you hear. Then tell your teacher: in which line is the speaker sure?' },
  { k: 'pergunta', est: 'o', min: 6, img: 'porta', rot: 'VII · Ask Me', t: 'Your turn to ask. What will your teacher do if…?', p: 'Build each question out loud. Tap Check. Then ask your teacher, and compare.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'piquenique', rot: 'VIII · If It Will Rain', t: 'Six sentences. Each one has one mistake.', p: 'Say each sentence the right way out loud. Then tap Check.' },
  { k: 'evento', est: 'o', min: 7, extra: 1, img: 'palco', rot: 'IX · The Concert in the Park', t: 'Saturday, a concert in the park. Your teacher is Sam, the nervous manager.', p: 'Say your plan B for each risk out loud. Tap Check. Then Sam asks: “And what if…?” Answer him.' },
  { k: 'cadeia', est: 'o', min: 7, extra: 1, img: 'piquenique', rot: 'X · The Chain', t: 'Each result becomes the next IF. Put the chain in order.', p: 'Tap the five links in order. Tap Check. Then say the whole chain, and make your own.' },
  { k: 'fim', est: 'w', min: 6, img: 'piquenique', rot: 'XI · Back to Your Weekend', t: 'Your weekend plan from scene I comes back.', p: 'Write your plan B with if, in case and unless. It goes to your My notes.' }
];

var TR = { 'f1.mp3': 'If I see her, I’ll tell her.', 'f2.mp3': 'When I see her, I’ll tell her.', 'f3.mp3': 'We won’t start unless everyone’s here.', 'f4.mp3': 'Take a coat in case it gets cold later.' };

var PLANOS = ['go to the beach', 'have a barbecue', 'go for a run', 'visit my family', 'go to a market', 'stay home and read'];
var TEMPOS = ['it rains', 'it’s very hot', 'it’s cold', 'it’s windy'];

var ICONES = { sol: '☀', chuva: '☂', frio: '❄', vento: '≋', raio: 'ϟ', nuvem: '☁' };
var LUGARES = [
  { nome: 'THE BEACH', ic: 'sol', x: 70, y: -40, pista: 'Sunny on Saturday? · we · <b>go swimming</b>', resp: 'If it’<b>s</b> sunny, we<b>’ll</b> go swimming.', depois: 'If it’s sunny on Saturday, where will you go?' },
  { nome: 'THE CITY', ic: 'chuva', x: -60, y: -70, pista: 'Rain on Saturday? · we · <b>visit a museum</b>', resp: 'If it <b>rains</b>, we<b>’ll</b> visit a museum.', depois: 'What will you do if it rains this weekend?' },
  { nome: 'THE MOUNTAINS', ic: 'frio', x: -95, y: 20, pista: 'Cold on Saturday? · I · <b>wear two jackets</b>', resp: 'If it <b>gets</b> cold, I<b>’ll</b> wear two jackets.', depois: 'What will you wear if it gets cold tonight?' },
  { nome: 'THE LAKE', ic: 'vento', x: 20, y: 90, pista: 'Windy on Saturday? · Start with: <b>We won’t take the boat…</b>', resp: 'We <b>won’t</b> take the boat if it’<b>s</b> windy.', depois: 'Will you go out if it’s very windy?' },
  { nome: 'THE FARM', ic: 'raio', x: 105, y: 45, pista: 'A storm on Saturday? · we · <b>stay inside</b>', resp: 'If there’<b>s</b> a storm, we<b>’ll</b> stay inside.', depois: 'What will you do if there’s a storm tonight?' },
  { nome: 'THE PARK', ic: 'nuvem', x: -20, y: 10, pista: 'Cloudy on Saturday? · we · <b>still have the picnic</b>', resp: 'If it’<b>s</b> cloudy, we<b>’ll</b> still have the picnic.', depois: 'Will you still go out if it’s cloudy on Sunday?' }
];

/* 22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js) */
/* II · o recado do Sam, o gerente do show (texto nosso) → a regra */
var CARTA = { de: 'From: Sam, the manager · To: the crew · Saturday',
  txt: 'Team, the radar says rain on Saturday. Don’t panic. [[If it rains]], we’ll move the stage under the big tent. [[When the band arrives]] at noon, I’ll check the sound. We won’t open the gates [[unless the field is dry]]. People will wait in the tent [[until the rain stops]]. Bring a coat [[in case it gets cold]]. And [[if it doesn’t rain]]? We’ll have a perfect day!',
  assina: 'Sam' };
var REGRA = [
  { a: 'If it ', par: ['rains', 'will rain'], c: 0, b: ', we’ll move the stage. After if: the present.' },
  { a: 'The other half: we ', par: ['move', 'will move'], c: 1, b: ' the stage. Will + verb.' },
  { a: 'The band arrives at noon. It’s sure: ', par: ['if', 'when'], c: 1, b: ' the band arrives…' },
  { a: 'unless = ', par: ['if not', 'when'], c: 0, b: ': we won’t open unless the field is dry.' },
  { a: 'Do it now, before you know: bring a coat ', par: ['in case', 'if'], c: 0, b: ' it gets cold.' }
];
var PRESA = '<b>If</b> it <b>rains</b>, we<b>’ll</b> move.<br>never <s>if it will rain</s><br><b>when</b> = sure · <b>if</b> = maybe<br><b>unless</b> = if not<br><b>as soon as</b> · <b>until</b> + present<br><b>in case</b> = do it now';

/* IV · if × when: a situação diz se é certo ou talvez */
var QUANDO = [
  { sit: 'You’re not sure you’ll see Ana this week.', f: '___ I see Ana, I’ll give her the book.', a: 'if' },
  { sit: 'You have lunch with Ana tomorrow.', f: '___ I see Ana, I’ll give her the book.', a: 'when' },
  { sit: 'The train always arrives at 6.', f: 'I’ll call you ___ I arrive.', a: 'when', depois: 'What will you do when you get home today?' },
  { sit: 'You might get the job, or not.', f: '___ I get the job, we’ll celebrate.', a: 'if', depois: 'What will you do if you get a new job?' },
  { sit: 'Summer comes every year.', f: '___ summer comes, we’ll go to the beach.', a: 'when' },
  { sit: 'It might snow. It rarely does here.', f: '___ it snows, the schools will close.', a: 'if', depois: 'What will you do if it snows here?' }
];

/* V · as quatro gravações: qual palavra você ouviu */
var VOZES = [
  { au: 'f1.mp3', a: '“', par: ['If', 'When'], c: 0, b: ' I see her, I’ll tell her.”' },
  { au: 'f2.mp3', a: '“', par: ['If', 'When'], c: 1, b: ' I see her, I’ll tell her.”' },
  { au: 'f3.mp3', a: '“We won’t start ', par: ['unless', 'until'], c: 0, b: ' everyone’s here.”' },
  { au: 'f4.mp3', a: '“Take a coat ', par: ['in case', 'if'], c: 0, b: ' it gets cold later.”' }
];

/* VI · Ask me */
var PERGUNTAS = [
  { p: '(what · you · do · if · it rains on Saturday)?', r: 'What <b>will</b> you do <b>if</b> it <b>rains</b> on Saturday?' },
  { p: '(what · you · take · in case · it gets cold)?', r: 'What <b>will</b> you take <b>in case</b> it <b>gets</b> cold?' },
  { p: '(what · you · do · as soon as · you · get home today)?', r: 'What <b>will</b> you do <b>as soon as</b> you <b>get</b> home today?' },
  { p: '(where · you · go · when · this lesson · end)?', r: 'Where <b>will</b> you go <b>when</b> this lesson <b>ends</b>?' },
  { p: '(who · you · call · if · you · get good news this week)?', r: 'Who <b>will</b> you call <b>if</b> you <b>get</b> good news this week?' }
];

/* VII · uma parte errada: o aluno diz a frase certa */
var ERROS = [
  { f: 'If it <u>will rain</u>, we’ll stay home.', r: 'rains' },
  { f: 'I’ll call you when I <u>will arrive</u>.', r: 'arrive' },
  { f: 'We’ll eat outside unless it <u>doesn’t rain</u>.', r: 'rains' },
  { f: 'If she <u>call</u>, I’ll tell you.', r: 'calls' },
  { f: 'If you study, you <u>pass</u> the test tomorrow.', r: 'will pass' },
  { f: 'Take an umbrella <u>unless</u> it rains later.', r: 'in case' }
];

/* VIII · o show: quatro riscos, o plano B e o "And what if…?" do Sam */
var RISCOS = [
  { r: 'RAIN', pista: 'Rain · if · we · <b>move the stage under the big tent</b>', resp: '<b>If</b> it <b>rains</b>, we<b>’ll</b> move the stage under the big tent.', e: '“And what if the tent is too small?”' },
  { r: 'HEAT', pista: 'Heat · in case · we · <b>give out free water</b>', resp: 'We<b>’ll</b> give out free water <b>in case</b> it’<b>s</b> very hot.', e: '“And what if we run out of water?”' },
  { r: 'NOBODY COMES', pista: 'Tickets · unless · we · <b>sell 100 by Friday</b> · cancel', resp: '<b>Unless</b> we <b>sell</b> 100 tickets by Friday, we<b>’ll</b> cancel.', e: '“And what if we sell 99?”' },
  { r: 'POWER CUT', pista: 'Power cut · as soon as · we · <b>start the generator</b>', resp: '<b>As soon as</b> the power <b>goes</b>, we<b>’ll</b> start the generator.', e: '“And what if the generator doesn’t work?”' }
];

/* IX · a corrente, embaralhada; n = o lugar certo */
var ELOS = [
  { n: 3, t: 'If we watch a movie, we’ll order pizza.', img: 'prisma' },
  { n: 1, t: 'If it rains on Saturday, we’ll stay home.', img: 'piquenique' },
  { n: 5, t: 'If I eat too much, I won’t go for a run on Sunday.', img: 'palco' },
  { n: 2, t: 'If we stay home, we’ll watch a movie.', img: 'porta' },
  { n: 4, t: 'If we order pizza, I’ll eat too much.', img: 'prisma' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  fd: { p: -1, t: -1 } };

/* o radar: pontos = [{x,y,ic,estado}] estado: 'ok' trava, 'ruim' estática, '' procurando */
function radar(pontos, sel, mini) {
  var s = '<svg class="radar' + (mini ? ' mini' : '') + '" viewBox="-160 -160 320 320" role="img" aria-label="Weather radar"><defs><radialGradient id="rg" r="1"><stop offset="0" stop-color="#0d2a1c"/><stop offset="1" stop-color="#050b08"/></radialGradient>'
    + '<linearGradient id="vr" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4dff9a" stop-opacity="0"/><stop offset="1" stop-color="#4dff9a" stop-opacity=".35"/></linearGradient></defs>'
    + '<circle r="150" fill="url(#rg)" class="aro"/>';
  [50, 100, 150].forEach(function (r) { s += '<circle r="' + r + '" class="anel"/>'; });
  s += '<line x1="-150" y1="0" x2="150" y2="0" class="anel"/><line x1="0" y1="-150" x2="0" y2="150" class="anel"/><g class="varre"><path d="M0 0 L150 0 A150 150 0 0 0 106 -106 Z" fill="url(#vr)"/></g>';
  (pontos || []).forEach(function (p, i) {
    var cls = p.estado === 'ok' ? 'ok' : p.estado ? 'ruim' : '';
    s += '<g class="blip ' + cls + (sel === i ? ' sel' : '') + '" transform="translate(' + p.x + ' ' + p.y + ')">' + (cls === 'ruim' ? '<g class="estatica">' + [-8, -3, 2, 7].map(function (d, k) { return '<line x1="' + (-12 + k * 2) + '" y1="' + d + '" x2="' + (10 - k) + '" y2="' + (d + 1) + '"/>'; }).join('') + '</g>' : '<circle r="' + (cls ? 13 : 6) + '" class="pt"/>')
      + (cls === 'ok' ? '<text y="5">' + ICONES[p.ic] + '</text>' : '') + (p.nome ? '<text class="nome" y="' + (cls ? 27 : 18) + '">' + p.nome + '</text>' : '') + '</g>';
  });
  return s + '</svg>';
}
function travados() { var e = (S.fq || {}).radar; return e ? Math.min(LUGARES.length, e.n + (e.ver ? 1 : 0)) : 0; }
function pontosRadar(ate) { if (ate == null) ate = travados(); return LUGARES.map(function (l, i) { return { x: l.x, y: l.y, ic: l.ic, nome: l.nome.replace('THE ', ''), estado: i < ate ? 'ok' : '' }; }); }

var R = {};
R.capa = function () {
  /* 22/10/2026 · a capa é a revista do fim de semana: a foto do show, o nome da edição e as matérias (as páginas) */
  var mat = L.map(function (x, i) { return i ? '<button type="button" class="mz-mat" data-a="ir" data-n="' + i + '"><b>' + ('0' + i).slice(-2) + '</b><span>' + x.rot.replace(/^[IVX]+\s*·\s*/, '') + '</span><small>' + (x.min ? x.min + ' min' : '') + '</small></button>' : ''; }).join('');
  return '<div class="mz-capa"><section class="mz-hero" style="--arte:url(\'' + img('palco') + '\')">'
    + '<header class="mz-topo"><span class="mz-marca">The Weekend</span><span class="mz-ed">Main Series · B1 · First conditional</span></header>'
    + '<div class="mz-tx"><h1>Plan <em>B</em></h1><p class="mz-sub">Saturday: a concert in the park, and the radar says rain. Sam has a plan for everything. <b>If it rains, we’ll move inside.</b></p>'
    + '<div class="mz-acoes"><button type="button" class="mz-ler" data-a="ir" data-n="1">Start the lesson</button><span>10 scenes · about 50 min</span></div></div>'
    + '<figure class="mz-sam"><span style="background-image:url(\'' + img('porta') + '\')"></span><figcaption><b>Sam</b>runs the concert in the park</figcaption></figure>'
    + '</section><nav class="mz-indice" aria-label="Scenes"><p class="mz-indice-t">In this issue</p>' + mat + '</nav>' + faixaLive() + '</div>';
};

R.fds = function (c) {
  var e = S.fd;
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><h5 class="rot-ouve">MY PLAN</h5><div class="tres-b">' + PLANOS.map(function (p, i) { return '<button type="button" class="pilula' + (e.p === i ? ' on' : '') + '" data-a="fd-p" data-n="' + i + '">' + p + '</button>'; }).join('') + '</div>'
    + '<h5 class="rot-ouve">THE WEATHER</h5><div class="tres-b">' + TEMPOS.map(function (t, i) { return '<button type="button" class="pilula' + (e.t === i ? ' on' : '') + '" data-a="fd-t" data-n="' + i + '">' + t + '</button>'; }).join('') + '</div></div>'
    + '<div class="lado-l">' + (e.p >= 0 && e.t >= 0 ? '<div class="pede vd"><small>THIS WEEKEND</small><b>I’m going to ' + PLANOS[e.p] + '. But if ' + TEMPOS[e.t] + '…</b></div>' + fala('fd', ['If ' + TEMPOS[e.t] + ', I’ll …'], ['if', 'will', 'won’t', 'instead']) + '<p class="so-prof dica-aluno">Write their plan B sentence exactly. Don’t correct “if it will rain” yet: it comes back in scene X.</p>' : '<div class="aberta vd" style="background-image:url(' + img('porta') + ')"><span>THIS WEEKEND</span></div><p class="dica-aluno">Tap a plan and the weather.</p>') + '</div></div>';
};

R.carta = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap the IF half of each plan (if, when, unless…)', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.radar = function (c) {
  return cab(c) + FM.fala('radar', LUGARES.map(function (l) { return { pista: '<span class="ano">' + ICONES[l.ic] + ' ' + l.nome + '</span>' + l.pista, resp: l.resp, depois: l.depois }; }), {
    rotulo: 'Blip', prox: 'Next blip', regra: PRESA,
    lado: function (feitas, atual) { return '<div class="pb-radar">' + radar(pontosRadar(feitas), atual) + '</div>'; },
    fim: 'Six forecasts locked. WILL stayed out of the IF half every time. Now one more plan for any place, starting with the other half: “We’ll… if…”'
  });
};

R.quando = function (c) {
  return cab(c) + FM.fala('quando', QUANDO.map(function (x) {
    var w = x.f.indexOf('___') === 0 ? x.a.charAt(0).toUpperCase() + x.a.slice(1) : x.a;
    return { pista: x.f.replace('___', '<span class="pb-vazio">IF or WHEN?</span>'), resp: x.f.replace('___', '<b>' + w + '</b>'), depois: x.depois };
  }), {
    rotulo: 'Situation', regra: PRESA,
    lado: function (feitas, atual) { return atual >= 0 ? '<div class="pede vd sit"><small>THE SITUATION</small><b>' + QUANDO[atual].sit + '</b></div>' : ''; },
    fim: 'Six of six. One word changes the promise: when = sure, if = maybe. And both take the present: when I arrive, if I see her.'
  });
};

R.voz = function (c) {
  return cab(c) + FM.som('voz', VOZES.map(function (v, i) { return { a: tocar(v.au) + '<i class="pb-linha">LINE ' + (i + 1) + '</i>' + v.a, par: v.par, c: v.c, b: v.b }; }), {
    titulo: 'Which word do you hear?', regra: PRESA,
    nota: 'Now tell your teacher: Line 1 or Line 2, in which one is the speaker sure? And Line 4: when does the coat leave the house?'
  });
};

R.pergunta = function (c) {
  return cab(c) + FM.pergunta('ask', PERGUNTAS, { regra: PRESA, depois: ['If it rains, I’ll …', 'You’ll …, but I’ll …', 'Me too!'] });
};

R.erros = function (c) {
  return cab(c) + FM.erro('erros', ERROS, { titulo: 'One part is wrong. Say the whole sentence the right way.', regra: PRESA });
};

R.evento = function (c) {
  return cab(c) + FM.fala('evento', RISCOS.map(function (x) { return { pista: '<span class="ano">' + x.r + '</span>' + x.pista, resp: x.resp, depois: 'Sam: ' + x.e }; }), {
    rotulo: 'Risk', prox: 'Next risk', regra: PRESA,
    lado: function (feitas, atual) {
      return '<div class="riscos">' + RISCOS.map(function (r, i) { return '<span class="' + (i < feitas ? 'feito' : i === atual ? 'on' : '') + '">' + r.r + '</span>'; }).join('') + '</div>'
        + '<div class="aberta vd pb-palco" style="background-image:url(' + img('palco') + ')"><span>SATURDAY · THE PARK · SAM IS NERVOUS</span></div>';
    },
    fim: 'Four risks, four plan Bs, and a very relaxed manager. Now a fifth risk of your own: say it, and Sam asks “And what if…?”'
  });
};

R.cadeia = function (c) {
  return cab(c) + FM.ordem('elos', ELOS, { toque: 'Tap the links in order: first, second, third…', ok: 'Green is the right place. Now say the whole chain, then make your own.' })
    + fala('cd', ['If …, I’ll …. If I …, I’ll …'], ['if', 'will', 'won’t']);
};

R.fim = function (c) {
  var fd = S.fd;
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'If it rains this weekend, I’ll …\nI’ll take … in case …\nUnless …, I’ll …', 'Your plan B',
    ['If it ', ', I’ll ', 'in case ', 'unless ', 'when '], ['YOUR WEEKEND, WITH A PLAN B', fd.p >= 0 ? 'You said you’re going to ' + PLANOS[fd.p] + '. Now: if, in case, unless.' : 'Your weekend plan with if, in case and unless.'])
    + '<div class="lado-fim">' + radar(pontosRadar(), -1, 1) + '<div class="grande vd"><span><u>If it rains</u>, we<u>’ll</u> move inside</span><span><u>when</u> = sure · <u>if</u> = maybe · <u>unless</u> = if not</span><span><u>in case</u> = do it now, before you know</span></div>'
    + mostra('fim', 'If it rains this weekend, I’ll go to the movies instead of the beach.<br>I’ll take an umbrella in case it rains on the way.<br>Unless it’s really cold, I’ll still go for a run.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['fd-p'] = function (b, n) { S.fd.p = n; };
TOQUES['fd-t'] = function (b, n) { S.fd.t = n; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de carta.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.',
  pares: [
    { c: 'If it rains on Saturday, we’ll move the show inside.', x: 'If it will rain on Saturday, we’ll move the show inside.', d: 'After if, the present: it rains. The will goes in the other half.' },
    { c: 'We won’t start unless it stops raining.', x: 'We won’t start unless it doesn’t rain.', d: 'unless already means if not. No second not.' },
    { c: 'I’ll bring an umbrella in case it rains.', x: 'I’ll bring an umbrella in case it will rain.', d: 'After in case, the present too.' },
    { c: 'If it rains, what will you do?', x: 'If it rains, what do you will do?', d: 'will is a helper. No do before it.' },
    { c: 'As soon as the rain stops, we’ll start.', x: 'As soon as the rain will stop, we’ll start.', d: 'As soon as and when: the present, like if.' },
    { c: 'If the stage is wet, we won’t play.', x: 'If the stage is wet, we don’t will play.', d: 'The no is won’t. Never don’t will.' }
  ],
  nota: 'The first half uses the present: <b>if it rains</b>, <b>unless it stops</b>, <b>in case it rains</b>. The will stays in the other half: <b>we’ll move</b>, <b>we won’t play</b>.',
  uso: { p: 'Your turn. It is Saturday and the radar says rain. Say your plan B with if, and one thing you won’t do unless the sky clears.', molde: ['If it rains, I’ll …', 'I won’t … unless …'], ex: 'If it rains, I’ll watch a movie at home. I won’t go to the park unless the sun comes out.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
