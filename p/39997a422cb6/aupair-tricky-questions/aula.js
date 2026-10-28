/* ============================================================
   AU PAIR · MODULE 3 · LESSON 10 OF 24 · TRICKY QUESTIONS · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   As perguntas difíceis da entrevista: What would you do if…? (2ª condicional: If + past, would + verbo).
   Vídeo: Au Pair in America, "Host Moms Give Advice To Future Au Pairs About Matching Process" (2:54), legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 10, kick: 'AU PAIR · MODULE 3 · LESSON 10 OF 24', titulo: ['Tricky', 'Questions'], tema: 'What would you do if…?', placa: 'LESSON 10',
  lugarConversa: 'THE FAMILY KITCHEN', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Families ask: “What would you do if the baby didn’t stop crying?” Today you hear what host moms look for, and you answer tricky situations calmly.',
  chips: ['Host moms’ advice', 'If… I would…', 'Twelve situations'], botao: 'Start the lesson',
  nota: 'There is rarely one right answer. Families listen for three things: safety first, calm, and talking to the parents.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · What Host Moms Look For', t: 'Three host moms give advice.', p: 'One question before, then the video, then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'II · If… I Would…', t: 'Imaginary situations in English.', p: 'Compare A and B. Then see the pattern.' },
  { k: 'tabuleiro', est: 'o', min: 16, img: 'conversa', rot: 'III · Twelve Situations', t: 'Roll, move, answer the situation.', p: 'Your teacher rolls. Say what you would do, and why.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 10: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'h29mUcy-Y9k', titulo: 'Host Moms Give Advice To Future Au Pairs About Matching Process', fonte: 'AU PAIR IN AMERICA · 3 MIN',
  antes: { q: 'What do you think a host mom looks for in an au pair? Say two things.', h: 'Experience, energy, honesty, someone who fits the family…' },
  ouvir: 'Listen: What do they look for? What advice do they give about answering emails?',
  perguntas: [
    { q: 'What do they look for, besides childcare?', h: 'Family fit: someone who will live with them for a year. Someone who learned from a hard time.' },
    { q: 'What “tough questions” should YOU ask the family?', h: 'About their personalities, the kids’ personalities, communication style, routine, the city.' },
    { q: 'What do they ask about driving?', h: 'Are you comfortable driving in traffic, and long distances with the children?' },
    { q: 'What do they notice in your photos?', h: 'Are you relaxed or uptight, athletic, organized? What you do with friends and family.' },
    { q: 'What do they say about response time?', h: 'Answer right away. If you are busy, send a quick email saying you are interested and will answer later.' }],
  fecho: 'Be clear, honest, and give examples: that’s how you find the best family fit.' };

var DESCOBRE = {
  pares: [
    { a: 'If the baby {didn’t stop} crying, I {would check} his diaper.', b: 'If the baby {doesn’t stop} crying, I {will check} his diaper.', q: 'Both are correct. What’s the difference?', r: 'A = an <b>imaginary</b> situation (interview question: “What would you do if…?”). B = a <b>real</b> plan. In interviews, answer with <b>would</b>.' },
    { a: 'What {would} you do if a child {got} hurt?', b: 'What {will} you do if a child {gets} hurt?', q: 'Which question do families usually ask?', r: 'A: <b>What would you do if + past</b>. The past here does not mean “past time”: it means “imagine”.' },
    { a: 'If I {were} you, I {would} call the parents.', b: 'If I {was} you, I {will} call the parents.', q: 'Which one is the classic form?', r: '<b>If I were you, I would…</b> = advice.' },
    { a: 'I {would} stay calm and {call} the parents.', b: 'I {would} stay calm and {called} the parents.', q: 'What form comes after would?', r: '<b>would + base verb</b>: would call, would check, would stay.' }],
  regra: [['THE QUESTION', 'What would you do if + past?'], ['THE ANSWER', 'If + past, I would + verb'], ['ADVICE', 'If I were you, I would…'], ['THE SAFE SHAPE', 'safety first → stay calm → talk to the parents']],
  armas: [['WOULD', 'I would called the parents.', 'I would call the parents.', 'would + base'], ['IF + PAST', 'If she would cry, I…', 'If she cried, I would…', 'no would after if'], ['WERE', 'If I was you…', 'If I were you…', 'classic form'], ['WILL', 'What will you do if…? (in an interview)', 'What would you do if…?', 'imaginary']] };

var TABULEIRO = { rot: 'WHAT WOULD YOU DO IF…?', centro: 'Safety first. Stay calm. Talk to the parents.', casas: [
  { k: 'CRYING', t: 'What would you do if the baby didn’t stop crying?', ex: 'I would check if he was hungry, tired or needed a new diaper. If he still cried, I would call the parents.' },
  { k: 'A FALL', t: '…if a child fell and hit his head?', ex: 'I would stay calm, check him and put ice on it. I would call the parents right away, and 911 if he seemed confused or sleepy.' },
  { k: 'NO HOMEWORK', t: '…if a child refused to do homework?', ex: 'I would give a short break and then sit with her and make it a game, like a race against the clock.' },
  { k: 'SIBLINGS FIGHT', t: '…if two siblings fought over a toy?', ex: 'I would separate them, use a timer so each one plays for five minutes, and talk about sharing.' },
  { k: 'SNOW', t: '…if it snowed and you had to drive to school?', ex: 'I would ask the parents first. If I didn’t feel safe, I would not drive.' },
  { k: 'ALLERGY', t: '…if a friend offered the kids a snack and one has an allergy?', ex: 'I would read the label and say no politely if I wasn’t sure. Safety first.' },
  { k: 'HOMESICK', t: '…if you felt homesick in the first weeks?', ex: 'I would call my family, talk to other au pairs and my coordinator, and keep busy with classes.' },
  { k: 'A STRANGER', t: '…if a stranger at the park asked the child’s name?', ex: 'I would stay next to the child, not give personal information and leave the place if I felt uncomfortable.' },
  { k: 'PHONE RULES', t: '…if the kids asked for more screen time than the rule?', ex: 'I would follow the parents’ rule and offer another activity, like drawing or a game outside.' },
  { k: 'A MISTAKE', t: '…if you made a mistake, like losing the house key?', ex: 'I would tell the parents immediately, say sorry and help find a solution.' },
  { k: 'NOT YOUR JOB', t: '…if the family asked you to clean the whole house?', ex: 'I would kindly explain that my duties are about the kids, and talk to my coordinator if it continued.' },
  { k: 'ADVICE', t: 'A friend wants to be an au pair. Give advice: If I were you…', ex: 'If I were you, I would practice English every day and talk to au pairs before choosing a family.' }] };

var PODE = [
  'I can understand what host moms look for in an au pair.',
  'I can answer “What would you do if…?” with If + past, I would + verb.',
  'I can follow the safe shape: safety first, stay calm, talk to the parents.',
  'I can give advice with If I were you, I would…'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 10: video · descobre · tabuleiro (os dados estão no topo do aula.js) */
