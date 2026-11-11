/* ============================================================
   TWENTY-SIX THOUSAND · THE REWIND · LIVE CLASS  06/10/2026
   Main series B2 · I wish / If only: wish + passado (agora: um passo
   para trás) · wish + had + particípio (antes: dois passos) · wish +
   pessoa + would (hábito de outra pessoa). "I wanted to" não é
   arrependimento. Erros: I wish I have, I wish you will, I wish I went
   (sobre o passado), I wish I would (sobre si mesmo), If only I can.
   O MUNDO (da aula velha): mais de 26 mil arrependimentos coletados;
   62,6% eram coisas NÃO feitas; os quatro tipos (alicerce, ousadia,
   moral, conexão); quatro depoimentos (s1–s4) mantidos e conferidos no
   faster-whisper em 06/10: batem. Sem vídeo. Nenhum nome de autor na tela.
   A CARA (nova; a velha era o céu de constelações): o REBOBINAR — uma
   régua de tempos (PAST PERFECT · PAST · PRESENT) onde o verbo do fato
   está num lugar e o verbo do desejo desliza um ou dois passos para a
   esquerda, com o contador de fita girando para trás; e as 100 bolinhas
   do 62,6 (o que não fizeram × o que fizeram).
   Fila: FILA-LIVE-386.md · 137. Pasta piloto-regret (conferida: não existia).
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre três frases quase iguais. III = o fato,
   o aluno FALA o desejo e toca Check: a fita rebobina e mostra o verbo
   voltando (FM.fala, SEIS fatos, eram oito); IV = separar seis frases em
   "diz que não aconteceu" / "não diz" (FM.separa); V = depois de ouvir, tocar
   o que a pessoa deseja (opções de SENTIDO diferente) e dizer com I wish
   (FM.escolhe); VI = o tipo de arrependimento por motivo (FM.escolhe);
   VII = três perguntas calmas em cartas (FM.cartas); VIII = achar a parte
   quebrada de CINCO desejos (FM.erro, era 5+1). I, II e IX ficam.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'ceu' },
  { k: 'abre', est: 'o', min: 7, img: 'bilhetes', rot: 'I · Something Different', t: 'Think of one thing in your life you would like to be different right now.', p: 'Tap the area. Then answer out loud. Share only what you want.' },
  { k: 'dado', est: 'o', min: 7, img: 'arena', rot: 'II · Sixty-Two Point Six', t: 'Almost a thousand people were asked for the biggest regret of their life.', p: 'Predict. Say why. Then choose.' },
  { k: 'gx', est: 'f', min: 4, img: 'ceu', rot: 'III · The Ladder', t: 'One fact, five steps back in time.', p: 'Read each step out loud, then go one step up. Notice what happens to the verb. Then climb with your own wish.' },
  { k: 'rebobina', est: 'f', min: 7, img: 'ceu', rot: 'IV · The Rewind', t: 'A wish rewinds the verb. Now: one step back. Then: two steps back. Someone else: WOULD.', p: 'Read the fact. Say the wish out loud. Tap Check and watch the verb slide back.' },
  { k: 'duas', est: 'f', min: 6, img: 'folha-luz', rot: 'V · Two Correct Sentences', t: '“I wanted to go” is perfect English. It says nothing about whether you went.', p: 'Tap a sentence, then its box. Does the grammar SAY it didn’t happen?' },
  { k: 'vozes', est: 'l', min: 7, img: 'mural', rot: 'VI · Four Submissions', t: 'Four people sent in a regret. None of them says “I wish”.', p: 'Play each one. Tap what the person wishes. Then say it with I wish or If only.' },
  { k: 'tipos', est: 'f', min: 6, img: 'arena', rot: 'VII · Four Kinds of Regret', t: 'Foundation, boldness, moral, connection.', p: 'Read the case. Tap the kind. Then say it with IF ONLY.' },
  { k: 'dias', est: 'o', min: 7, extra: 1, img: 'ceu', rot: 'VIII · Twenty-Six Thousand Days', t: 'About twenty-six thousand days is a long life. Three calm questions about yours.', p: 'Tap a card. Say the answer with a wish. Then answer for real.' },
  { k: 'erros', est: 'f', min: 6, extra: 1, img: 'folha-luz', rot: 'IX · Catch the Broken One', t: 'Five wishes are broken.', p: 'Find the broken part in each line. Say the fix. Then tap Check.' },
  { k: 'fim', est: 'w', min: 6, img: 'bilhetes', rot: 'X · Your Wish, Exactly', t: 'Your area from scene I, as one exact wish.', p: 'One wish for now, one for then. They go to your My notes.' }
];

var TR = {
  's1.mp3': 'I moved there for the job and I lived there eleven years. I never learned more than about forty words of the language.',
  's2.mp3': 'They offered me the transfer in the spring. I asked for a week to think about it, and then I asked for another week.',
  's3.mp3': 'My grandmother wrote to me twice. I kept the letters in a drawer and I told myself I would answer at New Year.',
  's4.mp3': 'I knew the numbers in that report were wrong before it went out. Everybody was tired and I let it go.'
};

var TEMAS = ['my job', 'where I live', 'my free time', 'my English', 'my health habits', 'my daily routine'];
var ABRE = [
  { q: 'What exactly would you change?', fup: 'Why that one?', st: ['I would change …'], ex: 'I would change my hours. I work too late.' },
  { q: 'How long has it been like this?', fup: 'Was it always like this?', st: ['For about …'], ex: 'For about two years, since the new manager.' },
  { q: 'Is there something you did, or didn’t do, that made it this way?', fup: 'Could you change it now?', st: ['I didn’t …', 'I …'], ex: 'I didn’t say no when they asked the first time.' }
];

/* f: o fato (verbo do fato em pos), w: o desejo; pos 2 = PRESENT, 1 = PAST, 0 = PAST PERFECT; passos: quanto o verbo volta */
var REB = [
  { fato: 'I don’t speak French, and I need it for work.', fv: 'speak', de: 2, para: 1, wv: 'spoke', k: 'NOW', ini: 'I wish I …', resp: 'I wish I spoke French.', dep: 'Which language do you wish you spoke?' },
  { fato: 'I didn’t take the job in Lisbon last year.', fv: 'took', de: 1, para: 0, wv: 'had taken', k: 'THEN', ini: 'I wish I …', resp: 'I wish I had taken the job.', dep: 'Which job or trip do you wish you had taken?' },
  { fato: 'My neighbor plays loud music every night.', fv: 'plays', de: 2, para: -1, wv: 'would turn', k: 'SOMEONE ELSE', ini: 'I wish he …', resp: 'I wish he would turn it down.', dep: 'What do you wish a neighbor would stop doing?' },
  { fato: 'I live far from my family.', fv: 'live', de: 2, para: 1, wv: 'lived', k: 'NOW', ini: 'If only I …', resp: 'If only I lived closer to them.', dep: 'Who do you wish lived closer to you?' },
  { fato: 'I didn’t answer my grandmother’s letters.', fv: 'answered', de: 1, para: 0, wv: 'had written', k: 'THEN', ini: 'If only I …', resp: 'If only I had written back.', dep: 'Is there a letter or a call you wish you had answered?' },
  { fato: 'My colleague always interrupts me.', fv: 'interrupts', de: 2, para: -1, wv: 'would let', k: 'SOMEONE ELSE', ini: 'I wish she …', resp: 'I wish she would let me finish.', dep: 'What habit do you wish a colleague would change?' }
];
var REB_FALA = REB.map(function (x) { return { pista: '<span class="ano">' + x.k + '</span>' + x.fato + '<span class="rg-dica">Start with: ' + x.ini + '</span>', resp: x.resp, depois: x.dep }; });

