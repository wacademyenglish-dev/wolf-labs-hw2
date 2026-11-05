/* ============================================================
   TWENTY-FIVE HOURS · THE STATION CLOCK · LIVE CLASS  05/10/2026
   Main series A1 · as horas: o'clock · half past · quarter past/to ·
   AM/PM · What time do you…?
   O MUNDO: a estação de trem. O aluno é o chefe da estação: o professor
   anuncia as partidas e ele GIRA OS PONTEIROS COM O DEDO; depois vira as
   plaquinhas do quadro de partidas, palavra por palavra. No fim, o dia
   perfeito dela soma 25 horas, e o aluno escreve o dele por extenso.
   Motor comum: kit/motor.js. O relógio arrastado vai ao outro lado num
   campo escondido (data-campo="relo"), como o jogo do Baldur's Gate.
   Mantido da aula antiga: os doze áudios da estação, as três fotos e a
   resposta dela ("It isn't one day. It's my best week.").
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre frases quase iguais. II = ligar cada
   relógio à hora em palavras (FM.liga) e só depois a voz da estação;
   III = separar seis horas nas quatro maneiras de dizer (FM.separa), e
   só depois os cartões e achar a parte quebrada de quatro linhas
   (FM.erro, a placa no canto). I, IV, V, VI, VII, VIII e IX ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'estacao' },
  { k: 'ontem', est: 'o', min: 7, img: 'mesa', rot: 'I · Your Day', t: 'Before the clock: your day.', p: 'Pick a card. Answer out loud. Then the follow-up comes.' },
  { k: 'face', est: 'l', min: 7, img: 'estacao', rot: 'II · Read the Face', t: 'Short hand: the hour. Long hand: the minutes.', p: 'Look at the six clocks. Tap a clock, then its time in words. Then play the station voice and say it with her.' },
  { k: 'regra', est: 'f', min: 7, img: 'estacao', rot: 'III · How the Clock Talks', t: 'Four ways to say the time, and one word you never need.', p: 'Sort six times into the four ways to say them. Then find the broken part of four lines.' },
  { k: 'ajusta', est: 'l', min: 7, img: 'estacao', rot: 'IV · Set the Clock', t: 'You are the station chief. Your teacher calls the trains.', p: 'Listen to the departure. Drag the hands with your finger. Then check.' },
  { k: 'quadro', est: 'f', min: 6, img: 'estacao', rot: 'V · The Departures Board', t: 'The board only shows numbers. Give it the words.', p: 'Tap the words in order. When they are right, the board flips.' },
  { k: 'ampm', est: 'l', min: 7, img: 'estacao', rot: 'VI · Day Train or Night Train', t: 'Same hands, two trains. Only the voice tells you which.', p: 'Play the voice. Pick the day train or the night train. Then say it out loud.' },
  { k: 'dia', est: 'f', min: 6, extra: 1, img: 'xicaras', rot: 'VII · Twenty-Five Hours', t: 'This is her perfect day. Add it up.', p: 'Read each block out loud: from … to … Then put it on her day.' },
  { k: 'conversa', est: 'o', min: 7, extra: 1, img: 'mesa', rot: 'VIII · What Time Do You…?', t: 'No clock now. Your times.', p: 'Answer out loud. Then the follow-up comes.' },
  { k: 'fim', est: 'w', min: 6, img: 'estacao', rot: 'IX · Your Perfect Day', t: 'Your perfect day, hour by hour. In words.', p: 'Write five lines. Times in words: half past seven, not 7:30. The red line watches the clock. It goes to your My notes.' }
];

/* ---------- as horas em palavras ---------- */
var NUM = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
var MIN = { 5: 'five', 10: 'ten', 15: 'quarter', 20: 'twenty', 25: 'twenty-five', 30: 'half' };
function hora(h) { return NUM[((h % 12) + 12) % 12]; }
function palavras(h, m) {
  if (m === 0) return hora(h) + ' o’clock';
  if (m <= 30) return MIN[m] + ' past ' + hora(h);
  return MIN[60 - m] + ' to ' + hora(h + 1);
}
function digital(h, m) { var hh = ((h % 12) + 12) % 12 || 12; return hh + ':' + (m < 10 ? '0' : '') + m; }

