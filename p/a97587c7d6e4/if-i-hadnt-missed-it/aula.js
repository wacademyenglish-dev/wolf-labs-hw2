/* ============================================================
   IF I HADN'T MISSED IT · B2 · UNIT 3 (CONDITIONALS: WHAT DIDN'T HAPPEN) · LIVE CLASS  16/10/2026
   Aula nova do livro B2 (no lugar de uma WOLFAITH), no motor do kit/revisao (REV.tipo = 'aula').
   Alvo: third conditional (If I hadn't missed the train, I wouldn't have met her) e mixed conditional
   (If I hadn't missed it, I wouldn't be here now / If I were braver, I would have said hello).
   O mundo: a Lena perdeu o trem das 7h42 dez anos atrás; uma corrente de acasos mudou a vida dela.
   ============================================================ */
var REV = { tipo: 'aula', nivel: 'B2', unidade: 3, titulo: ['If I Hadn’t', 'Missed It'], tema: 'Third and mixed conditionals: the chain of “what if”.',
  sub: 'Ten years ago Lena missed the 7:42 train by eight seconds. One small accident, and her whole life changed. Read her story, rebuild the chain of events, and imagine the other life.',
  placa: 'PLATFORM 2 · 7:42', lugarConversa: 'THE STATION CAFÉ', cor: '#f5a3d6', cor2: '#fbd6eb',
  chips: ['If I hadn’t…, I wouldn’t have…', '…I wouldn’t be here now', 'Your sliding doors'], botao: 'Start the lesson', nota: 'Past → past: If I hadn’t missed it, I wouldn’t have met her. Past → now: If I hadn’t missed it, I wouldn’t be here now.' };
var L = [
  { k: 'capa', est: null, img: 'capa' },
  { k: 'leitura', est: 'l', min: 10, img: 'conversa', rot: 'I · Eight Seconds', t: 'Lena tells her story.', p: 'Read the story out loud with your teacher. Then look closer.' },
  { k: 'ordem', est: 'f', min: 8, img: 'capa', rot: 'II · The Chain', t: 'One thing led to another.', p: 'Tap the six events in order. Then connect them with if sentences.' },
  { k: 'transforma', est: 'f', min: 9, img: 'conversa', rot: 'III · The Other Life', t: 'What if it hadn’t happened?', p: 'Read the fact. Use the clue. Say the conditional: past → past or past → now.' },
  { k: 'gx', est: 'f', min: 4, img: 'conversa', rot: 'IV · Seven Forty-Two Pairs', t: 'Four lines about the train Lena missed.', p: 'Read both out loud. Tap the right one. The other one gets crossed out.' },
  { k: 'conversa', est: 'o', min: 10, img: 'capa', rot: 'V · Your Sliding Doors', t: 'Your small moments that changed everything.', p: 'Answer, then ask the question back: “And you?”' }
];
var PORTAS = [];

var LEITURA = { rot: 'LENA, 34 · A SMALL STORY', tipo: 'nota',
  antes: { q: 'Can you think of a small accident that changed something in your life?', h: 'I lost my phone and met my best friend at the shop!' },
  texto: 'Ten years ago I missed the 7:42 train by eight seconds. I was furious.\nI went to the station café and the only free seat was next to a woman who was drawing buildings. Her name was Inês. She was an architect.\n{If I hadn’t missed} that train, {I wouldn’t have sat} next to her.\n{If she hadn’t been} drawing, {we wouldn’t have started} talking.\nShe told me about a job at her office. I applied, and I got it.\n{If I hadn’t got} that job, {I wouldn’t have moved} to Porto.\nAnd {if I hadn’t moved} to Porto, {I wouldn’t be} an architect now. {I wouldn’t live} by the sea.\nSo every morning I thank a train that left eight seconds too early.',
  perguntas: [
    { q: 'Why was Lena furious ten years ago?', h: 'She missed the 7:42 train by eight seconds.' },
    { q: 'Who did she meet, and where?', h: 'Inês, an architect, at the station café.' },
    { q: 'How did the job happen?', h: 'Inês told her about a job at her office. Lena applied and got it.' },
    { q: 'How is her life different now?', h: 'She’s an architect and she lives by the sea in Porto.' }],
  olha: 'Find the if sentences. Which ones talk only about the past? Which ones jump from the past to NOW?' };

var ORDEM = { rot: 'THE CHAIN OF EVENTS', pede: 'Tap the six events in order.',
  passos: ['Lena missed the 7:42 train.', 'She went to the station café.', 'She sat next to Inês, who was drawing.', 'Inês told her about a job.', 'Lena got the job and moved to Porto.', 'Today she’s an architect and lives by the sea.'],
  chips: ['First', 'So', 'There', 'Then', 'Because of that', 'Now'],
  modelo: 'If she hadn’t missed the train, she wouldn’t have gone to the café. If she hadn’t gone to the café, she wouldn’t have met Inês. If Inês hadn’t told her about the job, she wouldn’t have moved to Porto. And if she hadn’t moved, she wouldn’t be an architect now.' };

