/* ============================================================
   WOLF HIRED · JOB INTERVIEW ENGLISH · MODULE 3 · LESSON 7 OF 12 · SALARY TALK · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso WOLF HIRED, entrevista de emprego (B1+).
   Negociar salário: gratidão, perguntas de esclarecimento, o pedido (Based on…, I’m targeting…), condicionais (I’d be looking for…, If we could…).
   Vídeo Self Made Millennial (2:27–5:00). Áudios: recrutadores (edge-tts). Valores de exemplo.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 7, kick: 'WOLF HIRED · MODULE 3 · LESSON 7 OF 12', titulo: ['Salary', 'Talk'], tema: 'Talking about money with confidence and good manners', placa: 'LESSON 7',
  lugarConversa: 'THE OFFER CALL', cor: '#f2b45a', cor2: '#fbe0b4',
  sub: 'They made you an offer. Now what? Today you learn the order of a good salary conversation, the polite language of negotiation, and the one mistake that costs people thousands.',
  chips: ['Thank, ask, then make the ask', 'Strong or weak?', 'Three calls from recruiters'], botao: 'Start the lesson',
  nota: 'Your salary should show your value, not your expenses. Talk about the market and your experience, not your rent.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · The Example Conversation', t: 'An HR leader shows how to negotiate after an offer.', p: 'One question before, then the video, then the questions.' },
  { k: 'separa', est: 'f', min: 9, img: 'capa', rot: 'II · Strong or Weak?', t: 'Which lines help you, and which ones hurt you?', p: 'Read each line out loud. Strong or weak?' },
  { k: 'prova', est: 'o', min: 18, img: 'conversa', rot: 'III · Three Calls From Recruiters', t: 'Three recruiters, three money moments.', p: 'Play the recruiter, start the clock, answer in about 45 seconds.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'XaKAVwOroyo', titulo: 'Salary Negotiation Conversation Example', fonte: 'SELF MADE MILLENNIAL · 2:27–5:00', inicio: 147, fim: 300,
  antes: { q: 'You get an offer, but the salary is lower than you expected. What do you say first?', h: 'Start with thanks and interest. Never start with “I’m disappointed.”' },
  ouvir: 'Listen: What are the steps of the conversation?',
  perguntas: [
    { q: 'What is the first thing you say?', h: 'Gratitude: thank you for the offer, it was great to meet the team, I’m excited.' },
    { q: 'What is step two?', h: 'Ask clarifying questions about the offer: the level, the bonus, the stock options.' },
    { q: 'How does she suggest making the ask?', h: '“Based on…, I am targeting a salary of… Is it possible to make up the difference?” Then stop talking.' },
    { q: 'What does “negotiate against yourself” mean?', h: 'Asking and then immediately saying “but if not, that’s okay, I could take less”.' },
    { q: 'Why should you ask for more than your minimum?', h: 'Companies usually offer a number in between your request and their first offer.' }],
  fecho: 'Thank → clarify → “Based on…, I’m targeting…” → silence. And if they improve the offer, thank them again.' };

var SEPARA = { rot: 'STRONG OR WEAK?', a: 'STRONG', b: 'WEAK', fim: 'Gratitude, questions, a clear number based on value, then silence.', itens: [
  ['“Thank you so much for the offer. I’m really excited about the role.”', 'a', 'Gratitude first: they become more collaborative.'],
  ['“I’m disappointed with this offer.”', 'b', 'Negative emotion: a bad start.'],
  ['“Could you tell me how the performance bonus works?”', 'a', 'Clarify before you counter.'],
  ['“I need more because my rent went up.”', 'b', 'Expenses, not value.'],
  ['“Based on my experience and what I’m seeing in the market, I’m targeting 9,000 a month. Is it possible to make up the difference?”', 'a', 'A clear number, based on value.'],
  ['“Could you pay a bit more? But if not, it’s totally okay.”', 'b', 'Negotiating against yourself.'],
  ['“If we could get closer to 9,000, I’d be ready to sign this week.”', 'a', 'A conditional that moves things forward.'],
  ['“Whatever you think is fair.”', 'b', 'You give away all your power.']] };

var PROVA = { rot: 'THREE CALLS FROM RECRUITERS', tarefas: [
  { k: 'CALL 1 · THE EARLY QUESTION', tipo: 'fala', seg: 45, audio: 'sl1.mp3', ouve: 'Before we continue, what are your salary expectations for this role?', enun: 'Listen. It’s early in the process. Answer without giving away a low number.',
    chips: ['I’m still learning about the role,', 'so it’s hard to give an exact number.', 'Could you share the range you’ve budgeted?', 'Based on the market, I’d be looking for something between… and…'],
    criterios: ['Polite and calm', 'Asked for their range first', 'If giving a number, gave a range based on the market'],
    modelo: 'Good question. I’m still learning about the responsibilities, so it’s hard to give an exact number right now. Could you share the range you’ve budgeted for this role? Based on what I’m seeing in the market, I’d be looking for something between eight and ten thousand a month.' },
  { k: 'CALL 2 · THE OFFER', tipo: 'fala', seg: 45, audio: 'sl2.mp3', ouve: 'Great news! We’d like to offer you the position, with a salary of seven thousand five hundred a month.', enun: 'Listen. You were hoping for about 9,000. Thank, ask one question, then make the ask.',
    chips: ['Thank you so much!', 'Before I answer, could you tell me…?', 'Based on…, I’m targeting…', 'Is it possible to make up the difference?'],
    criterios: ['Started with gratitude', 'Asked one clarifying question', 'Made a clear ask based on value', 'Did not negotiate against yourself'],
    modelo: 'Thank you so much, I’m really happy to hear that, and I loved meeting the team. Before I answer, could you tell me how the annual bonus works? Based on my five years of experience and the market for this role, I’m targeting nine thousand a month. Is it possible to make up the difference?' },
  { k: 'CALL 3 · THE COUNTEROFFER', tipo: 'fala', seg: 45, audio: 'sl3.mp3', ouve: 'We talked to the director. We can go up to eight thousand two hundred, but that’s the top of our budget.', enun: 'Listen. Thank them, and try one more thing that isn’t salary.',
    chips: ['Thank you for your flexibility.', 'I really appreciate it.', 'If we could…, I’d be happy to…', 'Would it be possible to…?'],
    criterios: ['Thanked them for moving', 'Proposed something else (days off, remote days, review in 6 months)', 'Used a conditional', 'Ended positively'],
    modelo: 'Thank you for your flexibility, I really appreciate it. If we could add two remote days a week and a salary review in six months, I’d be happy to accept the offer this week. Would that be possible?' }] };

var PODE = [
  'I can start a salary conversation with gratitude.',
  'I can ask clarifying questions about an offer.',
  'I can make a clear ask: Based on…, I’m targeting…',
  'I can negotiate other things with If we could…, I’d…'
];

/* MECÂNICAS VARIADAS */
/* HIRED 07: video · separa · prova (áudio) (os dados estão no topo do aula.js) */