var SEPARA_DUAS = { formato: 'separa', titulo: 'Tap a sentence, then its box.', caixas: ['It SAYS it didn’t happen', 'It DOESN’T say'], itens: [
  { t: 'I wanted to go to the concert.', c: 1 }, { t: 'I wish I had gone to the concert.', c: 0 },
  { t: 'I wanted to learn the guitar.', c: 1 }, { t: 'If only I had kept practicing.', c: 0 },
  { t: 'I wanted to call her.', c: 1 }, { t: 'I wish I had called her.', c: 0 }
] };

var VOZES = [
  { au: 's1.mp3', quem: 'ELEVEN YEARS ABROAD', o: ['They had saved more money.', 'They had learned the language.', 'They had moved home sooner.'], c: 1, w: 'I wish I had learned the language.' },
  { au: 's2.mp3', quem: 'THE TRANSFER', o: ['They had said yes to the transfer.', 'They had asked for more money.', 'They had waited another week.'], c: 0, w: 'If only I had said yes to the transfer.' },
  { au: 's3.mp3', quem: 'TWO LETTERS', o: ['They had called more often.', 'They had thrown the letters away.', 'They had answered the letters.'], c: 2, w: 'I wish I had answered her letters.' },
  { au: 's4.mp3', quem: 'THE REPORT', o: ['They had checked the numbers again.', 'They had stopped the report.', 'They had written a shorter report.'], c: 1, w: 'I wish I hadn’t let the report go out.' }
];

