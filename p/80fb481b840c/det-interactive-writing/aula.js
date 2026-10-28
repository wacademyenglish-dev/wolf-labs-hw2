/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 13 OF 16 · INTERACTIVE WRITING · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   A questão: um tema, 5 minutos para escrever; depois uma pergunta de continuação sobre o mesmo tema, 3 minutos.
   Chave: um parágrafo organizado (frase-tópico → apoio com conectivos → fecho) e conectivos variados.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 13, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 13 OF 16', titulo: ['Interactive', 'Writing'], tema: 'Five minutes, then three more', placa: 'LESSON 13',
  lugarConversa: 'THE WRITER’S CABIN', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'Five minutes on a topic, then a new question about what you wrote, three more minutes. Today: a paragraph with a clear structure and better connectors.',
  chips: ['A model paragraph', 'Better connectors', '5 + 3 minutes, real clock'], botao: 'Start the lesson',
  nota: 'Topic sentence, support, conclusion. Aim for 100 words in five minutes, and save 30 seconds to check.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 9, img: 'conversa', rot: 'I · A Model Paragraph', t: 'What makes this paragraph work?', p: 'Read it out loud. Then find the structure and the connectors.' },
  { k: 'transforma', est: 'w', min: 8, img: 'capa', rot: 'II · Better Connectors', t: 'Same idea, better connector.', p: 'Read the sentence and the clue. Say it with the new connector.' },
  { k: 'prova', est: 'w', min: 18, img: 'conversa', rot: 'III · Five, Then Three', t: 'The real clock: 5 minutes, then a follow-up.', p: 'Write about the topic. Then answer the new question.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 13: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var LEITURA = { rot: 'TOPIC: A TIME TECHNOLOGY MADE YOUR LIFE EASIER', tipo: 'nota',
  antes: { q: 'Which app or device helps you most in your week? One sentence.', h: 'A maps app, a banking app, a translator, a calendar…' },
  texto: '{A good example} of technology making my life easier is my banking app. {Before}, I had to go to the bank during my lunch break, and I usually waited in line for half an hour. {Now}, I can pay bills, transfer money and check my account in two minutes, from anywhere. {Moreover}, the app sends me a message every time I spend money, so I control my budget much better. {For instance}, last month I noticed that I was spending too much on food deliveries, and I changed my habits. {Overall}, this small app saves me time and money every single week.',
  perguntas: [
    { q: 'What is the topic sentence (the first idea)?', h: 'A good example of technology making my life easier is my banking app.' },
    { q: 'How was life before the app? And now?', h: 'Before: lines at the bank at lunch. Now: two minutes, from anywhere.' },
    { q: 'What extra advantage does the writer add?', h: 'Messages for every expense: better budget control.' },
    { q: 'How does the paragraph end?', h: '“Overall…”: a wrap-up of the main idea.' }],
  olha: 'The highlighted words are connectors. Before / Now = contrast in time. Moreover = one more point. For instance = an example. Overall = the wrap-up. About 100 words: that is your goal in five minutes.' };

var TRANSFORMA = { rot: 'BETTER CONNECTORS', fim: 'Varied connectors = a higher writing score.', itens: [
  { de: 'The app is fast. And it is free.', pista: 'Moreover,', para: 'The app is fast. Moreover, it is free.' },
  { de: 'It is useful. But it is distracting.', pista: 'However,', para: 'It is useful. However, it can be distracting.' },
  { de: 'I use maps a lot. Like yesterday, I found a new route.', pista: 'For instance,', para: 'I use maps a lot. For instance, yesterday I found a new route.' },
  { de: 'I lost my phone, so I missed the meeting.', pista: 'As a result,', para: 'I lost my phone. As a result, I missed the meeting.' },
  { de: 'In the past I wrote letters. Today I send messages.', pista: 'Before, … Now, …', para: 'Before, I wrote letters. Now, I send messages in seconds.' },
  { de: 'So, in the end, technology helps me.', pista: 'Overall,', para: 'Overall, technology makes my life easier.' }] };

var PROVA = { rot: 'INTERACTIVE WRITING', tarefas: [
  { k: 'PART 1 · 5 MINUTES', tipo: 'escrita', seg: 300, enun: 'Write about the topic for 5 minutes.',
    texto: '<b>Describe a time when technology made your life easier.</b> What was the technology? How did it help you?',
    dica: 'Topic sentence → before / now → one more point → an example → overall. Aim for 100 words.',
    criterios: ['A clear topic sentence', 'Before / now, or another contrast', 'At least three different connectors', 'An example', 'A wrap-up sentence (Overall,…)', '80 words or more'],
    modelo: 'A good example of technology making my life easier is a translation app. Last year, I traveled to Japan, and I couldn’t read anything. Before the trip, I was worried about restaurants and trains. However, with the app, I could point my phone at a menu and read it in seconds. Moreover, I used it to ask for directions, and people were very patient with me. For instance, an old man helped me find my hotel using the app. Overall, this simple tool made my trip possible and much less stressful.' },
  { k: 'PART 2 · FOLLOW-UP · 3 MINUTES', tipo: 'escrita', seg: 180, enun: 'Now answer this new question about the same topic. You have 3 minutes.',
    texto: '<b>What is one disadvantage of depending on technology like this?</b>',
    dica: 'Answer directly, give a reason, give an example. 50 words or more.',
    criterios: ['Answered the new question directly', 'Gave a reason', 'Gave an example', 'Used a connector (However / As a result…)', '50 words or more'],
    modelo: 'One disadvantage is that we stop learning. When the app translates everything, we don’t try to understand or remember the words. As a result, we depend on the phone completely. For instance, on my last day in Japan my battery died, and I couldn’t even say “thank you” without help.' }] };

var PODE = [
  'I can write a paragraph with a topic sentence, support and a wrap-up.',
  'I can use varied connectors: moreover, however, for instance, as a result, overall.',
  'I can write about 100 words in five minutes.',
  'I can answer a follow-up question about my own text.'
];

/* MECÂNICAS VARIADAS */
/* DET 13: leitura · transforma · prova (os dados estão no topo do aula.js) */