/* ---------- o relógio da estação (SVG) ---------- */
function relogio(h, m, o) {
  o = o || {};
  var ah = (((h % 12) + 12) % 12) * 30 + m * 0.5, am = m * 6, t = '';
  for (var i = 0; i < 60; i++) { var g = i % 5 === 0; t += '<line x1="0" y1="' + (g ? -92 : -96) + '" x2="0" y2="-101" class="' + (g ? 'tk g' : 'tk') + '" transform="rotate(' + i * 6 + ')"/>'; }
  var nums = '';
  for (var n = 1; n <= 12; n++) { var a = n * 30 * Math.PI / 180; nums += '<text x="' + (Math.sin(a) * 76).toFixed(1) + '" y="' + (-Math.cos(a) * 76 + 9).toFixed(1) + '">' + n + '</text>'; }
  var hit = o.arrasta ? ' class="pt"' : '';
  return '<svg class="relo' + (o.arrasta ? ' arrasta' : '') + '" viewBox="-112 -112 224 224" role="img" aria-label="' + (o.rotulo || 'A station clock') + '">'
    + '<circle r="110" class="aro"/><circle r="104" class="face"/>' + t + '<g class="nums">' + nums + '</g>'
    + (o.janela ? '<g class="janela ' + o.janela + '"><rect x="-26" y="26" width="52" height="30" rx="7"/><circle cx="' + (o.janela === 'dia' ? 0 : 6) + '" cy="44" r="8" class="astro"/>' + (o.janela === 'noite' ? '<circle cx="11" cy="40" r="7" class="corta"/>' : '') + '</g>' : '')
    + '<g class="ph" transform="rotate(' + ah + ')"><line y1="12" y2="-54" class="mao hh"/>' + (o.arrasta ? '<line y1="0" y2="-58" class="pega" data-p="h"/>' : '') + '</g>'
    + '<g class="pm" transform="rotate(' + am + ')"><line y1="16" y2="-86" class="mao mm"/>' + (o.arrasta ? '<line y1="-20" y2="-92" class="pega" data-p="m"/>' : '') + '</g>'
    + '<circle r="7" class="eixo"/></svg>';
}

/* I · ontem */
var ONTEM = [
  { k: 'WAKE UP', q: 'What time do you wake up?', fup: 'Is that early or late?', st: ['I wake up at …', 'At half past …', 'At … o’clock.'], ex: 'I wake up at half past six. That’s early!' },
  { k: 'BEDTIME', q: 'What time do you go to sleep?', fup: 'What do you do before that?', st: ['I go to sleep at …', 'At quarter to …'], ex: 'I go to sleep at quarter to eleven. Before that, I watch a series.' },
  { k: 'LUNCH', q: 'What time do you have lunch?', fup: 'Where do you have it?', st: ['I have lunch at …', 'At … o’clock.'], ex: 'I have lunch at one o’clock, at home.' },
  { k: 'A TRAIN', q: 'Do you take a bus or a train? What time?', fup: 'Is it on time?', st: ['It leaves at …', 'Every day, at …'], ex: 'Every day, at quarter past eight. It’s always late!' }
];

/* II · o mostrador: a primeira opção é a certa */
/* II · ligar o relógio à hora em palavras (FM.liga) · a voz da estação confere depois */
var FACE = [
  { h: 8, m: 0, au: 't-8.mp3', ops: ['It’s eight o’clock.'], pq: 'The long hand is on 12: o’clock. Never “hours”.' },
  { h: 2, m: 0, au: 't-2.mp3', ops: ['It’s two o’clock.'], pq: 'The short hand is on 2. The long hand on 12: two o’clock.' },
  { h: 8, m: 30, au: 't-830.mp3', ops: ['It’s half past eight.'], pq: 'The short hand already passed 8. The half belongs to eight: half past eight.' },
  { h: 3, m: 30, au: 't-330.mp3', ops: ['It’s half past three.'], pq: 'Between 3 and 4, and the half belongs to the hour that already happened: three.' },
  { h: 9, m: 15, au: 't-915.mp3', ops: ['It’s quarter past nine.'], pq: 'The long hand is on 3, the right side: PAST. A quarter past nine.' },
  { h: 9, m: 0, au: 't-9.mp3', ops: ['It’s nine o’clock.'], pq: 'Nine o’clock, and the clock never says “hours”.' }
];
var LIGA_FACE = { formato: 'liga', titulo: 'Tap a clock, then its time in words.', ordemDireita: [3, 5, 1, 4, 0, 2], pares: FACE.map(function (x) { return ['<span class="fc-m">' + relogio(x.h, x.m, { rotulo: 'A station clock' }) + '</span>', x.ops[0]]; }) };

