/* ============================================================
   AU PAIR · MODULE 5 · LESSON 20 OF 24 · BEHIND THE WHEEL · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Curso Au Pair (A2+/B1).
   Dirigir nos EUA: carteira do país de origem, permissão internacional, carteira do estado (as regras variam por estado),
   treino com motorista habilitado, clima, distração; conselhos com should / shouldn't.
   Vídeo oficial: Au Pair in America (US Office), "Can My Au Pair Drive While in the United States?" (3:56), legenda conferida.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B1', unidade: 20, kick: 'AU PAIR · MODULE 5 · LESSON 20 OF 24', titulo: ['Behind the', 'Wheel'], tema: 'Driving the kids safely', placa: 'LESSON 20',
  lugarConversa: 'THE BACK SEAT', cor: '#ffb38a', cor2: '#ffd9c2',
  sub: 'Many families need an au pair who drives: school, soccer, playdates. Today you learn what the agency asks for, how to get ready, and how to give and take advice with should.',
  chips: ['Driving FAQ', 'should · shouldn’t', 'Should or shouldn’t?'], botao: 'Start the lesson',
  nota: 'If you don’t feel safe driving, say it. A good family prefers an honest au pair to a scared one.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'video', est: 'l', min: 10, img: 'conversa', rot: 'I · Can Au Pairs Drive?', t: 'An agency answers the driving questions.', p: 'First one question, then the video, then more questions.' },
  { k: 'transforma', est: 'o', min: 8, img: 'capa', rot: 'II · Give Advice', t: 'A problem. Your advice.', p: 'Read the problem and the clue. Give advice with should or shouldn’t.' },
  { k: 'separa', est: 'f', min: 12, img: 'conversa', rot: 'III · Should or Shouldn’t?', t: 'Twelve driving situations.', p: 'Choose the side and say the full sentence.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'IV · I Can', t: 'Lesson 20: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var VIDEO = { yt: 'gzhG25X78DE', titulo: 'Can My Au Pair Drive While in the United States?', fonte: 'AU PAIR IN AMERICA (US OFFICE) · 4 MIN',
  antes: { q: 'What is different about driving in the USA? Guess two things.', h: 'Bigger roads, snow in some states, different signs, automatic cars, school buses…' },
  ouvir: 'Listen: Which documents do au pairs need? How do they practice?',
  perguntas: [
    { q: 'Which license do au pairs need, and what permit should they get before arriving?', h: 'A valid driver’s license from their home country, and an international driving permit.' },
    { q: 'What should they do after they arrive?', h: 'Get a local state driver’s license as soon as possible.' },
    { q: 'What is in the safe driving training?', h: 'American road signs, driving in different weather, and how to prevent distracted driving.' },
    { q: 'Can au pairs drive right after they arrive?', h: 'It depends on the state. Some accept the international permit for a short time. The local counselor knows the state law.' },
    { q: 'What advice do they give host families?', h: 'Practice with a licensed driver in the car, show landmarks, practice in rain or snow, and never ask the au pair to drive if it is not safe.' }],
  fecho: 'Talk about driving in the interview, practice with the family, and never drive if you don’t feel safe.' };

var TRANSFORMA = { rot: 'GIVE ADVICE', fim: 'should = good advice. must = a rule. Both are useful.', itens: [
  { de: 'I’m nervous about driving in snow.', pista: 'You should…', para: 'You should practice with your host dad on a quiet road first.' },
  { de: 'My phone rings while I’m driving the kids.', pista: 'You shouldn’t…', para: 'You shouldn’t answer. Stop the car in a safe place if it’s important.' },
  { de: 'I don’t know the way to the soccer field.', pista: 'You should…', para: 'You should set the GPS before you start the car.' },
  { de: 'I only have my Brazilian license.', pista: 'You should… as soon as possible', para: 'You should get a state driver’s license as soon as possible.' },
  { de: 'The family wants me to drive in a storm.', pista: 'Maybe you shouldn’t…', para: 'Maybe you shouldn’t drive. Tell them you don’t feel safe.' },
  { de: 'The kids are fighting in the back seat.', pista: 'You should…, not…', para: 'You should stop the car safely and talk to them, not turn around while driving.' }] };

var SEPARA = { rot: 'SHOULD OR SHOULDN’T?', a: 'YOU SHOULD', b: 'YOU SHOULDN’T', fim: 'In the interview, be honest about your driving. It protects you and the kids.', itens: [
  ['…bring your international driving permit.', 'a', 'Agencies ask for it before you arrive.'],
  ['…text while you drive.', 'b', 'Never. Distracted driving is one of the biggest dangers.'],
  ['…practice with a licensed driver before you drive the kids alone.', 'a', 'Learn the area and the car first.'],
  ['…drive when you feel very tired or sick.', 'b', 'Ask for help or another plan.'],
  ['…check that every child is in the right car seat.', 'a', 'Every trip, even short ones.'],
  ['…say you are an excellent driver if you are not.', 'b', 'Be honest in the interview.'],
  ['…ask your coordinator about your state’s license rules.', 'a', 'Every state has its own rules.'],
  ['…drive in a snowstorm if you don’t feel safe.', 'b', 'Say “I don’t feel safe driving today.”'],
  ['…stop for a school bus with flashing red lights.', 'a', 'A very important U.S. rule: stop and wait.'],
  ['…let a child sit in the front seat if the parents said no.', 'b', 'Follow the family’s rules.'],
  ['…set the GPS before you start the car.', 'a', 'Eyes on the road while driving.'],
  ['…leave the kids in the car “just for a minute”.', 'b', 'Never.']] };

var PODE = [
  'I can say what an au pair needs to drive: license, international permit, state license.',
  'I can give advice with should and shouldn’t.',
  'I can say the main driving rules with kids.',
  'I can say honestly: “I don’t feel safe driving today.”'
];

/* MECÂNICAS VARIADAS */
/* AU PAIR 20: video · transforma · separa (os dados estão no topo do aula.js) */