var TIPOS = [
  { sit: 'I spent everything I earned in my twenties.', k: 'FOUNDATION', ops: ['FOUNDATION', 'BOLDNESS', 'CONNECTION'], w: 'If only I had saved a little every month.' },
  { sit: 'She was right there and I never asked her out.', k: 'BOLDNESS', ops: ['BOLDNESS', 'MORAL', 'FOUNDATION'], w: 'If only I had asked her.' },
  { sit: 'I let them think it was someone else’s mistake.', k: 'MORAL', ops: ['MORAL', 'CONNECTION', 'BOLDNESS'], w: 'If only I had told the truth.' },
  { sit: 'We just stopped answering, and then it was four years.', k: 'CONNECTION', ops: ['CONNECTION', 'FOUNDATION', 'MORAL'], w: 'If only I had called him.' },
  { sit: 'I had the money for the course and kept saying next year.', k: 'BOLDNESS', ops: ['BOLDNESS', 'MORAL', 'CONNECTION'], w: 'If only I had signed up.' }
];
var TIPO_N = { FOUNDATION: 'small decisions that pile up', BOLDNESS: 'you played it safe', MORAL: 'you knew better', CONNECTION: 'a relationship drifted' };

var DIAS = [
  { k: 'THEN', q: 'Looking back ten years, what is one thing you wish you had started?', ini: 'I wish I had …' },
  { k: 'NOW', q: 'What is one thing about your life now that you wish were different?', ini: 'I wish I … (one step back)' },
  { k: 'SOMEONE ELSE', q: 'Is there a habit of someone close to you that you wish would change?', ini: 'I wish he / she would …' }
];
var CARTAS_DIAS = { formato: 'cartas', titulo: 'Three calm questions · tap a card', fechada: 'Tap to open', cartas: DIAS.map(function (x, i) { return [(i + 1) + ' · ' + x.k, x.q + '<br><em style="color:var(--ac2)">Start with: ' + x.ini + '</em>']; }) };
var TIPOS_ESC = { formato: 'escolhe', titulo: 'Which kind of regret is it? Tap. Then say it with IF ONLY.', itens: TIPOS.map(function (x, i) {
  var c = [1, 0, 2, 1, 0][i], o = x.ops.slice(1); o.splice(c, 0, x.ops[0]);
  return { p: '“' + x.sit + '”', o: o, c: c, d: '<b>' + x.k + '</b>: ' + TIPO_N[x.k] + '. Say it: <b>' + x.w + '</b>' };
}) };

var ERROS = [
  { f: 'I wish I <u>have</u> more time.', r: 'had' },
  { f: 'I wish you <u>will</u> stop shouting.', r: 'would' },
  { f: 'I wish I <u>went</u> to the party last week.', r: 'had gone' },
  { f: 'If only I <u>can</u> drive.', r: 'could' },
  { f: 'I wish I <u>would speak</u> better English.', r: 'spoke' }
];
var PLACA_ERROS = '<b>Now</b> → past: I wish I <b>had</b>.<br><b>Then</b> → had + 3rd form: I wish I <b>had gone</b>.<br><b>Someone else</b> → <b>would</b>.';

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  ab: { tema: '', n: 0, foi: {} }, dd: { esc: -1 }, vz: { n: 0, esc: -1 } };

