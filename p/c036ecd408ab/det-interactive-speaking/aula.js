/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 10 OF 16 · INTERACTIVE SPEAKING · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão (nova em julho de 2025): uma conversa com perguntas ouvidas, uma de cada vez; cerca de 35 segundos
   para cada resposta, sem preparo. Chave: responder + 1 detalhe + 1 exemplo, no tempo verbal da pergunta.
   Áudios: edge-tts, entrevistador americano.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 10, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 10 OF 16', titulo: ['Interactive', 'Speaking'], tema: 'Answer, add one, match the tense', placa: 'LESSON 10',
  lugarConversa: 'THE PODCAST ROOM', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'A voice asks you questions, one by one, about the same topic. No time to prepare: about 35 seconds each. Today you learn to answer fast and well.',
  chips: ['Answer + 1 + 1', 'Six questions, 35 s each', 'Quick choices'], botao: 'Start the lesson',
  nota: 'Listen to the TENSE of the question: “Do you…?” present, “Have you ever…?” present perfect, “If you had…?” would.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'I · Answer + 1 + 1', t: 'Two answers to the same question.', p: 'Compare A and B. Which one gets more points? Why?' },
  { k: 'prova', est: 'o', min: 16, img: 'capa', rot: 'II · Six Questions', t: 'Listen once. Answer for about 35 seconds.', p: 'Play the question, then start the clock. Answer + one detail + one example.' },
  { k: 'escolha', est: 'o', min: 7, img: 'conversa', rot: 'III · Quick Choices', t: 'A or B? Say why, in 30 seconds.', p: 'Choose quickly. Then give a reason and an example.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var DESCOBRE = {
  pares: [
    { a: '“What do you do on weekends?” — {I usually go to the park. I take my dog, and sometimes I meet friends for a coffee.}', b: '“What do you do on weekends?” — {Park.}', q: 'Which answer is better? What does A add?', r: 'A answers <b>+ one detail</b> (the dog) <b>+ one more</b> (friends, coffee). One word is not an answer.' },
    { a: '“Has your routine changed?” — {Yes, it has. I’ve started working from home.}', b: '“Has your routine changed?” — {Yes, I start working from home.}', q: 'Which one matches the question?', r: '<b>Has … changed?</b> → present perfect: I’ve started. Match the tense of the question.' },
    { a: '“If you had a free day, what would you do?” — {I would sleep late and go to the beach.}', b: '“If you had a free day, what would you do?” — {I will sleep late.}', q: 'Which tense does the question ask for?', r: '<b>If you had… what would you…?</b> → I would… It is imaginary.' },
    { a: '“Do you agree?” — {Partly. I agree that we are busier, but I think it’s our choice.}', b: '“Do you agree?” — {Yes.}', q: 'What makes A stronger?', r: 'A gives a position <b>and a reason</b>. “Partly” is a great answer too.' }],
  regra: [['ANSWER FIRST', 'Yes, I do. · Usually, I… · Partly.'], ['+ ONE DETAIL', 'who, where, when, how often'], ['+ ONE EXAMPLE', 'For example, last week…'], ['MATCH THE TENSE', 'Do you → I do · Have you → I have · Would you → I would']],
  armas: [['TENSE', 'Has it changed? — Yes, I start a job.', 'Yes, I’ve started a new job.', 'has … changed → present perfect'], ['WOULD', 'If you had time? — I will travel.', 'I would travel.', 'imaginary → would'], ['FULL ANSWER', 'Park.', 'I usually go to the park with my dog.', 'answer + detail'], ['AGREE', 'I am agree.', 'I agree.', 'agree is a verb']] };

