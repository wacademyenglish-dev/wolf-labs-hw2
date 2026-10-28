/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 13 OF 16 · SBAR · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Passar o caso para a equipe com SBAR (Situation, Background, Assessment, Recommendation).
   Vídeo oficial: AHRQ, "TeamSTEPPS: SBAR in Inpatient Medical Teams" (1:35), legenda conferida em 15/10.
   Casos FICTÍCIOS por profissão.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 13, kick: 'ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 13 OF 16', titulo: ['S·B·A·R', 'Handover'], tema: 'Passing on a case in four steps', placa: 'LESSON 13',
  lugarConversa: 'THE NIGHT WARD', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'Calling a doctor at night, handing over a patient, asking a colleague for help: SBAR puts the important information first. Today you hear a real SBAR call and give your own.',
  chips: ['A nurse calls a doctor', 'SBAR in order', 'Your handover'], botao: 'Start the lesson',
  nota: 'Situation in one sentence. Only the background that matters. Your assessment. A clear request.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · An SBAR Call', t: 'A night nurse calls a doctor.', p: 'One question before, then the video, then the questions.' },
  { k: 'ordem', est: 'f', min: 8, img: 'capa', rot: 'II · SBAR in Order', t: 'A physio calls the doctor.', p: 'Tap the eight sentences in order: S, B, A, R.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · Your Handover', t: 'Two cases. Give the SBAR.', p: 'You have forty-five seconds to read the case. Then you speak for about 75 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 13: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'nbJPAumzJrc', titulo: 'TeamSTEPPS: SBAR in Inpatient Medical Teams', fonte: 'AHRQ (U.S. AGENCY FOR HEALTHCARE RESEARCH AND QUALITY) · 2 MIN',
  antes: { q: 'You call a doctor at 2 a.m. about a patient. What do you say first?', h: 'Who you are, which patient, and what the problem is now.' },
  ouvir: 'Listen for S, B, A and R.',
  perguntas: [
    { q: 'S · What is the situation?', h: 'Amy from Two West calls about Miss Everett, who seems confused tonight.' },
    { q: 'B · What background does she give?', h: '82 years old, admitted 3 days ago with DVT, on heparin, telemetry and oxygen, a Foley catheter; normally alert and sharp.' },
    { q: 'A · What is her assessment (findings)?', h: 'Heart rate up to 110, blood pressure down to 110/60 (usually 150 systolic), temperature 37 °C, pale, little urine, and the urine looks cloudy. “I’m worried about her.”' },
    { q: 'R · What does she recommend?', h: '“I think she needs to be seen.” She offers to order labs and send the urine for culture.' },
    { q: 'What does the doctor decide?', h: 'Urinalysis with culture, chemistries and a CBC; possible sepsis; he’s on his way and wants immediate updates.' }],
  fecho: 'The nurse led the call: facts in order, a clear concern, a clear request.' };

var ORDEM = { rot: 'A PHYSIO CALLS THE DOCTOR', pede: 'Tap the eight sentences in order: Situation, Background, Assessment, Recommendation.',
  passos: ['Hi, Dr. Moore, this is Paula, the physiotherapist on Ward 5.', 'I’m calling about Mr. Grant in bed 12: his left calf is swollen and painful.', 'He’s 67, and he had a hip replacement four days ago.', 'He’s on a blood thinner, but he missed yesterday’s dose.', 'His calf is red and warm, and it hurts when he walks.', 'I’m worried it could be a blood clot.', 'I’ve stopped his walking practice for now.', 'Could you see him this morning and consider a scan?'],
  chips: ['S: I’m calling about…', 'B: He’s… He had…', 'A: I’m worried it could be…', 'R: Could you…?'],
  modelo: 'S: I’m calling about Mr. Grant: a swollen, painful left calf. B: 67, hip replacement four days ago, on a blood thinner, missed a dose. A: red and warm calf; I’m worried it could be a clot. R: I’ve stopped walking practice. Could you see him this morning and consider a scan?' };

var PROVA = { rot: 'YOUR HANDOVER', tarefas: [
  { k: 'CASE 1 · NURSE OR DOCTOR', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the case. Then call the on-call doctor with SBAR.',
    texto: '<b>Mrs. Lee, 74, bed 8.</b> Admitted yesterday with pneumonia, on IV antibiotics. Tonight: breathing faster (28 per minute), oxygen saturation down from 95% to 89%, new confusion. You think she is getting worse.',
    chips: ['This is … from…', 'I’m calling about…', 'She was admitted…', 'Her … is…', 'I’m worried that…', 'Could you come and see her?'],
    criterios: ['S: who you are + the problem in one sentence', 'B: only relevant background', 'A: numbers + your concern', 'R: a clear request with a time'],
    modelo: 'Hi Dr. Patel, this is Ana, the night nurse on Ward 3. I’m calling about Mrs. Lee in bed 8, who is getting more short of breath. She’s 74 and was admitted yesterday with pneumonia; she’s on IV antibiotics. Her breathing rate is 28, her oxygen saturation has dropped from 95 to 89 percent, and she’s newly confused. I’m worried she’s deteriorating. Could you come and see her in the next 15 minutes? Should I increase her oxygen while I wait?' },
  { k: 'CASE 2 · PHARMACIST OR DENTIST', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the case. Then call the prescribing doctor with SBAR.',
    texto: '<b>Mr. Costa, 58.</b> A new prescription for an antibiotic. On his record: he takes warfarin (a blood thinner). This antibiotic can increase the effect of warfarin and the risk of bleeding. He is at the counter now.',
    chips: ['This is … from … pharmacy.', 'I’m calling about a prescription for…', 'He’s also taking…', 'This combination can…', 'Would you consider…?', 'Or should we…?'],
    criterios: ['S: who + the prescription problem', 'B: the relevant medication', 'A: the risk, clearly', 'R: a clear proposal or question'],
    modelo: 'Hello Dr. Rossi, this is Carla, the pharmacist at Central Pharmacy. I’m calling about a new antibiotic prescription for Mr. Costa, 58. He’s also taking warfarin. This antibiotic can increase the effect of warfarin and the risk of bleeding. Would you consider a different antibiotic, or would you prefer to keep it and check his INR in three days?' }] };

var PODE = [
  'I can give a handover in four steps: Situation, Background, Assessment, Recommendation.',
  'I can say the situation in one sentence.',
  'I can give my assessment with numbers and a clear concern: I’m worried that…',
  'I can make a clear request: Could you…? Would you consider…?'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 13: video · ordem · prova (os dados estão no topo do aula.js) */
