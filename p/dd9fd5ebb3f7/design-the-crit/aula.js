/* ============================================================
   ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 7 OF 12 · THE CRIT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Inglês para Designers (B1+).
   Dar feedback: o que, por quê, como (What’s working is…, I wonder if…, It might…, You could try…).
   Vídeo Nielsen Norman Group (0:28–3:15). Trabalhos FICTÍCIOS.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1+', unidade: 7, kick: 'ENGLISH FOR DESIGNERS · MODULE 3 · LESSON 7 OF 12', titulo: ['The', 'Crit'], tema: 'Giving useful, kind and honest design feedback', placa: 'LESSON 7',
  lugarConversa: 'THE CRIT ROOM', cor: '#e9a8ff', cor2: '#f6dcff',
  sub: '“I just don’t like it” helps nobody. Today you learn to give feedback like a senior designer: what, why and how, with a balance of positive and negative.',
  chips: ['What, why, how', 'Fix the feedback', 'Your turn in the crit'], botao: 'Start the lesson',
  nota: 'Soft language is not weak language: “I wonder if…” and “It might…” invite the designer to think instead of defending.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 8, img: 'conversa', rot: 'I · Three Tips for a Crit', t: 'How to give feedback that helps.', p: 'One question before, then the video, then the questions.' },
  { k: 'erros', est: 'f', min: 10, img: 'capa', rot: 'II · Fix the Feedback', t: 'A colleague gave bad feedback. Make it useful.', p: 'Find the five problems. Say a better version, then tap.' },
  { k: 'cadeira', est: 'o', min: 16, img: 'conversa', rot: 'III · Your Turn in the Crit', t: 'Your teacher shows work. You give feedback.', p: 'Follow the steps. Your teacher answers as the designer.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'CBm9gdwshf8', titulo: 'UX Design Critiques: 3 Tips for Effective Feedback', fonte: 'NIELSEN NORMAN GROUP · 0:28–3:15', inicio: 28, fim: 195,
  antes: { q: 'What is the worst feedback you have ever received about your work?', h: 'Usually something vague: “I don’t like it.” “Make it better.”' },
  ouvir: 'Listen: What are the three tips?',
  perguntas: [
    { q: 'What three questions structure good feedback?', h: 'What (the element), why (the problem in context), how (a suggestion).' },
    { q: 'What is her example?', h: 'The call-to-action text is too vague; users might be confused about what happens after they click. You might try this instead.' },
    { q: 'Why should a junior designer give feedback too?', h: 'They can bring a new view that a senior designer might not see.' },
    { q: 'Which feedback is usually the most valuable?', h: 'Constructive negative feedback: it leads to improvements.' },
    { q: 'How should you balance positive and negative?', h: 'Say a positive before the negative, or the other way around. Good designers appreciate honest feedback.' }],
  fecho: 'What, why, how. Balance positive and negative. And remember: your view is valuable, even if you are new.' };

var ERROS = { rot: 'A COLLEAGUE’S FEEDBACK ON A WEBSITE', tipo: 'nota', rotulo: 'PROBLEMS', pede: 'Find the five problems. Say a better version, then tap.', fim: 'Five problems fixed. Now say the good version out loud.', dica: 'The student says the better version before tapping.', partes: [
  ['Honestly, I just don’t like it.', 'What’s working really well is the photography: it feels warm and real.', 'start with something specific and positive'], ' ',
  ['The button is bad.', 'The “Submit” button text is a bit vague.', 'what: name the element precisely'], ' ',
  ['Everybody will hate it.', 'Users might not know what happens after they click.', 'why: the problem for the user, softly'], ' ',
  ['Change it.', 'You could try something like “Book my table”.', 'how: a suggestion, not an order'], ' ',
  ['The colors are ugly, I don’t know why.', 'I wonder if the gray text has enough contrast on the beige background.', 'give a reason, and use “I wonder if…”'], ''] };

var CADEIRA = { itens: [
  { alvo: 'Thank the designer and ask what kind of feedback they want.', dica: 'Thanks for sharing. What kind of feedback are you looking for?', resp: 'Mainly the layout of the home page. The colors aren’t final.' },
  { alvo: 'Ask about the goal of the page.', dica: 'What’s the main goal of this page?', resp: 'To get people to book a free trial class.' },
  { alvo: 'Say something specific that works.', dica: 'What’s working really well is…', resp: 'Oh, thanks! I spent a long time on that.' },
  { alvo: 'WHAT: name one element with a problem.', dica: 'The … is a bit…', resp: 'Hmm, yes, I see. What do you mean?' },
  { alvo: 'WHY: explain the effect on the user.', dica: 'Users might… because…', resp: 'That makes sense. I hadn’t thought of that.' },
  { alvo: 'HOW: suggest something, softly.', dica: 'You could try… / What if…?', resp: 'Interesting. Do you think it would work on mobile too?' },
  { alvo: 'Answer the question honestly.', dica: 'I think so, but it might be worth testing…', resp: 'Good idea. Anything else?' },
  { alvo: 'Ask a question instead of giving an answer.', dica: 'I wonder if… What do you think?', resp: 'Maybe. Let me try a version with that.' },
  { alvo: 'Close with something positive and encouraging.', dica: 'Overall, it’s really close. I love…', resp: 'Thank you, this was really helpful.' }] };

var PODE = [
  'I can give feedback with what, why and how.',
  'I can start with something specific that works.',
  'I can soften feedback: It might…, I wonder if…, You could try…',
  'I can balance positive and negative feedback in a crit.'
];

/* MECÂNICAS VARIADAS */
/* DESIGN 07: video · erros · cadeira (os dados estão no topo do aula.js) */
