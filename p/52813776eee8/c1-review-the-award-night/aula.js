/* ============================================================
   REVIEW · C1 · UNIT 3 · THE AWARD NIGHT · LIVE CLASS  15/10/2026
   Só os dados: o motor é o kit/revisao/revisao.js. Mecânicas: rapido · leitura · transforma · conversa · pode.
   Unidade 3 (Ênfase): clivadas com it (It was my mother who…) e com what (What matters is…), fronting
   (This I will never forget), o do enfático (I do believe), all / the only thing / the reason why.
   A leitura: o discurso de uma cozinheira (inventada) ao receber um prêmio; depois o aluno transforma
   frases neutras em frases com ênfase e conversa sobre a própria vida, com ênfase.
   ============================================================ */
var REV = { nivel: 'C1', unidade: 3, titulo: ['The Award', 'Night'], tema: 'Emphasis', placa: 'BEST NEW RESTAURANT', lugarConversa: 'AFTER THE GALA', cor: '#e8c070', cor2: '#f4e0b8',
  sub: 'Unit 3 review. Tonight a small restaurant wins the big award, and the chef has thirty seconds to thank everyone. Every word in her speech matters.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'I · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'leitura', est: 'l', min: 9, img: 'capa', rot: 'II · The Speech', t: 'Thirty seconds on stage.', p: 'Read the speech out loud, with feeling. Answer the questions. Then find the emphasis.' },
  { k: 'transforma', est: 'f', min: 8, img: 'conversa', rot: 'III · Turn On the Spotlight', t: 'Neutral → emphatic.', p: 'Read the neutral sentence. Use the clue. Say it with emphasis.' },
  { k: 'conversa', est: 'o', min: 8, img: 'conversa', rot: 'IV · After the Gala', t: 'Your life, with emphasis.', p: 'Answer with a cleft or fronting. Then ask the question back.' },
  { k: 'gx', est: 'f', min: 3, img: 'conversa', rot: 'V · The Spotlight Card', t: 'Four lines from Unit 3.', p: 'Read one line at a time. Then keep the card in the corner for the last page.' },
  { k: 'pode', est: 'f', min: 4, img: 'capa', rot: 'VI · I Can', t: 'Unit 3: what can you do now?', p: 'Read each line out loud. Tap the ones you can do. Your teacher confirms.' }
];
var PORTAS = [];

var LEITURA = { rot: 'THE CITY FOOD AWARDS · ACCEPTANCE SPEECH', tipo: 'fala',
  antes: { q: 'If you won an award tonight, who would you thank first? Why?', h: 'My family, probably. They supported me when nobody else did.' },
  texto: 'CHEF ROSA: Thank you. {What I want to say first} is: this is not my award.\nCHEF ROSA: {It was my mother who} taught me to cook, in a tiny kitchen with one pan.\nCHEF ROSA: {It wasn’t until} I lost my job in 2019 {that} I opened this place.\nCHEF ROSA: {All we had} was twelve chairs and a lot of courage.\nCHEF ROSA: {The reason why we survived} is our customers. {What matters} is not the stars. {What matters is} who you cook for.\nCHEF ROSA: {This night I will never forget}. And I {do} believe the best is still to come. Thank you!',
  perguntas: [
    { q: 'Who does Rosa say really deserves the award?', h: 'Not her: her mother, her team and her customers.' },
    { q: 'When did she open the restaurant, and why?', h: 'After she lost her job in 2019.' },
    { q: 'What did the restaurant have at the start?', h: 'Only twelve chairs and a lot of courage.' },
    { q: 'What matters most, for Rosa?', h: 'Who you cook for, not the stars.' }],
  olha: 'Find every sentence that puts one idea in the spotlight. Which ones start with It, What, All, The reason? Which one moves the object to the front?' };

var TRANSFORMA = { rot: 'NEUTRAL → EMPHATIC', fim: 'Six sentences with the light on the right word.',
  itens: [
    { de: 'My mother taught me to cook.', pista: 'It was …', para: 'It was my mother who taught me to cook.' },
    { de: 'Customers matter most.', pista: 'What matters …', para: 'What matters most is the customers.' },
    { de: 'I opened the restaurant only after I lost my job.', pista: 'It wasn’t until …', para: 'It wasn’t until I lost my job that I opened the restaurant.' },
    { de: 'We only had twelve chairs.', pista: 'All we …', para: 'All we had was twelve chairs.' },
    { de: 'I will never forget this night.', pista: 'This night …', para: 'This night I will never forget.' },
    { de: 'I believe the best is coming. (strong)', pista: 'I do …', para: 'I do believe the best is coming.' }] };

var CONVERSA = [
  { q: 'Who taught you something important? Answer with “It was … who…”.', f: 'Who taught you?', voce: ['It was my … who …', 'It wasn’t until … that …'], ex: 'It was my grandfather who taught me to fish, and to be patient.' },
  { q: 'What matters most to you in a job?', f: 'Most important in a job?', voce: ['What matters most is …', 'What I really need is …'], ex: 'What matters most is the people. What I really need is a good team.' },
  { q: 'Tell me about a day you will never forget.', f: 'A day you’ll never forget?', voce: ['That day I will never forget.', 'It was … that …'], ex: 'My graduation day I will never forget. It was raining, and nobody cared.' },
  { q: 'Is there something you do believe, even if people disagree?', f: 'Something you really believe?', voce: ['I do believe that …', 'What I believe is …'], ex: 'I do believe anyone can learn a language. Age is just an excuse.' }
];

var PODE = [
  'I can use it-clefts: It was my mother who taught me.',
  'I can use what-clefts: What matters is…, What I want to say is…',
  'I can use It wasn’t until… that…',
  'I can front an idea for emphasis: This I will never forget.',
  'I can use emphatic do and all / the reason why: I do believe it. All we had was…'
];

/* MECÂNICAS VARIADAS */
/* C1 R3: rapido · leitura · transforma · conversa */
var RAPIDO = { seg: 60, itens: [['It was my mother ___ taught me.', 'who'], ['___ matters is who you cook for.', 'What'], ['It wasn’t until 2019 ___ I opened it.', 'that'], ['All we had ___ twelve chairs. (be)', 'was'], ['The reason why we survived ___ our customers.', 'is / was'], ['I ___ believe it! (emphatic)', 'do'], ['She ___ call me, in the end! (emphatic, past)', 'did'], ['It ___ the music that I loved. (be, past)', 'was'], ['What I need ___ a holiday.', 'is'], ['This night I ___ never forget.', 'will']] };

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G13 · uma cena curta nova (k: gx) antes de pode.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'regraBolso', titulo: 'Four lines to keep from Unit 3.', rotulo: 'Emphasis', linhas: ['<b>It was</b> my mother <b>who</b> taught me to cook. · <b>It is</b> patience <b>that</b> matters.', '<b>What</b> matters <b>is</b> the people. · <b>What</b> I love <b>is</b> the smell.', '<b>This</b> I will never forget. · <b>I do</b> believe it. (do = stronger)', '<b>All I want is</b> time. · <b>The only thing</b> I miss <b>is</b> home. · <b>The reason I</b> left <b>was</b> …'], uso: { p: 'Your turn. You win an award. Thank someone, with emphasis, in two sentences.', molde: ['It was … who …', 'What I will never forget is …'], ex: 'It was my mother who taught me to cook. What I will never forget is the smell of her kitchen.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_bolso', GX_EXPLICA); };
