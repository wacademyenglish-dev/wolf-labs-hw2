/* ============================================================
   THE CORRECTION · THE MISSING "A" · LIVE CLASS  06/10/2026
   Main series B1 · a few / a little = alguns, e está tudo bem · few /
   little = quase nenhum (reclamação) · few com o que se conta, little
   com o que não se conta · most / most of the / most of them (nunca
   "the most of the"). As duas versões são inglês certo: por isso o
   erro sobrevive. Erros: "few" querendo dizer "a few", "a few money",
   "a little people", "the most of the teachers", "a little of them".
   O MUNDO (da aula velha): o jornal deixou cair uma letra; o relatório
   dizia A FEW TEACHERS STILL ASK FOR PAPER COPIES e o jornal imprimiu
   FEW TEACHERS…; o telefone não para desde as sete. Sem áudio: a voz
   dos que ligam é a do professor.
   A CARA: o "A" QUE FALTA — a manchete composta em tipos móveis de
   chumbo; um tipo "A" solto em cima da mesa que entra e sai da frase
   (com ele: acima da linha, verde; sem ele: abaixo, vermelho); a mesa
   telefônica com seis linhas que piscam âmbar até serem atendidas.
   Fila: FILA-LIVE-386.md · 101.
   22/10/2026 · OS FORMATOS NOVOS (kit/formatos.js + formatos2.js), mesmas 10
   páginas. A auditoria: escolher entre frases quase iguais (II, V, VI, VIII, IX)
   e a página das cinco professoras só tocando uma palavra. Agora: I sentir e
   dizer a frase (escolhe); II o relatório → a regra (carta); III ligar frase e
   sentido (liga); IV a mesa telefônica falada + Check (fala); V a forma errada
   de MOST (erro); VI contar ou não contar (separa); VII verdade ou mentira
   sobre o que cada professora quis dizer; VIII os números sem as três palavras
   banidas (fala); IX rascunhos da correção com uma palavra errada + contar a
   correção tocando cada palavra (erro + usa). VII e IX deixam de ser EXTRA.
   ============================================================ */
var L = [
  { k: 'capa', est: null, img: 'mesa' },
  { k: 'vida', est: 'o', min: 7, img: 'sala', rot: 'I · Few or a Few?', t: 'Before the phones start: four questions about you.', p: 'Tap what is true for you. Say the sentence out loud, and why. Your answers come back at the end.' },
  { k: 'manchete', est: 'f', min: 7, img: 'jornais', rot: 'II · The Report', t: 'The survey report, before the paper changed one letter.', p: 'Read it out loud. Tap every few and little. Then finish the rule.' },
  { k: 'gx', est: 'f', min: 4, img: 'jornais', rot: 'III · Few or A Few?', t: 'Two phone calls. One tiny letter.', p: 'Read A and B out loud. Say what is different, then check. Then choose for four new moments.' },
  { k: 'zero', est: 'f', min: 6, img: 'jornais', rot: 'IV · Which Side of Zero?', t: 'Above the line: some, and it’s fine. Below the line: almost none.', p: 'Tap a sentence, then what it means. Then read them out loud.' },
  { k: 'painel', est: 'o', min: 7, img: 'mesa', rot: 'V · The Help Desk', t: 'Six lines are blinking. Every caller is angry about the headline.', p: 'Read the caller. Explain it out loud in your own words. Then tap Check. The light goes off.' },
  { k: 'most', est: 'f', min: 6, img: 'sala', rot: 'VI · Most of the What?', t: 'Three shapes. The word after most picks one.', p: 'One shape is wrong in each line. Say it the right way out loud. Then tap Check.' },
  { k: 'conta', est: 'f', min: 6, img: 'mesa', rot: 'VII · Can You Count It?', t: 'Same rule. Now the noun decides which pair you can use.', p: 'Tap a word, then its box. Then say a sentence with two of them.' },
  { k: 'palavra', est: 'o', min: 7, extra: 1, img: 'sala', rot: 'VIII · The Word That Decides', t: 'Five teachers answered the survey. One small word, or a gap, decides.', p: 'Read each line. True or lie? If it is a lie, say the truth.' },
  { k: 'proibidas', est: 'f', min: 6, extra: 1, img: 'jornais', rot: 'IX · The Banned Words', t: 'Three words are switched off: MOST, MANY, A LOT.', p: 'Read the number. Say it without most, many or a lot. Then tap Check.' },
  { k: 'correcao', est: 'o', min: 7, extra: 1, img: 'jornais', rot: 'X · Write the Correction', t: 'Tomorrow’s paper prints a correction. Short, and right.', p: 'Fix the wrong word in each draft. Then tell the correction: tap each word you use.' },
  { k: 'fim', est: 'w', min: 6, img: 'mesa', rot: 'XI · Back to You', t: 'The phones are quiet. Your four answers come back.', p: 'Write about your life with a few, few, a little, little and most of. It goes to your My notes.' }
];