/* III · a regra descoberta: separar seis horas nas quatro maneiras de dizer (FM.separa) */
var SEPARA_T = { formato: 'separa', titulo: 'Tap a time, then its box. How does the clock say it?', caixas: ['o’clock', 'half past', 'quarter past', 'quarter to'], itens: [
  { t: '8:00', c: 0 }, { t: '8:30', c: 1 }, { t: '9:15', c: 2 }, { t: '8:45', c: 3 }, { t: '2:00', c: 0 }, { t: '3:30', c: 1 }
] };
var ERRO_T = [
  { f: 'It’s eight <u>hours</u>.', r: 'o’clock' },
  { f: 'I wake up at <u>eight and a half</u>.', r: 'half past eight' },
  { f: '8:30 is half past <u>nine</u>.', r: 'eight' },
  { f: '8:45 is quarter to <u>eight</u>.', r: 'nine' }
];
var PRESA_T = 'Long hand on 12 → <b>o’clock</b> (never “hours”)<br>On 6 → <b>half past</b> + the hour that already happened<br>On 3 → <b>quarter past</b><br>On 9 → <b>quarter to</b> + the hour that is coming';

/* IV · acerte o relógio: o professor anuncia */
var AJ = [
  { h: 8, m: 30, dest: 'BOSTON', pl: '4' },
  { h: 9, m: 15, dest: 'CHICAGO', pl: '2' },
  { h: 7, m: 45, dest: 'NEW YORK', pl: '7' },
  { h: 2, m: 0, dest: 'DENVER', pl: '1' },
  { h: 11, m: 30, dest: 'SEATTLE', pl: '5' },
  { h: 4, m: 45, dest: 'MIAMI', pl: '3' }
];

/* V · o quadro de partidas */
var QD = [
  { h: 8, m: 30, dest: 'BOSTON', x: ['nine', 'and a half'] },
  { h: 9, m: 15, dest: 'CHICAGO', x: ['to', 'three'] },
  { h: 7, m: 45, dest: 'NEW YORK', x: ['seven', 'past'] },
  { h: 2, m: 0, dest: 'DENVER', x: ['hours', 'twelve'] },
  { h: 11, m: 30, dest: 'SEATTLE', x: ['twelve', 'and a half'] },
  { h: 4, m: 45, dest: 'MIAMI', x: ['four', 'past'] }
];
function pecas(x) { return palavras(x.h, x.m).split(' '); }

/* VI · trem do dia ou da noite */
var AP = [
  { h: 7, m: 0, au: 't-7am.mp3', dia: 1, t: 'It’s seven AM.', diga: 'seven in the morning' },
  { h: 7, m: 0, au: 't-7pm.mp3', dia: 0, t: 'It’s seven PM.', diga: 'seven in the evening' },
  { h: 11, m: 30, au: 't-1130pm.mp3', dia: 0, t: 'It’s half past eleven PM.', diga: 'half past eleven at night' },
  { h: 11, m: 30, au: 't-1130am.mp3', dia: 1, t: 'It’s half past eleven AM.', diga: 'half past eleven in the morning' },
  { h: 4, m: 15, au: 't-415am.mp3', dia: 0, t: 'It’s quarter past four AM.', diga: 'quarter past four in the morning: still dark' },
  { h: 4, m: 15, au: 't-415pm.mp3', dia: 1, t: 'It’s quarter past four PM.', diga: 'quarter past four in the afternoon' }
];

/* VII · as 25 horas dela (eixo: 8 AM até 8 AM do outro dia) */
var BLOCOS = [
  { de: 0, ate: 1.5, d: '8:00 AM – 9:30 AM', w: 'from eight to half past nine', o: 'Morning and the bus' },
  { de: 1.5, ate: 7.5, d: '9:30 AM – 3:30 PM', w: 'from half past nine to half past three', o: 'Work' },
  { de: 6, ate: 7, d: '2:00 PM – 3:00 PM', w: 'from two to three', o: 'Lunch in the café', fila: 1 },
  { de: 7.5, ate: 8, d: '3:30 PM – 4:00 PM', w: 'from half past three to four', o: 'The bike' },
  { de: 8, ate: 12, d: '4:00 PM – 8:00 PM', w: 'from four to eight', o: 'Classes' },
  { de: 12, ate: 14, d: '8:00 PM – 10:00 PM', w: 'from eight to ten', o: 'The gym and friends' },
  { de: 14, ate: 16, d: '10:00 PM – 12:00 AM', w: 'from ten to midnight', o: 'Reading in bed' },
  { de: 16, ate: 24, d: '12:00 AM – 8:00 AM', w: 'from midnight to eight', o: 'Sleeping' }
];
var DIA_OPS = ['Lunch is inside work: from two to three is counted twice.', 'She sleeps too much: eight hours is too long.', 'The bike is too slow: half an hour is impossible.'];