var TRANSFORMA = { rot: 'WHAT IF IT HADN’T HAPPENED?', fim: 'Six conditionals: three past → past, three past → now.',
  itens: [
    { de: 'She missed the train. She met Inês.', pista: 'If she hadn’t …, she wouldn’t have …', para: 'If she hadn’t missed the train, she wouldn’t have met Inês.' },
    { de: 'Inês was drawing. They started talking.', pista: 'If Inês hadn’t been …', para: 'If Inês hadn’t been drawing, they wouldn’t have started talking.' },
    { de: 'Lena applied. She got the job.', pista: 'If she hadn’t applied, …', para: 'If she hadn’t applied, she wouldn’t have got the job.' },
    { de: 'She moved to Porto. She lives by the sea now.', pista: 'past → now: … wouldn’t live …', para: 'If she hadn’t moved to Porto, she wouldn’t live by the sea now.' },
    { de: 'She studied architecture. She’s an architect today.', pista: 'past → now: … wouldn’t be …', para: 'If she hadn’t studied architecture, she wouldn’t be an architect today.' },
    { de: 'She isn’t shy. She talked to a stranger.', pista: 'now → past: If she were shy, …', para: 'If she were shy, she wouldn’t have talked to a stranger.' }] };

var CONVERSA = [
  { q: 'Tell me about a small accident that changed something for you.', f: 'A small accident: what changed?', voce: ['If I hadn’t …, I wouldn’t have …', 'One day I …'], ex: 'If I hadn’t lost my phone, I wouldn’t have met my best friend at the repair shop.' },
  { q: 'How did you meet your best friend or your partner?', f: 'Your best friend: how did you meet?', voce: ['We met …', 'If … hadn’t …'], ex: 'At university. If I hadn’t changed courses, we would never have met.' },
  { q: 'Is there a decision you are really happy about?', f: 'A good decision?', voce: ['I’m glad I …', 'If I hadn’t …, I wouldn’t be …'], ex: 'Learning English. If I hadn’t started, I wouldn’t have this job now.' },
  { q: 'Is there something you would have done differently?', f: 'Something different?', voce: ['If I had …, I would have …', 'I wish I had …'], ex: 'If I had traveled more in my twenties, I would have more stories now.' },
  { q: 'If you hadn’t chosen your job, what would you be?', f: 'Another job?', voce: ['I would be a …', 'because …'], ex: 'I would be a chef. I love cooking for people.' }
];

var PODE = [];

/* MECÂNICAS VARIADAS */
/* B2 · If I Hadn’t Missed It: leitura · ordem · transforma · conversa */

/* 10/11/2026 · AS EXPLICAÇÕES (kit/formatos3.js) · G3 · uma cena curta nova (k: gx) antes de conversa.
   Explicação 100% em inglês: see → notice → use (o aluno fala ou escreve uma frase dele no fim). */
var GX_EXPLICA = { formato: 'certoErrado', titulo: 'Right, not this. Tap the right one.', pares: [{ c: 'If I hadn’t missed the train, I wouldn’t have met him.', x: 'If I wouldn’t have missed the train, I wouldn’t have met him.', d: 'No would in the if part: <b>hadn’t missed</b>.' }, { c: 'If I hadn’t missed it, I wouldn’t be here now.', x: 'If I hadn’t missed it, I wouldn’t have been here now.', d: 'The result is now: <b>wouldn’t be</b>.' }, { c: 'If I were braver, I would have said hello.', x: 'If I would be braver, I would have said hello.', d: 'A fact about now: <b>were</b>.' }, { c: 'Lena should have left earlier.', x: 'Lena should had left earlier.', d: 'should + <b>have</b> + participle.' }], nota: 'The if part: <b>had + participle</b> (past) or <b>were</b> (now). The result: <b>would have</b> + participle (past) or <b>would be</b> (now). Never <b>would</b> in the if part.', uso: { p: 'Your turn. Tell the story of a small accident that changed your life. Say what would have happened if it hadn’t happened.', molde: ['If I hadn’t …, I wouldn’t have …', 'If I hadn’t …, I wouldn’t be …'], ex: 'If I hadn’t missed the bus, I wouldn’t have met my husband. If I hadn’t met him, I wouldn’t be here now.' } };
var R = R || {};
R.gx = function (c) { return cab(c) + FM.ex('gx_certo', GX_EXPLICA); };