var VIDA = [
  { p: '<b>Friends in your city.</b> How many do you have?', f: ['Enough. I’m happy.', 'Almost none. I want more.'], ops: ['I have a few friends here.', 'I have few friends here.'] },
  { p: '<b>Free time this week.</b> How much do you have?', f: ['Some, and it’s enough.', 'Hardly any. I’m tired.'], ops: ['I have a little free time.', 'I have little free time.'] },
  { p: '<b>Colleagues who speak English.</b> How many?', f: ['Some do, and it helps.', 'Almost nobody does.'], ops: ['A few of my colleagues speak English.', 'Few of my colleagues speak English.'] },
  { p: '<b>Money for a vacation.</b> How much is saved?', f: ['Some. Enough for a trip.', 'Almost nothing.'], ops: ['I have a little money saved.', 'I have little money saved.'] }
];

/* II · o relatório da pesquisa (texto nosso, no mundo da aula) → a regra */
var CARTA = { de: 'SURVEY REPORT · 140 TEACHERS · PAGE 1',
  txt: '[[A few]] teachers still ask for paper copies: nine of them. [[A little]] training was enough for most of them. [[Few]] teachers turned the system off. They had [[little]] free time, but they learned it fast.' };
var REGRA = [
  { a: '<b>a few</b> · <b>a little</b> = ', par: ['some, and it’s fine', 'hardly any'], c: 0 },
  { a: '<b>few</b> · <b>little</b> = ', par: ['some, and it’s fine', 'hardly any: a complaint'], c: 1 },
  { a: 'Things you count (teachers, friends): ', par: ['a few', 'a little'], c: 0 },
  { a: 'Things you can’t count (time, money): ', par: ['a few', 'a little'], c: 1 },
  { a: 'What changes the story? ', par: ['the A', 'the noun'], c: 0 }
];
var PRESA = '<b>a few</b> teachers = some, and fine<br><b>few</b> teachers = hardly any<br><b>a little</b> time = some, and enough<br><b>little</b> time = hardly any<br>can count it → few · can’t → little';
var PRESA_MOST = 'most + a plain noun<br>most <b>of the</b> + this group<br>most <b>of</b> + them · my · these<br>never <s>the most of</s>';

/* III · ligar a frase ao que ela quer dizer (escolha de sentido, não de forma) */
var ZERO = { formato: 'liga', titulo: 'Match each sentence to what it means.', pares: [
  ['Few people came to the meeting.', 'The room was almost empty.'],
  ['A few people came early.', 'Good: some people were already there.'],
  ['We had little time to prepare.', 'We were not ready.'],
  ['We had a little time to prepare.', 'We were ready enough.'],
  ['Few of them answered the survey.', 'We can’t use the results.'],
  ['A few of them answered the survey.', 'We have enough answers to start.']
], ordemDireita: [3, 0, 5, 1, 4, 2] };

/* IV · a mesa telefônica: o aluno explica falando e confere (cada linha acesa se apaga) */
var CHAMADAS = [
  { quem: 'A TEACHER', diz: 'Your paper says FEW teachers ask for paper. Now the city wants to stop printing our copies!', resp: 'You’re right. The report said <b>A FEW</b> still ask for paper: <b>some</b>, not almost none.', depois: 'Do you like paper or screens?' },
  { quem: 'THE HEAD TEACHER', diz: 'The city says nobody here needs paper any more. Where did that come from?', resp: 'From one missing <b>A</b>. <b>FEW</b> sounds like almost nobody asks for it.', depois: 'Have you ever lost one small word?' },
  { quem: 'A READER', diz: 'I don’t get it. What’s the difference between few and a few?', resp: '<b>A few</b> means some, and it’s fine. <b>Few</b> means hardly any: it’s a complaint.', depois: 'Give me an example about your life.' },
  { quem: 'THE TRAINER', diz: 'You printed LITTLE training. I gave them three sessions!', resp: 'The report said <b>A LITTLE</b> training was enough: some training, and it worked.', depois: 'Did you have training in your last job?' },
  { quem: 'A STUDENT JOURNALIST', diz: 'Why can’t I say A FEW MONEY?', resp: 'You can’t count money. It’s <b>A LITTLE</b> money.', depois: 'What else can’t you count?' },
  { quem: 'THE EDITOR', diz: 'OK. What should the correction say?', resp: '<b>Most of the</b> teachers use the new system. <b>A few</b> still ask for paper.', depois: 'Say it once more, slowly.' }
];