/* VIII · conversa */
var CONVERSA = [
  { q: 'What time do you get up on weekdays?', fup: 'And on Sundays?', st: ['I get up at …', 'At half past …', 'At quarter to …'], ex: 'I get up at half past six. On Sundays, at nine o’clock.' },
  { q: 'What time do you start work or school?', fup: 'How do you get there?', st: ['I start at …', 'At … o’clock.'], ex: 'I start work at nine o’clock. I go by bus.' },
  { q: 'What time do you have dinner?', fup: 'Who do you have dinner with?', st: ['I have dinner at …', 'Around …'], ex: 'I have dinner at quarter past seven, with my family.' },
  { q: 'What’s your favorite hour of the day?', fup: 'Why that hour?', st: ['My favorite hour is …', 'Because …'], ex: 'Half past six in the evening. I’m home and it’s quiet.' },
  { q: 'Your turn: ask me what time I go to bed.', fup: 'Now ask me what time I get up.', st: ['What time do you …?'], ex: 'What time do you go to bed? What time do you get up?' }
];

/* ---------- o corretor (nível 1: a regra desta aula) ---------- */


/* ---------- o estado (o mesmo dos dois lados) ---------- */
var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ontem: { sel: -1, foi: {} },
  aj: { n: 0, h: 12, m: 0, ok: 0, err: '', livre: 0 },
  qd: { n: 0, monta: [], err: 0, vira: -1 },
  ap: { n: 0, esc: -1 }, dia: { foi: {}, esc: -1 }, conversa: { n: 0, foi: {} } };

/* ---------- as cenas ---------- */
var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · THE STATION CLOCK · A1</span><h1>Twenty-Five <b>Hours</b></h1>'
    + '<p class="sub">Her perfect day, hour by hour. Every hour is true. It adds up to twenty-five.</p>'
    + '<div class="chipsx"><span class="pilula">o’clock · half past</span><span class="pilula">quarter past · quarter to</span><span class="pilula">AM · PM</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the station</button>' + faixaLive() + '</div>'
    + '<div class="foto"><img src="' + img('estacao') + '" alt="A station clock under a glass roof"><div class="placa-capa"><small>NEXT TRAIN</small><b>25:00</b><span>PLATFORM 9</span></div></div></div>';
};
R.ontem = function (c) { return cartasPessoais(c, ONTEM, S.ontem, 'ontem'); };

R.face = function (c) {
  var e = ((S.fq || {}).fc || {}).par || {}, todos = FACE.every(function (x, i) { return e[i] === i; });
  return cab(c) + FM.ex('fc', LIGA_FACE)
    + (todos ? '<p class="aprova" style="text-align:center">GOT IT. Short hand: the hour. Long hand: the minutes. Now play the station voice and say each one with her.</p><div class="fc-vozes">' + FACE.map(function (x) { return '<div class="toca-linha vd">' + tocar(x.au) + '<span><b>' + x.ops[0] + '</b></span></div>'; }).join('') + '</div>'
      : '<p class="dica-aluno" style="text-align:center">Short hand first (the hour). Then the long hand (the minutes).</p>');
};

R.regra = function (c) {
  var em = ((S.fq || {}).rg || {}).em || {}, todos = SEPARA_T.itens.every(function (x, i) { return em[i] === x.c; });
  var cartoes = '<div class="cartoes">'
    + '<div class="cr vd"><small>1 · LONG HAND ON 12</small><h3><em>o’clock</em></h3><div class="ex"><span>8:00 → <u>eight o’clock</u></span><span>never “eight hours”</span></div></div>'
    + '<div class="cr vd"><small>2 · LONG HAND ON 6</small><h3><em>half past</em> + the hour that already happened</h3><div class="ex"><span>8:30 → <u>half past eight</u></span></div></div>'
    + '<div class="cr vd"><small>3 · RIGHT SIDE · LEFT SIDE</small><h3><em>quarter past</em> · <em>quarter to</em></h3><div class="ex"><span>9:15 → <u>quarter past nine</u></span><span>8:45 → <u>quarter to nine</u></span></div></div>'
    + '<div class="cr vd"><small>4 · DAY OR NIGHT</small><h3><em>AM</em> morning · <em>PM</em> afternoon and night</h3><div class="ex"><span><u>seven AM</u> · <u>seven PM</u></span><span>12 AM = <u>midnight</u></span></div></div></div>';
  return cab(c) + FM.ex('rg', SEPARA_T)
    + (todos ? cartoes + '<div style="height:14px"></div>' + FM.ex('rt', { formato: 'erro', titulo: 'Four lines are broken. Find the broken part. Say the fix.', itens: ERRO_T, regra: PRESA_T })
      : '<p class="dica-aluno" style="text-align:center">Where is the long hand? On 12, on 6, on 3 or on 9?</p>');
};

