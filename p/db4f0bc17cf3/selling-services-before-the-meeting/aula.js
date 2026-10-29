/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 16 · BEFORE THE MEETING STARTS · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ cliente.js do curso). A1.
   Alvo: small talk: like / love / don’t like + -ing; How was your weekend? It was… / Did you…? Yes, I did. (curto)
   Armadilhas: “I like play tennis” (sem -ing), “Was great.” (sem it), “Did you went?”, “What you did?”.
   Situação: os 2 minutos com a diretora antes da reunião. Abre com o cliente (Arena IA-10 Small Talk Lift).
   EASY READER · CHAPTER 1 de “Leo’s First Big Client” (Orla Beverages, Hugo Duarte, CEO).
   Produto: 5 frases de quebra-gelo. Empresas FICTÍCIAS (Bluepeak Services, Pine Hill Foods, Orla Beverages).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 16, kick: 'SELLING SERVICES · LESSON 16', titulo: ['Before the Meeting', 'Starts'], tema: 'small talk: like + -ing · How was your weekend?', placa: 'LESSON 16',
  lugarConversa: 'TWO MINUTES BEFORE', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'The meeting starts in two minutes. The director is here, and the room is quiet. Today you learn the small talk that makes the first two minutes easy.',
  chips: ['The small talk lift', 'Easy Reader: chapter 1', 'Your 5 icebreakers'], botao: 'Start the lesson',
  nota: 'Small talk: I love / like / don’t like + -ing. How was your weekend? It was great!' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'cliente', est: 'o', min: 9, img: 'conversa', rot: 'I · The Small Talk Lift', t: 'You are early. The director is early, too. Two minutes of small talk.', p: 'Ask about her life. After each answer, say “And you?”.' },
  { k: 'leitura', est: 'l', min: 8, img: 'mesa', rot: 'II · Easy Reader: The Elevator', t: 'Leo’s First Big Client · Chapter 1.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'multipla', est: 'l', min: 7, img: 'conversa', rot: 'III · Hear It, Answer It', t: 'Six small talk questions. Hear each one.', p: 'Listen. Choose the best answer. Then say it out loud.' },
  { k: 'descobre', est: 'f', min: 10, img: 'capa', rot: 'IV · Like Playing, Not “Like Play”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · Your Turn to Ask', t: 'Your teacher is a client. The meeting starts in two minutes.', p: 'You ask the small talk questions. Listen, react, and say “And you?”.' },
  { k: 'escolha', est: 'o', min: 5, img: 'mesa', rot: 'VI · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'cartao', est: 'w', min: 8, img: 'capa', rot: 'VII · Your 5 Icebreakers', t: 'Five small talk lines for your next meeting.', p: 'Write them. Then use them with your teacher, one by one.' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'VIII · I Can', t: 'Lesson 16: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CLIENTE = { rot: 'SMALL TALK LIFT', codigo: 'IA-10',
  persona: { nome: 'Janet Moore', cargo: 'finance director', empresa: 'Pine Hill Foods (fictional)', humor: 'Friendly and a little tired. Happy to chat for two minutes before the meeting.', ini: 'JM' },
  missao: 'Find out 4 personal things about Janet. After each answer, say “And you?” or answer about you.',
  abre: 'Good morning! You’re early. How are you?',
  fatos: [
    { k: 'WEEKEND', q: 'How was your weekend?', r: 'It was great. I went to the beach.' },
    { k: 'FREE TIME', q: 'What do you like doing on weekends?', r: 'I love cooking for my family.' },
    { k: 'SPORT', q: 'Do you like playing sports?', r: 'Yes. I like playing tennis.' },
    { k: 'COFFEE', q: 'Do you like coffee?', r: 'I love it! Three coffees a day.' }],
  chips: ['How was your weekend?', 'What do you like doing on weekends?', 'Do you like …ing?', 'Really? Me too!', 'And you?'],
  modelo: 'How was your weekend?<br>What do you like doing on weekends?<br>Do you like playing sports?<br>Do you like coffee?<br>Really? I love cooking too! And you?',
  fim: 'Four things in two minutes. Now the meeting starts, and Janet likes you.' };

var LEITURA = { rot: 'EASY READER · CHAPTER 1 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Leo has his first meeting with a very big client. What can go wrong in the first five minutes?', h: 'He is late. He says the wrong thing. He talks to the wrong person…' },
  texto: 'THE ELEVATOR\nIt’s Monday, 8:50 a.m. Leo is at Orla Beverages for his first big meeting. He is early.\nIn the elevator, there is a man with a big coffee. He smiles.\n“Good morning. {How was your weekend}?”\n“{It was great}, thanks. I played tennis on Saturday.”\n“Oh, {do you like playing} tennis?”\n“{I love watching} it, but I’m bad at it!” says Leo. “And you? {Did you} have a good weekend?”\n“{Yes, I did}. I was at my farm. {I love cooking} there.”\nThe man drinks his coffee. “And {do you like} Mondays?”\nLeo laughs. “No! {I don’t like} Mondays. And {I hate sitting} in long meetings.”\nThe man laughs too. The elevator stops on the 10th floor.\nLeo goes into the meeting room. Six people are at the table. The man with the coffee sits at the top of the table.\n“Good morning, everyone. I’m Hugo Duarte, the CEO. Let’s start our long meeting.”\nLeo’s face is red.',
  perguntas: [
    { q: 'Where is Leo? What day is it?', h: 'At Orla Beverages. It’s Monday.' },
    { q: 'What did Leo do on Saturday?', h: 'He played tennis.' },
    { q: 'What does the man love doing at his farm?', h: 'He loves cooking.' },
    { q: 'What does Leo say about long meetings? Why is it a problem?', h: 'He hates sitting in long meetings. The man is the CEO!' },
    { q: 'What do you think Leo says now?', h: 'Free answer: “Sorry!”, “Nice to meet you, Mr. Duarte!”…' }],
  olha: 'Look at the highlighted words. What comes after love, like and don’t like? And how do you answer “How was…?” and “Did you…?”' };

var MULTIPLA = { rot: 'BEFORE THE MEETING · HEAR IT, ANSWER IT', fim: 'Short answer + one detail + “And you?”. That is small talk.', itens: [
  { audio: 'st1.mp3', ouve: 'How was your weekend?', q: 'Choose the best answer.', ops: ['It was great, thanks. And yours?', 'Was great.', 'I am great weekend.'], c: 0, por: 'How was…? → It was … And yours?' },
  { audio: 'st2.mp3', ouve: 'Do you like playing soccer?', q: 'Choose the best answer.', ops: ['Yes, I like play.', 'Yes, I do. I play on Sundays.', 'Yes, I am.'], c: 1, por: 'Do you like…? → Yes, I do / No, I don’t.' },
  { audio: 'st3.mp3', ouve: 'Did you watch the game last night?', q: 'Choose the best answer.', ops: ['No, I didn’t. Who won?', 'No, I don’t watched.', 'No, I wasn’t.'], c: 0, por: 'Did you…? → Yes, I did / No, I didn’t.' },
  { audio: 'st4.mp3', ouve: 'What do you like doing after work?', q: 'Choose the best answer.', ops: ['I like run in the park.', 'I like to the park.', 'I like running in the park.'], c: 2, por: 'like + -ing: I like running.' },
  { audio: 'st5.mp3', ouve: 'Is this your first time in our office?', q: 'Choose the best answer.', ops: ['Yes, it is. It’s a beautiful office!', 'Yes, I do.', 'Yes, was.'], c: 0, por: 'Is this…? → Yes, it is. + a nice detail.' },
  { audio: 'st6.mp3', ouve: 'I love traveling. And you?', q: 'Choose the best answer.', ops: ['Me too! I love go to beach.', 'Me too! I love going to the beach.', 'Yes, I do travel.'], c: 1, por: 'love + -ing: I love going.' }] };

var DESCOBRE = {
  pares: [
    { a: 'I {like playing} tennis.', b: 'I {like play} tennis.', q: 'Which one is English?', r: 'After like, love and don’t like: <b>verb + -ing</b>. I like playing.' },
    { a: 'How was your weekend? {It was} great!', b: 'How was your weekend? {Was} great!', q: 'Which answer is right?', r: 'English needs a subject: <b>It was</b> great.' },
    { a: '{Did you go} to the beach?', b: '{Did you went} to the beach?', q: 'Which question is right?', r: 'After <b>did</b>, the verb is simple: Did you go? (not went).' },
    { a: '{What did you do} on Saturday?', b: '{What you did} on Saturday?', q: 'Which question is right?', r: 'Past question: <b>What did you + verb</b>?' }],
  regra: [['LIKE + -ING', 'I like / love / don’t like + playing, cooking, running'], ['HOW WAS…?', 'How was your weekend? → It was great / OK / busy.'], ['DID YOU…?', 'Did you go…? → Yes, I did. / No, I didn’t.'], ['AND YOU?', 'Answer + one detail + And you?']],
  armas: [['-ING', 'I like play golf.', 'I like playing golf.', 'like + -ing'], ['IT', 'Was very good.', 'It was very good.', 'subject'], ['DID', 'Did you went?', 'Did you go?', 'did + go'], ['WHAT', 'What you did?', 'What did you do?', 'What did you…?']] };

var CADEIRA = { itens: [
  { alvo: 'Say hello. Ask about the weekend.', dica: 'Good morning! How was your weekend?', resp: 'It was busy. My son had a birthday party.' },
  { alvo: 'React. Ask one more question about it.', dica: 'Really? Did you have a big party?', resp: 'Yes, we did! Twenty kids in the house.' },
  { alvo: 'Ask about free time.', dica: 'What do you like doing on weekends?', resp: 'I like riding my bike. And you?' },
  { alvo: 'Answer with like + -ing. Then ask about sports or music.', dica: 'I like … Do you like watching …?', resp: 'Yes, I love watching basketball.' },
  { alvo: 'Ask about the city or the traffic.', dica: 'How was the traffic this morning?', resp: 'It was terrible! One hour in the car.' },
  { alvo: 'Close the small talk. Start the meeting.', dica: 'OK, shall we start? Thank you for your time today.', resp: 'Sure. Let’s start.' }] };

var ESCOLHA = [
  { a: 'Small talk about sports', b: 'Small talk about travel', chips: ['I prefer … because …', 'I love / I don’t like talking about …'], ex: 'I prefer travel because I don’t like talking about soccer. Everybody has a team!' },
  { a: 'Small talk for 2 minutes', b: 'Start the meeting now', chips: ['I prefer … because …', 'Clients like …ing'], ex: 'I prefer two minutes of small talk because clients like talking about their weekend.' },
  { a: 'Coffee before the meeting', b: 'Lunch after the meeting', chips: ['I prefer … because …', 'It’s more relaxed / faster …'], ex: 'I prefer lunch after the meeting because it’s more relaxed.' }];
var ESCOLHA_FIM = 'Small talk is not small. It’s the first step of every deal.';

var CARTAO = { ph: 'How was your …?\nDo you like …ing …?\nWhat do you like doing …?\nI love …ing. And you?\nOK, shall we start?', rot: 'My 5 icebreakers',
  chips: ['Good morning! How was your weekend?', 'It was great, thanks.', 'Did you …?', 'Do you like …ing …?', 'What do you like doing after work?', 'I love …ing.', 'I don’t like …ing.', 'Really? Me too!', 'And you?', 'OK, shall we start?'],
  perg: ['YOUR 5 ICEBREAKERS', 'Five lines for the first two minutes with a real client: two questions, one answer about you, one reaction, one line to start the meeting.'],
  exemploRot: 'SMALL TALK NOTES · PINE HILL FOODS', exemplo: [['CLIENT', 'Janet Moore, finance director'], ['WEEKEND', 'the beach'], ['LOVES', 'cooking for her family'], ['SPORT', 'tennis'], ['NEXT TIME', 'ask about her tennis']],
  modelo: 'Good morning, Janet! How was your weekend?<br>Do you like playing tennis on weekends?<br>I love cooking too! I make pizza on Sundays. And you?<br>Really? Me too!<br>OK, shall we start? Thank you for your time today.' };

var PODE = [
  'I can start small talk before a meeting: How was your weekend?',
  'I can say what I like and love doing: I love cooking.',
  'I can answer “Did you…?” with Yes, I did / No, I didn’t.',
  'I can react, say “And you?”, and start the meeting.'
];