/* V · a forma errada de MOST (as três formas ficam na placa) */
var MOST = [
  { f: 'I think <u>the most of</u> people would say the same thing.', r: 'most' },
  { f: '<u>Most them</u> answered on the first day.', r: 'Most of them' },
  { f: '<u>Most of</u> teachers are tired in November.', r: 'Most' },
  { f: '<u>The most of</u> my colleagues had never heard of it.', r: 'Most of' },
  { f: '<u>Most</u> the answers to our survey came in after midnight.', r: 'Most of the' }
];

/* VI · contar ou não contar: separar as palavras em duas caixas */
var CONTA = { formato: 'separa', titulo: 'Can you count it? Tap a word, then its box.', itens: [
  { t: 'money', c: 1 }, { t: 'friends', c: 0 }, { t: 'time', c: 1 }, { t: 'questions', c: 0 }, { t: 'patience', c: 1 }, { t: 'teachers', c: 0 }
], caixas: ['I can count it: few · a few', 'I can’t count it: little · a little'] };

/* VII · o que cada professora quis dizer: verdade ou mentira (e a correção falada) */
var PALAVRA = { formato: 'verdadeOuMentira', titulo: 'True or lie? If it is a lie, say the truth.', itens: [
  { f: '<b>ELEVEN YEARS HERE:</b> “Few of us were asked before the change.”<br><i>She says: some of us were asked.</i>', t: false, c: 'No A, so hardly anyone was asked.' },
  { f: '<b>SECOND YEAR:</b> “A few of us were asked, and that helped.”<br><i>She says: nobody was asked.</i>', t: false, c: 'The A: some were asked, and it helped.' },
  { f: '<b>THREE CLASSES:</b> “I had little time to learn it.”<br><i>She says: she had almost no time.</i>', t: true },
  { f: '<b>BACK FROM LEAVE:</b> “I had a little time to learn it.”<br><i>She says: she had no time at all.</i>', t: false, c: 'The A: some time, and it worked.' },
  { f: '<b>HEAD OF DEPARTMENT:</b> “Most of the older staff picked it up fast.”<br><i>She says: the older people in this staff room.</i>', t: true }
] };

/* VIII · os números sem as três palavras banidas (falar + Check) */
var PROIB = [
  { pista: '<span class="ano">96 / 140</span>use it every day', resp: 'About <b>two thirds of them</b> use it every day.', depois: 'What do you use every day?' },
  { pista: '<span class="ano">71 / 140</span>said it saved time', resp: 'About <b>half of them</b> said it saved time.', depois: 'What saves you time?' },
  { pista: '<span class="ano">9 / 140</span>still ask for paper', resp: '<b>A few of them</b> still ask for paper.', depois: 'Do you still use paper?' },
  { pista: '<span class="ano">0 / 140</span>want the old system back', resp: '<b>None of them</b> want the old system back.', depois: 'What would you never go back to?' },
  { pista: '<span class="ano">134 / 140</span>would keep it', resp: '<b>Nearly all of them</b> would keep it.', depois: 'What would you keep forever?' },
  { pista: '<span class="ano">2 / 140</span>had a problem with it', resp: '<b>Barely any of them</b> had a problem with it.', depois: 'Do you have a problem with new apps?' }
];

/* IX · rascunhos da correção (uma palavra errada em cada) e a correção contada com os fatos */
var FATOS = ['96 of 140 use it every day', '9 still ask for paper', '6 had never heard of it', '0 want the old system back'];
var RASCUNHOS = [
  { f: 'CORRECTION: <u>THE MOST OF</u> TEACHERS USE THE SYSTEM; A FEW PREFER PAPER', r: 'MOST' },
  { f: 'CORRECTION: MOST TEACHERS USE THE SYSTEM; <u>FEW</u> STILL PREFER PAPER', r: 'A FEW' },
  { f: 'CORRECTION: MOST OF THE TEACHERS USE THE SYSTEM; <u>A LITTLE</u> PREFER PAPER', r: 'A FEW' }
];
var CONTAR = { formato: 'usa', titulo: 'Now tell the correction with the facts. Tap each word when you use it.', palavras: ['most of the', 'a few', 'none of them', 'barely any'], fim: 'Short, and right. The paper can print it.' };

var S = { i: 0, faixa: 1, fala: {}, resp: {}, armas: {} };

