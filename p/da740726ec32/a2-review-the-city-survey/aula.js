/* ============================================================
   REVIEW · A2 · UNIT 1 · THE CITY SURVEY · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js.
   Unidade 1 (O hábito e o agora): present simple × present continuous (usually × right now);
   pedir esclarecimento (Could you say that again? What does … mean?); ganhar tempo (Give me a
   second, How do I put it?); too × either, so do I / neither do I.
   A missão: uma pesquisa de rua à noite. O aluno é o pesquisador; três pessoas respondem; no fim ele
   apresenta uma pessoa ao chefe da pesquisa: “She usually works at home, but tonight she’s…”
   ============================================================ */
var REV = { nivel: 'A2', unidade: 1, titulo: ['The City', 'Survey'], tema: 'Habits and right now', placa: 'CITY SURVEY', lugarConversa: 'THE NIGHT BUS', cor: '#7cc4ff', cor2: '#bfe1ff',
  sub: 'Unit 1 review. You do a city survey tonight: how people live, and what they are doing right now. Six doors, three people in the street, one report.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'dado', est: 'f', min: 8, img: 'conversa', rot: 'I · The Die', t: 'Roll the die. The number chooses.', p: 'Your teacher rolls. Do the challenge out loud, from memory.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · The City Survey', t: 'Three people stop to answer. Ask them.', p: 'Ask each person five questions. Your teacher is the person. Then report to your boss.' },
  { k: 'cartao', est: 'w', min: 6, img: 'conversa', rot: 'III · Your Answers', t: 'Now you answer the survey.', p: 'Four short lines: your usual day, what you are doing these days, and one thing you never do.' },
  { k: 'escolha', est: 'o', min: 7, img: 'capa', rot: 'IV · Would You Rather?', t: 'A or B? Choose and say why.', p: 'Choose one. Then say why, with because.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'V · I Can', t: 'Unit 1: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var PORTAS = [
  { k: 'USUALLY', tema: 'present simple for habits', t: 'Your usual Monday, in three sentences.', ex: 'I usually wake up at six. I take the bus. I have lunch at work.', trap: 'he / she + -s: she takes. Habits: simple, not continuous.' },
  { k: 'RIGHT NOW', tema: 'present continuous for now', t: 'What are you and two people in your family doing right now?', ex: 'I’m having my English class. My son is playing. My wife is working.', trap: 'be + -ing: “my son playing” → my son IS playing.' },
  { k: 'BOTH', tema: 'simple × continuous', t: 'Say what your friend usually does, and what he or she is doing this week.', ex: 'She usually works in an office, but this week she’s working from home.', trap: 'usually → simple; this week / now → continuous.' },
  { k: 'SAY AGAIN?', tema: 'asking for clarification', t: 'Your teacher says a fast, strange sentence. Ask for help in two ways.', ex: 'Sorry, could you say that again, more slowly? What does “commute” mean?', trap: '“Repeat, please” is short and hard: Could you say that again?' },
  { k: 'A SECOND', tema: 'buying time', t: 'Answer a hard question, but start with a buying-time phrase.', ex: 'Hmm, give me a second… How do I put it? It’s a kind of big party.', trap: 'Don’t stop in silence: say Give me a second.' },
  { k: 'ME TOO', tema: 'too / either, so do I / neither do I', t: 'Your teacher says four things. React to each one.', ex: 'I love pizza. — Me too! / So do I. I don’t smoke. — Me neither. / Neither do I.', trap: '“I don’t like it” → me NEITHER (not me too).' }
];

var MISSAO = { pede: 'THE SURVEY · ASK FIVE QUESTIONS', quem: 'person', depois: 'Report to your boss',
  campos: [
    { c: 'usual', r: 'USUALLY', q: 'What do you usually do in the evening?', f: 'Evenings: what do you do?' },
    { c: 'agora', r: 'RIGHT NOW', q: 'And what are you doing right now?', f: 'Now: what are you doing?' },
    { c: 'semana', r: 'THESE DAYS', q: 'Are you doing anything new these days?', f: 'Something new?' },
    { c: 'nunca', r: 'NEVER', q: 'What do you never do?', f: 'You never…?' },
    { c: 'igual', r: 'SAME AS YOU?', q: 'React: say Me too / Me neither to one answer.', f: 'Me too? Me neither?' }],
  itens: [
    { k: 'PERSON 1', tag: 'A NURSE', ele: 'She', v: { usual: 'sleeps (works at night)', agora: 'going to work', semana: 'learning to swim', nunca: 'drinks coffee', igual: 'Me neither!' }, diz: '“I usually sleep. I work at night, at the hospital.” · “I’m going to work right now!” · “Yes, I’m learning to swim.” · “I never drink coffee.” · (wait for the reaction: Me neither / Me too)' },
    { k: 'PERSON 2', tag: 'A STUDENT', ele: 'He', v: { usual: 'plays video games', agora: 'buying a pizza', semana: 'studying for exams', nunca: 'gets up before nine', igual: 'Me too!' }, diz: '“I usually play video games.” · “Right now I’m buying a pizza.” · “I’m studying for my exams this week. It’s awful.” · “I never get up before nine!” · (wait for the reaction)' },
    { k: 'PERSON 3', tag: 'A TAXI DRIVER', ele: 'He', v: { usual: 'drives all night', agora: 'having a break', semana: 'reading a great book', nunca: 'takes the bus', igual: 'Me neither!' }, diz: '“I usually drive all night.” · “Right now I’m having a break.” · “These days I’m reading a great book.” · “I never take the bus. I drive!” · (wait for the reaction)' }],
  relato: { titulo: 'YOUR BOSS CALLS · TELL ME ABOUT ONE PERSON',
    pede: function (x) { return 'Good work! Tell me about ' + x.tag.toLowerCase() + '.'; },
    chips: function (x) { return [x.ele + ' usually …', 'Right now ' + x.ele.toLowerCase() + '’s …ing.', 'These days ' + x.ele.toLowerCase() + '’s …ing.', x.ele + ' never …']; },
    modelo: function (x) { var v = x.v, e = x.ele; return e + ' usually ' + v.usual + '. Right now ' + e.toLowerCase() + '’s ' + v.agora + '. These days ' + e.toLowerCase() + '’s ' + v.semana + '. ' + e + ' never ' + v.nunca + '.'; } },
  nao: { simples: '“She is usually working at night” → she usually WORKS at night.', be: '“He buying a pizza” → he IS buying a pizza.', neither: '“I don’t smoke. — Me too.” → ME NEITHER.' },
  fim: 'Three people, one report. usually × right now, Could you say that again? and Me neither: all of Unit 1 in the street.' };

var CARTAO = { ph: 'I usually work from nine to six and I take the metro.\nThese days I’m learning English and I’m cooking more.\nRight now I’m sitting in my kitchen.\nI never watch TV in the morning.', rot: 'My survey answers',
  chips: ['I usually ', 'I always ', 'These days I’m ', 'Right now I’m ', 'I never ', ' and ', ' but '],
  perg: ['YOUR ANSWERS', 'Your usual day? What are you doing these days? Right now? Never?'],
  exemploRot: 'SURVEY · YOU', exemplo: [['USUALLY', 'works 9 to 6'], ['RIGHT NOW', 'sitting in the kitchen'], ['THESE DAYS', 'learning English'], ['NEVER', 'watches TV in the morning'], ['SAME AS YOU?', 'Me too!']],
  modelo: 'I usually work from nine to six and I take the metro.<br>These days I’m learning English and I’m cooking more.<br>Right now I’m sitting in my kitchen. I never watch TV in the morning.' };

var CONVERSA = [
  { q: 'What do you usually do on Friday nights?', f: 'Friday nights?', voce: ['I usually …', 'I sometimes …'], ex: 'I usually order a pizza and watch a series.' },
  { q: 'What are you reading or watching these days?', f: 'A book? A series?', voce: ['These days I’m …ing …', 'I’m not … anything.'], ex: 'I’m watching a Korean series. It’s great.' },
  { q: 'I don’t like getting up early. And you?', f: 'Getting up early?', voce: ['Me neither.', 'Really? I do!', 'Neither do I.'], ex: 'Me neither! I hate it.' },
  { q: 'Tell me a word in English that you never remember.', f: 'A hard word?', voce: ['Give me a second…', 'How do I put it?', 'It’s a kind of …'], ex: 'Give me a second… The thing for the rain… umbrella!' },
  { q: 'What is your family doing right now?', f: 'Your family, now?', voce: ['My … is …ing.', 'They’re …ing.'], ex: 'My parents are watching TV, and my sister is cooking.' }
];

var PODE = [
  'I can say what I usually do (present simple).',
  'I can say what is happening now (present continuous).',
  'I can choose: usually → simple, right now / these days → continuous.',
  'I can ask for help: Could you say that again? What does … mean?',
  'I can react: Me too / Me neither, So do I / Neither do I.'
];

/* MECÂNICAS VARIADAS */
/* A2 R1: dado · missao · cartao · escolha */
var ESCOLHA = [
  { a: 'a quiet evening at home', b: 'a busy night in the city', chips: ['I’d choose …', 'because I usually …'], ex: 'A quiet evening at home, because I usually work a lot.' },
  { a: 'work from home', b: 'work in an office', chips: ['I prefer …', 'These days I’m …ing'], ex: 'Work from home. These days I’m working from home and I love it.' },
  { a: 'a night bus', b: 'a taxi', chips: ['I usually take …', 'because …'], ex: 'A taxi. I never take the night bus.' },
  { a: 'learn a new language', b: 'learn a new instrument', chips: ['I’d learn …', 'Right now I’m learning …'], ex: 'A new language! Right now I’m learning English, of course.' }];
