/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 14 OF 16 · THE CASE PRESENTATION · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Apresentar um caso para colegas: a estrutura (quem, queixa, histórico, exame, exames, conduta, evolução) com past simple
   e voz passiva (was admitted, was treated, was referred). Sem vídeo; caso FICTÍCIO.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 14, kick: 'ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 14 OF 16', titulo: ['The Case', 'Presentation'], tema: 'Presenting a case to colleagues', placa: 'LESSON 14',
  lugarConversa: 'THE MEETING ROOM', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'You present cases in ward rounds and team meetings. Today you learn the structure of a case presentation and the passive voice that makes it sound professional.',
  chips: ['A model case', 'Active to passive', 'Present your case'], botao: 'Start the lesson',
  nota: 'Colleagues want the story in order and fast: who, why, what you found, what was done, how it ended.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · A Model Case', t: 'Read a two-minute case presentation.', p: 'Read it out loud like a presenter. Then answer the questions.' },
  { k: 'transforma', est: 'f', min: 10, img: 'capa', rot: 'II · Active to Passive', t: 'Make it sound like a case presentation.', p: 'Read the sentence and the clue. Say it in the passive.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Present Your Case', t: 'Present a case in two minutes.', p: 'One minute to plan with the card. Then present.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 14: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'CASE PRESENTATION · WARD 4 (FICTIONAL)', tipo: 'nota',
  antes: { q: 'In what order do you present a case in your workplace?', h: 'Usually: patient, complaint, history, examination, tests, treatment, outcome.' },
  texto: '{This is Mr. R.}, a 45-year-old builder who {presented with} two days of fever and a painful, red left leg.\n{He has a history of} type 2 diabetes. He had a small cut on his foot last week.\n{On examination}, the left lower leg was red, warm and swollen, and his temperature was 38.9 °C.\nBlood tests {showed} raised white cells. An ultrasound {ruled out} a blood clot.\nHe {was diagnosed with} cellulitis and {was started on} IV antibiotics. His blood sugar {was monitored} closely.\nAfter 48 hours, the redness was improving and the fever had settled. He {was discharged} on day 5 on oral antibiotics, {with follow-up} at the diabetes clinic.',
  perguntas: [
    { q: 'Who is the patient, and why did he come in?', h: 'Mr. R., 45, a builder, with two days of fever and a painful, red left leg.' },
    { q: 'What was found on examination and in the tests?', h: 'A red, warm, swollen lower leg, 38.9 °C; raised white cells; the ultrasound ruled out a clot.' },
    { q: 'What was the diagnosis and treatment?', h: 'Cellulitis; IV antibiotics and close blood sugar monitoring.' },
    { q: 'How did it end?', h: 'Improving after 48 hours; discharged on day 5 on oral antibiotics, with follow-up at the diabetes clinic.' }],
  olha: 'The highlighted phrases are the signposts of a case: presented with · has a history of · on examination · showed · ruled out · was diagnosed with · was started on · was discharged. Notice the passive: we care about what happened TO the patient.' };

var TRANSFORMA = { rot: 'ACTIVE TO PASSIVE', fim: 'was + participle: the patient is the center of the story.', itens: [
  { de: 'We admitted him on Monday.', pista: 'He was…', para: 'He was admitted on Monday.' },
  { de: 'The team treated her with antibiotics.', pista: 'She was treated…', para: 'She was treated with antibiotics.' },
  { de: 'We referred him to a cardiologist.', pista: 'He was referred…', para: 'He was referred to a cardiologist.' },
  { de: 'The dentist extracted the tooth under local anesthetic.', pista: 'The tooth was…', para: 'The tooth was extracted under local anesthetic.' },
  { de: 'The physio team mobilized her on day 2.', pista: 'She was…', para: 'She was mobilized on day 2.' },
  { de: 'We discharged him with follow-up in two weeks.', pista: 'He was discharged…', para: 'He was discharged with follow-up in two weeks.' }] };

var PROVA = { rot: 'PRESENT YOUR CASE', tarefas: [
  { k: 'A CASE IN TWO MINUTES', tipo: 'fala', prep: 60, seg: 120, enun: 'Use the card (or a real, anonymized case from your work). One minute to plan. Then present.',
    texto: '<b>Card (fictional):</b> Ms. T., 30, teacher · 1 day of throbbing pain, lower right molar, swelling of the cheek · history: no medical problems, allergic to penicillin · exam: swelling, tooth very tender, 37.8 °C · X-ray: abscess at the root · treatment: drainage, antibiotic (not penicillin), pain relief · day 3: swelling better · plan: root canal next week.',
    chips: ['This is…, a … -year-old … who presented with…', 'She has a history of…', 'On examination,…', 'The X-ray showed…', 'She was diagnosed with…', 'She was treated with…', 'On day 3,…', 'The plan is…'],
    criterios: ['Opened with who + the presenting complaint', 'History in one sentence', 'Examination and tests', 'Diagnosis and treatment in the passive', 'Outcome and plan', 'Under two minutes, in order'],
    modelo: 'This is Ms. T., a 30-year-old teacher who presented with one day of throbbing pain in her lower right molar and swelling of the cheek. She has no medical history, but she’s allergic to penicillin. On examination, her cheek was swollen, the tooth was very tender and her temperature was 37.8. The X-ray showed an abscess at the root. She was diagnosed with a dental abscess. The abscess was drained, and she was started on an antibiotic, not penicillin, plus pain relief. On day 3, the swelling was much better. The plan is a root canal next week.' }] };

var PODE = [
  'I can present a case in order: who, why, history, exam, tests, diagnosis, treatment, outcome.',
  'I can use case signposts: presented with, has a history of, on examination, showed, ruled out.',
  'I can use the passive: was admitted, was treated, was referred, was discharged.',
  'I can present a case in two minutes.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 14: leitura · transforma · prova (os dados estão no topo do aula.js) */
