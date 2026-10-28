/* ============================================================
   ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 16 OF 16 · THE FINAL STATION · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para a Saúde (B1+).
   Fecho do curso: uma consulta inteira, do "What brings you in?" ao plano, com ICE (ideas, concerns,
   expectations), resumo e passagem de caso. Vídeo Geeky Medics (dor torácica, 2:33–4:22).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 16, kick: 'ENGLISH FOR HEALTHCARE · MODULE 4 · LESSON 16 OF 16', titulo: ['The Final', 'Station'], tema: 'A whole consultation, from hello to handover', placa: 'LESSON 16',
  lugarConversa: 'THE EXAM ROOM', cor: '#7cc6e8', cor2: '#cde9f6',
  sub: 'One patient, from the first question to the plan, and then the phone call to a colleague. Everything you practiced, in one station.',
  chips: ['Ideas, concerns, expectations', 'The full consultation', 'Plan and handover'], botao: 'Start the lesson',
  nota: 'The patient’s worry is part of the history. “What do you think could be causing it?” often tells you more than ten closed questions.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 9, img: 'conversa', rot: 'I · What Are You Worried About?', t: 'A student finds the patient’s real fear.', p: 'One question before, then the video, then the questions.' },
  { k: 'cadeira', est: 'o', min: 16, img: 'capa', rot: 'II · The Full Consultation', t: 'Your teacher is the patient. You lead.', p: 'Follow the steps. Ask, listen, react. Your teacher answers as the patient.' },
  { k: 'prova', est: 'o', min: 14, img: 'conversa', rot: 'III · Plan and Handover', t: 'Explain the plan. Then call a colleague.', p: 'Read the card, prepare, start the clock, speak.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 16: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'eiRIm6BOzP4', titulo: 'Chest Pain History Taking | OSCE', fonte: 'GEEKY MEDICS · 2:33–4:22', inicio: 153, fim: 262,
  antes: { q: 'A young patient has chest pain. What could he be afraid of? How would you find out?', h: 'A heart attack. Ask: What do you think is causing it? Is anything worrying you?' },
  ouvir: 'Listen: What is the patient afraid of, and why?',
  perguntas: [
    { q: 'What does the student ask to find the patient’s ideas?', h: '“What do you think could be causing your symptoms?”' },
    { q: 'What is the patient worried about, and why?', h: 'A heart attack. His dad died of a heart attack three years ago.' },
    { q: 'How does the student react to the news about his dad?', h: '“I’m sorry to hear that. It must have been really difficult.”' },
    { q: 'What does the patient expect from the visit?', h: 'He wants to hear that he’s overreacting and to be “sorted out”.' },
    { q: 'How does the student start the summary?', h: '“I’m just going to summarize back what you’ve told me. If I get any of it wrong, just let me know.”' }],
  fecho: 'ICE: Ideas (What do you think is causing it?), Concerns (Is anything worrying you?), Expectations (What were you hoping I could do today?). Then summarize and check.' };

var CADEIRA = { itens: [
  { alvo: 'Introduce yourself and check the patient.', dica: 'Hi, I’m … Can I check your name and date of birth?', resp: 'Sure. Paula Mendes, 3rd of May, 1979.' },
  { alvo: 'Open the consultation.', dica: 'What brings you in today?', resp: 'I’ve had a terrible headache for four days.' },
  { alvo: 'Ask about the onset and the character.', dica: 'Did it start suddenly or gradually? What does it feel like?', resp: 'Gradually. It’s like a tight band around my head.' },
  { alvo: 'Ask about severity and what makes it worse.', dica: 'On a scale of 0 to 10…? Does anything make it better or worse?', resp: 'A 6. Screens make it worse. Painkillers help a little.' },
  { alvo: 'Check red flags, gently.', dica: 'Have you had any fever, vomiting, or problems with your vision?', resp: 'No, nothing like that.' },
  { alvo: 'Ask about medication and allergies.', dica: 'Do you take any regular medication? Any allergies?', resp: 'Ibuprofen, three or four a day this week. No allergies.' },
  { alvo: 'I · Ask about her IDEAS.', dica: 'What do you think could be causing it?', resp: 'Stress, I think. I’ve been working twelve hours a day.' },
  { alvo: 'C · Ask about her CONCERNS.', dica: 'Is there anything you’re worried about?', resp: 'Honestly? My aunt had a brain tumor. I keep thinking about it.' },
  { alvo: 'React with empathy.', dica: 'I’m sorry to hear that. I can understand why you’re worried.', resp: 'Thank you. It’s been on my mind all week.' },
  { alvo: 'E · Ask about her EXPECTATIONS.', dica: 'What were you hoping I could do for you today?', resp: 'I want to know it’s nothing serious. Maybe a scan?' },
  { alvo: 'Summarize and check.', dica: 'Let me summarize what you’ve told me. Tell me if I get anything wrong…', resp: 'Yes, that’s right.' },
  { alvo: 'Explain the plan in plain English.', dica: 'From what you’ve told me, this sounds like… What I’d suggest is… Does that sound OK?', resp: 'That makes sense. So no scan for now?' }] };

var PROVA = { rot: 'PLAN AND HANDOVER', tarefas: [
  { k: 'TASK 1 · TALK TO THE PATIENT', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the card. Explain the plan to Paula in plain English.',
    texto: '<b>Paula, 47.</b> Tension headache from stress and screens. No red flags. Too many painkillers can cause more headaches (“medication overuse headache”). <b>Plan:</b> no scan needed now; reduce ibuprofen; regular breaks and sleep; come back in 2 weeks, or <b>now</b> if: sudden severe headache, fever, vomiting or vision problems.',
    chips: ['The good news is…', 'This sounds like…', 'A scan isn’t needed right now because…', 'What I’d suggest is…', 'Come back straight away if…', 'Does that sound OK?'],
    criterios: ['Answered her concern (the tumor) directly', 'Plain English, no jargon', 'Clear safety-netting', 'Checked understanding'],
    modelo: 'The good news is that this sounds like a tension headache, probably from stress and long hours at the screen. I know you were worried about a tumor, and I understand why, but nothing you’ve told me points to that, so a scan isn’t needed right now. One thing: taking painkillers every day can actually cause more headaches, so I’d like you to cut down slowly. Try regular breaks from the screen and more sleep, and come back in two weeks. But if you get a sudden, very bad headache, a fever, vomiting or problems with your vision, come back straight away. Does that sound OK?' },
  { k: 'TASK 2 · CALL A COLLEAGUE', tipo: 'fala', prep: 45, seg: 75, enun: 'Read the card. Hand over the patient by phone with SBAR.',
    texto: '<b>Mr. Alves, 66, bed 4.</b> Admitted this morning with a chest infection, on oral antibiotics. Now: temperature 38.9°C, heart rate 112, blood pressure dropped from 130/80 to 98/60, looks pale and clammy. Your shift ends in 10 minutes.',
    chips: ['This is … from…', 'I’m calling about…', 'He was admitted…', 'Since then…', 'I’m worried that…', 'Could you…?'],
    criterios: ['S in one sentence', 'Only the relevant background', 'Numbers + your concern', 'A clear request with a time'],
    modelo: 'Hi, this is Leo, the day nurse on Ward 2. I’m calling about Mr. Alves in bed 4, who is getting worse. He’s 66 and was admitted this morning with a chest infection; he’s on oral antibiotics. His temperature is now 38.9, his heart rate is 112, and his blood pressure has dropped from 130 over 80 to 98 over 60. He looks pale and clammy. I’m worried he could be developing sepsis. Could you see him in the next ten minutes? My shift ends soon, so I’ll hand him over to Marta, the night nurse.' }] };

var PODE = [
  'I can ask about a patient’s ideas, concerns and expectations.',
  'I can react with empathy when a patient tells me something hard.',
  'I can summarize and explain a plan in plain English, with safety-netting.',
  'I can lead a whole consultation and hand over a patient in English.'
];

/* MECÂNICAS VARIADAS */
/* SAUDE 16: video · cadeira · prova (os dados estão no topo do aula.js) */
