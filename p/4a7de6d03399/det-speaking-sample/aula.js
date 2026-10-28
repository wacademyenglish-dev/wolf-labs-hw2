/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 11 OF 16 · SPEAKING SAMPLE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: no fim da prova, um tema, 30 segundos para preparar e de 1 a 3 minutos falando. Não vale nota,
   mas o vídeo vai para as universidades. Estrutura longa: situação → desafio → o que fiz → resultado → o que aprendi.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 11, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 11 OF 16', titulo: ['Speaking', 'Sample'], tema: 'Three minutes that universities watch', placa: 'LESSON 11',
  lugarConversa: 'BACKSTAGE', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'At the end of the test, you speak for up to three minutes. It has no score, but universities watch it. Today you learn to tell a story that shows who you are.',
  chips: ['A model answer', 'Your five-step plan', 'Three minutes, real clock'], botao: 'Start the lesson',
  nota: 'Look at the camera, smile at the start, and finish with what you learned. Universities want to meet a person.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · A Model Answer', t: 'Read a three-minute answer.', p: 'Read it out loud. Then find the five steps.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'II · Your Plan', t: 'Five steps, five short lines.', p: 'Plan your own story: one line for each step.' },
  { k: 'prova', est: 'o', min: 16, img: 'conversa', rot: 'III · The Real Thing', t: 'Thirty seconds to prepare. Up to three minutes.', p: 'Use your plan. Look at the camera. Finish with what you learned.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 11: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'THE TOPIC: A CHALLENGE YOU FACED', tipo: 'fala',
  antes: { q: 'Think of a difficult moment in your studies or work. What happened? One sentence.', h: 'Any real moment: a hard exam, a new job, a move to a new city.' },
  texto: '{Two years ago}, I started my first job at a software company. I was the youngest person on the team.\n{The challenge was} the meetings: they were all in English, and I was too nervous to speak. For three months, I only listened.\n{So I decided to} change. I wrote three questions before every meeting, and I promised myself to ask at least one.\n{As a result}, my manager noticed me. Six months later, I was presenting our project to a client in Canada.\n{What I learned is that} confidence is not something you have; it is something you practice. That’s why I want to continue my studies abroad.',
  perguntas: [
    { q: 'What was the situation?', h: 'A first job at a software company, the youngest on the team.' },
    { q: 'What was the challenge?', h: 'Meetings in English; too nervous to speak.' },
    { q: 'What did the speaker do?', h: 'Wrote three questions before every meeting and asked at least one.' },
    { q: 'What did they learn?', h: 'Confidence is something you practice.' }],
  olha: 'The highlighted words are the five steps: situation, challenge, action, result, lesson. Close the text and tell the same story with your own words.' };

var CARTAO = { ph: 'Situation: last year, I moved to …\nChallenge: …\nAction: so I decided to …\nResult: as a result, …\nLesson: what I learned is that …', rot: 'My five-step plan',
  chips: ['Two years ago,', 'Last year,', 'The challenge was', 'So I decided to', 'As a result,', 'What I learned is that', 'That’s why'],
  perg: ['YOUR PLAN', 'A challenge you faced: five short lines, one per step.'],
  exemploRot: 'THE FIVE STEPS', exemplo: [['SITUATION', 'when, where, who'], ['CHALLENGE', 'the problem'], ['ACTION', 'what YOU did'], ['RESULT', 'what changed'], ['LESSON', 'what you learned + why it matters now']],
  modelo: 'Situation: last year, I moved to Curitiba for a new job.<br>Challenge: I didn’t know anybody and I felt lonely.<br>Action: so I decided to join a running group.<br>Result: as a result, I made four good friends.<br>Lesson: what I learned is that you have to make the first move.' };

var PROVA = { rot: 'SPEAKING SAMPLE', tarefas: [
  { k: 'TOPIC 1', tipo: 'fala', prep: 30, seg: 180, enun: 'Prepare for 30 seconds. Speak for 1 to 3 minutes.',
    texto: '<b>Talk about a challenge you faced in your studies or work.</b><br>What was the situation? What did you do? What did you learn?',
    chips: ['Two years ago,…', 'The challenge was…', 'So I decided to…', 'As a result,…', 'What I learned is that…'],
    criterios: ['Smiled and looked at the camera', 'Followed the five steps', 'Used past tenses correctly', 'Ended with a lesson', 'Spoke for more than one minute'],
    modelo: 'Last year, I started a master’s program while I was still working full time. The challenge was time: I had classes at night and deadlines at work. So I decided to plan my week every Sunday, hour by hour, and I stopped watching series for six months. As a result, I finished my first semester with good grades, and I was not too tired. What I learned is that planning is a form of rest: when everything has its time, you can relax. That’s why I feel ready for full-time studies now.' },
  { k: 'TOPIC 2', tipo: 'fala', prep: 30, seg: 180, enun: 'Prepare for 30 seconds. Speak for 1 to 3 minutes.',
    texto: '<b>Why do you want to study at this university?</b><br>What do you want to study? Why there? What will you do after?',
    chips: ['I want to study…', 'The main reason is…', 'For example,…', 'After my studies, I’m planning to…', 'That’s why…'],
    criterios: ['Smiled and looked at the camera', 'Said what and why', 'Gave a personal example', 'Talked about the future', 'Spoke for more than one minute'],
    modelo: 'I want to study environmental engineering, and this university is my first choice. The main reason is its research on clean water, which is a big problem in my region. For example, in my city, many neighborhoods still don’t have treated water. After my studies, I’m planning to go back and work on projects for small towns. That’s why this program is not just a degree for me: it is a plan for my community.' }] };

var PODE = [
  'I can tell a story in five steps: situation, challenge, action, result, lesson.',
  'I can plan a long answer in 30 seconds.',
  'I can speak for more than one minute without stopping.',
  'I can finish with what I learned, looking at the camera.'
];

/* MECÂNICAS VARIADAS */
/* DET 11: leitura · cartao · prova (os dados estão no topo do aula.js) */