/* a manchete em tipos móveis; comA = o tipo A está na frase */
function tipos(txt, comA, mini) {
  return '<div class="tipos' + (comA === false ? ' sem' : comA ? ' com' : '') + (mini ? ' mini' : '') + '">' + txt.split(' ').map(function (w) { return '<span class="palavra-t">' + w.split('').map(function (ch) { return '<i>' + ch + '</i>'; }).join('') + '</span>'; }).join('') + '</div>';
}
function tipoA(dentro) { return '<span class="tipo-a' + (dentro ? ' dentro' : '') + '">A</span>'; }
function mesaTel(feitas, atual) {
  return '<div class="mesa-tel">' + CHAMADAS.map(function (c, i) { var feita = i < feitas; return '<div class="linha-tel' + (feita ? ' feita' : ' pisca') + (atual === i ? ' sel' : '') + '" style="cursor:default"><i></i><b>LINE ' + (i + 1) + '</b><small>' + c.quem + '</small></div>'; }).join('') + '</div>';
}
/* a placa da regra no canto (as peças que não a recebem por opção) */
function conPlaca(html, regra, titulo) { return '<div class="fm-com-regra"><div class="fm-mio">' + html + '</div>' + FM.regra(regra, titulo) + '</div>'; }

var R = {};
R.capa = function () {
  return '<div class="capa"><div><span class="kick">MAIN SERIES · B1 · THE HELP DESK</span><h1>The <b>Correction</b></h1>'
    + '<p class="sub"><b>A few</b> teachers still ask for paper: some, so keep printing. <b>Few</b> teachers still ask for paper: almost none, so stop. One letter, and the story turned over.</p>'
    + '<div class="chipsx"><span class="pilula">few · a few</span><span class="pilula">little · a little</span><span class="pilula">most of the</span><span class="pilula">Live Class · W·O·L·F</span></div>'
    + '<button type="button" class="btn cheio" data-a="ir" data-n="1">Answer the phone</button>' + faixaLive() + '</div>'
    + '<div class="capa-r"><div class="caixa-tipo">' + tipoA(0) + tipos('FEW TEACHERS STILL ASK FOR PAPER', false) + '<p class="rodape-t">THE MORNING PAPER · PAGE 3</p></div></div></div>';
};

R.vida = function (c) {
  var e = (S.fq && S.fq.vida && S.fq.vida.r) || {};
  return cab(c) + FM.escolhe('vida', { titulo: 'How is it for you? Tap. Then say the sentence.', itens: VIDA.map(function (v, i) {
    return { p: v.p, o: v.f, c: -1, d: 'Say it: <b>' + (e[i] != null ? v.ops[e[i]] : '') + '</b> … because …' };
  }) }) + fala('vd', ['… because …'], ['a few', 'few', 'a little', 'little']);
};

/* II · o relatório: ao fechar a regra, o jornal mostra o que o relatório dizia de verdade */
R.manchete = function (c) {
  var e = (S.fq && S.fq.rep && S.fq.rep.r) || {}, feitas = 0;
  REGRA.forEach(function (x, i) { if (e[i] === x.c) feitas++; });
  var pronta = feitas === REGRA.length;
  return cab(c) + '<div class="caixa-tipo" style="width:min(1200px,100%);margin:0 auto 14px">' + tipoA(pronta) + tipos(pronta ? 'A FEW TEACHERS STILL ASK FOR PAPER' : 'FEW TEACHERS STILL ASK FOR PAPER', pronta, 1)
    + '<p class="rodape-t">' + (pronta ? 'WHAT THE REPORT SAID' : 'WHAT THE PAPER PRINTED') + '</p></div>'
    + FM.carta('rep', CARTA, REGRA, { toque: 'Tap every few and little', titulo: 'Now finish the rule', pronta: 'The rule is ready. It stays in the corner on the next pages.' });
};

R.zero = function (c) { return cab(c) + conPlaca(FM.ex('zero', ZERO), PRESA); };

R.painel = function (c) {
  return cab(c) + FM.fala('painel', CHAMADAS.map(function (x) { return { pista: '<span class="ano">' + x.quem + '</span>“' + x.diz + '”', resp: x.resp, depois: x.depois }; }), {
    rotulo: 'Line', prox: 'Next call', regra: PRESA, diga: 'Explain it in your own words first',
    lado: function (feitas, atual) { return mesaTel(feitas, atual); },
    fim: 'Six calls answered. The board is dark, and nobody is angry any more.'
  });
};

R.most = function (c) {
  return cab(c) + FM.erro('most', MOST, { titulo: 'One shape is wrong. Say the right one.', regra: PRESA_MOST });
};

R.conta = function (c) { return cab(c) + conPlaca(FM.ex('conta', CONTA), PRESA); };

R.palavra = function (c) { return cab(c) + conPlaca(FM.ex('palavra', PALAVRA), PRESA); };

