/* ============================================================
   WHICH IS WHY IT MATTERS · ELECTION NIGHT · LIVE CLASS  06/10/2026
   Main series B2 · sentence relative: ", which" comenta a IDEIA INTEIRA
   (which is why · which means · which explains · which surprised).
   Erros: ", what is why" · ", that means" · ", which it means" · sem
   vírgula · ", this means" (duas frases coladas com vírgula) · ", so which".
   O MUNDO (da aula velha): as midterms dos EUA; vídeo explicativo de um
   jornal (ps8dFDnjLY4, 2:11) SELADO em quatro capítulos; sem nome do
   canal na tela. NEUTRO: nenhum partido, nenhuma cor de partido.
   A CARA (nova; a velha era dominó + urna): a NOITE DE APURAÇÃO — o
   COLCHETE âmbar que o "which" desenha sob a frase inteira; o
   hemiciclo de cadeiras (435 todas abertas · 100 com um terço aberto);
   a RACHADURA da vírgula que cola duas frases; e o letreiro de notícias
   que corre embaixo enquanto as cédulas caem na urna.
   Colisão parcial (four-weeks ensina defining × non-defining): esta fica
   só com o which da frase inteira, como reforço.
   Fila: FILA-LIVE-386.md · 138. Pasta piloto-which (conferida: não existia).
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 13
   páginas. A auditoria: 21 rodadas de escolher entre três frases quase iguais
   (V, VI, VIII, IX) e vídeo com pergunta aberta + Show answer. Agora: III
   palpite antes, tarefa de toque em cada capítulo (▶ no minuto) e, depois,
   "aponta para quê?" + palavra errada; V os números falados + Check (FM.fala);
   VI as notas do âncora → a regra (FM.carta); VII a palavra errada (FM.erro)
   com a placa no canto; VIII a rachadura consertada falando (FM.fala); IX ligar
   notícia e comentário (FM.liga). IX, X e XI deixam de ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'voce', est: 'o', min: 7, img: 'prefeitura', rot: 'I · You and Voting', t: 'Before the news: you and elections.', p: 'Tap a card. The student answers; then the teacher answers too.' },
  { k: 'palavras', est: 'l', img: 'sala', rot: 'II · The Words', t: 'Five words from the video.', p: 'Learn the words before you watch. Then listen for them: they turn yellow in the video.' },
  { k: 'video', est: 'l', min: 10, img: 'sala', rot: 'III · The Explainer', t: 'How the midterm elections work, and why they matter.', p: 'Guess first. Then four short chapters: read the task, play, tap your answers. Tap ▶ to hear a moment again.' },
  { k: 'falas', est: 'l', extra: 1, img: 'sala', rot: 'IV · Line by Line', t: 'Every line of the video, one by one.', p: 'Tap a line. Hear it again. The lines with yellow words open the explanation.' },
  { k: 'numeros', est: 'o', min: 7, img: 'urna', rot: 'V · The Numbers', t: 'Four numbers from the video. Comment on each one.', p: 'Read the number and the fact. Say the comment with WHICH out loud. Then tap Check.' },
  { k: 'arco', est: 'f', min: 7, img: 'domino', rot: 'VI · The Anchor’s Notes', t: 'Election night. The anchor’s notes for the live show.', p: 'Read the notes out loud. Tap every “, which …” comment. Then finish the rule.' },
  { k: 'regra', est: 'f', min: 6, img: 'urna', rot: 'VII · The Rule', t: 'Six lines from the newsroom. One word is wrong in each.', p: 'Say each line the right way out loud. Then tap Check.' },
  { k: 'cola', est: 'f', min: 6, extra: 1, img: 'sala', rot: 'VIII · The Comma Glue', t: 'A comma can’t glue two sentences. It cracks.', p: 'Read the cracked sentence. Say it as one sentence with WHICH. Then tap Check.' },
  { k: 'urna', est: 'o', min: 7, extra: 1, img: 'urna', rot: 'IX · The Ballot Box', t: 'Six stories, six comments. Match them and drop them in the box.', p: 'Tap a story, then its comment. Then say the whole sentence out loud, fast.' },
  { k: 'opiniao', est: 'o', min: 7, extra: 1, img: 'cafe', rot: 'X · Your Opinion', t: 'Big questions about voting. Answer, then comment on your own answer.', p: 'Tap a card. Answer, then add: “…, which …”.' },
  { k: 'noite', est: 'o', min: 7, img: 'sala', rot: 'XI · Election Night', t: 'A friend in Ohio calls you on election night.', p: 'The teacher is the friend. React to each piece of news with WHICH.' },
  { k: 'fim', est: 'w', min: 6, img: 'prefeitura', rot: 'XII · Your Country', t: 'Three facts about your country, each with a comment.', p: 'Write them. They go to your My notes.' }
];

var YT = 'ps8dFDnjLY4';

var VOCE = [
  { k: 'YOUR VOTE', q: 'Do you vote in every election in your country? Why, or why not?', fup: 'Is it required where you live?', st: ['Yes, always …', 'Not always …'], ex: 'Yes, always. In my country it’s required, which is why almost everybody votes.' },
  { k: 'THE DAY', q: 'What is election day like where you live?', fup: 'Do people work that day?', st: ['It’s on a …'], ex: 'It’s on a Sunday, which means most people don’t work.' },
  { k: 'THE NEWS', q: 'Do you follow the news from other countries? Which ones?', fup: 'Why those?', st: ['A little …', 'Mostly …'], ex: 'A little. I follow the US, which is hard to avoid!' },
  { k: 'THE US', q: 'What do you know about US elections? Say three things.', fup: 'Which one surprised you?', st: ['The president …'], ex: 'The president serves four years, and there are two big parties.' },
  { k: 'YOUNG VOTERS', q: 'Do young people vote where you live?', fup: 'Why, do you think?', st: ['Not many …', 'Yes …'], ex: 'Not many, which worries me.' }
];

/* 22/10/2026 · III nos formatos novos: palpite antes (sem certo ainda), uma tarefa de toque por capítulo
   e, depois, "aponta para quê?" + a palavra errada. Os minutos vêm da legenda (legenda-dados.js). */
