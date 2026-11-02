/* ============================================================
   THOUGH EXHAUSTED, SHE RAN · THE ELEVATION PROFILE · LIVE CLASS 06/10/2026
   Main series C1 · orações sem verbo na escrita literária: corta o
   sujeito E o be, mantém a palavra de ligação (though, although, when,
   while, once, if) e o adjetivo / particípio / lugar, e empresta o
   sujeito depois da vírgula. Sem palavra de ligação: Alone at the start
   line, she… E o movimento do escritor: Her legs burning, she…
   Erros: Though was exhausted · Despite tired · Though exhausting · In
   case of doubt · If doubt · Once finishing · Her legs burned, she… ·
   She alone…, she · o sujeito errado depois da vírgula.
   O MUNDO (da aula velha): Dee Carver, 44, motorista de ônibus escolar,
   corre a primeira maratona, que larga às 2 AM e termina no farol ao
   nascer do sol; a filha June reescreve as notas como ficção. Sem
   áudio, sem vídeo. Reforço da B2 Having Missed the Train (particípios),
   nenhuma cena repetida.
   A CARA (nova; a velha era perfil + caneta vermelha em cartões): o
   PERFIL DA PROVA — a linha de altimetria do largo ao farol, com oito
   marcos, o corredor andando e o sol subindo no fim; o CRONÔMETRO da
   prova em display; e a COMPRESSÃO: as palavras mortas encolhem até
   sumir e o contador de palavras cai (14 → 10 WORDS).
   Fila: FILA-LIVE-386.md · 148.
   23/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas
   páginas, nada de escolher entre três frases quase iguais. II = a nota da
   mãe → a frase literária falada + Check (FM.fala), o perfil agora com SEIS
   marcos (eram oito); III = a página da June: tocar as orações sem verbo e
   completar a regra (FM.carta); IV = a página da editora, uma parte errada
   em cada uma de SEIS linhas (FM.erro) e a página final se monta com as
   linhas consertadas (eram oito); V = o telefonema da editora: escolher a
   reação e dizer a resposta (FM.reacao). I, VI e VII ficam. Pasta piloto-though (conferida: não
   existia; piloto-exhausted é outra aula).
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'largada', rot: 'I · You and the Long Run', t: 'Before the race: you, your hard days, and the things you finish.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'notas', est: 'o', min: 7, img: 'percurso', rot: 'II · The Race Notes', t: 'Mom’s race notes, mile by mile. You are her daughter: make them literary.', p: 'Read the note. Say it like a novel, in ONE sentence. Then tap Check.' },
  { k: 'regra', est: 'f', min: 7, img: 'farol', rot: 'III · The Rule', t: 'Cut the subject and the verb. Keep the rest.', p: 'Tap the clauses with no verb in June’s page. Then finish the rule.' },
  { k: 'corte', est: 'f', min: 6, img: 'pagina', rot: 'IV · The Cut', t: 'The editor sends back the last chapter. Six lines, and every line has one wrong part.', p: 'Find the wrong part in each line. Say the fix out loud. Then tap Check.' },
  { k: 'editora', est: 'o', min: 7, img: 'farol', rot: 'V · The Editor Calls', t: 'Monday morning. The editor of a small literary magazine calls about the story.', p: 'The teacher is the editor. Tap how you answer. Then say your own answer, with a verbless clause.' },
  { k: 'milhas', est: 'o', min: 7, img: 'meta', rot: 'VI · Your Hard Miles', t: 'Your real life, told like fiction.', p: 'Tap a card. Answer in one literary sentence, then add one more detail.' },
  { k: 'fim', est: 'w', min: 6, img: 'capa', rot: 'VII · The Finish Line', t: 'What is the hardest thing you ever finished, and would you do it again?', p: 'Three literary sentences about it. They go to your My notes.' }
];

var VOCE = [
  { k: 'MOVING', q: 'Do you run, walk or play any sport? How far is “far” for you?', fup: 'When do you do it?', st: ['I walk / run …'], ex: 'I walk to work every day. Five miles is far for me.' },
  { k: 'EARLY', q: 'What is the earliest you have ever gotten up, and why?', fup: 'Were you tired all day?', st: ['… in the morning, to …'], ex: 'Three in the morning, to catch a flight. I didn’t sleep at all.' },
  { k: 'KEEP GOING', q: 'Tell me about a day you were very tired but kept going.', fup: 'What kept you going?', st: ['I had …, but I …'], ex: 'I had a fever, but I finished the presentation anyway.' },
  { k: 'FINISHED', q: 'What big thing have you finished? A course, a book, a race?', fup: 'How did you feel at the end?', st: ['I finished …'], ex: 'I finished my degree at night, while working all day.' },
  { k: 'READING', q: 'Do you read fiction? Do you like simple sentences, or long, beautiful ones?', fup: 'Who is your favorite writer?', st: ['I like …'], ex: 'I like short sentences. Long descriptions put me to sleep.' }
];

/* a altimetria: alt = altura do marco (0–1); nota = o diário; ops[0] = a linha literária */
var NOTAS = [
  { k: 'START', hora: '2:00', alt: .25, nota: '2 AM. The start line. Nine thousand runners and me. I didn’t know anybody. I was alone. I felt very small.', dica: 'Alone at the start line, …', lit: 'Alone at the start line, Dee felt very small.', q: 'How did Dee feel at the start, and why?' },
  { k: 'MILE 3', hora: '2:31', alt: .45, nota: 'Mile 3. Very dark. My headlamp was weak. I wasn’t sure of the way. So I followed a yellow jacket in front of me.', dica: 'Unsure of the way, …', lit: 'Unsure of the way, Dee followed a yellow jacket through the dark.', q: 'What did Dee do in the dark, and why?' },
  { k: 'MILE 8', hora: '3:18', alt: .35, nota: 'Mile 8. The first water table. My coach has one rule: when you are in doubt, drink. So I drank. Two cups.', dica: 'If in doubt, …', lit: 'If in doubt, drink: that was her coach’s only rule.', q: 'What is the coach’s rule? Do you have a rule like that?' },
  { k: 'MILE 20', hora: '5:08', alt: .95, nota: 'Mile 20. The wall. Everybody talks about it. I was exhausted. Totally empty. I kept running anyway.', dica: 'Though exhausted, …', lit: 'Though exhausted, Dee kept running.', q: 'What is “the wall”? Have you ever hit a wall, in sport or at work?' },
  { k: 'MILE 24', hora: '5:52', alt: .55, nota: 'Mile 24. My legs were burning. The sky was getting lighter over the sea. I passed forty runners. Forty! I counted.', dica: 'Her legs burning, …', lit: 'Her legs burning, Dee passed forty runners.', q: 'What changed in the sky? And what did Dee count?' },
  { k: 'FINISH', hora: '6:28', alt: .15, nota: 'The finish line. 6:28 AM. The sun came up over the lighthouse. I finished. Then I sat on the curb and I cried.', dica: 'Once finished, …', lit: 'Once finished, Dee sat on the curb and cried.', q: 'What time did Dee finish? What did she do after?' }
];
var NOTAS_FALA = NOTAS.map(function (x) {
  return { pista: '<span class="tx-nh">MOM’S NOTE · ' + x.k + ' · ' + x.hora + ' AM</span><span class="tx-notaf">' + x.nota + '</span><span class="tx-dica">Start with: ' + x.dica + '</span>', resp: x.lit, depois: x.q };
});

