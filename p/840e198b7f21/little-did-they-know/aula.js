/* ============================================================
   LITTLE DID THEY KNOW · C1 · UNIT 4 (INVERSION) · LIVE CLASS  15/10/2026
   Aula nova do C1 no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: inversão depois de expressões negativas de MODO e REGRA: Little did they know…; At no time
   did…; Under no circumstances should…; On no account must…; In no way is…; Never before had…
   Dois mundos: a narrativa (little did they know, never before) e o aviso formal (under no
   circumstances, on no account). Armadilha: Little they knew; Under no circumstances you should.
   O mundo: o audioguia do museu de um farol (inventado) e o aviso de segurança da ilha.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'C1', unidade: 4, titulo: ['Little Did', 'They Know'], tema: 'Inversion for stories and strict rules.',
  sub: 'Two places where inversion lives: a story with a twist (“Little did they know…”) and a very serious sign (“Under no circumstances should you…”). Visit a lighthouse museum and learn both.',
  placa: 'THE LIGHTHOUSE MUSEUM', lugarConversa: 'THE KEEPER’S ROOM', cor: '#8aa8d8', cor2: '#c6d4ee',
  chips: ['Little did they know', 'At no time', 'Under no circumstances'], botao: 'Start the lesson', nota: 'Same grammar, two moods: a twist in a story, or a rule nobody may break.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'capa', rot: 'I · The Audio Guide', t: 'Room 3: the night of 1911.', p: 'Read it out loud, like a museum guide. Then look closer.' },
  { k: 'descobre', est: 'f', min: 9, img: 'conversa', rot: 'II · Story or Sign?', t: 'Where does the verb go?', p: 'Compare A and B. Which one sounds like a story, and which like a law?' },
  { k: 'rapido', est: 'f', min: 6, img: 'conversa', rot: 'III · Speed Round', t: 'Sixty seconds. How many can you do?', p: 'Answer fast. Your teacher taps Right or Pass. Then try to beat your score.' },
  { k: 'erros', est: 'f', min: 7, img: 'capa', rot: 'IV · Find the Mistakes', t: 'Something is wrong here.', p: 'Read it. Find the mistakes, say the right form, then tap.' },
  { k: 'cadeira', est: 'o', min: 8, img: 'conversa', rot: 'V · The Hot Seat', t: 'Now YOU ask me about my life.', p: 'Ask your teacher. Your teacher answers with a little drama.' }
];
var PORTAS = [];

var LEITURA = { rot: 'AUDIO GUIDE · ROOM 3 · THE NIGHT OF 1911', tipo: 'fala',
  antes: { q: 'What do you imagine the life of a lighthouse keeper was like, a hundred years ago?', h: 'Lonely, cold, a lot of responsibility: the ships depended on the light.' },
  texto: 'GUIDE: In March 1911, a small fishing boat left the harbour at dusk. {Little did the crew know} that a storm was coming.\nGUIDE: The keeper, Thomas Bell, saw the clouds at seven. {At no time did he leave} the lamp that night.\nGUIDE: {Never before had the island seen} waves like these. The boat hit the rocks at midnight, but all six men swam to the light.\nGUIDE: {In no way was it} an easy rescue. Bell pulled them in with a rope, one by one.\nGUIDE: Please read the sign before you leave: {Under no circumstances should visitors climb} the outside stairs, and {on no account must the lamp room door be left} open.',
  perguntas: [
    { q: 'What didn’t the fishermen know when they left?', h: 'That a storm was coming.' },
    { q: 'What did the keeper do all night?', h: 'He stayed with the lamp: he never left it.' },
    { q: 'How did the six men survive?', h: 'They swam to the light, and Bell pulled them in with a rope.' },
    { q: 'What are the two museum rules?', h: 'Never climb the outside stairs, and never leave the lamp room door open.' }],
  olha: 'Find six phrases that start with a negative idea. Which three tell a story? Which two are rules?' };

var DESCOBRE = {
  pares: [
    { a: 'The crew {had no idea} a storm was coming.', b: '{Little did the crew know} a storm was coming.', q: 'Same fact. Which one is a storyteller’s line, and why?', r: 'B. Little did they know = they had no idea (and we, the audience, do know). It creates suspense, like in films.' },
    { a: '{At no time did he leave} the lamp.', b: '{At no time he left} the lamp.', q: 'One is wrong. Which one?', r: 'B. After At no time: auxiliary + subject + verb (did he leave).' },
    { a: 'Visitors {should never} climb the stairs.', b: '{Under no circumstances should visitors climb} the stairs.', q: 'Where would you read B? How does it feel?', r: 'On an official sign or a contract. Very strict: there is no exception at all.' },
    { a: 'The island {had never seen} such waves.', b: '{Never before had the island seen} such waves.', q: 'What does B emphasize?', r: 'That it was the first time in history. The inversion makes it dramatic, perfect for a guide or a documentary.' }],
  regra: [['LITTLE DID…', 'Little did they know a storm was coming. (a twist in a story)'], ['AT NO TIME / NEVER BEFORE', 'At no time did he leave. Never before had they seen…'], ['UNDER NO CIRCUMSTANCES / ON NO ACCOUNT', 'Under no circumstances should you… On no account must… (strict rules)'], ['IN NO WAY', 'In no way was it easy. (= not at all)']],
  armas: [
    ['LITTLE', 'Little they knew about the storm.', 'Little <b>did they know</b> about the storm.', 'Little + did + subject + know.'],
    ['RULE', 'Under no circumstances you should open it.', 'Under no circumstances <b>should you</b> open it.', 'Auxiliary first, then subject.'],
    ['AT NO TIME', 'At no time he said sorry.', 'At no time <b>did he say</b> sorry.', 'did + subject + base verb.'],
    ['NEVER BEFORE', 'Never before I had seen it.', 'Never before <b>had I seen</b> it.', 'had + subject + participle.']] };

var PODE = [];

/* MECÂNICAS VARIADAS */
/* C1 · Little Did They Know: leitura · descobre · rapido · erros · cadeira */
var RAPIDO = { seg: 60, itens: [['Little ___ they know. (aux)', 'did'], ['At no time ___ he leave the lamp.', 'did'], ['Under no circumstances ___ you open this door.', 'should'], ['Never before ___ I seen such waves. (had / did)', 'had'], ['In no way ___ it easy. (be, past)', 'was'], ['On no account ___ visitors touch the lamp.', 'must / should'], ['Little did she ___ (realize)…', 'realize'], ['At no time ___ we told. (passive, past)', 'were'], ['They had no idea. → ___ did they know.', 'Little'], ['Visitors must never smoke. → On no ___ must visitors smoke.', 'account']] };
var ERROS = { tipo: 'nota', rot: 'SIGN · LAMP ROOM · PLEASE READ', partes: ['Welcome to the lamp room. Under no circumstances ', ['visitors should', 'should visitors', 'should + subject.'], ' touch the lamp. On no account ', ['children must', 'must children', 'must + subject.'], ' be left alone on the stairs. At no time ', ['the door is', 'is the door', 'is + subject.'], ' to be left open. Little ', ['visitors know', 'do visitors know', 'do + subject + know.'], ' that the lamp is over 100 years old. Never before ', ['the museum has', 'has the museum', 'has + subject.'], ' had so many visitors. In no way ', ['this is', 'is this', 'is + subject.'], ' a playground. Thank you!'] };
var CADEIRA = { itens: [
  { alvo: 'Ask me about a time I had no idea what was coming.', dica: 'Tell me about a time you had no idea what was coming.', resp: 'My first day at work. Little did I know I would stay there ten years.' },
  { alvo: 'Ask me about a rule I would never break.', dica: 'Is there a rule you would never break?', resp: 'Under no circumstances would I lie to my students.' },
  { alvo: 'Ask me about something I have never seen before.', dica: 'What had you never seen before your last trip?', resp: 'Snow! Never before had I seen snow.' },
  { alvo: 'Ask me if a difficult thing was easy.', dica: 'Was it easy to learn English?', resp: 'In no way was it easy. But it was worth it.' },
  { alvo: 'Ask me if I ever thought of giving up.', dica: 'Did you ever think of giving up?', resp: 'At no time did I think of giving up. Well, maybe once!' }] };