var ANTES = { formato: 'escolhe', titulo: 'Guess first.', itens: [
  { p: '“Midterm” means the middle of a term. The middle of what?', o: ['the president’s four years', 'the school year', 'a long war'], c: -1, d: 'Chapter 1 tells you.' },
  { p: 'How many Americans vote in the midterms?', o: ['about 2 in 10', 'about 4 in 10', 'about 8 in 10'], c: -1, d: 'Chapter 3 tells you.' }
] };
var CAPS = [
  { k: 'WHEN', ini: 0, fim: 16, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'The midterms are … after the presidential election.', tm: '0:01', o: ['four years', 'two years'], c: 1, d: 'In the middle of the president’s four years.' },
    { p: 'Turnout in the midterms is … than in a presidential election.', tm: '0:09', o: ['lower', 'higher'], c: 0, d: 'Fewer people vote, but the midterms are vital.' }
  ] } },
  { k: 'CONGRESS', ini: 16, fim: 48, ex: { formato: 'escolhe', titulo: 'Tap the answer.', itens: [
    { p: 'How many lawmakers are there in Congress?', tm: '0:23', o: ['100', '435', '535'], c: 2, d: '535, in two chambers: the Senate and the House.' },
    { p: 'How often are House members elected?', tm: '0:32', o: ['every four years', 'every two years', 'every six years'], c: 1, d: 'Every two years: all 435 House seats are up for grabs.' }
  ] } },
  { k: 'NOT ONLY CONGRESS', ini: 48, fim: 70, ex: { formato: 'verdadeOuMentira', rotulos: ['True', 'False'], titulo: 'True or false? If it’s false, say the truth.', itens: [
    { f: 'The midterms are only for Congress.', t: false, tm: '0:49', c: 'Governors and local candidates run too.' },
    { f: 'About 40% of voters vote in the midterms.', t: true, tm: '1:07' }
  ] } },
  { k: 'THE CURSE', ini: 70, fim: 131, ex: { formato: 'verdadeOuMentira', rotulos: ['True', 'False'], titulo: 'True or false? If it’s false, say the truth.', itens: [
    { f: 'The president’s party usually wins seats in the midterms.', t: false, tm: '1:18', c: 'It almost always loses ground: the midterm curse.' },
    { f: 'In 2010, the GOP took back control of the House.', t: true, tm: '1:49' }
  ] } }
];
var APONTA = { formato: 'escolhe', titulo: 'What does it point back at?', itens: [
  { p: '“Congress, <b>which</b> is split up into two chambers …”', tm: '0:27', o: ['one word: Congress', 'the whole sentence before'], c: 0, d: 'Here <b>which</b> is about one thing: Congress.' },
  { p: '“… Senators are elected to six-year terms. So <b>this</b> means that a third of the 100 Senate seats … are up for grabs.”', tm: '0:36', o: ['one word: Senators', 'the whole idea before it'], c: 1, d: 'The whole idea. In one sentence: “…six-year terms<b>, which means</b> a third of the seats are open.”' }
] };
var ERRO = [
  { f: 'Americans are represented by 535 <u>senators</u> in Congress.', r: 'lawmakers', t: '0:23' },
  { f: 'Senators are elected to staggered <u>four</u>-year terms.', r: 'six', t: '0:36' },
  { f: 'Local candidates run for office across the <u>state</u> too.', r: 'country', t: '0:51' },
  { f: 'Midterms are viewed as a gauge of the sitting president’s <u>popularity</u>.', r: 'performance', t: '1:11' }
];

