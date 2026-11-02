/* ============================================================
   REVIEW · C1 · UNIT 7 · THE DEBATE CLUB · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: dado · tabuleiro · escolha · conversa · pode.
   Unidade 7 (Argumentar e persuadir): síntese (the bottom line is, in short), marcadores de argumento
   (granted, be that as it may), persuasão (what if…?, imagine…, condicionais mistas), feedback
   (what I liked was, it might be worth…), on the contrary × on the other hand × conversely,
   condições precisas (assuming, given that, providing).
   O tabuleiro: a final do clube de debate da universidade (inventado): doze moções, o aluno defende.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 7, titulo: ['The Debate', 'Club'], tema: 'Argue and persuade', placa: 'THE FINAL · MOTION 12', lugarConversa: 'THE COURTYARD', cor: '#a3c98a', cor2: '#d1e4c4',
  sub: 'Unit 7 review. It’s the final of the university debate club. Twelve motions, one minute each. Concede, contrast, persuade, and land the bottom line.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'tabuleiro', est: 'o', min: 16, img: 'capa', rot: 'II · The Motions', t: 'Roll, move, argue for one minute.', p: 'Your teacher rolls the die and reads the motion. Argue it, out loud, with the tools of the unit.' },
  { k: 'escolha', est: 'o', min: 7, img: 'conversa', rot: 'III · Pick a Side', t: 'A or B, and persuade me.', p: 'Choose A or B. Persuade your teacher in three sentences.' },
  { k: 'conversa', est: 'o', min: 7, img: 'conversa', rot: 'IV · After the Debate', t: 'Feedback and real opinions.', p: 'Answer, then ask the question back.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 7: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'THE BOTTOM LINE', tema: 'synthesis', t: 'Summarize your job or studies in two sentences for a busy boss.', ex: 'In short, I make our app faster. The bottom line is: fewer customers leave.', trap: 'Synthesis first, details later.' },
  { k: 'GRANTED', tema: 'argument markers', t: 'Your teacher says: “Cars should be banned from cities.” Concede and push back.', ex: 'Granted, the air would be cleaner. Be that as it may, many people have no other option.', trap: 'Concede (granted), then turn (be that as it may).' },
  { k: 'WHAT IF', tema: 'persuasion', t: 'Persuade the class to try a four-day week.', ex: 'Imagine a Friday with your family. What if productivity went up, not down?', trap: 'Imagine… / What if…? + past for hypotheses.' },
  { k: 'WHAT I LIKED', tema: 'feedback language', t: 'Give feedback on a colleague’s presentation: one positive, one suggestion.', ex: 'What I liked was your opening story. It might be worth cutting a few slides.', trap: 'Positive first; suggestion with “it might be worth…”.' },
  { k: 'ON THE CONTRARY', tema: 'contrast with precision', t: '“Is working from home lazy?” Deny it, then show two sides.', ex: 'On the contrary, people work longer. On the other hand, it can feel lonely.', trap: 'on the contrary = no; on the other hand = both true.' },
  { k: 'ASSUMING', tema: 'precise conditions', t: 'Plan a project with three condition words.', ex: 'Assuming the budget is approved, and given that the team is ready, we can start in May, providing nobody leaves.', trap: 'given that = a fact; assuming = we expect it.' }
];

var ESCOLHA = [
  { a: 'a world with no social media', b: 'a world with no TV', chips: ['Imagine …', 'Granted, … Be that as it may, …', 'The bottom line is …'], ex: 'No social media. Imagine real conversations again. Granted, we’d lose some news. The bottom line is: we’d be happier.' },
  { a: 'free public transport for everyone', b: 'cheaper cars for everyone', chips: ['What if …?', 'On the other hand, …', 'Assuming …'], ex: 'Free transport. What if cities had no traffic? Assuming it’s well funded, everyone wins.' },
  { a: 'exams at school', b: 'only projects at school', chips: ['On the contrary, …', 'It might be worth …', 'In short, …'], ex: 'Projects. Are exams fair? On the contrary, they test memory, not thinking.' }];

var CONVERSA = [
  { q: 'What’s an argument you lost, but now think you were right?', f: 'An argument you lost?', voce: ['Granted, …', 'Be that as it may, …', 'Looking back, …'], ex: 'Granted, I was too emotional. Be that as it may, I was right about the money.' },
  { q: 'Give me feedback on my teaching: one thing you like, one suggestion.', f: 'Feedback for me?', voce: ['What I liked was …', 'It might be worth …'], ex: 'What I liked was the games. It might be worth giving us more speaking homework.' },
  { q: 'In short, what’s the bottom line of your life philosophy?', f: 'Your philosophy?', voce: ['In short, …', 'The bottom line is …'], ex: 'In short: be kind, work hard. The bottom line is that nobody does it alone.' }
];

var PODE = [
  'I can summarize: in short, the bottom line is…',
  'I can concede and push back: granted…, be that as it may…',
  'I can persuade with imagine…, what if…? and mixed conditionals.',
  'I can give constructive feedback: what I liked was…, it might be worth…',
  'I can contrast and set conditions precisely: on the contrary, assuming, given that.'
];

/* MECÂNICAS VARIADAS */
/* C1 R7: dado · tabuleiro · escolha · conversa */
var TABULEIRO = { rot: 'THE FINAL · TWELVE MOTIONS', centro: 'One minute per motion. Concede, contrast, persuade.', casas: [
  { k: 'HOMEWORK', t: 'Motion: homework should be banned.', ex: 'Granted, homework helps some students. Be that as it may, children need time to play. In short: less, but better.' },
  { k: 'ROBOTS', t: 'Motion: robots will do most jobs by 2050.', ex: 'Imagine a world where machines do the boring work. What if we used that time to learn?' },
  { k: 'CITIES', t: 'Motion: cities should ban cars from the centre.', ex: 'Given that pollution is rising, and assuming buses improve, the answer is yes.' },
  { k: 'SPORT', t: 'Motion: footballers earn too much.', ex: 'On the one hand, it’s a short career. On the other hand, nurses earn ten times less.' },
  { k: 'FEEDBACK', t: 'Give feedback on your opponent’s argument.', ex: 'What I liked was your example. It might be worth adding some data.' },
  { k: 'TRAVEL', t: 'Motion: tourists harm the places they love.', ex: 'Granted, some do. On the contrary, many towns would die without them.' },
  { k: 'ART', t: 'Motion: AI art is real art.', ex: 'Be that as it may, art needs intention. The bottom line is: the human idea matters.' },
  { k: 'MONEY', t: 'Motion: cash will disappear.', ex: 'Assuming everyone has a phone, maybe. But given that many older people don’t, not yet.' },
  { k: 'SCHOOL', t: 'Motion: school should start at 10 AM.', ex: 'Imagine teenagers who actually sleep! If school started later, grades would be higher.' },
  { k: 'THE PAST', t: 'Persuade with a mixed conditional: a decision your city made.', ex: 'If the city had built the metro in 1990, we wouldn’t have this traffic today.' },
  { k: 'SUMMARY', t: 'Summarize the whole debate in two sentences.', ex: 'In short, every motion has two sides. The bottom line is: evidence wins, not volume.' },
  { k: 'VICTORY', t: 'Closing speech: persuade the judges you won.', ex: 'Granted, my opponents were excellent. Be that as it may, only we answered every question. Imagine giving us the trophy!' }] };