var PROVA = { rot: 'INTERACTIVE SPEAKING', tarefas: [
  { k: 'QUESTION 1', tipo: 'fala', seg: 35, audio: 'is1.mp3', ouve: 'Let’s talk about your free time. What do you usually do on weekends?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'Present simple: I usually…',
    criterios: ['Answered the question', 'Added a detail and an example', 'Matched the tense (I usually…)', 'Spoke for 20 seconds or more'],
    modelo: 'On weekends, I usually rest on Saturday morning and see my family on Sunday. My parents live near me, so we have lunch together almost every week. For example, last Sunday my mother made lasagna, and we stayed at the table for three hours.' },
  { k: 'QUESTION 2', tipo: 'fala', seg: 35, audio: 'is2.mp3', ouve: 'That sounds nice. Who do you usually spend that time with?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'Who + why.',
    criterios: ['Answered the question', 'Added a detail and an example', 'Matched the tense', 'Spoke for 20 seconds or more'],
    modelo: 'Usually with my family and my best friend, Bia. We have been friends since school, so she is almost part of the family. For example, she comes to our Sunday lunch at least once a month.' },
  { k: 'QUESTION 3', tipo: 'fala', seg: 35, audio: 'is3.mp3', ouve: 'Has the way you spend your weekends changed in the last few years? How?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'Present perfect: Yes, it has. I’ve started…',
    criterios: ['Answered the question (Yes, it has / No, it hasn’t)', 'Added a detail and an example', 'Used the present perfect', 'Spoke for 20 seconds or more'],
    modelo: 'Yes, it has. A few years ago, I went out every Saturday night. Now I’ve started to prefer quiet weekends, because my week is very busy. For example, I’ve joined a running group, and we run on Sunday mornings.' },
  { k: 'QUESTION 4', tipo: 'fala', seg: 35, audio: 'is4.mp3', ouve: 'Some people say that free time is becoming shorter. Do you agree?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'A position + a reason. “Partly” is fine.',
    criterios: ['Gave a clear position', 'Gave a reason', 'Gave an example', 'Spoke for 20 seconds or more'],
    modelo: 'Partly. I agree that we feel busier, because our phones bring work home. But I think part of it is our choice. For example, I spend an hour a day on videos, and that is free time I choose to lose.' },
  { k: 'QUESTION 5', tipo: 'fala', seg: 35, audio: 'is5.mp3', ouve: 'If you had one extra free day every week, what would you do with it?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'Imaginary: I would…',
    criterios: ['Answered the question', 'Added a detail and an example', 'Used would', 'Spoke for 20 seconds or more'],
    modelo: 'If I had an extra free day, I would use it to learn something new. I would probably take a cooking class, because I can only make three dishes. For example, I would love to learn to make bread at home.' },
  { k: 'QUESTION 6', tipo: 'fala', seg: 35, audio: 'is6.mp3', ouve: 'Finally, what advice would you give to someone who never has time to rest?', enun: 'Listen to the question. Answer for about 35 seconds.', dica: 'Advice: I’d tell them to… / They should…',
    criterios: ['Gave clear advice', 'Gave a reason', 'Gave an example', 'Spoke for 20 seconds or more'],
    modelo: 'I’d tell them to put rest in the calendar, like a meeting. If it is not in the calendar, it never happens. For example, I block Sunday mornings for myself, and nobody can book that time.' }] };

var ESCOLHA = [
  { a: 'Mountains', b: 'The beach', chips: ['I’d choose…', 'because…', 'For example,…'], ex: 'I’d choose the mountains, because I love cold weather. For example, last July I went to a small town in the south and it was perfect.' },
  { a: 'Call', b: 'Text message', chips: ['I prefer to…', 'because…', 'For example,…'], ex: 'I prefer to send a text, because I can answer when I have time. For example, I answer my friends at lunch.' },
  { a: 'Study in the morning', b: 'Study at night', chips: ['For me,…', 'because…', 'For example,…'], ex: 'For me, the morning is better, because my head is fresh. For example, I study from six to seven before work.' },
  { a: 'A big city', b: 'A small town', chips: ['I’d rather live in…', 'because…', 'On the other hand,…'], ex: 'I’d rather live in a big city, because there are more jobs. On the other hand, small towns are calmer.' }];
var ESCOLHA_FIM = 'Fast choices with reasons: that is exactly what the test asks.';

var PODE = [
  'I can answer a question I hear only once, with no time to prepare.',
  'I can answer + add a detail + add an example.',
  'I can match the tense of the question: do, have, would.',
  'I can give my opinion and advice with a reason.'
];

/* MECÂNICAS VARIADAS */
/* DET 10: descobre · prova (com áudio) · escolha (os dados estão no topo do aula.js) */