/* os números: v = modo do hemiciclo; V agora é falado + Check (FM.fala) */
var NUMS = [
  { v: 'casa', num: '435', rot: 'HOUSE SEATS · TWO-YEAR TERMS', pista: '<span class="ano">435</span>House members serve only two years · <b>which means</b> …', resp: 'House members serve only two years<b>, which means</b> all 435 seats are open every time.', depois: 'How long do lawmakers serve in your country?' },
  { v: 'senado', num: '33', rot: 'OF 100 SENATE SEATS · SIX-YEAR TERMS', pista: '<span class="ano">33</span>Senators serve six years · <b>which is why</b> …', resp: 'Senators serve six years<b>, which is why</b> only about a third of the seats are open.', depois: 'Is six years too long for a politician?' },
  { v: 'voto', num: '40%', rot: 'TURNOUT IN A MIDTERM YEAR', pista: '<span class="ano">40%</span>Only four in ten people vote in the midterms · <b>which surprises</b> …', resp: 'Only four in ten people vote in the midterms<b>, which surprises</b> a lot of visitors.', depois: 'Is turnout high in your country?' },
  { v: 'perto', num: '300', rot: 'VOTES BETWEEN THE TWO CANDIDATES', pista: '<span class="ano">300</span>In one race, the winner got only 300 more votes · <b>which shows</b> …', resp: 'In one race, the winner got only 300 more votes<b>, which shows</b> that every vote counts.', depois: 'Do you remember a very close election?' }
];

/* o colchete: a = a ideia inteira, w = o comentário depois de which */
var ARCO = [
  { k: 'THE TIMING', a: 'The midterms are in the middle of the term', b: 'People see them as a test for the president.', w: 'is why people see them as a test for the president.', ops: [', which is why …', ', what is why …', ', this is why …'], erro: ['', 'what', 'this'] },
  { k: 'THE DATE', a: 'Election day is a Tuesday', b: 'Many people have to work that day.', w: 'means many people have to work.', ops: [', which means …', ', which mean …', ', so which means …'], erro: ['', 'which mean', 'so which'] },
  { k: 'THE CURSE', a: 'The president’s party usually loses seats', b: 'That explains the name “midterm curse”.', w: 'explains the name “midterm curse”.', ops: [', which explains …', ', what explains …', ', it explains …'], erro: ['', 'what', 'it'] },
  { k: 'THE COUNT', a: 'Some states count mail ballots for days', b: 'Results can be slow.', w: 'is why results can be slow.', ops: [', which is why …', ' which is why … (no comma)', ', that is why …'], erro: ['', 'no comma', 'that'] },
  { k: 'THE RESULT', a: 'The result can change the whole Congress', b: 'The next two years depend on it.', w: 'means the next two years depend on it.', ops: [', which means …', ', which it means …', ', that means …'], erro: ['', 'which it', 'that'] }
];

/* VI · as notas do âncora (texto nosso) → a regra */
var CARTA = { de: 'ELECTION NIGHT · NOTES FOR THE ANCHOR · 8:02 PM',
  txt: 'Good evening. The polls closed at eight[[, which means]] the first results are coming in now. Turnout was high this year[[, which is why]] the lines were so long. In Ohio, the two candidates are very close[[, which surprised]] the experts. Some states count mail ballots for days[[, which explains]] the slow numbers. Our reporter, who is in Ohio, will call us soon. Stay with us!' };
