/* ============================================================
   REVIEW · A1 · UNIT 8 · BACKSTAGE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 8 (Eu consigo, agora mesmo): can / can't de habilidade; o pedido educado (Could I have…?,
   I'd like…, sem I want / give me); present continuous (am / is / are + -ing, a grafia do -ing);
   o que você faz × o que está fazendo agora.
   A missão: os bastidores de um show de talentos. O aluno é o contrarregra; três artistas; no fim ele
   fala no rádio com a diretora: “Leo can sing, but he can’t dance. Right now he’s practicing.”
   ============================================================ */
var REV = { nivel: 'A1', unidade: 8, titulo: ['Backstage', 'Tonight'], tema: 'I can, right now', placa: 'BACKSTAGE', lugarConversa: 'THE EMPTY STAGE', cor: '#b49cf2', cor2: '#d9cdfa',
  sub: 'Unit 8 review. It’s the night of the talent show and you run the backstage. Six doors, three nervous performers, and the director on the radio.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Backstage', t: 'Three performers. The show starts in ten minutes.', p: 'Ask each performer five questions. Your teacher is the performer. Then talk to the director on the radio.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · Your Act', t: 'You are in the show too! Write your card.', p: 'Four short lines: what you can do, what you can’t, what you are doing now, what you’d like.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'capa', rot: 'IV · The Hot Seat', t: 'Now YOU ask the questions.', p: 'Your teacher sits in the hot seat. Ask, listen, react.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'V · Mistake Hunter', t: 'Six lines backstage. Each one has a wrong word.', p: 'Tap the wrong word. Say the line right. Then check.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'I CAN', tema: 'can / can’t', t: 'Three things you can do, two things you can’t.', ex: 'I can cook, swim and drive. I can’t sing and I can’t skate.', trap: '“I can to swim” / “I can swims” → I can swim.' },
  { k: 'CAN YOU?', tema: 'Can you…? + short answers', t: 'Ask your teacher three “Can you…?” questions.', ex: 'Can you play the guitar? — Yes, I can. / No, I can’t.', trap: '“Do you can…?” → Can you…?' },
  { k: 'POLITE', tema: 'polite requests', t: 'You are in a café. Order a drink and a cake, nicely.', ex: 'Could I have a coffee, please? I’d like a piece of chocolate cake.', trap: '“I want a coffee” / “Give me a coffee” is too direct: Could I have…?' },
  { k: 'RIGHT NOW', tema: 'present continuous', t: 'What are you doing right now? And your family?', ex: 'I’m talking to my teacher. My son is sleeping. My husband is working.', trap: 'be + -ing: “I talking” → I’m talking.' },
  { k: 'RUNNING', tema: 'the -ing spelling', t: 'Spell the -ing: run, make, swim, write, sit.', ex: 'running, making, swimming, writing, sitting.', trap: 'run → running (double n); make → making (no e).' },
  { k: 'USUALLY / NOW', tema: 'what you do × what you are doing', t: 'What do you usually do on Saturday? What are you doing this Saturday?', ex: 'I usually go to the beach. But this Saturday I’m visiting my mother.', trap: 'every day → I work; now → I’m working.' }
];

