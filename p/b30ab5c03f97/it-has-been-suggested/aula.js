/* ============================================================
   IT HAS BEEN SUGGESTED · C1 · UNIT 8 (EXPLAIN AND REPORT) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: o relato impessoal de quem escreve com cuidado: It has been suggested that…; It was agreed
   that…; It has come to our attention that…; It is widely believed that…; There is thought to be…;
   It has been proposed that staff (should) work… (com subjuntivo: that he be / that she attend).
   (A passiva de relato básica – is said to – é do B2; aqui é o registro de memorando e ata.)
   Armadilha: It was suggested to… (suggest + to); It has been suggested that we should to…;
   They suggested that… em texto formal onde ninguém quer dar nome.
   O mundo: o memorando da diretoria de uma empresa (inventada) sobre a semana de quatro dias.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 8, titulo: ['It Has Been', 'Suggested'], tema: 'Report without pointing fingers.',
  sub: 'In a memo, nobody writes “Paulo said the coffee is bad”. They write: “It has been suggested that the coffee could be improved.” Learn the careful, impersonal voice of minutes, memos and official emails.',
  placa: 'MEMO · TO ALL STAFF', lugarConversa: 'THE OFFICE KITCHEN', cor: '#9db4d4', cor2: '#cfdbec',
  chips: ['It has been suggested that…', 'It was agreed that…', 'It has come to our attention…'], botao: 'Start the lesson', nota: 'Impersonal is not cold. It is careful: the idea matters, not who said it.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Memo', t: 'News from the board.', p: 'Read the memo out loud. Answer the questions. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Personal or Impersonal?', t: 'Who said it? Does it matter?', p: 'Compare A and B. When would you write B?' },
  { k: 'memoria', est: 'l', min: 8, img: 'conversa', rot: 'III · Memory', t: 'Find the pairs.', p: 'Open two cards. Find the pair. Then make a sentence with it.' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'IV · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cartao', est: 'w', min: 9, img: 'conversa', rot: 'V · Your Memo', t: 'Write a short memo to your team.', p: 'Four lines: it has been suggested…, it was agreed…, it has come to our attention…, it is hoped…' }
];
var PORTAS = [];

var LEITURA = { rot: 'NORTHWIND LTD · MEMO TO ALL STAFF', tipo: 'nota',
  antes: { q: 'Would you like a four-day work week? What could go wrong?', h: 'Yes! But maybe clients would complain, or the four days would be very long.' },
  texto: 'Following last week’s board meeting:\n{It has been suggested that} the company trial a four-day week from March. {It was agreed that} the trial will last three months.\n{It is widely believed that} staff will be more productive, although {there is thought to be} some risk for the customer service team.\n{It has come to our attention that} several people are working on Fridays without pay. {It has been proposed that} this practice stop immediately.\nFinally, {it is hoped that} all teams will send their questions by 15 February. {It should be noted that} no salaries will change.\nThe Board',
  perguntas: [
    { q: 'What is the big change, and when?', h: 'A trial four-day week from March, for three months.' },
    { q: 'What does the board believe, and what is the risk?', h: 'That staff will be more productive; the risk is for customer service.' },
    { q: 'What problem has the board discovered?', h: 'Some people are working on Fridays without being paid.' },
    { q: 'Why don’t we know WHO suggested the four-day week?', h: 'Memos are impersonal: the idea matters, not the person.' }],
  olha: 'Find seven sentences that start with It or There. Who is the subject? Who said these things?' };

var DESCOBRE = {
  pares: [
    { a: 'Paulo said we should try a four-day week.', b: '{It has been suggested that} the company try a four-day week.', q: 'Same information. Why would a company memo choose B?', r: 'B removes the person: it sounds neutral and official, and nobody is exposed. Perfect for memos, minutes and reports.' },
    { a: '{It was suggested to} stop the practice.', b: '{It was suggested that} the practice stop.', q: 'One is wrong. Which pattern does suggest take?', r: 'B. suggest + that + clause (or + -ing). Never suggest + to. Note: “the practice stop” (no -s): the formal subjunctive.' },
    { a: 'We found out that people work on Fridays.', b: '{It has come to our attention that} people work on Fridays.', q: 'What tone does B have?', r: 'Very formal and serious, like a warning. Use it when something wrong has been discovered.' },
    { a: 'People think there is a risk.', b: '{There is thought to be} a risk.', q: 'What’s special about the structure of B?', r: 'There + be thought / said / believed + to be: the reporting passive with “there”. Formal and impersonal.' }],
  regra: [['IT HAS BEEN SUGGESTED / PROPOSED THAT', 'It has been suggested that the company (should) try… (subjunctive: try, not tries)'], ['IT WAS AGREED / DECIDED THAT', 'It was agreed that the trial will last three months.'], ['IT IS WIDELY BELIEVED / HOPED THAT', 'It is hoped that all teams will reply.'], ['IT HAS COME TO OUR ATTENTION · THERE IS THOUGHT TO BE', 'a discovered problem · a reported fact']],
  armas: [
    ['SUGGEST', 'It was suggested to change the rules.', 'It was suggested <b>that the rules be changed</b>.', 'suggest + that (or + -ing), never + to.'],
    ['SUBJUNCTIVE', 'It was proposed that he attends.', 'It was proposed that he <b>attend</b>.', 'Formal: base form after proposed / suggested that.'],
    ['SHOULD TO', 'It was agreed that we should to wait.', 'It was agreed that we <b>should wait</b>.', 'should + verb.'],
    ['THERE', 'There is thought that there is a risk.', 'There <b>is thought to be</b> a risk.', 'There is thought / said to be…']] };

var CARTAO = { ph: 'To all staff,\nIt has been suggested that the Friday meeting be moved to Thursday.\nIt was agreed that the kitchen will be cleaned every evening.\nIt has come to our attention that some laptops are not locked.\nIt is hoped that everyone will follow the new rules.', rot: 'My memo',
  chips: ['To all staff, ', 'It has been suggested that ', 'It has been proposed that ', 'It was agreed that ', 'It was decided that ', 'It has come to our attention that ', 'It is widely believed that ', 'It is hoped that ', 'It should be noted that '],
  perg: ['YOUR MEMO', 'Write to your team, your family or your building. Make it impersonal: no names!'],
  exemploRot: 'NORTHWIND · THE MEMO', exemplo: [['SUGGESTED', 'a four-day week'], ['AGREED', 'three-month trial'], ['BELIEVED', 'more productive'], ['ATTENTION', 'unpaid Fridays'], ['NOTED', 'no salary changes']],
  modelo: 'To all staff,<br>It has been suggested that the Friday meeting be moved to Thursday. It was agreed that the kitchen will be cleaned every evening.<br>It has come to our attention that some laptops are not locked. It is hoped that everyone will follow the new rules.' };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · It Has Been Suggested: leitura · descobre · memoria · erros · cartao */
