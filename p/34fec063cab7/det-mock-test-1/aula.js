/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 15 OF 16 · MOCK TEST 1 · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   Simulado 1: todos os tipos de questão em sequência, com o relógio da prova. Conteúdo próprio (nunca da prova real).
   Ordem: palavras → lacunas (Fill in the Blanks + Read and Complete) → ditado → escuta e leitura → fala e escrita.
   Áudios: edge-tts, sotaques misturados.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 15, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 15 OF 16', titulo: ['Mock', 'Test 1'], tema: 'The whole test, with the clock', placa: 'MOCK 1',
  lugarConversa: 'THE EXAM HALL', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'Today is a full practice test: every type of question, in order, with the real clock. No teaching during the tasks. At the end, we look at the results together.',
  chips: ['Every question type', 'The real clock', 'Results at the end'], botao: 'Start the mock test',
  nota: 'Treat it like the real day: quiet room, water, phone away. Your teacher only helps after each part.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'palavras', est: 'f', min: 3, img: 'conversa', rot: 'I · Read and Select', t: 'Real words only.', p: 'One round, one minute.' },
  { k: 'lacunas', est: 'w', min: 7, img: 'capa', rot: 'II · Fill in and Complete', t: 'Three sentences, then a paragraph.', p: 'Twenty seconds per sentence. Three minutes for the paragraph.' },
  { k: 'ditado', est: 'l', min: 5, img: 'conversa', rot: 'III · Listen and Type', t: 'Three sentences. Up to three plays each.', p: 'Type every word.' },
  { k: 'multipla', est: 'l', min: 7, img: 'capa', rot: 'IV · Listening and Reading', t: 'A conversation, then a short text.', p: 'Listen once to each line. Then read and choose.' },
  { k: 'prova', est: 'o', min: 20, img: 'conversa', rot: 'V · Speaking and Writing', t: 'Five tasks with the real clock.', p: 'A photo, a topic, two questions, and the writing sample.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · Results', t: 'Mock test 1: how did it go?', p: 'Read each line. Tap the ones that went well. Your teacher confirms.' }
];

var PALAVRAS = { seg: 60, fim: 'Part I done. Next: the gaps.', rodadas: [
  [['appointment', 1], ['brightful', 0], ['schedule', 1], ['wisdom', 1], ['carefullness', 0], ['abroad', 1], ['remainment', 0], ['curious', 1], ['sleepment', 0], ['opinion', 1], ['luggage', 1], ['dangerful', 0], ['ancient', 1], ['recognize', 1], ['strengthly', 0]]] };

var LACUNAS = { rot: 'READING', item: 'TASK', fim: 'Part II done. Next: listening.', textos: [
  { k: 'FILL IN THE BLANKS · 1', seg: 20, t: 'We had to {can|cel} the trip because of the weather.' },
  { k: 'FILL IN THE BLANKS · 2', seg: 20, t: 'She is very {pat|ient} with her younger students.' },
  { k: 'FILL IN THE BLANKS · 3', seg: 20, t: 'Please {comp|lete} the form before the interview.' },
  { k: 'READ AND COMPLETE', seg: 180, t: 'More and more people now work from home. For many, this {me|ans} no traffic and more time {wi|th} the family. {How|ever}, working alone can {al|so} be difficult. Some people {mi|ss} their colleagues, and {oth|ers} find it hard to stop {wor|king} at the end of the {d|ay}. Experts suggest {hav|ing} a fixed schedule and a {sep|arate} space for work.' }] };

var DITADO = { fim: 'Part III done. Next: a conversation and a text.', itens: [
  { t: 'The library closes early on Fridays during the summer.', audio: 'm1d1.mp3', nota: '<b>closes early</b>: the -s links to the next word.' },
  { t: 'I should have called you before I left the office.', audio: 'm1d2.mp3', nota: '<b>should have</b> sounds like “should’ve”. British accent.' },
  { t: 'Most of the tickets were sold in the first hour.', audio: 'm1d3.mp3', nota: '<b>Most of the</b>: “of” is weak. Australian accent.' }] };

