/* ============================================================
   AU PAIR · MODULE 2 · LESSON 5 OF 24 · FILL IT IN · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Preencher formulário em inglês: surname × given name, data americana (MM/DD/YYYY), marital status, emergency contact.
   Sempre com uma pessoa FICTÍCIA. O formulário real do visto a aluna preenche sozinha, nunca na aula com dados reais.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 5, kick: 'AU PAIR · MODULE 2 · LESSON 5 OF 24', titulo: ['Fill It', 'In'], tema: 'Forms in English, without mistakes', placa: 'LESSON 05',
  lugarConversa: 'THE AGENCY OFFICE', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Agency forms, school forms, medical forms: they all ask the same things in English. Today you learn the traps. You use a practice person, never your real data.',
  chips: ['Surname or given name?', 'Dates the American way', 'A full practice form'], botao: 'Start the lesson',
  nota: 'In the USA, 03/07/2003 is March 7th, not July 3rd. One date in the wrong order can change a whole document.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 10, img: 'conversa', rot: 'I · The Traps of a Form', t: 'Same information, two ways. Which one is right?', p: 'Compare A and B. Then see the rules for forms.' },
  { k: 'rapido', est: 'f', min: 6, img: 'capa', rot: 'II · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'formulario', est: 'w', min: 14, img: 'conversa', rot: 'III · The Practice Form', t: 'Fill in the form for Mariana.', p: 'Read her profile. Fill in every field. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 5: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: 'Surname: {Costa Ribeiro} · Given name: {Mariana}', b: 'Surname: {Mariana} · Given name: {Costa Ribeiro}', q: 'Which form is right for Mariana Costa Ribeiro?', r: '<b>Surname / Last name / Family name</b> = the family names, as in the passport. <b>Given name / First name</b> = Mariana.' },
    { a: 'Date of birth (MM/DD/YYYY): {03/07/2003}', b: 'Date of birth (MM/DD/YYYY): {07/03/2003}', q: 'Mariana was born on March 7th, 2003. Which one is right?', r: 'Read the format! <b>MM/DD/YYYY</b> = month first: 03/07/2003.' },
    { a: 'Marital status: {Single}', b: 'Marital status: {Alone}', q: 'Which word does a form use?', r: '<b>Single</b>, married, divorced, widowed. Never “alone”.' },
    { a: 'Emergency contact: {Lúcia Ribeiro} · Relationship: {Mother}', b: 'Emergency contact: {Mariana} · Relationship: {Me}', q: 'Who is an emergency contact?', r: 'Another person who can help if something happens to you: a parent, a sibling. Never yourself.' }],
  regra: [['SURNAME = LAST NAME', 'the family names, exactly as in the passport'], ['GIVEN NAME = FIRST NAME', 'your first name(s)'], ['MM/DD/YYYY', 'month first: March 7 → 03/07'], ['* = REQUIRED', 'fields with * cannot stay empty']],
  armas: [['DATE', 'DOB 07/03/2003 (for March 7)', '03/07/2003', 'month first'], ['STATUS', 'Marital status: alone', 'Marital status: single', 'form words'], ['NAME', 'First name: Ribeiro', 'First name: Mariana', 'first = given'], ['CONTACT', 'Emergency contact: myself', 'Emergency contact: my mother', 'another person']] };

var RAPIDO = { seg: 60, itens: [
  ['March 7, 2003', '03/07/2003'], ['December 25, 2001', '12/25/2001'], ['5 de setembro de 2004', '09/05/2004'], ['1º de janeiro de 2000', '01/01/2000'],
  ['20 de junho de 2002', '06/20/2002'], ['3 de outubro de 2005', '10/03/2005'], ['11/04/2003 in the USA is…', 'November 4th'], ['04/11/2003 in the USA is…', 'April 11th'],
  ['31 de julho de 2001', '07/31/2001'], ['15 de fevereiro de 2006', '02/15/2006']] };

var FORMULARIO = { rot: 'BRIGHTPATH AU PAIR · APPLICANT INFORMATION', perfilRot: 'MARIANA’S PROFILE (FICTIONAL)',
  perfil: '<p>Hi! I’m <b>Mariana Costa Ribeiro</b>. I was born in <b>Recife, Brazil</b>, on <b>March 7th, 2003</b>.</p><p>I’m <b>not married</b>. My email is <b>mariana.ribeiro@example.com</b>.</p><p>If something happens, please call my mom, <b>Lúcia Ribeiro</b>.</p><p>I have a driver’s license: <b>yes</b>.</p>',
  fim: 'Perfect. A form with no mistakes tells the agency you are careful.',
  campos: [
    { r: 'Surname / Last name *', ph: 'as in the passport', aceita: ['Costa Ribeiro', 'COSTA RIBEIRO'], dica: 'both family names' },
    { r: 'Given name / First name *', ph: '', aceita: ['Mariana'] },
    { r: 'Date of birth (MM/DD/YYYY) *', ph: 'MM/DD/YYYY', aceita: ['03/07/2003', '3/7/2003'], dica: 'month first' },
    { r: 'Place of birth (city, country) *', ph: '', aceita: ['Recife, Brazil', 'Recife Brazil', 'Recife, Brasil'] },
    { r: 'Marital status *', ph: 'single / married…', aceita: ['Single'] },
    { r: 'Email *', ph: '', aceita: ['mariana.ribeiro@example.com'] },
    { r: 'Emergency contact (full name) *', ph: '', aceita: ['Lúcia Ribeiro', 'Lucia Ribeiro'] },
    { r: 'Relationship to you *', ph: '', aceita: ['Mother', 'Mom', 'My mother'] },
    { r: 'Driver’s license (yes / no) *', ph: '', aceita: ['Yes'] }] };

var PODE = [
  'I can tell surname from given name on a form.',
  'I can write a date the American way: MM/DD/YYYY.',
  'I can use form words: marital status, emergency contact, relationship.',
  'I can fill in a form carefully, with a practice person, without real data.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 05: descobre · rapido · formulario (os dados estão no topo do aula.js) */