var REGRA = [
  { a: 'Turnout was high, which is why the lines were long. <b>which</b> points back at ', par: ['the whole sentence', 'one word'], c: 0 },
  { a: 'Before <b>which</b>, always ', par: ['a period', 'a comma'], c: 1 },
  { a: 'For a whole idea, after the comma: ', par: ['which', 'what'], c: 0, b: ' is why …' },
  { a: 'One idea = one thing: which ', par: ['mean', 'means'], c: 1 },
  { a: '<b>which</b> is already the subject: , which ', par: ['means', 'it means'], c: 0 },
  { a: ', which is why → ', par: ['the cause', 'the result'], c: 1, b: ' · , which means → a consequence' }
];
var PRESA = 'Sentence<b>, which</b> + comment<br>which = the <b>whole</b> idea<br>, which <b>is why</b> → a result<br>, which <b>means</b> → a consequence<br>not <s>what</s> · not <s>that</s> · no <s>it</s>';
/* VII · a palavra errada (as armadilhas de antes, agora para achar e dizer) */
var TRAPS = [
  { f: 'Turnout was low, <u>what</u> is a problem.', r: 'which' },
  { f: 'She won, <u>that</u> means we have a new governor.', r: 'which' },
  { f: 'It rained, which <u>it means</u> fewer people voted.', r: 'means' },
  { f: 'The count was slow, <u>this</u> is why nobody slept.', r: 'which' },
  { f: 'The bus was late, which <u>mean</u> I missed my vote.', r: 'meant' },
  { f: 'The results came after <u>midnight which</u> meant nobody slept.', r: 'midnight, which' }
];

/* VIII · a rachadura: duas frases coladas com vírgula; o aluno diz a frase com WHICH e confere */
var COLA = [
  { a: 'The vote was close', b: 'this means a recount.', resp: 'The vote was close<b>, which means</b> a recount.' },
  { a: 'Polls open at 6 AM', b: 'this is why people can vote before work.', resp: 'Polls open at 6 AM<b>, which is why</b> people can vote before work.' },
  { a: 'Voting is required in Australia', b: 'it explains the high turnout.', resp: 'Voting is required in Australia<b>, which explains</b> the high turnout.' },
  { a: 'The results came after midnight', b: 'this meant nobody slept.', resp: 'The results came after midnight<b>, which meant</b> nobody slept.' }
];

/* IX · ligar a notícia ao comentário (escolha de sentido, não de forma) */
var URNA = { formato: 'liga', titulo: 'Match each story to its comment.', pares: [
  ['Polls in some states open at 6 AM', ', which means people can vote before work.'],
  ['Young voters often stay home', ', which worries a lot of teachers.'],
  ['In Australia, voting is required by law', ', which explains the high turnout.'],
  ['Some voters waited two hours in line', ', which shows how much it mattered to them.'],
  ['The results came in after midnight', ', which meant nobody slept.'],
  ['A new governor won by a big margin', ', which is why nobody asked for a recount.']
], ordemDireita: [3, 0, 5, 1, 4, 2] };

var OPINIAO = [
  { k: 'REQUIRED', q: 'Should voting be required by law?', fup: 'Comment on your answer: “…, which …”', st: ['Yes. …, which is why …', 'No. …, which means …'], ex: 'Yes. In my country it is, which is why turnout is high.' },
  { k: 'AGE 16', q: 'Should 16-year-olds vote?', fup: 'Comment on your answer: “…, which …”', st: ['Maybe. …, which makes it …'], ex: 'Maybe. They pay taxes at work, which makes it fair.' },
  { k: 'ONLINE', q: 'Should people vote online?', fup: 'Comment on your answer: “…, which …”', st: ['I’m not sure. …, which is good, but …'], ex: 'I’m not sure. It’s easy, which is good, but it might not be safe.' },
  { k: 'A HOLIDAY', q: 'Should election day be a holiday?', fup: 'Comment on your answer: “…, which …”', st: ['Yes, …, which would …'], ex: 'Yes. People could go calmly, which would help people who work.' },
  { k: 'SOCIAL MEDIA', q: 'Does social media help or hurt elections?', fup: 'Comment on your answer: “…, which …”', st: ['Both, which makes it …'], ex: 'Both, which makes it complicated.' },
  { k: 'YOUR FIRST VOTE', q: 'Do you remember your first vote?', fup: 'Comment on your answer: “…, which …”', st: ['Yes, I was …, which felt …'], ex: 'Yes, I was 18, which felt very adult.' }
];