R.ajusta = function (c) {
  var a = S.aj, n = a.n, fim = n >= AJ.length, x = AJ[Math.min(n, AJ.length - 1)];
  var campo = '<input type="hidden" data-campo="relo" value="' + a.h + ':' + a.m + ':' + n + '">';
  var botoes = '<div class="giros"><button type="button" class="pilula" data-a="gira" data-v="h-1">hour −</button><button type="button" class="pilula" data-a="gira" data-v="h+1">hour +</button><button type="button" class="pilula" data-a="gira" data-v="m-5">min −</button><button type="button" class="pilula" data-a="gira" data-v="m+5">min +</button></div>';
  var relo = '<div class="relo-box vd grande">' + relogio(a.h, a.m, { arrasta: !(a.ok && !fim), rotulo: 'The station clock. Drag the hands.' }) + botoes + campo + '</div>';
  var quadro = '<div class="painel-trem">' + AJ.map(function (t, i) {
    var feito = i < n || (i === n && a.ok);
    return '<div class="linha-trem' + (i === n && !fim ? ' agora' : '') + (feito ? ' feito' : '') + '"><b>' + (feito ? digital(t.h, t.m) : '--:--') + '</b><span>' + t.dest + ' · ' + t.pl + '</span></div>';
  }).join('') + '</div>';
  var lado;
  if (fim) {
    lado = '<div class="anuncio vd"><small>ALL SIX TRAINS LEFT ON TIME</small><h3>Now swap. Your teacher sets the clock. You say the time.</h3>'
      + '<p class="dica-aluno">Your teacher moves the hands. Say the time out loud.</p><p class="so-prof" style="margin:0;color:var(--t3)">Drag the hands. The student says the time.</p>'
      + mostra('ajlivre', 'It’s ' + palavras(a.h, a.m) + '.') + '</div>';
  } else {
    var anuncio = 'The train to ' + x.dest.charAt(0) + x.dest.slice(1).toLowerCase() + ' leaves at ' + palavras(x.h, x.m) + ', platform ' + x.pl + '.';
    lado = '<div class="anuncio vd"><small>DEPARTURE ' + (n + 1) + ' OF ' + AJ.length + ' · TO ' + x.dest + '</small>'
      + (a.ok ? '' : '<p class="so-prof diga-prof">Read it out loud: <b>“' + anuncio + '”</b></p>')
      + (a.ok ? '<h3>“' + anuncio + '”</h3>' : '<h3 class="dica-aluno">Listen to your teacher. Set the clock.</h3>')
      + (a.ok ? '<p class="aprova">GOT IT. ' + digital(x.h, x.m) + ' is ' + palavras(x.h, x.m) + '. Say it back: “The train to ' + x.dest.charAt(0) + x.dest.slice(1).toLowerCase() + ' leaves at ' + palavras(x.h, x.m) + '.”</p><div><button type="button" class="btn" data-a="aj-prox">Next train</button></div>'
        : (a.err ? '<p class="recusa">' + a.err + '</p>' + mostra('aj' + n, anuncio + ' → ' + digital(x.h, x.m)) : '') + '<div><button type="button" class="btn cheio" data-a="confere">Check the clock</button></div>')
      + '</div>';
  }
  return cab(c) + '<div class="mesa-relo larga">' + relo + '<div class="lado-relo">' + lado + quadro + '</div></div>';
};

