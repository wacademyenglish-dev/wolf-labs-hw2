/* ============================================================
   REVIEW · C1 · UNIT 6 · THE ANNUAL REPORT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: memoria · leitura · erros · cartao · pode.
   Unidade 6 (A frase escrita densa): nominalização (we decided → the decision), sintagmas nominais
   complexos, orações sem verbo e particípio (Though exhausted, …; Having reviewed…), conectores formais
   (notwithstanding, insofar as, in light of), subjuntivo (It is vital that he be…) e registro formal.
   O mundo: o relatório anual de uma ONG ambiental (inventada); o aluno lê, corrige e reescreve.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 6, titulo: ['The Annual', 'Report'], tema: 'The dense written sentence', placa: 'GREEN RIVER TRUST · 2026', lugarConversa: 'THE CORNER OFFICE', cor: '#8fc0a0', cor2: '#c6e0cf',
  sub: 'Unit 6 review. A small charity has to send its annual report to the board tomorrow. The ideas are good; the sentences are not. Make them dense, formal and clear.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'I · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · The Report', t: 'One page from the annual report.', p: 'Read it out loud. Answer the questions. Then find how it packs so much into each sentence.' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cartao', est: 'w', min: 10, img: 'conversa', rot: 'IV · Rewrite It', t: 'From chat to report.', p: 'Rewrite the informal message as a formal paragraph: nouns, participles, formal links.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'V · Find the Rule', t: 'Four lines from the report. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var LEITURA = { rot: 'GREEN RIVER TRUST · ANNUAL REPORT 2026 · P. 3', tipo: 'nota',
  antes: { q: 'Why are official reports often so hard to read? Is that always bad?', h: 'Long sentences, lots of nouns. But they are precise and say a lot in little space.' },
  texto: '{The reduction in river pollution} was the main achievement of the year. {Having reviewed the data}, the board confirmed a fall of 30% in plastic waste.\n{Though underfunded}, the volunteer programme doubled in size. {In light of} this growth, a new coordinator was appointed in May.\n{Notwithstanding} these results, {the closure of two factories} upstream remains a concern. {Insofar as} the trust can influence local policy, it will continue to do so.\nIt is vital that the council {be informed} before the summer, and that funding {be renewed} for a further three years.',
  perguntas: [
    { q: 'What was the best result of the year?', h: 'River pollution went down: 30% less plastic waste.' },
    { q: 'What happened to the volunteer programme?', h: 'It doubled, even without much money, so they hired a new coordinator.' },
    { q: 'What is still a problem?', h: 'Two factories upstream have closed (and how they closed is a concern).' },
    { q: 'What two things does the trust ask for?', h: 'That the council is informed before summer, and that funding is renewed for three more years.' }],
  olha: 'Find the nouns that replace whole sentences (the reduction, the closure). Find two clauses without a full verb. Find the formal connectors and the subjunctive.' };

var CARTAO = { ph: 'Following a review of our costs, a reduction of 15% was achieved.\nThough short-staffed, the team completed every project on time.\nIn light of these results, it is vital that the budget be maintained.\nNotwithstanding some delays, the year was a success.', rot: 'My formal paragraph',
  chips: ['Following a review of …, ', 'The reduction / increase / decision …', 'Having …ed, ', 'Though …, ', 'In light of …, ', 'Notwithstanding …, ', 'Insofar as …, ', 'It is vital that … be …'],
  perg: ['FROM CHAT TO REPORT', 'The message: “We checked our costs and we cut them by 15%. We had fewer people but we finished everything. So we really need the same budget. There were some delays but the year was good.”'],
  exemploRot: 'CHAT → REPORT', exemplo: [['we decided', 'the decision'], ['we cut costs', 'a reduction in costs'], ['after we checked', 'having reviewed'], ['although it was tired', 'though tired'], ['so', 'in light of this']],
  modelo: 'Following a review of our costs, a reduction of 15% was achieved.<br>Though short-staffed, the team completed every project on time.<br>In light of these results, it is vital that the budget be maintained. Notwithstanding some delays, the year was a success.' };

var PODE = [
  'I can turn verbs into nouns: we reduced costs → the reduction in costs.',
  'I can build complex noun phrases: the closure of two factories upstream.',
  'I can use participle and verbless clauses: Having reviewed the data, … Though tired, …',
  'I can use formal connectors: in light of, notwithstanding, insofar as.',
  'I can use the subjunctive: It is vital that he be informed.'
];

/* MECÂNICAS VARIADAS */
/* C1 R6: memoria · leitura · erros · cartao */
var PARES = [
  ['we reduced pollution', 'the reduction in pollution', 'The reduction in pollution was the main achievement.'],
  ['after we reviewed the data', 'having reviewed the data', 'Having reviewed the data, the board confirmed the results.'],
  ['although it was underfunded', 'though underfunded', 'Though underfunded, the programme doubled.'],
  ['because of this growth', 'in light of this growth', 'In light of this growth, a coordinator was appointed.'],
  ['despite these results', 'notwithstanding these results', 'Notwithstanding these results, risks remain.'],
  ['he must be informed', 'it is vital that he be informed', 'It is vital that the council be informed.']];
var ERROS = { tipo: 'nota', rot: 'DRAFT · ANNUAL REPORT · PAGE 4', partes: ['', ['We reduced the costs and this', 'The reduction in costs', 'Nominalisation: a noun as subject.'], ' was significant. ', ['Having review', 'Having reviewed', 'Having + participle.'], ' the budget, the board approved the plan. ', ['Though was tired', 'Though tired', 'Verbless clause: no verb.'], ', the team finished on time. ', ['In light to', 'In light of', 'in light of.'], ' these results, the trust will grow. It is vital that the council ', ['is informed', 'be informed', 'Subjunctive: be.'], ' and that funding ', ['continues', 'continue', 'Subjunctive: base form.'], '.'] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four lines from the annual report. Find the rule yourself.', exemplos: ['<b>The decision</b> to close the lab surprised us.', '<b>Having reviewed</b> the data, the team changed the plan.', '<b>Though exhausted</b>, the volunteers kept working.', 'It is vital that the fund <b>be</b> protected.'], pergunta: 'A formal text packs more into each sentence by …', opcoes: ['turning verbs into nouns and shortening clauses', 'using more short forms and phrasal verbs', 'repeating every subject and every verb'], c: 0, nao: 'Not that one. Read the four lit parts again: is there a full verb with a subject?', regra: 'Dense writing: <b>nominalization</b> (we decided → the decision), <b>participle clauses</b> (Having reviewed the data, …), <b>clauses without a verb</b> (Though exhausted, …), and the <b>subjunctive</b> after vital, essential, recommend: that the fund <b>be</b> protected.', uso: { p: 'Your turn. Rewrite one informal sentence for a report: We decided to stop the project because we were out of money.', molde: ['The decision to …', 'Having …, the team …'], ex: 'The decision to stop the project was due to a lack of funds. Having reviewed the budget, the board confirmed it.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