var NOITE = [
  { q: '“I waited in line for two hours to vote!”', fup: 'Then the friend says: “Crazy, right? Someone brought coffee for the line.”', st: ['Two hours? …, which is …'], ex: 'Two hours? That’s a long time, which is why I always vote early.' },
  { q: '“My state has a new governor.”', fup: 'Then the friend says: “Exactly. New ideas, new problems.”', st: ['…, which means …'], ex: 'Oh, a new governor, which means a lot of changes.' },
  { q: '“My little brother voted for the first time.”', fup: 'Then the friend says: “He took a selfie with his sticker. Of course.”', st: ['…, which is …'], ex: 'His first time, which is a big day!' },
  { q: '“And in your country? How do elections work?”', fup: 'Then the friend says: “Interesting! That’s so different from here.”', st: ['In my country, voting is …, which is why …'], ex: 'In my country, voting is required, which is why almost everybody votes.' }
];

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {},
  voce: { sel: -1, foi: {} }, video: { p: 0, cap: 0, viu: {} },
  op: { sel: -1, foi: {} }, no: { n: 0, foi: {} } };

/* o colchete âmbar sob a ideia inteira */
function arco(x, esc) {
  var ok = esc === 0, err = esc > 0;
  return '<div class="wh-arco vd"><div class="wh-frase"><span class="wh-ideia' + (ok ? ' on' : '') + '">' + x.a + '</span>'
    + (ok ? '<span class="wh-vg">,</span> <span class="wh-qual">which</span> <span class="wh-resto">' + x.w + '</span>'
      : err ? ' <span class="wh-mal">' + x.erro[esc] + '</span> <span class="wh-resto apaga">…</span>'
        : '<span class="wh-vg vazio">?</span> <span class="wh-qual vazio">____</span> <span class="wh-resto apaga">' + x.b + '</span>')
    + '</div>' + (ok ? '<div class="wh-rotulo">↶ WHICH = THE WHOLE IDEA</div>' : err ? '<div class="wh-rotulo mal">✕ NO BRACKET</div>' : '<div class="wh-rotulo vazio">TWO FACTS · ONE SENTENCE?</div>') + '</div>';
}

/* o hemiciclo: n cadeiras em fileiras, as primeiras "acesas" abertas */
function hemi(n, linhas, acesas) {
  var raios = [], soma = 0, i, j;
  for (i = 0; i < linhas; i++) { raios.push(0.45 + 0.55 * i / (linhas - 1)); soma += raios[i]; }
  var pts = [], resto = n;
  for (i = 0; i < linhas; i++) {
    var c = i === linhas - 1 ? resto : Math.round(n * raios[i] / soma); resto -= c;
    for (j = 0; j < c; j++) { var ang = Math.PI * (c === 1 ? .5 : j / (c - 1)); pts.push([ang, raios[i]]); }
  }
  pts.sort(function (p, q) { return q[0] - p[0]; });
  var tam = n > 200 ? 1.5 : 2.6;
  return '<div class="wh-hemi">' + pts.map(function (p, k) {
    var x = 50 - Math.cos(p[0]) * p[1] * 46, y = 96 - Math.sin(p[0]) * p[1] * 90;
    return '<i class="' + (k < acesas ? 'aberta' : '') + '" style="left:' + x.toFixed(2) + '%;top:' + y.toFixed(2) + '%;width:' + tam + '%"></i>';
  }).join('') + '</div>';
}
function painel(x, foi) {
  var vis;
  if (x.v === 'casa') vis = hemi(435, 9, foi ? 435 : 0);
  else if (x.v === 'senado') vis = hemi(100, 5, foi ? 33 : 0);
  else if (x.v === 'voto') { vis = '<div class="wh-cedulas">'; for (var i = 0; i < 10; i++) vis += '<i class="' + (foi && i < 4 ? 'votou' : '') + '"></i>'; vis += '</div>'; }
  else vis = '<div class="wh-barras"><div><b style="width:' + (foi ? '50.1' : '0') + '%"></b><small>WINNER · 50.1%</small></div><div><b class="b2" style="width:' + (foi ? '49.9' : '0') + '%"></b><small>49.9%</small></div></div>';
  return '<div class="wh-painel vd"><div class="wh-num"><b>' + x.num + '</b><small>' + x.rot + '</small></div>' + vis + '</div>';
}
function letreiro(feitas) {
  feitas = feitas.slice();
  if (!feitas.length) feitas = ['THE POLLS ARE OPEN · ELECTION NIGHT · COMMENT ON EVERY STORY WITH WHICH'];
  return '<div class="wh-ticker"><span class="wh-ao">LIVE</span><div class="wh-corre"><p>' + feitas.join('  ·  ') + '  ·  </p><p aria-hidden="true">' + feitas.join('  ·  ') + '  ·  </p></div></div>';
}
/* VIII · a placa rachada (antes do Check) ou inteira (depois) */
function placa(x, ok) {
  return ok ? '<div class="wh-placas"><div class="wh-placa inteira">' + x.resp.replace(/<\/?b>/g, '') + '</div></div>'
    : '<div class="wh-placas rachada"><div class="wh-placa">' + x.a + ',</div><span class="wh-racha"></span><div class="wh-placa">' + x.b + '</div></div>';
}

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B2 · SENTENCE, WHICH</span><h1>Which Is Why <b>It Matters</b></h1>'
    + '<p class="sub">Only four in ten Americans vote in the midterms<b>, which is why</b> every vote counts. One word points back at the <b>whole idea</b>.</p>'
    + '<div class="chipsx"><span class="pilula">, which is why</span><span class="pilula">, which means</span><span class="pilula">, which explains</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Open the polls</button>' + faixaLive() + '</div>'
    + '<div class="capa-r">' + painel(NUMS[1], 1) + arco(ARCO[0], 0) + '</div></div>';
};

