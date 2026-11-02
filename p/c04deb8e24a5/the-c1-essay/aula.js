/* ============================================================
   THE ESSAY · C1 · UNIT 10 (THE TALK) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: o texto argumentativo do C1: a tese (This essay will argue that…), o tópico de cada parágrafo
   (Firstly, … / A further argument is that…), o contra-argumento e a refutação (It is often argued
   that… However, this view overlooks…; While it is true that…, …), a evidência (For instance, …;
   According to…), e a conclusão (In conclusion, … / On balance, …).
   Armadilha: "In my opinion" em toda frase; "I think" na conclusão; listas sem tese; "In conclusion,
   to conclude"; frases de 80 palavras; abrir com pergunta retórica num essay formal.
   O mundo: um essay modelo sobre universidade gratuita, e a estrutura dele para o aluno usar.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 10, titulo: ['The', 'Essay'], tema: 'Argue in writing, like a C1.',
  sub: 'A C1 essay is not a list of opinions. It has a thesis, arguments with evidence, the other side, and a conclusion that answers the question. Read a model essay, take it apart, and plan your own.',
  placa: 'ESSAY · 250 WORDS', lugarConversa: 'THE WINDOW SEAT', cor: '#a8a0c8', cor2: '#d4cfe4',
  chips: ['This essay will argue that…', 'It is often argued that…', 'On balance, …'], botao: 'Start the lesson', nota: 'A good essay is a conversation with someone who disagrees with you.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 11, img: 'capa', rot: 'I · The Model Essay', t: 'Should university be free for everyone?', p: 'Read the essay out loud. Answer the questions. Then find its skeleton.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Opinion or Argument?', t: 'What makes a sentence academic?', p: 'Compare A and B. Which one belongs in a C1 essay?' },
  { k: 'erros', est: 'f', min: 7, img: 'conversa', rot: 'III · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'ordem', est: 'o', min: 7, img: 'capa', rot: 'IV · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cartao', est: 'w', min: 10, img: 'conversa', rot: 'V · Your Essay Plan', t: 'Plan your own essay in five lines.', p: 'Thesis, two arguments, the other side with a refutation, and a conclusion.' }
];
var PORTAS = [];

var LEITURA = { rot: 'C1 WRITING · MODEL ESSAY · 260 WORDS', tipo: 'nota',
  antes: { q: 'Should university be free for everyone? What’s your first reaction?', h: 'Yes, education is a right. But someone has to pay: taxes.' },
  texto: 'Free university education is one of the most debated issues in public policy. {This essay will argue that} it should be free, {provided that} students meet clear academic standards.\n{Firstly}, free education increases social mobility. Talented students from poor families would no longer be excluded by cost. {For instance}, after Germany abolished fees in 2014, applications from low-income families rose significantly.\n{A further argument is that} a more educated population benefits the whole economy, {not only} the graduates themselves.\n{It is often argued that} free universities are too expensive for the state. {While it is true that} the initial cost is high, {this view overlooks} the long-term return: graduates earn more and pay more tax.\n{On balance}, the benefits clearly outweigh the costs. {In conclusion}, governments should treat higher education as an investment, not an expense.',
  perguntas: [
    { q: 'What exactly is the writer’s position?', h: 'University should be free, as long as students meet academic standards.' },
    { q: 'What evidence does the writer give?', h: 'Germany: after abolishing fees in 2014, applications from low-income families rose.' },
    { q: 'What’s the counterargument, and how does the writer answer it?', h: 'It’s too expensive. The answer: graduates earn more and pay more tax in the long term.' },
    { q: 'Does the conclusion introduce a new idea, or answer the question?', h: 'It answers the question: education is an investment, not an expense.' }],
  olha: 'Find the skeleton: the thesis, two arguments, the evidence, the other side, the refutation and the conclusion. Which phrase opens each one?' };

var DESCOBRE = {
  pares: [
    { a: '{I think} university should be free {because} it’s nice.', b: '{This essay will argue that} university should be free, {provided that} students meet clear standards.', q: 'Which one is a thesis? What does B have that A doesn’t?', r: 'B: an impersonal frame, a clear position and a condition. A is a personal feeling with a weak reason.' },
    { a: 'Some people say it’s expensive, but they’re wrong.', b: '{It is often argued that} it is too expensive. {However}, {this view overlooks} the long-term return.', q: 'Both mention the other side. Which one shows respect, and is more convincing?', r: 'B: it presents the opposing view fairly, then refutes it with a reason. A dismisses it.' },
    { a: 'Applications rose a lot.', b: '{For instance}, after 2014 applications from low-income families {rose significantly}.', q: 'Which one is evidence?', r: 'B: specific (when, who, how much). C1 arguments need examples, data or sources.' },
    { a: '{In conclusion}, {to conclude}, I think free university is good and also sports are important.', b: '{On balance}, the benefits clearly outweigh the costs.', q: 'What three mistakes does A make?', r: 'Two conclusion phrases together, a weak “I think”, and a NEW topic (sports). A conclusion answers the question; it never opens a new one.' }],
  regra: [['THESIS', 'This essay will argue that… · It will be argued that…'], ['ARGUMENTS + EVIDENCE', 'Firstly, … · A further argument is that… · For instance, … · According to…'], ['THE OTHER SIDE', 'It is often argued that… · While it is true that…, … · However, this view overlooks…'], ['CONCLUSION', 'On balance, … · In conclusion, … (one phrase only, no new ideas)']],
  armas: [
    ['OPINION', 'In my opinion, I think that university is good.', '<b>This essay will argue that</b> university should be free.', 'Impersonal thesis; no double opinion.'],
    ['DOUBLE', 'In conclusion, to conclude, …', '<b>In conclusion</b>, …', 'One conclusion phrase.'],
    ['QUESTION', 'Why should university be free? Let’s see!', 'Free university education is <b>one of the most debated issues</b>…', 'Formal essays open with a statement, not a chatty question.'],
    ['VAGUE', 'Many things got better a lot.', 'Applications from low-income families <b>rose significantly</b>.', 'Be specific: who, what, how much.']] };

var CARTAO = { ph: 'Thesis: This essay will argue that cities should ban cars from the centre.\nArgument 1: Firstly, air quality improves. For instance, …\nArgument 2: A further argument is that streets become safer.\nOther side: It is often argued that shops will lose money. However, this view overlooks…\nConclusion: On balance, the benefits outweigh the costs.', rot: 'My essay plan',
  chips: ['This essay will argue that ', 'Firstly, ', 'For instance, ', 'A further argument is that ', 'It is often argued that ', 'While it is true that ', 'However, this view overlooks ', 'On balance, ', 'In conclusion, '],
  perg: ['YOUR ESSAY PLAN', 'Choose a question: Should cities ban cars from the centre? Should homework be banned? Should voting be compulsory?'],
  exemploRot: 'THE SKELETON', exemplo: [['THESIS', 'free, with standards'], ['ARGUMENT 1', 'social mobility + Germany'], ['ARGUMENT 2', 'the whole economy'], ['OTHER SIDE', 'too expensive → long-term return'], ['CONCLUSION', 'an investment']],
  modelo: 'This essay will argue that cities should ban cars from the centre. Firstly, air quality improves: for instance, …<br>A further argument is that streets become safer for children.<br>It is often argued that shops will lose money. However, this view overlooks the extra people walking past.<br>On balance, the benefits outweigh the costs.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · The Essay: leitura · descobre · erros · ordem · cartao */