var TRAPS = [
  ['CUT BOTH', 'Though was exhausted, she kept running.', '<b>Though exhausted</b>, she kept running.', 'Cut the subject AND BE. Never only the subject.'],
  ['DESPITE', 'Despite tired, she smiled at the crowd.', '<b>Though tired</b>, she smiled. / <b>Despite being tired</b>, she smiled.', 'DESPITE + noun or -ing. With an adjective alone: THOUGH.'],
  ['WHO IS EXHAUSTED?', 'Though exhausted, the finish line was still far.', 'Though exhausted, <b>she</b> could see the finish line.', 'The one who is tired comes right after the comma.'],
  ['IF IN DOUBT', 'In case of doubt, ask a volunteer.', '<b>If in doubt</b>, ask a volunteer.', 'A fixed chunk: IF IN DOUBT. Also WHEN IN DOUBT.']
];

/* a página da editora: uma parte errada em cada linha; <u> = a parte, r = o conserto */
var ERROS = [
  { f: 'Although <u>was exhausted</u>, Dee ran the last mile alone.', r: 'exhausted' },
  { f: '<u>Despite</u> tired, she smiled at every stranger.', r: 'Though' },
  { f: '“<u>In case of doubt</u>, trust your legs,” her coach had said.', r: 'If in doubt' },
  { f: 'Once <u>finishing</u>, the runners lay on the cold grass.', r: 'finished' },
  { f: 'Her legs <u>burned</u>, she climbed the last hill.', r: 'burning' },
  { f: 'Though exhausted, <u>the lighthouse looked beautiful to Dee</u>.', r: 'Dee found the lighthouse beautiful' }
];
var PLACA_CORTE = 'Cut the subject <b>and be</b>.<br>Keep the link word.<br><b>If in doubt</b>, never “in case of”.<br>After the comma: the one who is tired.';
var CARTA_JUNE = { de: 'JUNE’S STORY · PAGE 1', txt: '[[Alone at the start line]], Dee felt very small. [[Unsure of the way]], she followed a yellow jacket through the dark. [[Though exhausted]], she kept running. [[Her legs burning]], she passed forty runners. [[Once finished]], she sat on the curb and cried.', assina: 'June Carver' };
var REGRA_JUNE = [
  { a: 'June cut the subject and', par: ['the verb be', 'the adjective'], c: 0, b: '.' },
  { a: 'She kept the adjective, the place and', par: ['the link word', 'the subject'], c: 0, b: '(though, once, if).' },
  { a: 'No link word? Start with', par: ['the adjective, place or -ing part', 'the verb'], c: 0, b: '' },
  { a: 'After the comma, the subject is', par: ['the one who is tired', 'any noun'], c: 0, b: '.' },
  { a: '“Though exhausted, the finish line was far” is', par: ['wrong', 'right'], c: 0, b: '.' }
];
var EDITORA_R = [
  { fala: '“I loved the last page. Where did the story come from?”', reacoes: [
    ['From Mom’s notes', 'From Mom’s race notes. Though only a few lines long, they had everything.', 'Plain notes make the best stories. Nothing is wasted.'],
    ['From my own head', 'Alone at my desk at midnight, I just wrote what I imagined.', 'Alone at midnight: I can feel that on the last page.'] ] },
  { fala: '“Why did your mom start running at all, at forty-four?”', reacoes: [
    ['She was bored', 'Tired of sitting all day, she started running around the block.', 'Tired of the bus, she took to the road. I like that.'],
    ['She was worried', 'Unsure of her future, she needed to move. Running gave her a plan.', 'Unsure of the future: every reader knows that feeling.'] ] },
  { fala: '“Your first draft was twice as long. What did you cut?”', reacoes: [
    ['The dead words', 'The subject and the verb: “Though she was exhausted” became “Though exhausted”.', 'Exactly. When in doubt, cut.'],
    ['A whole scene', 'A long scene at the water table. If in doubt, I cut it.', 'If in doubt, cut. Good rule.'] ] },
  { fala: '“Last question. Will she run it again next year?”', reacoes: [
    ['Yes, faster', 'Once recovered, she wants to run it in under four hours.', 'Then I want the second story. Once written, send it to me first.'],
    ['No, once is enough', 'Though happy with her time, she says once is enough.', 'Then the first story is the only one. Once printed, it will be rare.'] ] }
];