R.voce = function (c) { return cartasPessoais(c, VOCE, S.voce, 'voce', ['…, which is why …', '…, which means …', 'Not many, which …']); };

R.video = function (c) {
  var e = S.video, corpo;
  if (e.p === 0) corpo = '<div class="mesa-c"><div class="lado-l">' + FM.ex('antes', ANTES) + '</div>'
    + '<div class="lado-l"><div class="selo-v vd"><b>SEALED</b><small>A news explainer, about two minutes, in four short chapters. It opens after your guesses.</small></div><div><button type="button" class="btn cheio" data-a="vd-p" data-n="1">Watch, chapter by chapter</button></div></div></div>';
  else if (e.p === 1) {
    var k = CAPS[e.cap];
    corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'How the midterms work', '&start=' + k.ini + '&end=' + k.fim) + '<small class="cred">Chapter ' + (e.cap + 1) + ' of 4 · read the task, then play · it stops by itself</small></div><div class="lado-video"><div class="caps">'
      + CAPS.map(function (x, i) { return '<button type="button" class="chip' + (e.cap === i ? ' on' : '') + (e.viu[i] ? ' feito' : '') + '" data-a="vd-c" data-n="' + i + '">' + x.k + '</button>'; }).join('') + '</div>'
      + FM.ex('cap' + e.cap, k.ex)
      + '<div>' + (e.cap < CAPS.length - 1 ? '<button type="button" class="btn" data-a="vd-c" data-n="' + (e.cap + 1) + '">Next chapter</button>' : '<button type="button" class="btn" data-a="vd-p" data-n="2">After the video</button>') + '</div></div></div>';
  } else corpo = '<div class="mesa-video"><div class="video-col">' + iframe(YT, 'How the midterms work') + '<small class="cred">The whole video · tap ▶ to hear a moment again</small></div><div class="lado-video">'
    + FM.ex('aponta', APONTA) + FM.erro('erro', ERRO) + '</div></div>'
    + '<p class="aprova" style="text-align:center">“Senators serve six years, which means only a third of the seats are open.” One sentence, one comment on the whole idea.</p>';
  return cab(c) + '<div class="tres-tempos">' + tempos3(e.p) + '</div>' + corpo;
};

/* V · os números: o hemiciclo enche quando o aluno confere a frase */
R.numeros = function (c) {
  return cab(c) + FM.fala('nums', NUMS, {
    rotulo: 'Number', prox: 'Next number',
    lado: function (feitas, atual, nova) { return '<div style="max-width:560px;margin:0 auto">' + painel(NUMS[atual < 0 ? NUMS.length - 1 : atual], atual < 0 ? 1 : nova) + '</div>'; },
    fim: 'Four numbers, four comments. Now one number from YOUR country, with a comment: “…, which …”'
  });
};