var ERROS = { tipo: 'nota', rot: 'A STUDENT’S ESSAY · FIRST DRAFT', partes: ['Should homework be banned? ', ['In my opinion, I think that', 'This essay will argue that', 'Impersonal thesis.'], ' homework should be limited, not banned. Firstly, children need time to play. ', ['For example, many things got better.', 'For instance, Finnish pupils do little homework but achieve excellent results.', 'Specific evidence.'], ' ', ['Some people say it’s necessary but they are wrong.', 'It is often argued that homework builds discipline. However, this view overlooks the value of free time.', 'Present the other side fairly, then refute it.'], ' ', ['In conclusion, to conclude,', 'On balance,', 'One conclusion phrase.'], ' short, focused homework is the best option', [', and also uniforms are bad.', '.', 'No new topics in the conclusion.']] };
var ORDEM = { rot: 'THE ESSAY SKELETON', pede: 'Tap the parts of the model essay in the right order.', chips: ['This essay will argue that…', 'Firstly, …', 'A further argument is that…', 'It is often argued that…', 'However, this view overlooks…', 'On balance, …'],
  modelo: 'Free university is a debated issue. This essay will argue that it should be free, with standards. Firstly, it increases social mobility: for instance, Germany. A further argument is that it benefits the economy. It is often argued that it is too expensive. However, this view overlooks the long-term return. On balance, it is an investment, not an expense.',
  passos: ['The topic: free university is a debated issue.', 'The thesis: it should be free, with academic standards.', 'Argument 1 + evidence: social mobility; Germany, 2014.', 'Argument 2: the whole economy benefits.', 'The other side + refutation: too expensive? Graduates pay more tax.', 'The conclusion: an investment, not an expense.'] };