R.quadro = function (c) {
  var q = S.qd, n = q.n, fim = n >= QD.length, x = QD[Math.min(n, QD.length - 1)];
  var linhas = QD.map(function (t, i) {
    var txt = i < n ? palavras(t.h, t.m) : (i === n ? q.monta.join(' ') : '');
    var cels = txt ? txt.toUpperCase().split('').map(function (ch, k) { return '<i' + (q.vira === i ? ' class="flip" style="animation-delay:' + k * 45 + 'ms"' : '') + '>' + (ch === ' ' ? '&nbsp;' : h(ch)) + '</i>'; }).join('') : '<i>&nbsp;</i><i>&nbsp;</i><i>&nbsp;</i>';
    return '<div class="linha-q' + (i === n && !fim ? ' agora' : '') + (i < n ? ' feito' : '') + (i === n && q.err ? ' errado' : '') + '"><span class="dig">' + digital(t.h, t.m) + '</span><span class="dest">' + t.dest + '</span><span class="flaps">' + cels + '</span></div>';
  }).join('');
  var board = '<div class="quadro"><div class="topo-q"><b>DEPARTURES</b><small>CENTRAL STATION</small></div>' + linhas + '</div>';
  if (fim) return cab(c) + board + '<div class="foco"><div class="pergunta vd"><small>SIX ROWS FLIPPED</small><h2>The board reads like the station voice now: half past, quarter to, o’clock.</h2></div></div>';
  var alvo = pecas(x), tiles = ordem(alvo.concat(x.x).map(function (t, i) { return [t, i]; }), n + 2);
  var usados = {}; q.monta.forEach(function (w) { usados[w] = (usados[w] || 0) + 1; });
  var pecasHtml = '<div class="pecas">' + tiles.map(function (t) {
    var w = t[0], quant = alvo.concat(x.x).filter(function (z) { return z === w; }).length, gasto = (usados[w] || 0) >= quant;
    return '<button type="button" class="peca' + (gasto ? ' gasta' : '') + '" data-a="peca" data-v="' + h(w) + '"' + (gasto ? ' disabled' : '') + '>' + w + '</button>';
  }).join('') + '</div>';
  return cab(c) + '<div class="mesa-q">' + board + '<div class="lado-q">' + pecasHtml
    + '<div class="acoes-q"><button type="button" class="pilula" data-a="limpa">Clear the row</button></div>'
    + (q.err ? '<p class="recusa">The board won’t flip. ' + (q.monta.indexOf('hours') >= 0 ? 'The clock never says “hours”.' : q.monta.indexOf('and a half') >= 0 ? 'The half goes first: half past …' : 'Look at the minutes: past (right side) or to (left side)? And which hour?') + '</p>' + mostra('qd' + n, digital(x.h, x.m) + ' = ' + palavras(x.h, x.m)) : '<p class="dica-aluno" style="text-align:center">Say the row out loud: the time, then the city.</p>')
    + '</div></div>';
};

R.ampm = function (c) {
  var p = S.ap, n = p.n, fim = n >= AP.length, x = AP[Math.min(n, AP.length - 1)];
  if (fim) return cab(c) + trilha(AP, n) + '<div class="foco"><div class="pergunta vd"><small>SIX TRAINS</small><h2>Two sevens in one day, and only the voice tells you which. AM: after midnight, before noon. PM: after noon.</h2></div></div>';
  var certo = p.esc === x.dia;
  var trens = [1, 0].map(function (d) {
    var cls = p.esc === d ? (d === x.dia ? ' certo' : ' errado') : '';
    return '<button type="button" class="trem' + cls + '" data-a="ap" data-n="' + d + '"' + (certo ? ' disabled' : '') + '><small>' + (d ? 'DAY TRAIN · AM or PM?' : 'NIGHT TRAIN · AM or PM?') + '</small>' + relogio(x.h, x.m, { janela: d ? 'dia' : 'noite' }) + '<b>' + (d ? 'the sun is up' : 'it’s dark') + '</b></button>';
  }).join('');
  return cab(c) + trilha(AP, n) + '<div class="foco"><div class="toca-linha vd centro">' + tocar(x.au) + '<span>' + (certo ? '“' + x.t + '”' : 'Play the station voice. Which train is it?') + '</span></div>'
    + '<div class="mesa-ap"><div class="trens">' + trens + '</div><div class="lado-ap">'
    + (certo ? follow('SAY IT', 'Say it the long way: ' + x.diga + '.', [x.t, 'It’s ' + x.diga + '.'], [], 'ap' + n, '<div style="text-align:center"><button type="button" class="btn" data-a="ap-prox">Next train</button></div>')
      : (p.esc >= 0 ? '<p class="recusa">Play it again. Listen for the last word: AM or PM?</p>' + mostra('ap' + n, x.t + ' → the ' + (x.dia ? 'day' : 'night') + ' train. ' + x.diga.charAt(0).toUpperCase() + x.diga.slice(1) + '.') : '<p class="dica-aluno" style="text-align:center">Play it first. Then pick the train.</p>'))
    + '</div></div></div>';
};