/* VI · as notas do âncora → a regra */
R.arco = function (c) {
  return cab(c) + FM.carta('carta', CARTA, REGRA, { papel: 'tela', toque: 'Tap every “, which …” comment', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

/* VII · a palavra errada, com o colchete em cima e a placa no canto */
R.regra = function (c) {
  return cab(c) + '<div style="width:min(1200px,100%);margin:0 auto 16px">' + arco(ARCO[0], 0) + '</div>'
    + FM.erro('traps', TRAPS, { titulo: 'One word is wrong. Say the line the right way.', regra: PRESA });
};

/* VIII · a rachadura: falar a frase inteira, conferir, a placa se cola */
R.cola = function (c) {
  return cab(c) + FM.fala('cola', COLA.map(function (x) {
    return { pista: x.a + '<span class="wh-mal">,</span> ' + x.b, resp: x.resp + '<br><small style="font-size:.6em;color:var(--t2)">Also right, two sentences: ' + x.a + '. ' + x.b.charAt(0).toUpperCase() + x.b.slice(1) + '</small>' };
  }), {
    rotulo: 'Crack', prox: 'Next crack', regra: PRESA, diga: 'Say it as one sentence first',
    lado: function (feitas, atual, nova) { return atual < 0 ? '' : placa(COLA[atual], nova); },
    fim: 'Four cracks fixed. One sentence with WHICH, or two with a period. Never a comma between two sentences.'
  });
};

/* IX · a urna: cada par certo cai na caixa e corre no letreiro */
R.urna = function (c) {
  var e = (S.fq || {}).urna, feitas = [];
  if (e && e.par) Object.keys(e.par).forEach(function (i) { if (e.par[i] === +i) feitas.push(URNA.pares[i][0] + URNA.pares[i][1]); });
  var n = feitas.length, fim = n >= URNA.pares.length;
  var caixa = '<div class="wh-caixa"><div class="wh-fenda"></div><b>' + n + ' / ' + URNA.pares.length + '</b><small>IN THE BOX</small></div>';
  return cab(c) + '<div class="wh-mesa-urna"><div class="lado-l">' + FM.ex('urna', URNA)
    + (fim ? '<div class="pergunta vd"><small>THE POLLS ARE CLOSED</small><h2>Now the teacher reads a story from today’s news. Comment at once: “…, which …”</h2></div>' : '<p class="dica-aluno">Every right pair: say the whole sentence out loud, fast.</p>')
    + '</div><div style="display:grid;gap:14px;align-content:start">' + caixa + FM.regra(PRESA) + '</div></div>' + letreiro(feitas);
};

R.opiniao = function (c) { return cartasPessoais(c, OPINIAO, S.op, 'op', ['…, which is why …', '…, which means …', '…, which makes it …']); };

R.noite = function (c) {
  return cab(c) + '<div class="wh-chamada vd"><span class="wh-pulso"></span><b>INCOMING CALL · A FRIEND IN OHIO</b><small>ELECTION NIGHT · 11:42 PM</small></div>'
    + sequencia({ est: 'o', rot: '', t: '', p: '' }, NOITE, S.no, 'no', 'Four reactions, four comments. The friend hangs up happy.').replace(/<div class="cab[\s\S]*?<\/p><\/div>/, '');
};

R.fim = function (c) {
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'In my country, voting is …, which is why …\nElection day is on a …, which means …\n…, which surprised me.', 'Your country',
    [', which is why', ', which means', ', which explains', ', which surprised'], ['THREE FACTS, THREE COMMENTS', 'Your country, your city, your news: a fact, a comma, WHICH, and your comment.'])
    + '<div class="lado-fim">' + arco(ARCO[0], 0)
    + '<div class="grande vd"><span><u>, which is why</u> · a reason, then the result</span><span><u>, which means</u> · a consequence</span><span><u>, which surprised me</u> · your reaction</span><span>not <s>, what</s>, not <s>, that means</s>, no extra <s>it</s>, never <s>, this means</s></span></div>'
    + mostra('fim', 'In my country, voting is required, which is why almost everybody votes.<br>Election day is on a Sunday, which means most people don’t work.<br>Turnout was very high last time, which surprised me.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

TOQUES['vd-p'] = function (b, n) { S.video.p = n; };
TOQUES['vd-c'] = function (b, n) { S.video.viu[S.video.cap] = 1; S.video.cap = n; };
