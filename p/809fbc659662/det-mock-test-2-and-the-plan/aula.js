/* ============================================================
   DUOLINGO ENGLISH TEST PREP · LESSON 16 OF 16 · MOCK TEST 2 AND THE PLAN · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (cenas de prova). Curso preparatório, B1+.
   Simulado 2 (conteúdo novo e próprio) + o plano até o dia da prova. Fecha o curso: as regras oficiais
   (documento, câmera, sala) sempre conferidas no site oficial antes de marcar.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'DET', unidade: 16, kick: 'DUOLINGO ENGLISH TEST PREP · LESSON 16 OF 16', titulo: ['Mock Test 2', 'and the Plan'], tema: 'The last practice, then test day', placa: 'MOCK 2',
  lugarConversa: 'THE NIGHT BEFORE', cor: '#7fe0c8', cor2: '#c3f3e6',
  sub: 'The last full practice, with new questions. Then you write your plan for the days before the test. After today, you are ready to book.',
  chips: ['A new full test', 'Your test-day plan', 'The end of the course'], botao: 'Start the mock test',
  nota: 'Before you book, read the official rules on the test website: ID, camera, microphone and room. They can change.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'palavras', est: 'f', min: 3, img: 'conversa', rot: 'I · Read and Select', t: 'Real words only.', p: 'One round, one minute.' },
  { k: 'lacunas', est: 'w', min: 7, img: 'capa', rot: 'II · Fill in and Complete', t: 'Three sentences, then a paragraph.', p: 'Twenty seconds per sentence. Three minutes for the paragraph.' },
  { k: 'ditado', est: 'l', min: 5, img: 'conversa', rot: 'III · Listen and Type', t: 'Three sentences. Up to three plays each.', p: 'Type every word.' },
  { k: 'multipla', est: 'l', min: 7, img: 'capa', rot: 'IV · Listening and Reading', t: 'A phone call, then a short text.', p: 'Listen once to each line. Then read and choose.' },
  { k: 'prova', est: 'o', min: 22, img: 'conversa', rot: 'V · Speaking and Writing', t: 'Six tasks with the real clock.', p: 'Two photos, a paragraph, two questions and the speaking sample.' },
  { k: 'cartao', est: 'w', min: 6, img: 'capa', rot: 'VI · Your Test-Day Plan', t: 'Write your plan.', p: 'Five lines: the week before, the day before, the room, the day, during the test.' },
  { k: 'pode', est: 'f', min: 4, img: 'conversa', rot: 'VII · Ready', t: 'The course is done. Are you ready?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PALAVRAS = { seg: 60, fim: 'Part I done.', rodadas: [
  [['achieve', 1], ['knowledgeful', 0], ['honesty', 1], ['frequently', 1], ['unbelievement', 0], ['guarantee', 1], ['wealthness', 0], ['obvious', 1], ['rehappen', 0], ['purchase', 1], ['solution', 1], ['misbehavement', 0], ['crowded', 1], ['brightity', 0], ['delicious', 1]]] };

var LACUNAS = { rot: 'READING', item: 'TASK', fim: 'Part II done.', textos: [
  { k: 'FILL IN THE BLANKS · 1', seg: 20, t: 'The meeting was {post|poned} until next Tuesday.' },
  { k: 'FILL IN THE BLANKS · 2', seg: 20, t: 'I can’t {aff|ord} a new laptop right now.' },
  { k: 'FILL IN THE BLANKS · 3', seg: 20, t: 'Our train {arr|ived} twenty minutes late.' },
  { k: 'READ AND COMPLETE', seg: 180, t: 'Volunteering is a great way to help others and learn new skills. Many people {vol|unteer} at animal shelters, schools {o|r} hospitals. {Bes|ides} helping the community, volunteers often {ga|in} confidence and make new {fri|ends}. Some companies {ev|en} give employees a paid day {o|ff} to volunteer. {Becau|se} of this, more young people {inc|lude} volunteer work on {th|eir} CVs.' }] };

var DITADO = { fim: 'Part III done.', itens: [
  { t: 'Could you tell me where the nearest pharmacy is?', audio: 'm2d1.mp3', nota: '<b>where the nearest pharmacy is</b>: in an indirect question, the verb goes to the end. Indian accent.' },
  { t: 'We have been waiting for the bus for almost an hour.', audio: 'm2d2.mp3', nota: '<b>have been waiting</b>: listen for “been”. Irish accent.' },
  { t: 'Her presentation was clear, short and very convincing.', audio: 'm2d3.mp3', nota: '<b>clear, short and</b>: a list of three; punctuation does not count, words do.' }] };

var MULTIPLA = { rot: 'LISTENING AND READING', fim: 'Part IV done. Last part: speaking and writing.', itens: [
  { audio: 'm2l1.mp3', ouve: 'Hello, Housing Office. Are you calling about the room on Park Street?', q: 'A phone call. Choose the best answer.', ops: ['Yes, I am. Is it still available?', 'Park Street is very long.', 'I am calling you now.'], c: 0, por: 'Confirm and ask the key question.' },
  { audio: 'm2l2.mp3', ouve: 'It is. The rent includes water and internet, but not electricity.', q: 'Choose the best answer.', ops: ['Electricity is important for life.', 'I see. And how much is the electricity, more or less?', 'Water is free in my country.'], c: 1, por: 'React (I see) and ask about the missing cost.' },
  { audio: 'm2l3.mp3', ouve: 'Around thirty dollars a month. Would you like to see the room?', q: 'Choose the best answer.', ops: ['I like rooms.', 'Thirty is a good number.', 'Yes, please. Could I visit on Saturday morning?'], c: 2, por: 'Accept and suggest a time.' },
  { txt: 'Many people believe that multitasking saves time. However, research suggests the opposite. When we switch between tasks, our brain needs a few seconds to refocus each time. As a result, we make more mistakes and finish later. In other words, doing one thing at a time is often faster.', q: 'What does the research suggest?', ops: ['Multitasking saves time.', 'Switching tasks makes us slower and less accurate.', 'The brain never needs to refocus.'], c: 1, por: 'More mistakes, finish later: slower and less accurate.' },
  { txt: 'Many people believe that multitasking saves time. However, research suggests the opposite. When we switch between tasks, our brain needs a few seconds to refocus each time. As a result, we make more mistakes and finish later. In other words, doing one thing at a time is often faster.', q: 'Choose the best title.', ops: ['The Myth of Multitasking', 'How to Use Two Phones', 'Our Brain Never Rests'], c: 0, por: 'The text says a popular belief is wrong: a myth.' }] };

var PROVA = { rot: 'SPEAKING AND WRITING', tarefas: [
  { k: 'SPEAK ABOUT THE PHOTO', tipo: 'fala', prep: 20, seg: 90, img: 'foto-praia', alt: 'A beach at sunset with two empty deck chairs, an umbrella and a surfboard', enun: 'Speak about the photo for 30 to 90 seconds.',
    criterios: ['Big picture first', 'Two place words', 'Three details', 'A guess with a reason'],
    modelo: 'This photo shows a beach at sunset. In the foreground, there are two empty deck chairs under a white umbrella, and between them there is a surfboard on the sand. In the background, the sun is going down over the sea, and the sky is orange. It might be the end of a summer day, because everything looks warm and calm, and the people have probably gone home.' },
  { k: 'WRITE ABOUT THE PHOTO', tipo: 'escrita', seg: 60, img: 'foto-chuva', alt: 'A quiet street at night in the rain with an umbrella and a bench', enun: 'Write about the photo. You have 1 minute.',
    criterios: ['A rich sentence: place + details', 'Two adjectives', 'with / which / where', 'No grammar mistakes'],
    modelo: 'This is a quiet residential street on a rainy night, where the wet cobblestones reflect the warm street lights. Next to a wooden bench, there is a black umbrella, which someone probably forgot.' },
  { k: 'INTERACTIVE WRITING', tipo: 'escrita', seg: 300, enun: 'Write about the topic for 5 minutes.',
    texto: '<b>Describe a place where you like to study or work. What makes it a good place?</b>',
    criterios: ['Topic sentence', 'Two reasons', 'Varied connectors', 'An example', 'A wrap-up', '80 words or more'],
    modelo: 'The place where I study best is a small cafe near my apartment. First, it is quiet in the morning, because most customers only buy coffee and leave. Moreover, the tables are big enough for my laptop and my books. For instance, last week I spent three hours there preparing for an exam, and nobody bothered me. On the other hand, it gets noisy after lunch, so I try to arrive early. Overall, it is the perfect mix of calm and energy for me.' },
  { k: 'INTERACTIVE SPEAKING · 1', tipo: 'fala', seg: 35, audio: 'm2s1.mp3', ouve: 'Let’s talk about travel. What was the last trip you took?', enun: 'Listen to the question. Answer for about 35 seconds.',
    criterios: ['Answered the question', 'Past tense', 'A detail and an example', '20 seconds or more'],
    modelo: 'The last trip I took was to Florianópolis, in July. I went with two friends from work, and we stayed in a small house near the beach. It was cold, but we walked a lot and ate amazing seafood.' },
  { k: 'INTERACTIVE SPEAKING · 2', tipo: 'fala', seg: 35, audio: 'm2s2.mp3', ouve: 'If you could visit any country next year, which one would you choose, and why?', enun: 'Listen to the question. Answer for about 35 seconds.',
    criterios: ['Answered the question', 'Used would', 'A reason and an example', '20 seconds or more'],
    modelo: 'I would choose Japan. The main reason is the culture: I have watched Japanese films since I was a teenager. I would love to visit Kyoto in autumn and see the old temples.' },
  { k: 'SPEAKING SAMPLE', tipo: 'fala', prep: 30, seg: 180, enun: 'Prepare for 30 seconds. Speak for 1 to 3 minutes.',
    texto: '<b>Talk about a person who has inspired you.</b> Who is this person? What did they do? How did they change you?',
    criterios: ['Looked at the camera', 'A clear story (situation → what they did → result)', 'Past tenses', 'Ended with what you learned', 'More than one minute'],
    modelo: 'A person who has inspired me is my first English teacher, Mrs. Lopes. When I was twelve, I was very shy and I never spoke in class. She noticed it, and instead of forcing me, she asked me to help her prepare the activities. Little by little, I started to speak, first with her and then with the class. As a result, English became my favorite subject. What I learned from her is that patience can change a person. That’s why, today, I try to be patient with other people too.' }] };

var CARTAO = { ph: 'The week before: …\nThe day before: …\nThe room: …\nOn the day: …\nDuring the test: …', rot: 'My test-day plan',
  chips: ['one mock a day', 'check my ID', 'test the camera and microphone', 'a quiet room, alone', 'phone away', 'water', 'use all the time', 'never stop speaking early'],
  perg: ['YOUR PLAN', 'Five lines. Then read the official rules before you book.'],
  exemploRot: 'THE PLAN, STEP BY STEP', exemplo: [['THE WEEK BEFORE', 'one practice a day, the weak part first'], ['THE DAY BEFORE', 'ID, camera, microphone, internet'], ['THE ROOM', 'quiet, light, door closed, alone'], ['ON THE DAY', 'water, ID, phone away'], ['DURING', 'use all the time; keep talking until the clock stops']],
  modelo: 'The week before: one practice a day, starting with Listen and Type.<br>The day before: check my ID, camera, microphone and internet.<br>The room: my bedroom, door closed, good light.<br>On the day: water, ID, phone in the other room.<br>During the test: use all the time and keep talking until the clock stops.' };

var PODE = [
  'I know every question type of the test and a strategy for each one.',
  'I can work with the real clock without panic.',
  'I can speak and write with a clear shape: answer, reason, example, wrap-up.',
  'I have a plan for the days before the test, and I am ready to book.'
];

/* MECÂNICAS VARIADAS */
/* DET 16 · simulado 2 + o plano: palavras · lacunas · ditado · multipla · prova · cartao (os dados estão no topo do aula.js) */
