/* ============================================================
   YOU NEVER DO THE DISHES · SEVEN SQUARES · LIVE CLASS  05/10/2026
   Main series A1 · how often: always · usually · often · sometimes ·
   rarely · never · ANTES do verbo normal, DEPOIS de BE · never/rarely já
   são negativos
   O MUNDO (da aula velha, a ideia fica inteira): Marco e Bea brigam com
   duas palavras, never e always, e as duas estão erradas; a semana de
   verdade, contada em sete quadrados, prova. A CARA: PAPEL QUADRICULADO
   escuro, a semana em sete quadrados que se acendem.
   ÁUDIOS (faster-whisper): os b-* e v-* dizem "rubbish" (britânico),
   não "trash"; a tela mostra o que o áudio diz e ensina trash como a
   palavra americana. Os v-* são as frases JUSTAS (cena VII).
   Fila: FILA-LIVE-386.md · 044.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'cozinha' },
  { k: 'abre', est: 'o', min: 7, img: 'cozinha', rot: 'I · Your Week', t: 'Three numbers about your own week.', p: 'Numbers only, out of seven. No words yet. Your teacher writes them down.' },
  { k: 'briga', est: 'l', min: 7, img: 'corredor', rot: 'II · The Argument', t: 'Four things, out loud.', p: 'Listen first. Say it back with the same angry face. Then see the words.' },
  { k: 'regua', est: 'o', min: 7, img: 'mesa', rot: 'III · Seven Squares', t: 'Six words, and every one is a number.', p: 'Tap a word. Count the squares out loud. Then one true sentence about you.' },
  { k: 'gx', est: 'f', min: 4, img: 'cozinha', rot: 'IV · The Week in Blocks', t: 'Marco and Bea, in blocks.', p: 'Read the blocks out loud. Notice where the word goes. Then build a sentence and say your own.' },
  { k: 'antes', est: 'f', min: 6, img: 'sala', rot: 'V · Before the Verb', t: 'The word has two possible places.', p: 'Say the whole sentence first. Then tap the gap. With a normal verb, nothing gets between the word and the verb.' },
  { k: 'depois', est: 'f', min: 6, img: 'sala', rot: 'VI · Except With BE', t: 'One verb changes the rule.', p: 'Same six words. With am, is and are, the word goes on the other side.' },
  { k: 'provas', est: 'o', min: 7, img: 'mesa', rot: 'VII · The Evidence', t: 'Somebody has the week. Open it and count.', p: 'Open a week. Count the full squares out loud. Who is right?' },
  { k: 'justa', est: 'l', min: 7, extra: 1, img: 'mesa', rot: 'VIII · Say It Fairly', t: 'The same complaint, with the right number.', p: 'Choose the true word. Then listen: they say it fairly.' },
  { k: 'bilhete', est: 'o', min: 7, extra: 1, img: 'cozinha', rot: 'IX · The Note', t: 'Morning. Two mugs, and a piece of paper.', p: 'Three lines for the table. No always, no never.' },
  { k: 'fim', est: 'w', min: 6, img: 'corredor', rot: 'X · Your Own Week', t: 'Your week, and the numbers from scene I.', p: 'Six sentences, one for each word. The number picks the word. The red line watches the place. It goes to your My notes.' }
];

var TR = {
  'b-marco1.mp3': 'You never do the dishes!', 'b-bea1.mp3': 'You always leave the light on.', 'b-marco2.mp3': 'You always leave your bike in the hall.', 'b-bea2.mp3': 'You never take the rubbish out.',
  's-always.mp3': 'I always make coffee.', 's-usually.mp3': 'I usually make coffee.', 's-often.mp3': 'I often make coffee.', 's-sometimes.mp3': 'I sometimes make coffee.', 's-rarely.mp3': 'I rarely make coffee.', 's-never.mp3': 'I never make coffee.',
  'v-marco1.mp3': 'You often do the dishes.', 'v-bea1.mp3': 'You sometimes leave the light on.', 'v-marco2.mp3': 'You usually leave your bike in the hall.', 'v-bea2.mp3': 'You rarely take the rubbish out.'
};

var ABRE = [
  { k: 'THE DISHES', q: 'How many days a week do you do the dishes? A number.', fup: 'Is it the same every week?', st: ['Out of seven, …'], ex: 'About three days.' },
  { k: 'COOKING', q: 'How many days do you cook? A number.', fup: 'And on the weekend?', st: ['About … days.'], ex: 'Five days.' },
  { k: 'SOMEBODY ELSE', q: 'How many days does somebody else do it? A number.', fup: 'Who?', st: ['… days.'], ex: 'Two days. My brother.' }
];
var BRIGA = [{ au: 'b-marco1.mp3', q: 'MARCO', l: 'a' }, { au: 'b-bea1.mp3', q: 'BEA', l: 'b' }, { au: 'b-marco2.mp3', q: 'MARCO', l: 'a' }, { au: 'b-bea2.mp3', q: 'BEA', l: 'b' }];
var REGUA = [
  { w: 'always', n: 7, r: '7', au: 's-always.mp3', q: 'What do you always do in the morning?', ex: 'I always drink coffee in the morning.' },
  { w: 'usually', n: 6, r: '5–6', au: 's-usually.mp3', q: 'Where do you usually eat lunch?', ex: 'I usually eat lunch at work.' },
  { w: 'often', n: 4, r: '3–4', au: 's-often.mp3', q: 'What do you often do on your phone?', ex: 'I often watch videos on my phone.' },
  { w: 'sometimes', n: 2, r: '1–2', au: 's-sometimes.mp3', q: 'What do you sometimes eat at night?', ex: 'I sometimes eat ice cream at night.' },
  { w: 'rarely', n: 1, r: '< 1', au: 's-rarely.mp3', q: 'What do you rarely do on Sunday?', ex: 'I rarely work on Sunday.' },
  { w: 'never', n: 0, r: '0', au: 's-never.mp3', q: 'What do you never eat?', ex: 'I never eat liver.' }
];
var ANTES = [
  { pal: 'always', a: 'She', v: 'makes', b: 'the coffee.', ok: 0, fb: 'Before the verb, and nothing between them.' },
  { pal: 'never', a: 'Marco', v: 'takes', b: 'the trash out.', ok: 0, fb: 'Same place. Never is already negative, so takes stays positive.' },
  { pal: 'usually', a: 'They', v: 'eat', b: 'at home.', ok: 0, fb: 'Three for three. The word sits in front of the verb.' },
  { pal: 'rarely', a: 'I', v: 'cook', b: 'on Monday.', ok: 0, fb: 'Rarely is almost zero. It doesn’t need don’t.' },
  { pal: 'often', a: 'We', v: 'leave', b: 'the light on.', ok: 0, fb: 'Five, and the word hasn’t moved once.' },
  { pal: 'sometimes', a: 'He', v: 'washes', b: 'the pans.', ok: 0, fb: 'Six for six. One place, every normal verb.' }
];
var DEPOIS = [
  { pal: 'never', a: 'He', v: 'is', b: 'late.', ok: 1, fb: 'After BE. One verb, one exception.' },
  { pal: 'always', a: 'They', v: 'are', b: 'tired on Friday.', ok: 1, fb: 'Same side. The word follows are.' },
  { pal: 'usually', a: 'I', v: 'am', b: 'home by seven.', ok: 1, fb: 'Am counts too. All three forms of BE do.' },
  { pal: 'sometimes', a: 'The kitchen', v: 'is', b: 'a mess.', ok: 1, fb: 'Four, and every one after the verb.' },
  { pal: 'rarely', a: 'We', v: 'are', b: 'both here at lunch.', ok: 1, fb: 'Five, and the verb stayed positive again.' },
  { pal: 'often', a: 'She', v: 'is', b: 'the last one to leave.', ok: 1, fb: 'Six for six. Two places, and the verb decides.' }
];
var PROVAS = [
  { quem: 'BEA', o: 'does the dishes', dias: [1, 0, 1, 1, 0, 1, 0], acusa: 'never', verd: 'often' },
  { quem: 'MARCO', o: 'leaves the light on', dias: [0, 1, 0, 0, 0, 1, 0], acusa: 'always', verd: 'sometimes' },
  { quem: 'BEA', o: 'leaves the bike in the hall', dias: [1, 1, 1, 0, 1, 1, 1], acusa: 'always', verd: 'usually' },
  { quem: 'MARCO', o: 'takes the trash out', dias: [0, 0, 0, 1, 0, 0, 0], acusa: 'never', verd: 'rarely' }
];
var JUSTA = [
  { fato: 'Bea does the dishes 4 days out of 7.', fr: 'You ? do the dishes.', ok: 'often', au: 'v-marco1.mp3', nao: { usually: 'Usually is five or six. Four is one step down.' } },
  { fato: 'Marco leaves the light on 2 days out of 7.', fr: 'You ? leave the light on.', ok: 'sometimes', au: 'v-bea1.mp3', nao: {} },
  { fato: 'Bea leaves the bike in the hall 6 days out of 7.', fr: 'You ? leave your bike in the hall.', ok: 'usually', au: 'v-marco2.mp3', nao: {} },
  { fato: 'Marco takes the trash out once in three weeks.', fr: 'You ? take the trash out.', ok: 'rarely', au: 'v-bea2.mp3', nao: {} }
];
var OPS_J = ['usually', 'often', 'sometimes', 'rarely'];
var BILHETE = [
  { q: 'Name one thing. Most days, you do it.', h: 'I usually …', ex: 'I usually make dinner.' },
  { q: 'Say one thing the other person does a lot.', h: 'You often …', ex: 'You often wash the pans. Thank you!' },
  { q: 'Ask for one thing, fairly.', h: 'Please …', ex: 'Please take the trash out on Mondays.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  abre: { sel: -1, foi: {}, formas: {} }, briga: {}, regua: { sel: -1 }, antes: { n: 0, esc: -1 }, depois: { n: 0, esc: -1 }, prova: { sel: -1, contou: {} }, justa: { n: 0, esc: '' }, bil: {} };

function semana(dias, n, cls) {
  var D = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return '<div class="semana' + (cls ? ' ' + cls : '') + '">' + D.map(function (d, i) { var on = dias ? dias[i] : i < n; return '<span class="q' + (on ? ' on' : '') + '"><i>' + d + '</i></span>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div class="lado-a"><span class="kick">MAIN SERIES · A1 · HOW OFTEN</span><h1>You <b>Never</b> Do the Dishes</h1>'
    + '<p class="sub">Two people, one small apartment, one bad week. The fight has two words, and both of them are wrong.</p>'
    + '<div class="chipsx"><span class="pilula">always · never</span><span class="pilula">usually · often</span><span class="pilula">sometimes · rarely</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the week</button>' + faixaLive() + '</div>'
    + '<div class="vd capa-s"><p class="briga-c"><b>MARCO</b> “You <u>never</u> do the dishes!”</p>' + semana([1, 0, 1, 1, 0, 1, 0]) + '<p class="sussurro">Four squares out of seven. Is it never?</p></div></div>';
};

R.abre = function (c) { return cartasPessoais(c, ABRE, S.abre, 'abre') + '<p class="so-prof dica-aluno" style="text-align:center;color:var(--t3)">Write the three numbers down. They come back in scene IX, where the number picks the word.</p>'; };

R.briga = function (c) {
  var e = S.briga;
  return cab(c) + '<div class="briga">' + BRIGA.map(function (b, i) {
    var ouviu = (S.ouviu || {})[b.au];
    return '<div class="fala-b vd lado-' + b.l + (e[i] ? ' feito' : '') + '"><small>' + b.q + '</small><div class="toca-linha">' + tocar(b.au) + '<div class="lin">' + (e[i] ? '<span class="frase-b">' + TR[b.au].replace(/(never|always)/, '<u>$1</u>') + '</span>' : ouviu ? '<button type="button" class="pilula" data-a="bg" data-n="' + i + '">Said it back, angry · show it</button>' : '<span class="transcricao vazia">Listen first.</span>') + '</div></div></div>';
  }).join('') + '</div>' + (Object.keys(e).length === 4 ? '<p class="aprova" style="text-align:center">Four sentences, and every one is a seven or a zero. Nothing in between. (Rubbish is the British word: in American English, trash.)</p>' : '');
};

R.regua = function (c) {
  var e = S.regua, x = e.sel >= 0 ? REGUA[e.sel] : null;
  var palavras = '<div class="regua">' + REGUA.map(function (r, i) { return '<button type="button" class="degrau' + (e.sel === i ? ' on' : '') + '" data-a="rg" data-n="' + i + '"><b>' + r.w + '</b><small>' + r.r + ' / 7</small></button>'; }).join('') + '</div>';
  var lado = x ? semana(null, x.n, 'grande') + '<div class="toca-linha vd">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>' + follow('ABOUT YOU', x.q, ['I ' + x.w + ' …'], [], 'rg' + e.sel, mostra('rg' + e.sel, x.ex, 1)) : '<p class="dica-aluno">Tap a word. Count the squares out loud: one, two, three … The numbers are a guide, not a rule.</p>' + semana(null, 0, 'grande');
  return cab(c) + '<div class="mesa-r">' + palavras + '<div class="lado-l">' + lado + '</div></div>';
};

function cenaLugar(c, lista, est, toque, regra) {
  var n = est.n;
  if (n >= lista.length) return cab(c) + trilha(lista, n) + '<div class="foco"><div class="pergunta vd"><small>DONE</small><h2>' + (regra === 'be' ? 'Two places, and the verb decides which one: before a normal verb, after am, is, are.' : 'Six sentences, and the word goes to the same place every time: before the verb.') + '</h2></div></div>';
  var x = lista[n], ok = est.esc === x.ok;
  var gap = function (i) { var cheio = ok && i === x.ok; return '<button type="button" class="fenda' + (est.esc === i ? (ok ? ' certo' : ' errado') : '') + (cheio ? ' cheia' : '') + '" data-a="' + toque + '" data-v="' + i + '">' + (cheio ? x.pal : '•') + '</button>'; };
  var nao = regra === 'be' ? 'That is the rule from the scene before. BE is the one verb that breaks it.' : 'That is where many languages put it. English doesn’t: nothing between the word and the verb.';
  return cab(c) + trilha(lista, n) + '<div class="foco"><div class="palavra-v vd"><small>THE WORD</small><b>' + x.pal + '</b></div><div class="frase-l">' + x.a + ' ' + gap(0) + ' <span class="verbo">' + x.v + '</span> ' + gap(1) + ' ' + x.b + '</div>'
    + (est.esc >= 0 && !ok ? '<p class="recusa" style="text-align:center">' + nao + '</p>' : '') + (ok ? '<p class="aprova" style="text-align:center">GOT IT. ' + x.fb + ' Say it.</p><div style="text-align:center"><button type="button" class="btn" data-a="' + toque + '-prox">Next</button></div>' : '') + '</div>';
}
R.antes = function (c) { return cenaLugar(c, ANTES, S.antes, 'an', 'normal'); };
R.depois = function (c) { return cenaLugar(c, DEPOIS, S.depois, 'dp', 'be'); };

R.provas = function (c) {
  var e = S.prova;
  return cab(c) + '<div class="provas">' + PROVAS.map(function (p, i) {
    var aberta = e.sel === i || e.contou[i], n = p.dias.reduce(function (a, b) { return a + b; }, 0);
    return '<div class="prova vd' + (e.contou[i] ? ' feita' : '') + '"><div class="pr-topo"><b>' + p.quem + '</b><span>' + p.o + '</span><i class="acusa">“' + p.acusa + '”</i></div>'
      + (aberta ? semana(p.dias) + (e.contou[i] ? '<p class="veredito"><b>' + n + ' / 7</b> → not ' + p.acusa + ': <u>' + p.verd + '</u></p>' : '<button type="button" class="pilula" data-a="pv-c" data-n="' + i + '">Counted out loud · show the number</button>') : '<button type="button" class="btn" data-a="pv" data-n="' + i + '">Open the week</button>') + '</div>';
  }).join('') + '</div>' + (Object.keys(e.contou).length === 4 ? '<p class="aprova" style="text-align:center">Nobody was right. And the two words they used were exactly the two that didn’t fit.</p>' : '');
};

R.justa = function (c) {
  var e = S.justa, n = e.n;
  if (n >= JUSTA.length) return cab(c) + trilha(JUSTA, n) + '<div class="foco"><div class="pergunta vd"><small>FOUR VERDICTS</small><h2>The fight is two words long, and both of them are wrong.</h2></div></div>';
  var x = JUSTA[n], ok = e.esc === x.ok, ouviu = (S.ouviu || {})[x.au];
  return cab(c) + trilha(JUSTA, n) + '<div class="foco"><div class="pede vd"><small>THE FACT</small><b>' + x.fato + '</b></div><div class="frase-l">' + x.fr.replace('?', '<span class="fenda' + (ok ? ' cheia' : '') + '">' + (ok ? x.ok : '…') + '</span>') + '</div>'
    + '<div class="tres-b centro">' + OPS_J.map(function (o) { return '<button type="button" class="pilula grande' + (e.esc === o ? (ok ? ' certo' : ' errado') : '') + '" data-a="js" data-v="' + o + '">' + o + '</button>'; }).join('') + '</div>'
    + (e.esc && !ok ? '<p class="recusa" style="text-align:center">' + (x.nao[e.esc] || 'Count again: how many out of seven?') + '</p>' : '')
    + (ok ? '<div class="toca-linha vd centro">' + tocar(x.au) + '<div>' + transcricao(x.au, TR[x.au]) + '</div></div>' + (ouviu ? '<div style="text-align:center"><button type="button" class="btn" data-a="js-prox">Next</button></div>' : '<p class="dica-aluno" style="text-align:center">Now listen: they say it fairly.</p>') : '') + '</div>';
};

R.bilhete = function (c) {
  return cab(c) + '<div class="mesa-r"><div class="nota vd">' + BILHETE.map(function (b, i) { return '<p class="linha-n' + (S.bil[i] ? ' on' : '') + '">' + (S.bil[i] ? b.ex : '<span>' + b.h + '</span>') + '</p>'; }).join('') + '<small>— a note on the table</small></div><div class="lado-l">'
    + BILHETE.map(function (b, i) { return '<div class="pergunta vd ja"><small>LINE ' + (i + 1) + '</small><h2>' + b.q + '</h2><div><button type="button" class="pilula' + (S.bil[i] ? ' certo' : '') + '" data-a="bl" data-n="' + i + '">' + (S.bil[i] ? 'Example on the note' : 'Said it · show an example') + '</button></div></div>'; }).join('')
    + '<p class="dica-aluno">A note is not an argument. It is what you say when you have counted.</p></div></div>';
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I often do the dishes.\nI usually cook on weekdays.\nI am never late.', 'Your week',
    ['I always ', 'I usually ', 'I often ', 'I sometimes ', 'I rarely ', 'I never ', 'I am never '], ['YOUR THREE NUMBERS', 'In scene I you say three numbers. Now let each number pick its word, and write six sentences.'])
    + '<div class="lado-fim">' + semana([1, 0, 1, 1, 0, 1, 0]) + '<div class="grande vd"><span>count first: 7 · 5–6 · 3–4 · 1–2 · &lt;1 · 0</span><span>she <u>always makes</u> (before the verb)</span><span>he <u>is never</u> late (after BE)</span><span>I never eat (no <u>don’t</u>)</span></div>'
    + mostra('fim', 'I often do the dishes. I usually cook on weekdays.<br>My brother sometimes cooks. I rarely take the trash out.<br>I am never late for work!', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES.bg = function (b, n) { S.briga[n] = 1; };
TOQUES.rg = function (b, n) { S.regua.sel = n; };
TOQUES.an = function (b, n, v) { S.antes.esc = +v; };
TOQUES['an-prox'] = function () { S.antes = { n: S.antes.n + 1, esc: -1 }; };
TOQUES.dp = function (b, n, v) { S.depois.esc = +v; };
TOQUES['dp-prox'] = function () { S.depois = { n: S.depois.n + 1, esc: -1 }; };
TOQUES.pv = function (b, n) { S.prova.sel = n; };
TOQUES['pv-c'] = function (b, n) { S.prova.contou[n] = 1; };
TOQUES.js = function (b, n, v) { S.justa.esc = v; };
TOQUES['js-prox'] = function () { S.justa = { n: S.justa.n + 1, esc: '' }; };
TOQUES.bl = function (b, n) { S.bil[n] = 1; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de antes.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'Bea’s week, in blocks. Each block has a job.',
  frases: [
    { b: [['Marco', 'WHO'], ['often', 'HOW OFTEN', 'quando'], ['takes out', 'ACTION'], ['the trash', 'WHAT']], d: 'The word of frequency is before the action.' },
    { b: [['Marco', 'WHO'], ['is', 'BE', 'aux'], ['never', 'HOW OFTEN', 'quando'], ['late', 'HOW']], d: 'With be, the word goes after.' },
    { b: [['Bea', 'WHO'], ['doesn’t', 'NOT', 'aux'], ['always', 'HOW OFTEN', 'quando'], ['cook', 'ACTION']], d: 'In a no sentence: after doesn’t.' }
  ],
  nota: 'Always, usually, often, sometimes, rarely, never go <b>before</b> a normal verb: Bea <b>always</b> cooks. They go <b>after</b> <b>be</b>: Marco is <b>never</b> late. Never is already a no.',
  monta: { p: 'Build the next line. Then say it.', pecas: [['the dishes', 'WHAT'], ['usually', 'HOW OFTEN', 'quando'], ['Bea', 'WHO'], ['washes', 'ACTION']], ordem: [2, 1, 3, 0], outras: [[2, 3, 1, 0]] },
  uso: { p: 'Now you. Say two sentences about your week with a frequency word.', molde: ['I always …', 'I am rarely …'], ex: 'I always drink coffee. I am rarely late.' },
  prof: 'Read the blocks with the student, top to bottom. Point at the place of the frequency word.' };
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