/* a régua do rebobinar */
function regua(x, foi) {
  var col = ['PAST PERFECT', 'PAST', 'PRESENT'];
  var alvo = foi ? (x.para < 0 ? 2 : x.para) : x.de;
  return '<div class="rg-fita"><div class="rg-contador' + (foi ? ' gira' : '') + '"><i></i><i></i><b>' + (foi ? (x.para < 0 ? 'WOULD' : (x.de - x.para === 1 ? '◀ 1 STEP' : '◀◀ 2 STEPS')) : 'FACT') + '</b></div>'
    + '<div class="rg-regua">' + col.map(function (c, i) {
      var tem = i === alvo, fato = i === x.de;
      return '<div class="rg-casa' + (tem ? ' on' : '') + (fato && foi && x.para >= 0 ? ' fantasma' : '') + '"><small>' + c + '</small>' + (fato && (!foi || x.para < 0) ? '<span class="rg-v fato">' + x.fv + '</span>' : '') + (foi && x.para >= 0 && tem ? '<span class="rg-v desejo">' + x.wv + '</span>' : '') + (foi && x.para < 0 && i === 2 ? '<span class="rg-v outro">' + x.wv + '</span>' : '') + (fato && foi && x.para >= 0 ? '<span class="rg-v velho">' + x.fv + '</span>' : '') + '</div>';
    }).join('') + '</div><div class="rg-lado"><span class="' + (x.k === 'NOW' ? 'on' : '') + '">NOW · wish + past</span><span class="' + (x.k === 'THEN' ? 'on' : '') + '">THEN · wish + had + 3rd</span><span class="' + (x.k === 'SOMEONE ELSE' ? 'on' : '') + '">SOMEONE ELSE · would</span></div></div>';
}
/* as cem bolinhas: 62.6 */
function bolinhas(mostra) {
  var b = ''; for (var i = 0; i < 100; i++) b += '<i class="' + (mostra ? (i < 63 ? 'nao' : 'fez') : '') + '"></i>';
  return '<div class="rg-dots">' + b + '</div>' + (mostra ? '<div class="rg-leg"><span class="nao">62.6% · THINGS THEY DIDN’T DO</span><span class="fez">37.4% · THINGS THEY DID</span></div>' : '');
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="rg-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · I WISH · IF ONLY</span><h1>Twenty-Six <b>Thousand</b></h1>'
    + '<p class="sub"><i>I wanted to go.</i> Perfect English, and it says nothing. <b>I wish I had gone.</b> Now the sentence knows it didn’t happen: the verb rewinds two steps.</p>'
    + '<div class="chipsx"><span class="pilula">I wish I spoke</span><span class="pilula">I wish I had gone</span><span class="pilula">I wish you would</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Press rewind</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + regua(REB[1], 1) + '</div></div>';
};