R.dia = function (c) {
  var d = S.dia, total = 0, todos = true;
  BLOCOS.forEach(function (b, i) { if (d.foi[i]) total += b.ate - b.de; else todos = false; });
  var fita = '<div class="fita vd"><div class="regua">' + ['8 AM', '12 PM', '4 PM', '8 PM', '12 AM', '4 AM', '8 AM'].map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div><div class="pista">'
    + BLOCOS.map(function (b, i) { return d.foi[i] ? '<i class="bl' + (b.fila ? ' cima' : '') + (todos && b.fila ? ' bate' : '') + '" style="left:' + (b.de / 24 * 100) + '%;width:' + ((b.ate - b.de) / 24 * 100) + '%"><span>' + b.o + '</span></i>' : ''; }).join('')
    + '</div><div class="soma' + (total > 24 ? ' passou' : '') + '"><b>' + (total % 1 ? total.toFixed(1) : total) + '</b><span>hours · a day has 24</span></div></div>';
  var cards = '<div class="blocos">' + BLOCOS.map(function (b, i) {
    return '<button type="button" class="bloco' + (d.foi[i] ? ' on' : '') + '" data-a="bloco" data-n="' + i + '"' + (d.foi[i] ? ' disabled' : '') + '><small>' + b.d + '</small><b>' + b.o + '</b><span>' + b.w + '</span></button>';
  }).join('') + '</div>';
  var fim = '';
  if (todos) {
    var certo = d.esc === 0, ops = ordem(DIA_OPS.map(function (t, i) { return [t, i]; }), 2);
    fim = '<div class="foco">' + (certo ? '' : '<div class="pergunta vd ja"><small>TWENTY-FIVE HOURS</small><h2>A day has twenty-four. Where is the extra hour?</h2></div>')
      + (certo ? '<div class="duas-col"><div class="post-dela vd"><small>HER ANSWER, IN THE COMMENTS</small><p>“It isn’t one day. It’s my best week. Every hour happened, just not on the same Tuesday.”</p></div>'
          + follow('FOLLOW-UP', 'And your week? Which hour do you count twice?', ['From … to … I …', 'At … I …'], [], 'dia', mostra('diaf', 'From six to seven I cook dinner, and I also call my mother. That hour counts twice!', 1)) + '</div>'
        : '<div class="versoes">' + ops.map(function (o) { return '<button type="button" class="versao' + (d.esc === o[1] ? ' errado' : '') + '" data-a="dia-esc" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>'
          + (d.esc > 0 ? '<p class="recusa">Look at the day: one block sits on top of another.</p>' + mostra('dia', DIA_OPS[0]) : ''))
      + '</div>';
  }
  return cab(c) + fita + (todos ? fim : cards + '<p class="dica-aluno" style="text-align:center">Read the block out loud, then tap it.</p>');
};

R.conversa = function (c) { return sequencia(c, CONVERSA, S.conversa, 'conversa', 'Five answers, and every one had a time in it.'); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I wake up at half past seven.\nFrom eight to nine I have breakfast in a café.\nAt quarter to ten I …', 'Your perfect day',
    ['I wake up at ', 'half past ', 'quarter to ', 'o’clock', 'from ', ' to ', 'in the evening'], ['YOUR PERFECT DAY', 'Five lines. What you do, and from what time to what time. Twenty-five hours is allowed.'])
    + '<div class="lado-fim"><div class="grande vd"><span><b>8:00</b> · eight o’clock</span><span><b>8:30</b> · half past eight</span><span><b>8:45</b> · quarter to nine</span><small>The half goes with the hour before. “To” names the hour that is coming. And the clock never says “hours”.</small></div>'
    + mostra('fim', 'I wake up at half past seven.<br>From eight to nine I have breakfast in a café.<br>At quarter to ten I walk to the park.<br>From two to five I read and sleep.<br>At eight o’clock in the evening I have dinner with my friends.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* ---------- o relógio que se arrasta com o dedo ---------- */
var ARR = null;
function giraMaos() {
  var sv = document.querySelector('svg.arrasta'); if (!sv) return;
  var a = S.aj; sv.querySelector('.ph').setAttribute('transform', 'rotate(' + ((((a.h % 12) + 12) % 12) * 30 + a.m * 0.5) + ')'); sv.querySelector('.pm').setAttribute('transform', 'rotate(' + a.m * 6 + ')');
}
function sincroniza() { var inp = document.querySelector('[data-campo="relo"]'); if (inp) { inp.value = S.aj.h + ':' + S.aj.m + ':' + S.aj.n; inp.dispatchEvent(new Event('input', { bubbles: true })); } }
function anguloDe(ev) { var r = ARR.getBoundingClientRect(), dx = ev.clientX - (r.left + r.width / 2), dy = ev.clientY - (r.top + r.height / 2), g = Math.atan2(dx, -dy) * 180 / Math.PI; return g < 0 ? g + 360 : g; }
document.addEventListener('pointerdown', function (ev) {
  var p = ev.target.closest && ev.target.closest('svg.arrasta .pega'); if (!p) return;
  ev.preventDefault(); ARR = p.closest('svg'); ARR.__p = p.getAttribute('data-p'); ARR.classList.add('mexe');
  try { ARR.setPointerCapture(ev.pointerId); } catch (e) { /* segue */ }
});
document.addEventListener('pointermove', function (ev) {
  if (!ARR) return; ev.preventDefault();
  var a = S.aj, g = anguloDe(ev);
  if (ARR.__p === 'm') {
    var m = Math.round(g / 30) * 5 % 60;   /* de 5 em 5 minutos */
    if (a.m >= 45 && m <= 15) a.h = a.h % 12 + 1; else if (a.m <= 15 && m >= 45) a.h = (a.h + 10) % 12 + 1;   /* passou do 12: a hora anda junto */
    a.m = m;
  } else { var hh = Math.round((g - a.m * 0.5) / 30); a.h = ((hh % 12) + 12) % 12 || 12; }
  a.err = ''; giraMaos();
});
function solta() { if (!ARR) return; ARR.classList.remove('mexe'); ARR = null; sincroniza(); pinta(); }
document.addEventListener('pointerup', solta); document.addEventListener('pointercancel', solta);
CAMPOS.relo = function (v) {
  var p = String(v).split(':').map(Number); if (p.length < 3 || p[2] !== S.aj.n) return;
  if (p[0] !== S.aj.h || p[1] !== S.aj.m) { S.aj.h = p[0]; S.aj.m = p[1]; S.aj.err = ''; pinta(); }
};

/* ---------- os toques desta aula ---------- */
TOQUES.gira = function (b, n, v) {
  var a = S.aj; if (a.ok && a.n < AJ.length) return false;
  var k = v.charAt(0), d = +v.slice(1);
  if (k === 'h') a.h = ((a.h - 1 + d) % 12 + 12) % 12 + 1;
  else { var m = a.m + d; if (m >= 60) { m -= 60; a.h = a.h % 12 + 1; } else if (m < 0) { m += 60; a.h = (a.h + 10) % 12 + 1; } a.m = m; }
  a.err = ''; sincroniza();
};
TOQUES.confere = function () {
  var a = S.aj, x = AJ[a.n]; if (!x) return false;
  var hOk = (a.h % 12) === (x.h % 12), mOk = a.m === x.m;
  if (hOk && mOk) { a.ok = 1; a.err = ''; }
  else if (mOk) a.err = 'The long hand is right! Now the short hand: which hour?' + (x.m === 45 ? ' “Quarter to” names the hour that is coming, so the short hand is almost there.' : '');
  else if (hOk) a.err = 'The short hand is right! Now the long hand: o’clock is on 12, half past on 6, quarter past on 3, quarter to on 9.';
  else a.err = 'Not yet. Ask your teacher to say it again. Set the long hand first.';
};
TOQUES['aj-prox'] = function () { var n = S.aj.n + 1; S.aj = { n: n, h: 12, m: 0, ok: 0, err: '', livre: n >= AJ.length ? 1 : 0 }; };
TOQUES.peca = function (b, n, v) {
  var q = S.qd, x = QD[q.n]; if (!x) return false;
  if (q.err) { q.monta = []; q.err = 0; }
  q.monta.push(v); q.vira = -1;
  var alvo = pecas(x);
  if (q.monta.length === alvo.length) {
    if (q.monta.join(' ') === alvo.join(' ')) { q.vira = q.n; q.n++; q.monta = []; } else q.err = 1;
  }
};
TOQUES.limpa = function () { S.qd.monta = []; S.qd.err = 0; };
TOQUES.ap = function (b, n) { var x = AP[S.ap.n]; if (!x || S.ap.esc === x.dia) return false; S.ap.esc = n; };
TOQUES['ap-prox'] = function () { S.ap = { n: S.ap.n + 1, esc: -1 }; };
TOQUES.bloco = function (b, n) { S.dia.foi[n] = 1; };
TOQUES['dia-esc'] = function (b, n) { if (S.dia.esc === 0) return false; S.dia.esc = n; };
