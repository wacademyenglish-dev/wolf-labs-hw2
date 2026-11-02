/* ============================================================
   REVIEW · C1 · UNIT 10 · THE CLOSING CEREMONY · THE C1 FINAL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: escada · tabuleiro · cartao · cadeira · pode.
   Unidade 10 (O discurso): retórica (tricolon, paralelismo, antítese), signposting, ganchos de abertura,
   a história em arco, responder perguntas, o essay e a fala final. É a última revisão do currículo:
   o tabuleiro passa pelas dez unidades do livro C1, e o aluno escreve o discurso de encerramento.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 10, titulo: ['The Closing', 'Ceremony'], tema: 'Closing Book C1', placa: 'THE C1 FINAL', lugarConversa: 'FIREWORKS ON THE ROOFTOP', cor: '#c6f36b', cor2: '#e2fab5',
  sub: 'The last review of Book C1, and of the whole course. Tonight is the closing ceremony. Walk through every unit one last time, then give the closing speech.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'escada', est: 'f', min: 8, img: 'conversa', rot: 'I · The Ladder', t: 'Climb from easy to hard.', p: 'One step at a time. A good answer, and you go up.' },
  { k: 'tabuleiro', est: 'o', min: 16, img: 'capa', rot: 'II · The Whole Book', t: 'Twelve squares. Ten units. One last walk.', p: 'Your teacher rolls the die. Each square brings back a unit of Book C1. Do it out loud.' },
  { k: 'cartao', est: 'w', min: 10, img: 'conversa', rot: 'III · The Closing Speech', t: 'Write the last speech of the night.', p: 'Five lines: a hook, a story, a tricolon, a contrast and a close.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'IV · Questions for Your Teacher', t: 'Now YOU ask me anything.', p: 'Ask your teacher about teaching, learning and what comes next.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Book C1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'THE HOOK', tema: 'openings', t: 'Open a speech about learning English in ten seconds.', ex: 'Raise your hand if you once thought English wasn’t for you.', trap: 'Hook first. No apology, no “my name is”.' },
  { k: 'SIGNPOSTS', tema: 'signposting', t: 'Guide the audience through three parts of a talk.', ex: 'First, I’ll tell you where I started. Moving on, what changed. Finally, what this means for you.', trap: 'Signposts tell the audience where they are.' },
  { k: 'TRICOLON', tema: 'rhetorical devices: tricolon, parallelism', t: 'Describe your learning in three parallel parts.', ex: 'I came to learn words. I stayed to learn people. I left with a new voice.', trap: 'Three parts, same structure: rhythm.' },
  { k: 'ANTITHESIS', tema: 'rhetorical devices: antithesis', t: 'Make a sentence with a strong contrast.', ex: 'It’s not about speaking perfectly; it’s about speaking bravely.', trap: 'Not X, but Y: two opposite ideas side by side.' },
  { k: 'THE STORY', tema: 'the story arc', t: 'Tell the turning point of your English in 30 seconds.', ex: 'It all started when I froze in a meeting. That’s when I decided to change. Looking back, it was the best day.', trap: 'It all started when… That’s when… Looking back…' },
  { k: 'THE CLOSE', tema: 'closing a talk', t: 'End a speech with a call to action.', ex: 'All I ask is this: tomorrow, say one thing in English you were afraid to say.', trap: 'All I ask is… / If you remember one thing…' }
];

var CARTAO = { ph: 'Raise your hand if you once thought English wasn’t for you.\nIt all started when I froze in a meeting; that’s when I decided to change.\nI came for grammar. I stayed for the people. I left with a voice.\nIt was never about being perfect; it was about being brave.\nAll I ask is this: keep talking. Thank you.', rot: 'My closing speech',
  chips: ['Raise your hand if ', 'Have you ever wondered why ', 'It all started when ', 'That’s when ', 'I came … I stayed … I left …', 'It’s not about …; it’s about …', 'Looking back, ', 'All I ask is ', 'Thank you.'],
  perg: ['THE CLOSING SPEECH', 'You are the last speaker of the course. Five lines: hook, story, tricolon, contrast, close.'],
  exemploRot: 'THE SHAPE OF THE SPEECH', exemplo: [['HOOK', 'raise your hand if…'], ['STORY', 'it all started when…'], ['TRICOLON', 'I came… I stayed… I left…'], ['ANTITHESIS', 'not perfect, but brave'], ['CLOSE', 'all I ask is…']],
  modelo: 'Raise your hand if you once thought English wasn’t for you. It all started when I froze in a meeting; that’s when I decided to change.<br>I came for grammar. I stayed for the people. I left with a voice.<br>It was never about being perfect; it was about being brave. All I ask is this: keep talking. Thank you.' };

var PODE = [
  'I can choose the precise word and the right modal with nuance.',
  'I can add emphasis and drama: clefts, fronting and inversion.',
  'I can argue, disagree, hedge and report with diplomacy and distance.',
  'I can switch register and write dense, formal sentences and essays.',
  'I can give a speech with a hook, a story, rhetoric and a close, and answer any question calmly.'
];

/* MECÂNICAS VARIADAS */
/* C1 R10: escada · tabuleiro · cartao · cadeira (a final do livro C1 e do currículo) */
var TABULEIRO = { rot: 'THE WHOLE BOOK · C1', centro: 'One last walk through Book C1.', casas: [
  { k: 'PRECISION', t: 'Describe tonight with three precise word pairs.', ex: 'The hall is strangely quiet, the coffee is strong, and I’m deeply grateful.' },
  { k: 'NUANCE', t: 'Something about your future: bound to, set to, due to.', ex: 'My English is bound to keep improving. I’m due to start a new job in March.' },
  { k: 'EMPHASIS', t: 'Who helped you most? Use It was … who…', ex: 'It was my teacher who made me speak from day one.' },
  { k: 'INVERSION', t: 'The day you knew your English had changed: use inversion.', ex: 'Never had I felt so confident as the day I gave that presentation.' },
  { k: 'DIPLOMACY', t: 'Your teacher says: “You should stop studying now.” Disagree diplomatically.', ex: 'I take your point, but I see it slightly differently: a language is never finished.' },
  { k: 'DENSE WRITING', t: 'Write your course in one formal sentence.', ex: 'Having completed sixty lessons, the student is now able to communicate with precision.' },
  { k: 'ARGUE', t: 'Persuade a friend to start English classes.', ex: 'Imagine travelling without fear. Granted, it takes time. Be that as it may, it’s worth it.' },
  { k: 'REPORT', t: 'Report what your teacher once said, with distance.', ex: 'Apparently, I was “the most stubborn student she ever had”. In other words: I never gave up.' },
  { k: 'REGISTER', t: 'Say “thank you” to your teacher twice: formal and friendly.', ex: 'Formal: I am deeply grateful for your guidance. Friendly: Thanks a million, you’re the best!' },
  { k: 'THE HOOK', t: 'Open your closing speech in ten seconds.', ex: 'Have you ever wondered what you would say if fear didn’t exist?' },
  { k: 'Q&A', t: 'Someone asks: “What was the hardest part?” Answer like a pro.', ex: 'That’s a great question. Let me think… Honestly, it was believing I could do it.' },
  { k: 'THE END', t: 'Close the course in two sentences.', ex: 'It was not about grammar; it was about courage. All I ask is this: keep going.' }] };
var CADEIRA = { itens: [
  { alvo: 'Ask me why I became a teacher.', dica: 'What made you become a teacher?', resp: 'It was a teacher who changed my life. I wanted to do the same.' },
  { alvo: 'Ask me about the hardest student I ever had.', dica: 'Who was your most challenging student?', resp: 'Let’s say… a very stubborn one. Not you, of course!' },
  { alvo: 'Ask me what you should do next with your English.', dica: 'What would you recommend I do next?', resp: 'Read every day, speak every week, and never stop being curious.' },
  { alvo: 'Ask me what I learned from teaching you.', dica: 'What did you learn from teaching me?', resp: 'That patience and humor work better than any book.' },
  { alvo: 'Ask me one last question: anything you want.', dica: '…?', resp: 'That’s a great question. Let me think about that for a second…' }] };