var MULTIPLA = { rot: 'LISTENING AND READING', fim: 'Part IV done. Last part: speaking and writing.', itens: [
  { audio: 'm1l1.mp3', ouve: 'Hi, welcome to Student Services. How can I help you?', q: 'At Student Services. Choose the best answer.', ops: ['I lost my student card and I need a new one.', 'Student Services is on the second floor.', 'Help is very important.'], c: 0, por: 'Answer the question: say why you came.' },
  { audio: 'm1l2.mp3', ouve: 'No problem. Do you have another photo ID with you?', q: 'Choose the best answer.', ops: ['Yes, I take a lot of photos.', 'Yes, I have my passport here.', 'I had an ID last year.'], c: 1, por: 'A photo ID: a passport.' },
  { audio: 'm1l3.mp3', ouve: 'Great. The new card will be ready tomorrow afternoon.', q: 'Choose the best answer.', ops: ['Tomorrow is Thursday.', 'The card is new.', 'Perfect, I’ll come back after my last class. Thanks!'], c: 2, por: 'Accept, say when, thank: a natural close.' },
  { txt: 'Community gardens are appearing on empty lots in many cities. Neighbors grow vegetables together, share tools and organize weekend workshops. As a result, people who lived on the same street for years without talking are now friends. In addition, children learn where their food comes from.', q: 'What is the main idea?', ops: ['Gardens are expensive to keep.', 'Community gardens bring neighbors together.', 'Children do not like vegetables.'], c: 1, por: 'Every sentence shows people connecting through the gardens.' },
  { txt: 'Community gardens are appearing on empty lots in many cities. Neighbors grow vegetables together, share tools and organize weekend workshops. As a result, people who lived on the same street for years without talking are now friends. In addition, children learn where their food comes from.', q: 'Choose the best title.', ops: ['Growing Food, Growing Friendships', 'How to Sell Vegetables', 'Empty Lots for Sale'], c: 0, por: 'It covers both ideas: food and friendship.' }] };

var PROVA = { rot: 'SPEAKING AND WRITING', tarefas: [
  { k: 'WRITE ABOUT THE PHOTO', tipo: 'escrita', seg: 60, img: 'foto-bicicletas', alt: 'Bicycles parked along a canal in a European city at dusk', enun: 'Write about the photo. You have 1 minute.',
    criterios: ['A rich sentence: place + details', 'Two adjectives', 'with / which / where', 'No grammar mistakes'],
    modelo: 'Several bicycles are parked along a quiet canal in a European city at dusk. The warm street lights reflect on the water, which makes the scene look calm and romantic.' },
  { k: 'READ, THEN SPEAK', tipo: 'fala', prep: 20, seg: 90, enun: 'Read the topic. Prepare for 20 seconds. Speak for 30 to 90 seconds.',
    texto: '<b>Talk about a tradition in your family or your country.</b><br>What is it? When does it happen? Why is it important to you?',
    criterios: ['Answered in the first sentence', 'Reason and example', 'Wrap-up', '60 seconds or more'],
    modelo: 'A tradition I love is Festa Junina, in June. People dress like farmers, eat corn cake and dance quadrilha. The main reason I love it is the food, but also the memories: when I was a child, my grandmother made the best corn cake in the neighborhood. That’s why every June I feel at home, wherever I am.' },
  { k: 'INTERACTIVE SPEAKING · 1', tipo: 'fala', seg: 35, audio: 'm1s1.mp3', ouve: 'Let’s talk about learning. What is the best way for you to learn new words?', enun: 'Listen to the question. Answer for about 35 seconds.',
    criterios: ['Answered the question', 'A detail and an example', 'Present simple for habits', '20 seconds or more'],
    modelo: 'For me, the best way is to read things I enjoy, like news about football. When I find a new word, I write it in an app and use it in a sentence the same day. For example, this week I learned “thrilling”.' },
  { k: 'INTERACTIVE SPEAKING · 2', tipo: 'fala', seg: 35, audio: 'm1s2.mp3', ouve: 'Have you ever learned something important from a mistake? What happened?', enun: 'Listen to the question. Answer for about 35 seconds.',
    criterios: ['Answered (Yes, I have / No, I haven’t)', 'Told what happened (past)', 'Said what you learned', '20 seconds or more'],
    modelo: 'Yes, I have. Once, I sent an important email to the wrong client. It was very embarrassing, and I had to call and apologize. What I learned is to read every email twice before I send it.' },
  { k: 'WRITING SAMPLE', tipo: 'escrita', prep: 30, seg: 300, enun: 'Plan for 30 seconds. Then write for 5 minutes.',
    texto: '<b>Some people think students should learn to cook at school. Do you agree? Why or why not?</b>',
    criterios: ['A clear position in the first sentence', 'Two reasons', 'An example', 'Formal register', 'A strong last sentence', '100 words or more'],
    modelo: 'I strongly agree that students should learn to cook at school. First, cooking is a basic life skill: many young people leave home without knowing how to prepare a simple, healthy meal. As a result, they spend too much money on fast food. Moreover, cooking teaches math, science and teamwork in a practical way. For instance, measuring ingredients and changing a recipe for more people is real math. Of course, schools have limited time, but one hour a week would be enough. For these reasons, I believe cooking classes would prepare students for real life.' }] };

var PODE = [
  'Reading went well: real words and gaps.',
  'Listening went well: I typed and answered in time.',
  'Speaking went well: I filled the time with a clear shape.',
  'Writing went well: rich sentences and a formal sample.'
];

/* MECÂNICAS VARIADAS */
/* DET 15 · simulado 1: palavras · lacunas · ditado · multipla · prova (os dados estão no topo do aula.js) */
