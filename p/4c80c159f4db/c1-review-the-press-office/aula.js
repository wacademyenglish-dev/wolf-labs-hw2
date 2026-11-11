/* ============================================================
   REVIEW · C1 · UNIT 8 · THE PRESS OFFICE · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · missao · ordem · cadeira · pode.
   Unidade 8 (Explicar e relatar): analogias (it’s a bit like…, think of it as…), orações de particípio
   para falar de resultados (Having led the project…), relato impessoal (it has been suggested that…),
   fonte e distância (reportedly, allegedly, according to), reformular (in other words…), elipse
   avançada (if so, if not, not that I know of).
   A missão: o aluno é o assessor de imprensa de uma empresa (inventada) num dia de crise e prepara o
   comunicado ouvindo três diretores.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 8, titulo: ['The Press', 'Office'], tema: 'Explain and report', placa: 'PRESS RELEASE · 5 PM', lugarConversa: 'THE MARBLE HALLWAY', cor: '#e09a7a', cor2: '#f0cdbd',
  sub: 'Unit 8 review. You run the press office of Northlight Energy. A rumour is spreading, journalists are calling, and the statement goes out at five.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'missao', est: 'o', min: 15, img: 'capa', rot: 'II · Three Directors', t: 'Get the facts before five.', p: 'Ask each director five questions. Your teacher is the director. Then write one line for the statement.' },
  { k: 'ordem', est: 'o', min: 7, img: 'conversa', rot: 'III · The Story in Order', t: 'What happened first?', p: 'Tap the cards in order. Then tell the story with the connectors.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'IV · Off the Record', t: 'Now YOU ask me. I answer short.', p: 'Ask your teacher. Notice the short answers and the rephrasing.' },
  { k: 'gx', est: 'f', min: 4, img: 'capa', rot: 'V · Find the Rule', t: 'Four lines from the press office. You find the rule.', p: 'Read the four sentences out loud. Look at the lit words. Choose the rule. Then say your own.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 8: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var MISSAO = { pede: 'BEFORE FIVE · ASK FIVE QUESTIONS', quem: 'director', depois: 'Write the statement line',
  campos: [
    { c: 'fato', r: 'WHAT HAPPENED', q: 'What exactly has happened?', f: 'What happened?' },
    { c: 'fonte', r: 'SOURCE', q: 'Where does that information come from?', f: 'Source?' },
    { c: 'certeza', r: 'CONFIRMED?', q: 'Is it confirmed? If not, what do we know?', f: 'Confirmed?' },
    { c: 'simples', r: 'IN SIMPLE WORDS', q: 'How would you explain it to someone who knows nothing?', f: 'In simple words?' },
    { c: 'proximo', r: 'NEXT STEPS', q: 'What happens next?', f: 'Next?' }],
  itens: [
    { k: 'DIRECTOR 1', tag: 'THE IT DIRECTOR', ele: 'He', linha: 'According to our IT team, there was reportedly an attempt to access customer data last night. It has not been confirmed that any data was taken. In other words, the door was tested, but we believe it held.', v: { fato: 'someone tried to access customer data last night', fonte: 'the security system’s logs', certeza: 'not confirmed: not that he knows of', simples: 'it’s a bit like someone trying every key on your door', proximo: 'an external audit will be carried out this week' }, diz: '“Someone tried to access customer data last night.” · “Our security system’s logs.” · “Was anything taken? Not that I know of.” · “It’s a bit like someone trying every key on your front door.” · “An external audit will be carried out this week.”' },
    { k: 'DIRECTOR 2', tag: 'THE FINANCE DIRECTOR', ele: 'She', linha: 'It has been suggested that profits will fall. According to our finance director, this is unlikely: having reviewed the figures, she expects stable results this quarter.', v: { fato: 'a newspaper says profits will fall', fonte: 'an anonymous source in the newspaper', certeza: 'not confirmed; if anything, results look stable', simples: 'think of it as a rumour about the weather: the forecast says sunny', proximo: 'results will be published on the 30th' }, diz: '“A newspaper says our profits will fall.” · “An anonymous source.” · “Confirmed? No. If anything, results look stable.” · “Think of it as a rumour about the weather: our forecast says sunny.” · “We publish results on the 30th.”' },
    { k: 'DIRECTOR 3', tag: 'THE HR DIRECTOR', ele: 'She', linha: 'It has been agreed that staff will work from home on Fridays. Having consulted the teams, HR found strong support. Should anyone have questions, managers can explain the details.', v: { fato: 'a new policy: working from home on Fridays', fonte: 'a vote by all teams', certeza: 'yes, it’s confirmed', simples: 'in other words, four days in the office, one at home', proximo: 'it starts on 1 March' }, diz: '“A new policy: working from home on Fridays.” · “All the teams voted.” · “Yes, it’s confirmed.” · “In other words: four days in the office, one at home.” · “It starts on the first of March.”' }],
  relato: { titulo: 'THE STATEMENT · ONE CAREFUL LINE',
    pede: function (x) { return 'What do we say about ' + x.tag.toLowerCase() + '’s news?'; },
    chips: function () { return ['According to …', '… reportedly …', 'It has been suggested that …', 'It has not been confirmed that …', 'In other words, …', 'Having …ed, …', 'It’s a bit like …']; },
    modelo: function (x) { return x.linha; } },
  nao: { me: '“According to me…” → IN MY OPINION / according to OUR TEAM.', confirm: '“Data was stolen” (not confirmed) → there was REPORTEDLY an attempt…', yes: '“If yes, call us” → IF SO, call us.' },
  fim: 'The statement went out at five: careful, clear and true. Sources, distance, analogies and rephrasing: all of Unit 8 in one crisis.' };

var PODE = [
  'I can explain with analogies: it’s a bit like…, think of it as…',
  'I can report impersonally: it has been suggested that…, it was agreed that…',
  'I can show source and distance: reportedly, allegedly, according to…',
  'I can rephrase: in other words, what I mean is, to put it simply…',
  'I can answer short: if so, if not, not that I know of, I’m afraid not.'
];

/* MECÂNICAS VARIADAS */
/* C1 R8: rapido · missao · ordem · cadeira */
var RAPIDO = { seg: 60, itens: [['“ou seja” (2 words + 1)', 'in other words'], ['“se sim” in an email', 'If so'], ['Is it confirmed? – Not that I know ___.', 'of'], ['It has been ___ that we move. (proposed)', 'suggested'], ['The CEO ___ took the money. (accused, not proven)', 'allegedly'], ['___ to the police, …', 'According'], ['It’s a bit ___ a train with no driver.', 'like'], ['Think ___ it as a library.', 'of'], ['___ reviewed the data, we agreed. (participle)', 'Having'], ['What do you mean ___ that?', 'by']] };
var ORDEM = { rot: 'THE CRISIS DAY', pede: 'Tap the events of the day in order. Then report them carefully.', chips: ['According to …', 'reportedly', 'It has been suggested that …', 'In other words, …', 'Having …, we …'],
  modelo: 'At 9 AM a newspaper reportedly published a rumour about our profits. According to the finance director, it was not true. Having checked the security logs, the IT team confirmed an attempt, not a theft. It has been agreed that an external audit will be carried out. In other words: we are safe, and we are being transparent.',
  passos: ['A newspaper published a rumour about the company.', 'Journalists started calling the press office.', 'The IT team checked the security logs.', 'The directors met and agreed on an audit.', 'The press office wrote a careful statement.', 'The statement went out at five.'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me, as a journalist, if I have any news.', dica: 'Is there anything new today?', resp: 'Not that I know of.' },
  { alvo: 'Ask me if the rumour is true.', dica: 'Is the rumour about the company true?', resp: 'I’m afraid I can’t comment. If anything, the numbers look good.' },
  { alvo: 'Ask me to explain my job in simple words.', dica: 'Could you explain your job in simple words?', resp: 'Think of it as a translator between experts and normal people.' },
  { alvo: 'Ask me what has been decided about a change at my work.', dica: 'What has been decided recently?', resp: 'It has been agreed that we start earlier on Mondays.' },
  { alvo: 'Ask me a question I won’t understand at first. Then rephrase it.', dica: '…? In other words, …?', resp: 'Ah, now I see what you mean.' }] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G10 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'achaRegra', titulo: 'Four lines from the statement. Find the rule yourself.', exemplos: ['<b>It has been suggested that</b> the plant close.', 'The director has <b>reportedly</b> resigned.', 'Is the factory closing? <b>If so</b>, we will tell the staff.', '<b>Having led</b> the project, she knows the figures.'], pergunta: 'These phrases help the speaker to …', opcoes: ['keep distance and save words', 'sound very personal and warm', 'add a long story to every fact'], c: 0, nao: 'Not that one. Read the four lit parts again: is there a name? is anything repeated?', regra: 'Press language keeps <b>distance</b>: <b>it has been suggested that</b>, <b>reportedly</b>, <b>allegedly</b>, <b>according to</b>. And it <b>saves words</b>: <b>if so</b>, <b>if not</b>, <b>having led</b> the project.', uso: { p: 'Your turn. You are the press officer. Say two lines about a crisis, with distance.', molde: ['It has been suggested that …', 'The CEO has reportedly …', 'If so, …'], ex: 'It has been suggested that the product be recalled. The CEO has reportedly cancelled all meetings.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_regra', GX_EXPLICA); };
