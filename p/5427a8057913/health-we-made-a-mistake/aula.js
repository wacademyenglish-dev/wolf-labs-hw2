/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 11 OF 16 · WE MADE A MISTAKE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Explicar um erro com honestidade: o que aconteceu, um pedido de desculpas sincero, sem culpar colegas, o que já foi
   feito e o que muda. Vídeo: Geeky Medics, "Explaining a Medication Error" (4:58), legenda conferida em 15/10.
   Casos FICTÍCIOS por profissão. A aula não substitui os protocolos da instituição.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 11, kick: 'ENGLISH FOR HEALTHCARE · MODULE 3 · LESSON 11 OF 16', titulo: ['We Made', 'a Mistake'], tema: 'Explaining an error honestly', placa: 'LESSON 11',
  lugarConversa: 'THE CLOSED DOOR', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Mistakes happen in every profession. What patients remember is how we told them. Today you learn to explain an error honestly, apologize well and say what will change.',
  chips: ['A doctor explains an error', 'A bad apology', 'Your conversation'], botao: 'Start the lesson',
  nota: 'Say what happened, say sorry, don’t blame a colleague, say what you’ve done and what will change. Follow your institution’s policy.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · A Medication Error', t: 'A doctor tells a patient about a wrong dose.', p: 'One question before, then the video, then the questions.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'II · An Honest Apology, in Blocks', t: 'Four blocks for a hard conversation.', p: 'Read the blocks out loud. Notice what each block does. Then build a sentence and say your own.' },
  { k: 'erros', est: 'f', min: 8, img: 'capa', rot: 'III · A Bad Apology', t: 'What is wrong with this apology?', p: 'Find each problem, say a better version, then tap.' },
  { k: 'ordem', est: 'f', min: 7, img: 'conversa', rot: 'IV · A Good Disclosure', t: 'Six steps, in order.', p: 'Tap the steps in order. Then say them as one conversation.' },
  { k: 'prova', est: 'o', min: 12, img: 'capa', rot: 'V · Your Conversation', t: 'Explain a mistake from your profession.', p: 'Thirty seconds to plan. Then up to 90 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'VI · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: '59AhfANilIg', titulo: 'Explaining a Medication Error - OSCE Guide', fonte: 'GEEKY MEDICS · 5 MIN',
  antes: { q: 'A patient received the wrong dose of a medicine. What must the conversation include?', h: 'What happened, an apology, what it means for them, what was done, what will change.' },
  ouvir: 'Listen: How does the doctor explain the error? What does the patient get angry about?',
  perguntas: [
    { q: 'How does the doctor start, before explaining?', h: 'He checks what the patient knows about the bleed and his medications, and reassures him there is no new diagnosis.' },
    { q: 'What was the error, in his words?', h: 'The blood thinner was mistakenly prescribed at a higher dose than needed, and that might have caused or contributed to the bleed.' },
    { q: 'How does he apologize?', h: '“I’m really sorry this happened.”' },
    { q: 'Why does the patient get angry?', h: 'The doctor starts to say “one of the members of the team…”: the patient feels he is blaming someone else.' },
    { q: 'What has been done already?', h: 'He double-checked all medications, discussed it with the team and submitted a formal incident report. The patient wants to make a formal complaint.' }],
  fecho: 'Honest, specific, sorry, no blame, action. And respect the patient’s anger: it is legitimate.' };

var ERROS = { rot: 'A BAD APOLOGY', tipo: 'nota', rotulo: 'PROBLEMS', pede: 'Find the five problems. Say a better version, then tap.', fim: 'Five problems fixed. Now say the good version out loud.', dica: 'The student says the better version before tapping.', partes: [
  ['Mistakes were made', 'We made a mistake', 'don’t hide behind the passive: say who'], ' with your medication. ',
  ['It was the night nurse’s fault.', 'I’m really sorry this happened.', 'never blame a colleague; apologize for the team'], ' ',
  ['There was a supratherapeutic anticoagulant dose', 'You were given a higher dose of the blood thinner than you needed', 'plain words'], '. ',
  ['It’s not a big deal', 'This may have caused the bleeding in your knee', 'don’t minimize: explain the effect honestly'], '. ',
  ['It will never happen again, I promise', 'We’ve checked all your medicines and reported it, so we can prevent it from happening again', 'promise actions, not perfection'], '.'] };