var MILHAS = [
  { k: 'THE WALL', q: 'Tell me about a day you were exhausted but kept going.', fup: 'What happened next?', st: ['Though exhausted, I …'], ex: 'Though exhausted, I finished the report at midnight.' },
  { k: 'IF IN DOUBT', q: 'What is your personal rule when you don’t know what to do?', fup: 'Does it work?', st: ['If in doubt, I …'], ex: 'If in doubt, I call my sister.' },
  { k: 'ONCE FINISHED', q: 'What do you do once work is finished on a Friday?', fup: 'And on Sunday?', st: ['Once finished, I …'], ex: 'Once finished, I turn off my phone and cook something slow.' },
  { k: 'ALONE', q: 'Where do you like to be alone? What do you do there?', fup: 'How often?', st: ['Alone in my …, I …'], ex: 'Alone in my car, I sing very badly.' },
  { k: 'UNSURE', q: 'Tell me about a time you were unsure what to do.', fup: 'What did you decide?', st: ['Unsure what to …, I …'], ex: 'Unsure what to say, I just listened.' },
  { k: 'IN PAIN', q: 'Have you ever worked or played in pain?', fup: 'Would you do it again?', st: ['Though in pain, I …'], ex: 'Though in pain, I played the whole game.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, ed: { n: 0, foi: {} }, mi: { sel: -1, foi: {} } };

/* o perfil da prova */
function perfil(n) {
  var N = NOTAS.length, W = 600, H = 150, P = NOTAS.map(function (x, i) { return [30 + i * (W - 60) / (N - 1), H - 20 - x.alt * (H - 50)]; });
  var d = 'M0 ' + (H - 10) + ' L' + P.map(function (p) { return p[0].toFixed(0) + ' ' + p[1].toFixed(0); }).join(' L') + ' L' + W + ' ' + (H - 10);
  var feito = n >= 0 ? 'M' + P.slice(0, Math.min(n, N - 1) + 1).map(function (p) { return p[0].toFixed(0) + ' ' + p[1].toFixed(0); }).join(' L') : '';
  var r = P[Math.min(n, N - 1)], sol = 40 + (1 - Math.min(n, N) / N) * 80;
  return '<div class="tx-perfil vd"><svg viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true"><circle cx="' + (W - 30) + '" cy="' + sol.toFixed(0) + '" r="16" class="tx-sol' + (n >= N - 1 ? ' alto' : '') + '"/><path d="' + d + ' Z" class="tx-terra"/><path d="' + d.replace(/ L600 \d+$/, '') + '" class="tx-linha"/>' + (feito ? '<path d="' + feito + '" class="tx-feito"/>' : '')
    + P.map(function (p, i) { return '<circle cx="' + p[0].toFixed(0) + '" cy="' + p[1].toFixed(0) + '" r="4" class="tx-marco' + (i < n ? ' ok' : '') + '"/>'; }).join('')
    + '<circle cx="' + r[0].toFixed(0) + '" cy="' + (r[1] - 10).toFixed(0) + '" r="7" class="tx-corredor"/></svg>'
    + '<div class="tx-marcos" style="grid-template-columns:repeat(' + N + ',1fr)">' + NOTAS.map(function (x, i) { return '<span class="' + (i === n ? 'on' : i < n ? 'ok' : '') + '">' + x.k + '</span>'; }).join('') + '</div></div>';
}
function relogio(h, k) { return '<div class="tx-relogio vd"><small>' + k + '</small><b>' + h + '<em>AM</em></b></div>'; }
/* a compressão: palavras mortas encolhem; o contador cai */
function compressao(longa, curta, foi) {
  var conta = function (s) { return s.replace(/\[\[|\]\]/g, '').replace(/[“”,.:]/g, ' ').trim().split(/\s+/).length; };
  var html = longa.replace(/\[\[([^\]]+)\]\]/g, '<del class="tx-morto' + (foi ? ' some' : '') + '">$1</del>');
  return '<div class="tx-pagina vd"><div class="tx-conta"><b>' + conta(longa) + '</b>' + (foi ? '<i>→</i><b class="novo">' + conta(curta) + '</b>' : '') + '<small>WORDS</small></div><p>' + html + '</p>' + (foi ? '<p class="tx-literaria">' + curta + '</p>' : '') + '</div>';
}
function tres(acao, ops, esc, semente, classe) {
  return '<div class="tx-ops' + (classe ? ' ' + classe : '') + '">' + ordem(ops.map(function (o, i) { return [o, i]; }), semente).map(function (o) { return '<button type="button" class="versao' + (esc === o[1] ? (o[1] === 0 ? ' certo' : ' errado') : '') + '" data-a="' + acao + '" data-n="' + o[1] + '">' + o[0] + '</button>'; }).join('') + '</div>';
}
var RECUSA = 'Cut the subject AND be. Despite needs -ing. If in doubt. Once finished. And the one who is tired comes right after the comma.';

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · C1 · VERBLESS CLAUSES</span><h1>Though Exhausted, <b>She Ran</b></h1>'
    + '<p class="sub"><b>Alone</b> at the start line. <b>Though exhausted</b> at mile 20. <b>Once finished</b>, she sat on the curb and cried. Literature is what you cut.</p>'
    + '<div class="chipsx"><span class="pilula">though exhausted</span><span class="pilula">if in doubt</span><span class="pilula">once finished</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">To the start line</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + perfil(NOTAS.length - 1) + compressao('Though [[she was]] exhausted, she kept running.', 'Though exhausted, she kept running.', 1) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['I was tired, but …', 'When I was ready …', 'I finished …']); };

R.notas = function (c) {
  return cab(c) + FM.ex('no', { formato: 'fala', itens: NOTAS_FALA, rotulo: 'Marker', prox: 'Next marker', diga: 'Say it like a novel, in ONE sentence', fim: 'Mom wrote “I was exhausted. I kept running.” Her daughter wrote “Though exhausted, she kept running.” Where did “she was” go?',
    lado: function (a, i) { return perfil(i < 0 ? NOTAS.length : a); } });
};

R.regra = function (c) {
  return cab(c) + FM.ex('rg', { formato: 'carta', carta: CARTA_JUNE, regra: REGRA_JUNE, papel: 'tela', toque: 'Tap the clauses with no verb', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays on the screen.' });
};

R.corte = function (c) {
  var ver = S.fq && S.fq.cor && S.fq.cor.ver;
  return cab(c) + FM.ex('cor', { formato: 'erro', titulo: 'The editor’s page. One part is wrong in each line. Say the fix.', itens: ERROS, regra: PLACA_CORTE })
    + (ver ? '<div class="tx-final vd"><small>THE LAST MILE · A STORY</small>' + ERROS.map(function (x) { return '<p>' + x.f.replace(/<u>.*?<\/u>/, x.r) + '</p>'; }).join('') + '</div><p class="aprova" style="text-align:center">Read the whole page out loud, slowly. That is literary English.</p>' : '');
};

R.editora = function (c) {
  var n = S.ed.n, fim = n >= EDITORA_R.length, x = EDITORA_R[Math.min(n, EDITORA_R.length - 1)];
  var fone = '<div class="tx-fone vd"><span class="tx-pulso"></span><b>THE EDITOR · A SMALL LITERARY MAGAZINE</b><small>MONDAY, 9 AM</small></div>';
  if (fim) return cab(c) + fone + trilha(EDITORA_R, n) + '<div class="foco"><div class="pergunta vd"><h2>The story goes in the spring issue.</h2></div></div>';
  return cab(c) + fone + trilha(EDITORA_R, n)
    + FM.ex('ed' + n, { formato: 'reacao', titulo: 'Question ' + (n + 1) + ' of ' + EDITORA_R.length + ' · tap how you answer, then say it', fala: x.fala, reacoes: x.reacoes, quem: 'Editor' })
    + '<div style="text-align:center;margin-top:14px"><button type="button" class="btn" data-a="seq-prox" data-c="ed">Next question</button></div>';
};

R.milhas = function (c) { return cartasPessoais(c, MILHAS, S.mi, 'mi', ['Though exhausted, I …', 'If in doubt, I …', 'Alone in my …, I …']); };

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'Though …, I …\nAlone …, I …\nOnce finished, I …', 'Your hard mile',
    ['Though exhausted', 'Alone at', 'Once finished', 'If in doubt', 'Unsure of'], ['YOUR HARD MILE', 'The hardest thing you ever finished, in three literary sentences.'])
    + '<div class="lado-fim">' + perfil(NOTAS.length)
    + '<div class="grande vd"><span><u>Though exhausted, she ran</u> · cut the subject AND be</span><span><u>If in doubt · Once finished · When ready</u> · fixed chunks</span><span><u>Alone at … · Her legs burning, …</u> · the writer’s move</span><span>not <s>Though was</s>, not <s>Despite tired</s>, not <s>In case of doubt</s>; the one who is tired after the comma</span></div>'
    + mostra('fim', 'Though exhausted, I finished my degree at night.<br>Alone at my desk at 2 AM, I wrote the last chapter.<br>Once finished, I slept for fourteen hours.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

