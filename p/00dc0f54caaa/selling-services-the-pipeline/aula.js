/* ============================================================
   SELLING SERVICES · BUSINESS · SOB MEDIDA · LESSON 24 · THE PIPELINE · LIVE CLASS  28/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js (+ dialogo.js e cliente.js do curso). A1+.
   Alvo: will para decisões na hora (OK, I’ll call him on Monday) + won’t + Will you…? + o próximo passo (next step).
   Armadilhas: “OK, I call him tomorrow” (presente para decisão), “I’ll to send”, “I’ll calling”, “I don’t will”.
   Situação: reunião de pipeline de sexta com a Sara. Formatos: separa (MOVE FORWARD × NOT YET), transforma
   (problema → decisão), EASY READER · CHAPTER 6 de “Leo’s First Big Client”. Produto: o próximo passo de 4 leads.
   Empresas FICTÍCIAS (Bluepeak Services, Orla Beverages, Costa Retail, Atlas Motors, Delta Foods, Pine Hotels, Nova Textiles).
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'A1+', unidade: 24, kick: 'SELLING SERVICES · LESSON 24', titulo: ['The', 'Pipeline'], tema: 'will: decisions now · the next step', placa: 'LESSON 24',
  lugarConversa: 'THE PIPELINE MEETING', cor: '#7fd1b9', cor2: '#c9f0e3',
  sub: 'Friday, pipeline meeting. Eight leads on the board. Some move forward, some are not ready. Today you decide, fast: “OK, I’ll call him on Monday.”',
  chips: ['The pipeline meeting', 'Move forward or not yet?', 'Your next steps'], botao: 'Start the lesson',
  nota: 'A decision now: I’ll + verb. OK, I’ll call him. Not “OK, I call him tomorrow”.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'conversa', est: 'o', min: 5, img: 'conversa', rot: 'I · Your Pipeline', t: 'How many leads do you have right now?', p: 'Answer, then ask your teacher: “And you?”' },
  { k: 'dialogo', est: 'l', min: 8, img: 'mesa', rot: 'II · The Pipeline Meeting', t: 'Friday. Sara asks about every lead.', p: 'One question before. Listen. Then the questions.' },
  { k: 'descobre', est: 'f', min: 8, img: 'capa', rot: 'III · I’ll, Not “I Call”', t: 'Two sentences. Which one is English?', p: 'Compare. Say the difference. Then see the rule.' },
  { k: 'separa', est: 'f', min: 8, img: 'mesa', rot: 'IV · Move Forward or Not Yet?', t: 'Eight leads. Is each one ready for the next step?', p: 'Choose a side and say why. Then say your decision: “OK, I’ll…”' },
  { k: 'escolha', est: 'o', min: 6, img: 'conversa', rot: 'V · You Choose', t: 'A or B? Choose and say why.', p: 'Your teacher answers first. Then you.' },
  { k: 'leitura', est: 'l', min: 6, img: 'mesa', rot: 'VI · Easy Reader: Three Slides', t: 'Leo’s First Big Client · Chapter 6.', p: 'Read it out loud. Then answer the questions.' },
  { k: 'transforma', est: 'f', min: 7, img: 'capa', rot: 'VII · Problem → Decision', t: 'A problem. Decide now!', p: 'Read the problem. Use the clue. Say your decision with I’ll.' },
  { k: 'cartao', est: 'w', min: 8, img: 'conversa', rot: 'VIII · Next Steps for 4 Leads', t: 'Your pipeline: four leads, four next steps.', p: 'Write them. Then present them to Sara (your teacher).' },
  { k: 'pode', est: 'f', min: 3, img: 'capa', rot: 'IX · I Can', t: 'Lesson 24: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];

var CONVERSA = [
  { q: 'How many leads do you have right now?', f: 'Five? Twenty?', voce: ['I have about … leads.', 'Right now, I have …'], ex: 'Right now, I have about twelve leads. Three are hot!' },
  { q: 'Is there a client you need to call next week?', f: 'Who? When?', voce: ['Yes. I’ll call … on …', 'Not really.'], ex: 'Yes. I’ll call a CFO on Monday. She has the proposal.' },
  { q: 'Your teacher says: “It’s cold in here.” What do you say?', f: 'A quick offer!', voce: ['I’ll close the window.', 'I’ll …'], ex: 'Oh, I’ll close the window!' },
  { q: 'What’s your plan for tonight? Decide now!', f: 'Pizza? Gym? A series?', voce: ['I think I’ll …'], ex: 'I think I’ll order a pizza and watch a game.' }
];

var DIALOGO = { rot: 'THE PIPELINE MEETING · BLUEPEAK SERVICES (FICTIONAL)', audio: 'dialogo',
  antes: { q: 'Your manager asks: “What’s the next step with this client?” What do you say?', h: 'I’ll call him on Monday. / I’ll send the proposal today.' },
  ouvir: 'Listen: what are Leo’s decisions? What is the next step for each client?',
  falas: [
    ['Sara', 'OK, Leo. The pipeline. Let’s start with Orla Beverages.'],
    ['Leo', 'The meeting with the CEO is on Thursday. It’s hot!'],
    ['Sara', 'Great. What about Costa Retail? Any news?'],
    ['Leo', 'No answer for two weeks. Hmm… {I’ll call} Mark on Monday.'],
    ['Sara', 'Good. And Atlas Motors? They asked for a discount.'],
    ['Leo', 'I can’t decide that. {Will} you {talk} to them?'],
    ['Sara', 'Yes, {I’ll talk} to their CFO. Next one: Delta Foods.'],
    ['Leo', 'They aren’t ready. They’re changing their ERP this year.'],
    ['Sara', 'So it’s “not yet”. {We won’t} count it this quarter.'],
    ['Leo', 'OK. {I’ll send} them an e-mail in January.'],
    ['Sara', 'Perfect. Four leads, four next steps. Coffee?'],
    ['Leo', 'Yes, please! {I’ll get} it.']],
  voz: { Sara: 'en-US-EmmaNeural', Leo: 'en-US-AndrewNeural' },
  perguntas: [
    { q: 'Why is Orla Beverages “hot”?', h: 'The meeting with the CEO is on Thursday.' },
    { q: 'What’s the next step with Costa Retail?', h: 'Leo will call Mark on Monday.' },
    { q: 'Who will talk to Atlas Motors? Why?', h: 'Sara. They asked for a discount, and Leo can’t decide that.' },
    { q: 'Is Delta Foods ready? What will Leo do?', h: 'No. They’re changing their ERP. He’ll send them an e-mail in January.' },
    { q: 'Who will get the coffee?', h: 'Leo!' }],
  fim: 'A decision now: I’ll + verb · We won’t … · Will you …?' };

var DESCOBRE = {
  pares: [
    { a: 'No answer? OK, {I’ll call} him on Monday.', b: 'No answer? OK, {I call} him on Monday.', q: 'Leo decides now. Which one is English?', r: 'A decision at this moment: <b>I’ll</b> + verb. “I call” is a routine.' },
    { a: 'I’ll {send} the e-mail today.', b: 'I’ll {to send} the e-mail today.', q: 'After will: which form?', r: 'After <b>will / ’ll</b>: the simple verb. No “to”.' },
    { a: 'I’ll {talk} to the CFO.', b: 'I’ll {talking} to the CFO.', q: 'Which one is right?', r: 'No -ing after will: I’ll talk, I’ll call.' },
    { a: 'We {won’t} count it this quarter.', b: 'We {don’t will} count it this quarter.', q: 'How do we say no?', r: 'Negative: <b>won’t</b> (= will not). Question: <b>Will</b> you…?' }],
  regra: [['DECISION NOW', 'OK, I’ll call him on Monday.'], ['SIMPLE VERB', 'I’ll send · she’ll talk'], ['NO', 'I won’t (will not) call this month.'], ['QUESTION', 'Will you talk to them?']],
  armas: [['DECIDE', 'OK, I call him tomorrow.', 'OK, I’ll call him tomorrow.', 'I’ll'], ['NO TO', 'I’ll to send it.', 'I’ll send it.', 'will + verb'], ['NO -ING', 'I’ll calling him.', 'I’ll call him.', 'simple verb'], ['WON’T', 'I don’t will go.', 'I won’t go.', 'won’t']] };

var SEPARA = { rot: 'THE PIPELINE · BLUEPEAK SERVICES', a: 'MOVE FORWARD', b: 'NOT YET', fim: '“Not yet” isn’t “no”. Every lead has a next step: “OK, I’ll…”.', itens: [
  ['Brava Foods: the CFO read the proposal and wants a meeting.', 'a', 'A meeting with the CFO: move forward. I’ll send three dates today.'],
  ['Lumen Logistics: no budget this year. Maybe in 2027.', 'b', 'No budget: not yet. I’ll call them in January.'],
  ['Serra Steel: Daniel asked for the contract.', 'a', 'He wants the contract! I’ll send it today.'],
  ['Costa Retail: no answer for two weeks.', 'b', 'No answer: not yet. I’ll call Mark on Monday.'],
  ['Pine Hotels: the HR director wants a demo next week.', 'a', 'A demo: move forward. I’ll prepare it with the team.'],
  ['Delta Foods: they’re changing their ERP this year.', 'b', 'A new ERP first: not yet. I’ll send an e-mail after their go-live.'],
  ['Atlas Motors: “We want to sign. Can you give us 5% off?”', 'a', 'They want to sign: move forward. I’ll talk to my manager about the 5%.'],
  ['Nova Textiles: “Send me something by e-mail.” No meeting.', 'b', 'No meeting, no real interest yet. I’ll send a short case and call in two weeks.']] };

var ESCOLHA = [
  { a: 'Call a lead today', b: 'Wait for the client’s e-mail', chips: ['I prefer … because …', 'I’ll … · I won’t …'], ex: 'I prefer to call today because I won’t wait two weeks for an e-mail.' },
  { a: 'Ten small leads', b: 'One big lead', chips: ['I prefer … because …', 'It’s safer · It’s bigger …'], ex: 'I prefer ten small leads because it’s safer. One big lead is stressful!' },
  { a: 'Update the CRM every day', b: 'Update the CRM on Fridays', chips: ['I prefer … because …', 'I’ll … · I won’t forget …'], ex: 'I prefer every day because I won’t forget the next steps.' }];
var ESCOLHA_FIM = 'Good sellers decide fast and give a reason: “I’ll call today because…”.';

var LEITURA = { rot: 'EASY READER · CHAPTER 6 · LEO’S FIRST BIG CLIENT (FICTION)', tipo: 'nota',
  antes: { q: 'Before: Mr. Duarte, the CEO of Orla Beverages, has to choose: Bluepeak or Kestrel Partners. Leo presents on Thursday, and he has five minutes. But he has forty slides! What will he do?', h: 'Free answer: “I think he’ll cut…”, “I think he’ll ask Sara for help.”' },
  texto: 'THREE SLIDES\nIt’s Tuesday. Leo has forty slides and five minutes.\n“OK,” he says. “{I’ll cut} the history of Bluepeak. Nobody needs it.” Slides 1 to 12: gone.\nSara comes in with two coffees. “How is it going?”\n“Badly. I still have twenty-eight slides.”\n“Show me.” Sara looks for two minutes. “The CEO wants three things: the problem, the price and the result. That’s it.”\n“Three slides?”\n“Three slides. And one story: Brava Foods, with the three numbers. {I’ll send} you the slide.”\n“Thank you! {I’ll write} the new slides tonight.”\nOn Wednesday, the presentation is ready: three slides, one story. Leo practices with his phone timer. Four minutes and fifty seconds. Perfect!\nThen his phone rings. It’s Nina.\n“Leo, a small change. The meeting isn’t at our office. It’s at the airport. Mr. Duarte has a flight at 11 a.m.”\n“At the airport?”\n“Yes, in the coffee shop. There’s no screen. {Will} you {bring} printed slides?”\nLeo looks at his three beautiful slides. He doesn’t have a printer at home.\n“OK,” he says. “{I’ll find} a printer.”',
  perguntas: [
    { q: 'What does Leo cut first?', h: 'The history of Bluepeak: slides 1 to 12.' },
    { q: 'What three things does the CEO want?', h: 'The problem, the price and the result.' },
    { q: 'What will Sara send?', h: 'The slide with the Brava Foods numbers.' },
    { q: 'What is the surprise at the end?', h: 'The meeting is at the airport, in a coffee shop. There’s no screen, and Leo doesn’t have a printer!' }],
  olha: 'Look at the highlighted words. Are they plans from last week, or decisions at that moment? What comes after ’ll?' };

var TRANSFORMA = { rot: 'PROBLEM → DECISION', fim: 'A problem, then a decision now: “OK, I’ll…”. Every lead gets a next step.', itens: [
  { de: 'The client didn’t answer my e-mail.', pista: 'call · tomorrow', para: 'OK, I’ll call him tomorrow.' },
  { de: 'The CFO wants the numbers.', pista: 'send · today', para: 'I’ll send the numbers today.' },
  { de: 'They want a discount. I can’t decide.', pista: 'talk · my manager', para: 'I’ll talk to my manager.' },
  { de: 'The client isn’t ready this year.', pista: 'not · call · this month', para: 'I won’t call this month. I’ll call in January.' },
  { de: 'The meeting is at 8 a.m. in Campinas.', pista: 'leave home · 6 a.m.', para: 'I’ll leave home at 6 a.m.' },
  { de: 'I need help with the demo.', pista: 'question · you · help me', para: 'Will you help me with the demo?' }] };

var CARTAO = { ph: 'Lead 1: … → move forward. I’ll …\nLead 2: … → not yet. I’ll …\nLead 3: … → …\nLead 4: … → I won’t … I’ll …', rot: 'My next steps',
  chips: ['MOVE FORWARD: ', 'NOT YET: ', 'I’ll call ', 'I’ll send ', 'I’ll visit ', 'I’ll talk to ', 'I won’t ', 'on Monday', 'this week', 'in January'],
  perg: ['YOUR PIPELINE', 'Four real leads (or invented). For each one: move forward or not yet, and the next step with I’ll.'],
  exemploRot: 'PIPELINE · LEO MARTINS', exemplo: [['ORLA BEVERAGES', 'hot · CEO meeting on Thursday'], ['COSTA RETAIL', 'no answer for 2 weeks'], ['ATLAS MOTORS', 'wants to sign · 5% off?'], ['DELTA FOODS', 'new ERP this year']],
  modelo: 'Orla Beverages: move forward. I’ll print the slides and meet the CEO on Thursday.<br>Costa Retail: not yet. I’ll call Mark on Monday.<br>Atlas Motors: move forward. I’ll talk to Sara about the 5%.<br>Delta Foods: not yet. I won’t call this year. I’ll send an e-mail in January.' };

var PODE = [
  'I can make a decision now: OK, I’ll call him on Monday.',
  'I can say no and ask: I won’t… Will you…?',
  'I can say if a lead moves forward or not yet, and why.',
  'I can write the next step for four leads.'
];