var ORDEM = { rot: 'A GOOD DISCLOSURE', pede: 'Tap the six steps in order.',
  passos: ['I’d like to talk to you about something that went wrong with your care.', 'You were given a higher dose of your blood thinner than you needed.', 'I’m really sorry. This should not have happened.', 'It may have caused the bleeding in your knee. You are recovering well now.', 'We have checked all your medicines and reported the error, so we can prevent it from happening again.', 'Do you have any questions? If you want to make a complaint, I can tell you how.'],
  chips: ['Introduce the topic', 'What happened', 'Apologize', 'The effect', 'What we did', 'Questions and options'],
  modelo: 'Topic → what happened (plain words) → a sincere apology → the effect on the patient → what was done / what will change → questions and the complaint route.' };

var PROVA = { rot: 'YOUR CONVERSATION', tarefas: [
  { k: 'YOUR PROFESSION', tipo: 'fala', prep: 30, seg: 90, enun: 'Choose a case. Thirty seconds to plan. Then explain the mistake (your teacher is the patient).',
    texto: '<b>Choose one (fictional cases):</b><br>NURSE · a patient’s 2 p.m. antibiotic was given at 6 p.m.<br>PHARMACIST · a patient received 10 mg tablets instead of 5 mg for three days.<br>DENTIST · a filling was placed in the wrong tooth (next to the right one).<br>PHYSIO · an exercise too advanced made the knee swell.<br>DOCTOR · a blood test result was not checked for a week.',
    chips: ['I need to talk to you about…', 'We made a mistake.', 'I’m really sorry.', 'This may have caused…', 'What we’ve done is…', 'To prevent this from happening again,…', 'What questions do you have?'],
    criterios: ['Said clearly what happened (no passive hiding)', 'A sincere apology', 'No blame on a colleague', 'Explained the possible effect honestly', 'Said what was done / will change', 'Invited questions'],
    modelo: '(Pharmacist) Mrs. Diaz, I need to talk to you about your blood pressure tablets. We made a mistake: we gave you 10-milligram tablets instead of 5, and you took them for three days. I’m really sorry. This may be why you felt dizzy this week. We’ve already spoken to your doctor, who says it should improve in a day or two, and here are the correct tablets. We’ve also changed how we double-check strengths, to prevent this from happening again. What questions do you have?' }] };

var PODE = [
  'I can say clearly what went wrong, without hiding behind the passive.',
  'I can apologize sincerely, without blaming a colleague.',
  'I can explain the possible effect honestly.',
  'I can say what we have done and what will change.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 11: video · erros · ordem · prova (os dados estão no topo do aula.js) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G1 · uma cena curta nova (k: gx) antes de erros.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'blocos', titulo: 'An honest explanation, in blocks. Each block has a job.',
  frases: [
    { b: [['I’m afraid', 'WARNING', 'aux'], ['we made a mistake', 'WHAT HAPPENED', 'acao'], ['with your medicine.', 'WHERE', 'onde']], d: 'Say it clearly. No hiding.' },
    { b: [['I’m very sorry', 'SORRY', 'q'], ['this happened.', 'WHAT', 'o']], d: 'A sincere apology. No blaming a colleague.' },
    { b: [['We have already', 'DONE', 'quando'], ['checked your blood pressure.', 'WHAT WE DID', 'acao']], d: '“Have + done” says what is already finished.' },
    { b: [['From now on,', 'WHEN', 'quando'], ['two nurses will check', 'WHAT CHANGES', 'acao'], ['every dose.', 'WHAT', 'o']], d: '“Will” says what changes.' }
  ],
  nota: 'Four jobs: <b>what happened</b>, <b>sorry</b>, <b>what we have done</b>, <b>what changes</b>. Have + done for what is finished. Will for what changes from now on.',
  monta: { p: 'Build the line that says what changes. Then say it.', pecas: [['every dose.', 'WHAT', 'o'], ['will check', 'WHAT CHANGES', 'acao'], ['two nurses', 'WHO', 'quem'], ['From now on,', 'WHEN', 'quando']], ordem: [3, 2, 1, 0] },
  uso: { p: 'Your turn. A small mistake at your job: say what happened and what you have already done.', molde: ['I’m afraid we …', 'We have already …'], ex: 'I’m afraid we gave you the wrong form. We have already given you the right one.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_blocos', GX_EXPLICA); };
