/* ============================================================
   THE FINAL TALK · C1 · UNIT 10 (THE TALK) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula'): o projeto final do curso.
   O aluno monta e apresenta uma fala de cinco minutos com as ferramentas do livro C1:
   o gancho, a história em arco, a nuance (hedging, modais), o contraste, a reformulação e o fecho;
   depois responde às perguntas (Q&A) e marca o que consegue fazer (I can).
   Sequência: dado (aquecimento com as seis ferramentas) → leitura (uma fala-modelo de 5 minutos,
   anotada) → cartao (o roteiro da fala do aluno) → conversa (o professor faz o Q&A da fala) → pode.
   O mundo: a noite de formatura do curso: o aluno é o último orador.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 10, titulo: ['The Final', 'Talk'], tema: 'Five minutes. Everything you know.',
  sub: 'Graduation night. You are the last speaker. Five minutes, one topic you care about, and every tool from this book: the hook, the story, the nuance, the contrast, the close. This is your talk.',
  placa: 'GRADUATION NIGHT · LAST SPEAKER', lugarConversa: 'DAWN ON THE ROOFTOP', cor: '#c6f36b', cor2: '#e2fab5',
  chips: ['hook', 'story', 'close'], botao: 'Start the final lesson', nota: 'Not perfect. Precise, human and yours.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'II · A Model Talk', t: 'Five minutes, from hook to close.', p: 'Read the model talk out loud. Find every tool you learned. Then plan yours.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'III · Right, Not This', t: 'Six pairs from the graduation night. One is right.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'cartao', est: 'w', min: 12, img: 'conversa', rot: 'IV · Your Talk Plan', t: 'Write the skeleton of your five minutes.', p: 'Hook, story, main point with nuance, the other side, and a close. Then give your talk!' },
  { k: 'conversa', est: 'o', min: 10, img: 'conversa', rot: 'V · Questions from the Floor', t: 'Your talk is over. Now the questions.', p: 'Your teacher asks about YOUR talk. Use the Q&A tools: buy time, check, admit, park, close.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Book C1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'THE HOOK', tema: 'openings', t: 'Open a talk about your city in ten seconds.', ex: 'Have you ever wondered why everyone who visits my city wants to come back?', trap: 'No “my name is” first, no apology.' },
  { k: 'THE STORY', tema: 'the story arc', t: 'Tell a 30-second story with a turning point.', ex: 'It all started when I missed my flight. That’s when I met the person who gave me my first job.', trap: 'Signposts: It all started when…, That’s when…, Looking back…' },
  { k: 'THE NUANCE', tema: 'hedging and modals', t: 'Make a careful claim about the future of your job.', ex: 'It could be argued that AI is bound to change my job, but it’s unlikely to replace it.', trap: 'bound to / likely to / it could be argued…' },
  { k: 'THE CONTRAST', tema: 'contrast and concession', t: 'Give both sides of working from home.', ex: 'On the one hand, it saves time. On the other hand, it can feel lonely. Granted, it’s not for everyone.', trap: 'on the other hand (both true) × on the contrary (no).' },
  { k: 'THE REPHRASE', tema: 'rephrasing', t: 'Explain your job in one technical sentence, then simply.', ex: 'I manage cross-functional deliverables. In other words, I make sure people finish things on time.', trap: 'In other words / What I mean is…' },
  { k: 'THE CLOSE', tema: 'closing a talk', t: 'Close a talk in two powerful sentences.', ex: 'All I ask is this: try it for one week. If it doesn’t change your life, at least it will change your Monday.', trap: 'Clefts and a call to action: All I ask is…' }
];

var LEITURA = { rot: 'GRADUATION NIGHT · THE LAST SPEAKER · 5 MINUTES', tipo: 'fala',
  antes: { q: 'If you had five minutes on a stage tonight, what topic would you choose? Why?', h: 'Something I really care about: my work, my city, a lesson from my life.' },
  texto: 'SPEAKER: {Raise your hand if} you once thought you would never speak English in public. [THE HOOK]\nSPEAKER: {It all started when} I froze in a meeting in 2022. Thirty people, one question, and silence. {That’s when} I decided to change. [THE STORY]\nSPEAKER: {It could be argued that} fluency is about grammar. {However}, {the way I see it}, it’s about courage. [THE NUANCE]\nSPEAKER: {Granted}, grammar matters. {On the other hand}, nobody remembers your perfect conditional. They remember what you made them feel. [THE CONTRAST]\nSPEAKER: {In other words}: don’t wait to be perfect. Speak, and fix it as you go. [THE REPHRASE]\nSPEAKER: {Never before had I} spoken to a room like this. {All I ask is} this: tonight, say one thing in English you were afraid to say. Thank you. [THE CLOSE]',
  perguntas: [
    { q: 'How does the speaker open the talk?', h: 'With a question that makes the audience raise their hands.' },
    { q: 'What’s the turning point of her story?', h: 'Freezing in a meeting in 2022, in front of thirty people.' },
    { q: 'What’s her main idea, and how does she make it careful?', h: 'Fluency is about courage, not just grammar; she hedges with “it could be argued” and “the way I see it”.' },
    { q: 'What does she ask the audience to do at the end?', h: 'To say one thing in English tonight that they were afraid to say.' }],
  olha: 'Find one tool from each unit of the book in this talk. How many can you find?' };

var CARTAO = { ph: 'Hook: Have you ever wondered why we stop playing when we grow up?\nStory: It all started when my son asked me to play football, and I said “I’m too busy”.\nMain point: It could be argued that adults need rest, not play. The way I see it, play IS rest.\nOther side: Granted, we have bills to pay. On the other hand, …\nClose: All I ask is this: play something this week.', rot: 'My five-minute talk',
  chips: ['Have you ever wondered why ', 'Raise your hand if ', 'It all started when ', 'That’s when ', 'It could be argued that ', 'The way I see it, ', 'Granted, ', 'On the other hand, ', 'In other words, ', 'All I ask is ', 'Thank you.'],
  perg: ['YOUR TALK', 'Choose a topic you care about. Write one line for each part, then give the talk out loud: five minutes!'],
  exemploRot: 'THE SIX TOOLS', exemplo: [['HOOK', 'a question / a picture / a fact'], ['STORY', 'it all started when… that’s when…'], ['NUANCE', 'it could be argued… / bound to'], ['CONTRAST', 'granted… on the other hand…'], ['CLOSE', 'all I ask is…']],
  modelo: 'Have you ever wondered why we stop playing when we grow up? It all started when my son asked me to play football, and I said “I’m too busy”.<br>It could be argued that adults need rest, not play. The way I see it, play IS rest.<br>Granted, we have bills to pay. On the other hand, a ten-minute game costs nothing. All I ask is this: play something this week.' };

var CONVERSA = [
  { q: 'Thank you for your talk. Could you tell us a bit more about how it all started?', f: 'How it started?', voce: ['That’s a great question.', 'It all started when …', 'Looking back, …'], ex: 'Thanks for asking. It all started when… Looking back, it was the best mistake of my life.' },
  { q: 'Do you have any numbers or evidence for your main point?', f: 'Any evidence?', voce: ['I don’t have the exact figures with me, but …', 'According to …'], ex: 'I don’t have the exact figures with me, but according to a study I read, …' },
  { q: 'Isn’t your idea a bit unrealistic for most people?', f: 'Unrealistic?', voce: ['I can see why you’d think that. However, …', 'Granted, …'], ex: 'I can see why you’d think that. However, I’m only asking for ten minutes a week.' },
  { q: 'What would you say to someone who completely disagrees with you?', f: 'Someone who disagrees?', voce: ['I take your point, but …', 'I see it slightly differently.'], ex: 'I’d say: I take your point, but try it for one week before you decide.' },
  { q: 'Last question: what’s the one thing you want us to remember?', f: 'One thing to remember?', voce: ['All I want you to remember is …', 'The only thing …'], ex: 'All I want you to remember is this: start before you feel ready.' }
];

var PODE = [
  'I can choose the precise word: heavy rain, raise a concern, bound to happen.',
  'I can use emphasis and inversion: All I want is…, Not until…, Little did they know…',
  'I can disagree, hedge and report with distance: I take your point, but…; reportedly; it has been suggested that…',
  'I can switch register: formal or friendly, spoken or written, and read the small print.',
  'I can give a five-minute talk with a hook, a story and a close, and handle the questions.'
];

/* MECÂNICAS VARIADAS */
/* C1 · The Final Talk: dado · leitura · cartao · conversa · pode (dado usa as PORTAS: as seis ferramentas) */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de cartao.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the better line for a talk.', pares: [{ c: 'Have you ever wondered why we dream?', x: 'Hello, my name is Ana and today I will talk about dreams.', d: 'Start with a hook for the audience, not with your name.' }, { c: 'It all started when I missed my flight.', x: 'In the story, the beginning is that I missed my flight.', d: 'Use a signpost: It all started when.' }, { c: 'It might be a good idea to start earlier.', x: 'You must start earlier, no discussion.', d: 'In a talk, soften with a modal: might, could, seems.' }, { c: 'On the one hand, it is cheap. On the other hand, it is slow.', x: 'It is cheap. On the contrary, it is slow.', d: 'Two sides of one coin: on the other hand.' }, { c: 'In other words, we spend less.', x: 'Or be, we spend less.', d: 'To rephrase: in other words, what I mean is.' }, { c: 'Thank you. Does that answer your question?', x: 'I don’t know. Next question.', d: 'Be calm in the Q&A: check, then close.' }], nota: 'Your five minutes need <b>tools</b>: a <b>hook</b> (Have you ever wondered …?), a <b>story</b> with signposts (It all started when), <b>nuance</b> (it might be), <b>contrast</b> (on the other hand), <b>rephrase</b> (in other words) and a <b>calm Q&A</b> (Does that answer your question?).', uso: { p: 'Your turn. You are the last speaker of the night. Say your first ten seconds: a hook and a promise.', molde: ['Have you ever wondered …?', 'By the end of this talk, you’ll …'], ex: 'Have you ever wondered why the last day of a course feels so strange? By the end of this talk, you’ll know why it is also the best.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
