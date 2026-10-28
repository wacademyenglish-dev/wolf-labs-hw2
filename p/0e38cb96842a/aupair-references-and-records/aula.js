/* ============================================================
   AU PAIR · MODULE 2 · LESSON 6 OF 24 · REFERENCES AND RECORDS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Cartas de referência (quem já viu a aluna cuidar de crianças) e a ficha médica: alergias, vacinas, remédios.
   Pessoas e instituições FICTÍCIAS. Saúde da aluna: só o que ela quiser contar; na aula, dados de uma personagem.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A2+', unidade: 6, kick: 'AU PAIR · MODULE 2 · LESSON 6 OF 24', titulo: ['References and', 'Records'], tema: 'Letters about you and your health form', placa: 'LESSON 06',
  lugarConversa: 'THE CLINIC', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Someone who saw you with children writes about you, and a doctor fills in your health form. Today you learn to read a reference and to talk about allergies, vaccines and medicines.',
  chips: ['A real-style reference', 'Allergic to… · up to date', 'The health form'], botao: 'Start the lesson',
  nota: 'Choose references who really saw you with children, and ask them first. Never write a reference for yourself.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · A Reference Letter', t: 'What does a good reference say?', p: 'Read the letter out loud. Then answer the questions.' },
  { k: 'transforma', est: 'o', min: 8, img: 'capa', rot: 'II · Health Words', t: 'Say it the way a form asks.', p: 'Read the Portuguese idea and the clue. Say it in English.' },
  { k: 'formulario', est: 'w', min: 12, img: 'conversa', rot: 'III · The Health Form', t: 'Fill in Mariana’s health form.', p: 'Read her notes from the doctor. Fill in every field. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 6: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'A REFERENCE FOR MARIANA (FICTIONAL)', tipo: 'nota',
  antes: { q: 'Who could write a reference about you and children? Say two people.', h: 'A teacher, a daycare director, a family you babysat for, a coach. Not a relative.' },
  texto: 'To whom it may concern,\nI am the director of {Sunflower Daycare} in Recife. Mariana Costa Ribeiro worked with us as a {volunteer assistant} from {February 2023 to December 2024}, three afternoons a week, with children {aged 2 to 5}.\nMariana is {patient, responsible and creative}. She prepared art activities, helped at lunch time and comforted children who missed their parents. I {never had a complaint} about her.\nI {recommend her without hesitation}. Please contact me if you need more information.\nAna Paula Mendes, Director',
  perguntas: [
    { q: 'Who wrote the letter? Why is she a good reference?', h: 'The director of the daycare: she saw Mariana work with children for almost two years.' },
    { q: 'When, how often and with which ages did Mariana work?', h: 'From February 2023 to December 2024, three afternoons a week, children aged 2 to 5.' },
    { q: 'What three words describe Mariana?', h: 'Patient, responsible and creative.' },
    { q: 'What did she do with the children?', h: 'Art activities, help at lunch time, comfort children who missed their parents.' }],
  olha: 'The highlighted words are what an agency looks for: WHERE, WHAT role, WHEN (dates), WHICH AGES, three qualities, real tasks, and a clear recommendation.' };

var TRANSFORMA = { rot: 'HEALTH WORDS', fim: 'Clear, short answers: that is what a health form needs.', itens: [
  { de: 'Tenho alergia a amendoim.', pista: 'I’m allergic to…', para: 'I’m allergic to peanuts.' },
  { de: 'Não tenho nenhuma alergia.', pista: 'I don’t have any…', para: 'I don’t have any allergies.' },
  { de: 'Minhas vacinas estão em dia.', pista: '… are up to date', para: 'My vaccinations are up to date.' },
  { de: 'Tomo um remédio para asma.', pista: 'I take medication for…', para: 'I take medication for asthma.' },
  { de: 'Não tomo nenhum remédio.', pista: 'I don’t take any…', para: 'I don’t take any medication.' },
  { de: 'Uso óculos para ler.', pista: 'I wear… for…', para: 'I wear glasses for reading.' }] };

var FORMULARIO = { rot: 'BRIGHTPATH AU PAIR · HEALTH INFORMATION', perfilRot: 'NOTES FROM MARIANA’S DOCTOR (FICTIONAL)',
  perfil: '<p>Patient: <b>Mariana Costa Ribeiro</b>.</p><p>Allergy: <b>penicillin</b> (an antibiotic). No food allergies.</p><p>Vaccinations: <b>all up to date</b>.</p><p>Medication: <b>none</b>.</p><p>She <b>can swim</b> and has <b>no physical limitations</b>.</p><p>Doctor: <b>Dr. Felipe Andrade</b>.</p>',
  fim: 'Perfect. Health information must be exact: someone may need it in an emergency.',
  campos: [
    { r: 'Allergies (medication) *', ph: '', aceita: ['Penicillin', 'Allergic to penicillin'] },
    { r: 'Allergies (food) *', ph: 'write “none” if none', aceita: ['None', 'No'] },
    { r: 'Are your vaccinations up to date? *', ph: 'yes / no', aceita: ['Yes'] },
    { r: 'Current medication *', ph: 'write “none” if none', aceita: ['None', 'No'] },
    { r: 'Can you swim? *', ph: 'yes / no', aceita: ['Yes'] },
    { r: 'Physical limitations *', ph: '', aceita: ['None', 'No'] },
    { r: 'Name of your doctor *', ph: '', aceita: ['Dr. Felipe Andrade', 'Felipe Andrade', 'Dr Felipe Andrade'] }] };

var PODE = [
  'I can understand what a reference letter says about someone.',
  'I can choose good references (people who saw me with children).',
  'I can say allergies, vaccines and medication in English.',
  'I can fill in a health form, writing “none” when there is nothing.'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 06: leitura · transforma · formulario (os dados estão no topo do aula.js) */