var MISSAO = { pede: 'BACKSTAGE · ASK FIVE QUESTIONS', quem: 'performer', depois: 'Call the director',
  campos: [
    { c: 'pode', r: 'CAN', q: 'What can you do?', f: 'You can…?' },
    { c: 'naopode', r: 'CAN’T', q: 'Is there something you can’t do?', f: 'You can’t…?' },
    { c: 'agora', r: 'NOW', q: 'What are you doing right now?', f: 'Now: what?' },
    { c: 'normal', r: 'USUALLY', q: 'And what do you usually do? What’s your job?', f: 'Your job?' },
    { c: 'pede', r: 'WOULD LIKE', q: 'Do you need anything?', f: 'You need…?' }],
  itens: [
    { k: 'PERFORMER 1', tag: 'LEO', ele: 'He', v: { pode: 'sing', naopode: 'dance', agora: 'practicing his song', normal: 'works in a bank', pede: 'a glass of water' }, diz: '“I can sing.” · “I can’t dance at all!” · “I’m practicing my song.” · “I usually work in a bank.” · “Could I have a glass of water, please?”' },
    { k: 'PERFORMER 2', tag: 'PRIYA', ele: 'She', v: { pode: 'dance and juggle', naopode: 'sing', agora: 'putting on her shoes', normal: 'teaches yoga', pede: 'a chair' }, diz: '“I can dance, and I can juggle!” · “I can’t sing.” · “I’m putting on my shoes.” · “I usually teach yoga.” · “I’d like a chair, please.”' },
    { k: 'PERFORMER 3', tag: 'TOM', ele: 'He', v: { pode: 'play the piano', naopode: 'read music', agora: 'looking for his glasses', normal: 'drives a taxi', pede: 'his glasses!' }, diz: '“I can play the piano.” · “I can’t read music. I play by ear.” · “I’m looking for my glasses!” · “I usually drive a taxi.” · “Could you help me find my glasses, please?”' }],
  relato: { titulo: 'THE RADIO · THE DIRECTOR WANTS NEWS',
    pede: function (x) { return 'Backstage, this is the director. How is ' + x.tag.charAt(0) + x.tag.slice(1).toLowerCase() + '? Is ' + x.ele.toLowerCase() + ' ready?'; },
    chips: function (x) { return [x.ele + ' can …, but ' + x.ele.toLowerCase() + ' can’t …', 'Right now ' + x.ele.toLowerCase() + '’s …ing.', x.ele + ' usually …', x.ele + ' would like …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return e + ' can ' + v.pode + ', but ' + e.toLowerCase() + ' can’t ' + v.naopode + '. Right now ' + e.toLowerCase() + '’s ' + v.agora + '. ' + e + ' usually ' + v.normal + '. ' + e + ' would like ' + v.pede.replace('!', '') + '.'; } },
  nao: { canto: '“He can to sing” → he can SING.', ing: '“He practicing” → he’s practicing. be + -ing.', want: '“Give me water” → Could I have some water, please?' },
  fim: 'Three performers, one great show. can, could I have…?, be + -ing and usually × now: all of Unit 8 backstage.' };

var CARTAO = { ph: 'I can tell jokes and I can whistle.\nI can’t sing.\nRight now I’m drinking a tea.\nI’d like a big microphone, please!', rot: 'My act',
  chips: ['I can ', 'I can’t ', 'Right now I’m ', 'ing', 'I usually ', 'I’d like ', 'Could I have ', ', please'],
  perg: ['YOUR ACT', 'What can you do? What can’t you do? What are you doing now? What would you like?'],
  exemploRot: 'PERFORMER 4 · YOU', exemplo: [['CAN', 'tell jokes'], ['CAN’T', 'sing'], ['NOW', 'drinking a tea'], ['USUALLY', 'works in an office'], ['WOULD LIKE', 'a big microphone']],
  modelo: 'I can tell jokes and I can whistle. I can’t sing.<br>Right now I’m drinking a tea.<br>I’d like a big microphone, please!' };

var CONVERSA = [
  { q: 'What can you do very well?', f: 'You can do… well?', voce: ['I can … very well.', 'I can’t …'], ex: 'I can cook very well. I can’t sing!' },
  { q: 'What is your family doing right now?', f: 'Your family now?', voce: ['My … is …ing.', 'They are …ing.'], ex: 'My wife is working, and my kids are playing.' },
  { q: 'What do you usually do on Friday nights?', f: 'Friday nights?', voce: ['I usually …', 'I sometimes …'], ex: 'I usually watch a movie at home.' },
  { q: 'Can you play an instrument? Do you want to learn one?', f: 'An instrument?', voce: ['Yes, I can play …', 'No, I can’t, but …'], ex: 'No, I can’t, but I’d like to learn the guitar.' },
  { q: 'You are in a café now. Order something, nicely.', f: 'Order in a café.', voce: ['Could I have …, please?', 'I’d like …'], ex: 'Could I have a cappuccino, please? And I’d like a croissant.' }
];

var PODE = [
  'I can say what I can and can’t do.',
  'I can ask “Can you…?” and answer “Yes, I can.”',
  'I can ask nicely: Could I have…, please? I’d like…',
  'I can say what is happening now: I’m practicing.',
  'I can say usually × now: I usually work, now I’m resting.'
];

/* MECÂNICAS VARIADAS */
var RAPIDO = { seg: 60, itens: [['run → -ing', 'running'], ['make → -ing', 'making'], ['swim → -ing', 'swimming'], ['write → -ing', 'writing'], ['She ___ sing. (can)', 'She can sing.'], ['___ you swim?', 'Can'], ['Polite: “Give me water”', 'Could I have some water, please?'], ['Now: I ___ (talk)', 'I’m talking'], ['Every day: he ___ (work)', 'he works'], ['sit → -ing', 'sitting']] };
var CADEIRA = { itens: [{ alvo: 'Ask me what I can do.', dica: 'What can you do?', resp: 'I can play the guitar.' }, { alvo: 'Ask me what I can’t do.', dica: 'Can you dance?', resp: 'No, I can’t!' }, { alvo: 'Ask me what I’m doing now.', dica: 'What are you doing right now?', resp: 'I’m teaching you!' }, { alvo: 'Ask me what I usually do on Sundays.', dica: 'What do you usually do on Sundays?', resp: 'I usually go to the park.' }, { alvo: 'Ask me for something, nicely.', dica: 'Could I have …, please?', resp: 'Of course. Here you are.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G14 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'cacaErro', titulo: 'Mistake hunter. Backstage at the talent show.', toque: 'People who speak Portuguese often say these. Tap the wrong word before you see the answer.', itens: [{ f: 'He can [[to]] sing.', r: 'He can <b>sing</b>.', d: 'can + verb. No to.' }, { f: 'She can [[sings]] and dance.', r: 'She can <b>sing</b> and dance.', d: 'After can: the clean verb. No -s.' }, { f: 'He is [[practice]] now.', r: 'He is <b>practicing</b> now.', d: 'am / is / are + -ing.' }, { f: 'He is [[runing]] on stage.', r: 'He is <b>running</b> on stage.', d: 'run: double the n.' }, { f: 'I [[want]] a coffee.', r: 'Could I <b>have</b> a coffee, please?', d: 'Polite: Could I have …, please?' }, { f: 'I usually [[am working]] at night.', r: 'I usually <b>work</b> at night.', d: 'Every day: the simple form.' }], nota: 'After <b>can</b>: the clean verb. Right now: <b>is + -ing</b>. Every day: the simple form. To ask nicely: <b>Could I have …, please?</b>', uso: { p: 'Your turn. You are backstage on the radio. Say what one artist can do, and what he or she is doing right now.', molde: ['She can …', 'She can’t …', 'Right now she’s …'], ex: 'Leo can sing, but he can’t dance. Right now he’s practicing.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_caca', GX_EXPLICA); };