R.proibidas = function (c) {
  return cab(c) + FM.fala('proib', PROIB, {
    rotulo: 'Number', prox: 'Next number', regra: PRESA, diga: 'Say it without most, many or a lot',
    lado: function () { return '<div class="banidas"><s>MOST</s><s>MANY</s><s>A LOT</s></div>'; },
    fim: 'Six numbers, and you never needed the three words you reach for first.'
  });
};

R.correcao = function (c) {
  var ver = !!(S.fq && S.fq.rasc && S.fq.rasc.ver);
  return cab(c) + '<div class="mesa-c"><div class="lado-l"><div class="fatos vd"><small>THE FACTS</small>' + FATOS.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>'
    + (ver ? '<div class="caixa-tipo">' + tipoA(1) + tipos('A FEW STILL PREFER PAPER', true, 1) + '</div>' : '') + '</div>'
    + '<div class="lado-l">' + FM.erro('rasc', RASCUNHOS, { titulo: 'Three drafts. One word is wrong in each. Say the right one.' })
    + FM.ex('contar', CONTAR)
    + mostra('cr', 'Most of the teachers use the new system. A few still ask for paper. None of them want the old system back.', 1) + '</div></div>';
};

R.fim = function (c) {
  var r = (S.fq && S.fq.vida && S.fq.vida.r) || {}, ditas = VIDA.map(function (v, i) { return r[i] != null ? v.ops[r[i]] : ''; }).filter(Boolean);
  return cab(c) + '<div class="fim">' + escritaFinal('fim', (S.txt || {}).fim || '', (S.salvo || {}).fim, 'I have a few …\nI have little …\nMost of my …', 'Your life',
    ['a few ', 'few ', 'a little ', 'little ', 'most of my '], ['WHICH OF YOUR ANSWERS IS A COMPLAINT?', 'Your life with a few / few, a little / little and most of.'])
    + '<div class="lado-fim">' + (ditas.length ? '<div class="fatos vd"><small>YOUR SCENE I ANSWERS</small>' + ditas.map(function (d) { return '<span>' + d + '</span>'; }).join('') + '</div>' : '') + '<div class="grande vd"><span><u>a few / a little</u> = some, and it’s fine</span><span><u>few / little</u> = hardly any, a complaint</span><span><u>most of the</u> teachers · never <s>the most of</s></span></div>'
    + mostra('fim', 'I have a few good friends in my city.<br>I have little free time this month.<br>Most of my colleagues speak a little English.', 1)
    + '<p class="hw"><a class="pilula" href="HW/" target="_blank" rel="noopener">Homework for the student →</a></p></div></div>';
};

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G5 · uma cena curta nova (k: gx) antes de zero.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'contraste', titulo: 'Few or a few? Two teachers on the phone.',
  a: { t: 'A few', falas: [['Teacher 1', 'A few teachers still ask for paper copies.'], ['You', 'Good. <mark>A few</mark> means some. It’s fine.']], d: '<b>A few</b> and <b>a little</b> mean “some, enough”. The feeling is good.' },
  b: { t: 'Few', falas: [['Teacher 2', 'Few teachers still ask for paper copies.'], ['You', 'Hmm. <mark>Few</mark> means almost none. That is a complaint.']], d: '<b>Few</b> and <b>little</b> mean “almost none”. The feeling is bad.' },
  pergunta: 'One letter is gone. What is different in the meaning?',
  pergunta2: 'Now you. Which one fits?',
  itens: [
    { p: 'I have ___ friends in this city, so I’m lonely.', o: ['a few', 'few'], c: 1, d: 'Almost none: a complaint.' },
    { p: 'We have ___ time, so we can have a coffee.', o: ['a little', 'little'], c: 0, d: 'Some time: enough for a coffee.' },
    { p: '___ people came to the meeting. It was empty.', o: ['A few', 'Few'], c: 1, d: 'Almost nobody: a complaint.' },
    { p: 'There is ___ money left, so we can’t buy it.', o: ['a little', 'little'], c: 1, d: 'Almost none. Not enough.' }
  ],
  nota: '<b>a few / a little</b>: some, and it is fine. <b>few / little</b>: almost none, and it is a problem. Count it: few / a few people. Can’t count it: little / a little money. And <b>most of the</b> teachers, never “the most of the”.',
  uso: { p: 'Your turn. One sentence with a few or a little, and one with few or little.', molde: ['I have a few …', 'I have little …'], ex: 'I have a few good friends. I have little free time.' } };
R.gx = function (c) { return cab(c) + FM.ex('gx_isso', GX_EXPLICA); };