var PARES = [
  ['It has been suggested', 'that we try a four-day week.', 'It has been suggested that we try a four-day week from March.'],
  ['It was agreed', 'that the trial will last three months.', 'It was agreed that the trial will last three months.'],
  ['It has come to our attention', 'that people work unpaid.', 'It has come to our attention that some people work unpaid on Fridays.'],
  ['There is thought', 'to be some risk.', 'There is thought to be some risk for customer service.'],
  ['It is hoped', 'that all teams will reply.', 'It is hoped that all teams will reply by 15 February.'],
  ['It should be noted', 'that salaries won’t change.', 'It should be noted that no salaries will change.']];
var ERROS = { tipo: 'nota', rot: 'DRAFT MINUTES · DO NOT SEND', partes: ['Minutes of the board meeting. ', ['It was suggested to start', 'It was suggested that we start', 'suggest + that, never + to.'], ' the trial in March. ', ['It agreed that', 'It was agreed that', 'Passive: it was agreed.'], ' the trial will last three months. ', ['It has come to our attentions', 'It has come to our attention', 'attention, singular.'], ' that some staff work unpaid. It was proposed that this practice ', ['stops', 'stop', 'Formal subjunctive: base form.'], '. ', ['There is thought that there is', 'There is thought to be', 'There is thought to be…'], ' a risk for customer service. It is hoped that all teams ', ['should to reply', 'will reply', 'will / should + verb.'], ' by 15 February.'] };
