/* ============================================================
   AU PAIR · MODULE 2 · LESSON 7 OF 24 · READ BEFORE YOU SIGN · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Ler o acordo com a família (fictícia): up to, per week, must / must not, curfew; separar o que está OK do que é
   para perguntar antes de assinar. Regras conferidas em 15/10/2026 (22 CFR 62.31 e j1visa.state.gov): até 10 h por dia,
   45 h por semana, 1,5 dia de folga por semana, 1 fim de semana inteiro por mês, 2 semanas de férias pagas,
   até US$ 500 para o curso. O passaporte é da au pair.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 7, kick: 'AU PAIR · MODULE 2 · LESSON 7 OF 24', titulo: ['Read Before', 'You Sign'], tema: 'The family agreement', placa: 'LESSON 07',
  lugarConversa: 'THE DINING TABLE', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Before you fly, you and the family sign an agreement about your work and your time. Today you learn to read it, find what is not OK, and ask before you sign.',
  chips: ['The Millers’ agreement', 'OK or ask first?', 'Ask politely'], botao: 'Start the lesson',
  nota: 'Never sign something you don’t understand. A good family is happy to explain, and your coordinator can help.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · The Agreement', t: 'Read the Millers’ agreement.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · Mistake Hunter', t: 'Six lines from the agreement. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'separa', est: 'f', min: 12, img: 'capa', rot: 'III · OK or Ask First?', t: 'Ten lines from different agreements.', p: 'Is it OK to sign, or do you need to ask first? Say why.' },
  { k: 'cadeira', est: 'o', min: 10, img: 'conversa', rot: 'IV · Ask Before You Sign', t: 'Your teacher is the host mom. You ask.', p: 'Ask politely about the lines you don’t understand.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'THE MILLER FAMILY · AU PAIR AGREEMENT (FICTIONAL)', tipo: 'nota',
  antes: { q: 'What do you think an agreement with a host family says? Name three topics.', h: 'Hours, days off, duties with the kids, house rules, the car, vacation, classes.' },
  texto: 'Hours: the au pair works {up to 45 hours per week} and {no more than 10 hours per day}.\nTime off: {one and a half days off per week}, and {one full weekend off every month}.\nDuties: breakfast and school drop-off, homework help, the children’s laundry and keeping their rooms tidy.\nThe car: the au pair may use the car on weekends. {Curfew}: home by 11 p.m. on school nights.\nPhone: the au pair {must not} use her phone while driving or at the pool with the kids.\nVacation: {two weeks of paid vacation}. Classes: the family pays {up to $500}.',
  perguntas: [
    { q: 'How many hours can she work per week? And per day?', h: 'Up to 45 per week, and no more than 10 per day.' },
    { q: 'What time off does she have?', h: 'One and a half days per week, plus one full weekend every month.' },
    { q: 'What does “curfew” mean here?', h: 'The time she must be home: 11 p.m. on school nights.' },
    { q: 'What must she NOT do?', h: 'Use her phone while driving or at the pool with the kids.' }],
  olha: 'The highlighted words are the key numbers and rules. “Up to” = the maximum. “Must not” = it is not allowed. “Per week” = every week. These numbers follow the program rules.' };

var SEPARA = { rot: 'OK OR ASK FIRST?', a: 'OK TO SIGN', b: 'ASK FIRST', fim: 'When something is not OK, you don’t fight: you ask, and you talk to your coordinator before you sign.', itens: [
  ['The au pair works up to 45 hours per week.', 'a', 'That is the program limit.'],
  ['In school holidays, the au pair will work 50 hours per week.', 'b', 'The limit is 45 hours per week, always. Even with extra pay.'],
  ['Curfew: home by 11 p.m. on school nights when using the family car.', 'a', 'A house rule a family can set. Ask about weekends, too.'],
  ['The au pair will clean the whole house every Saturday.', 'b', 'Your duties are about the children, and your days off are yours.'],
  ['The family will keep the au pair’s passport in their safe.', 'b', 'Your passport is yours. Keep it with you. If anyone takes it, call your coordinator or the help line.'],
  ['One full weekend off every month, from Friday evening to Monday morning.', 'a', 'That is the program rule.'],
  ['The au pair must not post photos of the children online.', 'a', 'A fair rule that protects the kids.'],
  ['Vacation: one week per year.', 'b', 'The rule is two weeks of paid vacation.'],
  ['On Fridays, the au pair works from 7 a.m. to 7 p.m.', 'b', 'That is 12 hours. The limit is 10 hours per day.'],
  ['The family pays up to $500 for the au pair’s classes.', 'a', 'That is the program rule for the education part.']] };

var CADEIRA = { itens: [
  { alvo: 'Ask what “light housework” means.', dica: 'Could you explain what “light housework” means?', resp: 'Sure! Just the kids’ things: their laundry, their dishes, their rooms.' },
  { alvo: 'Ask about the hours in school holidays.', dica: 'How many hours will I work during school holidays?', resp: 'The same: never more than 45 a week. We plan a camp for the kids.' },
  { alvo: 'Ask if you can keep your passport with you.', dica: 'I’d like to keep my passport with me. Is that OK?', resp: 'Of course! It’s yours.' },
  { alvo: 'Ask about the curfew on weekends.', dica: 'Is there a curfew on weekends, too?', resp: 'No curfew on weekends, but please text us if you’ll be late with the car.' },
  { alvo: 'Ask to have the schedule in writing.', dica: 'Could we write my weekly schedule down?', resp: 'Great idea. Let’s do it together on your first day.' }] };

var PODE = [
  'I can read an au pair agreement and find hours, time off and duties.',
  'I can understand up to, per week, must not and curfew.',
  'I can tell what is OK and what I need to ask about.',
  'I can ask politely before I sign: Could you explain…?'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 07: leitura · separa · cadeira (os dados estão no topo do aula.js) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de separa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Six lines from an agreement.',
  toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.',
  itens: [
    { f: 'The au pair works up [[of]] 45 hours per week.', r: 'The au pair works up <b>to</b> 45 hours per week.', d: 'Up to: the limit.' },
    { f: 'She [[musts]] be home by 11 p.m.', r: 'She <b>must</b> be home by 11 p.m.', d: 'Must never takes an -s.' },
    { f: 'You must [[to]] call the parents.', r: 'You must <b>call</b> the parents.', d: 'After must: the clean verb, no to.' },
    { f: 'You [[don’t must]] use the phone while driving.', r: 'You <b>must not</b> use the phone while driving.', d: 'For forbidden: must not.' },
    { f: 'Ten hours [[for]] day, at most.', r: 'Ten hours <b>per</b> day, at most.', d: 'Per: each day, each week.' },
    { f: 'The car is only for use [[in]] weekends.', r: 'The car is only for use <b>on</b> weekends.', d: 'Days and weekends: on.' }
  ],
  nota: 'Read the agreement word by word: <b>up to</b> is a limit, <b>per week</b> is each week, <b>must</b> is a rule, <b>must not</b> is forbidden. After must: no -s, no to.',
  uso: { p: 'Your turn. One rule for an au pair and one forbidden thing.', molde: ['The au pair must …', 'She must not …'], ex: 'The au pair must be home by 11 p.m. She must not use her phone while driving.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