R.abre = function (c) {
  var e = S.ab;
  var chips = '<div class="rg-temas">' + TEMAS.map(function (t) { return '<button type="button" class="pilula' + (e.tema === t ? ' on' : '') + '" data-a="ab-t" data-v="' + h(t) + '">' + t + '</button>'; }).join('') + '</div>';
  if (!e.tema) return cab(c) + chips + '<p class="dica-aluno" style="text-align:center">Tap an area. Small things are fine.</p>';
  return cab(c) + chips + sequencia({ est: 'o', rot: '', t: '', p: '' }, ABRE, e, 'ab', 'Keep your answer. At the end of the hour, it becomes one exact wish.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '')
    + '<p class="so-prof dica-aluno" style="text-align:center">Keep it calm: decisions, things, habits. “I wanted to …”, “I wish I have …”: don’t correct yet.</p>';
};

R.dado = function (c) {
  var e = S.dd, ok = e.esc === 0;
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + bolinhas(ok) + '</div><div class="lado-l"><div class="pergunta vd ja"><small>PREDICT, WITH A REASON</small><h2>Which way does the world lean?</h2></div>'
    + tres('dd', ['Things they did NOT do: 62.6%.', 'Things they DID: 62.6%.', 'About half and half.'], e.esc, 3)
    + (ok ? '<div class="balao vd ok-b"><small>THE SENTENCE FOR THE 62.6</small><p>Most people don’t say “I wish I hadn’t”. They say <u>I wish I had</u>.</p></div>' : e.esc > 0 ? '<p class="recusa">Think about what people are still thinking about at seventy.</p>' : '') + '</div></div>';
};

R.rebobina = function (c) {
  return cab(c) + FM.ex('rb', { formato: 'fala', itens: REB_FALA, rotulo: 'Fact', prox: 'Next fact', diga: 'Say the wish out loud first', fim: 'Now: one step back. Then: two steps back. Someone else’s habit: WOULD. A true wish for each.',
    lado: function (a, i, ver) { return regua(REB[i < 0 ? REB.length - 1 : i], i < 0 ? 1 : ver); } });
};

R.duas = function (c) {
  var em = (S.fq && S.fq.du && S.fq.du.em) || {}, pronta = SEPARA_DUAS.itens.every(function (x, i) { return em[i] === x.c; });
  return cab(c) + FM.ex('du', SEPARA_DUAS)
    + (pronta ? '<p class="aprova" style="text-align:center">Three wants, three regrets. Only WISH and IF ONLY say it didn’t happen. Say the three “wanted to” lines again as wishes.</p>' : '<p class="dica-aluno" style="text-align:center">“I wanted to go, and I went”: possible?</p>');
};

R.vozes = function (c) {
  var e = S.vz, fim = e.n >= VOZES.length, n = Math.min(e.n, VOZES.length - 1), x = VOZES[n], ouviu = (S.ouviu || {})[x.au];
  if (fim) return cab(c) + trilha(VOZES, e.n) + '<div class="foco"><div class="pergunta vd"><small>FOUR SUBMISSIONS</small><h2>Three things they didn’t do, one they did. What does each person value?</h2></div></div>';
  var fq = S.fq && S.fq['vz' + n], resp = fq && fq.r && fq.r[0] != null;
  return cab(c) + trilha(VOZES, e.n) + '<div class="mesa-c"><div class="lado-l"><div class="rg-ouve vd"><div class="toca-linha">' + tocar(x.au) + '<b>' + x.quem + '</b></div>' + transcricao(x.au, TR[x.au]) + '</div></div>'
    + '<div class="lado-l">' + (ouviu ? FM.ex('vz' + n, { formato: 'escolhe', titulo: 'What does this person wish? Tap. Then say it.', itens: [{ p: 'The person wishes …', o: x.o, c: x.c, d: 'Say it: <b>' + x.w + '</b>' }] }) + (resp ? '<div><button type="button" class="btn" data-a="vz-prox">Next voice</button></div>' : '') : '<p class="dica-aluno">Play it first.</p>') + '</div></div>';
};

R.tipos = function (c) {
  var quadro = '<div class="rg-quadro">' + Object.keys(TIPO_N).map(function (k) { return '<div class="rg-tipo"><b>' + k + '</b><small>' + TIPO_N[k] + '</small></div>'; }).join('') + '</div>';
  return cab(c) + '<div class="mesa-c"><div class="lado-l">' + quadro + '</div><div class="lado-l">' + FM.ex('tp', TIPOS_ESC) + '</div></div>';
};

R.dias = function (c) {
  return cab(c) + FM.ex('di', CARTAS_DIAS) + '<p class="so-prof dica-aluno" style="text-align:center">Allow silence. Then ask: what does that wish tell you that you value?</p>';
};

R.erros = function (c) {
  return cab(c) + FM.ex('er', { formato: 'erro', titulo: 'Five wishes are broken. Find the broken part. Say the fix.', itens: ERROS, regra: PLACA_ERROS });
};

R.fim = function (c) {
  var t = S.ab.tema || 'my job';
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I wish ' + t + ' were …\nI wish I had … sooner.\nI wish … would …', 'Your wish',
    ['I wish', 'If only', 'had', 'were', 'would'], ['YOUR WISH, EXACTLY', 'Your area from scene I: one wish for now, one for then, and, kindly, one about someone else.'])
    + '<div class="lado-fim">' + regua(REB[0], 1)
    + '<div class="grande vd"><span><u>I wish + past</u> · now, one step back</span><span><u>I wish + had + third form</u> · then, two steps</span><span><u>I wish + person + would</u> · someone else’s habit</span><span>not <s>I wish I have</s>, not <s>I wish you will</s>; “I wanted to” is not a regret</span></div>'
    + mostra('fim', 'I wish my job were closer to home.<br>I wish I had said no the first time.<br>I wish my manager would plan the week earlier.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['ab-t'] = function (b, n, v) { S.ab.tema = v; };
TOQUES.dd = function (b, n) { S.dd.esc = n; };
TOQUES.vz = function (b, n) { S.vz.esc = n; };
TOQUES['vz-prox'] = function () { S.vz = { n: S.vz.n + 1, esc: -1 }; };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G6 · uma cena curta nova (k: gx) antes de rebobina.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'escada', titulo: 'One fact. Climb it one step at a time.',
  degraus: [
    { r: 'fact', f: 'I don’t call my sister.', d: 'This is true now. I want it to change.' },
    { r: 'wish', f: 'I wish I <b>called</b> my sister.', d: 'About now: the verb steps back. call becomes called.' },
    { r: 'before', f: 'I didn’t call her last year.', d: 'This is true about before.' },
    { r: 'wish', f: 'I wish I <b>had called</b> her last year.', d: 'About before: two steps back. had + called.' },
    { r: 'would', f: 'She never answers. I wish she <b>would</b> answer.', d: 'About somebody else’s habit: wish + would.' }
  ],
  nota: 'A wish takes the verb <b>back</b>. Now: <b>I wish I called</b> (a past form). Before: <b>I wish I had called</b>. Somebody else: <b>I wish she would</b>. Never “I wish I call”, and never “I wish I would”.',
  uso: { p: 'Your turn. One thing you wish were different now, and one thing you wish you had done before.', molde: ['I wish I …', 'I wish I had …'], ex: 'I wish I lived near the beach. I wish I had studied piano when I was a kid.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_escada', GX_EXPLICA); };
